# Chuyển baika.vn sang baika-website-v2

*Lập 05/10/2026 · Thắng chốt tên gọi: **baika-website-v2** = repo này (`BK.-Web-Update-Sep-2026`) · **bản cũ** = site Next.js đang chạy ở baika.vn.*

Hiện tại: v2 chạy công khai ở `baika.tech` (**bản thử**) và `baika.website` (Remote Office, `noindex`). Khách thật vào baika.vn vẫn thấy **bản cũ**. File này gom mọi việc phải xong trước ngày trỏ baika.vn sang v2.

Ký hiệu: 🔴 chặn — chưa xong không trỏ · 🟡 nên xong trước · 🟢 làm đúng ngày chuyển. **[xác minh]** / **[suy luận]** như các file khác.

## 1. 🔴 Chặn

| # | Việc | Ai | Tình trạng |
| --- | --- | --- | --- |
| C1 | **Vercel Pro** — gói Hobby chỉ cho dùng cá nhân, phi thương mại (điều khoản Vercel) **05/10:** sếp (anh Tú — Alviss Wu) báo **đang chờ duyệt**. | Sếp | Chờ duyệt | |
| C2 | **Danh sách toàn bộ đường dẫn bản cũ** + bảng chuyển hướng sang v2 — tránh link cũ ra 404. Đã biết bản cũ có `/tram-y-tuong` · `/tram-y-tuong?tab=ideas` · `/tai-nguyen` · `/ve-baika` mà v2 chưa có **[xác minh 05/10]** | Agent rà · Thắng quyết | Rà xong 05/10 (2 lượt, 176 địa chỉ) → §4, nội dung thiếu → §5. Còn các ô ❓ chờ quyết |
| C3 | **Bản cũ có đăng nhập + dữ liệu?** Bản cũ gọi `/api/auth/session` và `/api/ideas` **[xác minh]**. Cần sếp trả lời: (a) đã có ai thật sự đăng nhập / tạo tài khoản chưa, hay chỉ là demo? (b) đăng nhập xong người dùng có thêm những gì? (c) nếu có, thông tin tài khoản và dữ liệu đang lưu ở đâu, ai quản lý? **05/10 — sếp trả lời:** không có dữ liệu, web cũ không ai vào/không ai dùng → 3 kho leads/bookings/assessments không cần xuất. **[sếp xác nhận, chưa kiểm máy chủ]** | Sếp | ✅ Hết chặn | |
| C4 | **Chính sách bảo mật** còn là bản nháp — **Kapi (agent của sếp) rà soát và viết lại** khi sếp tới công ty **05/10:** Kapi đã sửa và duyệt xong — chờ nhận bản cuối. | Sếp + Kapi | Chờ bản cuối từ Kapi | |
| C5 | **Lời hứa chưa duyệt:** 5 nút «… miễn phí» trỏ tới công cụ chưa có (`viec-cho` #1, #2) — **bộ công cụ do sếp + Kapi tạo**, xong thì cập nhật lên repo để agent tích hợp vào source · SLA trang AI (#6) · ô mức khẩn cấp trang Pháp lý (#3) **05/10 — sếp chốt:** công cụ dùng lại logic v1, kết quả tạm gửi mail. Còn chờ duyệt: SLA trang AI (#6), ô khẩn cấp Pháp lý (#3). | Sếp + Kapi · Thắng | Công cụ ✅ chốt · lời hứa còn chờ | |
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
| `/tram-y-tuong` (+ `?tab=ideas`) | Trạm Ý Tưởng: 3 gói + kho mô hình | Chưa | `/sap-ra-mat` | ✅ Thắng chốt 05/10 |
| `/tram-y-tuong/<slug>` — **155 trang**, mỗi mô hình 1 trang riêng, có tiêu đề riêng (vd. «Nền tảng đặt thợ sửa chữa tại nhà (managed) \| Trạm Ý Tưởng BAIKA») | Chi tiết mô hình | Chưa | `/sap-ra-mat` (gộp 1 quy tắc) | ✅ Thắng chốt 05/10 |
| `/tai-nguyen` | Kho Tài Nguyên (nút tải chưa chạy) | Chưa | `/sap-ra-mat` | ✅ Thắng chốt 05/10 |
| `/ve-baika` | Tầm nhìn · Sứ mệnh · Giá trị cốt lõi | Chưa | `/` (trang chủ) | ✅ Thắng chốt 05/10 |
| `/tram-ket-noi` | Trang **trắng**, không có nội dung **[xác minh]**. Trang chủ cũ trỏ Trạm Kết Nối ra ngoài: `https://tramketnoi.com/` | Chưa | `https://tramketnoi.com/` | ✅ Thắng chốt 05/10 |
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

### 4.5 Bản sao tĩnh `/baika-suite/` — trùng nội dung, cũng phải chuyển

Lượt rà sâu (05/10 chiều) phát hiện 7 trang dịch vụ và 5 công cụ của bản cũ thực chất là **file HTML tĩnh** nằm ở `/baika-suite/…`, và mỗi trang mở được bằng **2 địa chỉ** (giống hệt từng ký tự) **[xác minh]**:

| Địa chỉ phụ (bản sao) | Trùng với | Chuyển về (v2) |
| --- | --- | --- |
| `/baika-suite/advisory/` · `…/index.html` | `/advisory` | `/advisory` ✅ |
| `/baika-suite/baika-ai-operating-system/` · `…/index.html` · `…/diagnosis.html` | `/ai-os` · `/ai-os/diagnosis` | `/ai-os` ✅ |
| `/baika-suite/ceo-blueprint/` · `…/index.html` · `…/assessment.html` | `/ceo-blueprint` · `…/assessment` | `/ceo-blueprint` ✅ |
| `/baika-suite/finance/` · `…/index.html` · `…/assessment.html` | `/finance` · `…/assessment` | `/finance` ✅ |
| `/baika-suite/legal-tax/` · `…/index.html` | `/legal-tax` | `/legal-tax` ✅ |
| `/baika-suite/baika-brand-launch-system/` · `…/index.html` · `…/diagnostic.html` | `/marketing` · `…/diagnostic` | `/marketing` ✅ |
| `/baika-suite/remote-ops/` · `…/index.html` · `…/survey.html` | `/remote-ops` · `…/survey` | `/remote-ops` ✅ |

→ Một quy tắc `/baika-suite/:path*` là đủ cho cả nhóm. Ảnh logo từng dịch vụ cũng nằm ở đây (`/baika-suite/<dịch vụ>/logo-emblem.png`) — không cần giữ.

Lỗi nhỏ trên bản cũ: trang `/ai-os/diagnosis` có link tới `/index.html` → **404** **[xác minh]**. Không ảnh hưởng v2.

### 4.6 Bản cũ đang thu dữ liệu khách qua 3 cửa

Mã các trang dịch vụ cũ gửi dữ liệu về máy chủ cũ qua **3 API** **[xác minh: đọc mã, không gửi thử]**:

| API | Từ đâu | Nghĩa |
| --- | --- | --- |
| `/api/v1/public/leads` | Form liên hệ ở cả 7 trang dịch vụ | Kho «khách để lại thông tin» |
| `/api/v1/public/bookings` | Trang Tư vấn + trang CEO | Kho **đặt lịch** |
| `/api/v1/public/assessments` | 5 công cụ chẩn đoán | Kho câu trả lời tự đánh giá |
| `/api/v1/public/site` · `/api/v1/me/sites` (401) | 7 trang dịch vụ | Cấu hình site lấy từ máy chủ — gợi ý bản cũ là một **hệ quản trị nhiều site** **[suy luận]** |

v2 không lưu gì — form chỉ gửi mail qua Resend. Nên khi chuyển: **dữ liệu cũ nằm lại máy chủ cũ**. Bổ sung cho `viec-cho` #25.

### 4.7 Tổng kết lượt rà

- **176 địa chỉ** đã kiểm: 175 trả 200, 1 trả 404 (`/index.html`). Gồm 155 trang mô hình — **cả 155 đều mở được** **[xác minh từng trang]**.
- Ngoài ra ~110 địa chỉ đoán thử (đăng nhập, admin, blog, chính sách, API…) — chỉ những cái ghi trong §4.1–4.6 là tồn tại.
- Link ra ngoài trên bản cũ: `https://tramketnoi.com/` · `https://zalo.me/0905247365` · `tel:0905247365` · `mailto:baika.vn@gmail.com`. 🟡 **v2 chưa có nút Zalo** — trang chủ cũ có nút «Chat Zalo» nổi.
- Ảnh chia sẻ (og:image) của trang chẩn đoán thương hiệu cũ trỏ tên miền khác: `https://baikamkt.com/og-image.png` — gợi ý từng có site marketing riêng **[suy luận]**.
- **Bản chụp toàn bộ** chữ 176 trang + mã HTML gốc 14 file: `docs/trang-con-thieu/du-lieu/ban-cu/`. Đã dò: không có khoá bí mật, chỉ có email/điện thoại công ty và số mẫu.

### 4.8 Lượt rà 3 (05/10 chiều) — trang quản trị từng dịch vụ + tên miền liên quan

- **Mỗi dịch vụ có trang quản trị riêng:** `/<dịch vụ>/admin` (chuyển về đăng nhập) + bản tĩnh `/baika-suite/<dịch vụ>/admin.html` (vd. «Quản trị — Finance Readiness | BAIKA»). Mã `shared-auth.js` ghi: mỗi «web con» có người quản trị riêng, quyền do máy chủ kiểm. → Bản cũ là **hệ quản trị nhiều web con**, mỗi dịch vụ một khu quản trị. Bổ sung câu hỏi #25: ai đang quản trị từng dịch vụ?
- **Nội dung khách thấy = dữ liệu trong mã trang.** API ghi đè nội dung `/api/v1/public/site-content` trả 404 cho cả 7 dịch vụ **[xác minh]** → bản chụp trong repo là đầy đủ.
- **`tramketnoi.com`** (Trạm Kết Nối — trụ 08 trên trang chủ cũ): **site riêng, đang chạy**, không phải một phần của baika.vn → **không bị ảnh hưởng** khi chuyển. Có 10 trang: `/` · `/directory` · `/analytics.html` · `/pricing` · `/login` · `/wizard` · `/edit-profile` · `/stories` · `/terms` · `/privacy`. Có **Chính sách bảo mật riêng** (`/privacy`) — tham khảo được cho việc Kapi viết lại (#23). Không chụp nội dung (ngoài phạm vi chuyển).
- **`baikamkt.com`**: trả **502 Bad Gateway** (máy chủ hỏng hoặc đã tắt) **[xác minh 05/10]**. Chỉ còn được nhắc trong ảnh chia sẻ của trang chẩn đoán thương hiệu cũ.

## 5. Nội dung bản cũ CHƯA có trên v2 — cần Thắng xác nhận «cắt có chủ ý»

So từng khối (section) của 7 trang dịch vụ cũ với v2 **[xác minh bằng máy, rồi agent đọc lại từng tên khối]**. Mỗi trang cũ có **14–18 khối**; v2 có **6 khối** (Vấn đề · BAIKA sẽ làm gì · Bạn sẽ nhận được gì · Các gói · FAQ · Liên hệ). Phần lớn chênh lệch là do **thiết kế lại có chủ ý** (xem «danh sách cắt» trong `_chung/ban-do-section.md`), nhưng cần Thắng xác nhận từng nhóm để không mất thông tin ngoài ý muốn. Nguyên văn mọi khối: **`docs/trang-con-thieu/noi-dung-v1.md`** (bản đọc được) và `du-lieu/ban-cu/noi-dung/` (chữ hiển thị từng trang).

**Khối có ở gần như MỌI trang cũ, v2 không có:**

| Khối cũ | Có ở | Ghi chú |
| --- | --- | --- |
| «Công cụ hỗ trợ & Đánh giá» / «Thử ngay — không cần đăng ký» / «Tự tính, tự thấy» | 7/7 | Máy tính nhỏ + link 5 công cụ chẩn đoán (§4.2) |
| «Ưu đãi & Các gói đặc biệt» / ưu đãi theo mùa | 6/7 | **Ưu đãi giá** — cam kết với khách, sếp duyệt nếu đưa lại |
| «Dịch vụ này dành cho ai?» | 7/7 | Đối tượng phù hợp |
| «Vì sao chọn BAIKA?» | 7/7 | Điểm khác biệt |
| «Sau khi triển khai cùng BAIKA» | 7/7 | Có thể đã gộp vào «Bạn sẽ nhận được gì» — cần đối chiếu |
| «Phạm vi — 8 module / 8 nhóm dịch vụ» | 4/7 (AI, Tài chính, Pháp lý, Vận hành) | Bảng module chi tiết |

**Khối riêng từng trang:**

| Trang | Khối cũ không có trên v2 |
| --- | --- |
| Tư vấn | «Tư vấn theo 7 trục hệ thống» · «Bốn tầng can thiệp» |
| AI | «Ba lớp giải pháp» · «AI làm được gì cho từng bộ phận?» · «Công nghệ đúng bài toán» (showcase) · «Đặt lịch demo» |
| CEO | «5 câu hỏi mọi CEO phải trả lời được» · «Một bản đồ — 10 trụ cột» · «BAIKA Academy» · «Chọn chương trình» · «Sáu học phần cốt lõi» · «Đăng ký tư vấn lộ trình đào tạo» |
| Tài chính | «Khung 4 bước» · «Bốn trụ cột tài chính» · «Tài chính đủ vững…» (điểm mạnh) · «Đồng hành theo mùa vụ» · chỉ số minh hoạ «LEDGER» |
| Pháp lý | «Từ bị động sang chủ động» · «Năm trụ cột» · «Ba công cụ hỗ trợ quyết định» · «Đồng hành theo mùa, định kỳ & đột xuất» |
| Marketing | «Hệ thống thương hiệu 9 tầng» · «Một mái nhà, đủ mọi vũ khí» · «8 dịch vụ» · «Chiến dịch chạm mọi điểm» (IMC) · «Chọn gương mặt cho thương hiệu» (KOL) · «Những con số biết cháy» (**số liệu case study**) · «Gói combo bốc lửa» |
| Vận hành | «6 cấu phần» · «Khi vận hành là hệ thống…» (sơ đồ) · «Bốn hạng mục» · «Chọn nhịp phù hợp» · «Bắt đầu bằng một buổi chẩn đoán» |

**Khác (không phải trang dịch vụ):** trang chủ cũ có tagline «Hệ sinh thái tăng trưởng doanh nghiệp» và câu mô tả ngắn cho từng trụ (vd. «Định hướng chiến lược, mô hình và lộ trình tăng trưởng.») — v2 trang chủ chỉ có tên trụ; nút «Chat Zalo».

❓ **Thắng chọn cho mỗi nhóm:** (a) đã cắt có chủ ý — bỏ · (b) đưa vào v2 sau (thiết kế thêm khối) · (c) giữ trong bản chụp để tham khảo.
