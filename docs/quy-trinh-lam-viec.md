# Quy trình làm việc — từ yêu cầu tới web

*Lập 13/10/2026 · vai trò: WORKFLOW (bảng ánh xạ: `docs/README.md`). Chi tiết git (nhánh, commit, PR, Dependabot): `CONTRIBUTING.md` — không chép lại ở đây.*

## 1. Một vòng làm việc

```
Thắng giao việc ──► agent đọc TRANG-THAI + viec-cho + spec trang + Figma
      │
      ▼
Thiếu thông tin / lệch nguồn? ──có──► HỎI (đánh số, kèm đề xuất) ──► Thắng chốt
      │ không
      ▼
Nhánh riêng từ main ──► code + spec docs/ CÙNG commit ──► build · kiem-tra · chụp & NHÌN
      │
      ▼
Thắng chốt điều Figma chưa có? ──có──► agent vẽ vào Figma (đồng bộ ngược §3)
      │
      ▼
agent push nhánh ──► gửi link TẠO PR ──► Thắng mở PR · CI xanh · nhìn Preview ──► Thắng gộp
```

## 2. Nguồn chân lý — khi hai nguồn lệch nhau

| Lệch giữa | Ai thắng |
| --- | --- |
| Code ↔ tài liệu | **Figma** |
| Figma ↔ quyết định đã ghi | **Hỏi Thắng** |
| Bản trong repo ↔ bản ở project claude.ai | **Repo** (claude.ai «BaiKa.vn» không dùng nữa từ 07/10) |
| Hai tài liệu trong repo | Tài liệu của trang (`docs/<trang>/SPEC-MASTER.md`) → `docs/_chung/` là lưu trữ |

**Đọc nhật ký quyết định trước khi kết luận** — nhiều thứ trông như lỗi thật ra đã chốt có lý do. Mục lục: `docs/_chung/muc-luc-dec.md`.

## 3. Đồng bộ ngược: chốt ở phiên agent → agent vẽ vào Figma *(Thắng chốt 04/10)*

Thắng **duyệt / cập nhật / thêm** một điều mà Figma chưa có → **agent tự vào Figma tạo đúng điều đã chốt**, để «Figma thắng» không bao giờ kéo code về bản cũ.

| | |
| --- | --- |
| **Áp dụng cho** | Chỉ điều **Thắng đã chốt rõ**. Đề xuất chưa duyệt **không** vẽ |
| **Cách vẽ** | Chỉ dùng component · text style · biến **có sẵn**. Thiếu token → dừng, hỏi |
| **Phạm vi** | Chỉ thêm / sửa đúng node của điều đã chốt. **Không** xoá, đổi tên, dọn dẹp node khác |
| **Component dùng chung** | Báo trước **số instance bị ảnh hưởng**, rồi mới ghi |
| **Thiếu thông tin để vẽ** | **Hỏi**, không tự chọn |
| **Sau khi ghi** | ① chụp node ra **nhìn** · ② ghi nhật ký Figma (trang: spec của trang · dùng chung: `docs/nhat-ky-figma-chung.md`) · ③ báo Thắng node ID |

## 4. Tài liệu đi theo thay đổi

| Thay đổi | Phải sửa cùng lúc |
| --- | --- |
| Code làm đổi chữ, số hay hành vi | Spec trong `docs/<trang>/` **cùng commit** + 1 dòng `CHANGELOG.md` (ghi cùng PR tính năng; riêng `remote-office` thêm ngay trước lúc gộp) |
| Figma đổi | «Nhật ký Figma» của spec, hoặc `docs/nhat-ky-figma-chung.md` |
| Trạng thái dự án (nhánh, tên miền, việc kẹt) | `TRANG-THAI.md` |
| Việc tạm gác / chờ người khác | `docs/viec-cho.md` (ghi trung tính — repo công khai) |
| Thêm trang | `docs/so-do-trang.md` + thư mục `docs/<ten-trang>/` khung 4 file |

**Tài liệu vận hành** (`TRANG-THAI.md`, `docs/viec-cho.md`, `CLAUDE.md`) **chỉ sửa trên `main` qua PR** *(Thắng chốt 07/10)*. Nhánh tính năng chỉ chứa code + spec của trang. Lý do: trước đây cùng một file bị sửa song song trên hai nhánh, agent mở nhánh nào tin bản đó.

## 5. Khung 4 file cho mỗi trang / landing — `docs/<ten-trang>/`

| File | Vai trò |
| --- | --- |
| `SPEC-MASTER.md` | **Đọc đầu tiên.** Ai quyết gì · làm gì khi hai nguồn lệch · danh sách dừng lại hỏi · checklist nghiệm thu |
| `spec-noi-dung.md` | Chữ, con số, công thức, điều được / không được hứa |
| `spec-giao-dien.md` | Figma → source: bố cục, component, trạng thái, hành vi |
| `quy-trinh-build.md` | Dựng, kiểm tra, commit |

Đang có: `docs/remote-office/` (đủ 4 file) · `docs/cong-cu-chan-doan/` (chỉ `SPEC-MASTER.md`).

## 6. Hỏi và chốt

- **Không im lặng làm theo yêu cầu sai.** Cản lại, giải thích, đưa phương án thay thế.
- Nhiều chỗ cần chốt → **bảng mã** (`L1`, `L2`… hoặc số `viec-cho`), mỗi dòng kèm đề xuất, để Thắng trả lời theo số.
- Phân biệt **«đã xác minh»** và **«suy đoán»** khi báo cáo.
- Việc cần **sếp** quyết → gom một danh sách, xếp theo mức chặn việc.
- **Ra mắt / đổi tên miền / push nhánh mà khách đang xem** → hỏi Thắng trước.

## 7. Bài học đã trả giá — đừng lặp lại

| Bài học | Từ đâu ra |
| --- | --- |
| **Sau mỗi lượt ghi hàng loạt, mở ra NHÌN.** Số đếm khớp không chứng minh kết quả đúng | `DEC-035-A` — bind 566 paint «0 lỗi», 8 ô bento thành khối trắng đặc |
| **Kiểm một thuộc tính thì đọc cả giá trị lẫn styleId** | `DEC-022` — kết luận nhầm «shadow không có token» |
| **Trên Vercel, `rewrites` thua file tĩnh** — dùng `routes` | Gắn `baika.website` 01/10 |
| **Thao tác theo tên node thì kiểm kích thước kết quả trước khi ghi** | Componentise nhầm cả khối form 840×528 |
| **Dữ liệu mẫu trong file demo ≠ yêu cầu dự án** | «Luồng B — landing ClearWork» không có thật |
| **Đổi tên trục variant: ghi lại instance trước, đổi cả bộ một lượt, đối chiếu sau** | `DEC-036` — 213 instance, 0 gãy |
| **So hai nhánh thì so từ điểm tách nhau** (`git diff A...B`), không so hai đầu nhánh | Kiểm toán 06/10 — báo nhầm «nhiều xung đột» |
