# CHANGELOG — đã đổi gì, ngày nào

Ghi theo ngày, mới nhất ở trên. Mỗi dòng nói **người dùng thấy gì khác**, không chỉ nói đã sửa file nào.
Chi tiết từng thay đổi: `git log`. Lý do của các quyết định: spec trong `docs/` và nhật ký `DEC-…` (xem `CLAUDE.md` §3).

Nhóm: **Thêm** · **Đổi** · **Sửa lỗi** · **Tài liệu**.

---

## 06/10/2026 — trên `main` qua Pull Request

**Tài liệu**
- Chuẩn bị chuyển sang **Claude Code**: `.claude/settings.json` (lệnh agent được chạy / phải hỏi / bị cấm), `docs/chuyen-sang-claude-code.md` (checklist ngày đầu). Luật git đổi: **agent push nhánh riêng, Thắng gộp PR**; không ai push `main`. Người xem site không thấy gì khác.

## 05/10/2026 — trên `main` qua Pull Request

**Đổi**
- **Header đứng yên khi cuộn trang** (cố định ở mép trên, mọi trang). Bấm link tới một mục (vd. «Liên hệ») thì mục đó không bị header che.
- Nút **«Liên hệ»** trên header (desktop + menu mobile) mặc định hiện ở trạng thái **Active** (bóng chìm), theo Figma.

**Thêm**
- **5 công cụ chẩn đoán miễn phí** — nút Hero «… miễn phí» ở 5 trang dịch vụ giờ dẫn tới công cụ thật (trước đó trỏ về form liên hệ): `/ceo-blueprint/assessment` · `/finance/assessment` · `/remote-ops/survey` · `/ai-os/diagnosis` · `/marketing/diagnostic` (đường dẫn giữ như site cũ). Câu hỏi, cách tính điểm, gói đề xuất giữ y bản cũ (sếp chốt). Khách xem kết quả ngay; kết quả gửi mail về BAIKA. Spec: `docs/cong-cu-chan-doan/SPEC-MASTER.md`.

**Đổi**
- Trang **Chính sách bảo mật** dùng **bản chính thức** Kapi đã sửa và duyệt (Figma `971:3638`): điền tên công ty, mã số doanh nghiệp, thời hạn lưu 24 tháng, thời hạn phản hồi, nơi đặt máy chủ; thêm phần công cụ chẩn đoán, chuyển dữ liệu ra nước ngoài, rút lại đồng ý. Hết chỗ [ngoặc vuông]. Ngày cập nhật: 05/10/2026. Bỏ câu «gửi kết quả qua email» vì công cụ chưa có chức năng này.

**Thêm (cho máy tìm kiếm)**
- `robots.txt` và `sitemap.xml` (danh sách trang, tự sinh lúc build). Người xem không thấy gì khác; giúp Google đọc đủ trang khi baika.vn chuyển sang v2.

**Tài liệu**
- Spec nội dung 4 trang chưa dựng, chép nguyên văn từ site cũ baika.vn (`docs/trang-con-thieu/`) + dữ liệu 155 mô hình kinh doanh. Chưa đổi gì trên site.

**Thêm**
- Trang **Chính sách bảo mật** `/chinh-sach-bao-mat` — **bản nháp, chờ Pháp lý duyệt** (còn chỗ [ngoặc vuông]). Mobile: bảng nhà cung cấp xếp thành khối dọc.
- Mạng xã hội ở trang Liên hệ: chỉ hiện mục đã có đường dẫn (hiện ẩn cả 3).

**Thêm**
- Trang **«Sắp ra mắt»** `/sap-ra-mat`. Ô Trạm Ý Tưởng + Trạm Kết Nối ở trang chủ và 2 mục Trạm trên header giờ bấm được, dẫn về trang này (trước đó không bấm được).

**Đổi**
- **Header mới** (Thắng vẽ lại 05/10): thấp hơn (96). Máy tính/tablet: thanh chữ «Trạm ý tưởng · Trạm kết nối · Dịch vụ · Liên hệ» thay cho nút 3 gạch; bấm «Dịch vụ» mở bảng 8 dịch vụ (Remote Office đứng đầu, nền tối đặc), bấm lại / Esc / bấm ra ngoài thì đóng. Điện thoại: vẫn nút 3 gạch, menu thêm 2 Trạm (chưa bấm được) và nút «Liên hệ».

**Đổi lại**
- Bỏ chữ «Sắp ra mắt» trên 2 ô Trạm + menu (thêm ở PR #8, Thắng đổi ý cùng ngày): ô trở lại như trước. Sắp tới Thắng thiết kế một **trang «Sắp ra mắt»** để mọi chỗ chưa có trang dẫn về đó.
- Chân trang có link «Chính sách bảo mật». Câu đồng ý dưới mọi form: cụm «chính sách bảo mật» thành link mở trang này (tab mới, không mất chữ đang điền).

## Chưa phát hành — nhánh `remote-office` *(sẽ là `v1.1.0` khi ra mắt Remote Office)*

### 04/10/2026
**Tài liệu**
- Đưa toàn bộ tài liệu lên `main` (PR riêng, không đụng code) — người mới mở repo thấy ngay trạng thái, luật, nhật ký quyết định, LICENSE. Chuyển nốt danh sách việc chờ (`docs/viec-cho.md`) và `DEC-102` từ project Claude vào repo. `CONTRIBUTING.md` thêm bảng «cần quyền gì — xin ai». README có thứ tự đọc cho người mới.

**Thêm**
- Remote Office: dòng pháp lý nhỏ dưới form Liên hệ (L14) — «Nội dung trên trang mang tính giới thiệu dịch vụ…».

**Thêm**
- Remote Office: logo dẫn về site chính (`www.baika.tech`) thay vì chính landing. Ô «Lĩnh vực» có 8 lựa chọn tạm (Remote Office + 7 trụ).

**Tài liệu**
- #10 #11 #16 #17 chốt: Figma chuẩn hoá về token theo code (80px · 12 · ô theo nội dung · lề tablet 40). Web không đổi.

**Đổi** *(trên `main`, đã chạy ở `baika.tech`)*
- Menu có mục «Remote Office» đứng đầu — PR #4.
- Dependabot: `@types/node` 26.6.2 → 26.6.3 (PR #3) · máy kiểm tra dùng `actions/checkout` + `actions/setup-node` v7 (PR #2). Khách không thấy gì khác. Cách xử lý PR Dependabot: `CLAUDE.md` §9b.

**Tài liệu**
- Figma đồng bộ ngược 2 việc đã chốt từ trước: nút thẻ gói cỡ **Lg** (DEC-091) · chữ BAIKA ở chân trang hạ xuống, nằm dưới hành tinh (28/09). DEC-090 (quầng sáng thẻ gói) **giữ nguyên Figma**, chờ Thắng rà. Nhật ký mới: `docs/nhat-ky-figma-chung.md`. Nhìn trên web không đổi.
- Luật đồng bộ ngược (`CLAUDE.md` §3): điều Thắng chốt mà Figma chưa có → agent tự vẽ vào Figma, ghi Nhật ký Figma. Áp dụng ngay: dòng pháp lý L14 (`960:3633`).

**Quyết định**
- `baika.tech` là bản thử; sau này `baika.vn` thay. #10 #11 #16 #17 gom vào buổi xem Figma.
- #13: thêm mục Remote Office vào menu chung. Trang Remote Office giữ menu dẫn sang 7 trang.

**Thêm**
- Menu chung có mục **«Remote Office»** đứng đầu (9 mục), mở `baika.website`. Trên trang Remote Office, mục này được đánh dấu là trang hiện tại. Figma vẽ cùng lúc (luật đồng bộ ngược).

**Sửa lỗi**
- Trang chủ có tiêu đề chính `<h1>`: dòng mô tả dưới logo (trước đây trang chủ không có h1 nào). Nhìn không đổi.

**Đổi**
- Tên miền Remote Office xong: `baika.website` + `www.baika.website` chạy, khách ngoài xem được (tắt khoá đăng nhập Vercel cho Preview). 6 mục kiểm đạt.
- `baika.website/<8 trang khác>` chuyển sang `www.baika.tech` thay vì `baika.vn` — `baika.vn` vẫn là site cũ. Xoá dòng thử `?thu-baika-website`.
- Khoá nhánh `main` bằng ruleset `bao-ve-main`: chỉ gộp qua Pull Request, kiểm tra tự động `kiem-tra` phải xanh, cấm xoá / ghi đè. `docs/huong-dan-github.md` viết lại theo giao diện Rulesets.

### 03/10/2026 — tên miền
**Đổi**
- `baika.website` đã chạy (Nhân Hòa mở khoá). `www.baika.website` chưa có DNS — đang làm.

**Tài liệu**
- Chốt quy ước: mọi tên miền lấy địa chỉ **không `www`** làm chính (`CLAUDE.md` §2). `baika.tech` là ngoại lệ tạm.

### 03/10/2026 — đợt 4
**Thêm**
- `LICENSE`: giữ mọi quyền — repo công khai để xem, không được dùng lại (sếp đồng ý công khai 03/10).
- Nhãn `v1.0.0` gắn vào `main` `aac95de` — bản đang chạy production.
- `docs/huong-dan-github.md`: cách push, gắn nhãn phiên bản, khoá nhánh `main`.

**Tài liệu**
- `CLAUDE.md` §9: repo công khai → mọi thứ commit lên là ai cũng đọc được.


### 03/10/2026 — đợt 3
**Tài liệu**
- Chuyển 9 tài liệu chung từ project Claude vào `docs/_chung/`: nhật ký quyết định `DEC-001`…`DEC-100`, Design Spec, Implementation Spec, spec bàn giao, nội dung site cũ, bản đồ section, sitemap, vận hành sau launch. Chép nguyên văn, đầu mỗi file ghi chỗ đã lỗi thời; che 3 chỗ email cá nhân.
- Thêm `docs/README.md` (mục lục + chỗ tìm từng số `DEC`). `CLAUDE.md` §3 trỏ về `docs/` thay vì project Claude.

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

## `v1.0.0` — 29/09/2026 · `main` `aac95de`, đang chạy ở bản chính

7 trang dịch vụ · trang chủ · Liên hệ · form gửi mail. Nhãn gắn ngày 03/10/2026.

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
