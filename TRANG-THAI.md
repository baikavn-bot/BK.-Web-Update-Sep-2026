# TRẠNG THÁI DỰ ÁN — đọc file này đầu tiên mỗi phiên

*Cập nhật **03/10/2026** · Ai sửa trạng thái thì sửa ngày ở dòng này.*

File này trả lời câu: **"Dự án đang ở đâu, cái gì chạy, cái gì kẹt, làm gì tiếp?"**
Luật làm việc nằm ở `CLAUDE.md`. Lịch sử thay đổi nằm ở `CHANGELOG.md`.

Ký hiệu: **[xác minh dd/mm]** = đã mở ra kiểm, có ngày · **[suy luận]** = suy ra từ tài liệu, chưa kiểm.

---

## 1. Tóm tắt một dòng

7 trang dịch vụ, trang chủ và Liên hệ đã chạy trên nhánh `main`. Trang **Remote Office** dựng xong 9/9 khối trên nhánh `remote-office`. Đang **chờ nhà đăng ký mở khoá tên miền `baika.website`**.

---

## 2. Nhánh (branch) — mỗi nhánh là một bản riêng của code

| Nhánh | Commit mới nhất | Chứa gì | Đã lên GitHub |
| --- | --- | --- | --- |
| `main` | `aac95de` (29/09) | 7 trang dịch vụ · trang chủ · Liên hệ · spec Remote Office | ✅ **[xác minh 03/10]** |
| `remote-office` | `ca25e16` (02/10) + các commit sau đó | Mọi thứ của `main` + trang `/remote-office` + `vercel.json` + mail ghi đúng trang gửi + tài liệu repo | ✅ đến `ca25e16` **[xác minh 03/10]** |

`remote-office` đi trước `main` 13 commit và **chưa gộp (merge)**. Gộp khi ra mắt Remote Office thật — xem mục 7.

⚠️ Bản sửa "mail ghi đúng trang gửi" (`ContactForm.astro` + `api/contact.ts`) dùng chung cho cả 9 trang, nhưng hiện **chỉ có trên `remote-office`**. Form ở `main` vẫn ghi «Gửi từ: trang /lien-he» cho mọi trang. Sẽ tự hết khi gộp nhánh.

---

## 3. Đang chạy ở đâu

### Vercel — project `bk-web-update-sep-2026` (team `baika`, gói **Hobby**)

| Địa chỉ | Lấy code từ | Ghi chú |
| --- | --- | --- |
| `baika.tech` · `www.baika.tech` · `bk-web-update-sep-2026.vercel.app` | `main` (Production) | Bản chính hiện tại |
| Bản preview của nhánh `remote-office` | `remote-office` (Preview) | Bị khoá đăng nhập Vercel (*Deployment Protection — Standard*) |
| `baika.website` | `remote-office` (Preview) | Đã thêm trên Vercel. **Chưa chạy**, xem mục 4 |
| `baika.vn` | — | **Chưa** trỏ về project này. Vẫn là site cũ, chỉ dùng để tham khảo *[suy luận — chưa kiểm lại sau 29/09]* |

**Biến môi trường (environment variable** — giá trị cài trên Vercel, không nằm trong code**)** cho form gửi mail: `RESEND_API_KEY` · `CONTACT_TO` · `CONTACT_FROM`. Cả ba đã bật cho Preview **[xác minh 02/10 — `/api/health` trả `true` cả ba]**. Giá trị thật **không bao giờ** ghi vào repo.

Đã gửi thử form ở preview `remote-office`, mail về hộp thư công ty đúng tiêu đề và đúng trang gửi **[xác minh 02/10]**.

### Cách `baika.website` mở ra trang Remote Office

File `vercel.json` dùng **`routes`, không dùng `rewrites`**. Lý do: `rewrites` thua file tĩnh `index.html`. Chi tiết + bảng từng dòng: `docs/remote-office/quy-trinh-build.md` §5.

Đã kiểm `routes` đè được `index.html` bằng dòng thử `/?thu-baika-website` **[xác minh 02/10]**.

---

## 4. 🔴 Đang kẹt

| Việc | Kẹt ở đâu | Ai gỡ |
| --- | --- | --- |
| **`baika.website` chưa mở được** | Nhân Hòa (nơi mua tên miền) **tạm khoá vì chưa xác minh chủ thể**. Nameserver đang là `ns1/ns2.verification-hold.suspended-domain.com` **[xác minh 01/10 — ICANN Lookup]**. Tên miền tạo 14/08, bị khoá từ 30/08. Đã gửi yêu cầu mở khoá | Thắng ↔ Nhân Hòa |

ZoneDNS đã có bản ghi `A @ → 216.198.79.1`, nhưng chưa có tác dụng khi nameserver còn bị khoá.

**Mở khoá xong thì làm theo thứ tự:**

1. Kiểm nameserver đã về ZoneDNS (ICANN Lookup).
2. Vercel → Domains: dòng `baika.website` báo **Valid Configuration**.
3. Chạy hết danh sách kiểm ở `docs/remote-office/quy-trinh-build.md` §5.6.
4. Xoá dòng thử `thu-baika-website` trong `vercel.json`.

---

## 5. Còn chờ quyết — agent KHÔNG tự quyết

Danh sách đầy đủ của Remote Office: `docs/remote-office/SPEC-MASTER.md` §7. Các mục còn mở:

| # | Câu hỏi | Ai quyết | Đang chạy tạm |
| --- | --- | --- | --- |
| 5 | Giữ chi phí cố định **1.800.000 đ/người**? | Sếp | Giữ, theo Spec v3 — **[suy luận từ câu chốt của sếp]** |
| 10 | Số «23,5» cỡ 100px (Figma, ngoài thang chữ) hay 80px? | Thắng | 80px (`--fs-display-1`) |
| 11 | Khoảng `10px` (ngoài thang) | Thắng | 12px (`--s-3`) |
| 12 | Danh sách ô «Lĩnh vực» của form Remote Office | Thắng | Để trống (không có lựa chọn) |
| 13 | Remote Office có mục trong menu `baika.vn` không? | Thắng | Không có |
| 16 | Ô bảng cao cố định 66px hay theo nội dung | Thắng | Theo nội dung |
| 17 | Lề trang tablet 24 hay 40 | Thắng | 40 |
| L14 | Dòng pháp lý đặt ở đâu | Thắng | Chưa đặt |
| — | Logo trên `baika.website` dẫn về đâu | Thắng | Về chính landing |
| — | Nâng **Vercel Pro** trước khi ra mắt (Hobby chỉ cho dùng phi thương mại) | Sếp | Hobby |
| — | `baika.tech` là bản chính thật hay bản thử? Thẻ `canonical` trỏ đâu? | Thắng | — |
| — | **Trang chủ không có thẻ `<h1>`** (tiêu đề chính của trang — Google và trình đọc màn hình dựa vào nó). Đề xuất: thêm một `<h1>` ẩn khỏi mắt nhưng máy đọc được, ví dụ «BAIKA — kiến tạo hệ thống vận hành cho doanh nghiệp». Cần Thắng chốt câu chữ **[xác minh 03/10 — `pnpm kiem-tra:trang`: `/` có h1=0]** | Thắng | Không có |

Mục chung cả site (Nav Button thiếu Hover/Focus, link chết ở 2 ô bento…): `CLAUDE.md` §11.

---

## 6. Ba việc tiếp theo

1. **Theo dõi Nhân Hòa.** Mở khoá xong → làm 4 bước ở mục 4.
2. **Chốt các mục ở mục 5** — ít nhất #5 (sếp) và Vercel Pro, vì hai mục này chặn ra mắt.
3. **Đợt 2 hoàn thiện repo:** kiểm tra tự động trên GitHub (CI), mẫu Pull Request. *Đề xuất 03/10, chưa duyệt.*

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
