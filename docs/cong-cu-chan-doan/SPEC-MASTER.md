# 5 công cụ chẩn đoán miễn phí — SPEC-MASTER

*Dựng 05/10/2026 · Đọc file này trước khi sửa bất cứ thứ gì trong 5 công cụ.*

## 1. Là gì, ở đâu

Năm công cụ tự đánh giá mà nút Hero «… miễn phí» ở 5 trang dịch vụ dẫn tới. Đường dẫn **giữ nguyên như site cũ baika.vn** (v1), nên link cũ không gãy khi chuyển tên miền.

| Công cụ | Đường dẫn | Kiểu | Logic + câu chữ |
| --- | --- | --- | --- |
| Business Blueprint Assessment | `/ceo-blueprint/assessment` | A | `src/lib/chan-doan/kieu-a.ts` |
| Finance Readiness Assessment | `/finance/assessment` | A | `src/lib/chan-doan/kieu-a.ts` |
| Khảo sát Vận hành Doanh nghiệp | `/remote-ops/survey` | A | `src/lib/chan-doan/kieu-a.ts` |
| AI Readiness Diagnosis | `/ai-os/diagnosis` | B1 | `src/lib/chan-doan/ai.ts` |
| Brand Diagnostic | `/marketing/diagnostic` | B2 | `src/lib/chan-doan/thuong-hieu.ts` |

Giao diện: `src/components/CongCuKieuA.astro` · `CongCuAI.astro` · `CongCuThuongHieu.astro`, dùng chung khung + bộ kiểu `CongCuKhung.astro`, ô lựa chọn `LuaChon.astro`. Phần chạy trên trình duyệt dùng chung: `src/lib/chan-doan/trinh-duyet.ts`. Nhận kết quả + gửi mail: `api/chan-doan.ts`.

## 2. Ai quyết gì — đã chốt

| Điều | Ai chốt | Ngày |
| --- | --- | --- |
| Dùng lại **logic v1** (công thức, câu hỏi, mức, luật chọn gói) | Sếp | 05/10 |
| **Giữ nguyên 2 chỗ lệch của v1**: kiểu A làm tròn 2 lần · Brand không bắt trả lời câu chấm điểm | Sếp | 05/10 |
| Kết quả **tạm gửi mail** về BAIKA, chưa cần kho lưu | Sếp | 05/10 |
| Giao diện theo bản Figma MVP, «UI/UX sửa sau» | Thắng | 05/10 |

Figma MVP (page `UI`): Finance `994:3944` · CEO `998:4178` · Remote Ops `999:4559` · AI `1000:4670` · Thương hiệu `1002:5246`.
Mô tả công thức bằng lời: `docs/trang-con-thieu/cong-cu-chan-doan-v1.md` (nhánh `spec-4-trang`). Mã gốc v1: `docs/trang-con-thieu/du-lieu/ban-cu/`.

## 3. Đã kiểm thế nào

- `pnpm kiem-tra:chan-doan` — 23 ca tính tay (gồm các mẫu trên Figma). Chạy cả trong CI.
- Đối chiếu với **chính mã v1**: chạy hàm tính điểm gốc của v1 và hàm mới trên 19.000 bộ trả lời ngẫu nhiên → 0 lệch; toàn bộ câu hỏi, mức, tên gói khớp nguyên văn v1 (05/10/2026).
- Bấm thử cả 5 công cụ từ đầu đến cuối ở khổ 1280 và 375 (Playwright, giả lập máy chủ trả 200): ra đúng điểm mẫu, không tràn ngang, không lỗi JS.

## 4. Khác v1 — có chủ ý

| Khác | Vì sao |
| --- | --- |
| Gửi kết quả về **mail** (Resend, cùng 3 biến môi trường của form Liên hệ) thay vì máy chủ v1 | Sếp chốt; v2 không có máy chủ lưu |
| Không lưu nháp, không ghi sự kiện theo dõi | Nháp của v1 thật ra không giữ được gì; Chính sách bảo mật cam kết không gắn công cụ theo dõi hành vi |
| Brand: bỏ bước «gói đang tắt → chuyển gói khác» | v2 không có trang quản trị → cả 3 gói luôn bật |
| Brand: biểu đồ radar 6 trục → thanh điểm | Theo Figma MVP; radar để vòng sửa UI |
| Kiểm số điện thoại dùng **cùng luật với form Liên hệ** (0/+84, 9–11 số) | Một luật cho cả site; máy chủ cũng kiểm theo luật này |
| Mã hồ sơ 6 ký tự ở **cả 5 công cụ** (v1 chỉ AI hiện) | Ghi vào tiêu đề mail để BAIKA khớp khi khách gọi; chỉ AI hiện cho khách, như v1 |
| Nút ở màn kết quả trỏ `/<trang dịch vụ>#lien-he` (v1 Brand trỏ trang chủ) | Trang chủ v2 không có form |

## 5. Dừng lại hỏi khi

- Định «sửa» làm tròn 2 lần hoặc bắt trả lời câu Brand → **sếp đã chốt giữ**, hỏi lại trước.
- Đổi câu chữ / thang điểm / luật gói → sửa `tools/kiem-tra-chan-doan.mts` TRƯỚC, rồi mới sửa `src/lib/chan-doan/`.
- Công cụ thu thêm loại dữ liệu mới → sửa **Chính sách bảo mật trước** (mục 1 đã nói về công cụ chẩn đoán).
- Muốn lưu kết quả vào kho / Google Sheets tự động → đó là việc của luồng F (backend), không làm trong repo này.

## 6. Còn treo (vòng sửa UI)

- Lựa chọn 1-đáp-án đang dùng ô vuông của `Check` — Figma chưa có biến thể radio.
- Vòng điểm 200 và thanh dày 6 / 8 chưa có token.
- Biểu đồ radar (Brand). Màn kết quả mới vẽ một mức — cần vẽ thêm mức thấp nhất + cao nhất.
- Nhãn «Nên bắt đầu» (Badge, chữ label 11px) nhỏ — xem lại khi sửa UI.
- `LuaChon.astro` trùng hình với `CheckItem.astro` của nhánh `remote-office` — gộp khi Remote Office vào `main`.
