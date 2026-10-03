<!-- CHÉP NGUYÊN VĂN — đầu file do agent thêm 03/10/2026, phần dưới đường kẻ giữ y bản gốc, TRỪ 3 chỗ email cá nhân đã che. md5 bản gốc (trước khi che): a8f35a90377994e748f96d658386715a -->

> 📦 **Bản chép nguyên văn** từ project Claude «BaiKa.vn», file `claude/website-agent-decisions.md` (bản lưu 25/09/2026). Chuyển vào repo ngày 03/10/2026 — **từ nay bản này là bản chính.**
> Sửa **ở đây**, không sửa bản trong project Claude nữa.
> Khi file này lệch với nguồn khác, thứ tự tin: **Figma** → `CLAUDE.md` / `TRANG-THAI.md` / `docs/<trang>/` → file này.
> Đường dẫn `claude/<tên>.md` bên dưới là file trong project Claude. File nào đã chuyển thì nay nằm ở `docs/_chung/<tên>.md` — tra bảng ở `docs/README.md`.
>
> **⚠️ Chỗ đã lỗi thời — đọc trước khi tin nội dung bên dưới:**
> - Từ 22/09 công ty **không còn dev**. Mọi chỗ nhắc «Tuấn» / «bàn giao cho Tuấn» đã hết hiệu lực (`DEC-016`, `DEC-027`).
> - Code **không** dùng file `.module.css`; CSS nằm trong thẻ `<style>` của từng file `.astro` (`DEC-041`, `CLAUDE.md` §7).
> - Text style `label-mono` đã đổi tên thành `label` (`DEC-036`).
> - **Đã che 3 chỗ email cá nhân** của Thắng (repo không nên chứa thông tin cá nhân — chính `DEC-038` cảnh báo). Mọi chữ khác giữ nguyên.
> - Đường dẫn `.website-agent/reports/…` **không có** trong repo này.
> - Nhiều mục ghi «chờ Thắng quyết» đã được chốt ở quyển 2 hoặc về sau. Trước khi coi một mục là còn mở, tìm số `DEC` đó trong quyển 2, `CHANGELOG.md` và `docs/remote-office/SPEC-MASTER.md`.

---

# DECISION LOG — Baika Website

---

## DEC-001 · Production stack = Astro + TypeScript

**Ngày:** 21/09/2026 · **Người quyết:** Thắng Trương · **Phase:** Implementation Discovery

**Quyết định:**
Astro + TypeScript làm nền tảng mặc định. Semantic HTML · CSS/CSS Modules + CSS Variables · SVG/CSS cho visual system · WebP/AVIF cho raster · TypeScript/Web APIs cho interaction · pnpm · Git/GitHub · Vercel cho Preview + Production.

Không dùng Next.js/React làm mặc định. React/Next hoặc thư viện animation/runtime bổ sung chỉ đưa vào nếu Implementation Discovery chứng minh project thực sự cần.

**Vì sao:**
- 7 trang dịch vụ + trang chủ là content site gần như tĩnh → Astro ship 0 KB JS mặc định.
- Hệ thị giác chủ yếu CSS + SVG, không cần runtime component.
- 7 trang cùng bộ xương khác nội dung → content collection + schema Zod ràng buộc được các hằng số (3 vấn đề · 6 kết quả · 4 FAQ).
- Trang dịch vụ là cửa vào từ Google → cần HTML tĩnh và một `h1` thật mỗi trang.

**Phương án đã loại:**

| Loại | Vì sao |
| --- | --- |
| **Framer** (theo `claude/framer-cms-schema.md`, 18/09) | Bị thay thế bởi quyết định này. Cơ chế Framer không còn áp dụng; mô hình thực thể trong tài liệu đó **vẫn giữ**, chuyển sang Astro content collection |
| **Next.js hiện tại** (Tuấn code tay) | Không chọn làm mặc định. React/Next chỉ vào nếu chứng minh được cần |

**Bằng chứng nền:**
- `baika.vn` ngày 11/09 chạy Next.js + Tailwind + Turbopack, font Be Vietnam Pro / Lexend / Geist Mono **[đo trực tiếp]**
- Toàn bộ nội dung site nằm trong `<iframe src="/trangchu.html?v=3">`; `<body>` ngoài **0 ký tự chữ**; **không có thẻ `h1` nào** **[đo trực tiếp]**

**Hệ quả:**
1. Đây là **dựng lại trên stack mới**, không phải sửa site đang chạy.
2. `claude/framer-cms-schema.md` → đánh dấu **SUPERSEDED**.
3. `claude/ban-giao-tuan.md` → từ *bản giao việc cho Tuấn* thành *tài liệu mô tả thiết kế*. Chờ DEC I01.
4. Lỗi iframe + thiếu `h1` được giải bằng chính lựa chọn stack — nhưng phải đưa vào tiêu chí nghiệm thu, không coi là đương nhiên.

**Việc tiếp theo:** chốt I01 (ai build) trước khi Build phase bắt đầu.

---

## Ghi chú trạng thái nguồn — 21/09/2026

| Nguồn | Tình trạng |
| --- | --- |
| Figma `YmcXg1lQqGVjQOFrVtdOgW` page `UI` (`191:812`) | ✅ đọc được — **nguồn sự thật cho thiết kế** |
| `baika.vn` đang chạy | ✅ đo được 11/09 — **nguồn sự thật cho hiện trạng**, không phải cho đích |
| Codebase | ❌ không có bản local; `/home/claude` không phải git repo |
| Framer MCP | ❌ plugin không kết nối — không xác minh được có project Framer nào |
| Global knowledge của skill | ❌ `GLOBAL_KNOWLEDGE_UNAVAILABLE` — thư mục skill chỉ có `SKILL.md` |

**Mâu thuẫn đã phát hiện và xử lý:** `claude/framer-cms-schema.md` (18/09) giả định nền tảng Framer, trái với hiện trạng Next.js đo được 11/09. Đã báo cho Thắng; giải quyết bằng DEC-001 — cả hai đều bị thay bằng Astro.

---

## DEC-002 · Trang chủ có theme riêng, 7 trang con mỗi trang một màu

**Ngày:** 21/09/2026 · **Người quyết:** Founder (qua Thắng) · **ID liên quan:** D05, D06

**Quyết định:** Trang chủ giữ nguyên UI và theme màu riêng của BAIKA (dải xanh dương–xanh ngọc, lưới bento). Không đưa vòng cung chân trời của 7 trang trong vào. Bảy trang dịch vụ mỗi trang mang đúng một màu trụ. Mỗi ô bento link sang trang đúng theo tên ô.

**Vì sao:** yêu cầu của founder — mỗi trang dịch vụ phải mang một màu riêng; trang chủ là nơi thể hiện thương hiệu chung, không thuộc về trụ nào.

**Agent đã đề xuất ngược lại và bị bác:** đề xuất kéo trang chủ về cùng ngôn ngữ thị giác với 7 trang trong. Lý do bác: trang chủ là bản sếp đã duyệt cuối cùng.

**Hệ quả:** không còn yêu cầu "trang chủ và trang trong phải cùng ngôn ngữ thị giác" trong tiêu chí nghiệm thu. Liên kết giữa hai thế giới dựa vào: cùng font, cùng NVG bar, cùng Footer, cùng thang xám.

---

## DEC-003 · Agent build, stack Astro

**Ngày:** 21/09/2026 · **ID liên quan:** I01

**Quyết định:** Agent dựng website. Thắng review.
**Hệ quả:** `claude/ban-giao-tuan.md` chuyển vai từ *bản giao việc cho Tuấn* thành *tài liệu mô tả thiết kế*. Cần repo GitHub + quyền Vercel trước khi Build chạy.

---

## DEC-004 · Bỏ mô hình 3D khỏi bản rebuild

**Ngày:** 21/09/2026 · **ID liên quan:** I02

**Quyết định:** Không đưa mô hình 3D (luồng C) vào bản rebuild v1.
**Vì sao:** trang chủ bento là bản sếp duyệt cuối cùng, không có chỗ cho cảnh 3D.
**Hệ quả:** luồng C tạm ngưng với website. Không còn rủi ro JS payload lớn / `prefers-reduced-motion` / bản dự phòng cho máy yếu.

---

## DEC-005 · Đính chính của Agent — không cần token nền tối mới

**Ngày:** 21/09/2026 · **ID liên quan:** D02

**Agent đã nói sai trong bản draft:** "nền hero 7 trang dịch vụ tối hơn `--gray-950`, thiếu token".

**Đo lại bằng Plugin API:** cả 7 frame trang dịch vụ có `fills = [{SOLID, #1E1E1E}]` — **đúng bằng `--gray-950`**. Hero trông tối hơn là do lớp artwork (`Milkyway`, `Planet`) phủ lên trên, không phải do fill tối hơn.

**Kết luận:** không thêm token. Thang `Colors/Neutral 2` giữ nguyên 11 bậc.

**Bài học:** không suy ra giá trị màu từ ảnh render. Ảnh render là kết quả của nhiều lớp chồng nhau.

---

## DEC-006 · Thang chữ — display-2 nâng lên 48px

**Ngày:** 22/09/2026 · **ID liên quan:** D04

Thang chữ hiện tại (đo 22/09): `display-1 80 · display-2 48 · H-1 32 · H-2 24 · H-3 19 · body-lg 17 · body 15 · caption 13 · label-mono 11`.

Bản spec 21/09 ghi `display-2` = 28 và đề nghị đổi tên thành `lead` vì nó nhỏ hơn `H-1`. Thắng nâng lên **48** — thang giờ đơn điệu, **đề nghị đổi tên huỷ bỏ**.

Phần còn lại của D04 giữ nguyên: **không tạo token riêng cho Tablet/Mobile**, dùng `clamp()` một token co giãn.

---

## DEC-007 · Compliance Check 22/09 — PASS có điều kiện

**Báo cáo đầy đủ:** `.website-agent/reports/compliance-check-2026-09-22.md`

**Sửa văn bản (Agent tự làm, không đổi decision):**

| | |
| --- | --- |
| C1 | Tên component trong code **bám tên Figma**, không đặt tên tiếng Anh mới. Vi phạm `SKILL.md` mục 9 |
| C2 | Cách chia thư mục `ui/visual/sections/shell` hạ xuống thành đề xuất. Vi phạm `SKILL.md` mục 2.2 |
| C3 | Đánh dấu **[suy luận]** cho content model · bảng ánh xạ visual · tiêu chí nghiệm thu |
| C4 | Luật *"vỏ trung tính, ruột đổi màu"* thu hẹp phạm vi về **7 trang dịch vụ**, không áp cho trang chủ (theo `DEC-002`) |

**Reopen — chỉ 2 mục, đều thuộc D08:**

| | |
| --- | --- |
| C5-a | **Button:** `Hover` và `Active` bị thay mất khi thêm `Loading` + `Focus`. Vẫn 12 variant. Cần 6 trạng thái × 3 cỡ = 18 |
| C5-b | **`Process card`:** "không tương tác" mâu thuẫn với "6 thẻ trang Tư vấn là link". Chờ Thắng chọn 1 trong 3 đường |

**Không có decision nào khác bị mở lại. `DEC-001` → `DEC-006` giữ nguyên. Discovery không chạy lại.**

---

## VD-001 · Known Deviation — tương phản nhãn 8 ô bento

**Ngày:** 22/09/2026 · **ID liên quan:** D07

| | |
| --- | --- |
| **Chuẩn** | WCAG AA ≥ 4.5:1 cho chữ thường *(checklist chung của chính dự án)* |
| **Thực tế** | Chữ `#F8F8F8` trên nền ô `#FFFFFF` 5% phủ lên lớp gradient artwork — **chưa đo** |
| **Quyết định** | Thắng chốt 22/09: *"Đó là ý đồ của UI nên không cần đo tương phản 8 ô còn lại"* |
| **Ảnh hưởng** | Đây là **nhãn điều hướng chính của trang chủ**, không phải chữ trang trí |
| **Xử lý** | Chấp nhận. Không đo, không chặn release vì mục này. QA sẽ **không** báo mục này là FAIL |
| **Phương án dự phòng nếu sau này đổi ý** | Lớp tối rất nhẹ chỉ dưới vùng chữ (gradient đen 0→40%, cao ~64px ở đáy ô), hoặc `text-shadow` mảnh — ở cỡ chữ 24px gần như không nhìn thấy |

Hai ô sáng (`Tư vấn`, `Trạm Ý Tưởng`) đo được **9.86:1** — đạt thoải mái, không thuộc deviation này.

---

## DEC-008 · Đóng C5-a và C5-b — đã xác minh trên Figma 22/09

### C5-a · Button — ĐÓNG

Đo lại `26:2182`: `small button = Normal | Hover | Loading | Focus | Disabled` × `Property = Small | medium | Large` = **15 variant**. `Hover` đã quay lại. ✅

**Còn thiếu `Active` (trạng thái đang nhấn) — KHÔNG chặn.** Trình duyệt vẫn có phản hồi mặc định khi nhấn, và thiếu `Active` nhẹ hơn hẳn thiếu `Hover`/`Focus`. Ghi vào danh sách polish, không reopen.

### C5-b · Tách component — ĐÓNG

Thắng chọn **phương án 1**. Đo lại:

| Khối | Component | Trạng thái |
| --- | --- | --- |
| Trang Tư vấn · `6 dịch vụ` | **`ServiceLinkCard`** (`450:5984`) | `State = Default \| Hover` ✅ |
| Trang AI · `5 bước thực hiện` | **`Process Card`** (component thường, không variant) | tĩnh ✅ |

Sáu instance trên trang Tư vấn đã trỏ đúng `ServiceLinkCard`; năm instance trang AI trỏ `Process Card`. Tách đúng, không còn một component gánh hai việc.

**Hai ghi chú cho Build — không chặn:**

1. **`ServiceLinkCard` chưa có `Focus`.** Nó là link, nên người dùng bàn phím cần thấy mình đang ở đâu. **Giải ở tầng code, không cần vẽ thêm:** `:focus-visible` dùng lại đúng treatment của `Hover`, cộng thêm một `outline` rõ ràng. Ghi thành luật trong Implementation Spec.
2. **Breakpoint đang bị trộn vào trục variant.** `ServiceLinkCard` có `Property 1 = Default | Mobile | Tablet | Variant4`; ô bento có `Tablet` nằm trong trục trạng thái. Trong code, breakpoint là **media query**, không phải prop. Build **không** sinh prop `breakpoint`. `Variant4` là tên rơi rớt, không mang nghĩa.

---

## DEC-009 · GitHub & Vercel — prerequisite theo phase, không phải blocker của Discovery

**Ngày:** 22/09/2026 · **Người quyết:** Thắng · **ID liên quan:** I05

**Quyết định:** không cấp quyền ở phase này. Ghi thành prerequisite gắn với đúng phase cần dùng:

| Quyền | Cần ở phase | Không cần trước đó |
| --- | --- | --- |
| **GitHub** | Build / Source Control | Discovery · Specification |
| **Vercel** | Staging / Preview Deployment | Discovery · Specification · Build local |

**Agent đã ghi sai ở bản 21/09:** liệt kê cả hai vào "danh sách chặn Build" và vào `blockers` của state — làm chúng trông như đang chặn phiên hiện tại. Thực tế Discovery và việc khoá spec **không cần quyền nào cả**.

**Sửa:** chuyển khỏi `blockers`, đưa vào `prerequisites` gắn phase. Không yêu cầu quyền sớm hơn lúc phase đó bắt đầu.

---

## DEC-010 · `ServiceLinkCard` — đã xác minh 22/09, có một chỗ lệch

**Đo được:**

```
Property 1 = Desktop | Mobile | Tablet      (Variant4 đã biến mất ✅)
State      = Default | Hover | Active
5 variant
```

**✅ Đúng như Thắng báo:** tên `Variant4` đã sửa. Trục breakpoint giờ mang nghĩa rõ ràng.

**⚠️ Lệch:** Thắng báo *"đã thêm trạng thái focus"* nhưng giá trị trong file là **`Active`**, không phải `Focus`.

| | Xuất hiện khi | Phục vụ |
| --- | --- | --- |
| `Active` | đang nhấn giữ | chuột & cảm ứng |
| `Focus` | bàn phím `Tab` dừng lại | **bàn phím** |

`ServiceLinkCard` là link, nên `Focus` mới là thứ bắt buộc về accessibility.

**Xử lý — KHÔNG reopen, KHÔNG chặn:**

- `Active` giữ nguyên, là trạng thái thật và hữu ích.
- `Focus` giải ở tầng code: `:focus-visible` dùng lại treatment `Hover` + một `outline` rõ ràng. Đã ghi thành luật trong Design Spec mục 12.2 và Implementation Spec mục 10.
- Nếu sau này Thắng muốn vẽ riêng thì chỉ cần thêm giá trị `Focus` vào trục `State`.

**Ghi chú breakpoint:** để variant theo màn trong Figma là hợp lý — nó ghi lại thẻ đổi hình thế nào. Nhưng Build **không** sinh prop `breakpoint`; đó là media query. Đề nghị đổi tên trục `Property 1` → `breakpoint`, và tách `Tablet` ra khỏi trục trạng thái của ô bento.

---

## DEC-011 · Đính chính của Agent — spec tự mâu thuẫn với chính decision log

**Ngày:** 22/09/2026

Khi đọc lại `design-spec.md` sau khi cập nhật `DEC-010`, phát hiện **mục 1–5 vẫn giữ nguyên văn bản nháp 21/09**, trong khi mục 10–12 đã ghi kết luận. Một tài liệu `LOCKED` mà tự nói hai điều trái nhau là nguy hiểm — người đọc mục 3.3 sẽ đi thêm một token mà `DEC-005` đã nói là không cần.

**Năm chỗ lệch đã sửa:**

| Mục | Nháp 21/09 | Đã sửa theo |
| --- | --- | --- |
| 1.2 | Trang chủ Mobile = 390 | **375** — D01 |
| 2 | *"không nhất quán, cần chốt"* | **1280 / 768 / 375**, đã chốt — D01 |
| 3.3 | *"nền hero tối hơn `--gray-950`, thiếu token"* | Không thiếu token nào — `DEC-005` |
| 3.4 | *"xung đột về nghĩa vẫn còn"* | Đã giải, không phải làm gì — D03. Bổ sung dây chuyền nguồn của luật |
| 5.1 | Button 6 variant · `Process card` thiếu hover | Button **15 variant** · `ServiceLinkCard` + `Process Card` + ô bento — `DEC-008`, `DEC-010` |

**Bài học cho các phase sau:** khi một quyết định được chốt, phải sửa **mọi chỗ trong spec nhắc tới nó**, không chỉ bảng quyết định ở cuối. Bảng quyết định là nơi ghi *kết luận*; phần thân là nơi người đọc thực sự đọc.

Đã chạy đối chiếu chuỗi trên cả hai spec — không còn dấu vết văn bản cũ.

---

## DEC-012 · Rà soát Figma 22/09 — bản đồ còn thiếu

**Báo cáo đầy đủ:** `.website-agent/reports/figma-gap-audit-2026-09-22.md`

**Đóng lại — đã đủ, đã xác minh:**

| | |
| --- | --- |
| `Text field` | 10 variant, `Default·Focus·Disabled·Typing·Choose·Error` × `Default·Dropdown` ✅ |
| `Button 2` `26:2182` | **18 variant**, đủ 6 trạng thái ✅ · dùng ở cả 7 trang (39 instance) |
| `ServiceLinkCard` | `Default·Hover·Focus` ✅ · `Active` được thay bằng `Focus` — đổi đúng hướng |
| Bốn trạng thái Loading/Empty/Error/Not found | **Không áp dụng** — site Astro tĩnh, không có khu vực lấy dữ liệu động. Chỗ duy nhất cần là form |

**Mới phát hiện — chặn Release Candidate:**

1. **`FAQ Items` thiếu `Hover` + `Focus`** (`230:3231`, chỉ `Default | Variant2`). 28 instance trên 7 trang, là thứ bấm được.
2. **Form-level state `Success` + `Error`** chưa có.
3. **Trang `Liên hệ`** chưa vẽ.

**Mới phát hiện — cần chốt trước Build:**

4. **Breakpoint mobile lệch trở lại, theo chiều ngược:** `Home/Mobile` = **375**, `Mobile section` (trang dịch vụ) = **390**. Trước đây ngược lại. D01 chốt 375 — cần chốt một lần cho cả hai.
5. **`Planet` chỉ có 1 variant `Colors = Pháp lý`** nhưng 7 trang đều dùng. Chốt: vẽ 7 variant, hay giữ 1 và đổi màu bằng token ở tầng code.

**Dọn dẹp — không chặn:**

`Button 1` (`519:3354`) **0 instance, nên xoá** · `Checkbox` tách hai trục, bỏ `Variant5` · tên `Variant2` ở 5 component · trục tên `Property 1` ở 5 component set · ô bento tách `Tablet` khỏi trục trạng thái · `Các gói` thiếu `Hover` · frame lạc chỗ `Process Card (400)` và `Frame (768)`.

**Ghi chú phạm vi:** `Giới thiệu` và `Trạm Ý Tưởng` **ngoài phạm vi v1** — v1 = 7 trang dịch vụ + trang chủ + `Liên hệ`.

---

## DEC-013 · `Checkbox` `29:2685` — dựng lại tại chỗ, tách hai trục

*22/09/2026 · Luồng A · Người quyết: Thắng ("làm vào chỗ đang làm đó") · Người thực hiện: Agent*

**Trước:** 15 variant, một trục `Property 1` gánh cả hai chiều — `Checked · Unchecked · Hover · Focus · Variant5 … Variant15`. Trục `Type` chỉ có một giá trị `Default`, không làm gì.

**Đo được trước khi sửa:** 15 variant xếp 3 cột × 5 hàng. **Ba cột giống hệt nhau** ở mọi thuộc tính đo được — fill, stroke, stroke weight, opacity, effect, ẩn/hiện dấu tick. Không có chiều thông tin nào trong trục cột → đó là bản sao thừa khi dựng, không phải một trục thiết kế.

**Sau:** 10 variant, hai trục đúng nghĩa.

```
Checked = False | True
State   = Default | Hover | Focus | Error | Disabled
```

| Checked | State | Viền ô | Nền ô | Dấu tick | Hiệu ứng |
| --- | --- | --- | --- | --- | --- |
| False | Default | `--gray-50` | — | ẩn | — |
| False | Hover | `--gray-50` | — | ẩn | glow trắng |
| False | Focus | `--gray-50` | — | ẩn | glow trắng |
| False | Error | `Colors/Red/200` | `--gray-950` | ẩn | — |
| False | Disabled | `--gray-700` | — | ẩn | — |
| True | Default | `--gray-50` | `--gray-950` | hiện | — |
| True | Hover | `--gray-50` | `--gray-950` | hiện | glow trắng |
| True | Focus | `--gray-50` | `--gray-950` | hiện | glow trắng |
| True | Error | `Colors/Red/200` | `--gray-950` | hiện | — |
| True | Disabled | `--gray-700` | `--gray-950` | hiện (`--gray-700`) | — |

**Vì sao tách:** một trục không diễn đạt được *"đã tick + đang hover"* — trạng thái người dùng gặp thật mỗi lần bỏ tick. Trong code, hai trục dịch thẳng thành `checked: boolean` và `state: 'default'|'hover'|'focus'|'error'|'disabled'`; một trục thì phải viết logic dịch ngược.

**Không tạo token mới.** `Error` dùng `Colors/Red/200` đã có. `Disabled` dùng `--gray-700` (`#6D6D6D`) — **chính là token `Button` đang dùng cho `Disabled`**. Agent đã đo `Button 26:2182` trước khi chọn: quy ước disabled của file này là **đổi sang token xám, giữ `opacity = 1`**, không phải giảm opacity. Phương án giảm opacity 40% đã bị loại vì trái quy ước sẵn có.

**Phương án đã loại:** giữ 15 variant và đặt tên cho trục cột — loại vì không đo được cột đại diện cho chiều nào; đặt tên cho một trục rỗng là bịa.

**Đã xoá:** 5 variant `Variant11…Variant15` (cột 3) — 0 instance dùng, trùng hoàn toàn với cột 1.

**Kiểm chứng sau khi sửa:** 11 instance trên page `UI` vẫn nối đúng main component, đọc ra `Checked=False, State=Default`, kích thước vẫn 20.3×20.3. Không instance nào gãy.

**Đã ghi `description` cho component set** — gồm cả mục *"KHÔNG dùng cho"* (radio, toggle), theo checklist luồng A.

### ⚠️ Phát sinh — cần Thắng quyết, chưa tự sửa

**`Hover` và `Focus` đang vẽ giống hệt nhau — và không chỉ ở `Checkbox`.**

Đo `Button 26:2182`: `small button=Hover` và `small button=Focus` **trùng khít** — cùng gradient fill, cùng gradient stroke, cùng `INNER_SHADOW #999999/50`. Không một pixel khác biệt. Thứ thật sự có glow trắng (`DROP_SHADOW #FFFFFF/50`) trong `Button` lại là `Active`.

Nghĩa là quy ước hiện tại của file: **glow trắng = Active**, còn `Focus` không có dấu hiệu riêng.

Ở `Checkbox`, glow trắng đang được gán cho `Hover` + `Focus` — theo đúng hình Thắng đã vẽ, nhưng **ngược với quy ước của `Button`**.

Hệ quả nếu để nguyên: người dùng bàn phím (Tab) không phân biệt được ô đang được chọn với ô con trỏ vô tình lướt qua. Đây là mục bắt buộc trong *Checklist review giao diện* của chính dự án ("focus state nhìn thấy được").

**Agent không tự sửa** vì đây là ngôn ngữ thị giác toàn hệ thống, không phải lỗi của riêng `Checkbox`. Ba đường ra ở mục "Việc tiếp theo".

**Việc tiếp theo:**

1. Chốt cách phân biệt `Focus` với `Hover` cho **cả hệ** (`Button` · `Checkbox` · `Text field` · `ServiceLinkCard` · `FAQ Items`). Ba đường: (a) `Focus` dùng viền ngoài rõ rệt — ví dụ `--gray-50` dày 2px cách ô 2px; (b) `Hover` nhẹ hơn `Focus` — giảm bán kính glow ở `Hover`; (c) chấp nhận trùng, ghi vào Known Deviation kèm lý do.
2. Sau khi chốt, sửa `Button` trước (39 instance), rồi áp lại cho `Checkbox`.

---

## ~~VD-002~~ · `Focus` và `Active` dùng chung một hình ảnh — **ĐÃ HUỶ 22/09, xem `DEC-014`**

> ⚠️ **Mục này không còn hiệu lực.** Thắng đã chọn hướng ngược lại: tách `Active` ra khỏi `Focus` bằng hiệu ứng chìm xuống. Giữ lại phần số đo bên dưới vì nó là bằng chứng lịch sử, nhưng **đừng đọc kết luận của nó như quyết định hiện hành**.

### Nội dung gốc (đã huỷ)

*22/09/2026 · Luồng A · Người quyết: Thắng*

| | |
| --- | --- |
| **Quyết định** | Thắng chốt 22/09: *"Active và focus nhiệm vụ như nhau nên để giống nhau."* |
| **Chuẩn** | WCAG 2.1 AA · 2.4.7 *Focus Visible* — chỉ yêu cầu **có** dấu hiệu focus nhìn thấy được, **không** yêu cầu focus phải khác hover/active |
| **Kết luận** | ✅ **Không vi phạm AA.** Đóng mục, không chặn release |
| **Không làm** | Không vẽ thêm hình riêng cho `Focus`, không thêm `Active` vào `Checkbox` |

**Đính chính số đo — quan trọng để phiên sau không kết luận sai:**

Em đã báo ở `DEC-013` rằng `Hover` và `Focus` trùng nhau. Đo lại `Button 26:2182` cho chính xác:

| Trạng thái | Fill | Stroke | Effect |
| --- | --- | --- | --- |
| `Normal` | `#1E1E1E` | `#F1F1F1` | `DROP_SHADOW #000000/10` |
| `Hover` | gradient | gradient | `INNER_SHADOW #999999/50` |
| `Focus` | gradient | gradient | `INNER_SHADOW #999999/50` |
| `Active` | gradient | gradient | `INNER_SHADOW #999999/50` **+ `DROP_SHADOW #FFFFFF/50` r6 s1** |

→ Thứ trùng khít trong `Button` là **`Hover` ≡ `Focus`**. `Active` **khác** — nó có thêm quầng sáng trắng. Nghĩa là file hiện tại đang gộp `Focus` vào `Hover`, chứ chưa gộp `Focus` với `Active`.

**Hệ quả của quyết định này nếu thực hiện đúng ý:** `Focus` phải được vẽ **giống `Active`** (tức có quầng sáng trắng), chứ không phải giống `Hover` như hiện tại. Nếu để nguyên `Button` thì quyết định "focus = active" chưa được phản ánh trong file.

**Đường ra — Thắng chọn một:**

1. **Sửa `Button`:** `Focus` thêm `DROP_SHADOW #FFFFFF/50` cho giống `Active`. Khi đó `Hover` (không quầng) · `Focus`/`Active` (có quầng) — ba trạng thái, hai hình ảnh. `Checkbox` đã đúng dạng này rồi (glow ở `Focus`).
2. **Giữ nguyên `Button`:** chấp nhận `Hover` ≡ `Focus`, và `Active` là cái khác biệt. Vẫn đạt AA. Nhưng khác với `Checkbox`, nơi glow đang gán cho cả `Hover` lẫn `Focus`.
3. **Không đụng gì cả** — ghi nhận là sai lệch có chủ ý, đóng mục.

**Còn lại một chỗ chưa khớp:** `Checkbox` dùng quầng sáng cho `Hover` **và** `Focus`; `Button` dùng quầng sáng cho `Active`. Cùng một hiệu ứng, hai ý nghĩa khác nhau ở hai component. Không chặn release, nhưng khi bàn giao cho Tuấn thì phải ghi rõ, nếu không anh ấy sẽ tự suy một quy tắc chung và áp sai.

**Lý do đặt vào Known Deviation chứ không phải quyết định thường:** đây là chỗ dự án đi khác checklist review giao diện của chính mình ("focus state nhìn thấy được" — vẫn đạt, nhưng không có dấu hiệu riêng). Ghi lại để khi ai đó hỏi thì có câu trả lời, không phải để lật lại.

---

## DEC-014 · Ba trạng thái tương tác `Button` — ba cơ chế thị giác khác nhau

*22/09/2026 · Luồng A · Người quyết: Thắng · Người đề xuất: Agent · **Thay thế `VD-002`***

**Vấn đề:** ban đầu `Hover` ≡ `Focus` (trùng khít), sau đó Thắng thử tách `Active` bằng cách **bỏ viền**. Agent cản lại: phân biệt bằng cách *xoá đi* một thứ là tín hiệu yếu ở một trạng thái chỉ sống ~100ms, và nút bị co 1px lúc nhấn vì viền căn giữa 2px.

**Chốt — đã đo lại trong file sau khi Thắng sửa:**

| Trạng thái | Viền | Hiệu ứng | Cơ chế | Người dùng đọc ra |
| --- | --- | --- | --- | --- |
| `Normal` | `#F1F1F1` 2px | `DROP_SHADOW` `#000000/10` r2 off `0,2` | nền đặc | *"nút đây"* |
| `Hover` | gradient 2px | `INNER_SHADOW` `#999999/50` r6 off `0,−4` | **sáng lên** | *"bấm được"* |
| `Active` | gradient 2px | `INNER_SHADOW` `#000000/100` **r12 s4 off `0,+4`** | **chìm xuống** | *"đã nhận cú bấm"* |
| `Focus` | gradient 2px | `INNER_SHADOW` như `Hover` **+ `DROP_SHADOW` `#FFFFFF/50` r6 s1** | **vòng sáng ngoài** | *"bạn đang đứng đây"* |
| `Disabled` | `#FFFFFF` 2px | — | nền `--gray-700` | *"không bấm được"* |
| `Loading` | gradient 2px | — | nền gradient | *"đang xử lý"* |

**Điểm mấu chốt:** `Hover` và `Active` dùng **cùng một loại hiệu ứng** (`INNER_SHADOW`) nhưng **đổ ngược chiều nhau** — `−4` (bóng ở mép trên, ánh sáng từ dưới hắt lên → nổi) so với `+4` đậm hơn và toả rộng hơn (bóng đổ từ trên xuống → lún). Đây là cách kể "nổi lên / chìm xuống" mà không cần thêm màu hay thêm hình.

**Quầng sáng trắng giờ thuộc về riêng `Focus`.** Trước đó nó dùng cho cả `Active` lẫn `Focus` — một hiệu ứng, hai nghĩa.

**Phương án đã loại:**

1. **`Focus` = `Active`** *(ý ban đầu của Thắng)* — loại vì hai cái khác nhau về bản chất: `Active` là phản hồi tức thời ~100ms cho người dùng chuột, `Focus` là chỉ vị trí kéo dài cho người dùng bàn phím. Lỗi cụ thể: trình duyệt để focus nằm lại trên nút sau khi click, nên nút sẽ trông như **bị nhấn giữ mãi**.
2. **`Active` bỏ viền** — loại vì ba lý do: tín hiệu "xoá đi" quá yếu trong 100ms · nút co 1px gây cảm giác giật · trên nền tối, gradient không viền bị mất cạnh.
3. **Thêm `outline` ring riêng cho `Focus`** *(đề xuất đầu của Agent)* — không cần nữa, vì quầng sáng `DROP_SHADOW` đã làm đúng việc đó và hợp ngôn ngữ thị giác sẵn có của file hơn.

**Kiểm chứng:** đo lại `26:2182` sau khi sửa — cả 3 cỡ (Small/medium/Large) đều đã áp đúng, viền đã trả về, quầng sáng đã gỡ khỏi `Active`. 18 variant, 39 instance không đổi cấu trúc.

**Ghi chú bàn giao Tuấn:** giá trị bóng đổ trong file này **không nằm trong token nào** (`#999999/50` · `#000000/100` · `#FFFFFF/50` đều viết thẳng). Không phải lỗi — file chưa từng có token cho shadow. Nhưng phải **ghi rõ số ra spec**, nếu không Tuấn sẽ tự đoán.

**Việc tiếp theo — còn một chỗ chưa đồng bộ:**

`Checkbox 29:2685` hiện vẫn dùng quầng sáng cho **cả `Hover` lẫn `Focus`**. Sau `DEC-014`, luật chung của hệ là **quầng sáng = `Focus`**. Cần gỡ quầng khỏi `Hover` của `Checkbox` và thay bằng một tín hiệu "sáng lên" khác. Đề xuất: `Hover` tăng độ dày viền `1px → 1.5px`, giữ nguyên màu; `Focus` giữ quầng.

---

## DEC-015 · `Checkbox` — `Hover` giữ nguyên hình như `Default`

*22/09/2026 · Luồng A · Người quyết: Thắng*

**Chốt:** `Checkbox 29:2685`, hai variant `Hover` (`Checked=False` và `Checked=True`) **bỏ quầng sáng trắng**, trông y hệt `Default`.

**Sau khi sửa — trạng thái `Checkbox` đã đo lại:**

| State | Viền ô | Hiệu ứng |
| --- | --- | --- |
| `Default` | `--gray-50` 1px | — |
| `Hover` | `--gray-50` 1px | — *(giống `Default`, cố ý)* |
| `Focus` | `--gray-50` 1px | `DROP_SHADOW #FFFFFF` r2 |
| `Error` | `Colors/Red/200` 1px | — |
| `Disabled` | `--gray-700` 1px | — |

**Vì sao chấp nhận được:** WCAG không yêu cầu hover phải có phản hồi thị giác — chỉ yêu cầu `Focus` nhìn thấy được, và `Focus` giờ là trạng thái **duy nhất** có quầng sáng. Ngoài ra ô checkbox thường đi kèm nhãn và cả dòng là vùng bấm; tín hiệu hover nằm ở **nhãn và con trỏ chuột**, không nhất thiết ở ô 20px.

**Kết quả đồng bộ với `DEC-014`:** quầng sáng trắng giờ mang đúng **một** nghĩa trên toàn hệ — `Focus`. Không component nào dùng nó cho việc khác nữa.

**Giữ lại variant `Hover` dù trùng hình `Default` — có lý do:** nó là **tài liệu**. Nó nói với Tuấn *"hover đã được cân nhắc và quyết định là không đổi gì"*, khác hẳn với việc bỏ trống rồi để anh ấy tự nghĩ ra một hiệu ứng hover. Đây là ngoại lệ có chủ ý so với luật "không để variant trùng nhau" đã áp dụng lúc xoá `Variant11…15`.

**Đã cập nhật `description` của component set** — ghi rõ ba điều Tuấn cần biết: hover không đổi (cố ý) · quầng sáng = focus · disabled đổi màu chứ không giảm opacity.

**Còn lại cho luồng A:** `FAQ Items` `230:3231` vẫn thiếu `Hover` + `Focus` (28 instance, chặn Release Candidate). Khi làm, áp luật `DEC-014`: quầng sáng cho `Focus`; `Hover` thì chọn đổi hình hoặc không đổi, nhưng phải là quyết định có ghi lại.

---

## ⚠️ MỞ LẠI · Công ty không có dev — ảnh hưởng tới `DEC-001` và `DEC-003`

*22/09/2026 · Thắng báo: **"Từ giờ sẽ không còn ai tên Tuấn nữa, công ty không có dev."***

Đây là **thay đổi giả định nền**, không phải thay đổi nhỏ. Nó nằm dưới hai decision đã LOCKED, nên phải ghi lại ngay thay vì đi tiếp.

### Cái gì KHÔNG đổi

Toàn bộ việc thiết kế trên Figma — token, component, trạng thái, 7 trang dịch vụ, trang chủ, trang `Liên hệ`. Ai dựng web thì vẫn cần bấy nhiêu thứ đó. `DEC-013` `DEC-014` `DEC-015` không bị ảnh hưởng.

### Cái gì đổi

| Mục | Trước | Giờ |
| --- | --- | --- |
| `DEC-003` — người nhận bàn giao | "Tuấn là người dựng web, đầu ra là file bàn giao cho Tuấn" | **Không còn người nhận.** Tài liệu `ban-giao-tuan.md` vẫn có giá trị nhưng đổi đối tượng đọc |
| Luồng E bước 1 — *"chốt nền tảng Tuấn đang dùng"* | Bước bắt buộc | **Vô nghĩa**, bỏ |
| `DEC-001` — Astro + TypeScript + GitHub + Vercel | Hợp lý khi có người kỹ thuật | ⚠️ **Cần soi lại** — xem dưới |

### 🔴 Rủi ro chính: ai nuôi site sau khi lên?

`DEC-001` chọn Astro + GitHub + Vercel. Agent dựng được v1 — chuyện đó không đổi. Vấn đề là **sau đó**:

| Việc thường ngày | Với Astro, không có dev |
| --- | --- |
| Sửa một lỗi chính tả trên trang | Phải sửa file code, commit, chờ build |
| Đăng một bài viết mới | Một commit git |
| Đổi số điện thoại ở footer | Sửa code |
| Thêm một gói dịch vụ | Sửa code |

Không có ai làm được những việc đó thì **site đóng băng ngay ngày Agent dừng lại**. Đây là loại rủi ro không lộ ra lúc launch, mà lộ ra sau 2–3 tháng khi cần sửa một chữ mà không ai sửa được.

### Hệ quả ngược lại: luồng D đổi vai

Luồng D (Notion → Website) trước đây là *"tính năng hay nếu làm được"*. Giờ nó là **cơ chế duy nhất để Thắng tự cập nhật nội dung mà không cần code**: viết ở Notion → web tự lấy về.

→ Luồng D **lên mức chặn**, không còn là tuỳ chọn. Và nút chặn của nó (quyền guest ở workspace "Alviss's Notion") giờ chặn cả tương lai của website, không chỉ chặn phần blog.

### Cần Thắng quyết — chưa quyết thì chưa Build

**Ai dựng v1, và ai sửa nội dung sau khi lên?** Ba đường:

1. **Agent dựng Astro + nội dung lấy từ Notion.** Thắng tự cập nhật bằng cách viết Notion. Đòi hỏi: gỡ được quyền Notion (đang chặn). Giữ nguyên `DEC-001`.
2. **Đổi sang nền tảng no-code** (Framer / Webflow) để Thắng tự sửa bằng tay trên giao diện. Phải **mở lại `DEC-001`** — và bản `framer-cms-schema.md` từng bị đánh SUPERSEDED sẽ sống lại.
3. **Agent dựng Astro, chấp nhận site tĩnh không ai sửa được**, thuê ngoài khi cần thay đổi. Rẻ ngay, đắt về sau.

**Chưa chốt câu này thì không nên bắt đầu Build** — vì nó quyết định luôn kiến trúc, không phải thứ đổi được sau.

**Cần Thắng làm ngoài chat:** sửa **project instructions** (mục 3, luồng E) — chỗ ghi *"Tuấn là người dựng web"* và *"đầu ra là file bàn giao cho Tuấn"*. Instructions nạp lại mỗi tin nhắn, để nguyên thì phiên sau lại hỏi về Tuấn.

---

## DEC-016 · `/website-production-agent` thay vai trò dev

*22/09/2026 · Người quyết: Thắng*

**Chốt:**

1. **Giữ nguyên cấu trúc luồng A/C/D/E** trong project instructions — chỉ gỡ tên "Tuấn", thay bằng agent.
2. **Người dựng web là `/website-production-agent`.** `DEC-001` (Astro + TypeScript + GitHub + Vercel) **giữ nguyên**, không mở lại.
3. **Câu hỏi "ai sửa nội dung sau khi launch" — Thắng hoãn**, bàn sau.

**Đã làm:**

- `claude/ban-giao-tuan.md` → đổi tên thành **`claude/ban-giao-ky-thuat.md`**, cập nhật lại toàn bộ:
  - Nền tảng: tách rõ *site cũ đo được (Next.js + iframe)* với *site mới đã chốt (Astro)*
  - `Colors/Trụ` → `Colors/Page`
  - Thêm mục **5.7 Trạng thái tương tác — luật chung toàn hệ** (`DEC-014` `DEC-015`)
  - Mục 6 chia lại theo mức chặn: 🔴 chặn RC · 🟠 chốt trước khi dựng · 🟡 đã đủ
  - Thêm mục 9 Known Deviation (`VD-001`) để QA không báo FAIL nhầm
  - Checklist nghiệm thu viết lại, thêm tiêu chí SEO đo được (không iframe · đúng một `h1` · `h1` là chữ thật)

**⚠️ Rủi ro chưa xử lý — Agent có trách nhiệm nhắc lại:**

Agent dựng được v1, nhưng **agent không sống trong công ty**. Sau khi site lên: sửa một lỗi chính tả, đổi số điện thoại footer, thêm một gói dịch vụ — tất cả đều là sửa code.

Thắng đã chọn **hoãn** câu hỏi này. Ghi lại để:

- **Không chặn Build** — đúng như Thắng muốn, tập trung dựng v1 trước
- **Nhưng CHẶN Production deploy.** Trước khi đẩy lên production, Agent **phải nêu lại**, không được im lặng deploy rồi để đó

Ba đường khi tới lúc đó: (1) mở phiên mới nhờ agent sửa — cần Thắng có tài khoản GitHub + Vercel của dự án; (2) nội dung lấy từ Notion, Thắng chỉ viết Notion — cần gỡ nút chặn quyền guest ở workspace Alviss; (3) thuê ngoài từng lần.

**Ghi chú về luồng D:** vì không còn dev, Notion → Website từ *"tính năng hay nếu làm được"* trở thành **ứng viên số một** cho cơ chế cập nhật nội dung. Nút chặn quyền của nó giờ có trọng lượng lớn hơn trước.

---

## DEC-017 · Nội dung site cố định — Astro tĩnh là lựa chọn đúng, không phải rủi ro

*22/09/2026 · Người quyết: Thắng · **Đóng rủi ro mở ở `DEC-016`***

**Thông tin mới từ Thắng:** *"Site này không cần sửa nội dung, nếu sửa là sửa hết cả design chứ không riêng nội dung."*

**Điều này đảo ngược đánh giá rủi ro ở `DEC-016`.** Agent từng lo: không có CMS thì không ai cập nhật nội dung. Nếu nội dung **vốn không cập nhật**, mối lo đó không tồn tại — và Astro tĩnh trở thành lựa chọn **tối ưu**:

| | Astro tĩnh | CMS / no-code |
| --- | --- | --- |
| Cần bảo trì định kỳ | ❌ Không | ✅ Có |
| Hỏng khi lâu không đụng | ❌ Không | ⚠️ Có thể |
| Bề mặt tấn công | Gần như không | Có |
| Chi phí hàng tháng | ~0 | Có |

Một site tĩnh **không cần ai chăm cũng sống** — đúng thứ một công ty không có dev cần.

**`DEC-001` được xác nhận lại, không mở lại.**

**Hệ quả cho luồng D:** Notion → Website **không còn là cơ chế cập nhật nội dung của site marketing**. Nếu luồng D còn giá trị thì là cho *Trạm Ý Tưởng* — vốn **ngoài phạm vi v1**. Vậy luồng D **hạ khỏi mức chặn**, trở lại "khi nào cần thì làm".

**Cách vận hành sau launch — tài liệu đầy đủ:** `claude/van-hanh-sau-launch.md`

Tóm tắt cơ chế:

1. **Tài khoản là thứ sống giữa các phiên, không phải trí nhớ Agent.** GitHub + Vercel + tên miền **phải thuộc BAIKA**, Thắng có quyền admin. Đây là **điểm hỏng duy nhất không sửa được** — phải xử lý trước launch.
2. **`CLAUDE.md` ở gốc repo** — Claude Code đọc tự động mỗi phiên. Biến "agent lạ" thành "agent đã biết dự án" ngay câu đầu. Thứ đáng giá nhất trong cả phương án.
3. **Hàng rào:** không push thẳng `main` · mọi thay đổi qua Vercel Preview để Thắng nhìn tận mắt · ảnh chụp chuẩn 9 trang để bắt lỗi lan · build gãy khi sai hằng số nội dung.
4. **Ba việc Thắng phải tự làm được:** xem site còn sống không · **bấm Promote bản deploy cũ để quay lui** · đọc link Preview và nói có/không. Việc thứ hai là **phanh khẩn cấp** — 30 giây, không cần code, không cần ai.
5. **Thiết kế trước, dựng sau** với mọi thay đổi thêm/bớt khối. Đi tắt thì Agent tự chế layout và site mất nhất quán.

**Rủi ro còn lại, đã xếp hạng:** tài khoản nằm sai người 🔴 · tên miền hết hạn 🔴 · Agent sửa sai không ai phát hiện 🟠 · không gọi được Agent 🟡 *(site vẫn chạy, chỉ không sửa được)* · thư viện cũ 🟢 *(không ảnh hưởng bản tĩnh đang chạy)*.

**Việc tiếp theo — chặn Production, không chặn Build:**
tạo GitHub + Vercel thuộc BAIKA · xác nhận quyền tên miền + bật tự động gia hạn · Agent viết `CLAUDE.md` · bật bảo vệ nhánh `main` · lưu bộ ảnh chụp chuẩn · Thắng tập thao tác quay lui một lần.

---

## DEC-018 · Nền tảng project = REBUILD hoàn toàn · Context Reconciliation

*23/09/2026 · Người quyết: Thắng · Phase: Context Reconciliation (SKILL v3.3 mục 3.9–3.10, 5A)*

**Đính chính nền tảng — Thắng khai báo 23/09:**

> BAIKA WEBSITE là website **rebuild hoàn toàn từ đầu**. Thứ duy nhất kế thừa từ trước project là **domain `baika.vn`**.

`baika.vn` hiện tại **chỉ là** `CURRENT-STATE REFERENCE / AUDIT SOURCE` — để kiểm tra hiện trạng, phát hiện vấn đề, ghi nhận thứ cần tránh. **Không** phải source codebase · design baseline · implementation baseline · architecture baseline · component baseline · asset baseline.

**Cấm:** migrate code · reuse code · inherit architecture / HTML / CSS / asset / component / UI / implementation pattern — trừ khi Thắng chủ động yêu cầu.
**Cấm:** hiểu vấn đề của website cũ thành requirement của website mới.

**Hạ tầng:** GitHub repository và Vercel project **chưa tồn tại**, sẽ tạo mới ở đúng phase. Không giả định có sẵn repo / deployment / pipeline.

**Source of truth của website mới:** Figma mới → Design Spec → Implementation Spec → decision log hiện hành → project instructions. **Website cũ không nằm trong danh sách này.**

### Ba mâu thuẫn còn mở — Agent KHÔNG tự quyết

| Mã | Mâu thuẫn | Vì sao phải hỏi |
| --- | --- | --- |
| **F-01** | **Slug 7 trang.** Spec ghi *"giữ nguyên URL cũ"* — kế thừa từ site cũ | SEO + business intent. Giữ thì giữ được uy tín Google; đổi thì mất và phải làm 301 |
| **F-02** | **Font mono.** Design Spec ghi `Geist Mono` vì *"có sẵn trên site đang chạy"*; Figma dùng `Be Vietnam Pro MONO` | Design intent. Lý do của spec là kế thừa site cũ — không còn hiệu lực |
| **F-03** | **Quyền hạ tầng `baika.vn` hiện tại.** I03 ghi *"công ty đang nắm quyền hạ tầng"* nhưng chưa ai xác minh | Quyết định được bước cắt chuyển ở mục 8 Implementation Spec. Không có quyền DNS thì không trỏ được tên miền |

### Không decision nào bị đổi

`DEC-001` … `DEC-017` **giữ nguyên toàn bộ**. Reconciliation này chỉ đồng bộ **văn bản** với các decision đã có và với nguyên tắc REBUILD.

**Báo cáo đầy đủ:** `.website-agent/reports/context-reconciliation-2026-09-23.md`

---

## DEC-019 · F-01 ĐÓNG · Giữ nguyên 7 slug cũ

*23/09/2026 · Người quyết: Thắng — *"Nếu có thể giữ thì giữ"**

**Chốt:** giữ nguyên 7 slug, đặt ở gốc, không thư mục cha, **không cần redirect**.

```
/advisory · /remote-ops · /marketing · /finance · /legal-tax · /ai-os · /ceo-blueprint
```

**Vì sao được phép giữ dù đây là REBUILD:** slug **không phải** code, design hay architecture — nó là **định danh công khai của trang trên Internet**, cùng loại với domain. Giữ nó là giữ uy tín Google đã tích luỹ và giữ mọi link ai đó đã chia sẻ. Đây không phải "kế thừa site cũ", mà là **giữ tài sản của BAIKA**.

**Phương án đã loại:** đặt slug mới — mất uy tín Google, phải dựng và bảo trì bảng 301 redirect, không được lợi gì.

**Việc tiếp theo:** trước khi cắt chuyển, mở Google Search Console *(hoặc `site:baika.vn` trên Google)* xác nhận 7 URL đó đang thật sự được Google lập chỉ mục. Nếu có URL nào chưa index thì việc giữ nó không mang lại gì — nhưng cũng không mất gì.

**Trang `Liên hệ`** chưa có slug — sẽ đặt mới, không có gì để giữ. Đề xuất `/lien-he`.

---

## DEC-020 · F-03 ĐÓNG · Sếp giữ hạ tầng `baika.vn` hiện tại

*23/09/2026 · Thắng xác nhận: **"Sếp"***

**Trạng thái:** hosting + DNS của `baika.vn` hiện tại do **sếp (Alviss)** nắm, không phải Thắng, không phải một đơn vị ngoài.

**Tốt hơn kịch bản xấu nhất** — không phải bên thứ ba lạ, và người nắm là người trong công ty.

### ⚠️ Nhưng đây là **cùng một nút chặn với luồng D**

| | Luồng D — Notion | Luồng E — hạ tầng web |
| --- | --- | --- |
| Tài sản nằm ở | Workspace của sếp | Tài khoản của sếp |
| Thắng có | Quyền khách (guest) | *Chưa biết* |
| Chặn ở bước | Tạo integration | **Trỏ tên miền sang bản mới** |
| Đã chờ | Từ 26/08, chưa được | — |

Vụ Notion cho thấy **xin quyền từ sếp có thể mất nhiều tuần hoặc không được**. Nếu bước trỏ tên miền cũng phải chờ như vậy, site Astro dựng xong sẽ **nằm im ở địa chỉ Vercel tạm**, không ai thấy.

**Việc phải làm sớm — không đợi tới lúc launch:**

1. Hỏi sếp **ngay bây giờ**, không đợi build xong: *"Khi bản web mới xong, ai sẽ là người trỏ tên miền `baika.vn` sang bản mới? Em cần chuẩn bị gì trước?"*
2. Làm rõ **ba quyền tách biệt** — nhầm lẫn giữa chúng chính là lỗi đã mắc ở luồng D:
   - **Quyền đăng ký tên miền** *(nhà đăng ký — ai trả tiền gia hạn)*
   - **Quyền DNS** *(ai thêm/sửa được bản ghi trỏ tên miền)*
   - **Quyền hosting hiện tại** *(ai tắt được site cũ)*
   Chỉ cần **quyền DNS** là đủ để trỏ sang Vercel. Không cần hai cái kia.
3. Xác nhận **tên miền có tự động gia hạn không** — đây là thứ duy nhất làm site chết hẳn.

**Ghi nhận rủi ro:** `baika.vn` là tài sản của công ty nhưng **Thắng không tự thao tác được**. Với một người phụ trách toàn bộ website mà không có quyền DNS, mọi bước cuối đều phụ thuộc người khác. Không chặn Build, nhưng **chặn Production** — và cần bắt đầu xin từ bây giờ, không phải lúc cần.

---

## DEC-021 · F-02 → mở rộng · Đo lại toàn bộ typography trong Figma, phát hiện 3 sai lệch

*23/09/2026 · Đo trực tiếp 1367 text node trên page `UI` **[xác minh]***

Thắng hỏi: *"Font mono sinh ra để làm gì, có cần thiết không, hiện tại trên bản Design Figma có không?"*
→ Đo xong, câu trả lời làm lộ thêm hai vấn đề lớn hơn.

### F-02 · Chữ mono **KHÔNG tồn tại trong thiết kế** — 0/1367 node

| | |
| --- | --- |
| Số text node dùng font mono | **0** |
| Style tên `label-mono` | Font thật là **Be Vietnam Pro / Light 11** — *không phải mono* |

**Style `label-mono` đang nói dối tên của nó.** Ai đọc tên sẽ tưởng là chữ đẳng chiều; thực tế nó chỉ là Be Vietnam Pro cỡ 11 Light.

**Mono sinh ra để làm gì:** chữ đẳng chiều *(mọi ký tự rộng bằng nhau)* dùng để **số liệu thẳng cột, dễ so sánh, dễ dò** — bảng số, mã, ID, nhãn kỹ thuật. Quy ước ClearWork *"chữ mono = thứ kiểm chứng được"* là vậy: nhìn thấy mono là biết đây là **số đo được**, không phải lời quảng cáo.

**Mâu thuẫn với luật dự án:** project instructions mục 1 ghi *"Chữ mono = thứ kiểm chứng được"* là **quy ước bất di bất dịch, không được phá**. Nhưng thiết kế hiện tại **không có chữ mono nào**. Một trong hai phải đổi.

### 🔴 F-04 · `Chakra Petch` — font thứ hai, spec chưa từng ghi

| Text style | Font thật | Spec ghi |
| --- | --- | --- |
| `display-1` 80 · `display-2` 48 | Be Vietnam Pro | ✅ khớp |
| **`H-1` 32 · `H-2` 24 · `H-3` 19** | **Chakra Petch** | ❌ spec ghi *"toàn site Be Vietnam Pro"* |
| `body-lg` 17 · `body` 15 · `caption` 13 · `label-mono` 11 | Be Vietnam Pro | ✅ khớp |

**486 text node dùng Chakra Petch.** Cả Design Spec lẫn `ban-giao-ky-thuat.md` đều ghi *"Toàn site: Be Vietnam Pro"* — **sai**.

Đã kiểm: Chakra Petch **render tiếng Việt có dấu bình thường** *(Pháp lý · Giai đoạn · Hệ thống)*, 0 node bị fallback font. Không có lỗi kỹ thuật.

Nhưng nó là **quyết định thiết kế chưa ai ghi lại**: site có **hai họ chữ** — Be Vietnam Pro cho chữ thường và chữ hero, Chakra Petch cho tiêu đề H1–H3.

### 🟠 F-05 · `Noto Sans` — 121 node, toàn bộ nằm trong component form

Không có text style nào dùng Noto Sans. Nó xuất hiện ở: `Tên` · `Email` · `Số điện thoại` · `Đơn vị / Doanh nghiệp` · `Lĩnh vực` · `Mô tả vấn đề` · `gợi ý` — tức **toàn bộ chữ bên trong `Text field` `588:6238`**.

Nghĩa là **khối form — điểm chuyển đổi chính của cả 7 trang — đang dùng một font không nằm trong thang chữ**, và không gán text style nào.

Thêm: node `gợi ý` cỡ **10px** — ngoài thang chữ *(bậc nhỏ nhất là 11)*.

### Trạng thái

**F-02 · F-04 · F-05 đều là DESIGN INTENT → Agent không tự quyết.** Xem câu hỏi gửi Thắng trong phiên 23/09.

Spec đã được sửa để **ghi đúng hiện trạng đo được**, và đánh dấu ba mục này `CHƯA CHỐT`.

---

## DEC-022 · ĐÍNH CHÍNH · Shadow, Spacing, Radius ĐỀU CÓ TOKEN — Agent kết luận sai ngày 23/09

*23/09/2026 · Agent tự phát hiện và sửa*

### Sai ở đâu

Trong `DEC-014` và `ban-giao-ky-thuat.md` mục 5.7, Agent viết:

> *"Giá trị bóng đổ **không nằm trong token nào** — `#999999/50` · `#000000` · `#FFFFFF/50` đều viết thẳng trong file. File chưa từng có token cho shadow."*

**Sai hoàn toàn.**

**Nguyên nhân:** Agent đọc `node.effects` (giá trị thô) nhưng **không đọc `node.effectStyleId`** (có gán style hay không). Thấy số thô thì kết luận là hardcode. Đây đúng là lỗi *"rút kết luận từ dữ liệu một chiều rồi trình bày như sự thật"* mà `tech-log` 26/08 đã ghi làm bài học.

### Sự thật — đo lại 23/09 **[xác minh]**

**File có 7 effect style cho bóng đổ:**

| Style | Giá trị |
| --- | --- |
| `Global Tokens/--shadow-1` | `DROP_SHADOW` r2 s0 off(0,2) `#000000/10` |
| `Global Tokens/--shadow-2` | `DROP_SHADOW` r4 s0 off(2,3) `#000000/30` |
| `Global Tokens/--shadow-3` | `DROP_SHADOW` r5 s0 off(4,6) `#000000/40` |
| `Global Tokens/--shadow-4` | `DROP_SHADOW` r10 s0 off(6,8) `#000000/60` |
| `Shadow/Inner` | `INNER_SHADOW` r6 s0 off(0,−4) `#999999/50` |
| `Shadow/Inner Press` | `INNER_SHADOW` r12 s4 off(0,4) `#000000/100` |
| `Shadow/Drop-Inner` | `Shadow/Inner` + `DROP_SHADOW` r6 s1 off(0,0) `#FFFFFF/50` |

**`Button 26:2182` đã gán style đúng cho từng trạng thái:**

| Trạng thái | Effect style | Fill style | Stroke style |
| --- | --- | --- | --- |
| `Normal` | `--shadow-1` | — | — |
| `Hover` | `Shadow/Inner` | `Liner/BG/Button - 1` | `Liner/Stroke/Light` |
| `Active` | **`Shadow/Inner Press`** | `Liner/BG/Button - 1` | `Liner/Stroke/Light` |
| `Focus` | **`Shadow/Drop-Inner`** | `Liner/BG/Button - 1` | `Liner/Stroke/Light` |
| `Loading` · `Disabled` | — | | |

→ Ba cơ chế *nổi / chìm / vòng sáng* ở `DEC-014` **đã được token hoá sẵn** với tên nói đúng nghĩa. Thắng làm chuẩn hơn Agent tưởng.

### Hai nhóm token nữa spec chưa bao giờ ghi

**`Spacing/` — 12 bậc:** `--s-1` 4 · `--s-2` 8 · `--s-3` 12 · `--s-4` 16 · `--s-5` 20 · `--s-6` 24 · `--s-8` 32 · `--s-10` 40 · `--s-12` 48 · `--s-16` 64 · `--s-20` 80 · `--s-24` 96

**`Radius/` — 6 bậc:** `--r-xs` 4 · `--r-sm` 8 · `--r-md` 12 · `--r-lg` 16 · `--r-xl` 24 · `--r-pill` 999

**Grid style:** `sm` · `md` · `lg` · `xl` · `2xl`
**Paint style:** `Liner/Stroke/Light` · `Liner/Stroke/Black` · `Liner/BG/Button - 1`
**Effect style khác:** `LayerBlur/Uniform/6…500` · `LayerBlur/Progessive/60`

Cả Design Spec lẫn Implementation Spec đều **chưa từng nhắc** tới spacing, radius, grid, paint style. Đây là thiếu sót nghiêm trọng của bản 21/09 — nếu Build mà không biết, Agent sẽ tự chế thang spacing, vi phạm luật *"không tạo spacing mới"*.

### Việc Agent phải sửa

`Checkbox 29:2685` do **Agent dựng ngày 22/09 — không gán effect style nào**, dùng giá trị thô. Đây là lỗi của Agent, không phải của Thắng.

⚠️ Nhưng không sửa được ngay: `Checkbox/Focus` dùng `DROP_SHADOW #FFFFFF/100 r2 s0`, **không khớp style nào có sẵn**. `Shadow/Drop-Inner` có kèm inner shadow mà checkbox không cần.

→ **Cần Thắng quyết:** tạo style mới `Shadow/Focus Ring` *(`DROP_SHADOW #FFFFFF r2`)* để Checkbox và các component nhỏ dùng chung, hay đổi Checkbox sang `Shadow/Drop-Inner`? Theo luật *"thiếu token thì nêu ra và hỏi, không tự chế"* — Agent nêu, không tự tạo.

**Bài học ghi lại:** khi kiểm tra một thuộc tính trong Figma, phải đọc **cả giá trị lẫn styleId**. Giá trị thô hiện ra không có nghĩa là không có token — nó có thể đang được kế thừa từ style.

---

## DEC-023 · F-04 ĐÓNG · Hai họ chữ — Be Vietnam Pro + Chakra Petch

*23/09/2026 · Thắng xác nhận: **"Display vẫn là BeVN Pro. Các heading đã đổi qua thành Chakra Petch"***

**Luật typography chính thức của site mới:**

| Vai trò | Font | Text style |
| --- | --- | --- |
| **Chữ hiển thị lớn** | **Be Vietnam Pro** | `display-1` 80 SemiBold · `display-2` 48 Bold |
| **Tiêu đề** | **Chakra Petch** | `H-1` 32 Bold · `H-2` 24 Bold · `H-3` 19 Medium |
| **Chữ thường** | **Be Vietnam Pro** | `body-lg` 17 · `body` 15 · `caption` 13 · `label-mono` 11 |

Đây là **chủ ý**, không phải lỗi. Bản spec 21/09 ghi *"toàn site Be Vietnam Pro"* — **đã sửa**.

*Chakra Petch render tiếng Việt có dấu bình thường, 0 node fallback **[xác minh]**. Khi build phải nạp đủ subset `vietnamese` cho cả hai font, nếu không dấu sẽ rơi sang font hệ thống.*

---

## DEC-024 · F-02 ĐÓNG · Bỏ toàn bộ quy ước kế thừa từ ClearWork

*23/09/2026 · Thắng chốt: **"hãy bỏ qua gần như tất cả quy ước của cái ClearWork này, nó đã là cái cũ, t đang làm phiên bản hoàn toàn mới"***

**Chốt:** ClearWork **không còn là nguồn luật** cho bất kỳ phần nào của website mới. Cùng logic với `DEC-018` — đây là REBUILD, và ClearWork là tài sản của thế hệ trước.

### Hai quy ước bị bỏ

| Quy ước | Trạng thái trong Figma | Kết luận |
| --- | --- | --- |
| **Vàng `--mark` = "chỗ còn thiếu", không trang trí** | ❌ **Không có token nào tên `mark`** trong file. Chỉ có `Colors/Yellow/100,200` mang nghĩa màu trạng thái | **BỎ.** `D03` (*"vàng trụ Tư vấn ≠ `--mark`"*) trở thành **vô nghĩa** — không còn `--mark` để mà xung đột |
| **Chữ mono = "thứ kiểm chứng được"** | ❌ **0/1442 node** dùng font mono. Style `label-mono` là Be Vietnam Pro Light 11 | **BỎ.** Nhưng style vẫn mang tên `label-mono` → **đề nghị đổi tên** thành `label` hoặc `label-sm`, vì tên đang nói dối |

### Hệ quả — Thắng phải sửa project instructions

Mục 1 hiện ghi:

> *"Hai quy ước kế thừa từ prototype ClearWork, **không được phá**: Vàng (`--mark`) = "chỗ còn thiếu" · Chữ mono = "thứ kiểm chứng được""*

**Phải gỡ cả đoạn này.** Để nguyên thì phiên nào cũng có Agent báo mâu thuẫn giữa instructions và file thật.

**Luật vẫn giữ:** *"không tạo bảng màu / typography / spacing mới. Thiếu token thì nêu ra và hỏi, không tự chế."* — luật này **không** đến từ ClearWork, nó là luật vận hành design system. Giữ nguyên.

---

## DEC-025 · Kiểm kê quy ước cũ — cái nào còn, cái nào mất

*23/09/2026 · Đo trực tiếp toàn bộ variable collection, paint style, effect style, grid style **[xác minh]***

Thắng yêu cầu: *"liệt kê các quy tắc cũ trên ClearWork mà ở file Design hiện tại đang không có để t xác nhận lại 1 lần nữa là t thực sự bỏ hay là t quên."*

### ❌ ĐÃ MẤT — Thắng xác nhận bỏ hay quên

| # | Quy ước cũ | Nguồn ghi | Hiện trạng đo được |
| --- | --- | --- | --- |
| 1 | **Token `--mark-*`** *(vàng = chỗ còn thiếu)* | `project-brief` mục 3 · instructions mục 1 | **Không tồn tại.** → `DEC-024` chốt BỎ ✅ |
| 2 | **Chữ mono** | như trên | **0 node.** → `DEC-024` chốt BỎ ✅ |
| 3 | **Token `--brand`** *(xanh logo, đổi từ xanh ngọc ClearWork)* | `project-brief` mục 3 | **Không có biến tên `brand`.** Có `Colors/Primary/--blue-50…950` (11 bậc) — có thể là nó dưới tên khác. ⚠️ **Cần Thắng xác nhận** |
| 4 | **Prefix `b-` cho component** | instructions luồng A checklist | **0 component dùng prefix `b-`.** ⚠️ Checklist luồng A vẫn hỏi *"Tên nhất quán với prefix `b-`?"* — câu hỏi này vô nghĩa với file hiện tại |
| 5 | **Token 2 mode `light` / `Dark`** | `component-inventory` 26/08 | **Chỉ còn mode `light`.** Hợp lý vì site nền tối, nhưng cần ghi rõ để không ai đi tìm mode Dark |
| 6 | **Paint style `Skeleton`** | `component-inventory` 7.1 (26/08) | **Không còn.** Dùng cho trạng thái Loading. ⚠️ Site tĩnh gần như không cần — nhưng form có `Submitting` |
| 7 | **Nguyên tắc content/voice** *(trong design system HTML gốc)* | `design-log` 06/08 | **Không nằm trong Figma.** Nếu còn muốn giữ giọng văn BAIKA thì phải ghi ở tài liệu khác |
| 8 | **"68 token · 34 component · 7 pattern"** | `project-brief` mục 4 | **Sai số.** Thực tế: **78 biến** trong 1 collection. `project-brief` mục 4 lỗi thời |

### ✅ CÒN — đang dùng thật

`Colors/Red/100,200` · `Colors/Yellow/100,200` · `Colors/Green/100,200` — bộ màu **trạng thái**. `Red/200` đang dùng cho `Checkbox/Error` ✅. Yellow và Green **chưa thấy dùng ở đâu**.

### ⚠️ CÒN NHƯNG NGHI LÀ RÁC KẾ THỪA — cần Thắng quyết

| Nhóm token | Số biến | Vấn đề |
| --- | --- | --- |
| `Colors/Primary/--blue-50…950` | 11 | Thang xanh dương. Trang chủ có theme xanh dương–xanh ngọc → **có thể đang dùng**, hoặc là `--brand` cũ bỏ quên. Cần kiểm |
| `Colors/Neutral 1/--slate-50…950` | 11 | **Trùng vai trò với `Colors/Neutral 2/--gray-*`.** Hai thang xám song song — `slate` ngả xanh (cũ), `gray` trung tính thuần (mới, đang dùng). Đây là vết tích chuyển đổi chưa dọn |

→ **22 biến trên tổng 78 (28%)** đang ở trạng thái không rõ còn dùng hay không. Nếu bỏ quên, chúng sẽ được xuất sang CSS và nằm đó mãi.

### 🆕 CÓ NHƯNG SPEC CHƯA BAO GIỜ GHI — xem `DEC-022`

`Spacing/--s-1…24` (12 bậc) · `Radius/--r-xs…pill` (6 bậc) · 7 effect style bóng đổ · 5 grid style · 3 paint style.

**Đây là thiếu sót của spec 21/09, không phải của Thắng.** Đã bổ sung vào Design Spec.

---

## DEC-026 · Gỡ 5 mục chặn Release Candidate — 3 xong, 1 phản biện, 1 chốt

*23/09/2026 · Đo lại Figma sau khi Thắng sửa **[xác minh]***

### ✅ Đã gỡ

| Mục | Trước | Sau (đo 23/09) |
| --- | --- | --- |
| **Trang `Liên hệ`** | ❌ chưa vẽ | ✅ **Section `Contact` `634:3537`** — đủ 3 breakpoint: `1280×832` · `768×1167` · `375×1368`. ⚠️ Frame 768 đang **đặt tên `Desktop`** (đúng ra là `Tablet`) — tên này sẽ thành tên file/component khi build |
| **`Planet` 1 variant màu** | `Colors = Pháp lý` — 7 trang dùng chung 1 variant màu đỏ | ✅ **`Colors = Main`** — 1 variant trắng xám dùng chung cho cả 7 trang. Đây là **chủ ý**, không phải thiếu. *Lỗi cũ chỉ là tên variant chưa đổi* |
| **`Các gói` thiếu `Hover`** | `Desktop·Mobile·Tablet` × `Default·Focus` | ✅ Thắng đã thêm `Hover` cho Desktop |
| **Asset hero** | chưa chốt định dạng | ✅ Thắng chốt: **"CSS/SVG tốt hơn thì dùng nó, nhớ đảm bảo UI"** → `V-01` vòng cung = SVG inline · `V-02` dải sao = CSS `radial-gradient` lặp. **Điều kiện nghiệm thu: so ảnh chụp với Figma, khác biệt nhìn thấy được thì quay lại raster** |

### ⚠️ Chưa xong hẳn — `F-05` font form

Thắng báo *"đã chuẩn hoá lại bằng System body"*. Đo lại: **còn 66 node Noto Sans**.

| Node | Font hiện tại | Số lượng |
| --- | --- | --- |
| `gợi ý` *(helper text)* | **Noto Sans / Medium 10px** | 42 |
| `nội dung` *(label trường)* | **Noto Sans / Regular 15px** | 24 |

Phần đã sửa: `Be Vietnam Pro / Regular 15` — 13 node trong `Text field 588:6238`.
→ Có vẻ chỉ đổi ở component gốc, **các instance rải rác chưa theo**. Và `gợi ý` 10px vẫn ngoài thang chữ *(bậc nhỏ nhất 11 = `label-mono`)*.

### 🔴 CHƯA gỡ — `FAQ Items` `230:3231`

Thắng đã đổi tên `Default | Variant2` → **`Close | Open`** ✅ *(tên giờ mang nghĩa)*.

Nhưng vẫn **chỉ có 2 variant**, thiếu `Hover` và `Focus`. Thắng hỏi: *"FAQ thường chỉ có close với open thôi chứ nhỉ?"*

**Agent phản biện — xem mục dưới.**

### 🔴 CHƯA gỡ — trạng thái cả khối form

Thắng hỏi: *"nghĩa là làm cái pop-up cho form này để user biết trạng thái sau khi bấm gửi hả?"*
→ **Không nhất thiết là pop-up.** Xem giải thích trong phiên 23/09. Vẫn chặn RC.

---

## DEC-027 · Thắng là người quyết thay Tuấn · Đã cập nhật `project-brief.md` và `claude/sitemap.md`

*23/09/2026 · Thắng chốt: **"Tuấn đã out nên toàn bộ chân lý liên quan đến hỏi Tuấn thì Thắng sẽ là người quyết định"***

Đây là mục **B — Needs confirmation** trong Context Reconciliation 23/09. Nay đã được cấp quyền → chuyển sang **A — đã sửa**.

### `project-brief.md` — đã sửa 6 chỗ

| Mục | Trước | Sau |
| --- | --- | --- |
| Đầu file | — | Thêm banner: **không có dev · Thắng quyết · REBUILD hoàn toàn** |
| 1 · Tổng quan | *"Nền tảng kỹ thuật [cần xác nhận] — **hỏi Tuấn**"* | **Astro + TypeScript · Vercel** (`DEC-001`) + dòng *người dựng* + *người quyết* |
| 3 · ClearWork | Hai quy ước *"bất di bất dịch"* | Khối cảnh báo **ĐÃ BỎ TOÀN BỘ** (`DEC-024`), kèm bảng đo được |
| 4 · Bảng luồng | Trạng thái 26/08 | Cập nhật cả 4 luồng · sửa *"68 token"* thành **78 biến** |
| 5b · Luồng E | *"Phối hợp: **Tuấn** — người dựng web"* | Thắng quyết · agent dựng · **4 câu hỏi cũ đã trả lời hết** |
| 6 · Ràng buộc | *"Nền tảng: [cần xác nhận] — **hỏi Tuấn**"* | 6 ràng buộc thật: stack · không dev · hạ tầng sếp nắm · GitHub/Vercel chưa có |
| 7 · Sửa sai | Một bài học (landing page ClearWork) | Thêm **bài học thứ hai** — vụ Agent kết luận sai về shadow token (`DEC-022`) |
| 8 · Cần xác nhận | 10 mục, 4 mục đã có câu trả lời | Chia **✅ đã trả lời (9) · 🔴 chặn (5) · 🟠 chặn RC (3) · 🟡 luồng D (3)** |

### `claude/sitemap.md` — đã sửa

Thêm **banner đọc-trước** ở đầu, phân loại từng mục còn dùng được hay không:

| Phần | Kết luận |
| --- | --- |
| Mục 1 — URL + làm rõ 8 Trụ | ✅ còn dùng |
| Mục 2 — trang chủ vũ trụ 3D | ❌ không còn — trang chủ mới là lưới bento |
| Mục 3 — khung S0…S17 | ❌ không còn — trang mới có **7 khối** |
| Mục 4 — chi tiết 7 trang | ⚠️ tham khảo nội dung, không phải bố cục |
| Mục 5 — hệ màu trụ | ✅ đã giải bằng `Colors/Page/*` |
| Mục 6 — lỗi lặp section | ❌ **đóng** — lỗi của site cũ, site mới không kế thừa (`DEC-018`) |

Mục 7 · 8 · 9 viết lại theo hiện trạng. Thêm **mục 10** — câu hỏi chặn launch mới phát hiện.

### 🔴 Phát hiện mới trong lúc rà — câu hỏi chặn launch

**Trang chủ có 9 ô bento có nhãn**: 7 dịch vụ + `Trạm Ý Tưởng` + `Trạm Kết Nối`.
Nhưng **cả hai ô sau đều ngoài phạm vi v1**.

→ Khi launch, **2 trong 9 ô trên trang chủ sẽ là link chết**. Trang chủ là nơi khách vào đầu tiên; đây là thứ ai cũng thấy.

Chưa ai từng đặt câu hỏi này — nó lọt qua vì phạm vi v1 được thu hẹp *sau khi* trang chủ đã được duyệt. **Cần Thắng chốt trước khi Build trang chủ.**

Ba đường ra ghi ở `claude/sitemap.md` mục 10.

### Còn lại — Thắng tự sửa, Agent không làm được

**Project instructions** *(nạp lại mỗi tin nhắn, Agent không sửa được)*:

1. **Mục 1 — gỡ đoạn "hai quy ước ClearWork bất di bất dịch"** *(`DEC-024`)*
2. **Mục 1 — cập nhật bảng Nguồn chân lý**, hiện thiếu 7 file mới
3. **Mục 3 luồng A — bỏ câu hỏi `prefix b-`** *(0 component dùng)*
4. **Mục 8 — cập nhật Thông tin còn thiếu**

Đoạn dán sẵn cho mục 1 và mục 8 đã gửi Thắng ngày 23/09.

---

## DEC-028 · F-02/F-05 ĐÓNG · Token cũ giữ nguyên · Font chuẩn hoá xong

*23/09/2026 · Thắng chốt + Agent thực hiện trong Figma*

### Thắng chốt

| Câu | Trả lời |
| --- | --- |
| Token `--brand` | **Chính là `Colors/Primary/--blue-50…950`.** Không phải rác — nó là thang thương hiệu, đổi tên khi chuyển sang Figma |
| `Colors/Neutral 1/--slate-*` và các nhóm chưa dùng | **Giữ hết.** *"Hiện tại đang xài hết ở Gray thì làm theo Gray, các biến màu khác có nhưng chưa dùng cứ xuất sang như vậy luôn"* |
| Content/voice của ClearWork | **Không khôi phục.** Content là những gì đang có trên bản Design Figma, giữ nguyên |

→ **Toàn bộ 78 biến được xuất sang CSS**, không cắt bớt. Vỏ site dùng `--gray-*`; `--blue-*`, `--slate-*`, `Yellow`, `Green` xuất ra nhưng chưa dùng. **Không còn mục "22 biến nghi là rác"** — `DEC-025` mục ⚠️ đóng.

*Ghi chú cho Build: xuất đủ 78 biến là đúng yêu cầu, nhưng nên tách 2 file — `tokens.css` (đang dùng) và `tokens-reserve.css` (dự phòng) — để người đọc code biết cái nào là luật, cái nào là kho. Nếu Thắng không muốn tách thì xuất một file, ghi chú bằng comment.*

### Agent đã làm trong Figma

**1 · Chuẩn hoá font — XONG.** `Noto Sans` còn **0 node** *(trước: 66)*.

| Node | Trước | Sau |
| --- | --- | --- |
| `nội dung` × 12 | Noto Sans Regular 15 | text style `Global Tokens/Body/body` — Be Vietnam Pro Regular 15 |
| `gợi ý` × 32 | Noto Sans Medium **10** | text style `Global Tokens/Body/label-mono` — Be Vietnam Pro Light **11** |

Cả hai giờ **gán text style**, không phải giá trị thô. Toàn page chỉ còn 2 họ chữ: **Be Vietnam Pro 912** · **Chakra Petch 515**.

**2 · `Button 1` `519:3354` → 18 variant.**

```
State = Normal | Hover | Active | Focus | Loading | Disabled
Type  = Sm | Md | Lg
```

- `Default` đổi tên thành **`Normal`** cho khớp `Button 2`
- 12 variant mới, áp đúng luật `DEC-014` `DEC-015`: `Hover` = `Shadow/Inner` · `Active` = `Shadow/Inner Press` · `Focus` = `Shadow/Drop-Inner` · `Disabled` = `--gray-700`, không giảm opacity
- Bỏ grid layout của component set → đặt thủ công 3 cột × 6 hàng, giống `Button 2`
- Đã ghi `description` cho set, kèm câu **"không dùng lẫn với Button 2"**

⚠️ **Giữ tên cỡ `Sm | Md | Lg`** *(không đổi sang `Small | medium | Large` của `Button 2`)* — tên của `Button 1` sạch hơn. Hai bộ lệch tên trục cỡ; nên thống nhất, nhưng đổi `Button 2` động tới 39 instance nên Agent không tự làm.

**3 · Section `Form States` `645:3184`** — 3 frame, clone từ form thật trang Pháp lý nên style khớp 100%:

| Frame | Nội dung |
| --- | --- |
| `Form · Submitting` | Nút → `Loading`, mọi trường → `Disabled` |
| `Form · Success` | Cả form **biến mất**, thay bằng khối xác nhận: badge ✓ · *"Đã nhận thông tin của bạn"* · *"BAIKA sẽ liên hệ trong 24 giờ làm việc"* · link *"Gửi một yêu cầu khác"*. Nền `Colors/Green/200` 12%, viền đặc |
| `Form · Error` | Dải báo lỗi **ngay trên nút Gửi**, nền `Colors/Red/200` 12% + viền đỏ. Ô `Số điện thoại` → `State=Error`, checkbox → `State=Error`. **Mọi dữ liệu đã gõ giữ nguyên** |

**Không tạo token mới** — dùng `Colors/Green/200` và `Colors/Red/100,200` đã có.

### 🔴 Phát hiện khi dựng — `Text field` có hai lỗi trạng thái

Đo `588:6238` **[xác minh]**:

| Variant | Nền | Chữ | Vấn đề |
| --- | --- | --- | --- |
| `Default` | `#D5D5D5@25` | `#F8F8F8` | — |
| `Focus` | `#D5D5D5@50` | `#F8F8F8` | ⚠️ **không có quầng sáng** — trái `DEC-014` |
| `Disabled` | `#D5D5D5@25` | `#6D6D6D` | — |
| **`Error`** | `#D5D5D5@25` | `#6D6D6D` | 🔴 **TRÙNG KHÍT `Disabled`** |

**1 · `Error` ≡ `Disabled`.** Ô báo lỗi trông y hệt ô bị khoá. Người dùng sẽ tưởng *"ô này không cho nhập"* thay vì *"ô này nhập sai"* — hiểu ngược hẳn, và họ sẽ không sửa. Đây là lỗi **nặng hơn việc không có trạng thái Error**, vì nó dẫn sai chủ động.

**Cách sửa đề xuất:** `Error` = viền `Colors/Red/200` 1px + chữ giữ `--gray-50` *(người dùng phải đọc được thứ mình vừa gõ)* + dòng `gợi ý` hiện ra, đổi màu `Colors/Red/100`.

**2 · `Focus` chỉ tăng độ mờ nền 25% → 50%.** Đó là ngôn ngữ *"sáng lên"* = `Hover` theo `DEC-014`. Trường nhập không có `Hover`, nên không đụng nhau — nhưng nó **lệch với luật "quầng sáng trắng = Focus"** của cả hệ.

**Agent không tự sửa** — đây là design intent trên component gốc, 7 trang đều dùng.

---

## DEC-029 · Rà lại Figma 24/09 — 2 mục đã sửa, 2 mục chưa

*24/09/2026 · Đo trực tiếp **[xác minh]***

### ✅ Thắng đã sửa

| Mục | Trước | Sau |
| --- | --- | --- |
| **Section `Contact` frame 768** | đặt tên `Desktop` | ✅ **`Tablet`** — đủ bộ `Desktop 1280` · `Tablet 768` · `Mobile 375` |
| **`Form · Success` — badge ✓** | Agent dựng bằng ký tự `✓` trong vòng tròn đặc | ✅ Thay bằng **icon vector viền tròn** — sạch hơn hẳn bản Agent dựng |
| **`Form · Error` — dải báo lỗi** | kéo full width 800px | ✅ **Hug theo nội dung** — gọn, không trông như một khối cảnh báo toàn trang |

### ❌ `Text field` `588:6238` — CHƯA đổi, đo lại vẫn y nguyên

| Variant | Nền | Chữ | Viền | Hiệu ứng |
| --- | --- | --- | --- | --- |
| `Default` | `#D5D5D5@25` | `#F8F8F8` | — | — |
| `Focus` | `#D5D5D5@50` | `#F8F8F8` | — | — |
| `Disabled` | `#D5D5D5@25` | `#6D6D6D` | — | — |
| **`Error`** | `#D5D5D5@25` | `#6D6D6D` | — | — |

`Error` và `Disabled` vẫn **trùng khít từng giá trị một**. Nhìn thấy được ngay trong `Form · Error`: ô `Số điện thoại` bị đánh dấu lỗi trông y hệt một ô bị khoá.

`Focus` vẫn chỉ tăng độ mờ nền, **không có quầng sáng** — lệch luật `DEC-014`.

**Vẫn chặn Release Candidate.**

### Còn tồn — chưa đụng tới

| Mục | Trạng thái |
| --- | --- |
| `Checkbox 29:2685` chưa gán effect style | 10/10 variant dùng giá trị thô. Cần quyết: tạo `Shadow/Focus Ring` hay dùng `Shadow/Drop-Inner` |
| Text style `label-mono` | Chưa đổi tên. Tên vẫn nói dối font thật (Be Vietnam Pro Light) |
| Node rác trên page `UI` | `ádadads` `580:4085` · `Thêm overlay #000000 75%` `472:5903` · 2 frame `Pháp lý` `472:5041` `472:5473` · `gợi ý` `376:1588` — **vẫn còn cả 5** |
| Hai ô bento `Trạm Ý Tưởng` + `Trạm Kết Nối` | Vẫn có nhãn trên trang chủ, chưa chốt trỏ đi đâu. *Đo được: nhãn `TRẠM Ý TƯỞNG` xuất hiện **2 lần** trên bản desktop* |
| `Button 1 · Active` | Vẫn `Shadow/Inner Press` — chưa có ý kiến |

---

## DEC-030 · `Text field` ĐÓNG · Kiểm thử toàn spec 24/09

*24/09/2026 · Đo trực tiếp **[xác minh]***

### ✅ `Text field` `588:6238` — ba trạng thái giờ phân biệt rõ

| Variant | Nền | Viền | Chữ | Phân biệt được chưa |
| --- | --- | --- | --- | --- |
| `Default` | `#D5D5D5@25` | — | `#F8F8F8` | — |
| `Focus` | `#D5D5D5@50` | **gradient 1px** | `#F8F8F8` | ✅ nền sáng hơn + có viền |
| `Disabled` | `#D5D5D5@25` | — | **`#6D6D6D`** | ✅ chữ mờ, không viền |
| **`Error`** | `#D5D5D5@25` | **`#FB3748` 1px** | **`#F8F8F8`** | ✅ viền đỏ, **chữ sáng trở lại** |

Đúng cả ba điểm đã đề xuất: viền `Colors/Red/200` · **giữ chữ sáng** *(người dùng phải đọc được thứ vừa gõ để sửa)* · `Error` ≠ `Disabled` ≠ `Focus`.

`Focus` dùng **viền gradient** thay vì quầng sáng — khác cách `Button` làm, nhưng **vẫn phân biệt được và vẫn nhìn thấy**. Chấp nhận: trường nhập là hình chữ nhật lớn, viền đọc rõ hơn quầng sáng. Ghi lại để bàn giao không báo là lệch luật.

**Mục chặn Release Candidate này ĐÓNG.**

### 🔴 Phát hiện mới — breakpoint mobile vẫn lệch

`D01` chốt **mobile = 375** cho cả site. Đo 24/09:

| Section | Frame | Rộng |
| --- | --- | --- |
| `Home` | Mobile | **375** ✅ |
| `Contact` | Mobile | **375** ✅ |
| **`Mobile`** *(trang dịch vụ)* | `Tư vấn doanh nghiệp` · `Baika sẽ làm gì` | **390** ❌ |

Hai frame mẫu của trang dịch vụ vẫn là **390**. Nếu bàn giao như vậy, Build sẽ thấy hai con số và phải đoán — hoặc tệ hơn, dựng hai breakpoint khác nhau cho cùng một site.

**Sửa:** đổi hai frame đó về `375`, hoặc đổi `D01` sang `390` và sửa `Home` + `Contact`. Một trong hai, không để cả hai tồn tại.

### 🟠 `#FFFFFF` không nằm trong hệ token

Quét fill trên 7 trang dịch vụ + trang chủ: **579 chỗ bind token · 504 chỗ không**. Trong 504 chỗ đó, **503 là `#FFFFFF` trắng tinh**.

Thang xám sáng nhất của file là `--gray-50 = #F8F8F8`, **không có token nào bằng `#FFFFFF`**. Nghĩa là 503 chỗ đang dùng một màu **ngoài hệ**.

Phần lớn nằm trong icon và vector — không phải lỗi thẩm mỹ. Nhưng khi xuất CSS, đây sẽ là 503 giá trị viết cứng.

**Cần Thắng quyết:** (1) thêm token `--white = #FFFFFF` vào `Colors/Neutral 2`, hay (2) đổi hết sang `--gray-50`, hay (3) chấp nhận trắng tinh là ngoại lệ cho icon và ghi vào Known Deviation.

---

## DEC-031 · Form States ĐÓNG · Và một lỗ hổng spec Agent phải tự nhận

*24/09/2026 · Thắng chốt: **"Cho phép agent tự quyết định phương án phù hợp, luôn tối ưu sử dụng style có sẵn"***

### ✅ Breakpoint mobile — ĐÓNG

Đo lại toàn bộ section: **375 ở khắp nơi**.

| Section | Mobile |
| --- | --- |
| `Mobile` *(trang dịch vụ)* | `Baika sẽ làm gì` 375 · `Tư vấn doanh nghiệp` 375 ✅ |
| `Home` | 375 ✅ |
| `Contact` | 375 ✅ |

`D01` giờ đúng trên toàn site. **Mục chặn RC này đóng.**

### ✅ Form States — duyệt, và phương án Agent chọn

**`Form/Success` → tạo component mới.** `650:3285`, 840×270.
*Lý do tạo mới:* không có component nào trong file làm được việc này — nó là một khối xác nhận toàn chiều rộng, thay chỗ cả form. `Badge` quá nhỏ, `alert-info` là dải thông báo mảnh, `Card` sai cấu trúc. Nền `Colors/Green/200 @12%` · viền `Colors/Green/200` · chữ dùng text style `H-2` và `body-lg` — **không giá trị thô nào**.

**`Form/Error banner` → KHÔNG tạo component.** Thắng đã thay bằng **`Badge` có sẵn**, variant `Status=Error, Icon=Dot, Type=Badge` từ component set `Badge` (42 variant, page `Component`). Đây đúng là *"tối ưu style có sẵn"* — Agent bỏ ý định tạo component mới.

> ⚠️ **Agent đã làm sai một bước và đã tự sửa.** Lúc componentise, script bắt nhầm node — thay vì dải báo lỗi, nó biến **cả khối form** thành component `Form/Error banner` (840×528). Nguyên nhân: vòng lặp đi ngược lên cây dừng ở `FRAME` đầu tiên, nhưng Thắng đã thay dải báo lỗi bằng một `INSTANCE`, nên vòng lặp chạy quá lên container.
> **Đã khôi phục:** detach instance về lại `Container`, xoá component sai. Frame `Form · Error` giờ y như trước. **Bài học: khi thao tác theo tên node, phải kiểm tra kích thước kết quả có hợp lý không trước khi ghi.**

**Ghi chú nhỏ:** `Badge` đang dùng fill `#FB3748@30` **không bind token** — giá trị thô nằm trong chính component `Badge` gốc. Không chặn gì, nhưng khi xuất CSS sẽ là số viết cứng.

### 🔴 Lỗ hổng spec — Agent chỉ kiểm kê 1 trong 2 kho component

Design Spec mục 5.1 ghi *"kiểm kê lại 22/09 — quét toàn bộ 15 component set"*. **Sai phạm vi.** Đó là 15 set trên page `UI`.

Đo page `Component` ngày 24/09 **[xác minh]**: **29 component set + 12 component đơn**.

| Nhóm | Ví dụ |
| --- | --- |
| Đang dùng thật | `Badge` (42 variant) · `_Dot` · `Check` · `Step base` (24) · `Process step` (8) |
| Có thể cần | `Radio` · `Tag` · `Avatar` · `Card` · `Stat` · `Accordion` · `Tabbuttonbase` · `Breadcumb` · `alert-info` |
| ⚠️ **Trùng với page `UI`** | **`Text field` `58:5013`** — 5 variant `Default\|Focus\|Succes\|Error\|Disabled`. Trùng vai trò với `Text field` `588:6238` đang dùng thật |
| ⚠️ Tên sai / vô nghĩa | `Lable` *(và `Label` riêng — hai component)* · `Breadcumb` · `Cirular Process` · `Humburger` · `Component 1` · `Succes` |
| ⚠️ Trùng lặp | `Success` ×2 · `Loading` ×2 |

**Vì sao nghiêm trọng:** Build sẽ quét cả file. Gặp **hai `Text field`** mà spec không nói cái nào là chuẩn → dựng nhầm là cả 7 trang sai.

### 🔴 Cần Thắng xác nhận — đây là câu hỏi source of truth, Agent không tự quyết

**Page `Component` là gì?**

1. **Kho cũ / thư viện nền** — page `UI` là hiện hành, Build chỉ dùng component trên `UI` + những cái `UI` thực sự tham chiếu tới *(như `Badge`, `_Dot`)*
2. **Thư viện chính thức** — page `UI` chỉ là nơi ráp trang; Build phải đọc cả hai
3. Cách khác

Chưa chốt thì Build không biết `Text field` nào là thật.

---

## DEC-032 · Gom component gốc về page `UI`

*24/09/2026 · Thắng chốt: **"Component nào đang dùng ở page UI mà gốc nằm ở page Component thì di chuyển về page UI"***

### Đã quét 1076 instance trên page `UI`

| | Số |
| --- | --- |
| Gốc nằm ngay trên `UI` | 660 |
| Gốc nằm page khác | 339 |
| Không phân giải được gốc | 77 ⚠️ *(xem dưới)* |

### ✅ Đã chuyển 3 component set: `Component` → `UI`

| Component | Variant | Instance dùng trên UI | Ghi chú |
| --- | --- | --- | --- |
| `Badge` `60:5278` | **42** | 1 *(dải báo lỗi form)* | Chỉ dùng 1 variant nhưng **phải chuyển cả set** — Figma không tách một variant ra khỏi component set được |
| `_Dot` `115:2906` | 3 | 1 *(chấm trong Badge)* | |
| `Humburger` `471:2470` | 2 | 20 *(nút menu mobile)* | ⚠️ Tên sai chính tả — đúng là `Hamburger` |

**Kiểm chứng sau khi chuyển:** quét lại toàn bộ instance — **0 instance gãy**. Gốc nằm ngoài `UI` giảm từ 339 xuống **333, và toàn bộ 333 cái đó nằm ở page `Icon`**.

### ⛔ KHÔNG chuyển 10 icon ở page `Icon`

`check` (192 instance) · `plus` (66) · `minus` (19) · `menu` (17) · `chevron-down` (14) · `arrow-up` (14) · `loader` (6) · `arrow-up-right` (2) · `circle-check` (2) · `chevron-up` (1)

**Lý do:** Thắng chỉ nói page `Component`, không nói page `Icon`. Và `Icon` là **thư viện icon đúng nghĩa** — gom 10 icon vào `UI` sẽ phá một cách tổ chức đang hợp lý, trong khi không giải quyết vấn đề gì *(icon không có bản trùng, không gây nhầm lẫn như `Text field`)*.

Nếu Thắng muốn `UI` tự chứa hoàn toàn thì nói, Agent chuyển nốt.

### 🔴 Phát hiện mới — 77 instance KHÔNG phân giải được component gốc

| Tên | Số | Nằm ở |
| --- | --- | --- |
| `Placeholder` | **75** | bên trong `Text field` → `Field / Flexible` |
| `Dropdown` | 2 | như trên |

`getMainComponentAsync()` trả về `null` **không kèm lỗi** — dấu hiệu component gốc **đã bị xoá**, instance thành mồ côi. Chúng vẫn hiển thị đúng vì Figma giữ lại bản render cuối, nhưng **không truy được về nguồn**.

**Rủi ro cho Build:** 77 node này nằm trong khối form — thứ xuất hiện trên cả 7 trang + Liên hệ. Build đọc file sẽ thấy instance không có định nghĩa và phải đoán.

**Cần Thắng kiểm:** mở một `Text field` bất kỳ, xem lớp `Placeholder` bên trong — Figma có báo *"Component gốc đã bị xoá"* không? Nếu đúng thì hai đường: khôi phục component gốc, hoặc detach 77 instance đó thành frame thường.

### Câu hỏi `DEC-031` vẫn còn treo

Việc chuyển 3 set **không trả lời** câu *"page `Component` là kho cũ hay thư viện chính thức"*. Vẫn còn **hai `Text field`**: `588:6238` (page `UI`, 10 variant, đang dùng thật) và `58:5013` (page `Component`, 5 variant, variant có lỗi chính tả `Succes`).

Cái ở `Component` **không có instance nào trên `UI`** nên không nằm trong đợt chuyển này — nhưng nó vẫn ở đó, và Build vẫn sẽ thấy hai cái.

---

## DEC-033 · XÁC NHẬN · Đã gom xong component gốc về page `UI`

*24/09/2026 · Thắng chốt: **"Giữ nguyên page Icon"** · Kiểm lại lần hai **[xác minh]***

### Kết quả kiểm chứng — quét lại toàn bộ 1118 instance trên page `UI`

| Gốc nằm ở | Instance | Kết luận |
| --- | --- | --- |
| **`UI`** | **708** | ✅ |
| **`Icon`** | **333** | ✅ Giữ nguyên theo quyết định của Thắng |
| `Component` | **0** | ✅ **Đã sạch** |
| `Style guide` | **0** | ✅ |
| `REF` | **0** | ✅ |
| Không phân giải được | 77 | ⚠️ mồ côi — xem `DEC-032` |

**Xác nhận: không còn component nào đang dùng trên `UI` mà gốc nằm ở page `Component`.**

### Page `UI` hiện có

**18 component set:** `Badge` (42) · `Button 1` (18) · `Button 2` (18) · `Checkbox` (10) · `Các gói` (7) · `Detail Step Item` (2) · `FAQ Items` (6) · `Footer` (3) · `Humburger` (2) · `Inner Container` (5) · `Item Container` (2) · `NVG header` (6) · `Nav Button` (2) · `Planet` (1) · `ServiceLinkCard` (5) · `Text field` (10) · `_Dot` (3) · `arrow-up-right` (2)

**6 component đơn:** `Footer/Half circle item` · `Form/Success` · `Neubula light` · `Process Card` · `Solution` · `Step item`

### 10 icon giữ ở page `Icon` — theo quyết định của Thắng

`check` (192 instance) · `plus` (66) · `minus` (19) · `menu` (17) · `chevron-down` (14) · `arrow-up` (14) · `loader` (6) · `arrow-up-right` (2) · `circle-check` (2) · `chevron-up` (1)

**Luật cho Build:** page `UI` chứa **component của website**; page `Icon` là **thư viện icon**. Hai kho, hai vai trò, không trùng nhau.

### ⚠️ Một va chạm tên phát hiện lúc kiểm

Có **hai component tên `arrow-up-right`**, cả hai đều đang dùng:

| | Ở đâu | Loại |
| --- | --- | --- |
| 1 | page `UI` | COMPONENT_SET, 2 variant |
| 2 | page `Icon` | COMPONENT đơn, 1 cái |

Tên trùng ở hai kho khác nhau. Trong Figma không sao, nhưng khi Build sinh tên file/component sẽ có hai thứ cùng tên `ArrowUpRight`. Nên đổi tên một trong hai — đề xuất: cái ở `UI` đổi thành `Link arrow` hoặc `Arrow badge` *(nó là nút có nền, không phải icon thuần)*.

### Việc còn lại liên quan page `Component`

Câu hỏi `DEC-031` **đã tự giải một nửa**: `UI` giờ không phụ thuộc page `Component` nữa. Nhưng `Text field` `58:5013` **vẫn nằm đó** *(5 variant, tên variant sai chính tả `Succes`, 0 instance dùng)*.

→ Đề xuất đơn giản: **đổi tên page `Component` thành `Component (cũ – không dùng)`**, hoặc archive nó. Như vậy Build đọc file là biết ngay đâu là kho hiện hành mà không cần ai giải thích.

---

## DEC-034 · Đảo chiều kho component — page `Component` mới là kho chính thức

*24/09/2026 · Thắng chốt: **"Tạo 1 page Component mới sau đó di chuyển các Component hiện có và sử dụng trong page-UI tới đó"*** · **[xác minh — đo trực tiếp từ Figma]**

### Quyết định

**Đè lên phần bố trí page của `DEC-032` và `DEC-033`.** Hai quyết định đó gom main component **về** page `UI`; quyết định này đẩy chúng **ra** một page riêng.

| Page | Node | Vai trò từ 24/09 |
| --- | --- | --- |
| **`Component`** *(mới tạo)* | `660:2939` | **Kho component của website** |
| `UI` | `191:812` | **Chỉ còn trang và màn** |
| `Icon` | `6:20457` | Thư viện icon — giữ nguyên |
| `Style guide` | `1:217` | Tài liệu hệ thống |
| `Component (cũ – không dùng)` | `8:12070` | Kho cũ đã đóng — Build bỏ qua |

### Vì sao chọn cách này

Trước 24/09, page `UI` vừa chứa 7 trang dịch vụ + trang chủ + Liên hệ, **vừa** chứa 23 main component nằm rải rác quanh chúng. Build quét file sẽ thấy component và trang lẫn vào nhau, không có ranh giới máy đọc được — phải suy đoán từ vị trí trên canvas.

Tách ra thì ranh giới thành **một luật tra cứu một dòng**: *component ở page `Component`, trang ở page `UI`, icon ở page `Icon`.* Không còn chỗ để đoán.

**Phương án đã loại:** giữ nguyên và chỉ ghi chú trong spec. Loại vì ghi chú không tự thi hành — phiên sau hoặc Build vẫn phải đọc tài liệu mới biết, trong khi cấu trúc page thì nhìn là thấy.

### Đã làm — 23 node chuyển sang page `Component`

**17 component set:** `FAQ Items` `230:3231` (6) · `Item Container` `273:358` (2) · `Planet` `321:178` (1) · `Detail Step Item` `355:256` (2) · `Các gói` `365:785` (7) · `Footer` `450:5263` (3) · `ServiceLinkCard` `450:5984` (5) · `NVG header` `452:6600` (6) · `Nav Button` `472:4918` (2) · `Button 1` `519:3354` (18) · `Inner Container` `518:2781` (5) · `Button 2` `26:2182` (18) · `Text field` `588:6238` (10) · `Checkbox` `29:2685` (10) · `Badge` `60:5278` (42) · `_Dot` `115:2906` (3) · `Humburger` `471:2470` (2)

**6 component đơn:** `Solution` `327:321` · `Step item` `261:277` · `Footer/Half circle item` `374:394` · `Process Card` `590:6536` · `Neubula light` `573:3960` · `Form/Success` `650:3285`

Vị trí tương đối giữ nguyên, chỉ dịch gốc toạ độ về gần `(200, 200)`. **Node ID không đổi** — mọi ID đã ghi trong spec vẫn tra được.

### Xác minh sau khi chuyển **[xác minh]**

Quét lại toàn bộ **894 instance** trên page `UI`:

| Gốc nằm ở | Instance | Kết luận |
| --- | --- | --- |
| `Component` | **596** | ✅ |
| `Icon` | **241** | ✅ giữ nguyên theo `DEC-033` |
| Không phân giải được | **57** | ⚠️ xem dưới |
| **Instance gãy (`getMainComponentAsync` trả `null`)** | **0** | ✅ |

**Page `UI` còn 0 main component.** Đã kiểm bằng `findAllWithCriteria`.

### ⚠️ Việc còn treo — 57 instance mồ côi, chia làm hai loại khác hẳn nhau

**Loại 1 — 38 instance, KHÔNG phải lỗi.** `Placeholder` ×36 + `chevron-down` ×2, tất cả nằm trong **hai frame `Pháp lý` lạc** `472:5041` và `472:5473` — vốn đã nằm trong danh sách *5 node rác*. Gốc của chúng là component **thư viện ngoài** (`remote = true`). **Xoá hai frame rác là hết.**

**Loại 2 — 19 instance `arrow-up-right`, CẦN THẮNG QUYẾT.** `remote = false`, gốc **đã bị xoá**. Đây là hệ quả của việc xoá hai component `arrow-up-right` hôm 24/09: bên trong `Button 1` đã đổi sang icon mới, nhưng **19 chỗ khác thì chưa**:

| Ở đâu | Số instance |
| --- | --- |
| Section `Home` `540:4422` | 15 |
| `Grid Container` `634:2882` | 3 |
| `Baika logo Test` `563:3678` | 1 |

Chúng vẫn hiển thị đúng *(Figma giữ bản render cuối)* nhưng **không truy được về nguồn** — Build đọc file sẽ thấy instance không có định nghĩa.

**Đề xuất:** swap cả 19 sang `arrow-up-right` `64:6925` trên page `Icon` *(24×24, đang được 7 instance khác dùng — chính là icon Thắng đã thay vào `Button 1`)*. Làm vậy là hoàn tất đúng việc Thắng đã bắt đầu. **Chưa làm — chờ Thắng gật**, vì 15/19 nằm trên trang chủ và swap là thay đổi nhìn thấy được.

---

## DEC-035 · Bỏ `#FFFFFF` khỏi thiết kế — màu sáng nhất là `--gray-50`

*24/09/2026 · Thắng chốt: **"Toàn bộ các điểm màu `#FFFFFF` còn lại hãy thay thế bằng variable `--gray-50`"*** · **[xác minh]**

### Quyết định

Đóng câu hỏi treo từ `tien-do-24-09.md` mục 4.3 *(ba lựa chọn: thêm token `--white` · đổi sang `--gray-50` · ghi Known Deviation)*. **Chọn đổi sang `--gray-50`.**

`--gray-50` = `#F8F8F8` *(`VariableID:220:2`)* là **màu sáng nhất của hệ**. Không tạo token mới.

### Vì sao chọn cách này

Ba hướng đều gỡ được bế tắc, nhưng khác nhau ở cái giá lâu dài:

| Phương án | Vì sao loại / chọn |
| --- | --- |
| Thêm token `--white` | ❌ Trái **luật bất di bất dịch** của project: *không tạo bảng màu mới*. Và nó thêm một bậc sáng thứ 12 vào thang xám 11 bậc vốn đã đủ dùng |
| Ghi Known Deviation | ❌ 566 chỗ hardcode là quá nhiều để gọi là "sai lệch chấp nhận được". Chúng sẽ được xuất thẳng sang CSS và nằm đó mãi |
| **Đổi sang `--gray-50`** | ✅ Dùng token đã có · thang xám giữ nguyên 11 bậc · Build có một luật kiểm được bằng máy: *grep `#FFFFFF` trong CSS = lỗi* |

**Cái giá phải trả, nói rõ:** đây **không chỉ là đổi nhãn** — `#FFFFFF` → `#F8F8F8` là **tối đi 7/255 ≈ 2.7%**. Mắt thường gần như không thấy, nhưng tỉ lệ tương phản có nhích xuống một chút. Với chữ sáng trên nền `--gray-950` `#1E1E1E`, tỉ lệ vẫn **trên 15:1** — còn rất xa ngưỡng WCAG AA 4.5:1. **Không có rủi ro accessibility.**

### Đã làm — 566 paint, 2 lượt quét

| Lượt | Phạm vi | Fill | Stroke |
| --- | --- | --- | --- |
| 1 | Node thường *(không phải instance, không nằm trong instance)* — 516 node | 492 | 24 |
| 2 | Override thật bên trong instance — 110 node | 38 | 12 |

Lượt 1 chạy trước có chủ ý: bind ở main component xong thì **365 điểm trắng trong instance tự hết** nhờ thừa kế, chỉ còn 104 là override thật. Nếu làm ngược lại sẽ tạo ra hàng trăm override thừa.

**Opacity được giữ nguyên từng paint** — quan trọng nhất là lớp phủ ô bento `#FFFFFF@5%`, nay là `--gray-50@5%`. Cách làm: `setBoundVariableForPaint` trả về paint MỚI, phải gán opacity **sau** khi bind, không phải trước.

**Đo lại sau khi xong: 0 fill/stroke `#FFFFFF` trên page `UI`.**

### Ba chỗ cố ý KHÔNG đổi — đừng ai "sửa" lại

| Chỗ | Số | Vì sao giữ |
| --- | --- | --- |
| **Màu bóng đổ** — `Shadow/Drop-Inner` `#FFFFFF/50`, `Checkbox/Focus` `DROP_SHADOW #FFFFFF` | 2 style | Là màu **effect**, không phải fill. Làm mờ nó đi là làm yếu **quầng sáng Focus** — thứ đang gánh chỉ tiêu WCAG 2.4.7 Focus Visible |
| **Nền 3 SECTION** `Desktop` · `Mobile` · `Tablet` | 3 | Nền khung tổ chức canvas, không xuất ra web |
| **Page `Icon`** (309) và **page `Style guide`** (174) | 483 | Thư viện icon và trang tài liệu — ngoài phạm vi trang web. `DEC-033`: giữ nguyên page `Icon` |

### Luật cho Build

Chuỗi `#FFFFFF`, `#fff`, `white` **không được viết thẳng trong CSS sinh ra**. Ngoại lệ duy nhất: màu bóng đổ ở hai style trên. Đây là luật **kiểm được bằng grep** — nên đưa vào QA gate.

---

## 🔴 DEC-035-A · ĐÍNH CHÍNH `DEC-035` — Agent làm mất opacity, Thắng sửa

*24/09/2026 · **[xác minh — đo lại sau khi Thắng sửa]*** · **Đè lên phần "Đã làm" của `DEC-035`.**

### Lỗi

Lượt bind đầu **làm mất opacity của mọi paint trắng trong suốt**. Code có dòng gán `opacity` sau khi `setBoundVariableForPaint`, nhưng nó **không ăn** — kết quả: **86 fill + 18 stroke** ở các mức 5% · 10% · 15% · 20% · 25% đều thành **đục 100%**.

Hậu quả nhìn thấy được: **8 ô bento trang chủ thành khối trắng đặc**, nhãn `PHÁP LÝ & THUẾ` · `HỆ THỐNG HÓA VẬN HÀNH`… biến mất vì chữ trắng nằm trên nền trắng.

**Lỗi nặng hơn: Agent báo "566 paint, 0 lỗi" mà không mở một màn nào ra nhìn.** Kết luận chỉ dựa trên số đếm.

### Luật rút ra — áp dụng cho mọi phiên sau

> **Sau mỗi lượt ghi hàng loạt vào Figma, phải chụp ít nhất một màn thật và nhìn.** Số đếm khớp không chứng minh kết quả đúng. Đây là bài học cùng họ với `DEC-022` *(đọc cả giá trị lẫn `styleId`)* và vụ componentise nhầm node *(kiểm kích thước kết quả trước khi ghi)*.

### Thắng đã sửa — kết quả đo lại **[xác minh]**

Thắng tự khôi phục độ trong suốt bằng cách tạo biến mới thay vì phục hồi từng giá trị cũ:

| Biến | Màu | Alpha | Đang dùng |
| --- | --- | --- | --- |
| **`Colors/Opacity/White`** `VariableID:670:4263` | `#FFFFFF` | **15%** | **53 paint** |

Tức **gộp 5 mức cũ (5 · 10 · 15 · 20 · 25%) về một mức 15%** — quyết định của Thắng, không phải khôi phục nguyên trạng. Hệ quả: hệ token gọn hơn, chỉ còn **một** token trắng trong suốt.

### Luật cuối cùng, thay cho bảng trong `DEC-035`

| Trắng ở dạng | Đổi thành |
| --- | --- |
| Đục 100% | `Colors/Neutral 2/--gray-50` `#F8F8F8` |
| Trong suốt | `Colors/Opacity/White` `#FFFFFF @ 15%` — **alpha nằm trong biến**, paint để opacity 100% |

### Trạng thái file sau khi sửa **[xác minh 24/09]**

- Page `UI`: **0** fill/stroke `#FFFFFF` thô *(ngoài 3 nền SECTION)*
- Page `Component` `660:2939` **vẫn còn nguyên** — Thắng sửa tại chỗ, không dùng version history, nên `DEC-034` không bị ảnh hưởng
- Nhóm `Colors/Opacity` giờ có **4 biến**: `White` `#FFFFFF@15%` · `Light` `#D5D5D5@50%` · `Gray` `#D5D5D5@25%` · `Dark` `#212121@50%`

### Còn lại — paint trong suốt CHƯA bind token *(không phải trắng, ngoài phạm vi `DEC-035`)*

| Giá trị | Số | Ghi chú |
| --- | --- | --- |
| `#000000 @ 10%` (stroke) | 6 | |
| `#000000 @ 75%` (fill) | 2 | khớp node rác *"Thêm overlay #000000 75%"* |
| `#212121 @ 75%` (fill) | 2 | gần `Colors/Opacity/Dark` nhưng khác alpha |
| `#FB3748 @ 30%` (fill) | 1 | `Badge` — đã có trong danh sách theo dõi |

Không chặn Build. Nêu ra để Thắng quyết có token hoá tiếp hay ghi Known Deviation.

---

## DEC-036 · Chuẩn hoá tên component + dọn node rác trên Figma

*24/09/2026 · Thắng duyệt từng mục · **[xác minh — đối chiếu instance trước/sau]***

### Quyết định

Đổi tên trục variant và giá trị variant cho **7 component set**, sửa 2 lỗi chính tả, đổi tên 1 text style, xoá 5 node rác. **Không đụng vào hình ảnh** — chỉ đổi tên và xoá thứ không thuộc thiết kế.

### Vì sao làm trước Build

Tên trục variant trong Figma **trở thành tên prop trong code**. `Property 1` sinh ra `property1`, `Variant2` sinh ra `variant2` — đọc code sau này không ai hiểu. Sửa bây giờ tốn một phiên; sửa sau khi đã dựng 9 trang thì phải sửa cả code lẫn Figma.

Node rác thì Build quét file sẽ thấy và phải dừng lại hỏi.

### Bảng đổi tên

| Component | Trước | Sau | Căn cứ |
| --- | --- | --- | --- |
| `Humburger` → **`Hamburger`** | `Property 1=Default·Variant2` | `State=Close·Open` | 3 gạch = đóng, 1 gạch = mở. Trùng trục `Close·Open` của `NVG header` |
| `Detail Step Item` | `Property 1=Default·Variant2` | `Type=Title·Full` | Đo được: `Title` cao 24px, `Full` cao 95px. **95/95 instance dùng `Full`** |
| `Nav Button` | `Property 1=Default·Variant2` | `Selected=False·True` | Đo màu chữ: `Default`=`--gray-600` (mờ), `Variant2`=`--gray-50` (sáng). 7 instance mờ + 1 sáng = menu 8 mục, 1 mục đang chọn. Ảnh chụp xác nhận `PHÁP LÝ & THUẾ` là mục sáng |
| `Footer` | `Property 1=…` | `Type=Desktop·Tablet·Mobile` | Trùng quy ước breakpoint của `Các gói`, `NVG header` |
| `ServiceLinkCard` | `Property 1=…, State=…` | `Type=…, State=…` | như trên |
| `Badge` | `Status=Warring` | `Status=Warning` | lỗi chính tả |
| **`Button 2`** | `small button=…, Property=Small·medium·Large` | `State=…, Type=Sm·Md·Lg` | **Khớp hoàn toàn với `Button 1`.** Trước đó hai bộ nút cùng chức năng lại có hai bộ tên prop khác nhau — Build sẽ sinh ra hai kiểu API |
| text style | `Global Tokens/Body/label-mono` | `Global Tokens/Body/label` | Tên nói dối: font thật là Be Vietnam Pro Light 11px, **không phải mono**. Khép lại `F-02` |

### Cách làm — bắt buộc theo đúng trình tự này nếu sau có ai lặp lại

Đổi tên trục variant **có thể làm instance mất lựa chọn variant** và rơi về mặc định. Nên:

1. **Trước khi đổi:** quét page `UI`, ghi lại từng instance đang dùng variant nào
2. Đổi tên **toàn bộ variant của một set trong cùng một lượt** — đổi nửa chừng là set vỡ
3. **Sau khi đổi:** quét lại, đối chiếu với bảng đã ghi
4. **Chụp một màn thật để nhìn** *(luật từ `DEC-035-A`)*

### Kết quả kiểm chứng **[xác minh]**

| Lượt | Instance kiểm | Giữ đúng variant | Gãy |
| --- | --- | --- | --- |
| Lượt 1 — `Hamburger` · `Detail Step Item` · `Footer` · `ServiceLinkCard` · `Badge` | **140** | **140** | **0** |
| Lượt 2 — `Nav Button` · `Button 2` | **73** | **73** | **0** |

Chụp lại trang `Pháp lý` `199:814` và `NVG header · State=Open, Type=Tablet` — layout không vỡ, menu hiển thị đúng.

### 5 node rác đã xoá khỏi page `UI`

`ádadads` `580:4085` *(chữ gõ bừa)* · `Thêm overlay #000000 75%` `472:5903` *(ghi chú)* · `gợi ý` `376:1588` *(TEXT ẩn, nội dung ClearWork cũ: "Tên sẽ hiện trên chứng nhận hoàn thành")* · `Line 11` `472:5901` *(vector 1202×0)* · `Ellipse 3` `219:2703` *(vector 109×670 nằm lẻ)*

Page `UI` còn **11 node top-level**, **0 node lẻ** kiểu TEXT/VECTOR/LINE/ELLIPSE/RECTANGLE.

### Thắng CHƯA duyệt xoá — giữ nguyên, ghi lại để không ai tự ý xoá

| Node | Vì sao còn treo |
| --- | --- |
| 2 frame `Pháp lý` lạc `472:5041` · `472:5473` | Bản nháp cũ, mỗi cái 11 lớp con. **Chứa toàn bộ 38 instance mồ côi** (`Placeholder` ×36 + `chevron-down` ×2, gốc là component thư viện ngoài) |
| `Item Container` `273:358` | Component set 2 variant, **0 instance**. Vẫn mang tên `Property 1`/`Variant2` |
| `Grid Container` `634:2882` · `Footer` `634:3080` · `Baika logo Test` `563:3678` | Ba frame nháp lẻ. `Grid Container` chứa 3 trong số 19 instance `arrow-up-right` mồ côi |

### Phát hiện mới — `Nav Button` thiếu trạng thái tương tác

`Nav Button` là **mục menu bấm được** nhưng chỉ có trục `Selected`, **không có `Hover`, không có `Focus`**. WCAG 2.1 AA mục **2.4.7 Focus Visible** đòi mọi thứ bấm được bằng bàn phím phải có trạng thái focus nhìn thấy được.

Cùng loại với lỗi `FAQ Items` đã sửa ở `DEC-027`. **Chặn Release Candidate**, chưa chặn Build.

Tương phản đo được: chữ `--gray-600` `#8A8A8A` trên nền menu tối ≈ **4.66 : 1** ✅ đạt AA.

---

## DEC-037 · Bắt đầu Build — khung Astro + `tokens.css` đã dựng và chạy được

*24/09/2026 · Thắng: **"Bắt đầu tạo Source đi"*** · **[xác minh — đã chạy `pnpm build` thật]**

### Đã dựng — 23 file

```
baika-website/
├── CLAUDE.md              12.5 KB — luật repo, thứ mọi phiên sau đọc đầu tiên
├── README.md
├── package.json           Astro 4.16 · TypeScript 5.9 · pnpm 9.12 · Node 20.11
├── astro.config.mjs       output: 'static' — không SSR, không adapter
├── tsconfig.json          extends astro/tsconfigs/strict + alias @/ @styles/ …
├── .gitignore             chặn .env, node_modules, dist, .vercel
├── .env.example           chỉ tên biến, không giá trị
├── .nvmrc                 20.11.0
├── public/favicon.svg
└── src/
    ├── styles/tokens.css   125 biến CSS, sinh từ 82 biến Figma
    ├── styles/reset.css    + prefers-reduced-motion
    ├── styles/global.css   thang chữ 9 bậc + .container + focus-visible + skip-link
    ├── layouts/BaseLayout.astro
    └── pages/index.astro   trang tạm để xác minh
```

### Kết quả chạy thật **[xác minh]**

```
astro check → 5 files, 0 errors, 0 warnings, 0 hints
astro build → 1 page built in 899ms, dist 24 KB
```

### QA gate `#FFFFFF` — kiểm bằng grep, đạt

Trong CSS đã dựng chỉ còn `rgb(255 255 255 / …)` ở đúng **hai chỗ được phép**: `--opacity-white` và `--shadow-drop-inner`. Không có `#FFFFFF` / `#fff` / `white` ở dạng giá trị.

⚠️ Lưu ý khi viết QA gate tự động: grep thô sẽ **báo nhầm trên comment** — `tokens.css` có 2 dòng comment nhắc chính luật này. Gate phải bỏ qua comment.

### Vì sao 82 biến Figma thành 125 biến CSS

82 biến Figma là màu · spacing · radius. 43 biến thêm **không phải tự chế** — chúng là **text style, effect style và grid style** của Figma, vốn không nằm trong collection biến:

| Nhóm thêm | Số | Nguồn |
| --- | --- | --- |
| Typography | 3 họ chữ + 27 (`--fs-*`, `--lh-*`, `--fw-*`) | 9 text style |
| Bóng đổ | 7 | 7 effect style |
| Làm mờ | 9 | LayerBlur |
| Lưới & breakpoint | 7 | 5 grid style + `DEC-031` |

### Quyết định kỹ thuật nhỏ, ghi lại để sau không bàn lại

| Quyết định | Vì sao |
| --- | --- |
| Không có token `--brand` riêng | `DEC-028`: thang `--blue-*` **chính là** thang brand. Tạo alias `--brand` sẽ đẻ ra hai tên cho một thứ |
| Font nạp từ Google Fonts qua `<link>` + `preconnect` | Đơn giản, không cần build step. Nếu sau này chỉ số hiệu năng không đạt thì mới tự host |
| `global.css` chỉ chứa thứ dùng ở MỌI trang | Phần còn lại vào CSS Module của từng khối. Không có đường thứ ba |
| `:focus-visible` đặt mức sàn ở `global.css` | Component ghi đè được nhưng **không được bỏ** — WCAG 2.4.7 |
| Mặc định **không JS** | Site tĩnh; JS chỉ cho menu, accordion, form |

### Thứ tự Git — Thắng hỏi, đã trả lời

**Dựng source trước, tạo repo sau — được, và nên làm vậy.** Một commit đầu tiên gom tất cả, thay vì lịch sử commit lộn xộn khi chưa có gì để xem.

⚠️ **Cảnh báo đã nêu:** phiên chạy trong container cloud **ephemeral** — hết phiên là file mất. Nên source đã được giao ra ngoài ngay: gửi `.zip` vào chat + `CLAUDE.md` lưu vào Claude Project.

### Cách nối Claude với repo GitHub của mail công ty — đã tra, đã trả lời

Đã tra danh bạ connector: **không có connector GitHub** cho tổ chức này.

| Cách | Đánh giá |
| --- | --- |
| ❌ Dán Personal Access Token vào chat | **Cấm** — luật bảo mật mục 5 của project. Chat lưu lâu dài, token ở đó là rò rỉ |
| ✅ **Chia sẻ thư mục từ máy Thắng** ("Add folder" trong app Claude) | Agent viết file thẳng vào máy; Thắng `git push` bằng tài khoản GitHub công ty đã đăng nhập sẵn. **Claude không chạm vào thông tin đăng nhập** |
| ✅ Claude Code CLI cài trên máy Thắng | Dùng git credential sẵn có của máy |

Đo được lúc 24/09: máy `laptop-a2tkh231` (Windows) **đang nối với phiên**, nhưng `connectedFolders: []` — **chưa chia sẻ thư mục nào**. Thư mục gốc có sẵn một folder tên `boka-web`.

### Việc tiếp theo

1. Thắng chia sẻ thư mục → agent ghi source thẳng vào máy
2. Thắng tạo GitHub Organization + repo `baika-website` **Private, rỗng** + Vercel Team *(hướng dẫn: `claude/huong-dan-git-vercel.md`)*
3. Commit đầu tiên
4. Dựng **một trang dịch vụ hoàn chỉnh trước** *(đề xuất: Pháp lý)* → Thắng xem link Preview → duyệt rồi mới dựng 6 trang còn lại

---

## DEC-038 · Repo nằm trên tài khoản `baikavn-bot` — chấp nhận có chủ ý

*24/09/2026 · **Sếp xác nhận:** "Trước mắt cứ làm như 1 dự án riêng cá nhân nhưng trên nền tài khoản baika của công ty"*

### Quyết định

Repo `github.com/baikavn-bot/BK.-Web-Update-Sep-2026` **giữ nguyên trên tài khoản `baikavn-bot`**.

- **Không** tạo GitHub Organization
- **Không** chuyển quyền sở hữu repo
- **Không** thêm tài khoản cá nhân `‹email cá nhân của Thắng — đã che›` làm collaborator
- Thắng làm việc khi **đang đăng nhập `baikavn-bot`** trên máy

Đóng hai mục treo: *"xác nhận baikavn-bot là Organization hay tài khoản cá nhân"* và *"tạo GitHub Organization"*.

### `baikavn-bot` là tài khoản cá nhân — **[xác minh]**

Bằng chứng từ ảnh chụp trang `/security` ngày 24/09:

- Dòng *"Advanced Security is only available for **Organizations**"* — tính năng này bị khoá, nghĩa là repo không thuộc Organization
- Thanh tab repo **không có mục "People"** *(Code · Issues · Pull requests · Actions · Projects · Security and quality · Insights · Settings)*

Repo đang **Private** — đúng yêu cầu.

### Rủi ro đã nêu, sếp chấp nhận — ghi lại thành `VD-002`

| | |
| --- | --- |
| **Rủi ro** | Repo thuộc tài khoản cá nhân thì **thuộc về người giữ tài khoản đó**, không thuộc pháp nhân công ty. Ai nắm mật khẩu `baikavn-bot` là nắm toàn bộ website. Mất tài khoản, quên mật khẩu, hoặc người giữ nghỉ việc → công ty không có cơ chế đòi lại |
| **Hạn chế kỹ thuật kèm theo** | Collaborator trên repo cá nhân **chỉ có một mức quyền: Write**. Không phân vai Read / Triage / Maintain / Admin được. Advanced Security bị khoá |
| **Vì sao vẫn chấp nhận** | Giai đoạn này website chưa chạy thật, chưa có dữ liệu người dùng, chưa cắt DNS. Chi phí chuyển đổi bây giờ thấp, nhưng lợi ích cũng chưa xuất hiện. Sếp ưu tiên đi nhanh |
| **Chuyển đổi về sau** | Vẫn làm được bất cứ lúc nào: tạo Organization Free → **Settings → Transfer ownership**. GitHub tự chuyển hướng link cũ. Càng nhiều lịch sử commit thì càng phiền, nhưng không chặn |

### 🔔 Mốc phải xem lại — đừng để trôi

**Trước khi cắt DNS sang production.** Đó là lúc tên miền thật của công ty bắt đầu phụ thuộc vào repo này. Từ thời điểm đó trở đi, repo nằm ở tài khoản cá nhân không còn là chuyện nội bộ của dự án nữa.

Agent phải **chủ động nhắc lại `VD-002`** ở phase Release Candidate, cùng lúc với việc xin quyền DNS từ sếp.

### Hệ quả thao tác — nhớ khi cấu hình Git

`git config --global user.email` phải dùng **email của tài khoản `baikavn-bot`**, không phải `‹email cá nhân của Thắng — đã che khi chép vào repo›`.

Lý do: GitHub gắn commit vào tài khoản **dựa trên email**. Khai email không khớp thì commit hiện ra dưới dạng tác giả vô danh, không nối được vào tài khoản nào — và email cá nhân sẽ **hiện công khai** trong lịch sử commit.

---

## DEC-039 · Source đã lên repo — commit đầu tiên

*24/09/2026 · **[xác minh — đọc trực tiếp output `git push`]***

### Kết quả

| | |
| --- | --- |
| Repo | `github.com/baikavn-bot/BK.-Web-Update-Sep-2026` · **Private** |
| Commit | `e10eb26` — *"Khung Astro + tokens.css sinh tu Figma"* |
| Nội dung | **16 file**, 4912 dòng, 23 objects, 60.15 KiB |
| Tác giả | `BAIKA <310423793+baikavn-bot@users.noreply.github.com>` |

### Ba vướng mắc đã gặp và cách gỡ — ghi lại vì sẽ gặp lại

**1 · Máy đã có sẵn cấu hình Git của tài khoản khác.** `git config --global --list` cho ra `user.name=Gachips4` dù lệnh đặt `BAIKA` đã chạy. Dấu vết khác: các dòng `filter.lfs.*`. → Phải **đọc lại `--list`** sau khi đặt, không tin là lệnh chạy xong thì giá trị đã đúng.

**2 · Trình duyệt đăng nhập nhầm tài khoản.** Git Credential Manager mở trang OAuth theo tài khoản **đang đăng nhập sẵn trên trình duyệt**, không theo `user.email` trong Git config. Lần đầu ra `thangtruong`, lần hai ra `Gachips4`.
→ **Luật:** luôn đọc dòng *"wants to access your **___** account"* trên trang Authorize **trước khi bấm**. Đó là chỗ duy nhất hiện đúng tài khoản sắp được cấp quyền.
→ Nếu đã lỡ Authorize nhầm: xoá mục `git:https://github.com` trong **Windows Credential Manager**, rồi push lại.

**3 · Repo tạo kèm README nên push bị từ chối.** `! [rejected] main -> main (fetch first)`. Hai lịch sử không liên quan: remote có commit README của GitHub, local có commit 16 file.
→ Chọn **`git push --force`** thay vì `git pull --allow-unrelated-histories`. Lý do: cả hai bên đều có `README.md`, ghép lại sẽ tạo xung đột phải xử lý tay — không đáng cho một file placeholder một dòng.
→ **`--force` chỉ an toàn vì repo còn trống.** Từ giờ repo đã có lịch sử thật, **không dùng `--force`** nữa trừ khi có lý do rõ ràng.

### Phát hiện phụ — có tồn tại Organization `baika-vn`

Trang OAuth hiện dòng *"Organization access: `baika-vn` ✓"*. Nghĩa là công ty **đã có sẵn một GitHub Organization**, dù repo hiện nằm ở tài khoản cá nhân `baikavn-bot`.

Không hành động lúc này — `DEC-038` đã chốt giữ nguyên. Nhưng ghi vào `VD-002`: **khi xem lại trước lúc cắt DNS, đích chuyển đã có sẵn**, không phải tạo mới.

### Bài học về cách viết hướng dẫn cho Thắng

Thắng đã **gõ nhầm ví dụ output thành lệnh** hai lần *(`"email-cua-tai-khoan-baikavn-bot@..."`, rồi `Enumerating objects: ...`)*.

**Nguyên nhân: Agent dùng cùng một kiểu khối code cho cả lệnh-để-gõ lẫn kết quả-sẽ-hiện.**

→ **Luật trình bày từ nay:** khối lệnh ghi `⌨️ GÕ LỆNH NÀY`; khối kết quả ghi `📤 KẾT QUẢ (chỉ để đối chiếu, đừng gõ)` và lùi vào dạng trích dẫn. Chỗ nào có giá trị thay thế thì nói rõ *"thay bằng…"* ngay dòng trên.

---

## DEC-040 · Vercel đã nối — hạ tầng hoàn chỉnh

*24/09/2026 · **[xác minh — deploy thành công, ảnh render đúng]***

### Cấu hình

| Mục | Giá trị |
| --- | --- |
| Vercel Team | **`baika`** · gói **Hobby** |
| Project | `bk-web-update-sep-2026` |
| Nguồn | `baikavn-bot/BK.-Web-Update-Sep-2026`, nhánh `main` |
| Quyền GitHub | **Only select repositories** — đúng 1 repo |
| Application Preset | **Astro** *(Vercel tự nhận, không sửa gì)* |
| Root Directory | `./` · Build: `pnpm run build` |

### Vì sao chọn Hobby chứ không lấy Pro trial

Vercel chào **Pro trial kèm $20 credit** ngay ở màn đăng ký. Đã từ chối:

| Lý do | |
| --- | --- |
| Trial là đồng hồ đang chạy | Giai đoạn này chỉ dựng và xem thử — Pro **không cho thêm gì**. Dùng trial lúc chưa cần là phí mất nó đúng lúc cần thật (trước production) |
| Là tiền công ty | Bấm Continue = mở cam kết trả phí. Cần sếp gật, không phải quyết định kỹ thuật |
| Nâng cấp sau rất dễ | Hobby → Pro vài cú bấm, không phải làm lại gì |

**Đánh đổi đã nêu rõ với Thắng:** Pro sẽ tạo một **Team** — pháp nhân công ty sở hữu, tương đương GitHub Organization. Hobby thì vẫn là tài khoản cá nhân, lặp lại đúng vấn đề `VD-002`.

Chấp nhận, vì **thời điểm tốt nhất để xử lý chuyện sở hữu là một lần, ngay trước production**: nâng Pro *(tạo Team)* + chuyển repo sang Organization `baika-vn` *(đã có sẵn)* cùng lúc. Làm nửa vời bây giờ thì vẫn phải làm lại.

### 🔔 Thêm vào mốc xem lại trước khi cắt DNS

Danh sách phải xử lý **cùng một lúc**, trước production:

1. `VD-002` — repo chuyển từ `baikavn-bot` sang Organization `baika-vn`
2. **Vercel Hobby → Pro** — Hobby theo điều khoản Vercel là **phi thương mại**; website công ty là thương mại
3. Quyền DNS từ sếp

Mục 2 là **khoản chi**, Thắng cần báo sếp sớm chứ không đợi sát ngày.

### Ghi chú nhỏ

- `Environment Variables: 1 Detected` — Vercel đọc thấy `PUBLIC_SITE_URL` trong `.env.example`. Chỉ là phát hiện, chưa đặt giá trị. Site tĩnh không cần biến môi trường lúc chạy
- Vercel chào cài `vercel/vercel-plugin` cho coding agent — **chưa cần**, không cài

---

## DEC-041 · Dựng xong trang chủ — 4 component + lưới bento 3 breakpoint

*24/09/2026 · Thắng đổi hướng: **"Dựng file CSS đưa toàn bộ system vào code. Sau đó build Home trước để check/test"*** · **[xác minh — build sạch + chụp 3 breakpoint]**

### Đã dựng

| File | Vai trò |
| --- | --- |
| `src/components/ArrowUpRight.astro` | Icon Lucide, vẽ bằng SVG, đổi màu qua `currentColor` |
| `src/components/Button.astro` | Gộp `Button 1` + `Button 2` làm MỘT component — hai bộ đã chung trục `State × Type` từ `DEC-036` |
| `src/components/BentoCard.astro` | Ô bento, 3 dạng: `card` / `placeholder` / `empty` |
| `src/components/HomeHero.astro` | Khối hero 2×2 |
| `src/pages/index.astro` | Trang chủ, lưới `grid-template-areas` cho 3 breakpoint |

### Quyết định kỹ thuật

**1 · Variant trong Figma = thuộc tính trong code.** `Badge` 42 ô ở Figma là **một** component với 3 prop. "Toàn bộ system" trong code nhỏ hơn nhiều so với khi nhìn Figma — khoảng 12 component thật, không phải 17 bộ × N variant.

**2 · Dùng `<style>` scoped của Astro, KHÔNG dùng CSS Modules.** `CLAUDE.md` mục 7 viết là `.astro + .module.css` — đó là quyết định viết **trước khi dựng**. Astro scoped style tự cô lập class, gọn hơn một file và một dòng import, và với người không biết code thì **style nằm ngay cạnh markup dễ đọc hơn**. Đúng tinh thần "chọn thứ đơn giản". → `CLAUDE.md` cần sửa mục 7.

**3 · Bố cục viết bằng `grid-template-areas`.** Mỗi dòng CSS là một hàng của lưới, mỗi tên là một ô — nhìn là thấy layout, không phải đếm toạ độ. Quan trọng vì người bảo trì file này là designer.

**4 · Chữ nút `#000000` → `var(--gray-950)`.** Figma viết thẳng `#000000`, không phải token. Bind sang token gần nhất theo luật "không hardcode". Mắt thường không phân biệt được trên nền `--gray-50`.

**5 · Chữ `Baika` 120px = logotype, không vào thang chữ.** Thắng chốt. Dựng riêng trong CSS hero, `tokens.css` giữ nguyên 9 bậc.

**6 · Hai ô chưa có đích để KHÔNG bấm được.** `Trạm Ý Tưởng` + `Trạm Kết Nối` ngoài phạm vi v1. Render thành `<div>` thay vì `<a>` — thà không bấm được còn hơn link chết 404. **Vẫn chờ Thắng chốt đích.**

**7 · KHÔNG áp bóng đổ Hover/Active cho ô bento.** `CLAUDE.md` mục 4 nói ngôn ngữ tương tác dùng chung mọi component, nhưng variant `Hover`/`Focus`/`Active` của `Home/Services Card` trong Figma **chỉ đổi màu nền + chữ + hiện mũi tên**, không có effect. Luật "Figma thắng" → dựng đúng Figma. **Cần Thắng xác nhận** có muốn thêm `--shadow-inner` / `--shadow-inner-press` không.

### Lỗi đã bắt được nhờ chụp màn

**Chakra Petch 400 không được nạp.** Chữ `Baika` dùng weight 400, nhưng link Google Fonts chỉ xin `500;700` → rơi về font dự phòng. Đã sửa thành `400;500;700`.

Đây đúng là thứ **`astro check` không bắt được** — build 0 lỗi nhưng chữ sai font. Bằng chứng cho luật `DEC-035-A`: *phải mở ra nhìn*.

### ⚠️ Giới hạn của việc kiểm ở phía Agent

Container của Agent **bị proxy chặn cả `figma.com` lẫn `fonts.googleapis.com`**. Hệ quả:

- **Không tải được ảnh từ Figma** → logo phải nhờ Thắng export tay
- **Ảnh chụp kiểm tra dùng font dự phòng, không phải font thật** → bố cục tin được, **typography thì không**

→ **Bản trên Vercel mới là bản kiểm thật.** Agent không được kết luận về chữ chỉ dựa trên ảnh chụp ở container.

### Sai lệch so với Figma — cố ý, đã nêu

| Chỗ | Figma | Code | Vì sao |
| --- | --- | --- | --- |
| `TRẠM Ý TƯỞNG` ở Tablet | không có | thêm vào hàng 5 | Không có lý do một mục biến mất trên máy nhỏ |
| `TRẠM Ý TƯỞNG` ở Mobile | ô rỗng ở vị trí 6 | xếp vào đúng ô đó | Ô rỗng gần như chắc chắn là chỗ dành cho nó — đủ 9 ô |
| Cỡ chữ nút | 18px | `--fs-body-lg` 17px | Không có token nào là 18. Lệch 1px |
| Hero Mobile | ~~512px~~ | 327px | Thắng đã sửa trong Figma 24/09 |

### Kết quả đo **[xác minh]**

- `astro check`: 9 file, **0 lỗi, 0 cảnh báo**
- QA gate `#FFFFFF`: **0 vi phạm**; `255 255 255` chỉ còn ở đúng 2 chỗ được phép
- Mobile: lưới cao **2288px — khớp chính xác** số đo Figma
- Chụp 3 breakpoint: bố cục Desktop 5×4, Tablet 3×5, Mobile 1 cột — đúng cả ba

### Còn thiếu

- `public/img/baika-logo.webp` — Thắng export từ Figma node `543:4503`
- Artwork nền hiện là **xấp xỉ** bằng 4 lớp `radial-gradient` + blur. Figma dùng 5 vector blur riêng. Cần Thắng nhìn bản thật rồi nói đạt hay chưa

---

## DEC-042 · Trang chủ đã lên production — xác nhận bằng bản thật

*25/09/2026 · **[xác minh — ảnh chụp bản deploy thật]***

| | |
| --- | --- |
| Deployment | `9a80da1` *"Hero: dung anh logo lockup thay cho CSS"* · **Ready · Production · main** |
| Trước đó | `6f2dd6a` trang chủ · `e10eb26` khung — cả ba đều Ready |
| Địa chỉ | `bk-web-update-sep-2026.vercel.app` |

### Hai điều chỉ bản thật mới xác nhận được

Container của Agent bị chặn `fonts.googleapis.com`, nên **ảnh chụp kiểm tra ở phía Agent luôn dùng font dự phòng**. Bản trên Vercel xác nhận:

- **Font tải đúng** — tiêu đề ô là Chakra Petch, chữ thường là Be Vietnam Pro
- **Logo lockup sắc nét** ở 392×120, `srcset` 2x hoạt động

→ **Luật:** Agent không kết luận về typography từ ảnh chụp ở container. Chỉ bản deploy mới tính.

### Khối logo — đổi cách dựng

Thắng cung cấp PNG @2x chứa **cả dấu hiệu lẫn chữ "Baika" trong một khối**. Đã thay cả hai thứ Agent dựng riêng trước đó *(ô vuông xanh CSS + chữ CSS có gradient)* bằng một ảnh WebP.

**Vì sao ảnh tốt hơn CSS ở đúng chỗ này:**

| | |
| --- | --- |
| Chữ "Baika" | Là **logotype**, không thuộc thang chữ. Dựng bằng CSS thì phụ thuộc font tải về đúng weight — đã từng hỏng vì thiếu Chakra Petch 400 |
| Dấu hiệu | Có gradient và chi tiết nhiều lớp; vẽ lại bằng SVG dễ sai lệch |
| Kết quả | Đúng y bản gốc, không phụ thuộc gì, 16.6 KB |

Hệ quả phụ: **bỏ được Chakra Petch weight 400** khỏi link Google Fonts — không còn gì dùng tới nó.

### Sự cố phụ đã gỡ — `.git/index.lock` kẹt

Agent chạy `git status` qua shell máy ảo; shell đó **không có quyền xoá file** nên khoá tạm kẹt lại, chặn mọi lệnh git của Thắng. Gỡ bằng `del .git\index.lock` ở cmd Windows.

→ **Luật:** Agent chỉ **đọc và ghi file** trong repo qua shell máy ảo. **Mọi lệnh git do Thắng chạy ở cmd Windows.** Không chạy lệnh git nào tạo khoá từ phía Agent.

---

## DEC-043 · Nút trang chủ dựng lại theo hệ `Button 1`

*25/09/2026 · **[xác minh — đo 18 biến thể của 519:3354]***

Bản đầu dựng nhầm theo `Button 2` (nút bo tròn, Be Vietnam Pro). Instance thật trong hero là **534:3846 = `Button 1` · State=Normal · Type=Lg · 128×44**.

| | Sm | Md | Lg |
| --- | --- | --- | --- |
| Cao thân nút | 34 | 36 | 44 |
| Cỡ chữ | 14 | 16 | 18 |
| Hộp icon | 18 | 20 | 24 |

Chung mọi cỡ: bo góc **0** · chữ **Chakra Petch SemiBold**, UPPERCASE, line-height 125% · nền thân `--gray-50` · padding trái 16, phải 10, khoảng cách chữ↔icon 12 · icon nền `--blue-700`, glyph `--gray-50` (glyph = hộp × 10/24, nét = hộp × 2/24).

### Phát hiện mới: lớp `Button Background`

Button 1 có **hai lớp**, không phải một. Phía sau thân nút là một khung trang trí cao hơn 11px nên **thò ra bên dưới**: đường viền 0.5px `#CCCCCC` thụt vào 2px mỗi phía, cùng **4 ô vuông 4×4 `#1237C3`** đặt tâm vào 4 góc của đường viền. Phần trên bị thân nút đục che, chỉ lộ phần dưới.

Bản trước không có chi tiết này vì đo nhầm component.

### Trạng thái — khớp đúng ngôn ngữ tương tác DEC-014/015

| Trạng thái | Effect đo từ Figma | Token |
| --- | --- | --- |
| Hover | INNER_SHADOW r6 `#999999` (0,−4) | `--shadow-inner` |
| Active | INNER_SHADOW r12 `#000000` (0,4) spread 4 | `--shadow-inner-press` |
| Focus | Hover + DROP_SHADOW r6 `#FFFFFF` spread 1 | `--shadow-drop-inner` |
| Disabled | thân `--gray-700`, chữ `--gray-100`, 4 ô góc `--gray-500`, **icon giữ nguyên nền xanh** | — |

Hiệu ứng nằm trên **thân nút**, không phải khung trang trí.

**Chưa làm:** trạng thái `Loading` (cần component `loader` riêng, trang chủ chưa dùng tới).

---

## DEC-044 · Ô bento — sửa 4 điểm sai sau review

*25/09/2026 · **[xác minh — đo lại 518:2781]***

| Điểm | Trước | Sau |
| --- | --- | --- |
| Viền | `solid`, vẽ phía trong | `dashed`, mô phỏng align CENTER bằng `margin: -0.25px` để viền hai ô kề nhau chồng lên nhau |
| Icon mũi tên | không nền, glyph `--blue-700` | hộp 24×24 nền `--blue-700`, bo góc 0, glyph `--gray-50` nét 2 |
| Hover | chỉ đổi nền `--blue-50` (giống hệt Active) | thêm lớp `Hover BG`: gradient radial `--blue-700` → `--blue-100`, `filter: blur(24px)`, `backdrop-filter` 16 → 32 |
| Active | — | y hệt Hover **trừ lớp `Hover BG`**. Focus = Hover |

**Xác nhận điểm Thắng hỏi:** opacity trạng thái Default **có** dùng biến — `var(--opacity-white)` sinh thẳng từ `Colors/Opacity/White` (#FFFFFF @15%), không hardcode.

**Chi tiết kỹ thuật đáng nhớ:** lớp `Hover BG` phải nới rộng 24px mỗi phía rồi cắt bằng `overflow:hidden`. Nếu để vừa khít ô, blur sẽ ăn mòn mép thành trong suốt và hở nền phía sau.

---

## DEC-045 · Lưới bento lấp đầy màn hình

*25/09/2026 · **[quyết định của Thắng]***

Yêu cầu: *"Muốn toàn bộ các card đều hiển thị hết trong màn hình — Grid 20 ô scale full 100% Height & Width."*

| Breakpoint | Trước | Sau |
| --- | --- | --- |
| Desktop ≥1280 | 5 cột × 256px cố định, căn giữa, max-width 1280 | `repeat(5, 1fr)` × `repeat(4, minmax(140px, 1fr))`, tràn viền, cao `100svh` |
| Tablet ≥768 | 3 cột × 256px | `repeat(3, 1fr)` × `repeat(5, minmax(120px, 1fr))`, cao `100svh` |
| Mobile 375 | 1 cột, cuộn | **giữ nguyên cuộn** |

**Vì sao mobile không ép vừa màn:** 11 hàng trên một cột dọc mà nhét vào một màn thì mỗi ô còn ~60px — chữ không đọc được. Mục tiêu "20 ô một màn" là mục tiêu của lưới desktop.

**Vì sao `minmax` chứ không phải `1fr` trơn:** cửa sổ quá thấp thì ô ngừng co và trang cuộn, thay vì bóp ô đến mức chữ bị cắt.

---

## VD-003 · Sáu giá trị đo từ Figma KHÔNG có trong bộ token

*25/09/2026 · **[xác minh — chờ Thắng quyết]***

Luật mục 1 của dự án: *không tự chế token*. Em **nêu ra và dừng lại**, không tự thêm biến.

| Giá trị | Ở đâu | Token gần nhất | Ghi chú |
| --- | --- | --- | --- |
| `#CCCCCC` | viền khung trang trí Button 1 | `--gray-300` #D5D5D5 · `--gray-400` #C7C7C7 | nằm giữa hai bậc |
| `#1237C3` | 4 ô vuông góc Button 1 | *không có* | không thuộc thang `--blue-*` |
| `#000000` | màu chữ trên Button 1 | `--gray-950` #1E1E1E | đen tuyệt đối |
| `14px` | cỡ chữ Button Sm | `--fs-body` 15px | |
| `16px` | cỡ chữ Button Md | `--fs-body-lg` 17px | |
| `18px` | cỡ chữ Button Lg | *không có* | |

Hiện tại code ghi thẳng 6 giá trị này kèm chú thích `⚠️ CHƯA CÓ TOKEN`. Khi Thắng quyết (thêm biến vào Figma, hay nắn về token sẵn có), đổi một chỗ trong `Button.astro`.

---

## VD-004 · Artwork nền trang chủ — CSS không dựng lại được

*25/09/2026 · **[xác minh — đo 534:3940]***

Khối nền gồm **5 lớp** trong `Frame 2121454393` (2052×1409 tại −741,−537 so với khung Desktop):

| Lớp | Kiểu | Blur | Màu |
| --- | --- | --- | --- |
| Ellipse 16 | ELLIPSE | 120 | `#0D538B` → `#FFFFFF` |
| Vector 27 | **VECTOR** | 138 | `#AFD8F5` → `#0B1730` |
| Vector 25 | **VECTOR** | 200 | `#08111D` → `#1A5A8D` → `#FDFEFF` |
| Vector 26 | **VECTOR** | 200 | `#08111D` → `#1A5A8D` → `#2698ED` |
| Ellipse 17 | ELLIPSE | 120 | `#0F6BB0` → `#0B1730` |

**Ba trong năm lớp là VECTOR — hình tự do vẽ tay.** CSS chỉ có hình tròn và elip; không có cú pháp nào vẽ lại được hình tự do. Đây là lý do gốc khiến "dải màu không đúng màu và vị trí".

Thêm hai màu `#1A5A8D` và `#2698ED` cũng không có trong bộ token.

**Kết luận: xuất thành ẢNH, không phải SVG.**

| Cách | Đánh giá |
| --- | --- |
| CSS gradient | ✗ không vẽ được hình tự do |
| **SVG** | ✗ dựng được hình, nhưng 5 bộ lọc Gaussian 120–200px chạy **rất nặng**, giật khi cuộn trên máy yếu |
| **Ảnh WebP** | ✓ blur đã "nướng" sẵn vào pixel, trình duyệt chỉ việc vẽ. Đúng y bản gốc, nhẹ hơn |

Nguyên tắc chung: **blur lớn thì xuất ảnh; hình nét thì dùng SVG.**

Agent **không tải được** file xuất từ Figma — proxy chặn `figma.com` ở cả container lẫn máy ảo. Thắng phải tự xuất.

Bản trong code hiện tại là **bản tạm** — đã nắn đúng vị trí và kích thước đo từ Figma, nhưng hình vẫn là elip và hai màu lạ đang thay bằng token gần nhất.

---

## DEC-046 · Lưới bento — đối chiếu từng toạ độ với Figma

*25/09/2026 · **[xác minh — đo Grid Container ở cả 3 breakpoint]***

| Breakpoint | Figma | Kết luận |
| --- | --- | --- |
| Desktop `534:3826` | 1280×832 · 16 node (1 hero 512×416 + 15 ô 256×208) | **Bản đồ code KHỚP 100%** — không sửa gì |
| Tablet `540:4035` | 768×832 · 3 cột × 4 hàng · 8 ô dịch vụ | 4 hàng đầu khớp; **thiếu Trạm Ý Tưởng** |
| Mobile `540:4123` | 375×2288 · 1 cột · 9 ô, ô thứ 6 KHÔNG có chữ | ô thứ 6 chính là Trạm Ý Tưởng chưa gõ nhãn |

**Suy luận (không phải đo):** mobile có 9 ô, 8 ô có chữ, so với danh sách 9 mục thì thiếu đúng một cái — Trạm Ý Tưởng. Nên ô trống thứ 6 là nó.

**Thắng chốt:** Trạm Ý Tưởng phải có mặt ở cả 3 breakpoint.

→ Mobile: điền nhãn vào đúng ô thứ 6. Tablet: thêm hàng 5, kèm 2 ô rỗng để lưới vẫn là khối chữ nhật kín thay vì để một ô lẻ loi.

**Thắng chốt cách co giãn:** giữ nguyên **kéo giãn lấp kín 100%×100%**. Chấp nhận ô dẹt đi ~13% trên màn 16:9 so với tỉ lệ thiết kế 256:208.

---

## DEC-047 · Trục `Type` của Button 1 là BREAKPOINT, không phải cỡ

*25/09/2026 · **[xác minh — kiểm kê toàn bộ instance trên page UI]***

Trang Home có **đúng 3 instance** Button 1: `Lg` 128×44 ở Desktop · `Md` 117×36 ở Tablet · `Sm` 108×34 ở Mobile. Nhãn cả ba đều là "liên hệ".

→ `Sm/Md/Lg` mang nghĩa Mobile/Tablet/Desktop, giống trục `Type` của Footer, NVG header, ServiceLinkCard, Các gói.

**Hệ quả:** `Button.astro` thêm `size="auto"` — đổi chiều cao, cỡ chữ và cỡ icon theo breakpoint. Mọi chỗ dùng thật để `auto`. Ba bậc cố định chỉ dành cho style guide.

**Phương án đã loại:** ép `size="lg"` cố định — đúng ở desktop, sai ở tablet và mobile.

---

## DEC-048 · Cân bằng động cho khối logo hero

*25/09/2026*

Lưới giãn theo màn hình nhưng logo đứng yên ở 392px → trên màn 1920 ô hero rộng 768px mà logo vẫn 392px, thừa một mảng trống lớn.

Tỉ lệ đo từ Figma: hero 512 rộng, trừ 2×24 lề còn 464 — logo 392 chiếm **84.5%**. Giữ đúng tỉ lệ đó ở mọi cỡ màn, chặn trên 784px (đúng bề ngang file @2x, quá số đó ảnh nhoè).

Chú thích dài dòng còn lại — tagline giữ `max-width: 464px` cố định, **cố ý**: độ dài dòng chữ là chuyện typography, không nên giãn theo màn.

---

## VD-005 · Bốn điểm trong hệ Button chờ Thắng quyết

*25/09/2026 · **[xác minh]*** · Chi tiết đầy đủ: `claude/he-thong-button.md`

1. 🔴 **`Nav Button` dùng `Focus` để đánh dấu trang hiện tại.** Focus (con trỏ bàn phím, tạm thời) và "đang ở trang này" (cố định) là hai chuyện. Gộp lại làm hỏng WCAG 2.4.7. Đề xuất tách trục `Current = True | False`.
2. 🟠 **Mô tả `Nav Button` lỗi thời** — nhắc thuộc tính `Selected` không còn tồn tại, và nói "chưa có Hover/Focus" trong khi đã có đủ 4 biến thể. → Điểm treo *"Nav Button thiếu Hover+Focus chặn RC"* **đã xong**, gỡ khỏi danh sách chặn.
3. 🟠 **Button 2 cao 35 ở Normal nhưng 40 ở Hover** → nội dung bên dưới nhảy khi rê chuột.
4. 🟡 Button 2 chưa có mô tả · mặc định `Type=Sm` trong khi chưa bao giờ dùng Sm (nên đổi sang Md).

**Không phải lỗi:** 22 instance Button 2 đang ở `State=Hover` là trình bày trạng thái trong bản thiết kế, không phải mặc định. Bài học mục 7 — không sửa.

---

## DEC-049 · 🔴 Đơn vị blur — Figma gấp đôi CSS

*25/09/2026 · **[xác minh — chính Figma xuất ra]***

Lớp `Hover BG` ghi hiệu ứng **LayerBlur 24**, nhưng panel *Copy as CSS* của chính nó xuất `filter: blur(12px)`.

`tokens.css` đang chép nguyên số Figma làm giá trị CSS → **mọi hiệu ứng mờ trên site đậm gấp đôi thiết kế**.

**Đã sửa:** giữ TÊN token theo số Figma (để tra cứu), quy đổi GIÁ TRỊ sang hệ CSS — `--blur-24: 12px`, `--blur-120: 60px`, …

Thêm hai token cho `backdrop-filter` ô bento (trong Figma là giá trị rời, không phải style):
`--blur-card` 8px (Figma 16) · `--blur-card-alt` 16px (Figma 32).

**Phương án đã loại:** giữ 24px rồi chia 2 ở chỗ dùng (`calc(var(--blur-24)/2)`) — đúng nhưng rối, và chỉ cần quên một lần là sai lại.

**Luật mới:** trước khi chép một con số hiệu ứng từ Figma, mở *Copy as CSS* của chính lớp đó đối chiếu. Số trong panel thuộc tính không phải lúc nào cũng dùng thẳng được.

---

## DEC-050 · Hover BG — tâm gradient ở GÓC TRÊN PHẢI

*25/09/2026 · **[xác minh — hai nguồn độc lập]***

Bản cũ đặt tâm ở giữa ô → sắc độ sai chỗ.

Đúng, theo CSS Figma xuất:

```css
radial-gradient(179.94% 139.4% at 100% 0%, var(--blue-700) 0%, var(--blue-100) 100%)
filter: blur(12px)
```

Kiểm chéo: giải ma trận `gradientTransform` của style `Hover BG Bento` ra tâm (1, 0) — khớp `at 100% 0%`.

Khung phủ đúng kích thước ô (`inset: 0`), không nới rộng như bản trước — blur làm nhoè mép thành trong suốt đúng như Figma, `.tile` cắt phần thừa.

---

## DEC-051 · Mũi tên bento luôn hiện ở Tablet/Mobile

*25/09/2026 · **[xác minh — đọc `visible` từng biến thể]***

| Biến thể | `arrow.visible` |
| --- | --- |
| Desktop / Default | **false** |
| Tablet / Default · Mobile / Default | **true** |
| Mọi Hover · Active · Focus | true |
| Placeholder | false |

Màn cảm ứng không có trạng thái rê chuột — giấu mũi tên là mất hẳn dấu hiệu "ô này bấm được". Bản cũ giấu ở mọi breakpoint.

Cũng đã kiểm: lớp `Hover BG` có `visible=true` ở **Hover và Focus**, `false` ở **Active** và mọi Default.

---

## DEC-052 · Button 1 bỏ lớp `Button Background`

*25/09/2026 · **[xác minh — Thắng đã xoá trong Figma]***

Mỗi biến thể giờ chỉ còn `Button Content`. Khung trang trí (viền 0.5px + 4 ô vuông góc) không còn.

**Hệ quả tốt:** hai màu lạc token `#CCCCCC` và `#1237C3` biến mất khỏi hệ. VD-003 rút từ 6 điểm xuống 4 — còn `#000000` và ba cỡ chữ 14/16/18.

---

## VD-006 · 🔴 Màu stroke ô bento — Figma và chỉ định lệch nhau

*25/09/2026 · **[xác minh]***

| Nguồn | Giá trị |
| --- | --- |
| Thắng chỉ định trong tin nhắn | `--gray-700` = `#6D6D6D` |
| Figma đang bind thật | `Colors/Neutral 2/--gray-600` = `#8A8A8A` |

Kiểm bằng ID biến (`VariableID:220:8`), không đoán theo mã màu.

**Code đang theo chỉ định của Thắng.** Như vậy code lệch Figma — mà Figma là nguồn chân lý. Cần Thắng đổi trong Figma, hoặc bảo Agent quay về `--gray-600`.

---

## DEC-053 · Độ khớp System 25/09: 75% → 93%

*25/09/2026* · Chi tiết: `claude/ra-soat-system-2509.md`

44 điểm kiểm đo được. Đạt 41. Ba điểm chưa đạt: artwork nền (chờ file xuất) · trạng thái `Loading` của Button 1 (chưa cần) · màu stroke bento (VD-006).

---

## DEC-054 · Artwork nền — xong, dùng ảnh WebP 2.9 KB

*25/09/2026 · **[xác minh — Thắng xuất từ Figma]***

Thắng xuất bản crop đúng khung Desktop 1280×832, scale 0.5x → **640×416 PNG, 282 KB**.
Agent chuyển WebP q80 → **2.9 KB**. Toàn bộ trang build ra chỉ còn **108 KB**.

Đặt bằng `background-size: cover` — không cần tính toạ độ vì ảnh đã crop sẵn theo khung.
**KHÔNG thêm `filter: blur()`** — blur đã nằm trong pixel.

**Vì sao 640px đủ cho màn 4K:** cả khối là blur, không có một chi tiết sắc nét nào để mất
khi phóng to. Đây cũng là lý do 282 KB nén xuống còn 2.9 KB.

**Phương án đã loại:** SVG — dựng đúng hình nhưng cần 5 bộ lọc Gaussian 30–100px phủ kín
màn hình, giật khi cuộn. CSS gradient — 3/5 lớp là VECTOR, CSS không vẽ được hình tự do.

**Luật chung:** blur lớn → xuất ảnh. Hình nét (icon, logo đường nét) → SVG.

---

## DEC-055 · Style `Hover BG 2` — gradient riêng cho Trạm Ý Tưởng

*25/09/2026 · **[xác minh — hai nguồn độc lập]***

```css
radial-gradient(148.1% 114.33% at 83.7% 19.23%, #118888 0%, var(--blue-100) 100%)
filter: blur(12px)
```

Kiểm chéo: giải ma trận `gradientTransform` của style ra tâm (0.83699, 0.19230) — khớp
`at 83.7% 19.23%` trong CSS Figma xuất.

Chỉ instance `534:3833` (Trạm Ý Tưởng) ghi đè `fillStyleId` sang style này; tám ô còn lại
dùng `Hover BG Bento`. Code thêm prop `hoverStyle: 'bento' | 'bento-2'`.

⚠️ **`#118888` chưa có trong bộ token** — màu xanh lục lam, không thuộc thang `--blue-*`.
Gần nhất là màu trụ Vận hành (`--dam` #005545 / `--trung` #01BB98) nhưng lệch xa.

---

## DEC-056 · 🔑 Focus khác Hover ở chỗ CẮT hay KHÔNG CẮT

*25/09/2026 · **[xác minh — đọc `clipsContent` từng biến thể]***

Đây là thứ Agent đã bỏ sót suốt mấy vòng, và là thứ DUY NHẤT phân biệt hai trạng thái:

| Trạng thái | `clipsContent` | Kết quả nhìn thấy |
| --- | --- | --- |
| Hover | **true** | gradient cắt gọn trong ô |
| Focus | **false** | gradient tràn ra ngoài thành **quầng sáng** |

Khớp đúng ngôn ngữ tương tác của hệ (DEC-014/015): **quầng sáng thuộc về Focus và chỉ Focus.**

Code: `.tile { overflow: hidden }` mặc định, `.tile--link:focus-visible { overflow: visible }`.

---

## DEC-057 · Ô nổi bật — dựng thành dạng riêng, KHÔNG mượn `:focus`

*25/09/2026 · **[quyết định của Thắng]***

Figma Home Desktop: **Trạm Ý Tưởng** ở `State=Hover` (Hover BG 2, không quầng) ·
**Tư vấn Doanh nghiệp** ở `State=Focus` (Hover BG Bento, có quầng). Bảy ô còn lại Default.

Thắng chốt: **hai ô này sáng sẵn ngay khi tải trang** — là ô nổi bật, không phải trình bày trạng thái.

**Vì sao không gán thẳng trạng thái Focus của CSS:** Focus là trạng thái con trỏ bàn phím
đang đứng — tạm thời, đổi liên tục khi bấm Tab. Gán cố định thì người dùng bàn phím thấy
hai ô giống hệt nhau và không biết mình đang ở đâu (**lỗi WCAG 2.4.7**).

→ Dựng hai prop riêng: `featured` (sáng sẵn) và `glow` (quầng sáng tràn ra).
Focus của bàn phím vẫn hoạt động độc lập bên trên.

**Thêm ngoài Figma, chờ Thắng duyệt:** ô đã nổi bật thì bấm Tab vào không tạo khác biệt nào.
Agent thêm viền focus `2px solid var(--blue-700)`, offset 2px.

---

## VD-007 · 🟠 Ba điểm lệch giữa ba khung Figma của trang chủ

*25/09/2026 · **[xác minh — đo lại 25/09]***

1. **Tablet giờ thiếu `CÔNG NGHỆ AI ỨNG DỤNG`.** Vòng trước thiếu `TRẠM Ý TƯỞNG`; sau khi
   Thắng sửa, ô (512,0) đổi từ CÔNG NGHỆ AI sang TRẠM Ý TƯỞNG — **thay chỗ chứ không thêm hàng**.
   Tablet vẫn chỉ có 8 ô. Nghi là đổi nhầm nhãn.
2. **Tablet không có ô nổi bật nào** (cả 8 đều Default), **Mobile chỉ có Tư vấn Doanh nghiệp**
   nổi bật, **Desktop có hai**. Code đang cho nổi bật ở CẢ BA breakpoint — vì "ô nổi bật" là
   thuộc tính của nội dung, không phải của khung màn hình. Cần Thắng đồng bộ lại Figma.
3. **Instance ở khung Mobile đang dùng `Type=Desktop`** thay vì `Type=Mobile` (đã resize tay
   về 327). Không sai hình, nhưng sai hệ — sửa để trục Type còn nghĩa.

---

## DEC-058 · Tiêu đề ô bento KHÔNG ép viết hoa

*25/09/2026 · **[xác minh]***

Text style `Global Tokens/Headings/H-2` (Chakra Petch Bold 24 / lh 29), `textCase = ORIGINAL`.
Chữ hoa là do gõ hoa sẵn trong nội dung, không phải component ép.

Đã bỏ `text-transform: uppercase` khỏi code để nhãn nào cần viết thường sau này vẫn ra đúng.

Ghi chú: trong component còn một text thứ hai (`body-lg`, mô tả) đang bị ẩn — Container cao
29px đúng bằng một dòng H-2. Có thể dùng về sau.

---

## DEC-059 · Thêm biến `--cyan` vào bộ Primary

*25/09/2026 · **[đã ghi vào Figma — Thắng yêu cầu]***

| | |
| --- | --- |
| Figma | `Colors/Primary/--cyan` = `#118888` · id `VariableID:718:2741` |
| Scopes | `ALL_FILLS`, `STROKE_COLOR` — chép đúng scopes của `--blue-700` |
| Bind | **Đã bind** vào điểm đầu của paint style `Hover BG 2` |
| Code | `--cyan: #118888` trong mục 1 của `tokens.css` |

Đây là màu DUY NHẤT trong bộ Primary không thuộc thang xanh dương.

→ Danh sách "giá trị chưa có token" (VD-003) rút xuống còn **3**: `#000000` và ba cỡ chữ 14/16/18 của Button 1.

---

## DEC-060 · 🔴 Không gán `grid-area` bằng style nội tuyến

*25/09/2026 · **[xác minh — đã làm vỡ lưới tablet rồi sửa]***

`BentoCard` từng gán `style="grid-area: tech"`. **Style nội tuyến thắng mọi rule trong stylesheet**, nên trang không thể đặt lại vị trí một ô cho riêng một breakpoint.

Hậu quả thật: tablet cần ô Công nghệ AI nằm đè lên góc hero (đặt bằng số dòng/cột). Rule CSS bị style nội tuyến ghi đè → tên `tech` không tồn tại trong bản đồ tablet → trình duyệt tự đẻ thêm cột/hàng ngầm → **vỡ toàn bộ lưới tablet**, mất luôn một ô.

**Cách sửa:** style nội tuyến chỉ đặt BIẾN (`--area`), CSS đọc biến đó (`grid-area: var(--area)`). Trang vẫn đặt lại được bằng rule thường, không cần `!important`.

**Luật:** component nhận vị trí từ trang thì truyền qua biến CSS, không gán thẳng thuộc tính.

---

## DEC-061 · Lưới Tablet — khối hero hình chữ L

*25/09/2026 · **[xác minh — quét đệ quy]***

⚠️ **Đính chính VD-007 điểm 1:** Tablet KHÔNG thiếu ô nào. Agent quét sai — chỉ đọc con trực tiếp của `Grid Container` nên không thấy ô `CÔNG NGHỆ AI ỨNG DỤNG` đang nằm LỒNG trong `Container` (khối hero) tại (256,208).

Bản đồ tablet thật — 3 cột × 4 hàng, đủ 9 ô, không có ô rỗng:

```
hero hero idea
hero tech ceo
ops  adv  mkt
conn fin  legal
```

Khối hero phủ (0,0)–(512,416) nhưng ô `tech` nằm đè lên góc dưới–phải của nó → hero thực chất là **hình chữ L**. `grid-template-areas` chỉ nhận vùng hình chữ nhật, nên `tech` phải đặt bằng số dòng/cột (`grid-area: 2 / 2 / 3 / 3`) và chồng lên hero. Nó đứng sau hero trong DOM nên vẽ đè lên — đúng thứ tự lớp của Figma.

**Hệ quả cho hero:** ở tablet nội dung phải dồn LÊN TRÊN. Hai lý do cùng chỉ một hướng: Figma đặt vậy (chữ "Baika" ở y=52), và nếu dồn xuống đáy thì dòng mô tả chui xuống dưới ô `tech`.

Căn nội dung hero theo breakpoint: Mobile **giữa** · Tablet **trên** · Desktop **đáy** — cả ba đều đo từ Figma.

---

## DEC-062 · Mobile — ô ở giữa màn hình thì sáng

*25/09/2026 · **[Thắng mô tả hành vi]***

> "Tất cả các Bento đều sáng khi lướt tới. Tư vấn Doanh nghiệp sáng vì nó đang là center; lướt tiếp đến khi Pháp lý & Thuế tới center thì đổi trạng thái giữa hai bento cho nhau."

→ Trên mobile **không có ô nổi bật cố định**. Trạng thái sáng chạy theo vị trí cuộn.

**Cách làm:** `IntersectionObserver` với `rootMargin: -50% trên và dưới`. Hai lề âm 50% thu vùng quan sát thành một ĐƯỜNG KẺ ngang giữa màn hình. Ô nào chạm đường kẻ đó thì sáng. Các ô xếp liền nhau nên tại một thời điểm chỉ đúng một ô chạm — không cần so sánh khoảng cách.

**Phương án đã loại:** `animation-timeline: view()` của CSS thuần — chưa chạy trên Safari, mà iPhone chiếm phần lớn lượt truy cập mobile.

**Không có JS:** mọi ô hiển thị ở Default. Mất hiệu ứng, không hỏng trang.

Đã kiểm bằng cuộn thật: scrollY 500 → Đào tạo CEO · 900 → Hệ thống hoá vận hành · 1300 → Marketing. Đúng một ô sáng tại mỗi thời điểm.

---

## DEC-063 · Chữ trong ô bento chiếm trọn bề ngang

*25/09/2026 · **[Thắng chỉ định]***

`width: 100%` + `min-width: 0` cho thẻ tiêu đề. Figma: `Container` rộng 208 = 256 − 24×2, sizing ngang FIXED.

Trước đó thẻ `h2` là flex item nên chỉ rộng bằng chữ — chỗ ngắt dòng không tính theo đúng bề ngang ô.

---

## VD-008 · Ba điểm nhỏ còn lệch giữa các khung Figma

*25/09/2026 · **[xác minh]***

1. **Trạm Ý Tưởng: Desktop đặt `State=Hover` (không quầng), Tablet đặt `State=Focus` (có quầng).** Code theo Desktop — Thắng đã nói "Tablet giống Desktop". Cần đồng bộ trong Figma.
2. **Khối hero khác nhau giữa ba khung:** Desktop có frame `Logo` 392×120; **Tablet KHÔNG có frame Logo**, chỉ có chữ "Baika" 210×75 đặt thụt vào x=136; Mobile tách rời logo 80×80 và chữ 160×60, lề trái x=5 (không phải 24). Code dùng một ảnh lockup chung, tỉ lệ 84.5% — khớp Desktop. Cần Thắng xác nhận Tablet/Mobile.
3. **Ô thứ 6 ở Mobile vẫn mang nhãn mặc định "ERP Integrations"** — đây chính là ô Trạm Ý Tưởng, chưa gõ nhãn. Code đã điền đúng.

---

## DEC-064 · Ảnh nền — nâng lên 2560px, sửa lỗi "nhìn rõ pixel"

*25/09/2026 · **[xác minh — đo và chụp phóng to]***

Thắng báo nền hiện lên rõ từng ô pixel như ảnh kém chất lượng. **Nguyên nhân là ĐỘ PHÂN GIẢI, không phải nén.**

Bản cũ 640×416. Trên màn 1920 nó bị kéo giãn **3 lần** — mỗi pixel gốc thành một khối 3×3, cộng thêm khối lượng tử hoá 4×4 của WebP → mảng vuông nhìn thấy được.

Bài học trước ("cả khối là blur nên 640px là đủ") **chỉ đúng một nửa**: đúng ở chỗ blur không có chi tiết để mất, nhưng sai ở chỗ *khối nén* thì vẫn bị phóng to theo.

Thắng xuất lại bản **2560×1664 (2×)**, 3.86 MB PNG. Bảng thử:

| Kích thước | q82 | q90 | q95 | Lossless |
| --- | --- | --- | --- | --- |
| 1600px | 11.9 KB | 18.9 KB | 34.2 KB | 852 KB |
| 2048px | 17.6 KB | 27.8 KB | 51.1 KB | 1476 KB |
| **2560px** | 24.6 KB | **39.1 KB ✔** | 73.4 KB | 2292 KB |

**Chọn 2560px q90 = 39 KB.** Đúng 2× khung thiết kế 1280×832, không phải phóng to trên màn 4K.
Đã chụp phóng to 2× vùng gradient mịn nhất để kiểm — không còn khối, không còn dải màu.

Cả trang build ra: **148 KB** (trước 108 KB).

*PSNR không dùng để chọn được ở đây: chênh lệch giữa các bản chỉ 46–48 dB vì ảnh gần như phẳng hoàn toàn. Phải nhìn bằng mắt ở mức phóng to.*

---

## DEC-065 · `srcset` của logo phải dùng bộ mô tả `w`, không phải `x`

*25/09/2026 · **[xác minh — phát hiện khi soi ảnh phóng to]***

Từ DEC-048 logo giãn theo ô hero (84.5%), nên trên màn 1920 nó rộng ~608px. Nhưng `srcset` đang dùng bộ mô tả `1x / 2x` — trình duyệt chọn file theo **mật độ điểm ảnh của màn**, không theo bề ngang hiển thị. Màn thường (DPR 1) luôn lấy file 392px rồi kéo lên 608px → nhoè.

**Sửa:** đổi sang bộ mô tả `w` kèm `sizes` khai báo bề ngang thật theo từng breakpoint:

```html
srcset="/img/baika-lockup.webp 392w, /img/baika-lockup@2x.webp 784w"
sizes="(min-width:1280px) min(33.8vw,784px), (min-width:768px) min(56.3vw,784px), min(84.5vw,784px)"
```

**Luật:** ảnh có bề ngang CỐ ĐỊNH thì dùng `1x/2x`. Ảnh GIÃN theo khung thì bắt buộc dùng `w` + `sizes`.

---

## VD-009 · 🟠 Màu viền ô bento — hai nguồn lại lệch nhau

*25/09/2026 · **[xác minh]***

| Nguồn | Giá trị |
| --- | --- |
| CSS Thắng gửi 25/09 | `Colors/Opacity/White` = `#FFFFFF @15%` |
| **Figma đang bind thật** (cả 11 biến thể) | `Colors/Opacity/Light` = `#D5D5D5 @50%` |

Kiểm bằng ID biến `VariableID:640:4049` trên từng biến thể, không đoán theo mã màu.

**Code đang theo Figma (`--opacity-light`)** — vì lần lệch trước (gray-700 vs gray-600) Thắng đã chốt lấy Figma làm chuẩn. Đổi lại chỉ mất một dòng trong `BentoCard.astro`.

Đã chụp hai bản để Thắng so bằng mắt.

**Điểm khớp:** CSS Thắng gửi ghi `backdrop-filter: blur(8px)` — đúng bằng `--blur-card`. Đây là xác nhận độc lập cho DEC-049 (Figma 16 → CSS 8).

---

# TRANG LIÊN HỆ — 25/09/2026

## DEC-066 · Form gửi qua hàm serverless trên Vercel + Resend

*25/09/2026 · **[quyết định của Thắng]***

Site tĩnh không có chỗ nào nhận dữ liệu form. Ba phương án đưa ra, Thắng chọn **tự sở hữu hoàn toàn**.

| Phương án | Vì sao loại / chọn |
| --- | --- |
| Formspree | Dễ nhất, không cần khoá trong repo. **Loại** — dữ liệu khách đi qua bên thứ ba |
| **Vercel + Resend** | ✅ **Chọn.** Miễn phí 3000 mail/tháng, dữ liệu thuộc về BAIKA |
| Chưa nối | Loại — form gửi mà không ai nhận là mất lead thật |

**Cách dựng — giữ nguyên site tĩnh:** đặt `api/contact.ts` ở **gốc repo**, không phải trong `src/`. Vercel tự nhận thư mục `api/` và biến nó thành hàm chạy trên máy chủ, trong khi phần còn lại vẫn build tĩnh. **Astro vẫn `output: 'static'`, vẫn không có adapter** — không phá DEC-001.

**Phương án đã loại:** dùng adapter `@astrojs/vercel` + `output: 'hybrid'`. Đúng kiểu Astro hơn nhưng phải đổi cấu hình nền tảng đã chốt, chỉ để phục vụ một endpoint.

**Không thêm thư viện `resend`** — gọi thẳng API của họ bằng `fetch`. Ít một thứ phải cập nhật về sau.

Chỉ thêm đúng một devDependency: `@types/node` (để TypeScript biết `process.env`).

### Bảo vệ đã cài sẵn

| | |
| --- | --- |
| Bẫy spam | Ô `website` ẩn. Máy tự động điền vào → trả 200 như thật nhưng **không gửi mail**, để máy spam không biết mình bị chặn |
| Kiểm lại trên máy chủ | Kiểm ở trình duyệt chỉ để người dùng thấy lỗi sớm. Ai cũng POST thẳng vào endpoint được, nên máy chủ kiểm lại toàn bộ |
| Chặn chèn dòng | Tiêu đề thư lọc `\r\n` — không cho chèn header giả |
| Cắt độ dài | Mỗi ô có giới hạn ký tự |
| `reply_to` | Đặt bằng email khách → bấm Trả lời là trả lời đúng người |

⛔ **Ba biến môi trường đặt trên Vercel, KHÔNG trong repo:** `RESEND_API_KEY` · `CONTACT_TO` · `CONTACT_FROM`. `.env.example` chỉ có tên biến.

⚠️ **Chưa kiểm chứng được:** Vercel có build thư mục `api/` ở gốc cho dự án dùng preset Astro hay không — tài liệu nói có, nhưng phải thấy bản deploy thật mới chắc. Nếu không chạy, phương án dự phòng là adapter `@astrojs/vercel`.

---

## DEC-067 · Form Liên hệ: 4 ô + checkbox đồng ý

*25/09/2026 · **[quyết định của Thắng]***

Hai nguồn lệch nhau: **Figma trang Liên hệ** có 4 ô, không checkbox. **Spec đã khoá** và 3 frame `Form States` có 6 ô + checkbox.

Thắng chốt: **giữ 4 ô như bản vẽ, THÊM checkbox**.

- 4 ô: Tên · Email · Số điện thoại · Mô tả vấn đề — form ngắn thì tỉ lệ điền cao hơn, mà trang này chỉ cần đủ để gọi lại.
- Checkbox *"Tôi đồng ý để Baika liên hệ và xử lý thông tin theo chính sách bảo mật"* — **bắt buộc**, không phải lựa chọn thiết kế: thu số điện thoại và email của người khác mà không có điểm đồng ý rõ ràng là rủi ro pháp lý cho công ty.

→ Cần Thắng vẽ thêm ô checkbox vào Figma trang Liên hệ cho khớp.

---

## DEC-068 · Chữ "Contact" cỡ lớn — fill opacity 15%

*25/09/2026 · **[xác minh — suýt dựng sai]***

Bản dựng đầu để chữ sáng nguyên, nó át hết cột nội dung bên trái. Đo lại thì `fills[0].opacity = 0.15`.

Số đo đầy đủ: Chakra Petch Regular · 300px (Desktop) / 200 (Tablet) / 100 (Mobile) · line-height 75% · letter-spacing **−10px** · gradient `#D6EBFA` → `#1D6297` alpha 0 · **fill opacity 15%**.

Giải ma trận gradient: `t = 1.3393·y − 0.3393` → màu đặc từ đỉnh tới **y = 25.3%**, rồi nhạt dần tới 0 ở đáy.

**Bài học:** đọc fill của một node thì đọc cả `opacity` của paint, không chỉ màu. Cùng họ với bài học `--blur` và bài học `styleId` trước đây — **một thuộc tính trong Figma hiếm khi chỉ có một con số.**

⚠️ Ba cỡ 100/200/300px không nằm trong thang chữ 9 bậc. Đây là hoạ tiết chữ, không phải một bậc tiêu đề — đặt `aria-hidden` vì tiêu đề thật của trang là thẻ `h1` (đoạn "Cảm ơn bạn đã quan tâm…", text style H-1).

---

## DEC-069 · Header trong suốt — nền trắng trong Figma là nền mặc định

*25/09/2026 · **[xác minh — đối chiếu bằng ảnh render]***

`NVG header` báo fill `#F8F8F8` ở cả 6 biến thể. Nếu dựng theo thì đầu trang có một dải trắng 128px. Chụp lại frame thật thì **không có dải nào** — đó là nền mặc định của khung component Figma, không phải thiết kế.

Cùng chuyện đó ở `Checkbox` (`#F8F8F8` trên khung 20×20) và `Nav Button` (`#F4F7FA`). Bằng chứng nội tại: ô tick khi Checked có ruột `#1E1E1E` viền `#F8F8F8` — chỉ có nghĩa trên nền tối.

**Luật:** fill trắng trên khung một COMPONENT mà không thấy trong ảnh render thì đó là nền mặc định của Figma. Kiểm bằng ảnh chụp frame trước khi dựng.

---

## DEC-070 · Ô nhập — thêm 2 thứ ngoài Figma

*25/09/2026 · **[đã nêu từ DEC-028/029, nay dựng]***

| Thêm gì | Vì sao |
| --- | --- |
| **Trạng thái Error** | Trong Figma `Error` giống HỆT `Default` từng giá trị một — ô sai không có dấu hiệu nào. Thêm viền `--red-200` + dòng nhắc `--red-100`, **giữ chữ `--gray-50`** để người dùng đọc được thứ mình vừa gõ |
| **Quầng sáng khi Focus** | Figma chỉ tăng độ mờ nền 25% → 50%, mà "sáng lên" là ngôn ngữ của Hover theo DEC-014. Thêm `--shadow-drop-inner` |

Cũng thêm `<label class="sr-only">` cho mỗi ô: bản vẽ để chữ gợi ý đóng vai nhãn, nhưng gõ xong là chữ đó biến mất — người dùng trình đọc màn hình mất tên ô.

→ **Đề xuất về sau:** cho nhãn hiện hẳn bên trên ô. Cần Thắng quyết.

---

## VD-010 · Còn thiếu để trang Liên hệ hoàn chỉnh

*25/09/2026*

1. 🔴 **Ba đường dẫn mạng xã hội** — Facebook / Instagram / Linkedin chưa có URL. Đang hiện chữ màu `--gray-600` và **không bấm được**, thà vậy còn hơn link chết.
2. 🟠 **Nền menu mở** — Figma dùng `Vector 14`, một hình tự do tô đặc `--gray-950`. Đây là hình **phẳng, không blur** → **xuất SVG là đúng** (khác artwork nền phải xuất ảnh vì blur nặng). Tạm dùng lớp phủ chữ nhật mờ dần.
3. 🟠 **Checkbox chưa có trong Figma trang Liên hệ** — xem DEC-067.
4. 🟡 **Hai màu trong gradient khung menu chưa có token:** `#D9D9D9` (gần `--gray-300`) và `#7C7C7C` (giữa `--gray-700` và `--gray-600`).
5. 🟡 **Cỡ chữ 18px của `Nav Button`** không nằm trong thang chữ — cùng nhóm với 14/16/18 của Button 1.
6. 🟡 **Khung Mobile của `NVG header` rộng 390**, trong khi breakpoint mobile đã chốt là **375** (DEC-031). Code dựng theo 375.

---

## DEC-071 · Gỡ mục chặn RC: `Nav Button` đã đủ Hover + Focus

*25/09/2026 · **[xác minh]***

`CLAUDE.md` mục 11 và nhiều tài liệu vẫn ghi *"Nav Button thiếu Hover + Focus — chặn Release Candidate"*. Đo lại: component có **đủ 4 biến thể** `Default · Hover · Active · Focus`. Thắng đã xử lý.

Còn lại một việc: mô tả component vẫn nhắc thuộc tính `Selected` không còn tồn tại, và `Focus` đang bị dùng để đánh dấu trang hiện tại (VD-005). Trong code đã tách: `aria-current="page"` cho trang hiện tại, `:focus-visible` cho con trỏ bàn phím.

---

## DEC-072 · Rà soát trang Liên hệ 25/09 — 4 điểm, cả 4 đều khớp Figma

*25/09/2026 · **[xác minh — đo lại cả 3 breakpoint trước khi sửa]***

Lần này CSS Thắng gửi và Figma **nói giống nhau ở cả bốn điểm**. Ghi lại vì mấy vòng trước toàn lệch.

| # | Điểm | Trước | Sau |
| --- | --- | --- | --- |
| 1 | Màu social link | `--gray-600` (Agent tự làm mờ vì chưa có URL) | **`--gray-50`** đúng thiết kế, text style H-2 |
| 2 | Bo góc ô nhập | `0` | **`--r-sm` = 8** — Thắng đã đổi trong Figma, cả 10 biến thể |
| 3 | Cỡ chữ "Contact" | px cố định 300/200/100 | **theo bề ngang màn hình** |
| 4 | Layout Contact Section | canh theo `gap`, tràn hết bề ngang | **`space-between`, giới hạn 1280, căn giữa** |

### Điểm 1 — bài học nhỏ

Agent tự ý làm mờ ba dòng social xuống `--gray-600` để báo hiệu "chưa bấm được". Đó là **tự sửa thiết kế**, không phải việc của Agent. Giờ giữ đúng `--gray-50`, chỉ bỏ con trỏ bàn tay và bỏ gạch chân khi rê — không hứa một cú bấm không dẫn tới đâu.

### Điểm 3 — "Desktop width 80% view"

Đo khớp: chữ rộng 1028 trên khung 1280 = **80.3%**.

| Breakpoint | Cỡ Figma | Đổi sang vw | Chiếm bề ngang |
| --- | --- | --- | --- |
| Desktop 1280 | 300px | **23.44vw** | 80.3% |
| Tablet 768 | 200px | **26.04vw** | 86.6% |
| Mobile 375 | 100px | **26.67vw** | 80.8% |

Dùng `vw` thì tỉ lệ giữ nguyên ở **mọi** cỡ màn, không chỉ đúng tại ba con số 1280/768/375.

`letter-spacing` −10px viết lại bằng `em` để giãn theo cỡ chữ: −0.0333em (Desktop) · −0.05em (Tablet) · −0.1em (Mobile) — cả ba đều ra đúng −10px tại bề ngang thiết kế.

### Điểm 4 — Contact Section

Đo Figma:

| Breakpoint | Layout | Căn | Padding | Con |
| --- | --- | --- | --- | --- |
| Desktop | HORIZONTAL | **SPACE_BETWEEN** · trên | 0 40 | FIXED 560 · FIXED 600 |
| Tablet | VERTICAL | trên | 0 40 | FILL 688 |
| Mobile | VERTICAL | trên | 0 **24** | FILL 327 |

1280 − 80 padding = 1200 chỗ trống; 560 + 600 = 1160 → hai cột cách nhau đúng 40.

**Thêm `max-width: 1280` + `margin-inline: auto`:** từ 1280px trở lên nội dung dừng giãn và căn giữa. Khác trang chủ (lưới bento tràn viền) — ở đây là chữ và form, dòng chữ dài quá thì khó đọc.

⚠️ **Một hệ quả cần Thắng xem:** chữ "Contact" bám theo bề ngang MÀN HÌNH (80%), còn nội dung dừng ở 1280. Trên màn 1920 chữ rộng ~1536 trong khi khối nội dung chỉ 1280 — chữ trôi ra ngoài hai bên. Nếu muốn chữ bám theo khối nội dung thay vì màn hình thì đổi `23.44vw` → `23.44%` của khung 1280. Chờ Thắng nhìn bản thật rồi quyết.

---

## DEC-073 · Contact Section trải hết trang, hai cột giãn theo tỉ lệ

*25/09/2026 · **[quyết định của Thắng]*** — thay phần cuối DEC-072

Thắng chốt **"Contact Section: Fill Page"** → bỏ `max-width: 1280` mà Agent thêm ở vòng trước. Khối trải hết màn hình, giống lưới bento ở trang chủ.

**Cách dựng:** đặt `flex-grow` bằng chính số đo Figma —

```css
.contact__info     { flex: 560 1 0; }
.contact__formwrap { flex: 600 1 0; }
```

Đo lại bản build:

| Bề ngang màn | Cột thông tin | Cột form | Cách nhau | Tỉ lệ |
| --- | --- | --- | --- | --- |
| 1280 | **560** | **600** | **40** | 48.3 / 51.7 |
| 1600 | 714 | 766 | 40 | 48.2 / 51.8 |
| 1920 | 869 | 931 | 40 | 48.3 / 51.7 |

Ở 1280 ra **đúng** số đo Figma; màn rộng hơn thì nở ra nhưng giữ nguyên tỉ lệ.

**Phương án đã loại:** giữ cố định 560/600 rồi `space-between` — trên màn 1920 sẽ hở một khoảng trống ~760px giữa hai cột.

**Hệ quả tốt ngoài dự tính:** điểm treo ở cuối DEC-072 tự hết. Chữ "Contact" bám bề ngang màn hình, giờ nội dung cũng vậy → hai thứ lại cùng một hệ quy chiếu, không còn lệch nhau trên màn rộng.

**Quan sát còn lại (không chặn):** ở 1920 dòng mô tả dài ~90 ký tự, trên mức dễ đọc (45–75). Nếu muốn, giới hạn riêng bề rộng đoạn chữ đó mà vẫn để cột giãn — một dòng CSS.

---

## DEC-074 · Contact Section bắt đầu ở Y = 200

*25/09/2026 · **[quyết định của Thắng]***

Figma đo được **240**. Thắng chốt đổi sang **200** — áp dụng cho cả ba breakpoint.

Header cao 128 → còn **72px** thở giữa header và dòng chữ đầu tiên.

Đã kiểm bản build: Desktop 1280 · Tablet 768 · Mobile 375 đều bắt đầu đúng y = 200.

⚠️ 200 không nằm trong thang `--s-*` (thang dừng ở 96). Đây là **toạ độ bố cục của một section**, không phải khoảng cách giữa hai thành phần — cùng loại với 240px của bản trước, nên viết thẳng kèm chú thích thay vì thêm một bậc vào thang spacing.

→ Cần đồng bộ lại Figma cho khớp 200.

---

## DEC-075 · Hai cột trang Liên hệ cố định 560 / 600 — sửa lại DEC-073

*25/09/2026 · **[quyết định của Thắng, có số đo cụ thể]***

Thắng đưa thẳng CSS cho hai cột:

```css
/* Contact Information */        /* Form Container */
width: 560px;                    width: 600px;
flex-direction: column;          flex-direction: column;
align-items: flex-start;         align-items: flex-start;
gap: 40px;                       gap: var(--s-6);   /* 24 */
flex-shrink: 0;                  flex-shrink: 0;
```

→ **Huỷ cách `flex-grow` ở DEC-073.** Hai cột KHÔNG nở theo màn nữa.

Kết hợp với DEC-073 (khối trải hết trang) và `space-between`, kết quả đo được:

| Bề ngang màn | Cột thông tin | Cột form | Khoảng giữa |
| --- | --- | --- | --- |
| 1280 | 560 | 600 | **40** — đúng Figma |
| 1600 | 560 | 600 | 360 |
| 1920 | 560 | 600 | **680** |

**Đây là chủ ý, không phải lỗi bố cục.** Agent đã nêu lo ngại "hở khoảng trống lớn ở giữa" ở DEC-073 và Thắng chốt vẫn làm vậy. Nhìn bản render 1920 thì khoảng giữa **không trống** — chữ "Contact" cỡ lớn (bám 80% bề ngang màn) lấp đúng chỗ đó. Hai cột bị đẩy về hai mép, chữ nền nằm giữa: bố cục đọc ra là có dụng ý.

**Một điểm treo tự hết:** lo ngại "dòng mô tả dài ~90 ký tự ở màn 1920" (cuối DEC-073) không còn — cột thông tin cố định 560 nên độ dài dòng cố định, nằm trong khoảng dễ đọc ở mọi cỡ màn.

**Chi tiết dựng:** KHÔNG đặt `align-items: flex-start` lên `Form Container` trong CSS. Trong Figma các ô nhập để sizing FILL nên vẫn trải hết 600; trong CSS `flex-start` sẽ làm chúng co lại bằng nội dung. Nút "liên hệ" đã tự hug trái nhờ khung `.cform__submit` riêng.

---

## DEC-076 · Dải báo lỗi form là instance `Badge`, không phải khối tự chế

*25/09/2026 · **[xác minh — tìm trong frame `Form · Error`]***

Thắng gọi tắt là "Bage". Đo ra: đó là instance **`Badge`** đặt ngay trên nút Gửi.

| | |
| --- | --- |
| Kích thước | 634×35, **hug theo nội dung** — không kéo hết bề ngang |
| Bo góc | **8** (`--r-sm`) |
| Viền | 1px `--red-200` |
| **Nền** | **`--red-200` @30%** — Agent dựng thiếu hẳn phần này |
| Padding | 8 (`--s-2`) — Agent dựng 12 |
| Chữ | Be Vietnam Pro Regular **13** (`--fs-caption`) — Agent dựng 15 |
| Màu chữ | `#FFC8C8` = `--red-100` ✓ |

**Vì sao hug chứ không full width:** kéo hết bề ngang thì nó trông như khối cảnh báo của cả trang, không phải của riêng form (đã ghi ở DEC-029).

**Không hardcode nền đỏ mờ:** dùng `color-mix(in srgb, var(--red-200) 30%, transparent)` — pha thẳng từ token, đổi `--red-200` thì chỗ này đổi theo. Làm tương tự cho nền khối Success (`--green-200` @12%).

Nhân tiện sửa một lỗi tự gây: lớp phủ nền menu đang ghi `rgb(30 23 48 / 0)` — **gõ nhầm**, định là `--gray-950` (30 30 30). Alpha 0 nên không ai thấy, nhưng vẫn là màu bịa. Đổi sang `color-mix(in srgb, var(--gray-950) 0%, transparent)`.

---

## DEC-077 · Ô tick vẽ bằng SVG viết thẳng trong file

*25/09/2026 · **[xác minh — đọc `vectorPaths`]***

Thắng chỉ ra: **khung component bo góc 0, nhưng vector bên trong thì có bo góc.** Agent dựng bằng `border` của CSS nên ra hình vuông sắc cạnh — sai.

Đọc `vectorPaths` ra số thật:

```
M 1.9166667 0 L 13.416667 0 C 14.475213 0 15.333334 0.85812 15.333334 1.9166667 ...
```

→ hộp **15.333 × 15.333** tại (2.5, 2.5) · bo góc **1.9167** (12.5%) · nét 1px align CENTER
→ tick: path 7.583 × 6.417 tại (6.38, 7), đầu nét bo tròn

**Vì sao `border` của CSS không dùng được:** border bo theo hộp 20×20 của thẻ, không bo theo hình 15.33 bên trong. Hai thứ khác nhau.

**Vì sao viết SVG THẲNG TRONG FILE, không tải file .svg rời:**

| | |
| --- | --- |
| Bớt một file phải quản | không có asset rời nào để lạc |
| Đổi màu được | `currentColor` → một hình dùng chung cho Default / Error / Disabled, thay vì ba file |
| Không phải tải về | proxy chặn `figma.com`, Agent không xuất được file — nhưng đọc được toạ độ path thì vẽ lại chính xác |

**Cấu trúc:** giữ `<input type="checkbox">` thật (trong suốt, phủ 44×44 lên trên) + SVG vẽ hình. Bàn phím, trình đọc màn hình và `required` của trình duyệt hoạt động sẵn, không phải dựng lại.

---

## DEC-078 · Mail liên hệ — định dạng chuẩn, hai bản

*25/09/2026 · **[yêu cầu của Thắng]***

Mail gửi về `baika.vn@gmail.com` giờ có **cả hai bản** trong một thư:

| Bản | Vì sao bắt buộc |
| --- | --- |
| **Chữ thuần** (`text`) | Không phải cho đẹp: một số ứng dụng mail và phần lớn **bộ lọc rác** đọc bản này. Mail chỉ có HTML dễ bị đẩy vào Spam hơn hẳn |
| **HTML** (`html`) | Bảng thông tin rõ ràng, dễ đọc trên điện thoại |

**HTML viết bằng `<table>` + style nội tuyến** — không phải vì lạc hậu: ứng dụng mail (nhất là Outlook và Gmail) **cắt bỏ thẻ `<style>`**, bỏ qua flexbox và grid. Bảng + style nội tuyến là thứ duy nhất hiển thị giống nhau ở mọi nơi. Đây là quy ước chung của email HTML.

Các chi tiết của một mail submit đúng chuẩn, đã có đủ:

- `from` có **tên hiển thị**: `BAIKA Website <…>` → hộp thư hiện tên, không phải địa chỉ trần
- `reply_to` = email khách → **bấm Trả lời là trả lời cho khách**, không phải cho hệ thống
- Tiêu đề có tiền tố nguồn: `[baika.vn] Liên hệ mới — {Tên}`
- Thời gian ghi theo **giờ Việt Nam** (`Asia/Ho_Chi_Minh`), không bắt ai tự đổi múi giờ
- Ghi rõ khách **đã đồng ý** xử lý thông tin — bằng chứng cho nghĩa vụ pháp lý
- Escape HTML mọi giá trị khách nhập → không chèn được thẻ vào mail
- Lọc `\r\n` khỏi tiêu đề → không chèn được header giả

---

## VD-011 · Ba màu còn lạc token trên trang Liên hệ

*25/09/2026* — đã grep bản build, chỉ còn đúng ba

| Màu | Ở đâu | Gần nhất |
| --- | --- | --- |
| `#D9D9D9` | điểm đầu gradient khung menu | `--gray-300` #D5D5D5 |
| `#7C7C7C` | điểm thứ hai gradient khung menu | giữa `--gray-700` và `--gray-600` |
| `#1D6297` | điểm cuối gradient chữ "Contact" | không có bậc nào khớp |

`#1D6297` ở **alpha 0** nên không nhìn thấy trực tiếp, nhưng **sắc của nó quyết định màu ở đoạn giữa gradient** — không thay bằng token khác mà không đổi hình được.

Mọi `rgb(...)` còn lại trong CSS đều nằm trong `tokens.css`, tức là định nghĩa token — hợp lệ.

---

## DEC-079 · 🔴 Lỗi form không gửi được — `FormData` bỏ qua ô đang khoá

*25/09/2026 · **[xác minh — chặn lời gọi mạng, đọc đúng nội dung trình duyệt gửi đi]***

Thắng báo form luôn hiện *"Chưa gửi được — lỗi kết nối"*.

**Cách tìm ra:** dùng Playwright chặn lời gọi `/api/contact` và in ra nội dung thật. Kết quả:

```
{}
```

Trình duyệt gửi lên một object **RỖNG**.

### Nguyên nhân

```js
setBusy(true);                                   // ← khoá toàn bộ input
const res = await fetch('/api/contact', {
  body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
});                                              // ← đọc FormData SAU khi khoá
```

**`FormData` BỎ QUA mọi ô đang `disabled`.** Đây là quy định của HTML (ô khoá không phải "submittable element"), không phải lỗi trình duyệt.

Khoá form trước rồi mới đọc dữ liệu → đọc được rỗng → máy chủ trả 400 → nhảy vào nhánh báo lỗi. **Lỗi này xảy ra 100% số lần, ở mọi môi trường** — không liên quan gì tới Vercel hay Resend.

**Sửa:** lấy dữ liệu TRƯỚC khi khoá.

```js
const payload = Object.fromEntries(new FormData(form).entries());
setBusy(true);
```

Đã kiểm lại bằng chính phép thử đó — giờ gửi đủ 6 trường.

### Lỗi thứ hai lộ ra cùng lúc: một câu báo lỗi cho mọi tình huống

Bản đầu dùng `try/catch` bọc cả lời gọi, mọi thứ hỏng đều ra *"lỗi kết nối"*. Không ai sửa được từ câu đó — kể cả người dựng. Trái luôn với chính frame `Form · Error` ("nói rõ hỏng chỗ nào").

**Sửa:** tách theo mã HTTP, đọc luôn câu giải thích máy chủ trả về.

| Mã | Câu hiện ra |
| --- | --- |
| 400 | câu cụ thể từ máy chủ, ví dụ *"Số điện thoại không hợp lệ."* |
| 404 | *"Chưa nối được tới máy chủ nhận form. Nếu đang chạy thử bằng `pnpm dev` thì đây là bình thường…"* |
| 500 | *"Máy chủ chưa được cấu hình xong (thiếu biến môi trường)."* |
| 502 | *"Dịch vụ gửi thư đang lỗi."* |
| mất mạng | *"Mất kết nối mạng."* |

Mọi câu đều kèm số hotline. Chi tiết kỹ thuật ghi thêm vào console.

### Bài học

**Không kiểm được thì không biết là hỏng.** Ba vòng trước Agent đều "kiểm tra form" bằng cách bấm nút với form RỖNG — chỉ chứng minh phần kiểm tra dữ liệu chạy đúng, chưa bao giờ chứng minh **đường gửi đi** chạy đúng. Điền đủ rồi chặn lời gọi mạng mới lòi ra.

→ **Luật:** kiểm một luồng gửi dữ liệu thì phải kiểm cả ca THÀNH CÔNG, và phải nhìn được **nội dung thật gửi lên**, không chỉ nhìn giao diện.

---

## DEC-080 · Thêm `/api/health` để tự chẩn đoán

*25/09/2026*

Mở `https://<tên-site>/api/health` bằng trình duyệt:

| Thấy gì | Nghĩa là |
| --- | --- |
| 404 `NOT_FOUND` | Vercel chưa dựng thư mục `api/`. (Chạy `pnpm dev` ở máy thì LUÔN 404 — `api/` là tính năng của Vercel, Astro không biết tới) |
| JSON, có biến `false` | Biến môi trường đó chưa đặt. Đặt xong phải **deploy lại** |
| JSON, cả ba `true` | Phần nhận form sẵn sàng, lỗi nằm chỗ khác |

⛔ Chỉ trả về **có/không** cho từng biến, không bao giờ trả giá trị thật. Đọc được trang này cũng không lấy được khoá.

**Ghi rõ để khỏi hiểu nhầm:** form **KHÔNG THỂ** chạy khi `pnpm dev`. Thư mục `api/` ở gốc repo là tính năng của nền tảng Vercel; máy chủ dev của Astro không phục vụ nó. Muốn thử ở máy thì phải dùng `vercel dev`, còn không thì thử trên bản đã deploy.

---

## DEC-081 · ✅ Đã xác minh: Vercel CÓ dựng thư mục `api/` cho dự án Astro

*25/09/2026 · **[xác minh — bằng chứng từ bản deploy thật]***

DEC-066 để treo một điểm chưa chắc: *"Vercel có build thư mục `api/` ở gốc cho dự án dùng preset Astro hay không — tài liệu nói có, nhưng phải thấy bản deploy thật mới chắc."*

**Giờ đã chắc.** Bản deploy trả về câu *"Máy chủ chưa được cấu hình xong (thiếu biến môi trường)"*.

Câu đó **chỉ có thể** phát ra từ bên trong `api/contact.ts`, ở đoạn kiểm biến môi trường. Muốn tới được đó thì trước hết Vercel phải dựng được hàm, nhận được lời gọi POST, và chạy qua hết phần kiểm dữ liệu.

→ **Không cần phương án dự phòng adapter `@astrojs/vercel`.** Kiến trúc tĩnh + `api/` ở gốc chạy đúng như thiết kế, DEC-001 giữ nguyên.

Đồng thời xác nhận **DEC-079 đã sửa đúng**: nếu vẫn gửi rỗng thì đã dừng ở mã 400 ("Thiếu tên"), không bao giờ chạy tới đoạn kiểm biến môi trường.

Và xác nhận **DEC-079 phần thông báo lỗi có giá trị thật**: câu báo lỗi chỉ thẳng ra việc phải làm tiếp, thay vì "lỗi kết nối" chung chung.

**Còn lại:** đặt 3 biến môi trường trên Vercel rồi deploy lại. Việc của Thắng, không phải việc của code.

⚠️ **Bẫy cần tránh khi cấu hình Resend:** địa chỉ thử nghiệm `onboarding@resend.dev` **chỉ gửi được tới đúng email đã dùng đăng ký tài khoản Resend**. Nếu đăng ký bằng `‹email cá nhân của Thắng — đã che khi chép vào repo›` mà đặt `CONTACT_TO=baika.vn@gmail.com` thì Resend từ chối → form báo lỗi 502. Trước khi xác minh xong tên miền `baika.vn`, hai địa chỉ này phải trùng nhau.

---

## DEC-082 · ✅ Ba lỗi component dùng chung — đã xác nhận sửa xong trên Figma

*25/09/2026 · Luồng E · **[xác minh — đọc lại trực tiếp từ file Figma]***

Ba điểm chặn ghi ở `ke-hoach-build-7-trang.md` mục 5. Đã đo lại từng cái:

| # | Component | Trước | Sau | Kết luận |
| --- | --- | --- | --- | --- |
| 1 | `Button 2` `26:2182` | Normal cao **35**, Hover cao **40** → rê chuột là cả khối nhảy | Height đổi sang **HUG**. Mọi trạng thái trong cùng một cỡ giờ bằng nhau: **Sm 32 · Md 40 · Lg 48** | ✅ |
| 2 | `FAQ Items` `230:3231` | thiếu Hover + Focus | Đủ **6 biến thể** = Type(Close/Open) × State(Default/Hover/Focus) | ✅ hết vi phạm WCAG 2.4.7 ở 28 chỗ |
| 3 | `Các gói` `365:785` | thiếu Hover cho desktop | 7 biến thể, `Type=Desktop, State=Hover` đã có. Mobile/Tablet chỉ có Default + Focus | ✅ đúng — màn cảm ứng không có hover |

⚠️ Một điểm cần nhớ khi dựng `Các gói`: trục `State` có **defaultValue là `Focus`**, không phải `Default`. Khi đặt instance mà không chỉ định rõ, Figma sẽ ra `Focus`.

**Vì sao ghi lại:** ba lỗi này nằm trong component dùng ở **cả 7 trang**. Nếu dựng code trước rồi mới sửa Figma thì phải sửa lại 40+ chỗ. Sửa ở gốc trước, chỉ tốn một lần.

---

## DEC-083 · 🔴 Nét viền trong Figma vẽ PHÍA TRONG, trong CSS thì vẽ THÊM RA — lệch 2px ở mọi component có viền

*25/09/2026 · Luồng E · **[xác minh — đo bằng trình duyệt thật, không phải suy đoán]***

**Hiện tượng.** Dựng `Button 2` đúng từng con số Figma (padding dọc 6/8/12, viền 1px) rồi đo lại bằng trình duyệt: cao **34 / 42 / 50**, trong khi Figma ghi **32 / 40 / 48**. `FAQ Items` cũng vậy: **74 / 125** thay vì **72 / 122**.

**Nguyên nhân.** Hai công cụ hiểu chữ "viền" khác nhau:

| | Figma | CSS |
| --- | --- | --- |
| Nét viền nằm ở đâu | **Đè lên phía trong** khung (stroke align = inside) | **Cộng thêm ra ngoài** kích thước nội dung |
| Khung cao 40, viền 1px | vẫn cao **40** | cao **42** |

Chép thẳng số từ Figma sang CSS là sai — sai đúng **2px**, ở **mọi** component có viền.

**Đây là lỗi cùng họ với vụ blur `DEC-0xx`** (Figma đo độ mờ bằng thang gấp đôi CSS). Bài học chung: **số trong Figma không phải lúc nào cũng là số trong CSS.** Phải đo lại bằng trình duyệt, không tin con số trên giấy.

### Cách sửa — hai kiểu, tuỳ viền đặc hay viền gradient

**1. Viền màu đặc** (`Button 2`): bỏ padding trên/dưới, cố định chiều cao, canh giữa nội dung.

```css
.btn2 { justify-content: center; padding: 0 var(--s-4); }
.btn2--md { min-height: 40px; }   /* tổng đúng 40, đã gồm viền */
```

Icon 24 nằm giữa ô cao 40 thì trên dưới còn đúng 8 — y hệt bản vẽ, mà tổng vẫn đúng 40.
Dùng `min-height` chứ không `height`: nhãn dài bất ngờ thì nút cao thêm, không cắt mất chữ.

**2. Viền gradient** (`FAQ Items · Focus`): không dùng `border` được, vì `outline` (thứ duy nhất không chiếm chỗ) chỉ nhận màu đặc.
→ Vẽ viền bằng lớp phủ `::before` tô kín gradient rồi khoét rỗng ruột bằng `mask`, chỉ chừa vành 1px.
Lớp phủ không chiếm chỗ → chiều cao không đổi, mở/đóng/focus đều không nhảy.

**Kết quả đo lại sau khi sửa:** Button 2 = **32 / 40 / 48** ở *mọi* trạng thái (Hover không đổi chiều cao). FAQ = **72** khi đóng.

**Áp dụng bắt buộc cho các component còn lại:** `Các gói`, `Detail Step Item`, `Solution`, `Footer/Half circle item` — cái nào có viền thì kiểm chiều cao bằng trình duyệt trước khi coi là xong.

---

## DEC-084 · `FAQ Items` dựng bằng `<details>` của trình duyệt, không viết JS

*25/09/2026 · Luồng E · **[quyết định thiết kế kỹ thuật]***

**Chọn:** thẻ `<details>` / `<summary>` có sẵn trong HTML.
**Đã loại:** tự viết JS đóng/mở (nút + class + `aria-expanded`).

**Vì sao:**

1. **Miễn phí ba thứ khó làm đúng**: bấm được bằng bàn phím, trình đọc màn hình đọc đúng "đang mở / đang đóng", và nếu JS lỗi thì phần này vẫn chạy.
2. Đúng `CLAUDE.md` mục 6: *"mặc định là không JS"*.
3. Công ty **không có dev**. Ít code tự viết = ít thứ hỏng mà không ai sửa được.

Thuộc tính `name` của `<details>` cho phép mở câu này thì tự đóng câu kia (kiểu accordion) mà vẫn không cần một dòng JS nào. Component nhận qua prop `group`; bỏ trống thì mở được nhiều câu cùng lúc.

**Trạng thái Focus tô cả thẻ**, nhưng thứ nhận con trỏ bàn phím là `<summary>` bên trong. Dùng `:has()` cho thẻ cha đổi màu theo con — cũng không cần JS. Có sẵn đường lui `@supports` cho trình duyệt cũ, để con trỏ bàn phím không bao giờ vô hình.

---

## DEC-085 · Hai màu trong style `Liner/Stroke/Light` không có token — đã thay thế có chủ ý, cần Thắng duyệt

*25/09/2026 · Luồng E · **[xác minh — đọc trực tiếp paint style từ Figma]***

Style `Liner/Stroke/Light` (dùng làm viền Focus của `FAQ Items`) định nghĩa:

- điểm đầu `#FFFFFF`, điểm cuối `#414141`, gradient tuyến tính
- hướng tính từ ma trận gradient ra **≈ 176°** — tức gần như thẳng đứng, sáng ở trên tối ở dưới. Code dùng `180deg`.

Hai màu đều vướng luật:

| Màu | Vướng gì | Đã thay bằng | Lệch bao nhiêu |
| --- | --- | --- | --- |
| `#FFFFFF` | `CLAUDE.md` mục 4 cấm tuyệt đối | `var(--gray-50)` (#F8F8F8) | 7/255 |
| `#414141` | không có trong thang xám — nằm giữa `--gray-800` (#515151) và `--gray-900` (#373737) | `color-mix(in srgb, var(--gray-800), var(--gray-900))` → #444444 | 3/255 |

Trên một đường viền dày **1px**, cả hai mức lệch đều không thấy được bằng mắt.

**Đây là thay thế có chủ ý, không phải đo sai.** Muốn đúng từng mã màu thì phải **thêm token mới** — mà mục 4 cấm agent tự thêm. **Cần Thắng quyết:**
- (a) giữ nguyên cách thay thế này, hay
- (b) thêm một token xám mới cho #414141 vào bộ biến Figma.

Hai style gradient còn lại cũng có màu ngoài token, sẽ vướng y hệt khi dựng tới:
- `Liner/Stroke/Black` — #1E1E1E (= `--gray-950` ✅) → #333333 (**ngoài token**)
- `Liner/BG/Button - 1` — #000000 (**ngoài token**) → #666666 (**ngoài token**)

---

## DEC-086 · Bề ngang `FAQ Items` để co giãn, không cố định 698 như bản vẽ

*25/09/2026 · Luồng E · **[quyết định — sai lệch có chủ ý so với Figma]***

Figma vẽ `FAQ Items` bề ngang **cố định 698**. Code để `width: 100%`, section bên ngoài khống chế bề ngang tối đa.

**Vì sao:** khung cố định 698 sẽ tràn ra ngoài màn 375 (mobile) — vỡ layout, người dùng phải kéo ngang. `CLAUDE.md` mục 5: *"component ở màn nhỏ phải đổi dạng, không co lại đến mức vô dụng"*.

Trên desktop kết quả **giống hệt bản vẽ**, vì section cha sẽ đặt bề ngang tối đa. Chỉ khác ở màn nhỏ — chỗ Figma chưa vẽ tới.

---

## DEC-087 · `Solution` không có nền, không có viền — hai lớp trong Figma đang tắt

*25/09/2026 · Luồng E · **[xác minh — đọc `visible` của từng lớp + ảnh chụp Figma]***

Đọc component `Solution` `327:321` lần đầu thấy: fill `#F8F8F8` và một nét viền **gradient đỏ** 1px.
Nếu chép thẳng sang code thì mỗi trang dịch vụ sẽ có 3 khối trắng viền đỏ — trong khi chữ bên trong màu `--blue-50` và `--slate-50`, tức **chữ sáng trên nền sáng, không đọc được**.

Sự thật: **cả hai lớp đều `visible: false`.** Ô `Solution` chỉ có chữ, không có khung. Đã đối chiếu bằng ảnh chụp từ chính Figma.

### 🔴 Bài học mới — nối dài bài học cũ

| Đã biết trước | Bổ sung hôm nay |
| --- | --- |
| "Đọc fill thì đọc cả `opacity`" *(vụ watermark Contact bị tô đậm 100% thay vì 15%)* | **Đọc cả `visible` của từng lớp fill/stroke** |
| "Fill trắng của khung COMPONENT thường là nền mặc định của Figma, không phải thiết kế" *(vụ header NVG suýt có dải trắng)* | Lớp `visible:false` cũng vậy — là **rác vẽ thử còn sót**, không phải thiết kế |

Cách kiểm chắc ăn nhất vẫn không đổi: **chụp ảnh node rồi nhìn.**

### Số đo section `Solution` (dùng cho Giai đoạn 2)

| | Desktop 1280 | Tablet 768 | Mobile 375 |
| --- | --- | --- | --- |
| Padding section | 80 / 40 | 80 / 40 | 80 / **24** |
| Gap tiêu đề ↔ khối | 80 | 80 | 80 |
| Khối chứa | **ngang**, 3 cột + 2 đường kẻ dọc | **dọc**, không đường kẻ | **dọc**, không đường kẻ |
| Gap | 12 | 12 | 12 |
| Bề ngang mỗi ô | 392 | 392 *(xem cảnh báo)* | 327 (lấp đầy) |
| Cao section | 423 | 739 | 776 |

- Tiêu đề section: `Bạn có đang gặp vấn đề này?` — Chakra Petch Bold 32 = style **H-1**, màu `--gray-50`
- Đường kẻ dọc giữa 3 cột: 1px, màu `--gray-50` đặc. Chỉ có ở desktop
- Nền trang dịch vụ đo được là **`--gray-950` đặc**, không có hoạ tiết

⚠️ **Một chỗ bản vẽ đáng ngờ, cần Thắng xem lại:** ở **tablet**, ba ô vẫn giữ bề ngang **392** trong khung rộng **688** → thừa gần 300px trống bên phải. Mobile thì ô lấp đầy khung (327/327). Nhiều khả năng bản tablet chỉ xếp dọc lại mà quên chỉnh bề ngang. Code tạm cho ô **lấp đầy khung** ở tablet (giống mobile); nếu Thắng cố ý để 392 thì báo, sửa một dòng.

⚠️ **Đã bỏ `BackgroundBlur 24`** mà Figma gắn trên ô này. Làm mờ hậu cảnh chỉ thấy được khi phía sau có hình; nền trang là màu đặc nên hiệu ứng không đổi một pixel nào, mà vẫn bắt máy vẽ lại mỗi khi cuộn — **tốn pin trên điện thoại, đổi lại không được gì**. Có hoạ tiết nền thì thêm lại một dòng.

---

## DEC-088 · ⚠️ CẦN QUYẾT — `Detail Step Item` dùng khoảng cách 14px, ngoài thang `--s-*`

*25/09/2026 · Luồng E · **[xác minh — đã kiểm cả bound variable, không có]***

`Detail Step Item` `355:256` có gap **14** giữa tiêu đề và mô tả. Thang spacing nhảy **12 → 16**, không có bậc 14. Đã kiểm `boundVariables`: **rỗng** — 14 là số gõ tay trong Figma, không phải token.

Hai luật đang đá nhau:

| Luật | Nói gì |
| --- | --- |
| `CLAUDE.md` mục 4 | *"Không tạo spacing mới. Cần khoảng cách không có trong thang → hỏi."* |
| `CLAUDE.md` mục 3 | *"Khi code và tài liệu mâu thuẫn, Figma thắng."* |

**Tạm xử lý:** giữ đúng `gap: 14px`, **cố tình không bọc trong `var()`** để ai grep tìm giá trị ngoài thang là thấy ngay. Component này dùng **4–12 lần mỗi trang × 7 trang** nên chọn sai sẽ lan rộng.

**Cần Thắng chọn một:**
- **(a)** thêm token `--s-3-5 = 14` vào bộ biến Figma → đúng luật, nhưng thang có bậc lẻ
- **(b)** sửa bản vẽ về **12** (`--s-3`) hoặc **16** (`--s-4`) → thang sạch, lệch 2px so với bản vẽ hiện tại
- **(c)** giữ 14 như một ngoại lệ có ghi chú → nhanh nhất, nhưng mở tiền lệ

Ba biến thể khác cũng dùng số ngoài thang (`Checklist Item` gap 10, `Title Container` gap 10) — quyết một lần ở đây rồi áp dụng chung.

---

## DEC-089 · 🔶 `Các gói · Desktop · Hover` có ba lớp hoạ tiết ánh sáng — sẽ phải quyết cách dựng

*25/09/2026 · Luồng E · **[xác minh — đo trực tiếp biến thể Hover]***

`Các gói` `365:785` — **7 biến thể**, 3 kích cỡ:

| Type | Rộng | Cao | Có State nào |
| --- | --- | --- | --- |
| Desktop | 384 | 448 | Default · Hover · Focus |
| Tablet | 338 | 448 | Default · Focus |
| Mobile | 342 | 448 | Default · Focus |

*(Tablet 338 hẹp hơn Mobile 342 — hơi lạ, nhưng đúng bản vẽ. Ghi lại để sau đối chiếu.)*

**Cấu tạo (Desktop · Default)** — đã đo đủ:
bo góc 16 · padding 40/24 · xếp dọc gap 24 · viền **2px gradient** `#666666 → #000000` (align CENTER)
nền **gradient tuyến tính** `#1E1E1E 40% → #333333 100%`

- `Header` (gap 24): `Title` Be Vietnam Pro Regular **17** màu `--blue-200` · `Subtitle` Chakra Petch Bold **32/36.8** = style **H-1** màu `--gray-50` · rồi **`Button 2`** lấp đầy bề ngang
- `Checklist Container`: padding dọc 12, gap 4, mỗi dòng cao 36 (padding dọc 8, gap 8) = icon `check` **20×20** (nét 1.667) + chữ 15/130% màu `--gray-50`

### 🔶 Điểm phải quyết: trạng thái Hover không dựng được bằng CSS thuần

Biến thể Hover thêm:
- nền đổi sang **gradient toả tròn** 4 điểm dừng `#D9D9D9 → #7C7C7C → #363636 → #1E1E1E`
- viền gradient đổi sang `#FFFFFF → #414141` (chính là style `Liner/Stroke/Light`, xem DEC-085)
- `INNER_SHADOW` bán kính 72.5 + `DROP_SHADOW` 12
- **ba hình VECTOR tự do** tên `Top left light` (208×69, 198×27, 344×31), tô gradient 4 điểm dừng ở **opacity 75%**, mỗi hình gắn `LAYER_BLUR 60` *(= `blur(30px)` trong CSS)*

**Ba hình vector tự do + blur nặng chính là tình huống đã gặp ở hoạ tiết nền trang chủ** — lần đó kết luận CSS không tả lại được, phải xuất ảnh. Lần này có điểm khác quan trọng: **đây là trạng thái Hover**, chỉ hiện khi rê chuột, và **chỉ có trên desktop**.

Ba hướng, sẽ hỏi Thắng trước khi dựng:
- **(a)** Xuất 1 ảnh WebP cho lớp ánh sáng, nạp sẵn, hiện khi hover. Giống bản vẽ nhất; thêm 1 file ảnh, và ảnh đó **cố định theo kích thước thẻ**
- **(b)** Thay ba hình tự do bằng **một vệt sáng CSS** (gradient + blur) ở góc trên trái. Nhẹ nhất, không file ảnh, **khác bản vẽ một chút**
- **(c)** Bỏ lớp ánh sáng, chỉ giữ nền gradient toả tròn + viền sáng + bóng. Vẫn thấy rõ là đang hover, xa bản vẽ nhất

Khuyến nghị nghiêng về **(b)**: hiệu ứng chỉ thoáng qua khi rê chuột, người dùng không có cơ hội soi từng vệt sáng, trong khi (a) tốn thêm một file ảnh và sẽ méo khi thẻ đổi kích thước.

⚠️ Thêm một điểm: trục `State` có **`defaultValue` là `Focus`**, không phải `Default`. Đặt instance mà không chỉ rõ là ra Focus — dễ nhầm khi dựng bản vẽ các trang.

---

## DEC-090 · 🔶 CẦN THẮNG QUYẾT — `Các gói`: quầng sáng đang nằm ở Hover, trong khi luật của hệ nói nó thuộc về Focus

*25/09/2026 · Luồng E · **[xác minh — đo cả ba biến thể Desktop]***

Thắng đính chính: *"3 hình vector tự do phủ blur 60 là focus. Còn Hover sẽ khác focus là sẽ có Drop shadow và inner shadow."*

**Đo lại xác nhận Thắng đúng về ba vệt sáng** — chúng thuộc về Focus, không phải riêng Hover. Nhưng số đo cho thấy một chi tiết khác với lời Thắng:

| | Default | Focus | Hover |
| --- | --- | --- | --- |
| Nền | gradient dọc `--gray-950 40%` → `#333333` | **toả tròn**, sáng góc trên trái | giống Focus |
| Viền 2px | `#666666 → #000000` | `Liner/Stroke/Light` | giống Focus |
| 3 vệt sáng blur 60, opacity 75% | không | **có** | **có** |
| `INNER_SHADOW` r72.5 y−40 trắng 25% | không | **đã có sẵn** | có |
| `DROP_SHADOW` r12 trắng 50% | không | **không** | **có** |

→ **Focus đã có sẵn inner shadow.** Hover khác Focus **chỉ ở drop shadow**, không phải ở cả hai. Code đã dựng đúng theo số đo này.

### 🔶 Vấn đề lớn hơn, chưa ai nêu

**1. Ngược với ngôn ngữ tương tác của chính dự án.**
`CLAUDE.md` mục 4 (DEC-014 / DEC-015) quy định cho **toàn hệ**:

> `Hover` = nổi lên (`--shadow-inner`) · `Focus` = **quầng sáng trắng** (`--shadow-drop-inner`)
> *"Quầng sáng thuộc về Focus và chỉ Focus. Đừng mượn nó cho Hover."*

Ở `Các gói` thì ngược: quầng sáng trắng (drop shadow trắng 50%) nằm ở **Hover**, còn **Focus không có**. Nếu giữ nguyên, `Các gói` là component **duy nhất** đi ngược luật — người dùng học được "quầng sáng = con trỏ bàn phím" ở mọi chỗ khác, tới đây thì sai.

**2. Người dùng bàn phím khó biết đang đứng ở thẻ nào.**
Hover và Focus gần như giống hệt nhau bằng mắt. Người dùng chuột không bao giờ thấy hai trạng thái cùng lúc nên không sao; nhưng người dùng bàn phím chỉ có Focus — mà Focus lại là trạng thái **nhạt hơn** trong hai cái. Chưa tới mức FAIL WCAG 2.4.7 (vẫn nhìn thấy được so với Default), nhưng là chỗ yếu nhất trong cả hệ.

### Ba lựa chọn — cần Thắng chốt một

| | Làm gì | Được | Mất |
| --- | --- | --- | --- |
| **(a)** *khuyến nghị* | **Đổi chỗ**: drop shadow chuyển sang Focus, Hover giữ inner shadow | Đúng luật DEC-015, người dùng bàn phím thấy rõ nhất | Phải sửa bản vẽ Figma |
| **(b)** | Giữ nguyên như bản vẽ | Không phải sửa gì | `Các gói` thành ngoại lệ của hệ; Focus yếu hơn Hover |
| **(c)** | Cho Focus **cả hai** bóng, Hover chỉ inner | Focus mạnh nhất, hợp lý; Hover vẫn khác Default rõ | Vẫn phải sửa bản vẽ, nhưng nhẹ hơn (a) |

### ✅ Thắng chốt (a) — 25/09/2026

Quầng sáng (`DROP_SHADOW` trắng 50%) **chuyển sang Focus**; Hover giữ bóng trong.
Code đã sửa xong và build sạch. Đổi được nhanh vì các giá trị đã đặt sẵn thành "công tắc" dùng chung (`--bong-trong`, `--bong-ngoai`) ở đầu khối style — chỉ đổi chỗ hai dòng.

📌 **Việc còn lại của Thắng: sửa bản vẽ Figma cho khớp** — gỡ `DROP_SHADOW` khỏi `Type=Desktop, State=Hover`, thêm vào `Type=Desktop, State=Focus`. Chưa sửa thì Figma và code lệch nhau, phiên sau đọc Figma sẽ "sửa ngược" về cũ.

### Số đo đã dùng để dựng

- Thẻ 384×448 · bo góc 16 · padding 40/24 · xếp dọc gap 24 · `clipsContent: true`
- Gradient toả tròn: tâm **(0%, −1.3%)**, bán kính **109.5% × 109.4%** — tính từ ma trận gradient, tức ánh sáng hắt từ đúng góc trên bên trái
- Ba vệt sáng: xoay **−31° / −45° / −58°**, blur 60 *(= `blur(30px)` trong CSS)*, opacity 75%, đều nằm ở mép trên (y từ −25 đến −30)
- Thắng đã chốt thay ba hình tự do bằng **một vệt sáng CSS** — không thêm file ảnh, không méo khi thẻ đổi kích thước
- `INNER_SHADOW` r72.5 → CSS `blur 36` · `DROP_SHADOW` r12 → CSS `blur 6` *(luật chia đôi, DEC-083 cùng họ)*

⚠️ **Vùng chạm nút bên trong.** Trong Figma nút `Button 2` ở thẻ này cao **35** (vì tắt icon nên co lại). Code giữ cỡ `Md = 40` cho nhất quán toàn hệ. **Cả hai đều chưa đạt mức 44px mà WCAG đòi cho màn cảm ứng** — đề xuất ở mobile đổi sang cỡ `lg` (48). Chờ Thắng chốt.

---

## DEC-091 · ✅ Thắng chốt hai việc treo — 25/09/2026

| Việc | Chốt | Đã làm gì |
| --- | --- | --- |
| `Detail Step Item` gap **14** (ngoài thang `--s-*`) — DEC-088 | **Đổi về 12 = `--s-3`** | Thắng sửa Figma; đã đo lại xác nhận (`Type=Title` gap 12 · `Type=Full` cao **93**, trước là 95). Code dùng `var(--s-3)` |
| Nút trong `Các gói` cao **35/40**, chưa đạt vùng chạm 44px — DEC-089 | **Đổi sang cỡ `lg` = 48** | Code dùng `size="lg"` ở **cả ba breakpoint** cho nhất quán |

📌 **Việc còn lại của Thắng:** sửa bản vẽ Figma — nút trong `Các gói` đổi sang cỡ **Lg**, và (từ DEC-090) chuyển `DROP_SHADOW` từ `Desktop/Hover` sang `Desktop/Focus`.

⚠️ Còn một giá trị ngoài thang nữa vừa gặp: khối thông tin trong `Footer` dùng **gap 7**. Thang không có bậc 7 → code dùng **8 (`--s-2`)**, lệch 1px. Cùng loại với 14 → 12. Nếu Thắng muốn thì sửa Figma về 8 cho sạch.

---

## DEC-092 · Ba component trang trí — dựng bằng SVG/CSS, KHÔNG xuất ảnh

*25/09/2026 · Luồng E · **[quyết định kỹ thuật, kèm số đo đã xác minh]***

Ba component cuối của Giai đoạn 1 đều là hoạ tiết. Điểm chung: **không cái nào phải xuất ảnh** — khác với hoạ tiết nền trang chủ. Lý do phân biệt nằm ở *hình dạng*, không phải ở độ đẹp:

> **Nét vẽ (stroke) và hình học cơ bản (elip, nửa tròn) thì SVG/CSS tả được chính xác. Mảng hình tự do chồng nhau thì không — phải xuất ảnh.**

### 1. `Neubula light` `573:3960` — vệt sáng cong

*(Tên trong Figma viết thiếu chữ: đúng ra là "Nebula". Giữ nguyên để khỏi lạc khi tra cứu.)*

695×54. Cấu tạo: **một đường cong duy nhất, vẽ ba lần chồng lên nhau**, nét 7px, tô gradient ngang (trong suốt → đặc → trong suốt), ba mức mờ **6 / 24 / 40** *(= 3 / 12 / 20 trong CSS)*. Lớp mờ nhiều nằm dưới tạo quầng, lớp nét gọn nằm trên tạo lõi — đúng cách vẽ đèn neon.

→ Dựng bằng **SVG nội tuyến**, chép thẳng `vectorPaths` từ Figma. Nặng vài trăm byte, sắc nét mọi cỡ màn.
⚠️ Mỗi lần đặt phải sinh `id` riêng cho bộ lọc mờ. Hai vệt sáng cùng trang mà dùng chung `id` thì trình duyệt lấy nhầm bộ lọc của cái kia → sai độ mờ.

### 2. `Footer/Half circle item` `374:394` — vòm bán nguyệt

360×180, tức **đúng một nửa hình tròn**. Ruột gradient dọc `#454545` đặc → `--gray-950` trong suốt. Viền gradient dọc `#FFFFFF` đặc → trong suốt, dày **1.146px**.

→ Dựng bằng `border-radius` + `aspect-ratio: 2/1`. Chính xác tuyệt đối, co giãn theo khung, không vỡ nét ở màn retina.
Hai màu thay thế theo nguyên tắc DEC-085: `#454545` → trộn `--gray-800` + `--gray-900` (ra #444444) · `#FFFFFF` → `--gray-50`.

### 3. `Footer` `450:5263` — chân trang, 3 biến thể, đều **cao 680**

**Bố cục (bản Desktop, cộng lại ra đúng 680):** padding 40 · xếp dọc · **dồn xuống đáy** · gap 24
`Details` (y 498, cao 80) → `Line` (y 602) → `legal` (y 626, cao 14) → hết 680.
Hai thứ đặt **tuyệt đối**: `Planet` 1920×1000 ở x=−320 y=0 · chữ `BAIKA` ở x=40 y=0.

**Chữ `BAIKA`:** Be Vietnam Pro **Black (900)** · cỡ **358 / 220 / 100** · giãn dòng **85%** · chữ HOA
🔴 **Gradient tô chữ là NGANG, không phải dọc.** Ma trận gradient là ma trận đơn vị → chạy theo trục x: trong suốt → `--gray-50` ở 50% độ đục (giữa) → trong suốt. *Nhìn ảnh render rất dễ tưởng là dọc.* Đã kiểm bằng ma trận, không đoán.

🔴 **Phải thêm weight 900 vào link Google Fonts.** `BaseLayout.astro` trước đó chỉ nạp tới 700 → trình duyệt sẽ "bôi đậm giả" chữ Black, nét bệt và xấu. Đã sửa.

⚠️ Chữ phải để **một dòng** (`white-space: nowrap`). Không có dòng đó thì xuống hàng thành "BAIK / A" — đã thấy thật khi chụp thử. Bản vẽ để 1201px cho cỡ 358, tức vừa khít, chỉ cần font nhích rộng là gãy.

**Đường kẻ ngang:** 1px `--gray-900` (#373737) — đúng token, đã kiểm.

### 🔶 Cần Thắng xem ảnh và duyệt: hoạ tiết `Planet`

Trong Figma `Planet` là cụm **7 hình vector** với blur 4 / 12 / 32 / 80. Ở đây **dựng lại bằng CSS** thay vì xuất ảnh — **khác cách đã làm ở hoạ tiết nền trang chủ**. Ba lý do:

1. **Chân trang chạy suốt bề ngang màn**, từ 375 tới hơn 1920. Một file ảnh cố định 1920 sẽ bị cắt hoặc kéo méo ở cỡ khác; hình vẽ bằng CSS co giãn đúng tỉ lệ ở mọi cỡ.
2. **Hình ở đây là một ELIP + vệt sáng** — `border-radius` tả được. Hoạ tiết trang chủ là các *mảng tự do*, nên lần đó buộc phải xuất ảnh.
3. Chân trang xuất hiện ở **cả 9 trang** — không thêm file ảnh nào phải tải.

Mọi con số vị trí lấy thẳng từ Figma chia cho 1920×1000, nên tỉ lệ đúng bản vẽ. Nhưng **đây là bản dựng lại, không phải bản sao từng pixel.** Nếu Thắng thấy chưa đạt thì chuyển sang xuất ảnh — đổi một khối CSS lấy một thẻ `<img>`, không ảnh hưởng gì khác.

**Hai chỗ đã phải chỉnh sau khi chụp thử** *(ghi lại để thấy đây là đo–chỉnh, không phải chọn bừa)*:
- Điểm loé sáng ban đầu để độ đục 0.85 → ra một cục trắng loang át cả vòng cung. Giảm còn **0.45**.
- Khung hoạ tiết ban đầu để `width: 150%` → ở mobile elip co lại và **lòi cả đáy** ra thành vòng cung thứ hai. Sửa thành `max(150%, 1920px)`, tả đúng việc Figma giữ nguyên 1920×1000 ở cả ba breakpoint.

**Thứ tự đọc trên mobile:** bản vẽ đảo Liên hệ lên trước Địa chỉ, và "Design by" lên trước "All rights". Code dùng `order` của CSS thay vì đảo thứ tự trong HTML — để trình đọc màn hình vẫn đọc theo mạch "địa chỉ rồi liên hệ" như bản desktop.
