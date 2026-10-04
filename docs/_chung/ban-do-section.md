<!-- CHÉP NGUYÊN VĂN — đầu file do agent thêm 03/10/2026, phần dưới đường kẻ giữ y bản gốc. md5 bản gốc: b98d87290ac13ca8edc7d33f8a796c89 -->

> 📦 **Bản chép nguyên văn** từ project Claude «BaiKa.vn», file `claude/ban-do-section.md` (bản lưu 03/09/2026). Chuyển vào repo ngày 03/10/2026 — **từ nay bản này là bản chính.**
> Sửa **ở đây**, không sửa bản trong project Claude nữa.
> Khi file này lệch với nguồn khác, thứ tự tin: **Figma** → `CLAUDE.md` / `TRANG-THAI.md` / `docs/<trang>/` → file này.
> Đường dẫn `claude/<tên>.md` bên dưới là file trong project Claude. File nào đã chuyển thì nay nằm ở `docs/_chung/<tên>.md` — tra bảng ở `docs/README.md`.
>
> **⚠️ Chỗ đã lỗi thời — đọc trước khi tin nội dung bên dưới:**
> - Deadline 08/09 trong file đã qua. Khung trang thật là 7 khối theo Figma (`DEC-093`), dựng trong `ServicePageLayout.astro`.
> - Chỗ nhắc «Tuấn» đã hết hiệu lực — công ty không có dev từ 22/09.

---

# Bản đồ section & danh sách cắt — 7 trang dịch vụ `baika.vn`

*Chốt 03/09/2026 · Luồng E · Deadline **08/09/2026** (còn 5 ngày)*

Tài liệu này **thay thế** phần cấu trúc trong `noi-dung-7-trang.md`.
Nguồn nội dung nguyên văn: `noi-dung-day-du.md`.

---

## 0. Nguyên tắc — đọc trước

**Nội dung website cũ là vật liệu đang bị mổ xẻ, không phải bản yêu cầu.**
Chỗ nào thừa, trùng hoặc sai thì cắt và nói rõ vì sao — không bê nguyên sang bản mới.

Ranh giới với luật *"sao chép chính xác"* ngày 26/08:

| Đối tượng | Xử lý |
| --- | --- |
| Thứ **Thắng đưa như chỉ thị** — mã màu, file, ảnh chụp giá trị cần dựng lại | **Sao chép chính xác.** Nhận xét để sau |
| Thứ **đang được audit** — nội dung site cũ, tài liệu nguồn | **Chủ động đề xuất cắt**, kèm bằng chứng |

Phép thử: *đây là chỉ thị của Thắng, hay là vật liệu Thắng đưa cho mình soi?*

Mọi kết luận dưới đây đánh dấu rõ: **[xác minh]** = đọc trực tiếp từ site đang chạy · **[suy luận]** = mình gom, chưa ai duyệt.

---

## 1. Khung section sau khi gộp

### Đã chốt trong phiên 03/09

- **Gộp "Baika sẽ làm gì" + "Quy trình thực hiện" thành MỘT section.** Nhãn giai đoạn cột trái, các bước/module cột phải.
- Thẻ dạng **so le**.
- **Trang Công nghệ & AI** dùng 4 nhóm chức năng làm nhãn trái *(cách B — mục 2.6)*.
- **Trang Tư vấn** là ngoại lệ, xử lý sau.

### Khung hiện tại

| # | Section | Ghi chú |
| --- | --- | --- |
| S1 | Giới thiệu & Bạn đang bị gì | Hero + Chẩn đoán hiện trạng |
| S2 | Baika sẽ làm gì / Quy trình | **Đã gộp.** Trái = giai đoạn · Phải = module |
| S3 | Các gói dịch vụ | Chịu được 3 · 4 · 5 gói |
| S4 | Dành cho ai · Nhận được gì · Vì sao BAIKA | ⚠️ **chưa chốt** — xem mục 4 |
| S5 | FAQ | |
| S6 | Liên hệ | |
| S7 | Footer | Đã làm xong |

Từ **18–21 khối/trang** hiện tại xuống **7 section**.

### Chưa chốt — cần quyết trước khi vẽ

1. **S4 có tồn tại không.** Ba khối *Kết quả nhận được · Đối tượng phù hợp · Điểm khác biệt* có mặt ở **cả 7 trang** nhưng không nằm trong khung 9 section ban đầu. Đề xuất gộp cả ba thành một section 3 cột. Bỏ hẳn = mất phần bán hàng thật của trang.
2. **Thứ tự FAQ ↔ Liên hệ.** Site hiện tại: FAQ → form. Khung ban đầu đảo lại. Nên giữ FAQ trước.
3. **Section khuyến mãi bỏ hay giữ** — chặn bởi câu hỏi giá, xem mục 4.
4. **Cột phải: cuộn ngang hay xuống dòng theo cụm.** Khuyến nghị xuống dòng — xem mục 5.

---

## 2. Bản map giai đoạn ↔ module

Cột trái chịu **3 hoặc 4 nhãn** — chỉ hai biến thể, không phải ba. Mỗi cụm bên phải chứa **1–5 thẻ**.

*(3 nhãn: Vận hành · Marketing · Pháp lý · CEO — 4 nhãn: Tài chính · AI. Trang Tư vấn nếu dùng 4 tầng can thiệp thì vẫn nằm trong 4.)*

### 2.1 · Tư vấn Doanh nghiệp — `/advisory` ⚠️ NGOẠI LỆ

Hai khối **không cùng trục**, không gộp được:

- **7 trục hệ thống** = lĩnh vực (Mô hình · Vận hành · Marketing · Tài chính · Pháp lý · Công nghệ · CEO) — **song song**, đổi thứ tự không sai
- **4 tầng can thiệp** = mức độ sâu (Chẩn đoán → Chiến lược → Mô hình → Đồng hành theo quý) — **nối tiếp**

Trang này **không có khối quy trình**. Phương án khả dĩ: trái = 4 tầng can thiệp, phải = 7 trục phân bổ vào — nhưng phân bổ không tự nhiên. **Để sau.**

### 2.2 · Hệ thống hóa Vận hành — `/remote-ops`

**[xác minh]** — nhãn giai đoạn đang nằm trong băng chạy đầu trang, chưa thành section.

| Giai đoạn | Module |
| --- | --- |
| 1 · Chẩn đoán vận hành | `OPS-01` Khảo sát & chẩn đoán |
| 2 · Blueprint tổ chức & quy trình | `OPS-02` Sơ đồ tổ chức · `OPS-03` SOP |
| 3 · Vận hành đồng hành | `OPS-04` Quản lý task · `OPS-05` KPI dashboard · `OPS-06` Báo cáo |

Ba giai đoạn **trùng khít tên 3 gói** đang bán (Ops Diagnosis / Ops Blueprint / Remote Ops Partner) → cách nhóm đúng ý người viết nội dung.

### 2.3 · Marketing & Tăng trưởng — `/marketing`

**[xác minh]** — nhóm lấy từ **danh sách gạch đầu dòng trong 3 gói**, không tự gom.

| Giai đoạn | Tầng |
| --- | --- |
| 1 · Nền thương hiệu | `EP.01` Brand Diagnosis · `EP.02` Brand Strategy · `EP.03` Messaging · `EP.04` Visual Identity |
| 2 · Kế hoạch ra thị trường | `EP.05` IMC Blueprint · `EP.06` Launch Plan · `EP.08` Content Direction |
| 3 · Công cụ & đo lường | `EP.07` Sales Enablement Kit · `EP.09` Launch Dashboard |

### 2.4 · Tài chính & Dòng tiền — `/finance`

**[xác minh]** — 4 bước có sẵn trên trang. ⚠️ Trang này cột trái có **4 nhãn**, không phải 3.

| Bước | Module |
| --- | --- |
| 1 · Chẩn đoán | `FIN-01` Finance Diagnosis |
| 2 · Làm sạch | `FIN-02` Accounting Clean-Up · `FIN-03` Invoice & Document Control |
| 3 · Kiểm soát | `FIN-04` Finance Workflow · `FIN-05` Management Reporting · `FIN-06` Cash Flow Control · `FIN-08` Finance Governance |
| 4 · Sẵn sàng vốn | `FIN-07` Capital Readiness |

⚠️ `FIN-08` Finance Governance **không nằm trong bất kỳ gói nào** — mồ côi. Cần hỏi sếp: bán kèm hay bỏ.

### 2.5 · Pháp lý & Thuế — `/legal-tax` *(trang đang demo)*

**[xác minh]** — 3 giai đoạn có sẵn trên trang.

| Giai đoạn | Module |
| --- | --- |
| 1 · Rà soát & nhận diện rủi ro | `LGL-01` Legal & Tax Diagnosis · `LGL-04` Tax Risk Review |
| 2 · Dựng hệ thống tuân thủ | `LGL-02` Business Legal System · `LGL-03` Contract Control · `LGL-06` Tax Planning · `LGL-07` Owner Legal Advisory |
| 3 · Đồng hành xử lý tình huống | `LGL-05` Tax Explanation & Response · `LGL-08` Dissolution & Exit |

### 2.6 · Công nghệ & AI — `/ai-os` — cách B

**[suy luận]** — tên 4 nhóm là đề xuất, **chưa xác minh**.

| Nhóm | Module |
| --- | --- |
| 1 · Chẩn đoán & lộ trình | `MODULE_01` AI Opportunity Diagnosis |
| 2 · Trợ lý & tự động hóa | `MODULE_02` AI Agent · `MODULE_03` Workflow Automation · `MODULE_04` Knowledge Base |
| 3 · Dữ liệu & phần mềm | `MODULE_05` Custom Software · `MODULE_06` Data & Dashboard |
| 4 · Quản trị & con người | `MODULE_07` AI Governance · `MODULE_08` AI Training |

**Vì sao không dùng 5 bước triển khai làm nhãn trái:** 5 bước và 8 module **khác trục** — 5 bước là *cách BAIKA chạy dự án*, 8 module là *thứ BAIKA giao*. Map thử ra kết quả hỏng:

| Bước | Module rơi vào |
| --- | --- |
| `01` Khảo sát | `MODULE_01` |
| `02` Thiết kế | ⚠️ **rỗng** |
| `03` Phát triển | `MODULE_02` `03` `04` `05` `06` — **5 thẻ dồn một chỗ** |
| `04` Triển khai | `MODULE_08` |
| `05` Vận hành | `MODULE_07` |

→ **5 bước tách thành dải nhỏ riêng.** Nó làm việc khác: trấn an người mua về cách chạy dự án (sprint 2 tuần, phản hồi 4 giờ, deliverable từng bước).

### 2.7 · Đào tạo & CEO — `/ceo-blueprint`

**[suy luận]** — cách gom là đề xuất, chưa ai duyệt.

| Giai đoạn | Trụ cột |
| --- | --- |
| 1 · Nền tư duy & mô hình | `01` Tư duy hệ thống · `02` Nền tảng kinh doanh · `03` Logic doanh thu |
| 2 · Hệ thống & nguồn lực | `04` Hệ điều hành DN · `05` Tài chính · `06` Marketing · `07` Pháp lý – Thuế · `08` Công nghệ & AI |
| 3 · Bản đồ điều hành & lộ trình | `09` CEO Dashboard · `10` Lộ trình 90 ngày |

---

## 3. Danh sách cắt

Tất cả đều **[xác minh]** — đọc trực tiếp từ site đang chạy.

### 3.1 · Mẫu trùng lặp lặp lại ở cả 7 trang

Mỗi trang có một cặp khối nói **cùng một nội dung hai lần**: một bản ngắn ở giữa trang, một bản dài hơn (thêm icon) ở dưới.

| Trang | Bản ngắn | Bản dài | Cắt |
| --- | --- | --- | --- |
| Tư vấn | Dịch vụ trọng tâm (4) | Bốn tầng can thiệp (4) | giữ 1 |
| Vận hành | Dịch vụ trọng tâm (4) | Bốn hạng mục (4) | giữ 1 |
| Marketing | Hệ sinh thái dịch vụ (8) | 8 dịch vụ — một hệ sinh thái (8) | giữ 1 |
| Tài chính | Bốn trụ cột tài chính (4) | **Bốn trụ cột tài chính (4)** — cùng nhãn, cùng tên | giữ 1 |
| Pháp lý | Năm trụ cột (5) | Năm trụ cột (5) | giữ 1 |
| Công nghệ AI | Dịch vụ trọng tâm (2) | *(cả 2 mục đều lặp ở khối khác)* | **bỏ cả** |
| Đào tạo CEO | Dịch vụ trọng tâm (3) | Khung chương trình (3) | giữ 1 |

Tương tự với **khối công cụ/tiện ích** và **khối ưu đãi** — mỗi loại cũng xuất hiện 2 lần trên hầu hết các trang.

### 3.2 · Ba lỗi nặng, phải xử riêng

**a) Vận hành — hai bộ gói khác tên hoàn toàn, cùng một trang**

| Bộ 1 — "Ba nhịp đồng hành" | Bộ 2 — "Gói triển khai" |
| --- | --- |
| Sprint Hệ thống hóa (6 tuần) | Ops Diagnosis |
| Đồng hành Hệ thống (3–6 tháng) | Ops Blueprint |
| SOP Quick-Build (2 tuần) | Remote Ops Partner |

Khách không biết mua cái nào. **Phải chọn một bộ.** Đây là quyết định kinh doanh — hỏi sếp.

**b) Pháp lý — sáu công cụ dưới cùng một cái tên**

Tiêu đề *"Ba công cụ hỗ trợ quyết định"* xuất hiện hai lần với **nội dung khác hẳn nhau**:

| Bộ 1 | Bộ 2 |
| --- | --- |
| Thư viện hợp đồng | Kiểm tra rủi ro hợp đồng |
| Ước tính thuế | Tự rà soát tuân thủ thuế |
| Checklist tuân thủ | Tra cứu thông tư & nghị định |

**c) Công nghệ AI — ba danh sách phủ lên nhau**

| Danh sách | Quan hệ với 8 module |
| --- | --- |
| 3 lớp giải pháp | = `MODULE_02` `03` `05` |
| 9 giải pháp may đo | 5/9 mục (CRM · ERP · Phần mềm quản lý · Gia công · Thiết kế phần mềm) đều là biến thể của `MODULE_05`; 3 mục còn lại trùng `02` `03` `06` |

→ **Giữ 8 module làm danh sách chuẩn duy nhất. Bỏ cả 3 lớp lẫn 9 giải pháp.**

### 3.3 · Khối CTA giữa trang — gần trùng form cuối

| Trang | Khối |
| --- | --- |
| Vận hành | "Điểm khởi đầu — 60 phút chẩn đoán" |
| Công nghệ AI | "Bắt đầu ngay — Đặt lịch demo" |
| Đào tạo CEO | "Nhận tư vấn lộ trình" ≈ form cuối "Nhận tư vấn về chương trình" |

Cắt được — form cuối trang đã làm việc đó.

### 3.4 · Sai sự thật — cả 7 trang

**Địa chỉ ở footer:** *"Tầng 15, 72 Lê Thánh Tôn, **Phường Bến Nghé, Quận 1**, TP. Hồ Chí Minh"*

Cấp quận đã bỏ trên toàn quốc từ **01/07/2025**; Phường Bến Nghé đã nhập thành **Phường Sài Gòn**. Sai trên cả 7 trang. Cần sếp xác nhận địa chỉ mới trước khi dựng footer.

### 3.5 · Giữ lại, đừng cắt nhầm

| Khối | Vì sao giữ |
| --- | --- |
| **Công cụ chẩn đoán miễn phí** (1 cái/trang) | Hero hứa nó, nút sticky trỏ tới nó. Là cửa vào phễu duy nhất không cần điền form |
| **Kết quả nhận được · Đối tượng phù hợp · Điểm khác biệt** | Phần bán hàng thật. Xem mục 4 |

Phân biệt: **công cụ chẩn đoán = giữ** · **widget tính toán, thư viện mẫu = bỏ**.

---

## 4. Cần sếp duyệt — gửi hôm nay

| # | Việc | Chặn cái gì |
| --- | --- | --- |
| 1 | **Bỏ section khuyến mãi có được không** | Đó là **nơi duy nhất trên toàn site có giá** (`từ 35tr/chiến dịch` · `từ 28tr/tháng` · `từ 12tr/tháng` · `từ 8tr/tháng`). Section "Gói dịch vụ" **không có con số giá nào**. Bỏ = web không còn tín hiệu giá. Phương án giữa: bỏ section, đưa giá khởi điểm vào thẻ gói |
| 2 | **Trang Vận hành: chọn bộ gói nào** | Không chốt thì không vẽ được S3 trang đó |
| 3 | **`FIN-08` Finance Governance** — bán kèm hay bỏ | Ảnh hưởng số thẻ cụm 3 trang Tài chính |
| 4 | **Địa chỉ công ty mới** | Footer đã dựng, đang sai |
| 5 | **Tên 4 nhóm trang AI** | Vẽ được trước, sửa chữ sau — không chặn |

---

## 5. Spec component — ghi cho Tuấn

**Component `b-stage-scope`** *(tên đề xuất — hiện chưa component nào trong file Figma dùng prefix `b-`)*

**Tiêu đề section:** `BAIKA sẽ làm gì` — dùng chung cho cả 6 trang. Không đặt tên "Quy trình", vì trang Công nghệ AI là 4 nhóm **song song**, không phải các bước.

### Cấu trúc

| | |
| --- | --- |
| **Mỗi giai đoạn là MỘT khối riêng** | Bắt buộc. Nếu 8 module nằm trong một danh sách phẳng với nhãn xen giữa thì sticky sẽ bám suốt section, không nhả |
| Trong khối — cột trái | Một frame chứa **số thứ tự + tên giai đoạn**, hug chiều cao |
| Trong khối — cột phải | 1–5 module xếp dọc |
| Chiều cao khối | Cột nào cao hơn quyết định. **Không đặt `min-height` thủ công** — frame nhãn trái tự làm sàn |

Cách này gộp ba lỗi làm một: hết cắt cụt số, hết số mồ côi xa nhãn, hết phải nhớ một con số min-height.

### Cuộn

| | |
| --- | --- |
| Cơ chế | `position: sticky` với **khối cụm làm biên**. Nhãn bám tới khi hết khối, nhãn kế tiếp đẩy lên thay. Không cần JS |
| ⚠️ `top` | **Chiều cao thanh nav cố định + khoảng thở.** KHÔNG phải `0` — site có nav bám trên cùng (nút `Đăng ký rà soát`), để `0` là nhãn chui xuống dưới nav |
| Trạng thái khi bám | **Không đổi hình.** Viết thẳng ra — im lặng thì Tuấn tự điền |
| Cuộn ngang | ❌ Không dùng. Xuống dòng theo cụm |

### Số thứ tự

- Nằm **trong luồng**, chung frame với tên giai đoạn → bám sticky cùng nhãn
- **Cỡ số là tham số layout, không phải lựa chọn kiểu chữ** — nó đặt sàn chiều cao cho mọi cụm ở mọi trang. Chỉnh thì phải nhìn đồng thời trang Tài chính (`FIN-01` đứng một mình) và trang CEO (cụm 5 mục), đừng chỉnh trên trang Pháp lý rồi áp sang
- Đủ đậm để đọc lướt cũng thấy. Nó chiếm chỗ thật thì phải nói được điều gì đó
- **Trang Công nghệ AI: KHÔNG đánh số** — 4 nhóm song song, gắn số vào là bịa ra trình tự không có

### Đã bỏ — quyết định 03/09

| Bỏ | Vì sao |
| --- | --- |
| Mã module `LGL-01`… | Mã nội bộ, khách không cần. Quy ước *"mono = thứ kiểm chứng được"* dành cho thứ **người đọc** kiểm chứng (số liệu, giá, mốc), không phải mã phân loại của người viết |
| Thẻ có viền / nền / đổ bóng | Chỉ còn đường kẻ ngăn cụm. Bỏ thẻ thì lỗi "so le chưa thành nhịp" ở bản demo cũ tự hết |
| Số đặt absolute | Thay bằng số trong luồng — xem trên |

### Mobile

Cột trái sticky không tồn tại ở 1 cột. Nhãn giai đoạn thành **thanh ngang bám dưới nav** khi cuộn qua cụm đó. **Phải vẽ ra**, đừng để Tuấn đoán.

---

## 6. Việc tiếp theo

1. Chốt 4 câu ở mục 1 *(S4 · thứ tự FAQ · khuyến mãi · kiểu cuộn)*
2. Gửi sếp 4 câu ở mục 4
3. Vẽ **trang Đào tạo CEO trước** — nhiều mục nhất (10). Trang khó nhất chạy được thì 6 trang kia chắc chắn chạy được
4. Xử trang Tư vấn (ngoại lệ)
5. Ghi quyết định vào `design-log.md`
