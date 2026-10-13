# CLAUDE.md — luật của repo `baika-website`

*Cập nhật 13/10/2026 · áp dụng cho **mọi agent** (Claude, Codex, Cursor… — `AGENTS.md` trỏ về đây). Đọc hết trước khi sửa bất cứ dòng nào. Chi tiết nằm trong `docs/` — file này chỉ giữ luật và chỗ tra. **Số mục giữ như bản cũ** (code và tài liệu đang trỏ «`CLAUDE.md` §4», «mục 9»…) — đừng đánh số lại.*

## 0. Đọc mỗi phiên, theo thứ tự

1. `~/.claude/CLAUDE.md` + `CLAUDE.local.md` (nếu có — file riêng trên máy, không lên GitHub): cách làm việc với người dùng.
2. **File này** — luật.
3. Trạng thái + việc chờ (tự nạp bên dưới).
4. `docs/<trang>/SPEC-MASTER.md` nếu làm một trang cụ thể.

@TRANG-THAI.md
@docs/viec-cho.md

**Người chịu trách nhiệm: Thắng** — designer, **không phải lập trình viên**. **Công ty không có dev.** Hệ quả:
- **Code phải đọc được bởi người không biết code.** Tên nói lên nó là gì.
- **Chọn thứ đơn giản**, kể cả khi thứ phức tạp «xịn» hơn.
- **Giải thích thuật ngữ ngay lần đầu dùng.**
- **Không im lặng làm theo yêu cầu sai.** Cản lại, giải thích, đưa phương án khác.
- **Phân biệt «đã xác minh» và «suy đoán»** khi báo cáo.

## 1. Dự án này là gì

**BAIKA** — công ty **tư vấn và kiến tạo hệ thống vận hành cho doanh nghiệp**, tổ chức theo 8 Trụ. **Không** phải công ty bán khoá học online.

Repo này là **website marketing tĩnh**: trang chủ · 7 trang dịch vụ · Liên hệ · 5 công cụ chẩn đoán · Chính sách bảo mật · landing **Remote Office** (`baika.website`, nhánh `remote-office`). Mọi trang, dù chạy ở tên miền nào, **chung một source**. Code agent, kho dữ liệu, backend **không** vào repo này.

**Tên miền hôm nay:** site mới chạy ở `www.baika.tech` (bản thử, nhánh `main`) và `baika.website` (nhánh `remote-office`). **`baika.vn` vẫn là site CŨ** — viết «baika.vn» trong tài liệu = đích tương lai. Mục tiêu 3 tháng: thay hẳn site cũ (`docs/chuyen-baika-vn.md`).

**REBUILD HOÀN TOÀN.** Kế thừa duy nhất từ site cũ: tên miền `baika.vn` + 7 slug (`DEC-019`). Site cũ chỉ là nguồn audit — **không** migrate code, CSS, asset, UI từ nó trừ khi Thắng yêu cầu. Vấn đề của site cũ không tự động là yêu cầu của site mới.

Chi tiết: `docs/tong-quan.md` · danh sách trang: `docs/so-do-trang.md`.

## 2. Nền tảng — đã chốt, đừng bàn lại (`DEC-001`)

Astro (tĩnh, không SSR, không adapter) · TypeScript · CSS trong `<style>` của từng component + CSS Variables (không Tailwind, không CSS-in-JS) · pnpm 9.12.0 · GitHub (công khai) · Vercel · Node theo `.nvmrc`.

**Ngoại lệ duy nhất của site tĩnh:** `api/` — 3 hàm chạy trên Vercel (`contact` · `chan-doan` · `health`), gửi mail qua Resend, **không lưu gì**. Mặc định **không JS** ở trình duyệt.

**Tên miền:** địa chỉ chính **không `www`** (ngoại lệ `baika.tech`); gắn tên miền bằng `routes` trong `vercel.json`. Chi tiết (thư mục, biến môi trường, tên miền, triển khai, quay lui): `docs/ky-thuat.md`.

## 3. Nguồn chân lý

- **Code ↔ tài liệu lệch → Figma thắng.** Figma ↔ quyết định đã ghi lệch → **hỏi Thắng**.
- Figma `YmcXg1lQqGVjQOFrVtdOgW` — page `Component` `660:2939` (main component) · page `UI` `191:812` (trang). Bỏ qua page `Component (cũ – không dùng)`. Bảng 6 page: `docs/he-thong-thiet-ke.md` §1.
- **Đọc nhật ký quyết định trước khi kết luận** — nhiều thứ trông như lỗi đã được chốt có lý do: `docs/_chung/muc-luc-dec.md`.
- **Đồng bộ ngược** *(Thắng chốt 04/10)*: Thắng chốt điều gì mà Figma chưa có → **agent tự vẽ vào Figma** — chỉ điều đã chốt rõ, chỉ dùng component/biến có sẵn, component dùng chung thì báo số instance trước, ghi xong thì chụp nhìn + ghi nhật ký Figma + báo node ID. Luật đầy đủ: `docs/quy-trinh-lam-viec.md` §3.
- **Luật đồng bộ tài liệu:** sửa code làm đổi chữ, số hay hành vi → sửa spec trong `docs/` **cùng commit**. Khung 4 file cho mỗi trang: `docs/quy-trinh-lam-viec.md` §5.
- `docs/_chung/noi-dung-day-du.md` là chữ của **site cũ** — **không** phải chữ site mới. Chữ đang chạy = Figma + `src/pages/`.

## 4. Token — nghiêm nhất trong repo

| ⛔ | Luật |
| --- | --- |
| **Không tự chế** | Không tạo màu / chữ / khoảng cách / bo góc mới. Thiếu token → **nêu ra và hỏi Thắng**. Đừng viết `padding: 18px` |
| **Không hardcode** | Mọi giá trị qua `var(--…)` trong `src/styles/tokens.css`. Đổi giá trị → đổi Figma trước |
| **Không có `#FFFFFF` / `#fff` / `white`** | `DEC-035-A`. Trắng đục `--gray-50` · trắng trong `--opacity-white`. Ngoại lệ duy nhất: màu bóng trong `--shadow-drop-inner` |
| **Quầng sáng chỉ thuộc Focus** | Hover `--shadow-inner` · Active `--shadow-inner-press` · Focus `--shadow-drop-inner`. Disabled: `--gray-700`, giữ `opacity: 1` |

Kiểm bằng máy: `pnpm kiem-tra`. Thang chữ, blur, màu trụ, nút: `docs/he-thong-thiet-ke.md` §2–§5.

## 5. Breakpoint

375 (mobile — **không phải 390**) · 768 · 1280 · 1440+. Component ở màn nhỏ phải **đổi dạng**. Bảng cột / gutter / lề: `docs/he-thong-thiet-ke.md` §6.

## 6. Chất lượng — mức sàn, không thương lượng

WCAG 2.1 AA: tương phản ≥ 4.5:1 · focus nhìn thấy được · vùng chạm ≥ 44px · `alt` · tôn trọng `prefers-reduced-motion`. **Mặc định không JS** — JS chỉ cho thứ thật sự tương tác. Form đủ 4 trạng thái `Idle` → `Submitting` → `Success` / `Error`. Chi tiết: `docs/he-thong-thiet-ke.md` §7. Sai lệch có chủ ý (QA không báo FAIL): `docs/van-de-da-biet.md` §1.

## 7. Cấu trúc thư mục

`src/pages` (mỗi file một đường dẫn) · `src/components` (một component = một file `.astro`, CSS trong `<style>`) · `src/layouts` · `src/lib` · `src/styles` (`tokens.css` · `reset.css` · `global.css` — chỉ thứ dùng ở MỌI trang) · `api/` · `tools/` · `docs/` · `public/`. Dùng ở mọi trang → `global.css`; thuộc một khối → `<style>` của component; không có đường thứ ba. Cây đầy đủ: `docs/ky-thuat.md` §2 · quy ước viết code: `docs/quy-uoc-code.md`.

## 8. Lệnh và kiểm trước khi báo «xong»

```bash
pnpm install --frozen-lockfile
pnpm build                # kiểm kiểu + dựng — phải 0 lỗi
pnpm kiem-tra             # luật tĩnh: màu viết cứng, #FFFFFF, khoá bí mật
pnpm kiem-tra:chan-doan   # 23 ca 5 công cụ chẩn đoán
pnpm kiem-tra:uoc-tinh    # 11 ca công cụ ước tính (nhánh remote-office)
pnpm preview              # xem bản đã dựng
```

**Trước khi báo xong:** build 0 lỗi → `kiem-tra` OK → bài kiểm riêng nếu đụng tới → **chụp màn và MỞ RA NHÌN** ở 1280 và 375. Đủ lệnh: `docs/ky-thuat.md` §7 · bộ kiểm cần trình duyệt: `tools/kiem-tra/README.md`.

## 9. Bảo mật — repo CÔNG KHAI

- **Ai cũng đọc được mọi file và mọi commit cũ.** Trước khi commit, tự hỏi: *«Có ổn không nếu người ngoài công ty đọc dòng này?»* Không chắc → hỏi Thắng.
- **Không bao giờ** đặt khoá API, token, mật khẩu vào bất kỳ file nào — kể cả chú thích, kể cả tạm. Khoá nằm trong **biến môi trường Vercel**; `.env.example` chỉ có tên biến.
- **Không** đưa vào repo: email / số điện thoại cá nhân, dữ liệu khách, nội dung form khách gửi, tài liệu tài chính – pháp lý – nhân sự, chi tiết tài khoản.
- Phát hiện khoá bị commit → **dừng, báo Thắng ngay, nhắc thu hồi khoá**. Xoá commit thôi là chưa đủ (`SECURITY.md`).
- Công khai **không** có nghĩa được dùng lại: `LICENSE` giữ mọi quyền.

## 9b. Git — ai làm gì

- **Agent: tạo nhánh riêng → commit → `git push -u origin <nhánh>`. Thắng: mở / duyệt / gộp Pull Request.** `main` đã khoá (ruleset `bao-ve-main`): chỉ gộp qua PR, CI `kiem-tra` phải xanh. Đừng tìm cách lách. **Không** push `main`, force push, xoá nhánh trên GitHub, viết lại lịch sử đã push. Quyền lệnh: `.claude/settings.json`.
- Commit bằng danh tính có sẵn của repo (`BAIKA` · noreply của `baikavn-bot`) — Vercel chỉ dựng commit của danh tính này. **Không** đổi danh tính (`git -c user.name=…`, `git config`).
- `git add` **từng file**, đọc `git status` trước. Không commit `.env`, `Claude outputs/`, `CLAUDE.local.md`.
- **Tài liệu vận hành** (`TRANG-THAI.md`, `docs/viec-cho.md`, file này) **chỉ sửa trên `main` qua PR**. Nhánh tính năng chỉ chứa code + spec của trang. `CHANGELOG.md`: thêm dòng cùng PR tính năng.
- Push nhánh **`remote-office`** = cập nhật ngay `baika.website` khách đang xem → **hỏi Thắng trước**.
- Chi tiết + Dependabot: `CONTRIBUTING.md` · cho người: `docs/huong-dan-github.md`.

## 10. Bài học đã trả giá — đừng lặp lại

- **Sau mỗi lượt ghi hàng loạt, mở ra NHÌN.** Số đếm khớp không chứng minh kết quả đúng (`DEC-035-A`).
- **Kiểm một thuộc tính thì đọc cả giá trị lẫn styleId** (`DEC-022`).
- **Trên Vercel, `rewrites` thua file tĩnh** — gắn tên miền bằng `routes`.
- **Dữ liệu mẫu trong file demo ≠ yêu cầu dự án** (từng có cả một «luồng B» không có thật).
- **Thao tác Figma theo tên node → kiểm kích thước kết quả trước khi ghi.**

Bảng đầy đủ kèm nguồn: `docs/quy-trinh-lam-viec.md` §7.

## 11. Còn treo

Lỗi treo, lệch Figma đang để nguyên, rủi ro: `docs/van-de-da-biet.md`. Việc chờ người quyết: `docs/viec-cho.md`.

## 12. Đọc khi cần

| Cần biết | File |
| --- | --- |
| BAIKA là gì, phạm vi, ai quyết gì | `docs/tong-quan.md` |
| Site có những trang nào | `docs/so-do-trang.md` |
| Figma, token, chữ, trạng thái, breakpoint, mức sàn WCAG | `docs/he-thong-thiet-ke.md` |
| Stack, thư mục, `api/`, biến môi trường, tên miền, triển khai | `docs/ky-thuat.md` |
| Viết code thế nào | `docs/quy-uoc-code.md` |
| Một vòng làm việc, đồng bộ ngược, tài liệu đi theo thay đổi | `docs/quy-trinh-lam-viec.md` |
| Sai lệch có chủ ý, lỗi treo, rủi ro | `docs/van-de-da-biet.md` |
| Quyết định `DEC-…` | `docs/_chung/muc-luc-dec.md` |
| Chuyển `baika.vn` sang site mới | `docs/chuyen-baika-vn.md` |
| Remote Office · 5 công cụ chẩn đoán | `docs/remote-office/SPEC-MASTER.md` · `docs/cong-cu-chan-doan/SPEC-MASTER.md` |
| Mục lục toàn bộ tài liệu + bảng ánh xạ | `docs/README.md` |
| Đã đổi gì, ngày nào | `CHANGELOG.md` |
