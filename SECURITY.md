# Bảo mật

## Báo lỗ hổng

Thấy lỗ hổng bảo mật trên website BAIKA hoặc trong repo này (lộ khoá, form bị lạm dụng, lỗi cho phép chèn mã…), vui lòng **gửi email tới `baika.vn@gmail.com`**, tiêu đề bắt đầu bằng `[Bảo mật]`.

- **Đừng** mở Issue công khai cho lỗ hổng — repo này ai cũng đọc được.
- Ghi rõ: trang / file nào, cách tái hiện, ảnh hưởng.
- BAIKA sẽ phản hồi xác nhận đã nhận.

## Phạm vi

| Trong phạm vi | Ngoài phạm vi |
| --- | --- |
| Các trang tĩnh của site · hàm gửi form `api/contact.ts` · `api/health.ts` · cấu hình `vercel.json` | Site cũ `baika.vn` (hosting riêng, không thuộc repo này) · dịch vụ bên thứ ba (Vercel, Resend, GitHub) |

## Dành cho người làm trong repo

- Khoá API, mật khẩu chỉ nằm trong **biến môi trường trên Vercel**, không bao giờ trong file. `.env` bị `.gitignore` chặn; `.env.example` chỉ có tên biến.
- Lỡ commit một khoá: **thu hồi khoá đó ngay** ở dịch vụ cấp nó, rồi báo Thắng. Xoá commit thôi là chưa đủ — repo công khai, khoá đã lộ là đã lộ.
