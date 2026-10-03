# CLAUDE.md — luật của repo `baika-website`

*Cập nhật 03/10/2026 · Đọc hết file này trước khi sửa bất cứ dòng nào.*

> **Mỗi phiên, đọc theo thứ tự:** `TRANG-THAI.md` (dự án đang ở đâu, cái gì kẹt) → file này (luật) → `docs/<trang>/SPEC-MASTER.md` nếu làm một trang cụ thể. Lịch sử thay đổi: `CHANGELOG.md`.

---

## 0. Đọc trước, làm sau

Người chịu trách nhiệm dự án là **Thắng Trương** — designer, **không phải lập trình viên**.
**Công ty không có dev.** Website này do agent dựng và do agent bảo trì.

Hệ quả, áp dụng cho mọi quyết định kỹ thuật trong repo:

- **Code phải đọc được bởi người không biết code.** Tên biến, tên file, cấu trúc thư mục phải nói lên nó là gì.
- **Chọn thứ đơn giản, kể cả khi thứ phức tạp "xịn" hơn.** Không ai ở đây gỡ rối được một abstraction thông minh.
- **Giải thích thuật ngữ ngay lần đầu dùng**, trong comment hoặc trong PR.
- **Không im lặng làm theo yêu cầu sai.** Cản lại, giải thích vì sao, đưa phương án thay thế.
- **Phân biệt rõ "đã xác minh" và "suy đoán"** khi báo cáo. Đo được thì nói đo được; suy ra thì nói là suy ra.

---

## 1. Dự án này là gì

**BAIKA** là công ty **tư vấn và kiến tạo hệ thống vận hành cho doanh nghiệp**, tổ chức theo 8 Trụ.
Không phải công ty bán khoá học online — bản brief cũ hiểu sai chỗ này.

Repo này là **website marketing tĩnh** cho `baika.vn`:

| Nhóm trang | Số | Ghi chú |
| --- | --- | --- |
| Trang dịch vụ | 7 | Mỗi trang một trụ, mỗi trụ một bộ màu |
| Trang chủ | 1 | Lưới bento dẫn vào 7 trang |
| Liên hệ | 1 | Form + FAQ |
| Landing **Remote Office** | 1 | Tên miền riêng `baika.website` · nhánh `remote-office` · spec ở `docs/remote-office/` |

Mọi trang và landing, dù chạy ở tên miền nào, **chung một source** này. Code agent, kho dữ liệu, backend **không** vào repo này.

Ngoài phạm vi v1: trang **Giới thiệu**, trang **Trạm Ý Tưởng**.

### ⚠️ Đây là REBUILD HOÀN TOÀN

Thứ **duy nhất** kế thừa từ website cũ: **domain `baika.vn`** và **7 slug** (`DEC-019`).

`baika.vn` đang chạy chỉ là **tài liệu tham khảo hiện trạng / nguồn để audit**.
Nó **không** phải codebase, design, kiến trúc, component hay asset baseline.

**Không** migrate / reuse / kế thừa code, HTML, CSS, asset, component, UI hay pattern từ nó, trừ khi Thắng chủ động yêu cầu.
**Vấn đề của site cũ KHÔNG tự động là yêu cầu của site mới.**

---

## 2. Nền tảng — đã chốt, đừng bàn lại

`DEC-001`:

| | |
| --- | --- |
| Framework | **Astro** — site tĩnh, không SSR, không adapter |
| Ngôn ngữ | **TypeScript** |
| CSS | **CSS Modules + CSS Variables**. Không Tailwind, không CSS-in-JS |
| Package manager | **pnpm** |
| Nguồn | **GitHub** (org của BAIKA) |
| Hosting | **Vercel** |
| Node | **20.11.0** — xem `.nvmrc` |

### Vì sao tĩnh

Nội dung site **cố định** (`DEC-017`). Không CMS, không database.

**Ngoại lệ duy nhất:** thư mục `api/` — hai hàm nhỏ chạy trên Vercel (*serverless function* — đoạn code chỉ chạy khi có người gọi, không cần máy chủ riêng):

- `api/contact.ts` nhận form, gửi mail qua Resend. Mail ghi rõ **tên miền + trang gửi** (trường `trang` do form gửi lên) và loại thư («Liên hệ mới» / «Yêu cầu theo ước tính»).
- `api/health.ts` trả về CÓ/KHÔNG cho 3 biến môi trường của form. Không bao giờ trả giá trị thật.

Sửa nội dung = sửa cả thiết kế, không phải sửa riêng chữ.

Một site tĩnh **không cần ai chăm cũng sống**. Với công ty không có dev, đó là lý do quan trọng nhất.

### Hình ảnh

Ưu tiên **SVG / CSS** hơn file ảnh. Cần ảnh thật thì **WebP / AVIF**.
Hiệu ứng nền (gradient, quầng sáng, `Planet`, `Milkyway`) dựng bằng CSS/SVG — đã chốt.

---

## 3. Nguồn chân lý

Khi code và tài liệu mâu thuẫn, **Figma thắng**. Khi Figma và quyết định mâu thuẫn, **hỏi Thắng**.

### File Figma `YmcXg1lQqGVjQOFrVtdOgW` — 6 page, mỗi page một vai trò

| Page | Node | Tra gì ở đây |
| --- | --- | --- |
| **`Component`** | `660:2939` | **Toàn bộ main component** — 17 bộ variant + 6 component đơn |
| `UI` | `191:812` | **Trang và màn** — 7 trang dịch vụ, trang chủ, Liên hệ, Form States |
| `Icon` | `6:20457` | Thư viện icon Lucide. Giữ nguyên, đừng động vào |
| `Style guide` | `1:217` | Trang tài liệu hệ thống. Không xuất ra web |
| `Component (cũ – không dùng)` | `8:12070` | **Kho cũ đã đóng — bỏ qua hoàn toàn** |
| `REF` | `566:3679` | Tham khảo |

⚠️ Trong kho cũ có một `Text field` `58:5013` **trùng tên nhưng sai**. Cái đúng là `588:6238` ở page `Component`.

### Tài liệu trong repo — thư mục `docs/` *(chuẩn từ 29/09/2026)*

**Luật:** tài liệu để **dựng** một trang hay một landing nằm **trong repo**, ở `docs/<ten-trang>/` — mỗi trang hoặc landing một thư mục con. **Repo là nguồn chính**; project Claude chỉ ghi chú và trỏ sang. Lý do: agent nào cũng đọc được repo, nhưng không phải agent nào cũng vào được project Claude.

Mỗi thư mục con theo cùng một khung 4 file:

| File | Vai trò |
| --- | --- |
| `SPEC-MASTER.md` | **Đọc đầu tiên.** Ai quyết cái gì · làm gì khi hai nguồn lệch nhau · luật đồng bộ · danh sách dừng lại hỏi · checklist nghiệm thu |
| `spec-noi-dung.md` | Chữ, con số, công thức, điều được / không được hứa |
| `spec-giao-dien.md` | Figma → source: bố cục, component, trạng thái, hành vi |
| `quy-trinh-build.md` | Dựng, kiểm tra, commit |

**Đang có:**

| Thư mục | Trang |
| --- | --- |
| `docs/remote-office/` | Remote Office — `baika.website`. Bắt đầu từ `SPEC-MASTER.md`. Cách gắn tên miền (`vercel.json` dùng **`routes`**, không dùng `rewrites`): `quy-trinh-build.md` §5 |
| `docs/_chung/` | Tài liệu chung 7 trang dịch vụ + trang chủ + Liên hệ: **nhật ký quyết định `DEC-001`…`DEC-100`**, Design Spec, Implementation Spec, spec bàn giao, sitemap, vận hành sau launch. **Chép nguyên văn** từ project Claude ngày 03/10/2026 — đầu mỗi file ghi chỗ đã lỗi thời. Mục lục: `docs/README.md` |

**Đọc nhật ký quyết định trước khi kết luận điều gì** — nhiều thứ trông như lỗi thật ra đã được chốt có lý do.

⚠️ `docs/_chung/noi-dung-day-du.md` là chữ của **site cũ** chép để audit, **không phải** chữ site mới. Chữ đang chạy = Figma + `src/pages/`.

**Luật đồng bộ (Thắng chốt 29/09):** sửa code làm đổi chữ, số hay hành vi → sửa spec trong `docs/` **cùng commit**. Figma đổi → ghi vào "Nhật ký Figma" của spec. `git add` từng file, không `git add -A` khi chưa đọc `git status`.

**Project Claude "BaiKa.vn"** vẫn giữ vài tài liệu chưa chuyển (danh sách: `docs/README.md`) và `claude/viec-cho-nhac.md` — việc chờ nhắc Thắng. Bản nào đã vào `docs/` thì **bản trong repo là bản chính**.

---

## 4. Luật về token — nghiêm nhất trong repo

Tất cả token nằm ở **`src/styles/tokens.css`**, sinh từ 82 biến Figma.

### ⛔ Không tự chế giá trị mới

Không tạo bảng màu / typography / spacing mới. Thiếu token thì **nêu ra và hỏi Thắng**.
Cần một khoảng cách không có trong thang `--s-*`? Hỏi. Đừng viết `padding: 18px`.

### ⛔ Không hardcode

Viết `#0F6BB0` thay vì `var(--blue-600)` là lỗi. Mọi màu, mọi khoảng cách, mọi bo góc đều qua biến.

### ⛔ Không có `#FFFFFF` trong CSS

`DEC-035` + `DEC-035-A`. Chuỗi `#FFFFFF`, `#fff`, `white` **không được xuất hiện**.

| Trắng ở dạng | Dùng |
| --- | --- |
| Đục 100% | `var(--gray-50)` — `#F8F8F8`, màu sáng nhất của hệ |
| Trong suốt | `var(--opacity-white)` — `#FFFFFF @ 15%`, alpha nằm trong token |

**Ngoại lệ duy nhất:** màu bóng đổ trong `--shadow-drop-inner`. Đó là màu *effect*, không phải fill, và làm mờ nó đi là giết quầng sáng Focus.

Luật này **kiểm được bằng grep** — nên nằm trong QA gate.

### Thang chữ

Hai họ chữ, không có chữ mono (`DEC-024`):

- **Be Vietnam Pro** — `display-1`, `display-2`, `body-lg`, `body`, `caption`, `label`
- **Chakra Petch** — `H-1`, `H-2`, `H-3`

Style tên `label` trước đây tên `label-mono` — tên cũ **nói dối font thật** (Be Vietnam Pro Light 11px). Đã đổi `DEC-036`.

### Ngôn ngữ tương tác — dùng chung mọi component

`DEC-014`, `DEC-015`:

| Trạng thái | Cảm giác | Token |
| --- | --- | --- |
| `Hover` | nổi lên | `--shadow-inner` |
| `Active` | chìm xuống | `--shadow-inner-press` |
| `Focus` | quầng sáng trắng | `--shadow-drop-inner` |

**Quầng sáng thuộc về Focus và chỉ Focus.** Đừng mượn nó cho Hover.

### Trạng thái Disabled

Đổi màu sang `--gray-700`, **giữ `opacity: 1`**. Không giảm opacity — đó là quy ước của file này.

---

## 5. Breakpoint

| Tên | Rộng | Cột | Gutter | Lề |
| --- | --- | --- | --- | --- |
| `sm` mobile | **375** | 4 | 16 | 16 |
| `md` tablet | **768** | 8 | 16 | 24 |
| `lg` desktop | **1280** | 12 | 20 | 32 |
| `xl` | 1440+ | 12 | 24 | 32 |

**Mobile là 375, không phải 390** (`DEC-031`). Nếu thấy frame 390 ở đâu đó, đó là frame sót — báo, đừng dựng theo.

Component ở màn nhỏ phải **đổi dạng**, không co lại đến mức vô dụng.

---

## 6. Chất lượng — mức sàn, không thương lượng

### Accessibility — WCAG 2.1 AA

- Tương phản **≥ 4.5:1** cho chữ thường, **≥ 3:1** cho chữ lớn
- **Focus nhìn thấy được** ở mọi thứ bấm được (mục 2.4.7) — `global.css` đã đặt mức sàn, component ghi đè được nhưng không được bỏ
- Vùng chạm **≥ 44px** trên mobile
- `alt` cho mọi ảnh mang thông tin; ảnh trang trí để `alt=""`
- Tôn trọng `prefers-reduced-motion` — đã xử lý trong `reset.css`

**Sai lệch đã ghi nhận:** `VD-001` — tương phản nhãn 8 ô bento trang chủ chưa đo được (nền là gradient artwork). Thắng chốt đây là chủ ý. **QA không báo FAIL mục này.**

**Sai lệch đã ghi nhận (27/09):** nhãn nhỏ (`.goi__eyebrow`) của thẻ gói khi sáng lên (nổi bật · focus · rê chuột) nằm trên vệt sáng góc trên trái — đo được ≈ **2.4 : 1**, Figma ≈ 2.65 : 1. Thắng chốt: *"Nhãn không cần quá rõ, như vậy là đủ."* **QA không báo FAIL mục này.** Chưa đánh số VD — gán số khi gộp vào `website-agent-decisions.md`.

### Bốn trạng thái bắt buộc

Mọi khu vực lấy dữ liệu phải có đủ: **Loading** (skeleton) → **Empty** (có lối thoát) → **Error** (nói rõ hỏng gì, còn an toàn gì) → **Not found** (khác Empty).

Ở v1 chỉ **form Liên hệ** cần: `Idle` → `Submitting` → `Success` / `Error`. Thiết kế nằm ở section `Form States` `645:3184`.

### Hiệu năng

Site tĩnh, không framework UI ở client. JS chỉ dùng cho thứ thật sự cần tương tác (menu, accordion, form). Mặc định là **không JS**.

---

## 7. Cấu trúc thư mục

```
baika-website/
├── TRANG-THAI.md          ← ĐỌC ĐẦU TIÊN: đang ở đâu, cái gì kẹt, làm gì tiếp
├── CLAUDE.md              ← file này — luật của repo
├── AGENTS.md              ← trỏ về CLAUDE.md, cho agent không phải Claude
├── CHANGELOG.md           ← đã đổi gì, ngày nào
├── .github/               ← kiểm tra tự động (CI) · Dependabot · mẫu Pull Request — xem §9b
├── docs/                  ← tài liệu dựng từng trang, mỗi trang một thư mục — xem §3
├── api/                   ← hàm chạy trên Vercel: contact.ts (gửi mail) · health.ts — xem §2
├── tools/                 ← script kiểm tra, KHÔNG nằm trong site — xem §8
├── vercel.json            ← luật tên miền baika.website (routes)
├── astro.config.mjs       ← site tĩnh, không adapter
├── src/
│   ├── styles/
│   │   ├── tokens.css     ← 82 biến Figma. KHÔNG sửa tay
│   │   ├── reset.css
│   │   └── global.css     ← chỉ thứ dùng ở MỌI trang
│   ├── layouts/           ← BaseLayout (mọi trang) · ServicePageLayout (7 trang dịch vụ)
│   ├── components/        ← một component = MỘT file .astro, CSS nằm trong thẻ <style> của file đó
│   ├── lib/               ← phần tính toán không có giao diện (vd. uoc-tinh.ts)
│   └── pages/             ← mỗi file = một URL
└── public/                ← file tĩnh phục vụ nguyên trạng
```

**CSS trong component [xác minh 03/10]:** thẻ `<style>` của Astro tự giới hạn phạm vi trong component đó (*scoped* — tác dụng như CSS Modules: class `.nut` ở component này không đè `.nut` ở component khác). Repo **không** dùng file `.module.css` riêng. Viết theo cách đang có, đừng tách file.

**Quy tắc:** cái gì dùng ở mọi trang → `global.css`. Cái gì thuộc về một khối → `<style>` của component đó. Không có đường thứ ba.

---

## 8. Lệnh

```bash
pnpm install            # cài lần đầu
pnpm dev                # chạy local, mở http://localhost:4321  (api/ không chạy ở đây — chỉ chạy trên Vercel)
pnpm build              # kiểm tra kiểu + dựng bản production vào dist/
pnpm preview            # xem thử bản đã dựng
pnpm kiem-tra           # luật tĩnh: màu viết cứng, #FFFFFF, khoá bí mật — 1 giây, không cần trình duyệt
pnpm kiem-tra:uoc-tinh  # 11 ca của công cụ ước tính Remote Office — cần Node ≥ 22.6
pnpm kiem-tra:trang     # tràn ngang, <h1>, alt, lỗi JS ở mọi trang × 4 khổ — cần Playwright + pnpm preview đang chạy
pnpm chup               # chụp ảnh trang để đặt cạnh Figma
```

**Trước khi báo "xong":** `pnpm build` sạch → `pnpm kiem-tra` OK → chụp ảnh và **mở ra nhìn** (§10). Chi tiết + cách so ảnh trước/sau: `tools/kiem-tra/README.md`.

---

## 9. Bảo mật

**Không bao giờ** đặt API key, token, mật khẩu vào bất kỳ file nào trong repo — kể cả trong comment, kể cả tạm.

Key nằm trong **biến môi trường** ở Vercel. File `.env` đã bị `.gitignore` chặn; `.env.example` chỉ chứa tên biến, không chứa giá trị.

Nếu phát hiện key bị commit: **dừng lại, báo Thắng ngay, và nhắc anh thu hồi key đó.** Xoá commit thôi là chưa đủ — key đã lộ là đã lộ.

---

## 9b. Git — ai làm gì

- **Agent commit, Thắng `git push`.** Agent không đụng tài khoản đăng nhập GitHub / Vercel.
- Commit bằng **danh tính có sẵn của repo** (`BAIKA` · email `noreply` của `baikavn-bot`). Vercel chỉ deploy commit của danh tính này. Không dùng `git -c user.name=…` để đổi danh tính.
- **Không force push.** Không viết lại lịch sử đã push.
- `git add` **từng file**. Không `git add -A` khi chưa đọc `git status`. Không bao giờ commit `.env` hay `Claude outputs/`.
- Sửa code làm đổi chữ, số hay hành vi → sửa spec trong `docs/` **cùng commit** (§3), và thêm một dòng vào `CHANGELOG.md`. Trạng thái dự án đổi (nhánh, tên miền, việc kẹt) → sửa `TRANG-THAI.md`.
- Mỗi trang mới làm trên **nhánh riêng**, gộp vào `main` khi ra mắt. Hiện có nhánh `remote-office` — xem `TRANG-THAI.md` §2.
- **Gộp vào `main` bằng Pull Request** trên GitHub, không gộp thẳng ở máy. PR tự điền mẫu `.github/pull_request_template.md`.

**Kiểm tra tự động (CI — `.github/workflows/kiem-tra.yml`):** mỗi lần push, GitHub tự chạy `pnpm build` + `pnpm kiem-tra` + bài kiểm 11 ca ước tính. ✓ xanh / ✗ đỏ hiện cạnh commit. **Đỏ thì không gộp.** CI không thay được bước chụp ảnh và mở ra nhìn (§10).

**Dependabot (`.github/dependabot.yml`):** mỗi tháng tự mở tối đa 2 PR nâng thư viện (chỉ bản nhỏ, bỏ qua bản lớn). Agent đọc PR đó, kiểm CI + preview, rồi mới đề xuất Thắng gộp. Nâng bản lớn (vd. Astro 4 → 5) là một việc riêng, có kế hoạch.

---

## 10. Bài học đã trả giá — đừng lặp lại

| Bài học | Từ đâu ra |
| --- | --- |
| **Sau mỗi lượt ghi hàng loạt, phải mở ra NHÌN.** Số đếm khớp không chứng minh kết quả đúng | `DEC-035-A` — bind 566 paint "thành công, 0 lỗi", nhưng làm mất opacity và 8 ô bento trang chủ thành khối trắng đặc |
| **Kiểm một thuộc tính thì đọc cả giá trị lẫn styleId** | `DEC-022` — kết luận nhầm "shadow không có token", thật ra file có 7 effect style |
| **Trên Vercel, `rewrites` thua file tĩnh** — muốn đè `/` (đã có `index.html`) thì dùng `routes` | Gắn `baika.website` 01/10 — `docs/remote-office/quy-trinh-build.md` §5.1 |
| **Thao tác theo tên node thì kiểm kích thước kết quả trước khi ghi** | Componentise nhầm cả khối form 840×528 vì vòng lặp đi ngược quá xa |
| **Dữ liệu mẫu trong file demo ≠ yêu cầu dự án** | Từng có cả một "luồng B — landing page ClearWork" sinh ra từ một khối demo trong file HTML. Sai đó sống qua nhiều phiên |
| **Đổi tên trục variant thì ghi lại instance trước, đổi cả bộ một lượt, đối chiếu lại sau** | `DEC-036` — 213 instance, 0 gãy, nhờ làm đúng trình tự này |

---

## 11. Còn treo — đọc trước khi tưởng mọi thứ đã xong

*Mục chung cả site. Việc kẹt + quyết định đang chờ của Remote Office: `TRANG-THAI.md` §4–§5.*

- **`Nav Button` `472:4918` thiếu `Hover` + `Focus`** — là mục menu bấm được, WCAG 2.4.7 đòi focus nhìn thấy. **Chặn Release Candidate**
- **Hai ô bento `Trạm Ý Tưởng` + `Trạm Kết Nối` trỏ đi đâu** — cả hai ngoài phạm vi v1, để nguyên là 2 link chết trên trang chủ lúc launch
- **`Button 1 · Active`** dùng `--shadow-inner-press` vốn thiết kế cho nút tối; trên nút trắng có thể quá nặng
- **`Checkbox` `29:2685` chưa gán effect style** — đang dùng giá trị thô
- **Chưa có spec animation** — chuyển động đang ở dạng ngụ ý (sticky S2, accordion, NVG mở, hover bento). Build tự quyết thì phải ghi lại
- **`Item Container` `273:358`** — 0 instance, vẫn mang tên trục `Property 1`/`Variant2`. Chưa duyệt xoá. Bỏ qua
- **3 frame nháp lẻ trên page `UI`** — `Grid Container` `634:2882`, `Footer` `634:3080`, `Baika logo Test` `563:3678`. Chưa duyệt xoá, đừng dựng theo
