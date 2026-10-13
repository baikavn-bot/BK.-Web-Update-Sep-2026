# TRẠNG THÁI DỰ ÁN — đọc file này đầu tiên mỗi phiên

*Cập nhật **13/10/2026** · Ai sửa trạng thái thì sửa ngày ở dòng này. Chỉ sửa trên `main` qua Pull Request.*

File này trả lời: **«Dự án đang ở đâu, cái gì chạy, cái gì kẹt, làm gì tiếp?»** Luật: `CLAUDE.md`. Việc chờ: `docs/viec-cho.md`. Lịch sử: `CHANGELOG.md`.

Ký hiệu: **[xác minh dd/mm]** = đã mở ra kiểm, có ngày · **[suy luận]** = suy ra, chưa kiểm.

---

## 1. Tóm tắt

Site mới chạy đầy đủ ở `www.baika.tech` (bản thử, nhánh `main`): trang chủ · 7 trang dịch vụ · Liên hệ · 5 công cụ chẩn đoán · Chính sách bảo mật (bản Kapi duyệt) · header cố định có nền mờ. Landing **Remote Office** chạy ở `baika.website` (nhánh `remote-office`, `noindex`). **Chưa ra mắt thật:** khách vào `baika.vn` vẫn thấy site cũ. Từ 06/10 làm bằng **Claude Code**; tài liệu bàn giao đang vào `main` (13/10).

## 2. Nhánh

Repo `baikavn-bot/BK.-Web-Update-Sep-2026` — **công khai**. Khoá `main`: ruleset `bao-ve-main` (chỉ gộp qua PR, CI `kiem-tra` phải xanh) **[xác minh 04/10]**. Nhãn `v1.0.0` = bản chính đầu tiên 29/09.

| Nhánh | Đang ở | Chứa gì |
| --- | --- | --- |
| `main` | PR #21 `ccd126d` (13/10) **[xác minh 13/10]** | Toàn bộ site chính + tài liệu. PR gần nhất: #18 quyền Claude Code · #19 `viec-cho` · #20 nhật ký Figma · #21 header nền mờ |
| `remote-office` | `278f319` (đã gộp `main` tới PR #18, push 13/10) **[xác minh 13/10]** | Mọi thứ của `main` tới PR #18 + trang `/remote-office` + `vercel.json` + mail ghi đúng trang gửi + công cụ ước tính. **Chưa có** PR #19–#21 → `baika.website` chưa có header nền mờ |

`remote-office` **chưa gộp** vào `main` — gộp khi ra mắt Remote Office (§6). Trước đó kéo `main` vào lần nữa; lần 07/10 không có xung đột.

## 3. Đang chạy ở đâu

**Vercel** — project `bk-web-update-sep-2026`, gói **Hobby**, Node **24.x** (dashboard) **[Thắng xác minh 06/10]**.

| Địa chỉ | Lấy code từ | Ghi chú |
| --- | --- | --- |
| `www.baika.tech` · `baika.tech` · `bk-web-update-sep-2026.vercel.app` | `main` (Production) | **Bản thử** — sau này `baika.vn` thay. Đang mở cho Google lập chỉ mục (§5) |
| `baika.website` · `www.baika.website` (308) | `remote-office` (Preview) | Khách ngoài xem được · `noindex` · 8 trang chính chuyển sang `www.baika.tech` **[xác minh 13/10: chính sách bảo mật bản chính thức, trang chủ, `/finance/assessment` mở được]** |
| Preview mọi nhánh | nhánh đó | Ai có link cũng xem được (tắt Vercel Authentication 04/10) |
| `baika.vn` | — (hosting riêng, sếp giữ) | **Site CŨ, không thuộc repo này.** Kế hoạch chuyển: `docs/chuyen-baika-vn.md` |

**Form gửi mail:** 3 biến `RESEND_API_KEY` · `CONTACT_TO` · `CONTACT_FROM` (Resend gói Free).
- Preview: đã bật **[xác minh 02/10 — `/api/health`]**; mail Liên hệ về đúng hộp thư, đúng trang gửi **[xác minh 02/10]**.
- Production: công cụ Finance Readiness gửi mail kết quả về hộp thư công ty đầy đủ **[Thắng thử 07/10 trên `baika.tech`]**.

Cách gắn tên miền, biến môi trường, quay lui: `docs/ky-thuat.md`.

## 4. Đang kẹt

Không có việc kẹt về kỹ thuật. Còn chờ **quyết định** (§5).

## 5. Còn chờ quyết — agent KHÔNG tự quyết

| # | Câu hỏi | Ai | Chặn gì | Đang chạy tạm |
| --- | --- | --- | --- | --- |
| C1 | Nâng **Vercel Pro** (Hobby chỉ cho dùng phi thương mại) | Sếp | Ra mắt Remote Office + chuyển `baika.vn` | Hobby — sếp báo «đang chờ duyệt» 05/10, chưa có tin mới |
| RO-5 | Giữ chi phí cố định **1.800.000 đ/người** (Remote Office)? | Sếp | Ra mắt Remote Office | Giữ, theo Spec v3 **[suy luận từ câu chốt của sếp]** |
| RO-12 | Danh sách chính thức ô «Lĩnh vực» | Thắng | — | 8 lựa chọn tạm (Remote Office + 7 trụ) |
| DEC-090 | Quầng sáng thẻ gói: Hover (Figma) hay Focus (code) | Thắng | — | Lệch, để nguyên — `docs/buoi-xem-figma.md` |
| — | Lời hứa chưa duyệt: SLA trang AI (`viec-cho` #6) · ô «Mức độ khẩn cấp» Pháp lý (#3) | Sếp · Thắng | Nên xong trước chuyển `baika.vn` | Như Figma |

**Đã chốt, chưa làm:** `baika.tech` đặt `noindex` theo tên miền (Thắng chốt 07/10) — `docs/chuyen-baika-vn.md` §0.

Quyết định riêng của Remote Office: `docs/remote-office/SPEC-MASTER.md` §7.

## 6. Lộ trình

*Mục tiêu 3 tháng (Thắng chốt 07/10): **thay hẳn site cũ `baika.vn` bằng site mới, càng sớm càng tốt.***

| Khi nào | Việc | Phụ thuộc |
| --- | --- | --- |
| **Bây giờ** | Gộp 4 PR bàn giao (mục lục DEC → 7 tài liệu → `CLAUDE.md`/trạng thái → Node 24) | Thắng gộp theo thứ tự |
| **Bây giờ** | `noindex` cho `baika.tech` · kéo `main` vào `remote-office` (header nền mờ) | — |
| **Bây giờ** | Nghiệm thu bàn giao (phiên agent mới chạy thử) · cập nhật `web-starter` | — |
| **Khi sếp duyệt** | **Ra mắt Remote Office:** gộp `remote-office` vào `main` → `baika.website` sang Production → gỡ `noindex` — `docs/remote-office/quy-trinh-build.md` §5.7 | C1 · RO-5 |
| **Khi sếp duyệt** | **Chuyển `baika.vn`:** checklist `docs/chuyen-baika-vn.md` §0 | C1 |
| Sau | 4 trang chưa dựng (Trạm Ý Tưởng · Kho mô hình · Kho Tài Nguyên · Về BAIKA) — ngày chuyển dùng chuyển hướng tạm | Thiết kế Figma |
| Sau | Vòng UI 5 công cụ chẩn đoán (màn kết quả mức thấp/cao) — `viec-cho` #2 | Thắng |
| Sau | Giới hạn số lần gửi form · analytics (`viec-cho` #27) · Astro 5 | Sếp (analytics) |

## 7. Ghi chú máy của Thắng

- **Repo ở `D:\BK. Web\baika-website`.** Đường dẫn có dấu cách — lệnh `cd` phải có ngoặc kép.
- **Claude Code chạy thẳng trên máy** (từ 06/10): agent push **nhánh riêng** bằng phiên đăng nhập đã lưu, Thắng gộp PR. Cách làm việc riêng: `CLAUDE.local.md` (không lên GitHub).
- Máy: Node 24 · pnpm 9.12.0 **[xác minh 06/10]** — build sạch trên cả `main` lẫn `remote-office`.
- Xuống dòng: `.gitattributes` ép LF khi lưu vào git; `core.autocrlf=true` trên máy — không cần xử lý tay.
- `Claude outputs/` (ảnh chụp, file nháp) bị `.gitignore` chặn.
