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

**Trạng thái:** ✅ **đã bật 04/10/2026** — ruleset `bao-ve-main`, Active, danh sách vượt khoá trống. Các bước dưới để làm lại khi cần (repo mới, landing mới…).

**Các bước — giao diện Rulesets** *(GitHub đổi giao diện thường xuyên — không thấy đúng chỗ thì chụp màn gửi agent)*:

1. Repo trên GitHub → **Settings** → cột trái **Rules → Rulesets** → **New ruleset** → **New branch ruleset**.
2. **Ruleset Name:** `bao-ve-main`.
3. **Enforcement status:** đổi **Disabled → Active**. Để Disabled là luật không có tác dụng.
4. **Bypass list:** **để trống.** Repo dùng chung tài khoản `baikavn-bot` — cho chủ repo vượt khoá là ai cũng vượt được. Lúc khẩn cấp: quay lui trên Vercel (mục 4), hoặc tạm đổi ruleset về Disabled, sửa xong bật lại.
5. **Target branches:** **Add target → Include default branch** (= `main`).
6. **Rules** — tick đúng 4 ô:
   - **Restrict deletions** — cấm xoá `main`
   - **Block force pushes** — cấm ghi đè lịch sử
   - **Require a pull request before merging** → **Required approvals = 0** (repo một người, để 1 là không gộp được gì)
   - **Require status checks to pass** → **Add checks** → gõ `kiem-tra` → chọn. **Không** chọn check tên Vercel.
   - **Không** tick *Restrict creations / updates* (chặn luôn cả gộp bằng Pull Request), *signed commits*, *linear history*.
7. Cuối trang → **Create**.

**Kiểm:** **Settings → Rules → Rulesets** thấy `bao-ve-main` · **Active**. Thử `git push origin main` từ máy (khi có commit mới trên `main`) → GitHub phải **từ chối** và nhắc dùng Pull Request. Bị từ chối là khoá đang chạy đúng.

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
