# Chuyển baika.vn sang baika-website-v2

*Lập 05/10/2026 · Thắng chốt tên gọi: **baika-website-v2** = repo này (`BK.-Web-Update-Sep-2026`) · **bản cũ** = site Next.js đang chạy ở baika.vn.*

Hiện tại: v2 chạy công khai ở `baika.tech` (**bản thử**) và `baika.website` (Remote Office, `noindex`). Khách thật vào baika.vn vẫn thấy **bản cũ**. File này gom mọi việc phải xong trước ngày trỏ baika.vn sang v2.

Ký hiệu: 🔴 chặn — chưa xong không trỏ · 🟡 nên xong trước · 🟢 làm đúng ngày chuyển. **[xác minh]** / **[suy luận]** như các file khác.

## 1. 🔴 Chặn

| # | Việc | Ai | Tình trạng |
| --- | --- | --- | --- |
| C1 | **Vercel Pro** — gói Hobby chỉ cho dùng cá nhân, phi thương mại (điều khoản Vercel) | Sếp | Thắng báo sếp |
| C2 | **Danh sách toàn bộ đường dẫn bản cũ** + bảng chuyển hướng sang v2 — tránh link cũ ra 404. Đã biết bản cũ có `/tram-y-tuong` · `/tram-y-tuong?tab=ideas` · `/tai-nguyen` · `/ve-baika` mà v2 chưa có **[xác minh 05/10]** | Agent rà · Thắng quyết | Agent hẹn rà 13:00 05/10 → điền §4 |
| C3 | **Bản cũ có đăng nhập + dữ liệu?** Bản cũ gọi `/api/auth/session` và `/api/ideas` **[xác minh]**. Cần sếp trả lời: (a) đã có ai thật sự đăng nhập / tạo tài khoản chưa, hay chỉ là demo? (b) đăng nhập xong người dùng có thêm những gì? (c) nếu có, thông tin tài khoản và dữ liệu đang lưu ở đâu, ai quản lý? | Sếp | Chờ — `viec-cho.md` #25 |
| C4 | **Chính sách bảo mật** còn là bản nháp — **Kapi (agent của sếp) rà soát và viết lại** khi sếp tới công ty | Sếp + Kapi | Chờ — `viec-cho.md` #23 |
| C5 | **Lời hứa chưa duyệt:** 5 nút «… miễn phí» trỏ tới công cụ chưa có (`viec-cho` #1, #2) — **bộ công cụ do sếp + Kapi tạo**, xong thì cập nhật lên repo để agent tích hợp vào source · SLA trang AI (#6) · ô mức khẩn cấp trang Pháp lý (#3) | Sếp + Kapi · Thắng | Chờ |
| C6 | **DNS baika.vn** — **Thắng truy cập được** (xác nhận 05/10). Trước khi sửa: chụp/ghi lại TOÀN BỘ bản ghi hiện có (A, CNAME, MX, TXT…) để còn khôi phục, và không xoá bản ghi email/xác minh | Thắng | Sẵn sàng — làm ở §3 |

## 2. 🟡 Nên xong trước

- Gộp các nhánh đang chờ: `bo-sap-ra-mat` · `sap-ra-mat` (header mới + trang Sắp ra mắt) · `spec-4-trang`.
- `robots.txt` + `sitemap.xml` — repo chưa có **[xác minh]**.
- Gửi mail từ form (Resend): kiểm tên miền gửi có cần xác minh lại khi đổi sang baika.vn **[chưa kiểm]**.
- Việc nhỏ: favicon + xoá 3 ảnh logo cũ (#14) · màn > 2560 (#15) · màu nút Button 2 (#8) · blur header (#24, nhánh `sap-ra-mat`).

## 3. 🟢 Ngày chuyển (agent sửa code, Thắng push + đổi DNS)

1. Ghi lại bảng DNS hiện tại của baika.vn (C6).
2. Agent sửa `src/lib/ten-mien.ts` + `vercel.json`: site chính = `baika.vn`; `baika.tech` chuyển về `baika.vn`; logo trên `baika.website` trỏ `baika.vn`.
3. Agent thêm bảng chuyển hướng đường dẫn cũ (§4) vào `vercel.json`.
4. Gắn `baika.vn` + `www.baika.vn` vào project Vercel → đổi DNS theo hướng dẫn Vercel.
5. Kiểm: cửa sổ ẩn danh mở 9 trang + vài link cũ · gửi thử form · Google Search Console.

Canonical 9 trang đã trỏ `baika.vn` từ trước **[xác minh: `astro.config.mjs` `site`]**.

## 4. Danh sách đường dẫn bản cũ

*Agent điền sau lượt rà (C2).*

| Đường dẫn cũ | Nội dung | Trang v2 tương ứng | Quyết |
| --- | --- | --- | --- |
| `/tram-y-tuong` | Trạm Ý Tưởng — 3 gói + form | chưa có → tạm `/sap-ra-mat`? | Thắng |
| `/tram-y-tuong?tab=ideas` | Kho 155 mô hình | chưa có | Thắng |
| `/tai-nguyen` | Kho Tài Nguyên (nút tải chưa chạy) | chưa có | Thắng |
| `/ve-baika` | Tầm nhìn · Sứ mệnh · Giá trị cốt lõi | chưa có | Thắng |
