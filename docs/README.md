# docs/ — tài liệu dựng website

Mọi tài liệu cần để **dựng và sửa** website nằm ở đây, trong repo. Agent nào mở repo cũng đọc được, không cần vào project Claude.

## Đọc theo thứ tự

1. `../TRANG-THAI.md` — dự án đang ở đâu.
2. `../CLAUDE.md` — luật của repo.
3. Thư mục của trang đang làm (bảng dưới).
4. `_chung/` — chỉ khi cần tra lý do một quyết định, hoặc thông tin chung chưa có ở 3 chỗ trên.

## Tài liệu nền — đọc khi cần

| File | Trả lời câu |
| --- | --- |
| `tong-quan.md` | BAIKA là gì, website để làm gì, phạm vi, ai quyết gì |
| `so-do-trang.md` | Site có những đường dẫn nào, file nào |
| `he-thong-thiet-ke.md` | Figma ở đâu, luật token, chữ, trạng thái, breakpoint, mức sàn chất lượng |
| `ky-thuat.md` | Stack, cấu trúc thư mục, `api/`, biến môi trường, tên miền, lệnh, triển khai, quay lui |
| `quy-uoc-code.md` | Viết code thế nào cho người không biết code đọc được |
| `quy-trinh-lam-viec.md` | Một vòng làm việc, nguồn nào thắng, đồng bộ ngược Figma, tài liệu đi theo thay đổi, bài học |
| `van-de-da-biet.md` | Sai lệch có chủ ý, lỗi treo, rủi ro |

## Bảng ánh xạ — kiến trúc tài liệu chuẩn ↔ repo này

*Chốt 06/10/2026 (phương án B): giữ tên tiếng Việt và vị trí file đang chạy tốt; kiến trúc chuẩn chỉ dùng làm **checklist độ đầy đủ**. Mỗi thông tin chỉ có **một** chỗ ở.*

| Vai trò chuẩn | File trong repo |
| --- | --- |
| `CLAUDE.md` | `../CLAUDE.md` (luật ngắn + trỏ tới đây) |
| `CLAUDE.local.md` | `../CLAUDE.local.md` — riêng máy, không lên GitHub |
| `README.md` | `../README.md` |
| `.claude/settings.json` | `../.claude/settings.json` — quyền agent |
| PROJECT_BRIEF | `tong-quan.md` |
| REQUIREMENTS | `<trang>/SPEC-MASTER.md` + `spec-noi-dung.md` của từng trang (`remote-office/`, `cong-cu-chan-doan/`) · chung: `_chung/ban-giao-ky-thuat.md` |
| SITEMAP | `so-do-trang.md` |
| DESIGN_SYSTEM | `he-thong-thiet-ke.md` · nhật ký: `nhat-ky-figma-chung.md` |
| ARCHITECTURE · ENVIRONMENT · DEPLOYMENT | `ky-thuat.md` (gộp 3 vai trò) |
| ADR (quyết định) | `DEC-xxx` trong `_chung/` — mục lục: `_chung/muc-luc-dec.md` |
| CODING_STANDARDS | `quy-uoc-code.md` |
| GIT_WORKFLOW | `../CONTRIBUTING.md` · cho người: `huong-dan-github.md` |
| WORKFLOW | `quy-trinh-lam-viec.md` |
| PROGRESS · ROADMAP | `../TRANG-THAI.md` (có mục «Lộ trình») |
| KNOWN_ISSUES | `van-de-da-biet.md` |
| OPEN_QUESTIONS | `viec-cho.md` · giao diện: `buoi-xem-figma.md` |
| CHANGELOG | `../CHANGELOG.md` |
| HANDOFF · AUDIT | Bản riêng trên máy Thắng (có thông tin nội bộ — không lên repo công khai) |

## Thư mục

| Thư mục | Chứa gì | Tình trạng |
| --- | --- | --- |
| `remote-office/` | Bộ spec 4 file của trang Remote Office (`baika.website`). Bắt đầu từ `SPEC-MASTER.md` | **Đang dùng** — cập nhật cùng code |
| `chuyen-baika-vn.md` | **Việc phải xong trước khi trỏ baika.vn sang v2** (chặn · nên xong · ngày chuyển) + bảng đường dẫn bản cũ | **Đang dùng** |
| **v1 có gì?** | **v1** = bản cũ (site Next.js ở baika.vn tới 10/2026) · **v2** = baika-website-v2 = repo này. Nội dung v1 đọc ở `trang-con-thieu/noi-dung-v1.md` (gói, FAQ, ưu đãi, công cụ…) + `trang-con-thieu/du-lieu/ban-cu/noi-dung/` (chữ từng trang) + `trang-con-thieu/spec-noi-dung.md` (Trạm Ý Tưởng, Tài nguyên, Về BAIKA). 5 công cụ chẩn đoán (công thức, luật chọn gói): `trang-con-thieu/cong-cu-chan-doan-v1.md`. Mục lục: `trang-con-thieu/du-lieu/ban-cu/README.md` | Bản chụp 05/10/2026 |
| `trang-con-thieu/` | Spec nội dung **4 trang chưa dựng** (Trạm Ý Tưởng · Kho mô hình · Kho Tài Nguyên · Về BAIKA), chép nguyên văn từ site cũ baika.vn 05/10/2026 + dữ liệu 155 mô hình (`du-lieu/`) | **Bản thu thập** — chưa duyệt, xem §6 trước khi dùng |
| `viec-cho.md` | **Việc đang chờ** — agent đọc mỗi phiên, nhắc Thắng mục nào tới điều kiện (chuyển từ project Claude 04/10) | **Đang dùng** |
| `buoi-xem-figma.md` | Câu hỏi giao diện còn chờ Thắng nhìn | **Đang dùng** |
| `nhat-ky-figma-chung.md` | Nhật ký Figma của **component dùng chung** (menu, chân trang, thẻ gói…) — mỗi lần agent hoặc Thắng sửa | **Đang dùng** |
| `chuyen-sang-claude-code.md` | Checklist chuyển sang **Claude Code** (06/10/2026): cài đặt, file riêng `CLAUDE.local.md`, skill, Figma MCP, quyền `.claude/settings.json` | **Đang dùng** |
| `huong-dan-github.md` | Cho Thắng: push, nhãn phiên bản, khoá nhánh `main`, quay lui trên Vercel | **Đang dùng** |
| `_chung/` | Tài liệu chung cho 7 trang dịch vụ + trang chủ + Liên hệ, **chép nguyên văn** từ project Claude ngày 03/10/2026 | **Lưu trữ có ghi chú** — đầu mỗi file ghi rõ chỗ nào đã lỗi thời |

## `_chung/` — chép từ project Claude ngày 03/10/2026

Đầu mỗi file có khung «📦 Bản chép nguyên văn» liệt kê **chỗ đã lỗi thời**. Đọc khung đó trước khi tin nội dung.

| File | Chứa gì | Bản gốc trong project Claude |
| --- | --- | --- |
| `website-agent-decisions.md` | Nhật ký quyết định quyển 1: `DEC-001` → `DEC-092`, `VD-001` → `VD-011` | `claude/website-agent-decisions.md` |
| `website-agent-decisions-2.md` | Nhật ký quyết định quyển 2: `DEC-093` → `DEC-100` | `claude/website-agent-decisions-2.md` |
| `website-agent-design-spec.md` | Design Spec (LOCKED): token, component, cấu trúc trang | `claude/website-agent-design-spec.md` |
| `website-agent-implementation-spec.md` | Implementation Spec (LOCKED): stack, cấu trúc, triển khai | `claude/website-agent-implementation-spec.md` |
| `ban-giao-ky-thuat.md` | Spec bàn giao: token, component, trạng thái, checklist nghiệm thu | `claude/ban-giao-ky-thuat.md` |
| `noi-dung-day-du.md` | 🔴 Chữ của **site cũ**, chép để audit — **không phải** chữ site mới | `claude/noi-dung-day-du.md` |
| `ban-do-section.md` | Khung section 7 trang + danh sách cắt (03/09) | `claude/ban-do-section.md` |
| `sitemap.md` | Sitemap + kiến trúc thông tin (26/08, banner 23/09) | `claude/sitemap.md` |
| `van-hanh-sau-launch.md` | Vận hành sau khi lên khi không có dev | `claude/van-hanh-sau-launch.md` |

### Tìm một quyết định `DEC-…`

| Số | Ở đâu |
| --- | --- |
| `DEC-001` → `DEC-092` | `_chung/website-agent-decisions.md` |
| `DEC-093` → `DEC-100` | `_chung/website-agent-decisions-2.md` |
| `DEC-102` (dọn nợ + trang CEO) | `_chung/dec-102-don-no-va-trang-ceo.md` (chuyển 04/10) |
| Remote Office (từ 29/09) | `remote-office/SPEC-MASTER.md` §7 (quyết định) + §9 (nhật ký) |
| Mọi thay đổi theo ngày | `../CHANGELOG.md` |

### Còn ở project Claude, chưa chuyển

**Từ 07/10/2026 không làm ở project claude.ai nữa.** Toàn bộ tài liệu của project đã được xuất ra và lưu **riêng trên máy Thắng** (06/10); phần còn giá trị đã đưa vào các file nền ở trên (13/10). Các file `_chung/` có nhắc tới những file dưới đây — chúng **không** vào repo vì thuộc luồng khác, đã lỗi thời, hoặc có thông tin nội bộ:

`claude/framer-cms-schema.md` (phương án đã loại) · `claude/ban-giao-tuan.md` (tên cũ của `ban-giao-ky-thuat.md`) · `claude/he-thong-button.md` · `claude/noi-dung-theo-section.md` · `claude/noi-dung-7-trang.md` · `claude/ra-soat-system-2509.md` · `claude/ke-hoach-build-7-trang.md` · `claude/tien-do-24-09.md` · `claude/website-agent-figma-gap-audit.md` · `claude/huong-dan-git-vercel.md` · `claude/quy-uoc-ban-giao.md` · `project-brief.md` · `design-log.md`

Agent không vào được project Claude thì hỏi Thắng.

## Luật sửa

- Sửa code làm đổi chữ, số hay hành vi → sửa spec ở đây **cùng commit** (`CLAUDE.md` §3).
- File trong `_chung/`: sửa thẳng ở đây. Quyết định mới thì **không** chèn vào giữa nhật ký cũ — ghi vào spec của trang (vd. `remote-office/SPEC-MASTER.md` §9) và `CHANGELOG.md`.
- Trang mới → tạo thư mục `docs/<ten-trang>/` theo khung 4 file như `remote-office/`.
