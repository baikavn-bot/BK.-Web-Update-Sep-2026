# Bản chụp bản cũ baika.vn — 05/10/2026

Lưu để **không mất nội dung** khi baika.vn chuyển sang baika-website-v2. Chụp bằng Chrome, chỉ đọc (không đăng nhập, không gửi form). Đã dò: không chứa khoá bí mật hay dữ liệu cá nhân — chỉ email/điện thoại công ty và số mẫu trong form.

| File | Là gì |
| --- | --- |
| `trang.json` | 176 địa chỉ: mã trạng thái, tiêu đề, H1, mô tả, ảnh chia sẻ, link, **toàn bộ chữ** (bản máy chủ trả về). Trang dựng bằng JavaScript (`/tram-y-tuong`, `/ve-baika`…) chỉ có chữ khung — nội dung đầy đủ của chúng ở `../../spec-noi-dung.md` |
| `trangchu.html` | Trang chủ cũ (file tĩnh được nhúng ở `/`) |
| `<dịch vụ>__index.html` (7 file) | Mã gốc 7 trang dịch vụ — **đủ mọi khối**, kể cả khối v2 đã cắt |
| `<dịch vụ>__assessment/survey/diagnosis/diagnostic.html` (5 file) | Mã gốc 5 công cụ chẩn đoán — **chứa bộ câu hỏi + cách chấm điểm** trong phần script |
| `ve-baika.html` | Trang Về BAIKA (nội dung nằm trong script) |
| `noi-dung/*.md` (18 file) | **Chữ đã hiển thị đầy đủ** (sau khi JavaScript chạy) của trang chủ, 7 trang dịch vụ, 5 công cụ, Trạm Ý Tưởng, Tài nguyên, Đăng nhập, Trạm Kết Nối — **đọc file này trước** |
| `du-lieu-cau-truc.json` | Dữ liệu gốc từng khối (gói, FAQ, đối tượng, ưu đãi, câu hỏi công cụ…) trích từ mã — bản đọc được: `../../noi-dung-v1.md` |
| `ma-dung-chung/` | 3 file mã dùng chung của bản cũ: `site-common.js` (vẽ khối) · `shared-auth.js` (đăng nhập dùng chung, chặn trang quản trị) · `shield.js`. Đã dò: không chứa khoá bí mật |

Dữ liệu 155 mô hình: `../mo-hinh-dong-goi.json`. Phân tích: `docs/chuyen-baika-vn.md` §4–§5.

⚠️ Đây là **tài liệu tham khảo**, không phải nội dung đã duyệt. Đừng chép thẳng lên site.
