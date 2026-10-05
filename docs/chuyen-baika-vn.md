# Chuyển baika.vn sang baika-website-v2

*Lập 05/10/2026 · Thắng chốt tên gọi: **baika-website-v2** = repo này (`BK.-Web-Update-Sep-2026`) · **bản cũ** = site Next.js đang chạy ở baika.vn.*

Hiện tại: v2 chạy công khai ở `baika.tech` (**bản thử**) và `baika.website` (Remote Office, `noindex`). Khách thật vào baika.vn vẫn thấy **bản cũ**. File này gom mọi việc phải xong trước ngày trỏ baika.vn sang v2.

Ký hiệu: 🔴 chặn — chưa xong không trỏ · 🟡 nên xong trước · 🟢 làm đúng ngày chuyển. **[xác minh]** / **[suy luận]** như các file khác.

## 1. 🔴 Chặn

| # | Việc | Ai | Tình trạng |
| --- | --- | --- | --- |
| C1 | **Vercel Pro** — gói Hobby chỉ cho dùng cá nhân, phi thương mại (điều khoản Vercel) | Sếp | Thắng báo sếp |
| C2 | **Danh sách toàn bộ đường dẫn bản cũ** + bảng chuyển hướng sang v2 — tránh link cũ ra 404. Đã biết bản cũ có `/tram-y-tuong` · `/tram-y-tuong?tab=ideas` · `/tai-nguyen` · `/ve-baika` mà v2 chưa có **[xác minh 05/10]** | Agent rà · Thắng quyết | Rà xong 05/10 → §4. Còn các ô ❓ chờ quyết |
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

*Agent rà 05/10/2026 13:00 bằng Chrome, **chỉ đọc** (không đăng nhập, không gửi form). Cách rà: trang chủ bản cũ thực chất là khung nhúng file tĩnh `/trangchu.html` → đọc mọi link trong đó; đọc link + mã của từng trang; thử thêm ~70 đường dẫn hay gặp (đăng nhập, admin, blog, chính sách…) xem cái nào tồn tại. Bản cũ **không có** `robots.txt` lẫn `sitemap.xml` (404) **[xác minh]** → không có danh sách chính thức, nên vẫn có thể sót trang không ai link tới.*

Cột «Quyết»: ✅ = map thẳng, agent tự làm · ❓ = Thắng/sếp chọn.

### 4.1 Trang công khai

| Đường dẫn cũ | Nội dung bản cũ | v2 có? | Đề xuất chuyển về | Quyết |
| --- | --- | --- | --- | --- |
| `/` | Trang chủ (nhúng `/trangchu.html`) | Có | `/` | ✅ |
| `/trangchu.html` | File tĩnh của trang chủ cũ | — | `/` | ✅ |
| `/advisory` | Business Advisory | Có, **cùng đường dẫn** | giữ nguyên | ✅ |
| `/ai-os` | AI Operating System | Có, cùng đường dẫn | giữ nguyên | ✅ |
| `/ceo-blueprint` | CEO Operating Blueprint | Có, cùng đường dẫn | giữ nguyên | ✅ |
| `/finance` | Finance Readiness | Có, cùng đường dẫn | giữ nguyên | ✅ |
| `/legal-tax` | Legal & Tax Control | Có, cùng đường dẫn | giữ nguyên | ✅ |
| `/marketing` | Brand Launch System | Có, cùng đường dẫn | giữ nguyên | ✅ |
| `/remote-ops` | Remote Ops | Có, cùng đường dẫn | giữ nguyên | ✅ |
| `/tram-y-tuong` (+ `?tab=ideas`) | Trạm Ý Tưởng: 3 gói + kho mô hình | Chưa | `/sap-ra-mat` | ❓ |
| `/tram-y-tuong/<slug>` — **155 trang**, mỗi mô hình 1 trang riêng, có tiêu đề riêng (vd. «Nền tảng đặt thợ sửa chữa tại nhà (managed) \| Trạm Ý Tưởng BAIKA») | Chi tiết mô hình | Chưa | `/sap-ra-mat` (gộp 1 quy tắc) | ❓ |
| `/tai-nguyen` | Kho Tài Nguyên (nút tải chưa chạy) | Chưa | `/sap-ra-mat` | ❓ |
| `/ve-baika` | Tầm nhìn · Sứ mệnh · Giá trị cốt lõi | Chưa | `/` hoặc `/sap-ra-mat` | ❓ |
| `/tram-ket-noi` | Trang **trắng**, không có nội dung **[xác minh]**. Trang chủ cũ trỏ Trạm Kết Nối ra ngoài: `https://tramketnoi.com/` | Chưa | `https://tramketnoi.com/` hoặc `/sap-ra-mat` | ❓ |
| `/#lead` | Form liên hệ ở trang chủ cũ | `/lien-he` | (`#` không chuyển được bằng máy chủ — chỉ ảnh hưởng link nội bộ cũ) | — |

### 4.2 🔴 Công cụ chẩn đoán — bản cũ ĐANG CÓ, v2 chưa có

Phát hiện quan trọng: 5 công cụ «miễn phí» mà `viec-cho` #1 #2 ghi là «tài liệu nói đã bỏ» **vẫn đang chạy trên bản cũ** **[xác minh — trang trả 200, có tiêu đề và ô nhập]**. Nút trên trang dịch vụ cũ trỏ thẳng vào chúng.

| Đường dẫn cũ | Tiêu đề trang | v2 hiện tại | Quyết |
| --- | --- | --- | --- |
| `/ceo-blueprint/assessment` | «Business Blueprint Assessment» | Nút trỏ về form liên hệ | ❓ |
| `/finance/assessment` | «Finance Readiness Assessment» | như trên | ❓ |
| `/remote-ops/survey` | «Khảo sát Vận hành Doanh nghiệp» | như trên | ❓ |
| `/ai-os/diagnosis` | «Khảo sát cơ hội ứng dụng AI» | như trên | ❓ |
| `/marketing/diagnostic` | «Chẩn đoán thương hiệu» | như trên | ❓ |

Cả 5 công cụ **gửi kết quả về** `/api/v1/public/assessments` của máy chủ bản cũ **[xác minh: đọc mã trang; không gửi thử]** → bản cũ **đang lưu câu trả lời của khách** ở đâu đó. Liên quan trực tiếp tới C3 (đăng nhập + dữ liệu), C5 (bộ công cụ sếp + Kapi làm) và Chính sách bảo mật. Câu hỏi cho sếp: bộ công cụ mới có **thay** 5 công cụ này không, hay dùng lại chúng?

Tạm thời khi chuyển: chuyển 5 đường dẫn về **trang dịch vụ tương ứng** của v2 (vd. `/finance/assessment` → `/finance`).

### 4.3 Đăng nhập & quản trị — không phải trang cho khách

| Đường dẫn cũ | Thấy gì | Ghi chú |
| --- | --- | --- |
| `/sign-in` | «Đăng Nhập — Hệ thống Quản lý Đối tác BAIKA»: email + mật khẩu, «Lưu đăng nhập», «Quên mật khẩu», «Đăng nhập với Google». Trang chủ cũ có link «Đăng nhập · Tài khoản» | Cách đăng nhập được hỗ trợ: Google + email/mật khẩu **[xác minh qua `/api/auth/providers`]** |
| `/admin`, `/admin/ideas`, `/admin/users` | Chuyển về `/sign-in` khi chưa đăng nhập | **Có trang quản trị** quản lý mô hình + người dùng |
| `/profile` | Trang hồ sơ (cần đăng nhập) | |
| `/api/users` | Trả 401 (cần quyền) | Có danh sách người dùng trên máy chủ |
| `/api/auth/*`, `/api/ideas`, `/api/v1/public/assessments` | API của bản cũ | Hết hoạt động khi baika.vn trỏ sang v2 |

→ Bổ sung cho câu hỏi C3 (`viec-cho` #25): bản cũ là «**Hệ thống Quản lý Đối tác**» có người dùng, trang quản trị, và kho câu trả lời chẩn đoán của khách. Trước ngày chuyển phải biết: ai đang dùng, dữ liệu nằm ở máy chủ/cơ sở dữ liệu nào, có cần **xuất ra lưu trữ** trước khi tắt không.

### 4.4 Không tồn tại trên bản cũ (404) — không cần chuyển

`/lien-he` · `/blog` · `/tin-tuc` · `/about` · `/contact` · `/privacy` · `/chinh-sach-bao-mat` · `/dang-nhap` · `/login` · `/sign-up` · `/dashboard` · `/remote-office` · `/ideas` · `/tai-nguyen/<slug>` và các mẫu tương tự **[xác minh 05/10]**.
