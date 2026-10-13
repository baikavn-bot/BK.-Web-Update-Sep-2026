# Mục lục quyết định `DEC-…` và sai lệch `VD-…`

*Lập 13/10/2026 · trích từ tiêu đề trong 3 file nhật ký **[xác minh: đếm 100 + 9 tiêu đề DEC]**. Đọc mục lục trước, mở file gốc khi cần lý do đầy đủ.*

| Số | Ở file |
| --- | --- |
| `DEC-001` → `DEC-092`, `VD-001` → `VD-011` | `website-agent-decisions.md` (quyển 1) |
| `DEC-093` → `DEC-100` | `website-agent-decisions-2.md` (quyển 2) |
| `DEC-102` | `dec-102-don-no-va-trang-ceo.md` |
| Quyết định từ 29/09 trở đi | **Không đánh số DEC nữa** — ghi theo trang: `docs/remote-office/SPEC-MASTER.md` §7, `docs/cong-cu-chan-doan/SPEC-MASTER.md` §2, `docs/viec-cho.md` («Đã xong / đã chốt»), `CHANGELOG.md` |

**Cột «Hiệu lực»:** chỉ ghi những mục **đã biết** bị thay / sửa / còn mở. Ô «—» = chưa thấy mục nào thay nó — **chưa rà lại từng mục với code hiện tại** *[suy luận]*. Nghi ngờ thì mở file gốc.

## Quyển 1 — nền tảng, design system, trang chủ, Liên hệ (21–25/09)

| Số | Quyết định | Hiệu lực |
| --- | --- | --- |
| DEC-001 | Production stack = Astro + TypeScript | — (Node: xem `.nvmrc`) |
| DEC-002 | Trang chủ có theme riêng, 7 trang con mỗi trang một màu | — |
| DEC-003 | Agent build, stack Astro | Thay bởi DEC-016 |
| DEC-004 | Bỏ mô hình 3D khỏi bản rebuild | — |
| DEC-005 | Đính chính — không cần token nền tối mới | — |
| DEC-006 | Thang chữ — display-2 nâng lên 48px | — |
| DEC-007 | Compliance Check 22/09 — PASS có điều kiện | Lịch sử |
| VD-001 | Tương phản nhãn 8 ô bento — sai lệch có chủ ý | **Còn** — QA không báo FAIL |
| DEC-008 | Đóng C5-a, C5-b — xác minh trên Figma 22/09 | Lịch sử |
| DEC-009 | GitHub & Vercel là điều kiện theo phase, không chặn Discovery | Lịch sử |
| DEC-010 | `ServiceLinkCard` — xác minh, một chỗ lệch | — |
| DEC-011 | Đính chính — spec tự mâu thuẫn với nhật ký | Lịch sử |
| DEC-012 | Rà soát Figma 22/09 — bản đồ còn thiếu | Lịch sử |
| DEC-013 | `Checkbox` `29:2685` — dựng lại, tách hai trục | — |
| ~~VD-002~~ | Focus và Active chung một hình — **huỷ 22/09** | Huỷ (số VD-002 dùng lại ở DEC-038) |
| DEC-014 | Ba trạng thái tương tác Button — ba cơ chế thị giác | **Còn** — luật lõi |
| DEC-015 | `Checkbox` — Hover giữ hình như Default | — |
| *(MỞ LẠI)* | Công ty không có dev — ảnh hưởng DEC-001, DEC-003 | Đóng bởi DEC-016 |
| DEC-016 | `/website-production-agent` thay vai trò dev | — |
| DEC-017 | Nội dung site cố định — Astro tĩnh là đúng | **Còn** |
| DEC-018 | REBUILD hoàn toàn · Context Reconciliation | **Còn** |
| DEC-019 | Giữ nguyên 7 slug cũ | **Còn** |
| DEC-020 | Sếp giữ hạ tầng `baika.vn` hiện tại | — |
| DEC-021 | Đo lại typography Figma, 3 sai lệch | Lịch sử |
| DEC-022 | ĐÍNH CHÍNH — shadow, spacing, radius ĐỀU có token | **Còn** — bài học |
| DEC-023 | Hai họ chữ: Be Vietnam Pro + Chakra Petch | **Còn** |
| DEC-024 | Bỏ toàn bộ quy ước ClearWork | **Còn** |
| DEC-025 | Kiểm kê quy ước cũ — còn / mất | Lịch sử |
| DEC-026 | Gỡ 5 mục chặn Release Candidate | Lịch sử |
| DEC-027 | Thắng là người quyết | **Còn** |
| DEC-028 | Token cũ giữ nguyên · font chuẩn hoá xong | — |
| DEC-029 | Rà lại Figma 24/09 | Lịch sử |
| DEC-030 | `Text field` đóng · kiểm thử toàn spec | — |
| DEC-031 | Form States đóng · mobile là 375 | **Còn** |
| DEC-032 | Gom component gốc về page `UI` | Thay bởi DEC-034 |
| DEC-033 | Xác nhận đã gom về page `UI` | Thay bởi DEC-034 |
| DEC-034 | Kho component chính thức là page `Component` | **Còn** |
| DEC-035 | Bỏ `#FFFFFF` — màu sáng nhất là `--gray-50` | Sửa bởi DEC-035-A |
| DEC-035-A | ĐÍNH CHÍNH DEC-035 — mất opacity; luật trắng cuối cùng | **Còn** — luật lõi |
| DEC-036 | Chuẩn hoá tên component (`label-mono` → `label`) + dọn node | **Còn** |
| DEC-037 | Bắt đầu Build — khung Astro + `tokens.css` | Lịch sử |
| DEC-038 | Repo trên tài khoản `baikavn-bot` — chấp nhận có chủ ý (VD-002 mới) | — (xem `viec-cho` #26) |
| DEC-039 | Source lên repo — commit đầu | Lịch sử |
| DEC-040 | Vercel đã nối | Lịch sử |
| DEC-041 | Dựng xong trang chủ — lưới bento 3 breakpoint | — |
| DEC-042 | Trang chủ lên production | Lịch sử |
| DEC-043 | Nút trang chủ dựng lại theo `Button 1` | — |
| DEC-044 | Ô bento — sửa 4 điểm | — |
| DEC-045 | Lưới bento lấp đầy màn hình | — |
| VD-003 | Sáu giá trị đo từ Figma không có trong token | — |
| VD-004 | Artwork nền trang chủ — CSS không dựng lại được | Đóng bởi DEC-054 *[suy luận]* |
| DEC-046 | Lưới bento — đối chiếu từng toạ độ | — |
| DEC-047 | Trục `Type` của Button 1 là breakpoint, không phải cỡ | **Còn** |
| DEC-048 | Cân bằng động khối logo hero | — |
| VD-005 | Bốn điểm trong hệ Button chờ Thắng | Một phần còn (Nav Button `Focus` = trang hiện tại) |
| DEC-049 | Đơn vị blur — Figma gấp đôi CSS | **Còn** — luật lõi |
| DEC-050 | Hover BG — tâm gradient ở góc trên phải | — |
| DEC-051 | Mũi tên bento luôn hiện ở Tablet/Mobile | — |
| DEC-052 | Button 1 bỏ lớp `Button Background` | — |
| VD-006 | Màu stroke ô bento — Figma và chỉ định lệch | Xem VD-009 |
| DEC-053 | Độ khớp System 25/09: 75% → 93% | Lịch sử |
| DEC-054 | Artwork nền — ảnh WebP 2.9 KB | — |
| DEC-055 | Style `Hover BG 2` riêng cho Trạm Ý Tưởng | — |
| DEC-056 | Focus khác Hover ở chỗ CẮT hay KHÔNG CẮT | — |
| DEC-057 | Ô nổi bật — dạng riêng, không mượn `:focus` | — |
| VD-007 | Ba điểm lệch giữa ba khung Figma trang chủ | — |
| DEC-058 | Tiêu đề ô bento không ép viết hoa | — |
| DEC-059 | Thêm biến `--cyan` vào bộ Primary | — |
| DEC-060 | Không gán `grid-area` bằng style nội tuyến | **Còn** — bài học |
| DEC-061 | Lưới Tablet — khối hero hình chữ L | — |
| DEC-062 | Mobile — ô ở giữa màn hình thì sáng | — |
| DEC-063 | Chữ trong ô bento chiếm trọn bề ngang | — |
| VD-008 | Ba điểm nhỏ còn lệch giữa các khung Figma | — |
| DEC-064 | Ảnh nền 2560px | — |
| DEC-065 | `srcset` logo dùng bộ mô tả `w`, không `x` | **Còn** — bài học |
| VD-009 | Màu viền ô bento — hai nguồn lại lệch | — |
| DEC-066 | Form gửi qua hàm serverless Vercel + Resend | **Còn** |
| DEC-067 | Form Liên hệ: 4 ô + checkbox đồng ý | — |
| DEC-068 | Chữ «Contact» cỡ lớn — fill opacity 15% | — |
| DEC-069 | Header trong suốt | Bổ sung 13/10: thêm nền mờ khi cuộn (`viec-cho` #24) |
| DEC-070 | Ô nhập — thêm 2 thứ ngoài Figma | — |
| VD-010 | Còn thiếu để trang Liên hệ hoàn chỉnh | — |
| DEC-071 | `Nav Button` đã đủ Hover + Focus | **Còn** |
| DEC-072 | Rà trang Liên hệ — 4 điểm khớp Figma | Lịch sử |
| DEC-073 | Contact Section trải hết trang, cột co giãn | Sửa bởi DEC-075 |
| DEC-074 | Contact Section bắt đầu ở Y = 200 | — |
| DEC-075 | Hai cột Liên hệ cố định 560 / 600 | **Còn** |
| DEC-076 | Dải báo lỗi form là instance `Badge` | — |
| DEC-077 | Ô tick vẽ bằng SVG trong file | — |
| DEC-078 | Mail liên hệ — định dạng chuẩn, hai bản | — |
| VD-011 | Ba màu còn lạc token trên trang Liên hệ | — |
| DEC-079 | Lỗi form — `FormData` bỏ qua ô đang khoá | **Còn** — bài học |
| DEC-080 | Thêm `/api/health` | **Còn** |
| DEC-081 | Vercel có dựng `api/` cho dự án Astro | **Còn** |
| DEC-082 | Ba lỗi component dùng chung — đã sửa trên Figma | Lịch sử |
| DEC-083 | Viền Figma vẽ PHÍA TRONG, CSS vẽ THÊM RA — lệch 2px | **Còn** — bài học |
| DEC-084 | `FAQ Items` dựng bằng `<details>`, không JS | **Còn** |
| DEC-085 | Hai màu của `Liner/Stroke/Light` không có token — thay thế có chủ ý | Chờ Thắng duyệt? *[chưa kiểm]* (liên quan `viec-cho` #8) |
| DEC-086 | Bề ngang `FAQ Items` co giãn | — |
| DEC-087 | `Solution` không nền, không viền | — |
| DEC-088 | `Detail Step Item` khoảng 14px ngoài thang | Đóng bởi DEC-091 (→ 12) |
| DEC-089 | `Các gói · Hover` ba lớp ánh sáng | Đóng bởi DEC-091 |
| DEC-090 | `Các gói`: quầng sáng ở Hover hay Focus | 🔶 **MỞ** — `docs/buoi-xem-figma.md` |
| DEC-091 | Thắng chốt: gap 14 → 12 · nút thẻ gói cỡ Lg | **Còn** |
| DEC-092 | Ba component trang trí — SVG/CSS, không xuất ảnh | **Còn** |

## Quyển 2 — 7 trang dịch vụ (25–26/09)

| Số | Quyết định | Hiệu lực |
| --- | --- | --- |
| DEC-093 | Khung trang 7 trang dịch vụ + quy tắc responsive | **Còn** |
| DEC-094 | Lớp tô Figma có ĐỘ ĐỤC RIÊNG, tách khỏi alpha của màu | **Còn** — bài học |
| DEC-095 | Hero — chữ cong bằng SVG | — |
| DEC-096 | Giai đoạn 2 — 5/6 section dùng chung | Lịch sử |
| DEC-097 | Suy luận thay vì đo + gán thẳng thuộc tính | **Còn** — bài học |
| DEC-098 | Ảnh nền sao — cắt phần không ai thấy, giảm 32% | — |
| DEC-099 | Còn thiếu section Contact | Đóng bởi DEC-100 |
| DEC-100 | Giai đoạn 2 xong — form thành component dùng chung | **Còn** |
| DEC-101 | *(Không có mục — chỉ được nhắc trong code: form 2 cấu hình, 25/09)* | — |
| DEC-102 | Dọn nợ dùng chung + dựng trang Đào tạo CEO | — (mục «Còn treo» → `viec-cho` #1) |
