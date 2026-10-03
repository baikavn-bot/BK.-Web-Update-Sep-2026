<!-- CHÉP NGUYÊN VĂN — đầu file do agent thêm 03/10/2026, phần dưới đường kẻ giữ y bản gốc. md5 bản gốc: 30d24e6f12c5e66a77fb38cd9ee312a3 -->

> 📦 **Bản chép nguyên văn** từ project Claude «BaiKa.vn», file `claude/website-agent-implementation-spec.md` (bản lưu 24/09/2026). Chuyển vào repo ngày 03/10/2026 — **từ nay bản này là bản chính.**
> Sửa **ở đây**, không sửa bản trong project Claude nữa.
> Khi file này lệch với nguồn khác, thứ tự tin: **Figma** → `CLAUDE.md` / `TRANG-THAI.md` / `docs/<trang>/` → file này.
> Đường dẫn `claude/<tên>.md` bên dưới là file trong project Claude. File nào đã chuyển thì nay nằm ở `docs/_chung/<tên>.md` — tra bảng ở `docs/README.md`.
>
> **⚠️ Chỗ đã lỗi thời — đọc trước khi tin nội dung bên dưới:**
> - **Không** dùng content collection / schema Zod. Repo không có `src/content/`; 7 trang dịch vụ là 7 file trong `src/pages/` dùng chung `ServicePageLayout` **[xác minh 03/10]**.
> - **Không** dùng `.module.css` — CSS nằm trong `<style>` của từng file `.astro` (`DEC-041`).
> - Mục nhắc Framer / `framer-cms-schema.md` là phương án đã loại (`DEC-001`).
> - Cấu trúc thư mục thật: `CLAUDE.md` §7. Form gửi mail dùng `api/` ở gốc repo (`DEC-066`), không có adapter.

---

# IMPLEMENTATION SPEC — Baika Website

**Trạng thái: `LOCKED`** · Khoá 21/09/2026 · Compliance Check 22/09 `PASS` · **Context Reconciliation 23/09** — không decision nào bị đổi.

> 🔴 **NGUỒN TRA CỨU FIGMA — cập nhật 24/09/2026 (`DEC-034`).** File `YmcXg1lQqGVjQOFrVtdOgW`:
> **component** → page `Component` `660:2939` · **trang/màn** → page `UI` `191:812` · **icon** → page `Icon` `6:20457` · page `Component (cũ – không dùng)` `8:12070` **bỏ qua hoàn toàn**.
> Node ID không đổi khi chuyển page.
>
> 🔴 **`#FFFFFF` không tồn tại trong thiết kế (`DEC-035`).** Màu sáng nhất là `var(--gray-50)` = `#F8F8F8`. Chuỗi `#FFFFFF` / `#fff` / `white` **không được xuất hiện trong CSS** — ngoại lệ duy nhất là màu bóng đổ trong `Shadow/Drop-Inner` và `Checkbox/Focus`.

> **NGUYÊN TẮC REBUILD — 23/09/2026.** Đây là website **dựng mới hoàn toàn**. Thứ duy nhất kế thừa từ trước project là **domain `baika.vn`**.
>
> `baika.vn` đang chạy chỉ là **CURRENT-STATE REFERENCE / AUDIT SOURCE** — để hiểu hiện trạng và biết cái gì cần tránh. Nó **không** phải codebase, design, architecture, component hay asset baseline. Không migrate / reuse / inherit code, HTML, CSS, asset, component, UI hay implementation pattern từ nó, trừ khi Thắng chủ động yêu cầu.
>
> **Vấn đề của site cũ không tự động là requirement của site mới.** Tiêu chí nghiệm thu ở mục 6 là **chuẩn độc lập**, không phải "sửa lỗi site cũ".

---

## 1. Production stack — **ĐÃ CHỐT** (DEC-001, 21/09/2026)

| Lớp | Lựa chọn |
| --- | --- |
| Framework | **Astro** |
| Ngôn ngữ | **TypeScript** |
| Markup | Semantic HTML |
| Style | CSS / CSS Modules + CSS Variables |
| Visual system | SVG + CSS |
| Raster asset | WebP / AVIF |
| Interaction | TypeScript + Web APIs |
| Package manager | pnpm |
| Source control | Git / GitHub |
| Hosting | Vercel — Preview + Production |

**Không dùng Next.js/React làm mặc định.** React/Next hoặc thư viện animation/runtime chỉ được đưa vào nếu Implementation Discovery chứng minh project thực sự cần, và phải có decision riêng.

### 1.1 · Hệ quả của quyết định này — phải ghi rõ

1. **Đây là dựng lại trên stack mới, không phải sửa site đang chạy.** `baika.vn` hiện tại là **Next.js + Tailwind + Turbopack** **[xác minh 11/09]**. Toàn bộ codebase đó không được kế thừa.
2. **`claude/framer-cms-schema.md` (18/09) bị loại.** Toàn bộ phần cơ chế Framer (Collection List, Reference field, Option→Variant, `/dich-vu/:slug`) không còn áp dụng. **Mô hình thực thể trong đó thì vẫn dùng được** — xem mục 3.
3. **`claude/ban-giao-tuan.md` → đổi tên `claude/ban-giao-ky-thuat.md`** *(22/09, `DEC-016`)*. Công ty **không có dev**; người dựng là `/website-production-agent`. Tài liệu đó là **spec thiết kế + bàn giao kỹ thuật**, đã cập nhật toàn bộ 22/09.
4. **Chuẩn cấu trúc của site mới** *(mục 6)*: không iframe · mỗi trang đúng một `<h1>` là chữ thật. Đây là **chuẩn độc lập của site mới**, áp dụng vì nó đúng, không phải vì site cũ sai.

   *Quan sát audit — không phải requirement:* site cũ bọc toàn bộ nội dung trong `<iframe src="/trangchu.html">`, `<body>` ngoài **0 ký tự chữ**, **không có thẻ `h1` nào** **[xác minh 11/09]**. Ghi lại để biết cái gì cần tránh. Astro xuất HTML tĩnh nên cấu trúc đó không phát sinh — nhưng vẫn **phải đo**, không coi là đương nhiên.

### 1.2 · Vì sao Astro hợp project này

- 7 trang dịch vụ + trang chủ là **content site gần như tĩnh** → Astro mặc định ship 0 KB JS.
- Hệ thị giác chủ yếu là **CSS + SVG**, đúng vùng mạnh của Astro; không cần runtime component.
- 7 trang **cùng một bộ xương, khác nội dung** → `src/content/` (content collections) map gần 1:1 với mô hình thực thể đã thiết kế.
- Trang dịch vụ là **cửa vào từ Google** → HTML tĩnh, một `h1` thật mỗi trang.

### 1.3 · Rủi ro của Astro — cần theo dõi

| Rủi ro | Ghi chú |
| --- | --- |
| Phần tương tác thật (accordion, menu, form) | Làm bằng TS thuần + Web APIs; chỉ dùng island nếu chứng minh được cần |
| Trang chủ có trạng thái tương tác | Lưới bento chỉ cần `hover`/`focus` thuần CSS + 9 link. Không cần state runtime |
| ~~Kỹ năng đội ngũ~~ | Không còn rủi ro — Agent dựng (`DEC-003` · `DEC-016`) |
| Bảo trì sau launch | **Không còn là rủi ro** — nội dung site cố định, không cần CMS (`DEC-017`). Site tĩnh không cần ai chăm cũng sống |

---

## 2. Cấu trúc thư mục — **ĐỀ XUẤT, chưa chốt** **[suy luận]**

⚠️ *Compliance Check C2 (22/09): cách chia `ui / visual / sections / shell` là thói quen chung Agent mang vào, **không phải thứ rút ra từ file Baika**. `SKILL.md` mục 2.2 cấm áp đặt taxonomy cố định. Chốt lại ở đầu Build sau khi kiểm kê component thật.*

⚠️ *Compliance Check C1: **tên component trong code phải bám tên Figma**, chỉ chuẩn hoá về PascalCase ASCII — `Planet` · `Milkyway` · `HalfCircleItem` · `FaqItem` · `ProcessCard` · `DetailStepItem` · `InnerContainer`. Tên tiếng Anh tự đặt trong sơ đồ dưới (`HorizonArc`, `Starfield`, `HalfDome`, `GlowCorner`) **bị huỷ** — đổi tên ở biên giới Figma↔code làm hỏng truy vết cho QA và visual regression.*

```
src/
  pages/
    index.astro                 → trang chủ
    [service].astro             → 7 trang dịch vụ, sinh từ content collection
    lien-he.astro
  layouts/
    Base.astro                  → <head>, SEO, font, skip-link
    ServicePage.astro           → 7 khối cố định
  content/
    services/                   → 7 file .md/.json, 1 file = 1 trang
    config.ts                   → schema Zod
  components/
    ui/       Button · FaqItem · TextField · Checkbox · PackageCard
              ProcessCard · ServiceLinkCard · NavButton
    visual/   Planet · Milkyway · DisplayArcText · HalfCircleItem
              NeubulaLight · TopLeftLight
    sections/ Hero · ProblemCards · StageScope · Results · Packages · Faq · Contact
    shell/    Header · Footer
  styles/
    tokens.css                  → biến sinh từ Figma
    reset.css · base.css
  scripts/
    faq.ts · nav.ts · form.ts
public/
  fonts/ · og/
```

---

## 3. Mô hình nội dung **[suy luận — chưa ai duyệt]**

*Agent rút ra từ `framer-cms-schema.md` + `ban-do-section.md`. Chốt ở đầu Build.*

Mô hình thực thể của `framer-cms-schema.md` **được giữ lại**, chỉ đổi cơ chế: Framer Collection → **Astro content collection có schema Zod**. Reference field → quan hệ lồng thẳng trong file của trang.

Một file trong `src/content/services/` mang toàn bộ nội dung một trang:

| Nhóm | Trường |
| --- | --- |
| Định danh | `slug` · `title` · `shortName` · `pillar` (`01`…`07`) · `order` |
| Hero | `positioning` · `subline` · `cta.label` · `cta.href` |
| S1 | `problems[]` — **đúng 3** `{ title, body }` |
| S2 | `showStages` · `numberStages` · `stages[]` `{ title, modules[1..5] }` |
| S2.1 | `insertBlock?` `{ heading, cards[] }` — chỉ trang Tư vấn & AI |
| S3 | `results[]` — **đúng 6** |
| S4 | `packages[]` (3–5) `{ title, summary, duration, price?, includes[], featured }` |
| S5 | `faq[]` — **đúng 4** `{ q, a }` |
| S6 | `contactTopics[]` — danh sách "Lĩnh vực", khác nhau mỗi trang |
| SEO | `seo.title` · `seo.description` · `seo.ogImage` |

**Schema Zod ràng buộc đúng các hằng số** (3 / 6 / 4, đúng 1 gói `featured`, ≤ 5 module/cụm) → sai là **build fail**, không phải lỗi âm thầm. Đây là thứ Framer không làm được.

✅ **F-01 ĐÓNG (`DEC-019`, 23/09) — giữ nguyên 7 slug cũ.**

```
/advisory · /remote-ops · /marketing · /finance · /legal-tax · /ai-os · /ceo-blueprint
```

Đặt ở gốc (`/[service]`), **không có thư mục cha** → không cần redirect.

*Slug không phải code/design/architecture — nó là **định danh công khai của trang trên Internet**, cùng loại với domain. Giữ nó là giữ uy tín Google và giữ mọi link đã chia sẻ, không phải "kế thừa site cũ".*

Trang `Liên hệ` chưa có slug — đặt mới. Đề xuất `/lien-he`.

---

## 4. Ánh xạ visual → cách triển khai **[suy luận — đề xuất, chưa prototype]**

Nguyên tắc: **CSS → CSS layers → SVG → HTML/SVG hybrid → raster → canvas**. Không rasterize chỉ vì Figma export được.

| ID | Visual | Đề xuất | Lý do | Fallback |
| --- | --- | --- | --- | --- |
| V-01 | **Vòng cung chân trời** | **SVG** inline (path + `radialGradient` cho vệt sáng rìa) | Vector thuần, cần scale theo viewport, cần đổi màu theo trụ | CSS `border-radius` + `box-shadow` nếu path quá nặng |
| V-02 | **Dải sao** | **CSS** `radial-gradient` lặp + `background-size`, hoặc **SVG** vài chục `<circle>` | Không phải texture tần số cao; raster 1280×694 là lãng phí | PNG/WebP tiled nếu fidelity không đạt |
| V-03 | **Chữ display trên cung** | **SVG `<textPath>`** với `<text>` thật | **Giữ được `h1` là chữ thật** — quyết định SEO, không phải thẩm mỹ. Xuất ảnh là mất `h1` | Không có. Nếu `textPath` hỏng thì đổi thiết kế, không đổi sang ảnh |
| V-04 | **Gradient chữ hero** | CSS `background-clip: text` trên `<text>` SVG, hoặc `<linearGradient>` SVG | Đã có sẵn 2 stop trong Figma | Chữ một màu `--trung` |
| V-05 | **Đuôi gradient trong suốt** | `rgb(<--dam> / 0)` | `transparent` = đen trong suốt → đuôi chữ ám xám | — |
| V-06 | **Quầng sáng góc** | CSS `radial-gradient` trên pseudo-element | Một ellipse mờ | — |
| V-07 | **Vòm nửa tròn (S3)** | **SVG** 1 symbol + `<use>` × 6 | Cùng geometry, chỉ khác màu → `currentColor` | — |
| V-08 | **Line light nối cung xuống vòm** | **SVG** path trong cùng khung với V-07 | Phải khớp toạ độ với vòm | — |
| V-09 | **Nhãn sticky S2** | CSS `position: sticky`, `top: calc(128px + <thở>)` | Không cần JS. Mỗi cụm **phải là một khối riêng** làm biên | — |
| V-10 | **Lưới bento trang chủ** | CSS Grid, `grid-template-columns: repeat(5, 256px)` → 3 → 1 | Ô 256×208 chia hết cho 1280 và 768 | — |
| V-11 | **Gradient nền ô bento** | CSS gradient theo từng ô | — | — |
| V-12 | **Accordion FAQ** | `<details>/<summary>` + TS tăng cường | Không JS vẫn mở được; accessibility sẵn | — |
| V-13 | **NVG bar Open/Close** | TS thuần + `hidden` attribute, focus trap | 6 variant đã có trong Figma | — |
| V-14 | **Logo Baika** | SVG inline | — | — |
| V-15 | **Ảnh OG** | WebP 1200×630, sinh sẵn | — | — |

**Chưa quyết:** mô hình 3D (luồng C) — xem I02.

---

## 5. Token pipeline

Figma `Global Tokens` → `src/styles/tokens.css` (CSS custom properties).

**Luật đặt tên khi xuất:** tên lá trong Figma **không duy nhất** (7 biến cùng tên `--dam`). Phải ghép tên nhóm:

```css
--tuvan-dam  --tuvan-trung  --tuvan-nhat
--vanhanh-dam …            /* 7 nhóm × 3 = 21 biến */
```

Xuất phẳng theo tên lá → còn 3 biến, 6 trụ mất màu. Đây là lỗi im lặng.

**Màu trang áp bằng attribute trên `<body>`:**

```css
[data-pillar="05"] { --pillar-dam: var(--phaply-dam); --pillar-trung: var(--phaply-trung); … }
```

Component chỉ đọc `--pillar-*`, không biết mình đang ở trang nào.

---

## 6. Tiêu chí nghiệm thu kỹ thuật **[hỗn hợp]**

*Đây là **chuẩn độc lập của site mới**, không phải danh sách sửa lỗi site cũ.*

*Nguồn từng dòng: **không iframe · một `h1`** — chuẩn SEO/semantic phổ thông, đồng thời là thứ audit site cũ cho thấy cần tránh · **checkbox bảo mật** — từ thiết kế Figma · **`JS ≤ 30 KB`** — ngưỡng Agent tự đặt **[ASSUMPTION]**, chốt lại khi có số đo thật.*

| Hạng mục | Đạt khi |
| --- | --- |
| Cấu trúc | Không iframe. Mỗi trang đúng **một `h1`** là chữ thật |
| Token | Không có giá trị màu viết cứng; tất cả qua CSS variable |
| Nội dung | Schema Zod pass: 3 vấn đề · 6 kết quả · 4 FAQ · đúng 1 gói `featured` |
| URL | 7 slug giữ nguyên, không redirect (`DEC-019`) · `Liên hệ` = `/lien-he` |
| Sticky | Nhãn S2 không chui dưới nav ở mọi breakpoint |
| Lưới gói | Không hàng lẻ 1 thẻ ở bất kỳ trang nào |
| Form | Có checkbox chính sách bảo mật; có focus nhìn thấy được |
| JS | Trang dịch vụ ship ≤ 30 KB JS (accordion + nav + form) |
| Ảnh | WebP/AVIF, có `width`/`height` hoặc `aspect-ratio` |

---

## 7. Quyết định Implementation — đã chốt 21/09/2026

| ID | Kết luận | Ghi chú |
| --- | --- | --- |
| **I01** | **Agent dựng.** Thắng review | Công ty không có dev; người dựng là `/website-production-agent` (`DEC-016`). Spec bàn giao: `claude/ban-giao-ky-thuat.md` |
| **I02** | **Bỏ mô hình 3D khỏi bản rebuild** | Trang chủ bento là bản sếp duyệt cuối cùng. Luồng C không đưa vào v1 |
| **I03** | **Để site hiện tại chạy tiếp.** Cắt chuyển khi bản Astro sẵn sàng | ✅ **F-03 ĐÓNG (`DEC-020`)** — hosting + DNS do **sếp (Alviss)** nắm. ⚠️ Thắng không tự thao tác được → **bước trỏ tên miền phụ thuộc sếp**, cùng nút chặn với luồng D. Phải xin quyền DNS **từ bây giờ**, không đợi lúc launch. Xem mục 8 |
| **I04** | **Không** đưa trang chủ vào content collection — để thẳng trong `index.astro` | `ASSUMED` · Trang chủ chỉ có một bản, không lặp. Thêm lớp CMS chỉ thêm chỗ phải bảo trì |
| **I05** | Repo mới trên GitHub · Vercel Preview mỗi PR | ✅ **Xác nhận lại 23/09: GitHub repo và Vercel project CHƯA TỒN TẠI.** Sẽ tạo ở đúng phase. Không giả định có sẵn repo / deployment / pipeline. Phải thuộc **BAIKA**, Thắng có quyền admin — xem `claude/van-hanh-sau-launch.md` mục 1 |
| **I06** | **Một ngôn ngữ, `lang="vi"`.** Không dựng lớp i18n | `ASSUMED` · Site hiện chỉ có tiếng Việt. Dựng sẵn khung đa ngôn ngữ khi chưa cần là over-engineer |
| **I07** | Thang chữ: **một token co giãn bằng `clamp()`**, không tạo bản Tablet/Mobile riêng | `ASSUMED` · `display-1` 80px là bậc lớn nhất. Ba token cho ba breakpoint = ba chỗ phải sửa mỗi lần chỉnh |

`ASSUMED` = Agent tự quyết vì rủi ro thấp và dễ đảo ngược. Thắng phản đối lúc nào cũng đổi được.

---

## 8. Cảnh báo chuyển giao (I03)

Khi bản Astro lên production mà site Next.js cũ **vẫn còn phục vụ cùng nội dung ở một địa chỉ truy cập được**, Google sẽ thấy **hai bản sao của cùng 7 trang**. Hậu quả: hai bản tự cạnh tranh, thứ hạng chia đôi, và Google có thể chọn hiển thị bản cũ.

Việc phải làm **tại thời điểm chuyển**, không phải bây giờ:

1. Bản mới lên trước ở địa chỉ tạm (Vercel Preview) — `noindex` trong suốt giai đoạn này
2. Khi chốt: trỏ `baika.vn` sang bản mới
3. **Gỡ `noindex`** — đây là bước dễ quên nhất và nó làm trang biến mất khỏi Google
4. Bản cũ tắt hẳn, hoặc 301 về bản mới. **Không để hai bản cùng sống công khai**

---

## 9. Danh sách chặn Build

*Cập nhật 23/09 sau Context Reconciliation.*

### Chặn Build

| # | Việc | Ai làm |
| --- | --- | --- |
| 1 | Tạo repo GitHub + Vercel project — **thuộc BAIKA**, Thắng admin | Thắng |
| 2 | **F-04** Xác nhận `Chakra Petch` là font chủ ý cho `H-1`…`H-3` *(design-spec 4.3)* | Thắng |
| 3 | **F-05** Quyết `Noto Sans` trong `Text field` — đổi về thang chữ hay giữ *(design-spec 4.3)* | Thắng |
| 3b | **F-02** Quyết chữ mono: bỏ khỏi luật dự án, hay thật sự dùng *(design-spec 4.3)* | Thắng |

*~~F-01 slug~~ → **ĐÓNG**, giữ 7 slug cũ (`DEC-019`).*

### Chặn Release Candidate — không chặn dựng khung

| # | Việc | Ai làm |
| --- | --- | --- |
| 4 | Vẽ trạng thái **cả khối form**: `Submitting` · `Success` · `Error` | Thắng |
| 5 | Vẽ trang `Liên hệ` | Thắng |
| 6 | `FAQ Items` `230:3231` thêm `Hover` + `Focus` *(28 instance)* | Thắng |
| 7 | Chốt định dạng + dung lượng asset hero | Thắng + Agent |
| 8 | Chốt cơ chế đổi màu `Planet` `321:178` — 7 variant hay 1 variant + token | Thắng |

### Chặn Production

| # | Việc |
| --- | --- |
| 9 | ✅ ~~Xác minh ai giữ hạ tầng~~ → **sếp (Alviss)** (`DEC-020`). Việc còn lại: **xin quyền DNS từ sếp — bắt đầu ngay, không đợi** |
| 10 | Xác nhận tên miền `baika.vn` **bật tự động gia hạn** |

### ✅ Đã đóng — không còn chặn

~~Vẽ `Focus` + `Loading` cho Button~~ → `Button 26:2182` đủ **18 variant / 6 trạng thái** (`DEC-008` `DEC-014`).
~~Vẽ trạng thái form: `Focus` · `Error`~~ → `Text field` **10 variant** · `Checkbox` **10 variant** (`DEC-013`). Chỉ còn **form-level** ở mục 4.
