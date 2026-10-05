// PHẦN CHẠY TRÊN TRÌNH DUYỆT — dùng chung cho 5 công cụ chẩn đoán.
// Chỉ có việc «bật/tắt màn hình, tô thanh điểm, kiểm ô nhập, gửi kết quả».
// Phép tính điểm KHÔNG nằm ở đây — xem kieu-a.ts · ai.ts · thuong-hieu.ts.

/** Hiện một màn (`data-man="<tên>"`), ẩn các màn khác, đưa người dùng lên đầu màn đó. */
export function hienMan(goc: HTMLElement, ten: string) {
  goc.querySelectorAll<HTMLElement>('[data-man]').forEach((m) => { m.hidden = m.dataset.man !== ten; });
  const man = goc.querySelector<HTMLElement>(`[data-man="${ten}"]`);
  if (man) veDauKhoi(man);
}

/** Đưa con trỏ vào tiêu đề ĐANG HIỆN đầu tiên của khối + cuộn lên đầu trang. */
export function veDauKhoi(khoi: HTMLElement) {
  // Chuyển con trỏ vào tiêu đề → trình đọc màn hình đọc ngay, bàn phím bắt đầu từ đây.
  const tieuDe = [...khoi.querySelectorAll<HTMLElement>('[data-tieu-de]')].find((el) => !el.closest('[hidden]'));
  tieuDe?.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}

/** Đổi chữ trên một nút Button 2 nằm trong `[data-nut="<tên>"]`. */
export function chuNut(goc: ParentNode, nut: string, chu: string) {
  const nhan = goc.querySelector<HTMLElement>(`[data-nut="${nut}"] .btn2__label`);
  if (nhan) nhan.textContent = chu;
}

/** Lấy thẻ <button> / <a> thật bên trong `[data-nut="<tên>"]`. */
export const nut = (goc: ParentNode, ten: string) =>
  goc.querySelector<HTMLButtonElement>(`[data-nut="${ten}"] .btn2`);

/** Tô thanh (tiến độ hoặc điểm). `tiLe` từ 0 đến 1. */
export function toThanh(ray: Element | null, tiLe: number) {
  const day = ray?.querySelector<HTMLElement>('.cc-ray__day');
  if (day) day.style.width = `${Math.max(0, Math.min(1, tiLe)) * 100}%`;
}

/** Vòng điểm 0–100: tô cung + ghi số ở giữa. */
export function toVong(vong: Element | null, diem: number) {
  if (!vong) return;
  vong.querySelector('.cc-vong__day')?.setAttribute('stroke-dasharray', `${diem} 100`);
  const so = vong.querySelector('.cc-vong__so b');
  if (so) so.textContent = String(diem);
}

/** Ghi chữ vào phần tử có `data-o="<tên>"` (o = ô hiển thị). */
export function ghi(goc: ParentNode, o: string, chu: string) {
  goc.querySelectorAll(`[data-o="${o}"]`).forEach((el) => { el.textContent = chu; });
}

// ─── Kiểm ô nhập — cùng luật với form Liên hệ (ContactForm.astro) ─────────
// Số điện thoại Việt Nam: 0 hoặc +84, rồi 8–10 chữ số; cho phép cách, chấm, gạch.
export const sdtDung = (v: string) => /^(\+84|0)[\s.-]?\d(?:[\s.-]?\d){7,9}$/.test(v.trim());
export const emailDung = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

/** Bật / tắt lỗi cho một ô (TextField / Checkbox có `data-field`). */
export function datLoi(goc: ParentNode, ten: string, loi: string | null) {
  const o = goc.querySelector<HTMLElement>(`[data-field="${ten}"]`);
  if (!o) return;
  const hint = o.querySelector<HTMLElement>('.field__hint, .check__hint');
  if (loi) {
    o.dataset.invalid = 'true';
    if (hint) { hint.textContent = loi; hint.hidden = false; }
  } else {
    delete o.dataset.invalid;
    if (hint) { hint.textContent = ''; hint.hidden = true; }
  }
}

export const giaTri = (goc: ParentNode, ten: string) =>
  (goc.querySelector<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(`[name="${ten}"]`)?.value ?? '').trim();

/** Nhãn đang hiện của ô chọn (<select>) — để ghi vào mail chữ dễ đọc thay cho mã. */
export const nhanDaChon = (goc: ParentNode, ten: string) => {
  const s = goc.querySelector<HTMLSelectElement>(`select[name="${ten}"]`);
  return s && s.value ? (s.selectedOptions[0]?.textContent ?? '').trim() : '';
};

/** Mã hồ sơ 6 ký tự — hiện cho khách và ghi vào tiêu đề mail, để hai bên khớp khi gọi lại. */
export function taoMaHoSo() {
  const bo = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';     // bỏ I, O, 0, 1 cho khỏi nhầm khi đọc qua điện thoại
  return Array.from({ length: 6 }, () => bo[Math.floor(Math.random() * bo.length)]).join('');
}

// ─── Gửi kết quả về hộp thư BAIKA ──────────────────────────────────────────
export interface GoiKetQua {
  /** Mã công cụ: ceo-blueprint · finance · remote-ops · ai-os · marketing */
  congCu: string;
  maHoSo: string;
  ten: string;
  sdt: string;
  email: string;
  donvi: string;
  dongy: boolean;
  /** Bẫy spam — luôn rỗng với người thật. */
  website: string;
  /** Trang gửi (đường dẫn). */
  trang: string;
  diem: number;
  muc: string;
  goi: string;
  /** Các dòng ghi vào mail: [nhãn, giá trị]. */
  chiTiet: Array<[string, string]>;
}

/**
 * Gửi lên `/api/chan-doan`. KHÔNG bao giờ ném lỗi — trả về câu báo để hiện cho khách.
 * Như v1: gửi được hay không thì khách VẪN xem được kết quả.
 */
export async function guiKetQua(goi: GoiKetQua): Promise<{ ok: boolean; thongBao: string }> {
  const goiLai = ' Kết quả vẫn hiển thị bên dưới — gọi 0905 247 365 nếu cần tư vấn ngay.';
  try {
    const res = await fetch('/api/chan-doan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(goi),
    });
    if (res.ok) return { ok: true, thongBao: 'Kết quả đã được gửi tới BAIKA. BAIKA sẽ liên hệ với bạn để trao đổi sâu hơn.' };
    let chiTiet = '';
    try { chiTiet = ((await res.json()) as { error?: string })?.error ?? ''; } catch { /* không phải JSON */ }
    console.error('[công cụ chẩn đoán] HTTP', res.status, chiTiet);
    const theoMa: Record<number, string> = {
      400: chiTiet || 'dữ liệu gửi lên chưa hợp lệ',
      404: 'chưa nối được tới máy chủ (bình thường nếu đang chạy thử bằng `pnpm dev`)',
      500: 'máy chủ chưa được cấu hình xong',
      502: 'dịch vụ gửi thư đang lỗi',
    };
    return { ok: false, thongBao: `Chưa gửi được kết quả tới BAIKA — ${theoMa[res.status] ?? `máy chủ trả mã ${res.status}`}.${goiLai}` };
  } catch (err) {
    console.error('[công cụ chẩn đoán] không gọi được /api/chan-doan', err);
    return { ok: false, thongBao: `Chưa gửi được kết quả tới BAIKA — mất kết nối mạng.${goiLai}` };
  }
}
