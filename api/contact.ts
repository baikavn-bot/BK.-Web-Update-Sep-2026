/**
 * NHẬN FORM LIÊN HỆ
 * =================
 *
 * File này KHÔNG chạy trên trình duyệt. Nó chạy trên máy chủ của Vercel,
 * mỗi lần có người bấm "liên hệ" trên trang /lien-he.
 *
 * Vì sao phải có nó: website là trang TĨNH — chỉ có file HTML gửi cho
 * trình duyệt, không có gì chạy ngầm để nhận dữ liệu và gửi mail. Thư mục
 * `api/` ở gốc repo là ngoại lệ mà Vercel tự nhận ra và biến thành một
 * hàm nhỏ chạy trên máy chủ ("serverless function" — hàm chỉ thức dậy khi
 * có người gọi, xong việc thì ngủ lại, không tốn tiền lúc không ai dùng).
 *
 * Phần còn lại của website vẫn tĩnh nguyên. Astro vẫn `output: 'static'`,
 * vẫn không có adapter — đúng DEC-001.
 *
 * ──────────────────────────────────────────────────────────────────────
 * CẦN CÀI GÌ TRƯỚC KHI CHẠY THẬT — làm trên trang Vercel, KHÔNG làm ở đây
 * ──────────────────────────────────────────────────────────────────────
 * Vercel → dự án → Settings → Environment Variables → thêm 3 biến:
 *
 *   RESEND_API_KEY   khoá lấy ở resend.com (bắt đầu bằng "re_")
 *   CONTACT_TO       địa chỉ nhận thư, ví dụ baika.vn@gmail.com
 *   CONTACT_FROM     địa chỉ đứng tên gửi, ví dụ lienhe@baika.vn
 *
 * ⛔ TUYỆT ĐỐI không viết khoá vào file này, vào comment, hay dán vào chat.
 *    File nằm trong Git — viết vào đây là lộ vĩnh viễn, xoá commit cũng
 *    không cứu được. Xem CLAUDE.md mục 9.
 *
 * ⚠️ Resend bắt buộc xác minh tên miền trước khi cho gửi từ @baika.vn.
 *    Chưa xác minh xong thì tạm để CONTACT_FROM = onboarding@resend.dev
 *    (địa chỉ thử nghiệm của họ) — gửi được ngay nhưng chỉ gửi về đúng
 *    email đã đăng ký tài khoản Resend.
 */

/* Kiểu dữ liệu tối giản, tự khai báo — để không phải cài thêm thư viện
   chỉ vì vài dòng kiểu. Vercel truyền vào đúng hai thứ này. */
interface Req {
  method?: string;
  body?: unknown;
}
interface Res {
  status(code: number): Res;
  json(body: unknown): void;
}

/** Cắt bớt và làm sạch một ô nhập. */
const clean = (v: unknown, max: number): string =>
  typeof v === 'string' ? v.trim().slice(0, max) : '';

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const phoneOk = (v: string) => /^(\+84|0)[\s.-]?\d(?:[\s.-]?\d){7,9}$/.test(v);

/** Chặn chèn dòng vào tiêu đề thư (header injection). */
const oneLine = (v: string) => v.replace(/[\r\n]+/g, ' ');

export default async function handler(req: Req, res: Res): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Chỉ nhận POST' });
    return;
  }

  const body = (typeof req.body === 'object' && req.body !== null ? req.body : {}) as Record<string, unknown>;

  // Bẫy spam: ô `website` ẩn khỏi người thật. Có chữ trong đó = máy tự động.
  // Trả về 200 như thể đã gửi — để máy spam không biết mình bị chặn.
  if (clean(body.website, 200)) {
    res.status(200).json({ ok: true });
    return;
  }

  const ten = clean(body.ten, 120);
  const email = clean(body.email, 200);
  const sdt = clean(body.sdt, 40);
  const mota = clean(body.mota, 4000);
  const dongy = body.dongy === 'on' || body.dongy === true || body.dongy === 'true';

  // Kiểm lại trên máy chủ. Kiểm ở trình duyệt là để người dùng thấy lỗi
  // sớm; nó KHÔNG phải lớp bảo vệ — ai cũng gửi thẳng vào đây được.
  const loi: string[] = [];
  if (!ten) loi.push('Thiếu tên');
  if (!emailOk(email)) loi.push('Email không hợp lệ');
  if (!phoneOk(sdt)) loi.push('Số điện thoại không hợp lệ');
  if (!dongy) loi.push('Chưa đồng ý xử lý thông tin');

  if (loi.length) {
    res.status(400).json({ error: loi.join(' · ') });
    return;
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;

  if (!key || !to || !from) {
    // Nói rõ là lỗi CÀI ĐẶT, không phải lỗi của người gửi.
    console.error('Thiếu biến môi trường: RESEND_API_KEY / CONTACT_TO / CONTACT_FROM');
    res.status(500).json({ error: 'Máy chủ chưa được cấu hình' });
    return;
  }

  const noiDung = [
    `Tên:            ${ten}`,
    `Email:          ${email}`,
    `Số điện thoại:  ${sdt}`,
    '',
    'Mô tả vấn đề:',
    mota || '(để trống)',
    '',
    `Đã đồng ý xử lý thông tin: có`,
    `Nhận lúc: ${new Date().toISOString()}`,
  ].join('\n');

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        // Trả lời thẳng vào mail là trả lời đúng cho khách, không phải cho hệ thống.
        reply_to: email,
        subject: oneLine(`[baika.vn] Liên hệ mới — ${ten}`),
        text: noiDung,
      }),
    });

    if (!r.ok) {
      const chiTiet = await r.text();
      console.error('Resend trả lỗi', r.status, chiTiet);
      res.status(502).json({ error: 'Không gửi được thư' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (e) {
    console.error('Lỗi khi gọi Resend', e);
    res.status(502).json({ error: 'Không gửi được thư' });
  }
}
