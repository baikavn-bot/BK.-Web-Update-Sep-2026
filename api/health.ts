/**
 * TRANG TỰ KIỂM TRA — mở bằng trình duyệt: https://<tên-site>/api/health
 * ======================================================================
 *
 * Dùng khi form báo lỗi mà không rõ hỏng ở đâu. Mở đường dẫn trên, đọc
 * kết quả, đối chiếu bảng dưới đây:
 *
 *   ┌─ Trình duyệt báo 404 "NOT_FOUND"
 *   │     → Vercel KHÔNG dựng thư mục api/. Phần nhận form chưa tồn tại.
 *   │       (Nếu đang chạy `pnpm dev` ở máy thì luôn 404 — bình thường,
 *   │        vì thư mục api/ là tính năng của Vercel, Astro không biết.)
 *   │
 *   ├─ Thấy JSON, nhưng có biến nào ghi `false`
 *   │     → Biến môi trường đó CHƯA được đặt.
 *   │       Vercel → dự án → Settings → Environment Variables.
 *   │       Đặt xong phải **deploy lại** thì mới có hiệu lực.
 *   │
 *   └─ Thấy JSON, cả ba biến đều `true`
 *         → Phần nhận form đã sẵn sàng. Lỗi nằm chỗ khác — xem thông báo
 *           đỏ trên form, giờ nó nói rõ mã lỗi.
 *
 * ⛔ Trang này CHỈ trả về CÓ hay KHÔNG cho từng biến. Không bao giờ trả về
 *    giá trị thật của khoá. Đọc được trang này cũng không lấy được gì.
 */

interface Req {
  method?: string;
}
interface Res {
  status(code: number): Res;
  json(body: unknown): void;
}

export default function handler(_req: Req, res: Res): void {
  res.status(200).json({
    ok: true,
    ghiChu: 'Thư mục api/ đã được Vercel dựng. Ba dòng dưới cho biết biến môi trường đã đặt chưa.',
    bienMoiTruong: {
      RESEND_API_KEY: Boolean(process.env.RESEND_API_KEY),
      CONTACT_TO: Boolean(process.env.CONTACT_TO),
      CONTACT_FROM: Boolean(process.env.CONTACT_FROM),
    },
    thoiGian: new Date().toISOString(),
  });
}
