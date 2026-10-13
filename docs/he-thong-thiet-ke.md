# Hệ thống thiết kế — Figma, token, breakpoint, trạng thái

*Lập 13/10/2026 · chuyển từ `CLAUDE.md` §3–§6 (bản 04/10) · vai trò: DESIGN SYSTEM (bảng ánh xạ: `docs/README.md`). Bản chi tiết đã khoá (24/09): `docs/_chung/website-agent-design-spec.md`.*

**Luật số 1:** code và tài liệu mâu thuẫn → **Figma thắng**. Figma và quyết định đã ghi mâu thuẫn → **hỏi Thắng**.

---

## 1. File Figma `YmcXg1lQqGVjQOFrVtdOgW` — 6 page

| Page | Node | Tra gì ở đây |
| --- | --- | --- |
| **`Component`** | `660:2939` | **Toàn bộ main component** |
| `UI` | `191:812` | **Trang và màn** — 7 trang dịch vụ, trang chủ, Liên hệ, Form States, công cụ chẩn đoán, Remote Office |
| `Icon` | `6:20457` | Thư viện icon Lucide. Giữ nguyên, đừng động vào |
| `Style guide` | `1:217` | Trang tài liệu hệ thống. Không xuất ra web |
| `Component (cũ – không dùng)` | `8:12070` | **Kho cũ đã đóng — bỏ qua hoàn toàn** |
| `REF` | `566:3679` | Tham khảo |

⚠️ Kho cũ có `Text field` `58:5013` **trùng tên nhưng sai**. Cái đúng là `588:6238` ở page `Component`.

**Đọc Figma:** dùng Dev Mode / `get_design_context` trước (CSS do Figma sinh), Plugin API chỉ để tra thứ Dev Mode không nói (số đo, danh sách variant). Kiểm một thuộc tính thì đọc **cả giá trị lẫn styleId** (`DEC-022`).

**Đồng bộ ngược** (Thắng chốt điều gì mà Figma chưa có → agent vẽ vào Figma): luật ở `docs/quy-trinh-lam-viec.md` §3. Nhật ký component dùng chung: `docs/nhat-ky-figma-chung.md`.

## 2. Token — `src/styles/tokens.css`

Sinh từ biến Figma (collection `Global Tokens` + bộ `Trụ` 8 mode). **Đổi giá trị → đổi Figma trước, rồi sửa file.**

| Luật | Chi tiết |
| --- | --- |
| ⛔ **Không tự chế giá trị mới** | Không tạo màu / chữ / khoảng cách mới. Cần khoảng không có trong thang `--s-*`? **Hỏi.** Đừng viết `padding: 18px` |
| ⛔ **Không hardcode** | `#0F6BB0` thay vì `var(--blue-600)` là lỗi. Mọi màu, khoảng cách, bo góc qua biến |
| ⛔ **Không có trắng thô** (`DEC-035`, `DEC-035-A`) | Chuỗi `#FFFFFF`, `#fff`, `white` không được xuất hiện. Trắng đục → `var(--gray-50)` (`#F8F8F8`) · trắng trong → `var(--opacity-white)` (`#FFFFFF @ 15%`). **Ngoại lệ duy nhất:** màu bóng trong `--shadow-drop-inner` |
| Kiểm được bằng máy | `pnpm kiem-tra` quét cả 3 luật trên |

**Blur:** số trong Figma gấp **đôi** số CSS (Figma 24 → `blur(12px)`). Tên token theo số Figma, giá trị đã quy đổi: `--blur-100: 50px` = Figma `BackgroundBlur/Progressive/100` (header, 13/10).

**Màu trụ:** mỗi trang dịch vụ một bộ 3 màu `--page-<trụ>-dam/-trung/-nhat`, chọn qua `data-pillar` trên `<html>` (`BaseLayout.astro`).

## 3. Thang chữ (`DEC-024`, `DEC-036`)

Hai họ chữ, không có chữ mono:

- **Be Vietnam Pro** — `display-1`, `display-2`, `body-lg`, `body`, `caption`, `label`
- **Chakra Petch** — `H-1`, `H-2`, `H-3`

Style `label` trước tên `label-mono` — tên cũ nói dối font thật (Be Vietnam Pro Light 11px).

## 4. Ngôn ngữ tương tác — dùng chung mọi component (`DEC-014`, `DEC-015`)

| Trạng thái | Cảm giác | Token |
| --- | --- | --- |
| `Hover` | nổi lên | `--shadow-inner` |
| `Active` | chìm xuống | `--shadow-inner-press` |
| `Focus` | quầng sáng trắng | `--shadow-drop-inner` |
| `Disabled` | đổi màu sang `--gray-700`, **giữ `opacity: 1`** | — |

**Quầng sáng thuộc về Focus và chỉ Focus.** Đừng mượn cho Hover. (Ngoại lệ đang treo: thẻ gói — `DEC-090`, `docs/van-de-da-biet.md`.)

## 5. Nút — chọn cái nào

| Component | Vai trò | Dùng ở |
| --- | --- | --- |
| **Button 1** `519:3354` | Nút điều hướng chính — luôn là «liên hệ». Nền sáng chữ đen, viền mảnh + 4 góc vuông | Trang chủ, Liên hệ |
| **Button 2** `26:2182` | CTA chuyển đổi — đăng ký, chọn gói, đặt lịch. Nút tối bo tròn | 7 trang dịch vụ, form, header («Liên hệ» mặc định `Active`, 05/10) |
| **Nav Button** `472:4918` | Mục trong menu header | Header |

Hai nút **không thay thế qua lại**. *(Kiểm kê 25/09 — chưa đối chiếu lại sau khi header dựng lại 05/10.)*

## 6. Breakpoint (`DEC-031`)

| Tên | Rộng | Cột | Gutter | Lề |
| --- | --- | --- | --- | --- |
| `sm` mobile | **375** | 4 | 16 | 16 |
| `md` tablet | **768** | 8 | 16 | 24 *(lưới Figma)* · **lề trang thật 40** (`--le-trang`, chốt 04/10) |
| `lg` desktop | **1280** | 12 | 20 | 32 |
| `xl` | 1440+ | 12 | 24 | 32 |

**Mobile là 375, không phải 390.** Thấy frame 390 → frame sót, báo, đừng dựng theo. Component ở màn nhỏ phải **đổi dạng**, không co lại đến mức vô dụng.

## 7. Chất lượng — mức sàn, không thương lượng

**WCAG 2.1 AA:**
- Tương phản **≥ 4.5:1** chữ thường, **≥ 3:1** chữ lớn.
- **Focus nhìn thấy được** ở mọi thứ bấm được — `global.css` đặt mức sàn; component ghi đè được nhưng không được bỏ.
- Vùng chạm **≥ 44px** trên mobile.
- `alt` cho ảnh mang thông tin; ảnh trang trí `alt=""`.
- Tôn trọng `prefers-reduced-motion` — đã xử lý trong `reset.css`.

Sai lệch có chủ ý (QA **không** báo FAIL): `docs/van-de-da-biet.md` §1.

**Bốn trạng thái** cho khu vực lấy dữ liệu: Loading → Empty (có lối thoát) → Error (nói rõ hỏng gì) → Not found. Ở v1 chỉ **form** cần: `Idle` → `Submitting` → `Success` / `Error` — thiết kế ở section `Form States` `645:3184`.

## 8. Hình ảnh

Ưu tiên **SVG / CSS** hơn file ảnh. Cần ảnh thật → **WebP / AVIF**. Hiệu ứng nền (gradient, quầng sáng, `Planet`, `Milkyway`) dựng bằng CSS/SVG — đã chốt.
