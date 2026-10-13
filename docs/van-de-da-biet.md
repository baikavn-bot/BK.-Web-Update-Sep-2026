# Vấn đề đã biết — sai lệch có chủ ý, lỗi treo, rủi ro

*Lập 13/10/2026 · vai trò: KNOWN ISSUES (bảng ánh xạ: `docs/README.md`). Việc chờ người quyết / chờ tới lúc nhắc nằm ở `docs/viec-cho.md` — ở đây chỉ trỏ số, không chép lại.*

## 1. Sai lệch có chủ ý — QA **không** báo FAIL

| Mã | Chỗ | Đo được | Ai chốt |
| --- | --- | --- | --- |
| `VD-001` | Tương phản nhãn 8 ô bento trang chủ | Chưa đo được — nền là gradient artwork | Thắng: chủ ý |
| *(chưa số, 27/09)* | Nhãn nhỏ `.goi__eyebrow` của thẻ gói khi sáng lên (nổi bật · focus · rê chuột), nằm trên vệt sáng góc trên trái | ≈ **2.4 : 1** (Figma ≈ 2.65 : 1) | Thắng: *«Nhãn không cần quá rõ, như vậy là đủ.»* |
| `VD-005` | Figma dùng `Focus` của Nav Button để đánh dấu trang hiện tại | Code tách: `aria-current="page"` cho trang hiện tại, `:focus-visible` cho bàn phím | — |

Danh sách `VD-001`…`VD-011` đầy đủ: `docs/_chung/website-agent-decisions.md`.

## 2. Code lệch Figma — đang để nguyên, chờ Thắng

| Việc | Figma | Code | Ở đâu |
| --- | --- | --- | --- |
| `DEC-090` quầng sáng thẻ gói | Ở **Hover** | Ở **Focus** | `docs/buoi-xem-figma.md` mục B |
| Chữ BAIKA chân trang | Mờ hơn | Rõ hơn | `docs/buoi-xem-figma.md` mục B |
| `Button 2` cỡ Lg tắt icon | Normal cao 46, Hover 48 | 48 mọi trạng thái | `docs/buoi-xem-figma.md` mục B |
| Nền nút «Chọn gói này» thẻ nổi bật | Gradient #000000 → #666666 (ngoài token) | Chỉ có bóng trong | `viec-cho` #8 |

## 3. Lỗi / thiếu treo trong hệ thống

- **`Button 1 · Active`** dùng `--shadow-inner-press` vốn thiết kế cho nút tối; trên nút sáng có thể quá nặng.
- **`Checkbox` `29:2685` chưa gán effect style** — đang dùng giá trị thô.
- **Chưa có spec animation** — chuyển động đang ở dạng ngụ ý (accordion, menu mở, hover bento). Build tự quyết thì phải ghi lại.
- **Header nền mờ (13/10)**: CSS không có blur «mờ dần» thật; đang dùng blur đều 50px + `mask-image`. Chữ ở giữa chiều cao header vẫn đọc được khá rõ — gần đúng, chưa bằng Figma Progressive.
- **Tên effect style Figma sai chính tả** (`Unifrom`, `Progessive`) — `viec-cho` #28.
- **Màn > 2560:** nội dung kéo dãn (thẻ gói, FAQ, form) — `viec-cho` #15.
- **Favicon + 3 ảnh logo cũ chưa xoá** — `viec-cho` #14.
- **`package.json` trên `main` khai `kiem-tra:uoc-tinh`** nhưng file chỉ có trên nhánh `remote-office` → chạy trên `main` báo `MODULE_NOT_FOUND`. Tự hết khi gộp Remote Office.

## 4. Figma — node chưa duyệt xoá, đừng dựng theo

- `Item Container` `273:358` — 0 instance, tên trục vẫn `Property 1` / `Variant2`.
- 3 frame nháp trên page `UI`: `Grid Container` `634:2882` · `Footer` `634:3080` · `Baika logo Test` `563:3678`.
- `Home/Services Card` có 2 biến thể trùng tên — `viec-cho` #11.

## 5. Rủi ro đã nhận diện

| Rủi ro | Mức | Ghi chú |
| --- | --- | --- |
| `api/` **chưa giới hạn số lần gửi** (rate limit — chặn một nguồn gửi liên tục). Chỉ có bẫy spam | 🟡 | Ai đó gọi thẳng `/api/contact`, `/api/chan-doan` hàng loạt → hết quota Resend Free, ngập hộp thư |
| Gói **Vercel Hobby** chỉ cho dùng phi thương mại | 🔴 chặn ra mắt | Chờ sếp duyệt Pro — `docs/chuyen-baika-vn.md` C1 |
| `baika.tech` (bản thử) đang mở cho Google | 🟡 | Thắng chốt 07/10: đặt `noindex` theo tên miền (header `X-Robots-Tag` trong `vercel.json`) — chưa làm |
| `sitemap.xml` sẽ liệt kê `/remote-office` khi gộp nhánh đó vào `main` | 🟡 | Trang này `noindex` + canonical `baika.website` → thêm vào danh sách bỏ qua của `sitemap.xml.ts` **trước khi gộp** |
| Nhánh `remote-office` sống lâu, lệch dần `main` | 🟡 | Kéo `main` vào định kỳ; lần gần nhất 07/10 |
| **Astro 4** đã cũ; Dependabot bỏ qua bản lớn | 🟢 | Nâng Astro 5 là việc riêng, có kế hoạch |
| Tài khoản quản lý repo / hosting | 🟡 | `viec-cho` #26 |
