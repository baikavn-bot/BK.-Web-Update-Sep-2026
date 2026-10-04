<!-- CHÉP NGUYÊN VĂN — đầu file do agent thêm 03/10/2026, phần dưới đường kẻ giữ y bản gốc. md5 bản gốc: 0aebeab6c200cdeb9286abff672a93e3 -->

> 📦 **Bản chép nguyên văn** từ project Claude «BaiKa.vn», file `claude/sitemap.md` (bản lưu 23/09/2026). Chuyển vào repo ngày 03/10/2026 — **từ nay bản này là bản chính.**
> Sửa **ở đây**, không sửa bản trong project Claude nữa.
> Khi file này lệch với nguồn khác, thứ tự tin: **Figma** → `CLAUDE.md` / `TRANG-THAI.md` / `docs/<trang>/` → file này.
> Đường dẫn `claude/<tên>.md` bên dưới là file trong project Claude. File nào đã chuyển thì nay nằm ở `docs/_chung/<tên>.md` — tra bảng ở `docs/README.md`.
>
> **⚠️ Chỗ đã lỗi thời — đọc trước khi tin nội dung bên dưới:**
> - Đọc **banner đầu file** trước: mục 2, 3, 6 đã hết hiệu lực; mục 4 chỉ là tham khảo nội dung.
> - Chưa có Remote Office (`baika.website`) — xem `TRANG-THAI.md`.

---

# Sitemap & Kiến trúc thông tin — baika.vn

*Lập ngày 26/08/2026 · Luồng E · Người phụ trách: Thắng Trương · Bàn giao: `/website-production-agent`*

> ## ⚠️ ĐỌC TRƯỚC — tài liệu này mô tả WEBSITE CŨ *(cập nhật 23/09/2026)*
>
> **Đây là REBUILD HOÀN TOÀN** (`DEC-018`). Toàn bộ mục 2–6 dưới đây là **kiểm kê website cũ** — *current-state reference / audit source*, **KHÔNG phải** baseline cho website mới.
>
> | Phần | Còn dùng được không |
> | --- | --- |
> | **Mục 1 — URL 7 trang** | ✅ **Còn.** Đã chốt giữ nguyên 7 slug (`DEC-019`) |
> | **Mục 1 — làm rõ 8 Trụ** | ✅ **Còn.** 8 Trụ = 7 dịch vụ + Trạm Kết Nối; Trạm Ý Tưởng là hạt nhân, ngoài 8 Trụ |
> | **Mục 2 — trang chủ vũ trụ 3D** | ❌ **KHÔNG còn.** Trang chủ mới là **lưới bento**, đã chốt, sếp duyệt (`DEC-002` `DEC-004`) |
> | **Mục 3 — khung S0…S17** | ❌ **KHÔNG còn.** Trang dịch vụ mới có **7 khối** *(S1 Hero → S6 Liên hệ → Footer)*, hai trang có 8. Xem `claude/ban-giao-ky-thuat.md` mục 4 |
> | **Mục 4 — chi tiết 7 trang** | ⚠️ **Tham khảo nội dung.** Nội dung chốt nằm ở `claude/noi-dung-theo-section.md` |
> | **Mục 5 — hệ màu trụ** | ✅ **Đã giải.** Token `Colors/Page/<Trụ>/--dam·--trung·--nhat`, 21 biến |
> | **Mục 6 — lỗi lặp section** | ❌ **Đóng, không cần sửa.** Đó là lỗi của site cũ; site mới dựng lại từ đầu nên không kế thừa |
> | **Mục 7, 8, 9 — câu hỏi & quy trình cũ** | ❌ **Lỗi thời.** Xem bản cập nhật ở cuối file |
>
> **Tuấn đã nghỉ, công ty không có dev.** Mọi chỗ trước ghi *"bàn giao Tuấn"* / *"hỏi Tuấn"* nay là **Thắng quyết**, `/website-production-agent` dựng (`DEC-016`).

---

## 0. NGUỒN & ĐỘ TIN CẬY — đọc trước

Toàn bộ tài liệu này được dựng **từ 10 ảnh chụp màn hình** (8 trang, trong đó trang chủ và Trạm Kết Nối bị chụp lặp), **không phải từ mã nguồn hay từ site thật**.

Ảnh chụp ở chiều rộng 350–440px cho các trang dài. Hệ quả:

| Đọc được | Không đọc được |
| --- | --- |
| **Tiêu đề section (H2)** — rõ ràng | Nội dung chữ trong card (body copy) |
| **Số lượng card / cột mỗi section** | Nhãn nút CTA nhỏ |
| **Thứ tự section trên trang** | Nhãn trường trong form |
| **Màu chủ đạo mỗi trang** | Mã màu chính xác (chỉ đọc được cảm quan) |
| **Kiểu bố cục (lưới, carousel, accordion)** | Chân trang: hotline, email, địa chỉ đầy đủ |

**Quy ước đánh dấu trong file này:**
- **[đọc được]** — nhìn thấy trực tiếp trên ảnh
- **[suy đoán]** — suy ra từ ngữ cảnh hoặc từ quy luật lặp giữa các trang, **chưa kiểm chứng**
- **[không đọc được]** — chữ quá nhỏ, cần mở site thật

---

## 1. SITEMAP TỔNG — *(cấu trúc site cũ)*

```
/ · TRANG CHỦ — Vũ trụ 3D (một màn hình, không cuộn)   ← ĐÃ THAY bằng lưới bento
│
├── ☀️ TRẠM Ý TƯỞNG (hạt nhân, quả cầu vàng ở tâm)
│      → NGOÀI PHẠM VI v1
│
├── 01 · Tư vấn Doanh nghiệp ......... BAIKA Business Advisory        [vàng/hổ phách]
├── 02 · Hệ thống hóa Vận hành ....... BAIKA Remote Ops               [xanh ngọc]
├── 03 · Marketing & Tăng trưởng ..... BAIKA Brand Launch System      [hồng/magenta]
├── 04 · Tài chính & Dòng tiền ....... BAIKA Finance Readiness System [xanh dương]
├── 05 · Pháp lý & Thuế .............. BAIKA Legal & Tax Control      [đỏ]
├── 06 · Công nghệ & AI .............. BAIKA AI Operating System      [tím]
├── 07 · Đào tạo & CEO ............... CEO Operating Blueprint        [xanh tím than]
├── 08 · Trạm Kết Nối ................ Nền tảng riêng, tên miền riêng · NGOÀI PHẠM VI v1
│
├── Giới thiệu ....................... NGOÀI PHẠM VI v1
└── Liên hệ .......................... ✅ ĐÃ VẼ 23/09 — section `Contact` 634:3537
```

**Làm rõ một điểm dễ nhầm — vẫn đúng:** "8 Trụ" gồm **7 trang dịch vụ + Trạm Kết Nối**. Trạm Kết Nối là trụ số 08 trên trang chủ nhưng **không phải trang dịch vụ** — nó là một sản phẩm nền tảng có hệ điều hướng, tài khoản và chân trang riêng. Đừng gộp nó vào template trang dịch vụ. **[đọc được — số 08 hiện trên hành tinh Trạm Kết Nối]**

**Trạm Ý Tưởng** là hạt nhân ở tâm, **không nằm trong 8 Trụ**. **[đọc được — nhãn "HẠT NHÂN"]**

### URL — ✅ **ĐÃ CHỐT GIỮ NGUYÊN** (`DEC-019`, 23/09)

| Trang | URL | Nhãn trên thanh nav |
| --- | --- | --- |
| Trang chủ | `baika.vn` | — |
| Tư vấn Doanh nghiệp | `baika.vn/advisory` | **Tư vấn** |
| Hệ thống hóa Vận hành | `baika.vn/remote-ops` | **Hệ thống vận hành** |
| Marketing & Tăng trưởng | `baika.vn/marketing` | **Marketing** |
| Tài chính & Dòng tiền | `baika.vn/finance` | **Tài chính** |
| Pháp lý & Thuế | `baika.vn/legal-tax` | **Pháp lý & Thuế** |
| Công nghệ & AI | `baika.vn/ai-os` | **Công nghệ & AI** |
| Đào tạo & CEO | `baika.vn/ceo-blueprint` | **Đào tạo CEO** |
| **Liên hệ** | **`baika.vn/lien-he`** *(đề xuất — chưa có slug cũ để giữ)* | *chưa có trong nav* |
| Trạm Kết Nối | **tên miền riêng**, không phải đường dẫn con | **Trạm kết nối** |
| Trạm Ý Tưởng · Giới thiệu | ngoài phạm vi v1 | *chưa có trong nav* |

**Hai phát hiện quan trọng — vẫn còn hiệu lực:**

1. **Trạm Kết Nối chạy trên tên miền riêng.** Xác nhận nó là sản phẩm tách biệt. Ảnh hưởng tới điều hướng và SEO.
2. **Nav cũ có đúng 8 mục = 8 Trụ, cộng nút CTA `Đăng ký rà soát`.** Không có mục nào cho **Trạm Ý Tưởng, Giới thiệu, Liên hệ**.

> 🔴 **Câu hỏi chưa trả lời, chặn launch:** trang chủ mới (lưới bento) có **9 ô có nhãn** = 7 dịch vụ + Trạm Ý Tưởng + Trạm Kết Nối. Nhưng **Trạm Ý Tưởng và Trạm Kết Nối đều ngoài phạm vi v1**. Hai ô đó **bấm vào sẽ đi đâu**? Xem mục 10.

*Nhãn nav ngắn hơn tên trang (VD: nav ghi "Tư vấn", trang tên "BAIKA Business Advisory"). Dùng nhãn nav cho điều hướng, tên đầy đủ cho `h1`.*

---

## 2. TRANG CHỦ CŨ — Vũ trụ 3D ❌ **KHÔNG CÒN DÙNG**

> **Trang chủ mới là lưới bento**, đã chốt và sếp duyệt bản cuối (`DEC-002`). Mô hình 3D **không đưa vào v1** (`DEC-004`). Phần dưới giữ lại làm biên bản, **không phải yêu cầu**.

**Kiểu trang:** một màn hình duy nhất, chiếm trọn viewport, không cuộn. **[đọc được]**

| Vị trí | Thành phần |
| --- | --- |
| Trên trái | Logo tròn phát sáng + chữ **BAIKA** + badge `JSC`; dưới logo: chấm trạng thái + `HỆ THỐNG ĐANG VẬN HÀNH` |
| Trên giữa | **Ticker chạy ngang** trong viên thuốc bo tròn |
| Tâm màn hình | Quả cầu vàng lớn — icon bóng đèn — **Trạm Ý Tưởng** — `HẠT NHÂN` |
| Quanh tâm | **8 hành tinh** trên quỹ đạo |
| Dưới giữa | Nút tròn 4 chấm + nhãn `ĐIỀU HƯỚNG` **[suy đoán]** |
| Dưới trái / phải | Nút chuông thông báo / bong bóng chat **[suy đoán]** |
| Nền | Gradient đỏ → cam → vàng, lưới phối cảnh + hạt sao |

**Kích thước hành tinh không đều** — có thể là phân cấp chủ ý (trụ chủ lực to hơn) hoặc chỉ là hiệu ứng phối cảnh 3D. **[suy đoán — không cần trả lời nữa, trang chủ đã thay]**

---

## 3. KHUNG TRANG DỊCH VỤ CŨ — S0…S17 ❌ **KHÔNG CÒN DÙNG**

> **Trang dịch vụ mới có 7 khối cố định** *(S1 Hero → S2 BAIKA sẽ làm gì → S3 Bạn sẽ nhận được gì → S4 Các gói → S5 FAQ → S6 Liên hệ → Footer)*. Hai trang có **8 khối** *(Tư vấn và AI có thêm một lưới chèn giữa S2 và S3)*.
>
> Khung chốt: `claude/ban-giao-ky-thuat.md` mục 4. Phần dưới là **kiểm kê site cũ**, giữ lại để đối chiếu nội dung.

| # | Section site cũ | Bố cục | Có ở |
| --- | --- | --- | --- |
| S0 | Thanh breadcrumb trên cùng | `‹ Trang chủ` · badge tên trụ · 1–2 nút CTA | 7/7 |
| S1 | **Hero** | H1 (2 dòng) + dòng định vị + 2 nút CTA | 7/7 |
| S2 | Thanh công cụ chẩn đoán | Dải tối bo góc + **hàng 4 số** | 7/7 |
| S3 | "Bạn có đang gặp tình trạng này?" | 4 card nỗi đau + chấm carousel | 7/7 |
| S4 | **Mô hình lõi** | Khác nhau mỗi trang — xem bảng dưới | 7/7 |
| S5 | Danh mục module / dịch vụ | 8 dòng có mã số | 5/7 |
| S6 | "Các mảng dịch vụ chính" | 3–4 card | 7/7 |
| S7 | "Công cụ hỗ trợ & Đánh giá" | 2–3 card | 6/7 |
| S8 | "Ưu đãi & Các gói đặc biệt" | Banner ngang + nút | 7/7 |
| S9 | Section giá trị/lợi ích | 4 card | 7/7 |
| S10 | Section trụ cột / hạng mục | 4 card có icon | 6/7 |
| S11 | "Chọn điểm bắt đầu phù hợp" | 3–4 gói, 1 gói làm nổi | 7/7 |
| S12 | "Sau khi triển khai cùng BAIKA" | Checklist 2 cột | 7/7 |
| S13 | "Dịch vụ này dành cho ai?" | 4 card đối tượng | 7/7 |
| S14 | "Vì sao chọn BAIKA?" | 4–5 card | 7/7 |
| S15 | **FAQ** | 4–5 accordion | 7/7 |
| S16 | **Form đăng ký** | Form dài, 2 cột | 7/7 |
| S17 | **Footer BAIKA** | Logo · tên · địa chỉ · hotline · email | 7/7 |

> ⚠️ Site cũ có **18 section**; thiết kế mới rút còn **7**. Danh sách nội dung đã cắt và lý do: `claude/ban-do-section.md`.

### S4 — Mô hình lõi của từng trụ *(vẫn dùng làm tham chiếu nội dung)*

| Trụ | Mô hình | Số phần |
| --- | --- | --- |
| Tư vấn Doanh nghiệp | Tư vấn theo **7 trục** hệ thống doanh nghiệp | 7 |
| Hệ thống hóa Vận hành | **6 cấu phần** của hệ điều hành vận hành | 6 |
| Marketing & Tăng trưởng | Hệ thống thương hiệu **9 tầng** | 9 |
| Tài chính & Dòng tiền | Khung **4 bước** nâng chuẩn tài chính | 4 |
| Pháp lý & Thuế | Từ bị động đối phó → chủ động kiểm soát (**3 bước**) | 3 |
| Công nghệ & AI | **Ba lớp** giải pháp AI Operating System | 3 |
| Đào tạo & CEO | Một bản đồ — **10 trụ cột** | 10 |

---

## 4. CHI TIẾT TỪNG TRANG — ⚠️ tham khảo nội dung, không phải bố cục

> Nội dung chốt nằm ở `claude/noi-dung-theo-section.md` và `claude/noi-dung-day-du.md`. Phần dưới là bản đọc từ ảnh chụp site cũ.

### 01 · Tư vấn Doanh nghiệp — *BAIKA Business Advisory* [vàng]

- **Định vị:** "Đồng hành cùng CEO từ chiến lược đến vận hành"
- **7 trục:** Mô hình kinh doanh · Vận hành · Marketing & tăng trưởng · Tài chính · Pháp lý – Thuế · Công nghệ · Năng lực CEO
- **4 gói:** Business Start · **Business Health Check** *(nổi)* · Business Improvement · CEO Strategic Advisory

### 02 · Hệ thống hóa Vận hành — *BAIKA Remote Ops* [xanh ngọc]

- **Định vị:** "Xây hệ thống doanh nghiệp — vận hành chuẩn chỉnh mà không cần CEO ngồi cạnh"
- **6 cấu phần:** Sơ đồ tổ chức · SOP & quy trình chuẩn · Quản lý mục tiêu · KPI/OKR dashboard · Bàn giao & vận hành liên tục *(cấu phần 6 [không đọc được])*
- **Gói chốt:** `Ops Diagnosis / Ops Blueprint / Remote Ops Partner` — bộ *Ba nhịp đồng hành* trên site cũ đã **bỏ**

### 03 · Marketing & Tăng trưởng — *BAIKA Brand Launch System* [hồng]

- **Định vị:** "Từ định vị thương hiệu đến kế hoạch ra thị trường — trong một hệ thống"
- **9 tầng:** Brand Diagnosis · Brand Strategy · Messaging System · Visual Identity Direction *(5 tầng còn lại [không đọc được])*
- ⚠️ **Số liệu `+340%` · `12M+` · `8.4x` · `95%` là số KHÔNG CÓ THẬT** — Thắng xác nhận 07/09. Không đưa vào bản mới, và nên gỡ khỏi site cũ

### 04 · Tài chính & Dòng tiền — *BAIKA Finance Readiness System* [xanh dương]

- **Định vị:** "Đưa tài chính doanh nghiệp từ 'sổ sách để ghi' thành công cụ điều hành"
- **Khung 4 bước:** Chuẩn hóa → Làm sạch → Kiểm soát → Dẫn dắt
- **3 gói:** Finance Health Check · **Finance Clean-Up & Control** *(nổi)* · Capital Readiness Program
- ⏳ `Finance Governance` — chờ xác nhận có bán kèm không

### 05 · Pháp lý & Thuế — *BAIKA Legal & Tax Control* [đỏ]

- **3 bước:** "Từ bị động đối phó sang chủ động kiểm soát"
- **8 nhóm dịch vụ:** Legal & Tax Diagnosis · Business Legal System · Contract Control · Tax Risk Review · Tax Explanation & Response · Tax Planning · Owner Legal Advisory · Dissolution & Exit Process
- **4 gói:** **Legal & Tax Health Check** *(nổi)* · Legal & Tax Control Setup · Tax Response Program · Legal Exit & Dissolve
- **Riêng trang này** có thêm trường form **Mức độ khẩn cấp**

### 06 · Công nghệ & AI — *BAIKA AI Operating System* [tím]

- **Định vị:** "Đưa AI vào vận hành thật — không phải trào lưu, không phải demo"
- **Ba lớp:** AI Agent · AI Workflow · Custom Software
- **4 gói:** AI Opportunity Audit · AI Agent Starter Kit · **AI Workflow Automation** *(nổi)* · Custom AI Software
- ⏳ Khối `5 bước thực hiện`: bước `03` hứa *"sprint 2 tuần"*, bước `05` hứa *"phản hồi sự cố trong 4 giờ làm việc"* — **đây là SLA với khách, chưa ai duyệt**

### 07 · Đào tạo & CEO — *CEO Operating Blueprint* [xanh tím than]

- **10 trụ cột:** Tư duy hệ thống CEO · Mô hình kinh doanh · Logic doanh thu · Hệ điều hành doanh nghiệp · Tài chính & dòng tiền · Marketing & tăng trưởng · Đội ngũ & nhân sự · Công nghệ & AI · CEO Dashboard · Lộ trình 90 ngày
- ⏳ 2 trụ cột `Lãnh đạo đội ngũ` và `Đàm phán & Gọi vốn` do Thắng bổ sung 07/09 — **chờ Academy xác nhận**
- ⚠️ **Số liệu `200+ học viên` · `80+ doanh nghiệp` là số KHÔNG CÓ THẬT**

> ⚠️ Trang này là chỗ dễ tái phạm sai lầm cũ nhất. **BAIKA là công ty tư vấn, KHÔNG phải công ty bán khóa học online.** Trang 07 có bán chương trình đào tạo, nhưng đó là **một trụ trong tám**. Đừng để tông giọng trang này lan sang các trang khác.

### 08 · Trạm Kết Nối — ❌ ngoài phạm vi v1

Sản phẩm nền tảng riêng, **tên miền riêng**, có nav + tài khoản + footer riêng. Gần với SaaS hơn là trang giới thiệu. Không dựng trong đợt này.

---

## 5. HỆ MÀU THEO TRỤ — ✅ ĐÃ GIẢI

Đã token hoá trong Figma: `Colors/Page/<Tên trụ>/--dam` · `--trung` · `--nhat` — **21 biến**, 7 nhóm. Giá trị đầy đủ: `claude/ban-giao-ky-thuat.md` mục 3.

> ~~Lo ngại cũ: trang 01 dùng vàng làm màu chủ đạo, có phá luật `--mark` không?~~
> → **Câu hỏi này không còn.** Quy ước `--mark` **đã bị bỏ** (`DEC-024`) — trong Figma không hề có token nào tên `mark`.

---

## 6. LỖI LẶP SECTION TRÊN SITE CŨ — ❌ ĐÓNG, không cần sửa

Quan sát 26/08 **[suy đoán — từ ảnh chụp]**: trang Marketing lặp khối "Gói combo bốc lửa" ~9 lần · trang Pháp lý lặp cụm 3 section 2 lần · trang Tài chính lặp 2 lần.

> **Không còn là việc phải làm.** Đây là lỗi của **website cũ**. Theo `DEC-018`, website mới dựng lại hoàn toàn và **không kế thừa** component hay cấu trúc nào từ site cũ — nên lỗi này không lan sang được.
>
> Giữ lại làm biên bản audit. Nếu site cũ còn chạy song song một thời gian thì nên sửa, nhưng nó **không chặn** gì ở luồng E.

---

## 7. TÌNH TRẠNG 3 TRANG MỚI — cập nhật 23/09

| Trang | Trạng thái |
| --- | --- |
| **Liên hệ** | ✅ **Đã vẽ** — section `Contact` `634:3537`, đủ 3 breakpoint `1280 / 768 / 375` |
| **Giới thiệu** | ⬜ **Ngoài phạm vi v1** |
| **Trạm Ý Tưởng** | ⬜ **Ngoài phạm vi v1** — phụ thuộc luồng D, đang bị chặn quyền Notion |
| **7 trang dịch vụ** | ✅ Đã thiết kế lại thành **1 template + 7 màu trụ**, 7 khối cố định |

**Năm câu hỏi chặn cũ — trạng thái:**

| # | Câu hỏi | Trả lời |
| --- | --- | --- |
| 1 | Trạm Ý Tưởng là gì? | ⬜ Ngoài phạm vi v1 — chưa cần trả lời |
| 2 | Nền tảng website là gì? | ✅ **Astro + Vercel** (`DEC-001`) |
| 3 | 7 trang dịch vụ đã chốt chưa? | ✅ **Chốt** — thiết kế mới đã hoàn thành trong Figma |
| 4 | Trạm Kết Nối có trong phạm vi không? | ✅ **Không** — ngoài phạm vi v1 |
| 5 | Ai viết nội dung 3 trang mới? | ✅ Nội dung 7 trang đã có ở `claude/noi-dung-theo-section.md`. Liên hệ đã vẽ |

---

## 8. QUY TRÌNH LUỒNG E — bản hiện hành *(thay mục 8 cũ)*

*Bản 26/08 đề xuất quy trình 8 bước kết thúc bằng "đóng gói bàn giao Tuấn". Không còn áp dụng.*

**Mũ vai trò:** Senior UI/UX Designer (web content & marketing site). Giữ vai trò **mentor** như mọi luồng.

**Quy trình:**

1. Thiết kế trong Figma, dùng token + component có sẵn
2. Self-review theo *Checklist review giao diện* dùng chung
3. Cập nhật `claude/ban-giao-ky-thuat.md` khi có thay đổi
4. Gọi `/website-production-agent` để dựng
5. Ghi quyết định vào `claude/website-agent-decisions.md`

**Checklist riêng luồng E:**

- [ ] Dùng lại component có sẵn, hay đang vẽ mới trùng chức năng?
- [ ] Màu lấy từ **token** `Colors/Page/*`, không hardcode?
- [ ] Spacing lấy từ `Spacing/--s-*`, radius từ `Radius/--r-*`? *(`DEC-022`)*
- [ ] Bóng đổ gán **effect style**, không viết số thô?
- [ ] Đủ trạng thái: `Default` · `Hover` · `Focus` · `Error` · `Disabled`? Quầng sáng trắng **chỉ** dùng cho `Focus` *(`DEC-014`)*
- [ ] Ở màn nhỏ, khối 4 card đổi thành gì?
- [ ] Vùng chạm ≥ 44px, tương phản ≥ 4.5:1?
- [ ] Trang mới có phá nhịp so với 8 trang còn lại không?

---

## 9. VIỆC TIẾP THEO — bản hiện hành

| Ưu tiên | Việc | Ai |
| --- | --- | --- |
| 1 | **Chốt hai ô bento `Trạm Ý Tưởng` + `Trạm Kết Nối` trỏ đi đâu** *(mục 10)* | Thắng |
| 2 | Tạo GitHub Organization + Vercel Team thuộc BAIKA | Thắng |
| 3 | Chốt `Colors/Primary/--blue-*` và `Colors/Neutral 1/--slate-*` còn dùng không | Thắng |
| 4 | Vẽ trạng thái form `Submitting` · `Success` · `Error` | Thắng |
| 5 | `FAQ Items` — thêm `Hover` + `Focus` *(đang phản biện)* | Thắng |
| 6 | Chuẩn hoá nốt 66 node `Noto Sans` + `Button Text` về thang chữ | Thắng |

---

## 10. 🔴 CÂU HỎI CHẶN LAUNCH — hai ô bento trỏ đi đâu?

Trang chủ mới có **9 ô có nhãn**: 7 dịch vụ + **Trạm Ý Tưởng** + **Trạm Kết Nối**.

Nhưng hai ô sau **đều ngoài phạm vi v1**:

| Ô | Tình trạng | Bấm vào thì sao? |
| --- | --- | --- |
| **Trạm Ý Tưởng** | Chưa thiết kế, phụ thuộc luồng D đang bị chặn | ❓ |
| **Trạm Kết Nối** | Sản phẩm riêng, **tên miền riêng** | ❓ |

**Không chốt thì khi launch sẽ có 2 ô bấm vào không đi đâu cả** — trang chủ là nơi khách vào đầu tiên, hai link chết ở đó là thứ ai cũng thấy.

Ba đường ra:

1. **Trạm Kết Nối trỏ sang tên miền riêng** *(nếu nó đang chạy thật)*, **Trạm Ý Tưởng tạm ẩn hoặc chuyển thành ô không nhãn** cho tới khi có trang
2. **Cả hai trỏ sang trang Liên hệ** kèm nhãn *"Sắp ra mắt"* — giữ được lưới 9 ô, không có link chết
3. **Bỏ nhãn cả hai ô**, để chúng thành ô trang trí như các ô còn lại — lưới vẫn đẹp, không hứa gì với khách

*Agent nghiêng về (1) nếu Trạm Kết Nối đã chạy thật, vì đó là sản phẩm có thật và đáng dẫn khách sang.*
