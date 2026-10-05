/**
 * NHẬN KẾT QUẢ 5 CÔNG CỤ CHẨN ĐOÁN → GỬI MAIL VỀ BAIKA
 * =====================================================
 *
 * Giống `api/contact.ts` (đọc comment ở đó để hiểu «serverless function» là gì):
 * chạy trên máy chủ Vercel, KHÔNG chạy trên trình duyệt, KHÔNG lưu gì — chỉ
 * chuyển kết quả thành một lá thư gửi về hộp thư BAIKA qua Resend.
 *
 * Sếp chốt 05/10/2026: «tạm thời gửi mail» — chưa cần kho lưu dữ liệu.
 * (Bản cũ baika.vn gửi về máy chủ riêng `/api/v1/public/assessments`; v2 không có.)
 *
 * Dùng LẠI đúng 3 biến môi trường của form Liên hệ — không cần cài thêm gì:
 *   RESEND_API_KEY · CONTACT_TO · CONTACT_FROM
 *
 * ⛔ Không viết khoá vào file này. Xem CLAUDE.md mục 9.
 *
 * Điểm số do trình duyệt tính rồi gửi lên. Máy chủ KHÔNG tính lại — lá thư chỉ
 * để BAIKA đọc và gọi lại khách, không dùng để ra quyết định tự động. Ai cố tình
 * gửi điểm giả thì chỉ tự làm sai lá thư của chính mình.
 */

interface Req { method?: string; body?: unknown }
interface Res { status(code: number): Res; json(body: unknown): void }

/** Chỉ nhận đúng 5 công cụ này — mã lạ thì từ chối. */
const CONG_CU: Record<string, string> = {
  'ceo-blueprint': 'Business Blueprint Assessment (CEO Operating Blueprint)',
  finance: 'Finance Readiness Assessment',
  'remote-ops': 'Khảo sát Vận hành Doanh nghiệp (Remote Ops)',
  'ai-os': 'AI Readiness Diagnosis',
  marketing: 'Brand Diagnostic (Chẩn đoán thương hiệu)',
};

const clean = (v: unknown, max: number): string =>
  typeof v === 'string' ? v.trim().slice(0, max) : '';
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const phoneOk = (v: string) => /^(\+84|0)[\s.-]?\d(?:[\s.-]?\d){7,9}$/.test(v);
const oneLine = (v: string) => v.replace(/[\r\n]+/g, ' ');
const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export default async function handler(req: Req, res: Res): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Chỉ nhận POST' });
    return;
  }
  const body = (typeof req.body === 'object' && req.body !== null ? req.body : {}) as Record<string, unknown>;

  // Bẫy spam — như form Liên hệ: trả 200 để máy spam không biết mình bị chặn.
  if (clean(body.website, 200)) {
    res.status(200).json({ ok: true });
    return;
  }

  const congCu = clean(body.congCu, 40);
  const tenCongCu = CONG_CU[congCu];
  const maHoSo = clean(body.maHoSo, 12).replace(/[^A-Z0-9]/g, '');
  const ten = clean(body.ten, 120);
  const sdt = clean(body.sdt, 40);
  const email = clean(body.email, 200);
  const donvi = clean(body.donvi, 200);
  const trang = clean(body.trang, 200);
  const muc = clean(body.muc, 120);
  const goi = clean(body.goi, 120);
  const diemSo = Number(body.diem);
  const diem = Number.isFinite(diemSo) ? Math.max(0, Math.min(100, Math.round(diemSo))) : 0;
  const dongy = body.dongy === true || body.dongy === 'true' || body.dongy === 'on';

  // Chi tiết câu trả lời: tối đa 40 dòng, mỗi dòng [nhãn ≤ 200, nội dung ≤ 3000].
  const chiTiet: Array<[string, string]> = Array.isArray(body.chiTiet)
    ? body.chiTiet.slice(0, 40)
        .filter((d): d is [unknown, unknown] => Array.isArray(d) && d.length === 2)
        .map(([k, v]) => [clean(k, 200), clean(v, 3000)] as [string, string])
        .filter(([k]) => k)
    : [];

  const loi: string[] = [];
  if (!tenCongCu) loi.push('Công cụ không hợp lệ');
  if (!ten) loi.push('Thiếu họ tên');
  if (!phoneOk(sdt)) loi.push('Số điện thoại không hợp lệ');
  if (email && !emailOk(email)) loi.push('Email không hợp lệ');
  if (!dongy) loi.push('Chưa đồng ý xử lý thông tin');
  if (loi.length) {
    res.status(400).json({ error: loi.join(' · ') });
    return;
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;
  if (!key || !to || !from) {
    console.error('Thiếu biến môi trường: RESEND_API_KEY / CONTACT_TO / CONTACT_FROM');
    res.status(500).json({ error: 'Máy chủ chưa được cấu hình' });
    return;
  }

  const nhanLuc = new Intl.DateTimeFormat('vi-VN', {
    timeZone: 'Asia/Ho_Chi_Minh', dateStyle: 'full', timeStyle: 'short',
  }).format(new Date());

  const dongDau: Array<[string, string]> = [
    ['Công cụ', tenCongCu],
    ['Điểm', `${diem}/100 — ${muc || '(không rõ)'}`],
    ['Gói / lộ trình đề xuất', goi || '(không rõ)'],
    ['Họ tên', ten],
    ['Số điện thoại', sdt],
    ['Email', email || '(để trống)'],
    ['Doanh nghiệp', donvi || '(để trống)'],
    ...(maHoSo ? [['Mã hồ sơ', maHoSo] as [string, string]] : []),
  ];

  const banChu = [
    `KẾT QUẢ CÔNG CỤ CHẨN ĐOÁN — ${tenCongCu}`,
    '='.repeat(40),
    '',
    ...dongDau.map(([k, v]) => `${k}: ${v}`),
    '',
    'CHI TIẾT CÂU TRẢ LỜI',
    '-'.repeat(40),
    ...chiTiet.map(([k, v]) => `${k}:\n  ${v.replace(/\n/g, '\n  ')}\n`),
    '-'.repeat(40),
    'Điểm là kết quả tự đánh giá của khách, tính tự động — chỉ để tham khảo.',
    'Khách đã đồng ý để BAIKA liên hệ tư vấn theo chính sách bảo mật.',
    `Nhận lúc: ${nhanLuc} (giờ Việt Nam)`,
    `Gửi từ: ${trang || '(không rõ trang)'}`,
  ].join('\n');

  // Mail HTML: bảng + style nội tuyến (lý do: xem api/contact.ts). Màu viết thẳng là
  // ngoại lệ đã ghi trong tools/kiem-tra/kiem-luat.mjs — ứng dụng mail không hiểu var(--...).
  const hang = (ds: Array<[string, string]>) => ds.map(([k, v]) => `
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #e3e3e3;color:#6d6d6d;font-size:13px;width:170px;vertical-align:top;">${esc(k)}</td>
          <td style="padding:10px 0;border-bottom:1px solid #e3e3e3;color:#1e1e1e;font-size:14px;vertical-align:top;white-space:pre-wrap;">${esc(v)}</td>
        </tr>`).join('');

  const banHtml = `<!doctype html>
<html lang="vi"><body style="margin:0;padding:24px;background:#f1f1f1;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#f8f8f8;border:1px solid #e3e3e3;border-radius:8px;">
    <tr>
      <td style="padding:20px 24px;background:#0d538b;border-radius:8px 8px 0 0;">
        <div style="color:#f8f8f8;font-size:18px;font-weight:bold;">BAIKA · Kết quả công cụ chẩn đoán</div>
        <div style="color:#d6ebfa;font-size:13px;padding-top:4px;">${esc(tenCongCu)} · ${diem}/100</div>
      </td>
    </tr>
    <tr><td style="padding:8px 24px 0;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%">${hang(dongDau)}</table></td></tr>
    <tr><td style="padding:20px 24px 0;color:#1e1e1e;font-size:15px;font-weight:bold;">Chi tiết câu trả lời</td></tr>
    <tr><td style="padding:0 24px 16px;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%">${hang(chiTiet)}</table></td></tr>
    <tr>
      <td style="padding:0 24px 24px;color:#6d6d6d;font-size:12px;line-height:18px;">
        Điểm là kết quả tự đánh giá của khách, tính tự động — chỉ để tham khảo.<br />
        Khách đã đồng ý để BAIKA liên hệ tư vấn theo chính sách bảo mật.<br />
        Nhận lúc: ${esc(nhanLuc)} (giờ Việt Nam) · Gửi từ: ${esc(trang || '(không rõ trang)')}
      </td>
    </tr>
  </table>
</body></html>`;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: `BAIKA Website <${from}>`,
        to: [to],
        // Có email thì bấm Trả lời là trả lời thẳng cho khách. Email không bắt buộc ở các công cụ này.
        ...(email ? { reply_to: email } : {}),
        subject: oneLine(`[baika.vn] Chẩn đoán ${tenCongCu} — ${ten} · ${diem}/100${maHoSo ? ` · ${maHoSo}` : ''}`),
        text: banChu,
        html: banHtml,
      }),
    });
    if (!r.ok) {
      console.error('Resend trả lỗi', r.status, await r.text());
      res.status(502).json({ error: 'Không gửi được thư' });
      return;
    }
    res.status(200).json({ ok: true });
  } catch (e) {
    console.error('Lỗi khi gọi Resend', e);
    res.status(502).json({ error: 'Không gửi được thư' });
  }
}
