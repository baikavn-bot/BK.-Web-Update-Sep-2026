# TRẠNG THÁI DỰ ÁN — đọc file này đầu tiên mỗi phiên

*Cập nhật **04/10/2026** · Ai sửa trạng thái thì sửa ngày ở dòng này.*

File này trả lời câu: **"Dự án đang ở đâu, cái gì chạy, cái gì kẹt, làm gì tiếp?"**
Luật làm việc nằm ở `CLAUDE.md`. Lịch sử thay đổi nằm ở `CHANGELOG.md`.

Ký hiệu: **[xác minh dd/mm]** = đã mở ra kiểm, có ngày · **[suy luận]** = suy ra từ tài liệu, chưa kiểm.

---

## 1. Tóm tắt một dòng

7 trang dịch vụ, trang chủ và Liên hệ đã chạy trên nhánh `main`. Trang **Remote Office** dựng xong 9/9 khối trên nhánh `remote-office`. Tên miền `baika.website` **chạy đầy đủ, khách xem được** (04/10). Chưa ra mắt thật: vẫn `noindex`, chưa gộp vào `main`.

---

## 2. Nhánh (branch) — mỗi nhánh là một bản riêng của code

Repo `baikavn-bot/BK.-Web-Update-Sep-2026` — **công khai** (sếp đồng ý, xác nhận 03/10). Nhãn phiên bản: `v1.0.0` = `main` `aac95de` — đã lên GitHub **[xác minh 03/10]**. Kiểm tra tự động (CI): chạy xanh trên `remote-office` **[xác minh 04/10 — ảnh tab Actions]**. Khoá nhánh `main`: **đã bật** — ruleset `bao-ve-main`, Active, không ai được vượt khoá **[xác minh 04/10 — ảnh chụp]**; đưa thay đổi lên `main` chỉ qua Pull Request — `docs/huong-dan-github.md`.

| Nhánh | Commit mới nhất | Chứa gì | Đã lên GitHub |
| --- | --- | --- | --- |
| `main` | `1ba629b` (04/10) | 7 trang dịch vụ · trang chủ · Liên hệ · spec Remote Office · CI + bộ kiểm tra · `<h1>` trang chủ (PR #1) · menu Remote Office (PR #4) · 2 PR Dependabot (#2, #3) | ✅ **[xác minh 04/10 — ảnh tab Actions, 3 lượt xanh]** |
| `remote-office` | `ca25e16` (02/10) + các commit sau đó | Mọi thứ của `main` + trang `/remote-office` + `vercel.json` + mail ghi đúng trang gửi + tài liệu repo | ✅ đến `ca25e16` **[xác minh 03/10]** |

`remote-office` **chưa gộp (merge)** vào `main`. Từ 04/10 `main` cũng có commit riêng (PR #1–#4) — trước khi ra mắt, kéo `main` vào `remote-office` một lần cho đồng bộ. Gộp khi ra mắt Remote Office thật — xem mục 7.

⚠️ Bản sửa "mail ghi đúng trang gửi" (`ContactForm.astro` + `api/contact.ts`) dùng chung cho cả 9 trang, nhưng hiện **chỉ có trên `remote-office`**. Form ở `main` vẫn ghi «Gửi từ: trang /lien-he» cho mọi trang. Sẽ tự hết khi gộp nhánh.

---

## 3. Đang chạy ở đâu

### Vercel — project `bk-web-update-sep-2026` (team `baika`, gói **Hobby**)

| Địa chỉ | Lấy code từ | Ghi chú |
| --- | --- | --- |
| `baika.tech` · `www.baika.tech` · `bk-web-update-sep-2026.vercel.app` | `main` (Production) | Bản chính hiện tại — **bản thử** (Thắng chốt 04/10), sẽ được `baika.vn` thay. Ngày trỏ `baika.vn`: đổi `src/lib/ten-mien.ts` **và** `vercel.json` cùng lúc |
| Bản preview của nhánh `remote-office` | `remote-office` (Preview) | **Ai có link cũng xem được** — Thắng tắt *Vercel Authentication* 04/10 để khách xem `baika.website` |
| `baika.website` | `remote-office` (Preview) | **Đã chạy, khách ngoài xem được** — 6 mục kiểm §5.6 đạt **[Thắng kiểm 04/10, cửa sổ ẩn danh]**. Vẫn `noindex`. 8 trang khác chuyển sang `www.baika.tech` |
| `www.baika.website` | — | **Đã chạy** — chuyển 308 về `baika.website` · DNS `CNAME www` **[xác minh 04/10]** |
| `baika.vn` | — (hosting riêng, sếp giữ) | **Không thuộc repo này.** Vẫn là site cũ (Next.js), chỉ để tham khảo. Ngày trỏ sang repo này: đổi chuyển hướng trong `vercel.json` từ `www.baika.tech` về `baika.vn` (`quy-trinh-build.md` §5.2 dòng 2) *[suy luận — chưa kiểm lại sau 29/09]* |

**Biến môi trường (environment variable** — giá trị cài trên Vercel, không nằm trong code**)** cho form gửi mail: `RESEND_API_KEY` · `CONTACT_TO` · `CONTACT_FROM`. Cả ba đã bật cho Preview **[xác minh 02/10 — `/api/health` trả `true` cả ba]**. Giá trị thật **không bao giờ** ghi vào repo.

Đã gửi thử form ở preview `remote-office`, mail về hộp thư công ty đúng tiêu đề và đúng trang gửi **[xác minh 02/10]**.

### Cách `baika.website` mở ra trang Remote Office

File `vercel.json` dùng **`routes`, không dùng `rewrites`**. Lý do: `rewrites` thua file tĩnh `index.html`. Chi tiết + bảng từng dòng: `docs/remote-office/quy-trinh-build.md` §5.

Đã kiểm `routes` đè được `index.html` bằng dòng thử `/?thu-baika-website` **[xác minh 02/10]**.

---

## 4. 🔴 Đang kẹt / đang làm

Không còn việc kẹt về kỹ thuật. Tên miền Remote Office **xong 04/10** (`baika.website` + `www`, khách xem được, 6 mục kiểm đạt).

Còn lại là **quyết định** — mục 5 — và **ra mắt thật** — mục 7.

---

## 5. Còn chờ quyết — agent KHÔNG tự quyết

Danh sách đầy đủ của Remote Office: `docs/remote-office/SPEC-MASTER.md` §7. Các mục còn mở:

| # | Câu hỏi | Ai quyết | Đang chạy tạm |
| --- | --- | --- | --- |
| 5 | Giữ chi phí cố định **1.800.000 đ/người**? | Sếp | Giữ, theo Spec v3 — **[suy luận từ câu chốt của sếp]** |
| 10 | Số «23,5» cỡ 100px (Figma, ngoài thang chữ) hay 80px? — **Buổi xem Figma** (Thắng chốt 04/10: gom 4 mục giao diện, xem cùng Figma) | Thắng | 80px (`--fs-display-1`) |
| 11 | Khoảng `10px` (ngoài thang) — **Buổi xem Figma** (Thắng chốt 04/10: gom 4 mục giao diện, xem cùng Figma) | Thắng | 12px (`--s-3`) |
| 12 | ✅ Chốt TẠM 04/10: ô «Lĩnh vực» = 8 lựa chọn (Remote Office + 7 trụ) — đã dựng. Danh sách chính thức chốt sau | Thắng | 8 lựa chọn |
| 13 | ✅ Chốt 04/10: **thêm** mục «Remote Office» **đứng đầu** menu (8 → 9 mục) — đã vẽ Figma + dựng code | — | ✅ **Đã lên bản chính** — PR #4, `main` `3d9c30a` · Thắng kiểm `www.baika.tech` 04/10: đủ 9 mục |
| 16 | Ô bảng cao cố định 66px hay theo nội dung — **Buổi xem Figma** (Thắng chốt 04/10: gom 4 mục giao diện, xem cùng Figma) | Thắng | Theo nội dung |
| 17 | Lề trang tablet 24 hay 40 — **Buổi xem Figma** (Thắng chốt 04/10: gom 4 mục giao diện, xem cùng Figma) | Thắng | 40 |
| L14 | ✅ Chốt 04/10: dòng pháp lý **dưới form Liên hệ** — đã dựng | — | Đã có (nhánh `remote-office`) · Figma đã vẽ `960:3633` |
| ✅ | Chốt 04/10: logo trên `baika.website` dẫn về **site chính** (`www.baika.tech`, khai ở `src/lib/ten-mien.ts`) — đã dựng | — | — |
| — | Nâng **Vercel Pro** trước khi ra mắt (Hobby chỉ cho dùng phi thương mại) | Sếp | Hobby |
| ✅ | Chốt 04/10: **`baika.tech` là bản THỬ** — sau này `baika.vn` trỏ sang repo này và thay nó. Canonical 9 trang đã trỏ `baika.vn` từ trước, đúng hướng | — | — |
| ~~—~~ | ~~Trang chủ không có `<h1>`~~ — ✅ **chốt 04/10:** dòng mô tả dưới logo làm `<h1>`, nhìn không đổi (so ảnh giống từng pixel). Lên bản chính qua Pull Request `sua-h1-trang-chu` | — | — |
| DEC-090 | Quầng sáng thẻ gói: Figma để ở **Hover**, code để ở **Focus** — Thắng 04/10: giữ Figma, code «đang làm xấu hơn», **chưa rà** | Thắng | Lệch, để nguyên cả hai — `docs/nhat-ky-figma-chung.md` |

Mục chung cả site (Nav Button thiếu Hover/Focus, link chết ở 2 ô bento…): `CLAUDE.md` §11.

---

## 6. Ba việc tiếp theo

1. **Sếp duyệt để ra mắt Remote Office:** con số 1,8 triệu (#5) · gói Vercel Pro · gỡ `noindex` → rồi làm mục 7.
2. **Chốt các mục ở mục 5** — ít nhất #5 (sếp) và Vercel Pro, vì hai mục này chặn ra mắt.
3. **Báo sếp:** `main` đã khoá — agent của sếp cũng phải đi qua Pull Request. *(Hoàn thiện repo xong: 4 đợt + CI + khoá nhánh, 03–04/10.)*

---

## 7. Ra mắt Remote Office — khi mọi mục ở 4 và 5 xong

Gộp `remote-office` vào `main` → chuyển `baika.website` từ Preview sang Production → gỡ `noindex` → nâng Vercel Pro.
Chi tiết: `docs/remote-office/quy-trinh-build.md` §5.7.

---

## 8. Ghi chú máy của Thắng — đọc nếu agent làm việc trên máy anh

- **Repo nằm ở `D:\BK. Web\baika-website`** (chuyển từ `Downloads` ngày 02/10). Đường dẫn có dấu cách, nên mở CMD phải có ngoặc kép: `cd /d "D:\BK. Web\baika-website"`.
- **`git push` do Thắng tự chạy.** Agent không đụng tài khoản đăng nhập.
- Commit bằng danh tính có sẵn của repo (`BAIKA`, email `noreply` của `baikavn-bot`). Vercel chỉ deploy commit của danh tính này **[xác minh 26/09]**.
- **Phiên agent mới chưa có quyền xoá file** trên máy Thắng. Lệnh `git switch` / `git status` có thể để lại file khoá `.git/index.lock`, làm các lệnh git sau báo lỗi. Cách gỡ: xin quyền xoá, rồi xoá `.git/index.lock`.
- Thư mục `Claude outputs/` (ảnh chụp, bản vá) đã bị `.gitignore` chặn — không lên GitHub.
