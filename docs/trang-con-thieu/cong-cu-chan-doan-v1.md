# 5 công cụ chẩn đoán của v1 — công thức & logic

*Đọc từ mã các trang cũ baika.vn ngày 05/10/2026 **[xác minh: đọc trực tiếp hàm tính điểm trong mã]**. Không gửi thử form nào. Câu hỏi đầy đủ: `noi-dung-v1.md` + `du-lieu/ban-cu/du-lieu-cau-truc.json`. Mã gốc: `du-lieu/ban-cu/*__assessment|survey|diagnosis|diagnostic.html`.*

Có **2 kiểu** công cụ:

| Kiểu | Công cụ | Cách chấm |
| --- | --- | --- |
| A — Tự đánh giá theo nhóm | CEO Blueprint · Finance Readiness · Khảo sát Vận hành | Trung bình đều các nhóm → 0–100 → 3 mức |
| B — Chẩn đoán nhiều bước | AI Readiness · Brand Diagnostic | Điểm **có trọng số** + **luật chọn gói** |

---

## Kiểu A — CEO · Tài chính · Vận hành (cùng một công thức)

**Thang trả lời mỗi câu (4 mức):** «Chưa có gì» = 0 · «Mới manh nha» = 1 · «Có nhưng chưa ổn định» = 2 · «Đã thành hệ thống» = 3.

**Công thức:**

1. Điểm nhóm (0–10) = làm tròn( tổng điểm các câu trong nhóm ÷ (số câu × 3) × 10 )
2. Tổng điểm (0–100) = làm tròn( trung bình điểm các nhóm × 10 ) — **mọi nhóm nặng như nhau**
3. Xếp mức theo tổng điểm → mỗi mức gợi ý 1 gói
4. Kết quả hiện: vòng tròn điểm · thanh điểm từng nhóm · **3 nhóm thấp nhất được tô «yếu»**

Phải trả lời **đủ mọi câu trong nhóm** mới bấm «Tiếp tục» được **[xác minh: hàm `groupDone`]** — nên thực tế không có câu bỏ trống. Có điểm ước tính chạy trực tiếp («Điểm ước tính hiện tại … /100») trong lúc làm.

| Công cụ | Nhóm × câu | 0–39 | 40–69 | 70–100 |
| --- | --- | --- | --- | --- |
| **Business Blueprint Assessment** (`/ceo-blueprint/assessment`) | 10 nhóm × 3 = **30 câu**: Tư duy hệ thống CEO · Nền tảng kinh doanh · Logic doanh thu · Hệ điều hành DN · Tài chính & dòng tiền · Marketing & tăng trưởng · Rủi ro pháp lý – thuế · Công nghệ & AI · CEO Dashboard · Lộ trình 90 ngày | «Nền hệ thống đang mỏng» → Chương trình CEO Operating Blueprint | «Có nền nhưng chưa thành hệ thống» → Chương trình CEO Operating Blueprint | «Nền hệ thống khá vững» → Đồng hành cố vấn CEO |
| **Finance Readiness Assessment** (`/finance/assessment`) | 8 nhóm × 2 = **16 câu**: Sổ sách kế toán · Hóa đơn – chứng từ · Quy trình tài chính · Báo cáo quản trị · Dòng tiền · Sẵn sàng vốn · Quản trị tài chính · Rủi ro thuế | «Rủi ro cao — cần chẩn đoán ngay» → Finance Health Check | «Cần làm sạch và thiết lập kiểm soát» → Finance Clean-Up & Control | «Nền khá tốt — hướng tới chuẩn gọi vốn» → Capital Readiness Program |
| **Khảo sát Vận hành** (`/remote-ops/survey`) | 8 nhóm × 2 = **16 câu**: Quy trình · Tổ chức & vai trò · Giao việc & theo dõi · Nhịp điều hành · Đo lường hiệu suất · Báo cáo & cảnh báo · Phụ thuộc cá nhân · Công cụ & dữ liệu | «Vận hành đang phụ thuộc cá nhân» → Ops Diagnosis | «Có nền nhưng chưa thành hệ thống» → Ops Blueprint | «Nền vận hành khá vững» → Remote Ops Partner |

**Ví dụ (Tài chính):** trả lời toàn «Có nhưng chưa ổn định» (2) → mỗi nhóm = 2×2 ÷ 6 × 10 ≈ 6.67 → làm tròn **7** → tổng = 7 × 10 = **70** → mức «Nền khá tốt» → gợi ý Capital Readiness Program.
⚠️ Hệ quả của việc **làm tròn 2 lần**: người trả lời đều mức 2/3 (tỉ lệ thật ≈ 67%) lại được 70 và rơi vào mức **cao nhất**. Vì điểm nhóm bị làm tròn về số nguyên trước khi tính tổng, tổng có thể **lệch tới ±5 điểm** so với tỉ lệ thật. Cần lưu ý nếu dựng lại.

---

## Kiểu B1 — AI Readiness Diagnosis (`/ai-os/diagnosis`)

**9 bước:** Thông tin DN · Hiện trạng quy trình · Hiện trạng dữ liệu · Công cụ/phần mềm · Nhu cầu AI Agent · Nhu cầu Workflow Automation · Nhu cầu Custom Software · Mức sẵn sàng triển khai · Gửi yêu cầu tư vấn **[sửa 05/10 — lượt đầu ghi nhầm 10 bước]**.

**Thang 3 mức** cho câu sẵn sàng: «Chưa» = 0 · «Một phần» = 0.5 · «Rồi» = 1.

**Điểm sẵn sàng (0–100)** = 20·quy trình đã viết ra + 20·dữ liệu có cấu trúc + 15·công cụ có API + 15·đội ngũ sẵn sàng + 15·lãnh đạo có mục tiêu + 15·có ngân sách

| Sẵn sàng | Mức |
| --- | --- |
| < 30 | Low Readiness |
| 30–59 | Medium Readiness |
| 60–79 | High Readiness |
| ≥ 80 | Enterprise Ready |

**Điểm tự động hoá (0–100, cộng dồn, chặn 100)** từ dấu hiệu khách tick: nhiều thao tác lặp lại +20 · CSKH thủ công +15 · báo cáo làm tay +15 · dữ liệu nằm rải rác nhiều nơi +15 (hỏi ở bước 3 «Hiện trạng dữ liệu») · tạo nội dung thường xuyên +10 · xử lý hồ sơ/hợp đồng +10 · đội ≥ 3 người +10 · hay lỗi/quên việc +5.
~~Lỗi «dữ liệu phân tán»~~ — **không phải lỗi** (sửa 05/10): lựa chọn «Dữ liệu nằm rải rác ở nhiều nơi (file, app, giấy...)» có ở bước 3. Tổng các dấu hiệu = 100, khớp mức chặn.

**Luật chọn gói (xét theo thứ tự, gặp điều kiện đầu tiên thì dừng):**

1. Sẵn sàng ≥ 75 **và** cần AI cho ≥ 3 bộ phận → **AI Operating System Partner**
2. Có nhu cầu phần mềm riêng → **Custom AI Software**
3. Tự động hoá ≥ 60 → **AI Workflow Automation**
4. Sẵn sàng 30–59 **và** 1–3 bộ phận → **AI Agent Starter Kit**
5. Còn lại → **AI Opportunity Audit**

Kèm cờ «phạm vi phức tạp» khi (số bộ phận + số quy trình + số phần mềm) > 8.

---

## Kiểu B2 — Brand Diagnostic (`/marketing/diagnostic`)

**8 nhóm bước** (thanh «Nhóm 1/8»). **15 câu chấm điểm**, thang «Chưa» 0 · «Một phần» 0.5 · «Rồi» 1, mỗi câu thuộc 1 trong **6 trục** và có **trọng số 1 hoặc 2**:

| Trục | Câu (trọng số) |
| --- | --- |
| Brand Foundation | USP rõ (1) · Định vị (2) · Nhận diện (1) · Thông điệp cốt lõi (1) |
| IMC / Truyền thông | Kênh tích hợp (2) · Marketing–Sales khớp nhau (1) |
| Launch Plan | Sản phẩm sẵn sàng (2) · Mục tiêu ra mắt rõ (2) · Kế hoạch ra mắt (1) |
| Sales Enablement | Tài liệu bán hàng (2) · Quy trình bán (1) |
| Content | Lịch nội dung (1) · Năng lực sản xuất nội dung (1) |
| Đo lường | Kế hoạch đo lường (1) · Dashboard theo dõi (1) |

**Điểm trục** = tổng(điểm × trọng số) ÷ tổng trọng số **của câu đã trả lời** × 100. **Điểm tổng (Brand Readiness Score)** tính cùng cách trên cả 15 câu. Câu bỏ trống **không tính** vào mẫu số **[xác minh 05/10: các bước câu hỏi có `validate:()=>true` → form KHÔNG bắt trả lời; chỉ bắt họ tên/SĐT/tên DN ở bước 1 và ô đồng ý ở bước 8]**. Thời hạn & ngân sách là ô chọn thả xuống (dropdown). Kết quả vẽ biểu đồ radar 6 trục.

**Luật chọn gói (theo thứ tự):**

1. ≥ 4 trục dưới 50 **và** khách đã chọn thời hạn ra mắt cụ thể → **Brand-to-Market Launch**
2. Brand ≥ 45 **và** IMC < 65 → **IMC Launch Blueprint**
3. Brand < 45 → **Brand Foundation**
4. Còn lại → **IMC Launch Blueprint**

Nếu gói được chọn đang bị **tắt trong trang quản trị**, hệ thống tự chuyển sang gói đang bật theo thứ tự ưu tiên: Brand-to-Market Launch → IMC Launch Blueprint → Brand Foundation.

Thông tin phụ thu thêm (không chấm điểm): giai đoạn sản phẩm (Ý tưởng → Tái định vị) · thời hạn ra mắt · ngân sách (< 30 triệu → > 300 triệu / chưa tiết lộ).

---

## Chung cho cả 5 công cụ

- **Kết quả hiện ngay trên trang** sau bước cuối — khách không cần chờ BAIKA.
- **Thông tin khách + toàn bộ câu trả lời + điểm + gói gợi ý** gửi về máy chủ cũ `/api/v1/public/assessments`. Nếu máy chủ lỗi, bản ghi được **lưu tạm trong trình duyệt của khách** (localStorage) — BAIKA không nhận được. Kiểu B còn **lưu nháp** để khách quay lại làm tiếp.
- Thu: họ tên, điện thoại (bắt buộc), email, tên công ty + **ô đồng ý bắt buộc** — kiểu A: «Tôi đồng ý để BAIKA liên hệ và xử lý thông tin theo chính sách bảo mật.» · kiểu B: «Tôi đồng ý để BAIKA liên hệ tư vấn theo chính sách bảo mật.» **[xác minh 05/10 lượt 2 — lượt đầu ghi nhầm là thiếu]**. Kiểu A hỏi thông tin liên hệ **ở bước cuối**, kiểu B hỏi **ở bước đầu**.

## Khi sếp + Kapi làm bộ công cụ mới (`viec-cho` #1 #2)

Gợi ý đem vào buổi làm việc:

1. Công thức kiểu A **làm tròn 2 lần** → lệch tới ±5 điểm, có thể đẩy khách sang mức cao hơn thực tế. Nên tính tổng từ điểm thô rồi mới làm tròn.
2. Brand Diagnostic **không bắt trả lời** câu chấm điểm và bỏ câu trống khỏi mẫu số → khách trả lời 1 câu «Rồi» là được 100. Nên bắt trả lời đủ, hoặc tính câu trống = 0.
3. ~~Lỗi «dữ liệu phân tán» ở công cụ AI~~ — ghi nhầm, lựa chọn có ở bước 3 (sửa 05/10).
4. ~~Thêm ô đồng ý~~ — v1 **đã có** ô đồng ý bắt buộc ở cả 5 công cụ (sửa 05/10). Chỉ cần cập nhật link «chính sách bảo mật» sang trang mới của v2.
5. v2 không có máy chủ lưu dữ liệu → bộ công cụ mới cần quyết **kết quả lưu ở đâu** (luồng F) hay chỉ gửi mail như form liên hệ.
