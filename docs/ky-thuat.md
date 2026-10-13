# Kỹ thuật — kiến trúc · môi trường · triển khai

*Lập 13/10/2026 · gộp 3 vai trò ARCHITECTURE + ENVIRONMENT + DEPLOYMENT (bảng ánh xạ: `docs/README.md`). Nơi đang chạy hôm nay + việc kẹt: `TRANG-THAI.md` §3. Spec cũ đã khoá (22/09): `docs/_chung/website-agent-implementation-spec.md`.*

---

## 1. Nền tảng — đã chốt, đừng bàn lại (`DEC-001`)

| | |
| --- | --- |
| Framework | **Astro 4** — site tĩnh (`output: 'static'`), không SSR, không adapter |
| Ngôn ngữ | **TypeScript** (`astro/tsconfigs/strict`) |
| CSS | **CSS có phạm vi riêng từng component** (thẻ `<style>` của Astro) **+ CSS Variables**. Không Tailwind, không CSS-in-JS, không file `.module.css` |
| Package manager | **pnpm 9.12.0** (khoá trong `package.json` → `packageManager`) |
| Node | Xem `.nvmrc` |
| Nguồn | **GitHub** `baikavn-bot/BK.-Web-Update-Sep-2026` — **công khai** (`DEC-038`) |
| Hosting | **Vercel** — project `bk-web-update-sep-2026` |

**Vì sao tĩnh:** nội dung site cố định (`DEC-017`), không CMS, không database. Site tĩnh **không cần ai chăm cũng sống** — với công ty không có dev, đó là lý do quan trọng nhất. Không framework UI ở trình duyệt; JS chỉ cho thứ thật sự tương tác (menu, accordion, form, công cụ tính). **Mặc định là không JS.**

## 2. Cấu trúc thư mục

```
baika-website/
├── TRANG-THAI.md · CLAUDE.md · CHANGELOG.md · CONTRIBUTING.md · README.md · AGENTS.md · SECURITY.md · LICENSE
├── .claude/settings.json  ← quyền agent: được chạy / phải hỏi / bị cấm
├── .github/               ← CI (kiem-tra.yml) · Dependabot · mẫu Pull Request
├── docs/                  ← tài liệu — mục lục docs/README.md
├── api/                   ← hàm chạy trên Vercel (§3)
├── tools/                 ← script kiểm tra, KHÔNG nằm trong site
├── astro.config.mjs       ← site tĩnh, `site: https://baika.vn` (canonical)
├── vercel.json            ← luật tên miền baika.website — CHỈ trên nhánh remote-office
├── public/                ← file phục vụ nguyên trạng (ảnh, favicon, robots.txt)
└── src/
    ├── styles/            ← tokens.css (từ Figma) · reset.css · global.css (chỉ thứ dùng ở MỌI trang)
    ├── layouts/           ← BaseLayout (mọi trang) · ServicePageLayout (7 trang dịch vụ)
    ├── components/        ← một component = MỘT file .astro, CSS trong <style> của file đó
    ├── lib/               ← tính toán không giao diện: chan-doan/ · ten-mien.ts · uoc-tinh.ts (remote-office)
    └── pages/             ← mỗi file = một đường dẫn (docs/so-do-trang.md)
```

**Quy tắc CSS:** dùng ở mọi trang → `global.css`. Thuộc một khối → `<style>` của component đó. Không có đường thứ ba.

## 3. Phần chạy trên máy chủ — thư mục `api/`

Ngoại lệ duy nhất của site tĩnh: *serverless function* — đoạn code chỉ chạy trên Vercel khi có người gọi, không cần máy chủ riêng. **Không lưu gì** — chỉ chuyển thành mail.

| Hàm | Làm gì |
| --- | --- |
| `api/contact.ts` | Nhận form Liên hệ (9 trang), gửi mail qua **Resend**. Mail ghi **tên miền + trang gửi** và loại thư («Liên hệ mới» / «Yêu cầu theo ước tính»). Có bẫy spam (ô ẩn `website`), kiểm lại dữ liệu ở máy chủ |
| `api/chan-doan.ts` | Nhận kết quả 5 công cụ chẩn đoán, gửi mail về BAIKA. Khách **không** nhận bản sao (sếp chốt 05/10). Đã thử thật 07/10: mail về đủ |
| `api/health.ts` | Mở `/api/health` → CÓ/KHÔNG cho 3 biến môi trường. **Không bao giờ** trả giá trị thật |

`pnpm dev` **không** chạy `api/` — chỉ chạy trên Vercel. Form ở máy cục bộ không gửi được mail là bình thường.

## 4. Biến môi trường

Đặt ở **Vercel → Settings → Environment Variables**. Tên biến: `.env.example`. Giá trị thật **không bao giờ** vào repo.

| Biến | Dùng cho |
| --- | --- |
| `RESEND_API_KEY` | Khoá API Resend (gói **Free**) |
| `CONTACT_TO` | Hộp thư nhận |
| `CONTACT_FROM` | Địa chỉ đứng tên gửi — phải thuộc tên miền đã xác minh trên Resend |

Đặt / đổi biến xong phải **deploy lại** mới có hiệu lực. Kiểm: mở `/api/health`.

## 5. Tên miền

**Quy ước `www`** *(Thắng chốt 03/10)*: mọi tên miền lấy địa chỉ **không `www`** làm chính; `www.<tên-miền>` chuyển 308 về địa chỉ chính (Vercel → Domains, DNS `CNAME www`). Code (luật `host` trong `vercel.json`, `canonical`) **luôn ghi địa chỉ không `www`**. **Ngoại lệ:** `baika.tech` (tạm) để `www` làm chính từ trước — giữ nguyên.

Đánh đổi đã biết: địa chỉ không `www` trỏ bằng IP cố định (bản ghi A) — Vercel đổi IP thì sửa DNS tay.

**Một source, nhiều tên miền:** gắn bằng **`routes`** trong `vercel.json`, **không** dùng `rewrites` — `rewrites` thua file tĩnh, không đè được `/` đã có `index.html`. Chi tiết: `docs/remote-office/quy-trinh-build.md` §5.

**Địa chỉ site chính** khai ở **một chỗ**: `src/lib/ten-mien.ts`. `vercel.json` không đọc được file này → ngày đổi tên miền phải sửa **cả hai**.

## 6. Môi trường máy làm việc

| Công cụ | Bản | Ghi chú |
| --- | --- | --- |
| Node | **24** (`.nvmrc`, `engines: 24.x`, CI, Vercel — một bản cho mọi nơi, 13/10) | Node 24 đọc thẳng file `.ts` cho 2 bài kiểm ước tính / chẩn đoán |
| pnpm | 9.12.0 | Đừng nâng theo lời mời của pnpm |
| Git | — | `.gitattributes` ép xuống dòng LF trong repo |
| Playwright | tuỳ chọn | Chỉ cần cho `kiem-tra:trang`, `chup`, `so-anh` — không nằm trong `package.json` |

## 7. Lệnh

```bash
pnpm install --frozen-lockfile   # cài đúng theo pnpm-lock.yaml
pnpm dev                         # chạy cục bộ http://localhost:4321 (api/ không chạy)
pnpm build                       # kiểm kiểu + dựng ra dist/ — phải 0 lỗi
pnpm preview                     # xem bản đã dựng
pnpm kiem-tra                    # luật tĩnh: màu viết cứng, #FFFFFF, khoá bí mật
pnpm kiem-tra:uoc-tinh           # 11 ca công cụ ước tính Remote Office (nhánh remote-office)
pnpm kiem-tra:chan-doan          # 23 ca 5 công cụ chẩn đoán
pnpm kiem-tra:trang              # tràn ngang, <h1>, alt, lỗi JS × 4 khổ (cần Playwright + preview)
pnpm chup                        # chụp ảnh trang để đặt cạnh Figma
```

Chi tiết bộ kiểm tra: `tools/kiem-tra/README.md`.

## 8. Triển khai

```
agent push nhánh ──► CI kiem-tra (GitHub) ──► Vercel dựng Preview ──► Thắng mở PR, nhìn Preview ──► gộp main ──► Vercel dựng Production
```

| Bước | Ở đâu | Ghi chú |
| --- | --- | --- |
| Kiểm tra tự động | `.github/workflows/kiem-tra.yml` — mỗi lần push | build + `kiem-tra` + bài kiểm ước tính / chẩn đoán (khi nhánh có file). Ruleset `bao-ve-main` **bắt buộc** job `kiem-tra` xanh — đổi tên job phải sửa ruleset |
| Preview | Mỗi nhánh có link riêng | Ai có link cũng xem được (đã tắt Vercel Authentication 04/10) |
| Production | Nhánh `main` | Chỉ vào được qua Pull Request (khoá `bao-ve-main`) |
| Nhánh `remote-office` | Preview, gắn tên miền `baika.website` | **Push = khách thấy ngay** → hỏi Thắng trước |
| Danh tính commit | `BAIKA` · noreply của `baikavn-bot` | Vercel chỉ dựng commit của danh tính này |

**Quay lui khi hỏng:** Vercel → **Deployments** → bản cũ còn tốt → **⋯** → **Promote to Production**. ~30 giây, không cần code. Hướng dẫn cho người: `docs/huong-dan-github.md`.

**Dependabot** mỗi tháng mở PR nâng thư viện — cách xử lý: `CONTRIBUTING.md` §5.
