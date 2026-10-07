# Cách đóng góp vào repo này

*Lập 04/10/2026. Áp dụng cho **mọi người và mọi agent** (Claude, agent của sếp, Codex, Cursor…). Luật chi tiết về code, token, Figma: `CLAUDE.md`.*

Công ty **không có dev**. Website do agent dựng; người duyệt là Thắng (designer). Quy trình dưới đây tồn tại để không thay đổi nào lên web mà chưa có người nhìn.

---

## 1. Ai làm gì

| Việc | Ai |
| --- | --- |
| Sửa code, sửa tài liệu, tạo commit | Agent |
| `git push` **nhánh riêng** | Agent (từ 06/10/2026, Claude Code trên máy Thắng — dùng phiên đăng nhập đã lưu, không thấy mật khẩu). **Không bao giờ push `main`** |
| Mở và gộp Pull Request | **Người** (Thắng hoặc sếp) |
| Duyệt bằng mắt bản preview trước khi gộp | Thắng |
| Quyết định nội dung, giá, ra mắt | Sếp |

### Cần quyền gì — xin ai

| Để làm | Cần | Xin |
| --- | --- | --- |
| Đọc code, tài liệu | Không cần gì — repo công khai | — |
| Đẩy nhánh, mở / gộp Pull Request | Quyền ghi repo GitHub | Thắng |
| Đọc thiết kế | Quyền xem file Figma `YmcXg1lQqGVjQOFrVtdOgW` | Thắng |
| Xem bản preview, quay lui bản chính | Thành viên project Vercel `bk-web-update-sep-2026` | Thắng |
| Tên miền, DNS, biến môi trường form | — | Sếp quyết, Thắng thao tác |

Không ai gửi mật khẩu hay khoá qua chat, email hay file trong repo. Mỗi người / agent một quyền riêng, thu hồi được riêng.

## 2. Nhánh (branch)

- **`main`** = bản đang chạy cho khách. **Đã khoá**: không push thẳng, không xoá, không ghi đè lịch sử. Chỉ thay đổi được qua **Pull Request** (PR — đề nghị gộp, xem được thay đổi trước khi gộp).
- Mỗi việc làm trên **một nhánh riêng**, tên tiếng Việt không dấu, nối bằng gạch: `sua-h1-trang-chu`, `menu-remote-office`.
- Trang hoặc landing lớn có nhánh sống lâu (vd. `remote-office`) — gộp vào `main` khi ra mắt. Trước khi gộp, kéo `main` vào nhánh đó một lần cho đồng bộ.
- Gộp xong thì xoá nhánh.

## 3. Commit

- Commit bằng **danh tính có sẵn của repo** (`BAIKA` · email `noreply` của `baikavn-bot`). Vercel chỉ dựng commit của danh tính này. **Không** đổi danh tính bằng `git -c user.name=…`.
- `git add` **từng file**, đọc `git status` trước. Không `git add -A` mù.
- **Không bao giờ commit:** `.env`, khoá API, mật khẩu, thư mục `Claude outputs/`, dữ liệu khách, tài liệu tài chính – pháp lý – nhân sự. **Repo công khai** — đã push là ai cũng đọc được, kể cả sau khi xoá.
- Lời commit tiếng Việt không dấu, nói **đã đổi gì**: `Menu: them muc Remote Office dung dau`.
- Sửa code làm đổi chữ, số hay hành vi → sửa tài liệu trong `docs/` **cùng commit**.

## 4. Đưa một thay đổi lên web

1. Agent commit trên nhánh riêng → agent `git push -u origin <tên-nhánh>` (trước 06/10: người push).
2. GitHub hiện **Compare & pull request** → bấm → mẫu mô tả tự điền → **Create pull request**.
3. Đợi kiểm tra tự động **`kiem-tra`** ✓ xanh (build + luật tĩnh + 11 ca ước tính). Đỏ thì **không gộp** — gửi agent sửa.
4. Mở link preview Vercel trong PR, **nhìn bằng mắt**. CI không thay được bước này.
5. **Merge pull request** → **Confirm merge** (để lựa chọn mặc định). Vercel tự dựng lại bản chính.
6. Xoá nhánh vừa gộp.

Hỏng sau khi gộp: Vercel → **Deployments** → bản cũ còn tốt → **⋯** → **Promote to Production**. ~30 giây, không cần code.

## 5. PR của Dependabot (robot nâng thư viện, mỗi tháng)

| Nhãn PR | Là gì | Xử lý |
| --- | --- | --- |
| `javascript` | Thư viện của site (chỉ bản nhỏ) | Gửi agent đọc + kiểm preview trước, rồi mới gộp |
| `github_actions` | Các bước của máy kiểm tra tự động | ✓ xanh → gộp luôn · ✗ đỏ → gửi agent |

Nâng bản lớn của thư viện (vd. Astro 4 → 5) là một việc riêng, có kế hoạch — không gộp vội.

## 6. Luật không thương lượng (tóm tắt — chi tiết ở `CLAUDE.md`)

- Figma `YmcXg1lQqGVjQOFrVtdOgW` là nguồn chân lý giao diện. Code và Figma lệch → hỏi Thắng.
- Không tự chế màu / cỡ chữ / khoảng cách mới — chỉ dùng token trong `src/styles/tokens.css`. Không có `#FFFFFF` trong CSS.
- Không push thẳng `main`, không force push, không tắt khoá nhánh để lách.
- Thấy khoá bí mật bị commit → dừng, báo Thắng, thu hồi khoá ngay (xem `SECURITY.md`).
