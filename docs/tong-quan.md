# Tổng quan dự án — website BAIKA

*Lập 13/10/2026 · vai trò: PROJECT BRIEF (bảng ánh xạ: `docs/README.md`). Trạng thái hằng ngày không ghi ở đây — xem `TRANG-THAI.md`.*

Ký hiệu: **[xác minh]** = kiểm được từ code / tài liệu chốt · **[suy luận]** = chưa kiểm.

---

## 1. BAIKA là gì

**BAIKA là công ty tư vấn và kiến tạo hệ thống vận hành cho doanh nghiệp** — không dừng ở khuyến nghị, cũng không vội bán phần mềm: bắt đầu từ câu hỏi kinh doanh, làm rõ nguyên nhân gốc, rồi huy động đúng năng lực trong **8 Trụ**.

- **Không phải** công ty bán khoá học online — bản brief cũ (tháng 8) hiểu sai chỗ này.
- **8 Trụ = 7 trang dịch vụ + Trạm Kết Nối.** Trạm Kết Nối là sản phẩm riêng, có tên miền riêng (`tramketnoi.com`), không phải trang dịch vụ. Trạm Ý Tưởng là hạt nhân, không nằm trong 8 Trụ.
- Trụ chủ lực thương mại: **Tư vấn doanh nghiệp** (`/advisory`).

## 2. Website này để làm gì

Website marketing **tĩnh** cho BAIKA: giới thiệu 7 dịch vụ, nhận yêu cầu liên hệ, cho khách tự chẩn đoán miễn phí (5 công cụ), và landing riêng cho **Remote Office**.

**Mục tiêu 3 tháng tới** *(Thắng chốt 07/10/2026)*: **thay hẳn site cũ `baika.vn` bằng site mới, càng sớm càng tốt.** Việc còn phải làm: `docs/chuyen-baika-vn.md`.

## 3. Phạm vi

| Có trong v1 | Ngoài v1 |
| --- | --- |
| Trang chủ (lưới bento) · 7 trang dịch vụ · Liên hệ · 5 công cụ chẩn đoán · Chính sách bảo mật · trang «Sắp ra mắt» · landing Remote Office (`baika.website`) | Giới thiệu (Về BAIKA) · Trạm Ý Tưởng · Kho mô hình · Kho Tài Nguyên — spec nội dung chép từ site cũ ở `docs/trang-con-thieu/`, chưa duyệt. Ngày chuyển `baika.vn`, các đường dẫn cũ của chúng chuyển tạm về `/sap-ra-mat` hoặc `/` |

Danh sách từng trang: `docs/so-do-trang.md`.

## 4. Đây là REBUILD HOÀN TOÀN

Thứ **duy nhất** kế thừa từ site cũ: **tên miền `baika.vn`** và **7 slug** dịch vụ (`DEC-019`) — cộng 5 đường dẫn công cụ chẩn đoán (giữ như cũ để link cũ không gãy).

Site cũ chỉ là **nguồn tham khảo / audit**, không phải code, thiết kế hay kiến trúc nền. **Vấn đề của site cũ không tự động là yêu cầu của site mới.** Gọi tắt: **v1** = site cũ (Next.js) · **v2** = repo này.

## 5. Ai làm gì

| Vai | Người | Quyết gì |
| --- | --- | --- |
| Lãnh đạo | **Sếp** | Nội dung, giá, ngân sách, ra mắt |
| Chịu trách nhiệm dự án | **Thắng** — designer, **không phải lập trình viên** | Mọi vấn đề thiết kế và kỹ thuật của website; chủ file Figma; duyệt và gộp Pull Request |
| Agent của sếp | **Kapi** | Rà soát nội dung pháp lý (đã duyệt Chính sách bảo mật 05/10). Sửa web cũng phải qua Pull Request |
| Dựng và bảo trì | **Agent** (Claude Code) | Viết code, tài liệu, kiểm tra; push nhánh riêng |

**Công ty không có dev.** Hệ quả cho mọi quyết định kỹ thuật: code phải đọc được bởi người không biết code; chọn thứ đơn giản; site tĩnh để không ai chăm cũng sống.

## 6. Các luồng việc

| Luồng | Nội dung | Trạng thái |
| --- | --- | --- |
| A | Design system (token, component Figma) | Gần xong |
| C | Mô hình 3D | Xong — không đưa vào v1 (`DEC-004`) |
| D | Notion → web | Tạm dừng |
| **E** | **Website (repo này)** | **Đang làm** |
| F | Hạ tầng dữ liệu & agent | Đang tìm hiểu — **không** đưa code agent / kho dữ liệu vào repo này |

Không có luồng B — xem §7.

## 7. Bài học gốc: dữ liệu demo ≠ yêu cầu

Từng có cả một «luồng B — landing ClearWork» không có thật: một phiên agent đọc khối demo minh hoạ trong file design system HTML rồi hiểu thành yêu cầu. Sai đó sống qua nhiều phiên. ClearWork là prototype cũ của BAIKA; mọi quy ước của nó đã bỏ (`DEC-024`).

**Luật rút ra:** một dữ liệu nhìn thấy không đủ để kết luận. Nói rõ **đây là suy luận hay đã xác minh**.

## 8. Còn chưa biết

- **Người đọc website là ai** (khách tiềm năng, đối tác, người trong ngành?), tới từ đâu, đọc trên máy gì — **chưa có dữ liệu thật**. Site chưa gắn công cụ đo (`viec-cho` #27).
- **Có cần bản tiếng Anh không** — chưa ai hỏi. Ảnh hưởng typography và cấu trúc URL.
- Ngân sách hình ảnh & asset — chưa chốt.
