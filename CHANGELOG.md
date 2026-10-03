# CHANGELOG — đã đổi gì, ngày nào

Ghi theo ngày, mới nhất ở trên. Mỗi dòng nói **người dùng thấy gì khác**, không chỉ nói đã sửa file nào.
Chi tiết từng thay đổi: `git log`. Lý do của các quyết định: spec trong `docs/` và nhật ký `DEC-…` (xem `CLAUDE.md` §3).

Nhóm: **Thêm** · **Đổi** · **Sửa lỗi** · **Tài liệu**.

---

## Chưa phát hành — nhánh `remote-office`

### 03/10/2026 — đợt 2
**Thêm**
- Kiểm tra tự động trên GitHub (`.github/workflows/kiem-tra.yml`): mỗi lần push chạy build + luật tĩnh + 11 ca ước tính.
- Dependabot (`.github/dependabot.yml`): mỗi tháng đề xuất nâng thư viện bản nhỏ, bỏ qua bản lớn. Có tác dụng khi file này lên `main`.
- Mẫu mô tả Pull Request (`.github/pull_request_template.md`).

### 03/10/2026 — đợt 1
**Tài liệu**
- Thêm `TRANG-THAI.md` (trạng thái dự án), `AGENTS.md`, `CHANGELOG.md`; viết lại `README.md`.
- `CLAUDE.md`: sửa cấu trúc thư mục cho khớp code thật, thêm mục Git, ghi `api/` là ngoại lệ của site tĩnh.

**Thêm**
- Bộ kiểm tra vào repo (`tools/kiem-tra/`) + lệnh `pnpm kiem-tra`, `pnpm kiem-tra:uoc-tinh`, `pnpm kiem-tra:trang`, `pnpm chup`.

**Đổi**
- `.gitignore` chặn thêm `desktop.ini` (file Windows tự sinh) và thư mục ảnh của bộ kiểm tra. Gỡ `desktop.ini` khỏi git.

### 02/10/2026
**Đổi**
- Công cụ ước tính Remote Office theo **logic ban đầu** (Spec v3 §13.6–13.7, sếp chốt): gói theo số nhóm việc, 1–5 vị trí, chi phí cố định 1.800.000 đ, tick sẵn Hành chính · Nhân sự · Chăm sóc khách hàng.

**Sửa lỗi**
- Mail từ form ghi **đúng tên miền + trang gửi** ở cả 9 trang (trước đây luôn ghi «/lien-he»). Form ước tính có tiêu đề riêng «Yêu cầu theo ước tính».

### 01/10/2026
**Thêm**
- Gắn tên miền `baika.website` vào trang Remote Office bằng `vercel.json` (`routes`) + thẻ `canonical`. Chưa chạy — tên miền đang bị nhà đăng ký khoá.
- Nút «Gửi yêu cầu theo ước tính này» điền sẵn bản tóm tắt vào ô «Mô tả vấn đề».
- Ô «Nhóm công việc» thành danh sách tick 8 nhóm (component `CheckItem`).
- Khối R2 «Chi phí thật của một nhân viên» và R4 công cụ ước tính — trang đủ 9/9 khối.
- Khối R6 bảng so sánh, có bản mobile riêng.

**Đổi**
- Nền dòng «Tổng chi phí thật» → `--opacity-white` để đạt tương phản AA.
- Chữ L1–L20 của Remote Office chốt theo Figma; FAQ 5 câu; nút form «Đặt lịch khảo sát».

### 30/09/2026
**Thêm**
- Trang `/remote-office` dựng lần 1 (6 khối dùng lại), để `noindex`.

---

## `main` — đang chạy ở bản chính

### 29/09/2026
**Tài liệu**
- Bộ spec Remote Office trong `docs/remote-office/` và luật `docs/` cho cả repo. Chốt màu trụ riêng và giá công khai 4,9 / 9,9 / 19,9 triệu.

### 28/09/2026
**Thêm**
- Trang chủ: ô Remote Office nổi bật (Flagship) trỏ `baika.website`.
- Hệ logo mới: header, trang chủ, favicon theo Figma.

**Đổi**
- Chân trang phóng cùng tỉ lệ từ 1280 tới 2560; chữ BAIKA hạ xuống chạm vành hành tinh.

### 27/09/2026
**Đổi**
- Thẻ gói dịch vụ: 3 tia sáng góc theo Figma, nhãn nhỏ đổi sang `--slate-50` khi thẻ sáng lên.

### 26/09/2026
**Thêm**
- Đủ 7 trang dịch vụ: `/advisory` `/ceo-blueprint` `/remote-ops` `/marketing` `/finance` `/legal-tax` `/ai-os`.

**Đổi**
- Đồng bộ theo Figma: số thứ tự, quầng sáng, chân trang dựng từ SVG thật.

**Sửa lỗi**
- Commit bằng đúng danh tính `baikavn-bot` để Vercel chịu deploy.

### 25/09/2026
**Thêm**
- 10 component nền tảng; khung trang dịch vụ + 6 section dùng chung.
- Trang Liên hệ, form gửi mail (`api/contact.ts`) và trang tự kiểm `api/health`.

### 24/09/2026
**Thêm**
- Khởi tạo repo Astro, token từ Figma, trang chủ lưới bento.
