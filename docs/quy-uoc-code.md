# Quy ước viết code

*Lập 13/10/2026 · vai trò: CODING STANDARDS (bảng ánh xạ: `docs/README.md`). Luật token / màu / chữ: `docs/he-thong-thiet-ke.md` §2 — không chép lại ở đây.*

Người duyệt code **không phải lập trình viên**. Mọi quy ước dưới đây phục vụ một mục tiêu: **người không biết code đọc được, và agent phiên sau sửa được mà không phá.**

## 1. Đọc được bởi người không biết code

- **Tên nói lên nó là gì.** Tên file, tên biến, tên class được dùng **tiếng Việt không dấu** khi nói về nội dung (`uoc-tinh.ts`, `ten-mien.ts`, `SITE_CHINH`, `.goi__eyebrow`); tên component Astro dạng `PascalCase` tiếng Anh như đang có (`PricingCard.astro`).
- **Chọn thứ đơn giản**, kể cả khi thứ phức tạp «xịn» hơn. Không ai ở đây gỡ rối được một abstraction thông minh.
- **Chú thích tiếng Việt, giải thích «vì sao»** — nhất là chỗ khác Figma có chủ ý, chỗ có ngày chốt, chỗ dễ bị «sửa cho đúng» nhầm. Viết ngày và người chốt: `✅ 13/10 — Thắng chốt (viec-cho #24): …`.
- **Giải thích thuật ngữ ngay lần đầu dùng** trong chú thích (vd. *serverless function* — đoạn code chỉ chạy khi có người gọi).
- Không thêm thư viện khi tự viết được vài dòng (vd. `sitemap.xml.ts` tự sinh, không dùng `@astrojs/sitemap`). Thêm / bớt thư viện **phải hỏi Thắng**.

## 2. Component và CSS

- **Một component = một file `.astro`**, CSS nằm trong `<style>` của file đó (tự giới hạn phạm vi). Không tách file CSS riêng.
- **Dùng ở mọi trang → `src/styles/global.css`.** Thuộc một khối → `<style>` của component. Không có đường thứ ba.
- **Mọi màu, khoảng cách, bo góc, bóng, blur qua `var(--…)`** — xem `he-thong-thiet-ke.md` §2. `pnpm kiem-tra` chặn mã màu viết cứng và trắng thô.
- **Mặc định không JS.** JS chỉ cho thứ thật sự tương tác; khi có, trang vẫn đọc được khi JS hỏng.
- Responsive: thiết kế theo 375 / 768 / 1280; component **đổi dạng** ở màn nhỏ.
- Trạng thái tương tác dùng đúng token Hover / Active / Focus — `he-thong-thiet-ke.md` §4.
- `api/mail` là ngoại lệ được viết màu thẳng trong HTML của **thư** (trình đọc mail không hiểu `var(--…)`); `kiem-tra` chỉ quét luật khoá bí mật ở `api/`.

## 3. Định dạng file

| | |
| --- | --- |
| Mã hoá | UTF-8 |
| Xuống dòng | **LF** — `.gitattributes` ép khi lưu vào git, kể cả sửa trên Windows |
| Thụt lề | 2 dấu cách (`.editorconfig`) |
| Markdown | Không tự xoá dấu cách cuối dòng |

## 4. Bảo mật trong code

- **Không bao giờ** đặt khoá API, token, mật khẩu vào file nào — kể cả chú thích, kể cả tạm. Khoá ở biến môi trường Vercel (`docs/ky-thuat.md` §4).
- Dữ liệu người dùng gửi lên được **kiểm lại ở máy chủ** (`api/`), cắt độ dài, chặn chèn dòng vào tiêu đề thư.
- Repo **công khai**: không email / số điện thoại cá nhân, không dữ liệu khách trong code hay ví dụ.

## 5. Kiểm trước khi báo «xong»

1. `pnpm build` — **0 lỗi**.
2. `pnpm kiem-tra` — 3/3 OK.
3. Bài kiểm riêng nếu đụng tới: `kiem-tra:uoc-tinh` · `kiem-tra:chan-doan`.
4. **Chụp màn và MỞ RA NHÌN** ở 1280 và 375. Số đếm khớp không chứng minh kết quả đúng (`DEC-035-A`).

## 6. Lời commit

Tiếng Việt **không dấu**, nói **đã đổi gì** theo góc người xem: `Header: nen mo khi cuon theo Figma …`. Dòng cuối ghi người cùng làm nếu có. Quy trình nhánh / PR: `CONTRIBUTING.md`.
