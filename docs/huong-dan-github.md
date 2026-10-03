# Hướng dẫn GitHub — dành cho Thắng

*Lập 03/10/2026. Các bước ở đây cần tài khoản GitHub đã đăng nhập, nên **chỉ Thắng làm**. Agent không đụng vào thông tin đăng nhập.*

Mọi lệnh gõ trong **CMD**. Mở CMD rồi gõ dòng này trước (đường dẫn có dấu cách nên phải có ngoặc kép):

```
cd /d "D:\BK. Web\baika-website"
```

---

## 1. Đẩy code lên (push)

**Push** = gửi các commit trên máy lên GitHub. Agent commit trên máy anh; anh push.

```
git push origin remote-office
```

Thay `remote-office` bằng tên nhánh agent báo.

**Kiểm:** dòng cuối có dạng `abc1234..def5678  remote-office -> remote-office` là xong.

---

## 2. Đẩy nhãn phiên bản (tag)

**Nhãn (tag)** = cái tên gắn cố định vào một commit, ví dụ `v1.0.0` là "bản phát hành đầu tiên". Khác nhánh: nhánh chạy tiếp theo commit mới, nhãn thì đứng yên mãi ở commit đó. Cần quay về đúng bản cũ thì tìm theo nhãn.

Agent gắn nhãn trên máy anh. Anh đẩy lên:

```
git push origin v1.0.0
```

**Kiểm:** trên GitHub, trang repo → bấm **Tags** (cạnh chỗ chọn nhánh) → thấy `v1.0.0`.

Quy ước số: `v1.0.0` → sửa lỗi nhỏ thành `v1.0.1` · thêm trang / tính năng thành `v1.1.0` · làm lại lớn thành `v2.0.0`. Remote Office ra mắt sẽ là `v1.1.0`.

---

## 3. Khoá nhánh `main` (branch protection)

**Vì sao:** `main` là bản đang chạy cho khách xem. Khoá lại thì không ai, kể cả agent của sếp, đẩy thẳng code chưa kiểm vào được. Mọi thay đổi phải qua **Pull Request** (đề nghị gộp, xem được thay đổi trước khi gộp) và CI (kiểm tra tự động) phải xanh.

**Làm khi nào:** sau khi push xong mục 1 **và** tab **Actions** đã có ít nhất một lượt «Kiem tra» chạy xanh. Chưa có lượt chạy nào thì GitHub chưa biết có bước kiểm tên `kiem-tra` để chọn ở bước 5 dưới đây.

**Các bước** *(GitHub đổi giao diện thường xuyên — chữ trên màn có thể hơi khác. Không thấy đúng chỗ thì chụp màn gửi agent)*:

1. Repo trên GitHub → **Settings** (thanh trên cùng, bên phải).
2. Cột trái → **Branches** → **Add branch protection rule** (hoặc **Add classic branch protection rule**).
3. **Branch name pattern:** gõ `main`.
4. Tick **Require a pull request before merging**.
   - **Bỏ tick** *Require approvals* — repo chỉ có một người, không ai tự duyệt PR của chính mình được. Tick vào là anh không gộp được gì.
5. Tick **Require status checks to pass before merging** → ô tìm kiếm gõ `kiem-tra` → chọn nó.
6. **Để trống** *Do not allow bypassing the above settings*. Lý do: lúc khẩn cấp anh (chủ repo) vẫn vượt được khoá. Muốn chặt hơn thì bật sau.
7. Kéo xuống cuối → **Create**.

**Kiểm:** quay lại **Settings → Branches** thấy dòng `main` có quy tắc. Thử `git push origin main` từ máy (khi có commit mới trên `main`) → GitHub phải **từ chối** và nhắc dùng Pull Request. Bị từ chối là khoá đang chạy đúng.

**Sau khi khoá, cách đưa thay đổi lên `main`:**

1. Agent commit trên một nhánh (vd. `remote-office`), anh push nhánh đó (mục 1).
2. GitHub hiện nút **Compare & pull request** → bấm → mẫu mô tả tự điền → **Create pull request**.
3. Đợi CI xanh ✓ và Vercel bình luận link preview → mở preview xem bằng mắt.
4. Bấm **Merge pull request** → **Confirm merge**. Vercel tự dựng lại bản chính.

⚠️ Báo sếp: sau khi khoá, **agent của sếp** cũng phải đi đường Pull Request, không đẩy thẳng vào `main` được nữa.

---

## 4. Quay lui khi bản chính hỏng — không cần git

Đây là phanh khẩn cấp, xem thêm `docs/_chung/van-hanh-sau-launch.md`.

Vercel → project `bk-web-update-sep-2026` → **Deployments** → chọn bản cũ còn tốt → nút **⋯** → **Promote to Production** (hoặc **Instant Rollback**). Mất khoảng 30 giây, không đụng tới code.
