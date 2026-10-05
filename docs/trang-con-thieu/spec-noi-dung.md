# Spec nội dung — 4 trang còn thiếu (lấy từ site cũ baika.vn)

**Trạng thái:** `DRAFT` — bản thu thập nguyên văn, **chưa ai duyệt** · Lập 05/10/2026
**Quyền:** file này ghi **chữ · con số · dữ liệu** đang có trên site cũ. Nó **không** quyết trang mới sẽ viết gì — mỗi chỗ đánh 🔴 ở §6 phải được Thắng / sếp / Pháp lý chốt trước khi đưa lên site mới.
**Nguồn:** đọc trực tiếp site đang chạy bằng trình duyệt Chrome ngày 05/10/2026 **[xác minh]**. Site cũ dựng bằng Next.js, chữ hiện ra sau khi JavaScript chạy — đọc bằng công cụ tải trang thường chỉ thấy «Đang tải hệ thống...».

| # | Trang | URL site cũ | Phạm vi site mới (theo `sitemap.md`) |
| --- | --- | --- | --- |
| A | Trạm Ý Tưởng — trang giới thiệu gói | `/tram-y-tuong` | Ngoài v1 · hiện trỏ về `/sap-ra-mat` |
| B | Kho Tàng Chiến Lược (Kho Mô Hình Đóng Gói) | `/tram-y-tuong?tab=ideas` | Ngoài v1 |
| C | Kho Tài Nguyên | `/tai-nguyen` | Chưa có trong sitemap |
| D | Về BAIKA (Giới thiệu) | `/ve-baika` | Ngoài v1 («Giới thiệu») |

Chữ trong «» là **nguyên văn** — giữ dấu, giữ chữ hoa/thường, giữ cả lỗi chính tả nếu có (vd. «Scaleability»).

Ký hiệu: **[xác minh]** = đọc trực tiếp · **[suy luận]** = đoán từ cấu trúc, chưa kiểm.

---

## 0. Phần chung của site cũ (A, B, C)

**Thanh đầu trang** — khác hẳn header site mới:

| Phần | Nguyên văn | Đích |
| --- | --- | --- |
| Logo | «BAIKA» «JSC» «HỆ THỐNG ĐANG VẬN HÀNH» | `/` |
| Link | «Quay về Trạm Ý Tưởng» | `/tram-y-tuong` |
| Link | «Kho Mô Hình Đóng Gói» | `/tram-y-tuong?tab=ideas` |
| Link | «Liên hệ tư vấn» | `/#lead` |
| Nút mobile | «☰» | — |

**Chân trang:**

- «CÔNG TY CỔ PHẦN CÔNG NGHỆ BAIKA»
- «BAIKA TECHNOLOGICAL JOINT STOCK COMPANY»
- «Địa chỉ:» «Tầng 15, 72 Lê Thánh Tôn, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh» *(tên phường/quận CŨ — site mới ghi «P. Sài Gòn, Thành phố Hồ Chí Minh»)*
- «Hotline:» «0905.247.365»
- «Email:» «baika.vn@gmail.com» → `mailto:`

⚠️ Site cũ có lớp chống sao chép: khi đọc bằng máy, địa chỉ và email trong chân trang bị **xáo thành ký tự rác** (vd. «baika.vn@L4D>3VUJW») **[xác minh]**. Bản đúng ở trên lấy từ lần đọc mà chữ chưa bị xáo. Không ảnh hưởng gì tới site mới.

**Thẻ tiêu đề trình duyệt (`<title>`):** A, B, C dùng chung «BAIKA — Đối tác Chiến lược & Vận hành Doanh nghiệp» — không có tiêu đề riêng từng trang. D có riêng «BAIKA · Về chúng tôi».

---

## A. Trạm Ý Tưởng — `/tram-y-tuong`

### A1. Hero

| Phần | Nguyên văn |
| --- | --- |
| Nhãn nhỏ | «NƠI KHỞI NGUỒN CỦA NHỮNG ĐẾ CHẾ» |
| H1 | «TRẠM Ý TƯỞNG» |
| Đoạn 1 | «Tại BAIKA, chúng tôi tin rằng một ý tưởng xuất chúng nếu thiếu đi bản vẽ thực thi chuẩn xác sẽ mãi chỉ là một giấc mơ dang dở.» |
| Đoạn 2 | «Trạm Ý Tưởng không đơn thuần là nơi lưu trữ các mô hình kinh doanh; đây là một Kho Tàng Chiến Lược – nơi mọi ý tưởng đều được 'cân đo đong đếm' qua lăng kính pháp lý, cấu trúc vốn và biên lợi nhuận.» |
| Nút | «Khám phá Mô Hình Đóng Gói» → kho B **[suy luận — cùng tên với link header]** |

### A2. Giải Pháp Chuyên Biệt — 3 gói

**H2** «Giải Pháp Chuyên Biệt» · **Mô tả** «Thiết kế riêng cho từng giai đoạn phát triển của doanh nghiệp bạn.»

| | Gói 1 | Gói 2 *(nổi bật)* | Gói 3 |
| --- | --- | --- | --- |
| Huy hiệu | — | «PHỔ BIẾN NHẤT» | — |
| Nhãn nhỏ | «CUSTOM DESIGN» | «FRANCHISE MODELS» | «TURNKEY SETUP» |
| H3 | «Idea-to-Blueprint» | «Ready-to-Launch» | «Build-to-Operate» |
| Mô tả | «Dành cho Founder đã có ý tưởng gốc. Đội ngũ BAIKA sẽ nghiên cứu, thiết kế trọn gói Mô hình Kinh doanh, cơ cấu vốn và lộ trình triển khai từ con số 0.» | «Dành cho nhà đầu tư cần mô hình sinh lời ngay. Chuyển giao toàn bộ bí quyết, công nghệ, pháp lý và thương hiệu của các mô hình đã được chứng minh.» | «BAIKA trực tiếp Setup toàn bộ hạ tầng (nhân sự, phần mềm, pháp lý) và trực tiếp vận hành trong giai đoạn đầu trước khi bàn giao hoàn chỉnh.» |
| Nhãn giá | «MỨC ĐẦU TƯ DỰ KIẾN» | «MỨC ĐẦU TƯ DỰ KIẾN» | «MỨC ĐẦU TƯ DỰ KIẾN» |
| Giá | «Liên hệ (50M - 200M)» | «Tùy mô hình (100M - 500M)» | «Tùy quy mô (Từ 300M+)» |
| Nút | «Yêu cầu tư vấn» | «Chọn mô hình ngay» | «Đặt lịch thẩm định» |

Đích của 3 nút: **chưa kiểm** — có thể cuộn xuống form A3 và chọn sẵn gói **[suy luận]**.

### A3. Form «Đăng Ký Tư Vấn»

**H2** «Đăng Ký Tư Vấn» · **Mô tả** «Vui lòng để lại thông tin, Giám đốc dự án của BAIKA sẽ liên hệ trực tiếp với bạn trong vòng 4 giờ làm việc.»

| Ô | Loại | Bắt buộc | Nguyên văn nhãn |
| --- | --- | --- | --- |
| 1 | chữ | Có | «Họ và Tên *» |
| 2 | điện thoại | Có | «Số điện thoại *» |
| 3 | email | Có | «Email liên hệ *» |
| 4 | chọn | Không | «Gói dịch vụ quan tâm» — 3 lựa chọn: «Idea-to-Blueprint» · «Ready-to-Launch (Phổ biến)» · «Build-to-Operate» |
| 5 | chữ | Không | «Ngân sách dự kiến (Tùy chọn)» — gợi ý «VD: 100M - 200M» |
| 6 | đoạn dài | Không | «Ghi chú / Yêu cầu chi tiết» |
| Nút | gửi | — | «Khởi Tạo Phiên Tư Vấn» |

Không thấy ô đồng ý xử lý dữ liệu **[xác minh]** — xem 🔴 §6.4. Form gửi về đâu: **chưa kiểm** (không bấm gửi thử để tránh tạo yêu cầu giả).

### A4. Kho Tàng Chiến Lược

Trang A hiển thị **luôn** toàn bộ kho B ở cuối trang (cùng nội dung với `?tab=ideas`) **[xác minh — 155 thẻ trên cả hai URL]**. Xem B.

---

## B. Kho Tàng Chiến Lược — `/tram-y-tuong?tab=ideas`

### B1. Đầu khối

| Phần | Nguyên văn |
| --- | --- |
| Nhãn nhỏ | «MÔ HÌNH ĐÓNG GÓI SẴN» |
| H2 | «Kho Tàng Chiến Lược» |
| Mô tả | «100+ mô hình kinh doanh được chọn lọc và phân tích chi tiết. Từ ý tưởng, số vốn, đến ranh giới pháp lý — tất cả đã sẵn sàng để khởi chạy.» |
| Ô tìm kiếm | tiền tố «root@baika:~#» · gợi ý «Search_Tech_Models...» |
| Bộ lọc ngành (15 nút) | «Tất cả» · «MCN/Sáng tạo nội dung» · «Dịch vụ tiêu dùng» · «Nông nghiệp» · «Bán lẻ/E-commerce» · «F&B» · «Công nghệ/SaaS» · «Truyền thông–Marketing» · «Giáo dục/EdTech» · «Y tế–Làm đẹp» · «Tư vấn chuyên môn» · «Logistics» · «Sản xuất nhẹ/OEM» · «Du lịch» · «Tài chính/Fintech» |

### B2. Thẻ mô hình (dạng lưới)

Mỗi thẻ: **ngành** (chữ hoa) · **tên** (H3) · **tóm tắt** · «Est. Capital» + số vốn · «Scaleability» + mức. Bấm cả thẻ để mở hộp chi tiết B3. Thẻ không có link riêng (không có URL cho từng mô hình) **[xác minh]**.

### B3. Hộp chi tiết (bấm vào thẻ)

| Phần | Nguyên văn nhãn | Trường dữ liệu |
| --- | --- | --- |
| Nút đóng | «✕» | — |
| Ngành · trạng thái | vd. «DỊCH VỤ TIÊU DÙNG» «Ý TƯỞNG» | `industry` · `status` |
| Tên | — | `name` |
| Tóm tắt | — | `summary` |
| | «VỐN ƯỚC TÍNH» | `estimatedCapital` |
| | «HOÀN VỐN DỰ KIẾN» | `paybackPeriod` |
| | «BIÊN LỢI NHUẬN» | `profitMargin` |
| | «MÔ HÌNH DOANH THU» | `revenueModel` |
| | «TIER VỐN» | `capitalTier` |
| | «KHẢ NĂNG SCALE» | `scaleability` |
| Khối kỹ thuật | «SYSTEM_REQUIREMENTS» | — |
| | «> Loại pháp nhân» | `legalEntity` |
| | «> Phù hợp đối tượng» | `targetAudience` |
| | «> Phụ thuộc công nghệ» | `techDependency` |
| | «> Giấy phép / điều kiện» | `license` |
| | «> Rủi ro pháp lý chính» | `legalRisk` |

### B4. Dữ liệu — 155 mô hình

- **Toàn bộ dữ liệu, nguyên vẹn:** `du-lieu/mo-hinh-dong-goi.json` — tải từ API công khai của site cũ `https://www.baika.vn/api/ideas` ngày 05/10/2026 (155 bản ghi, không chỉnh sửa, chỉ định dạng lại cho dễ đọc). Không chứa email, số điện thoại hay dữ liệu cá nhân **[xác minh bằng dò tự động]**.
- **Danh sách đọc nhanh:** `phu-luc-danh-sach-mo-hinh.md` (tên · vốn · tier · hoàn vốn · scale · trạng thái, chia theo ngành).
- Các trường `content` và `image` **trống ở cả 155 bản ghi** → site cũ chưa có bài viết chi tiết hay ảnh cho mô hình nào.

**Thống kê [xác minh]:**

| Theo ngành | Số | | Theo trạng thái (`status`) | Số |
| --- | --- | --- | --- | --- |
| Dịch vụ tiêu dùng | 28 | | Đang nghiên cứu | 88 |
| F&B | 26 | | Ý tưởng | 63 |
| Bán lẻ/E-commerce | 19 | | Loại | 3 |
| Truyền thông–Marketing | 15 | | *(trống)* | 1 |
| MCN/Sáng tạo nội dung | 12 | | | |
| Y tế–Làm đẹp | 11 | | **Theo tier vốn** | |
| Giáo dục/EdTech · Tư vấn chuyên môn | 10 · 10 | | T1 – Khởi sự (50–200M) | 87 |
| Sản xuất nhẹ/OEM | 6 | | T2 – Nhỏ (200–500M) | 40 |
| Công nghệ/SaaS | 5 | | T3 – Vừa (500M–1B) | 11 |
| Nông nghiệp · Logistics · Du lịch | 4 · 4 · 4 | | T4 – Tăng trưởng (1–2B) | 11 |
| Tài chính/Fintech | 1 | | T5 – Mở rộng (2–3B) | 6 |

---

## C. Kho Tài Nguyên — `/tai-nguyen`

| Phần | Nguyên văn |
| --- | --- |
| H1 | «Kho Tài Nguyên» |
| Mô tả | «Tổng hợp biểu mẫu, framework và báo cáo độc quyền được các chuyên gia BAIKA sử dụng trong thực tế tư vấn doanh nghiệp.» |

**4 thẻ tài nguyên:**

| # | Loại | H3 | Mô tả | Nút |
| --- | --- | --- | --- | --- |
| 1 | «MẪU HỢP ĐỒNG» | «Hợp Đồng Góp Vốn Cổ Đông» | «Mẫu hợp đồng chuẩn pháp lý dành cho Startup và SME (Bản cập nhật 2026).» | «Tải Xuống Ngay» |
| 2 | «FRAMEWORK» | «Mô hình Định Giá Sản Phẩm» | «Bảng tính Excel tự động tính toán điểm hòa vốn và thiết lập giá bán lẻ.» | «Tải Xuống Ngay» |
| 3 | «E-BOOK» | «Bản Đồ Scale-up Bán Lẻ» | «Tài liệu độc quyền 50 trang hướng dẫn nhân bản chuỗi từ 1 lên 10 điểm bán.» | «Tải Xuống Ngay» |
| 4 | «FRAMEWORK» | «Quy trình Test Thị Trường» | «Cách kiểm chứng ý tưởng kinh doanh với số vốn dưới 20 triệu VNĐ.» | «Tải Xuống Ngay» |

🔴 **4 nút «Tải Xuống Ngay» không làm gì cả** — không có link, không gắn sự kiện bấm **[xác minh: đọc thuộc tính nút trong trình duyệt]**. Trang không gọi API nào để lấy file. Tức là **chưa có file tài liệu nào thật** trên site cũ. Xem §6.2.

---

## D. Về BAIKA — `/ve-baika`

Trang tối, một hình 3D/động ở giữa (logo BAIKA) với **3 quả cầu quay quanh**. Bấm quả cầu mở một khung nội dung. Link duy nhất: «← Trang chủ» → `/`. Không có header, chân trang hay form.

| Quả cầu | Nhãn | Nhãn phụ |
| --- | --- | --- |
| 1 | «Tầm nhìn» | «VISION» |
| 2 | «Sứ mệnh» | «MISSION» |
| 3 | «Giá trị cốt lõi» | «CORE VALUES» |

### D1. Tầm nhìn

- Đầu khung: «TẦM NHÌN · VISION»
- Câu chính: «Đối tác chiến lược đáng tin cậy của doanh nghiệp Việt.» *(cụm «đáng tin cậy» là một chuỗi tách riêng trong mã → nhiều khả năng được tô nhấn **[suy luận]**)*
- «Một doanh nghiệp mạnh đến từ hệ thống vận hành rõ ràng, dữ liệu minh bạch, tài chính được kiểm soát, pháp lý được bảo vệ và công nghệ triển khai đúng nhu cầu.»
- «BAIKA đồng hành cùng doanh nghiệp vừa và nhỏ xây nền tảng quản trị hiện đại, tinh gọn và thực chiến.»

### D2. Sứ mệnh

- Đầu khung: «SỨ MỆNH · MISSION»
- Câu chính: «Chuyển hóa rủi ro thành hệ thống vững chắc.» *(cụm «hệ thống vững chắc» tách riêng → tô nhấn **[suy luận]**)*
- «Chuyển những vấn đề rời rạc trong vận hành, tài chính, pháp lý, marketing và công nghệ thành một hệ thống quản trị có cấu trúc, dễ triển khai và đo lường.»
- «Đi từ ý tưởng đến hệ thống, từ hệ thống đến hiệu quả, từ hiệu quả đến tăng trưởng bền vững.»

### D3. Giá trị cốt lõi — 6 slide

Đầu khung «GIÁ TRỊ CỐT LÕI · CORE VALUES» · bộ đếm «01 / 06» · nút «‹» «›».

| # | Tiêu đề | Nội dung |
| --- | --- | --- |
| 01 | «Thực chiến trước hình thức» | «Mọi giải pháp chỉ có giá trị khi giải quyết vấn đề thật — không theo đuổi mô hình phức tạp hay công nghệ hào nhoáng nếu không tạo hiệu quả rõ ràng.» |
| 02 | «Hệ thống hóa để tăng trưởng» | «Hệ thống là nền tảng tăng trưởng: quy trình rõ ràng, dữ liệu minh bạch, trách nhiệm cụ thể; từ vận hành tự phát sang quản trị bằng hệ thống.» |
| 03 | «Công nghệ phục vụ kinh doanh» | «Công nghệ chỉ có ý nghĩa khi giúp vận hành nhẹ hơn, quyết định nhanh hơn, giảm sai sót. Ưu tiên giải pháp tinh gọn, đúng quy mô.» |
| 04 | «Minh bạch và có trách nhiệm» | «Niềm tin là tài sản quan trọng nhất: minh bạch trong phân tích, đề xuất, báo giá, triển khai; nói rõ điều nên và chưa nên làm.» |
| 05 | «Đồng hành như một đối tác» | «Đồng hành chuẩn hóa vận hành, kiểm soát rủi ro, ứng dụng công nghệ với tinh thần đối tác chiến lược: hiểu đủ sâu, đi đủ sát.» |
| 06 | «Tinh gọn và linh hoạt» | «Bắt đầu từ điểm nghẽn quan trọng nhất, triển khai theo giai đoạn, đo lường và cải tiến. Hệ thống phù hợp nhất, không phải lớn nhất.» |

Thứ tự 01→06 lấy theo thứ tự trong mã nguồn trang; chỉ slide 01 được mở xem trực tiếp **[slide 02–06: suy luận thứ tự]**.

---

## 6. 🔴 Cần chốt trước khi đưa lên site mới

| # | Vấn đề | Vì sao quan trọng | Ai quyết |
| --- | --- | --- | --- |
| 6.1 | **Kho 155 mô hình đang công khai cả ghi chú nội bộ.** Tóm tắt có câu kiểu «đáng làm thật», «Đã có kế hoạch triển khai chi tiết», «Cần LEXIS review», «ĐIỂM NÓNG PHÁP LÝ»; 3 mô hình trạng thái «Loại» và 1 mô hình trạng thái trống **vẫn đang hiện**; 19 tên bị **đăng trùng 2 lần**; vài số vốn lệch tier (vd. «40–120M» xếp vào «T1 – Khởi sự (50–200M)»). Trường `published` = `true` ở cả 155 → cờ đăng **không lọc gì**. | Đây là đúng tình huống luật an toàn nội dung (luồng D) cảnh báo: thứ chưa duyệt lọt ra web. Đưa sang site mới nguyên trạng = chép luôn lỗi | Sếp + Thắng |
| 6.2 | **Kho Tài Nguyên chưa có file nào** — 4 nút tải không hoạt động. | Nút hứa «Tải Xuống Ngay» mà không tải được = mất niềm tin. Cần: có file thật, hoặc đổi thành form «để lại email nhận tài liệu», hoặc bỏ trang | Sếp |
| 6.3 | **Các con số hứa hẹn:** mức đầu tư 50M–200M / 100M–500M / từ 300M+; «liên hệ trong vòng 4 giờ làm việc»; «100+ mô hình». | Con số in trên web là cam kết với khách. «4 giờ làm việc» cần người trực thật | Sếp |
| 6.4 | **Form A3 không có ô đồng ý xử lý dữ liệu** và hỏi cả ngân sách. | Site mới mọi form đều có ô đồng ý + link Chính sách bảo mật (Luật BVDLCN). Khi dựng lại phải thêm | Pháp lý |
| 6.5 | **Tên pháp lý công ty:** chân trang cũ ghi «CÔNG TY CỔ PHẦN CÔNG NGHỆ BAIKA» / «BAIKA TECHNOLOGICAL JOINT STOCK COMPANY». | Đây là ứng viên cho chỗ [Tên pháp lý] còn trống ở trang Chính sách bảo mật (`viec-cho.md` #23) — **cần Pháp lý xác nhận** đúng tên trên giấy phép, chưa tự điền | Pháp lý |
| 6.6 | **Tên gọi lệch nhau:** site cũ dùng «Trạm Ý Tưởng» cho trang bán 3 gói + kho mô hình; `sitemap.md` mô tả Trạm Ý Tưởng là «hạt nhân», ngoài 8 Trụ. «Kho Mô Hình Đóng Gói» / «Kho Tàng Chiến Lược» / «Mô Hình Đóng Gói» là 3 tên cho cùng một thứ. | Phải chốt một tên trước khi vẽ Figma, nếu không menu, tiêu đề và SEO sẽ mỗi chỗ một kiểu | Thắng |
| 6.7 | **Trang D là hình 3D tương tác**, chữ chỉ hiện khi bấm. | Người đọc màn hình và Google khó thấy nội dung. Nếu dựng lại, nên có bản chữ thường song song (xem checklist 3D luồng C) | Thắng |

---

## 7. Chưa kiểm (ghi để khỏi tưởng là đã biết)

- Form A3 gửi đi đâu, gửi xong hiện gì.
- 3 nút gói ở A2 trỏ đi đâu.
- Kho B có phân trang / sắp xếp không (đọc thấy cả 155 thẻ trong một trang).
- Thứ tự slide 02–06 ở D3 khi bấm «›».
- Site cũ có trang chi tiết riêng cho từng mô hình không (dữ liệu có `slug` nhưng thẻ không có link).
