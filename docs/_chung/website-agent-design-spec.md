<!-- CHÉP NGUYÊN VĂN — đầu file do agent thêm 03/10/2026, phần dưới đường kẻ giữ y bản gốc. md5 bản gốc: 059b1ed7973c580e947a51e92099c4e4 -->

> 📦 **Bản chép nguyên văn** từ project Claude «BaiKa.vn», file `claude/website-agent-design-spec.md` (bản lưu 29/09/2026). Chuyển vào repo ngày 03/10/2026 — **từ nay bản này là bản chính.**
> Sửa **ở đây**, không sửa bản trong project Claude nữa.
> Khi file này lệch với nguồn khác, thứ tự tin: **Figma** → `CLAUDE.md` / `TRANG-THAI.md` / `docs/<trang>/` → file này.
> Đường dẫn `claude/<tên>.md` bên dưới là file trong project Claude. File nào đã chuyển thì nay nằm ở `docs/_chung/<tên>.md` — tra bảng ở `docs/README.md`.
>
> **⚠️ Chỗ đã lỗi thời — đọc trước khi tin nội dung bên dưới:**
> - **§13 Remote Office đã lỗi thời.** Frame nay là `913:4649` (không còn `825:6535`), đã có Tablet + Mobile, trang dựng **trong repo này** ở `/remote-office`. Dùng `docs/remote-office/` — bộ đó thắng mọi chỗ nói về Remote Office ở đây.
> - Text style `label-mono` đã đổi tên thành `label` (`DEC-036`).
> - Token thật nằm ở `src/styles/tokens.css`. Số trong file này lệch token → token + Figma thắng.

---

# DESIGN SPEC — Baika Website

**Trạng thái: `LOCKED`** · Lập & khoá 21/09/2026 · Nguồn: Figma `YmcXg1lQqGVjQOFrVtdOgW`

**Bổ sung 29/09:** trang **Remote Office** — mục 1.4 + mục **13** *(3 layout mới: bảng chi phí · công cụ ước tính · bảng so sánh)*. Các mục 1–12 không đổi.

**Bản đồ page (cập nhật 24/09 — `DEC-034`):** trang/màn → page `UI` `191:812` · component → page **`Component` `660:2939`** · icon → page `Icon` `6:20457` · page `Component (cũ – không dùng)` `8:12070` **Build bỏ qua**.

> **RECONCILED 23/09/2026.** Không decision nào bị đổi. Chỉ đồng bộ văn bản với `DEC-006` `DEC-008` `DEC-010` `DEC-013` `DEC-014` `DEC-015` `DEC-016` `DEC-017` và với nguyên tắc **REBUILD**: `baika.vn` hiện tại là **current-state reference / audit source**, **không** phải design/implementation/component baseline. Thứ duy nhất kế thừa là **domain**.

Ký hiệu: **[xác minh]** = đọc trực tiếp từ Figma/site thật trong phiên này · **[kế thừa]** = từ tài liệu project đã chốt trước đó · **[suy luận]** = đề xuất của Agent, chưa duyệt · **[chưa kiểm]** = chưa đọc được trong phiên này.

---

## 1. Page inventory

### 1.1 · Trang dịch vụ — 7 trang **[xác minh 08/09, tên frame đã sửa]**

| # | Trang | URL | Frame desktop | Trụ màu |
| --- | --- | --- | --- | --- |
| 01 | Tư vấn Doanh nghiệp | `/advisory` | `382:8828` | Tư vấn |
| 02 | Hệ thống hóa Vận hành | `/remote-ops` | `382:8544` | Vận hành |
| 03 | Marketing & Tăng trưởng | `/marketing` | `382:8223` | Marketing |
| 04 | Tài chính & Dòng tiền | `/finance` | `382:7831` | Tài chính |
| 05 | Pháp lý & Thuế | `/legal-tax` | `199:814` | Pháp lý |
| 06 | Công nghệ & AI | `/ai-os` | `382:10018` | Công nghệ & AI |
| 07 | Đào tạo & CEO | `/ceo-blueprint` | `382:9419` | Đào tạo CEO |

### 1.2 · Trang chủ **[xác minh 21/09]**

Section `Home` (`540:4422`) — 3 frame:

| Breakpoint | Frame | Kích thước |
| --- | --- | --- |
| Desktop | `534:3816` | 1280 × 832 |
| Tablet | `540:4027` | 768 × 832 |
| Mobile | `540:4115` | **375** × 832 |

### 1.3 · Chưa có thiết kế

`Giới thiệu` · `Liên hệ` · `Trạm Ý Tưởng` (trang nội dung) · `Trạm Kết Nối` (tên miền riêng, **ngoài phạm vi**).

### 1.4 · Trang Remote Office **[xác minh 29/09]**

| Trang | Tên miền | Frame desktop | Breakpoint có | Trụ màu |
| --- | --- | --- | --- | --- |
| Remote Office | `baika.website` | `825:6535` | **chỉ Desktop 1280** | ⚠️ chưa chốt — frame đang ở chế độ "Đào tạo CEO" |

Phần lớn khối dùng lại UI 7 trang dịch vụ; **3 layout mới** spec ở **mục 13**.

---

## 2. Breakpoint — **ĐÃ CHỐT** (D01)

| Desktop | Tablet | Mobile |
| --- | --- | --- |
| **1280** | **768** | **375** |

Áp cho cả trang chủ lẫn 7 trang dịch vụ. *Trang chủ từng vẽ ở 390, Thắng đã sửa về 375 ngày 22/09 — xác minh lại: `Home/Mobile` = 375 × 832.*

---

## 3. Kiến trúc màu

### 3.1 · Luật nền — **chỉ áp cho 7 trang dịch vụ** **[kế thừa — `claude/ban-giao-ky-thuat.md` · thu hẹp phạm vi 22/09 theo Compliance Check C4]**

> **Vỏ trung tính, ruột đổi màu.**

Vỏ (NVG bar · Footer · nền · thang xám · thang chữ · nút · form · accordion · lưới) giống hệt nhau **giữa 7 trang dịch vụ**. Ruột (màu trụ · chữ hero · nội dung section) đổi theo trang.

⚠️ **Không áp cho trang chủ.** `DEC-002` chốt trang chủ có theme riêng của BAIKA (dải xanh dương–xanh ngọc), không trung tính và không thuộc trụ nào. Thứ nối trang chủ với 7 trang trong là **font · NVG bar · Footer · thang xám**, không phải nền.

### 3.2 · Token màu trụ **[xác minh 08/09]**

Collection `Global Tokens` → nhóm `Colors / Page / <Tên trụ>` → 3 biến `--dam` · `--trung` · `--nhat`. Tổng **21 biến**.

*(Nhóm đổi tên `Colors/Trụ` → `Colors/Page` ngày 22/09; giá trị không đổi.)*

| Nhóm | `--dam` | `--trung` | `--nhat` |
| --- | --- | --- | --- |
| Tư vấn | `#815901` | `#E79F01` | `#F7CE7A` |
| Vận hành | `#005545` | `#01BB98` | `#7FE0C5` |
| Marketing | `#710044` | `#D70082` | `#FF47B6` |
| Tài chính | `#003F73` | `#0077D9` | `#9BD0FF` |
| Pháp lý | `#95212B` | `#FB3748` | `#FFC8C8` |
| Công nghệ & AI | `#5D2E99` | `#9B4DFF` | `#C4B5FF` |
| Đào tạo CEO | `#2D3078` | `#5458DE` | `#A9BEFF` |

⚠️ Tên biến **không duy nhất** — 7 biến cùng tên `--dam`. Nhóm là thứ phân biệt. Khi xuất token phải ghép tên nhóm.

`--dam` chỉ dùng cho điểm cuối gradient / quầng sáng / đổ bóng — **không dùng cho chữ**.

### 3.3 · Thang trung tính **[xác minh]**

`Colors / Neutral 2 / --gray-50 … --gray-950`. `--gray-950` = `#1E1E1E` là giá trị tối nhất, **11 bậc, đủ dùng**.

#### 🔴 `--gray-50` là màu sáng nhất của hệ — **không có `#FFFFFF` trong thiết kế** *(`DEC-035`, 24/09)*

Thắng chốt 24/09, **luật chia theo độ mờ** — đây là bản đã đính chính, đo lại lần cuối 24/09 **[xác minh]**:

| Trắng ở dạng | Đổi thành | Đang dùng |
| --- | --- | --- |
| **Đục 100%** | biến **`Colors/Neutral 2/--gray-50`** `#F8F8F8` | ~460 paint |
| **Trong suốt (< 100%)** | biến **`Colors/Opacity/White`** `#FFFFFF @ 15%` *(`VariableID:670:4263`)* — **alpha nằm trong biến**, paint để opacity 100% | 53 paint |

Đo lại page `UI`: **0 fill/stroke `#FFFFFF` thô còn lại** *(ngoài 3 nền SECTION)*.

**Luật cho Build:** `#FFFFFF` **không được viết thẳng trong CSS**. Đục → `var(--gray-50)`. Trong suốt → `var(--opacity-white)` *(tên CSS do Build đặt từ `Colors/Opacity/White`)*. Gặp trắng thô ở đâu = lỗi, phải hỏi.

**Nhóm `Colors/Opacity` — 4 biến, alpha nằm trong biến:**

| Biến | Màu | Alpha |
| --- | --- | --- |
| `Colors/Opacity/White` | `#FFFFFF` | 15% |
| `Colors/Opacity/Light` | `#D5D5D5` | 50% |
| `Colors/Opacity/Gray` | `#D5D5D5` | 25% |
| `Colors/Opacity/Dark` | `#212121` | 50% |

> ⚠️ **Bài học ghi lại — lỗi Agent 24/09.** Lượt bind đầu tiên **làm mất opacity**: `setBoundVariableForPaint` trả về paint MỚI, gán `opacity` sau đó không ăn, nên 86 fill + 18 stroke trong suốt bị đục hoá và 8 ô bento trang chủ thành khối trắng đặc. Agent **báo "0 lỗi" mà không mở màn ra nhìn**. Thắng tự sửa bằng biến `Colors/Opacity/White`.
> **Luật rút ra:** sau mỗi lượt ghi hàng loạt vào Figma, **phải chụp một màn thật để nhìn**, không được kết luận chỉ bằng số đếm.

**Ba ngoại lệ có chủ ý — đừng "sửa":**

| Chỗ | Vì sao giữ `#FFFFFF` |
| --- | --- |
| **Màu bóng đổ** trong `Shadow/Drop-Inner` và `Checkbox/Focus` | Là màu *effect*, không phải fill. Đổi sang `#F8F8F8` sẽ làm mờ quầng sáng Focus — thứ đang gánh chỉ tiêu **WCAG 2.4.7** |
| **Nền 3 SECTION** `Desktop` · `Mobile` · `Tablet` trên page `UI` | Nền khung tổ chức canvas, không phải thiết kế. Không xuất ra web |
| **Page `Icon`** *(309 điểm)* và **page `Style guide`** *(174 điểm)* | Thư viện icon và trang tài liệu — ngoài phạm vi trang web. `DEC-033`: giữ nguyên page `Icon` |

✅ **Không thiếu token nào.** Cả 7 frame trang dịch vụ đo được `fills = [SOLID #1E1E1E]` — đúng bằng `--gray-950`. Hero *trông* tối hơn là do lớp artwork (`Milkyway`, `Planet`) phủ lên, không phải do fill tối hơn. Xem `DEC-005`.

### 3.4 · Vàng trụ Tư vấn vs `--mark` — **ĐÃ GIẢI** (D03)

Quy ước kế thừa: *vàng (`--mark`) = "chỗ còn thiếu", không trang trí*. Trang 01 Tư vấn dùng vàng `#E79F01` làm màu chủ đạo.

**Không xung đột.** `Colors/Page/Tư vấn/--trung` và `--mark` là hai token ở hai nhóm tách biệt. Không phải làm gì — chỉ ghi lại để sau này ai thấy vàng trên `/advisory` thì biết nó **không** mang nghĩa "còn thiếu".

*Nguồn luật: `baika-design-system.html` (file gốc, **không còn trong project**) → `project-brief.md` mục 3 → project instructions mục 1.*

---

## 4. Typography **[đo lại toàn bộ 23/09 — 1367 text node, `DEC-021`]**

### 4.1 · Text style thật trong file

| Style | Cỡ | Kiểu | **Font thật** |
| --- | --- | --- | --- |
| `display-1` | 80 | SemiBold | Be Vietnam Pro |
| `display-2` | 48 | Bold | Be Vietnam Pro |
| **`H-1`** | 32 | Bold | **Chakra Petch** |
| **`H-2`** | 24 | Bold | **Chakra Petch** |
| **`H-3`** | 19 | Medium | **Chakra Petch** |
| `body-lg` | 17 | Regular | Be Vietnam Pro |
| `body` | 15 | Regular | Be Vietnam Pro |
| `caption` | 13 | Regular | Be Vietnam Pro |
| `label-mono` | 11 | Light | Be Vietnam Pro ⚠️ *không phải mono* |

### 4.2 · Font thật sự được dùng trên page `UI`

| Font | Số node | Ở đâu |
| --- | --- | --- |
| Be Vietnam Pro *(Regular/Medium/Light/SemiBold/Black)* | **760** | hero · body · caption · label |
| **Chakra Petch** *(Bold/Medium/SemiBold/Regular)* | **486** | `H-1` `H-2` `H-3` |
| **Noto Sans** *(Regular/Medium)* | **121** | ⚠️ toàn bộ chữ trong `Text field` `588:6238` |
| Font mono bất kỳ | **0** | ⚠️ không có |

*0 node bị fallback font. Chakra Petch render tiếng Việt có dấu bình thường — không có lỗi kỹ thuật.*

### 4.3 · ✅ Luật typography — ĐÃ CHỐT (`DEC-023` `DEC-024`, 23/09)

| Vai trò | Font |
| --- | --- |
| **Chữ hiển thị lớn** `display-1` `display-2` | **Be Vietnam Pro** |
| **Tiêu đề** `H-1` `H-2` `H-3` | **Chakra Petch** |
| **Chữ thường** `body-lg` `body` `caption` `label-mono` | **Be Vietnam Pro** |

⚠️ **Build phải nạp subset `vietnamese` cho CẢ HAI font**, nếu không dấu tiếng Việt rơi sang font hệ thống.

**Chữ mono — BỎ (`DEC-024`).** Quy ước ClearWork *"mono = thứ kiểm chứng được"* không còn hiệu lực; 0/1442 node dùng mono. Style `label-mono` **đề nghị đổi tên** thành `label` — tên hiện tại nói dối font thật (Be Vietnam Pro Light 11).

⚠️ **Còn 66 node `Noto Sans`** *(đo 23/09)* — `gợi ý` Medium **10px** × 42 *(ngoài thang)* và `nội dung` Regular 15px × 24. Component gốc `Text field` đã đổi sang Be Vietnam Pro, instance chưa theo.

⚠️ **Cỡ chữ ngoài thang ở `Button`:** `Button Text` đang có **18 / 16 / 14px** cho 3 cỡ nút — thang chữ có `17 / 15 / 13`. Ba cỡ đều lệch 1px.

### 4.4 · Thang cỡ chữ — đơn điệu, không còn lỗi thứ bậc

`80 · 48 · 32 · 24 · 19 · 17 · 15 · 13 · 11`

`display-1` dùng cho tiêu đề hero 7 trang. Nhãn ô bento trang chủ = 24 = `H-2`.

*Bản spec 21/09 ghi `display-2` = 28 và đề nghị đổi tên — Thắng đã nâng lên 48 ngày 22/09, đề nghị đó huỷ (`DEC-006`).*

---

---

## 4.5 · Token spacing · radius · shadow · grid **[bổ sung 23/09 — `DEC-022`]**

*Spec 21/09 hoàn toàn bỏ sót phần này. Không có nó, Build sẽ tự chế thang spacing — vi phạm luật "không tạo spacing mới".*

**`Spacing/` — 12 bậc**

| `--s-1` | `--s-2` | `--s-3` | `--s-4` | `--s-5` | `--s-6` | `--s-8` | `--s-10` | `--s-12` | `--s-16` | `--s-20` | `--s-24` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 64 | 80 | 96 |

**`Radius/` — 6 bậc:** `--r-xs` 4 · `--r-sm` 8 · `--r-md` 12 · `--r-lg` 16 · `--r-xl` 24 · `--r-pill` 999

**Effect style bóng đổ — 7 cái, ĐÃ token hoá**

| Style | Giá trị | Dùng ở |
| --- | --- | --- |
| `Global Tokens/--shadow-1` | `DROP_SHADOW` r2 off(0,2) `#000000/10` | `Button/Normal` |
| `--shadow-2` | r4 off(2,3) `#000000/30` | — |
| `--shadow-3` | r5 off(4,6) `#000000/40` | — |
| `--shadow-4` | r10 off(6,8) `#000000/60` | — |
| **`Shadow/Inner`** | `INNER_SHADOW` r6 off(0,−4) `#999999/50` | **`Button/Hover`** — *nổi lên* |
| **`Shadow/Inner Press`** | `INNER_SHADOW` r12 s4 off(0,4) `#000000/100` | **`Button/Active`** — *chìm xuống* |
| **`Shadow/Drop-Inner`** | `Shadow/Inner` + `DROP_SHADOW` r6 s1 `#FFFFFF/50` | **`Button/Focus`** — *vòng sáng* |

→ Ba cơ chế `DEC-014` **đã có token sẵn, tên nói đúng nghĩa**. Build dùng thẳng, không chép số.

**Grid style:** `sm` · `md` · `lg` · `xl` · `2xl`
**Paint style:** `Liner/Stroke/Light` · `Liner/Stroke/Black` · `Liner/BG/Button - 1`
**Blur:** `LayerBlur/Uniform/6…500` · `LayerBlur/Progessive/60`

⚠️ **`Checkbox 29:2685` chưa gán effect style** — Agent dựng 22/09 bằng giá trị thô. `Checkbox/Focus` dùng `DROP_SHADOW #FFFFFF r2`, **không khớp style nào có sẵn**. Cần Thắng quyết: tạo style mới `Shadow/Focus Ring`, hay đổi sang `Shadow/Drop-Inner`.

### 4.6 · Token nghi là rác kế thừa — cần chốt trước khi xuất CSS

| Nhóm | Số biến | Vấn đề |
| --- | --- | --- |
| `Colors/Primary/--blue-50…950` | 11 | Trang chủ có theme xanh dương–xanh ngọc → có thể đang dùng, hoặc là `--brand` cũ bỏ quên |
| `Colors/Neutral 1/--slate-50…950` | 11 | **Trùng vai trò với `Colors/Neutral 2/--gray-*`** — hai thang xám song song. `slate` ngả xanh (cũ), `gray` trung tính (mới, đang dùng) |

**22/78 biến (28%)** chưa rõ còn dùng. Bỏ quên thì chúng sẽ được xuất sang CSS và nằm đó mãi. Xem `DEC-025`.

## 5. Component tái sử dụng

### 5.1 · UI component — page **`Component`** (`660:2939`) **[đo lại 24/09 · DEC-034]**

> 🔴 **ĐỔI CHỖ KHO COMPONENT — đây là thay đổi mới nhất, đè lên `DEC-031`/`DEC-032`/`DEC-033`.**
>
> | Page | Node | Vai trò |
> | --- | --- | --- |
> | **`Component`** | `660:2939` | **Kho component của website.** Toàn bộ main component nằm ở đây |
> | `UI` | `191:812` | **Chỉ còn trang/màn** — 0 main component |
> | `Icon` | `6:20457` | Thư viện icon (Lucide, 1697 icon). **Giữ nguyên** |
> | `Component (cũ – không dùng)` | `8:12070` | Kho cũ đã đóng. **Build bỏ qua hoàn toàn** — kể cả `Text field` `58:5013` |
>
> **Luật tra cứu cho Build:** main component → page `Component`. Icon → page `Icon`. Trang → page `UI`.
> Node ID **không đổi** khi chuyển page, nên mọi ID trong tài liệu này vẫn dùng được.
> Đã xác minh: **894 instance trên page `UI`, 0 instance gãy** *(596 trỏ về `Component`, 241 về `Icon`, 57 mồ côi — xem `DEC-034`)*.

**17 component set** *(số trong ngoặc = số instance đang dùng trên page `UI`)*

| Component | Node | Trục variant | Dùng | Đủ chưa |
| --- | --- | --- | --- | --- |
| `Button 2` | `26:2182` | **`State`** = `Normal·Loading·Hover·Active·Focus·Disabled` × **`Type`** = `Sm·Md·Lg` — **18** | 65 | ✅ đủ · **24/09 đã đổi tên trục cho khớp `Button 1`** (`DEC-036`) |
| `Button 1` | `519:3354` | **`State`** = `Normal·Hover·Active·Focus·Loading·Disabled` × **`Type`** = `Sm·Md·Lg` — **18** | 7 | ✅ đủ *(dựng 24/09 — `DEC-029`)* · ✅ trùng trục với `Button 2` |
| `Text field` | `588:6238` | `Default·Focus·Disabled·Typing·Choose·Error` × `Default·Dropdown` — **10** | 78 | ✅ đủ *(`Choose` chỉ có nghĩa với Dropdown)* |
| `Checkbox` | `29:2685` | `Checked = False·True` × `State = Default·Hover·Focus·Error·Disabled` — **10** | 13 | ✅ hai trục — `DEC-013` · ⚠️ chưa gán effect style |
| `Badge` | `60:5278` | `Status` × `Icon` × `Type` — **42** | 1 | ✅ · dùng cho `Form · Error` · **24/09 sửa `Warring` → `Warning`** |
| `ServiceLinkCard` | `450:5984` | **`Type`** = `Desktop·Mobile·Tablet` × **`State`** = `Default·Hover·Focus` — **5** | 18 | ✅ · 24/09 `Property 1` → `Type` |
| `NVG header` | `452:6600` | `Close·Open` × `Desktop·Tablet·Mobile` — **6** | 14 | ✅ |
| `Footer` | `450:5263` | **`Type`** = `Desktop·Tablet·Mobile` — **3** | 12 | ✅ · 24/09 `Property 1` → `Type` |
| Ô bento **`Home/Services Card`** | `518:2781` | **`Type`** = `Desktop·Tablet·Mobile·Placeholder` × **`State`** = `Default·Hover·Focus·Active` — **11** | 48 | ✅ · **Thắng tự đổi tên + tách `Tablet` ra trục riêng 24/09** |
| `Các gói` | `365:785` | `Desktop·Mobile·Tablet` × `Default·Focus·Hover` — **7** | 41 | ✅ `Hover` đã thêm 23/09 |
| `FAQ Items` | `230:3231` | `Close·Open` × `Default·Hover·Focus` — **6** | 44 | ✅ đã bổ sung — `DEC-027` |
| `Planet` *(vòng cung hero)* | `321:178` | `Colors = Main` — **1** | 18 | ✅ 1 màu chung 7 trang — `DEC-026` |
| `Detail Step Item` | `355:256` | **`Type`** = `Title` *(cao 24px)* · `Full` *(tiêu đề + mô tả, cao 95px)* — **2** | 95 | ✅ · **95/95 instance dùng `Full`; `Title` chưa ai dùng** |
| `Nav Button` | `472:4918` | **`Selected`** = `False` *(chữ `--gray-600`)* · `True` *(chữ `--gray-50`, trang đang mở)* — **2** | 8 | ⚠️ **thiếu `Hover` + `Focus`** — là mục bấm được, WCAG 2.4.7 đòi focus nhìn thấy |
| **`Hamburger`** | `471:2470` | **`State`** = `Close` *(3 gạch)* · `Open` *(1 gạch)* — **2** | 14 | ✅ · 24/09 sửa chính tả + trục khớp `NVG header` |
| `_Dot` | `115:2906` | 3 | 1 | ✅ |
| `Item Container` | `273:358` | `Property 1` = `Default` · `Variant2` — **2** | **0** | ⚠️ **0 instance, chưa đổi tên** — Thắng chưa duyệt xoá. Build bỏ qua |

**+3 component set mới cho Remote Office (29/09):** `Data` `834:7502` · `Table Item` `842:7837` *(⚠️ đang nằm ở page `UI`)* · `Find Job` `854:8113` — spec ở **mục 13.2**.

**6 component đơn (không variant):** `Solution` `327:321` (33) · `Step item` `261:277` (**0 instance**) · `Footer/Half circle item` `374:394` (66) · `Process Card` `590:6536` (5) · `Neubula light` `573:3960` (14) · `Form/Success` `650:3285` (1)

> ⚠️ Component `arrow-up-right` trên page `UI` **đã bị Thắng xoá 24/09** để hết va chạm tên với icon cùng tên. Còn **19 instance mồ côi** trỏ về nó — xem `DEC-034` mục *Việc còn treo*.

**Form-level state — ✅ ĐÃ CÓ (`DEC-031`, 24/09).** Section `Form States` `645:3184`, 3 frame:

| Trạng thái | Cách dựng |
| --- | --- |
| `Submitting` | Nút → `Loading` · mọi `Text field` → `Disabled` |
| `Success` | **Component `Form/Success` `650:3285`** — thay chỗ cả khối form. Nền `Colors/Green/200@12%` · viền `Colors/Green/200` |
| `Error` | **Dùng lại `Badge` có sẵn** *(variant `Status=Error, Icon=Dot, Type=Badge`)* chèn ngay trên nút Gửi · ô sai → `Text field State=Error` · **giữ nguyên dữ liệu đã gõ** |

*(Đoạn cũ, không còn đúng:)* ~~**Form-level state — CHƯA CÓ.**~~ Khác với `Text field`. Là trạng thái của **cả khối form** khi bấm *Gửi*: `Idle` → `Submitting` → `Success` / `Error`. Nút `Loading` đã có là một phần của `Submitting`; còn thiếu `Success` và `Error`. Chặn Release Candidate.

Chiều cao NVG bar desktop = **128px** **[xác minh]**.

### 5.2 · Visual component **[xác minh]**

| Visual | Dùng ở | Cấu tạo |
| --- | --- | --- |
| **Vòng cung chân trời (Planet)** | hero cả 7 trang dịch vụ | vector cung 1920×727 + vệt sáng rìa + `Neubula light` |
| **Dải sao (Milkyway)** | hero cả 7 trang | frame 1280×694 |
| **Chữ display trên cung** | hero cả 7 trang | `text-path` 1382×639, gradient `--trung` → `--dam` alpha 0 |
| **Quầng sáng góc (Top left light)** | hero cả 7 trang | vector 427×517 |
| **Vòm nửa tròn** | S3 "Bạn sẽ nhận được gì", cả 7 trang | `Footer/Half circle item` 360×180 |
| **Line light** | S3, nối cung xuống vòm | frame 77×(140–371) |
| **Lưới bento** | trang chủ | ô `256 × 208`, desktop 5×4 |

### 5.3 · Cấu trúc trang dịch vụ — 7 khối cố định **[xác minh]**

```
S1  Hero + Bạn có đang gặp vấn đề này?   (3 thẻ vấn đề — hằng số)
S2  BAIKA sẽ làm gì                       (b-stage-scope, 3–4 cụm)
S3  Bạn sẽ nhận được gì                   (6 vòm — hằng số)
S4  Các gói dịch vụ                        (3 / 4 / 5 gói)
S5  FAQ                                    (4 câu — hằng số)
S6  Liên hệ                                (form + checkbox bảo mật)
    Footer
```

**Hai trang có 8 khối** — thêm một lưới `Process card` chèn giữa S2 và S3:

| Trang | Khối chèn | Số thẻ |
| --- | --- | --- |
| Tư vấn | `6 dịch vụ` — dẫn sang 6 trang kia, **mỗi thẻ là link** (`ServiceLinkCard`) | 6 · `3+3` |
| Công nghệ & AI | `5 bước thực hiện` — không link (`Process Card`) | 5 · `3+2` |

**Số cụm & số thẻ S2 mỗi trang [xác minh]:**

| Trang | Cụm | Thẻ mỗi cụm | Đánh số |
| --- | --- | --- | --- |
| Vận hành | 3 | 1 / 2 / 3 | ✅ |
| Marketing | 3 | 4 / 3 / 2 | ✅ |
| Tài chính | 4 | 1 / 2 / 4 / 1 | ✅ |
| Pháp lý | 3 | 2 / 4 / 2 | ✅ |
| Công nghệ & AI | 4 | 1 / 3 / 2 / 2 | ❌ |
| Đào tạo CEO | 4 | 3 / 5 / 2 / 2 | ✅ |
| Tư vấn | 4 | 1 / 1 / 1 / 1 | ❌ |

Luật lưới gói: **không bao giờ để hàng lẻ 1 thẻ** — 4 gói = `2+2`, 5 gói = `3+2`.

---

## 6. Trang chủ — hệ thống lưới **[xác minh 21/09]**

Lưới bento, ô cơ sở **256 × 208**:

| Breakpoint | Cột × Hàng | Khối `Baika` |
| --- | --- | --- |
| 1280 | 5 × 4 | 2×2 ô (512 × 416) |
| 768 | 3 × 4 | 2×2 ô |
| **375** | 1 cột, ô cao | toàn chiều rộng |

**9 ô có nhãn:** 7 dịch vụ + `Trạm Ý Tưởng` + `Trạm Kết Nối`. Các ô còn lại không nhãn, làm nhịp và mang nền gradient.

**Khối `Baika`** chứa: logo + wordmark + **câu định vị** (*"BAIKA rà soát và dựng lại hệ thống vận hành — từ mô hình kinh doanh đến tài chính, pháp lý, công nghệ"*) + nút `LIÊN HỆ`.

**Quan sát cần quyết:**

- Bảng màu trang chủ hiện là **dải xanh dương–xanh ngọc**, không dùng 7 màu trụ, và **không có vòng cung chân trời** → khác hẳn ngôn ngữ 7 trang trong (gần đen + cung sáng). Xem D05.
- `Trạm Ý Tưởng` đang là ô **xanh lá nhạt**; `sitemap.md` mô tả nó là **hạt nhân vàng**. Xem D06.
- Hai ô cùng ở trạng thái nổi bật trên bản desktop (`Trạm Ý Tưởng`, `Tư vấn`) — cần chốt đâu là mặc định, đâu là hover.
- Nhãn trắng nằm trên vùng gradient sáng ở vài ô → nghi ngờ tương phản < 4.5:1. Xem D07.

---

## 7. Motion & interaction **[chưa có spec]**

Chưa có tài liệu animation nào trong file. Những chuyển động **đã ngụ ý** trong thiết kế:

- Nhãn cụm S2 `position: sticky` (biên = khối cụm, `top` = 128 + khoảng thở)
- Accordion FAQ đóng/mở
- NVG bar `Close` → `Open`
- Hover ô bento trang chủ (đổi nền + hiện `↗`)
- Hover thẻ / nút

---

## 8. Nội dung

Nguồn chữ đã chốt: `claude/noi-dung-theo-section.md` (7 trang, xếp theo section) và `claude/noi-dung-day-du.md` (nguyên văn + 28 câu trả lời FAQ).

**Hằng số nội dung [xác minh]:** mỗi trang đúng **3** thẻ vấn đề · **6** kết quả nhận được · **4** câu FAQ.

**Còn chờ xác nhận [kế thừa]:** 2 trụ cột thêm ở trang CEO · `Finance Governance` · bộ gói trang Vận hành · đường dẫn trang Liên hệ · hai con số SLA ở khối 5 bước trang AI.

---

## 9. Chưa được thiết kế — danh sách đóng

| Hạng mục | Trạng thái |
| --- | --- |
| Trang `Liên hệ` | ❌ chưa vẽ — **trong phạm vi v1, chặn Release Candidate** |
| `Giới thiệu` · `Trạm Ý Tưởng` | ⬜ **ngoài phạm vi v1** — không chặn gì |
| ~~Trạng thái nút: focus · disabled · loading~~ | ✅ **ĐÃ XONG** — `Button 26:2182` đủ 18 variant / 6 trạng thái (`DEC-008` `DEC-014`) |
| ~~Trạng thái form: focus · lỗi từng trường~~ | ✅ **ĐÃ XONG** — `Text field 588:6238` 10 variant · `Checkbox 29:2685` 10 variant (`DEC-013`) |
| Trạng thái **cả khối form**: `Submitting` · `Success` · `Error` | ❌ **vẫn thiếu — chặn Release Candidate** |
| Trạng thái rỗng / lỗi / không tìm thấy | ❌ |
| Spec animation & easing | ❌ |
| Định dạng + dung lượng asset hero | ❌ chưa chốt |
| Tablet cho 6/7 trang dịch vụ | ⚠️ `[chưa kiểm]` — section `Tablet` mới có 1 trang |
| Mobile cho 6/7 trang dịch vụ | ⚠️ cố ý — 1 trang mẫu, 6 trang suy ra theo quy tắc |

---

## 10. Quyết định Design — đã chốt 21/09/2026

| ID | Kết luận | Ghi chú |
| --- | --- | --- |
| **D01** | **Mobile = `375`** cho cả site | Thắng đã sửa trang chủ mobile 390 → 375. Breakpoint: `1280 / 768 / 375` |
| **D02** | **Không thêm token.** Nền 7 trang dịch vụ đo được là `#1E1E1E` = đúng `--gray-950` | Agent đã sai ở bản draft. Hero *trông* tối hơn là do lớp artwork (Milkyway, Planet) phủ lên, không phải do fill tối hơn |
| **D03** | **Không hành động.** Hai nhóm token tách biệt nên không xung đột kỹ thuật | Chỉ ghi một dòng trong tài liệu: *vàng trụ Tư vấn ≠ `--mark`* |
| **D04** | **Giữ `display-1` = 80px.** Không tạo biến thể theo breakpoint — dùng `clamp()` một token co giãn | ~~`display-2` (28px) đặt tên sai, đổi tên thành `lead`~~ → **SUPERSEDED bởi `DEC-006`**: Thắng đã nâng `display-2` lên **48px** (22/09), thang chữ đơn điệu, **đề nghị đổi tên đã huỷ** |
| **D05** | **Trang chủ giữ nguyên UI và theme riêng của BAIKA.** Không đưa vòng cung vào | *Yêu cầu founder:* trang chủ = theme BAIKA; 7 trang con mỗi trang một màu trụ. Mỗi ô bento link sang trang đúng tên |
| **D06** | **Giữ nguyên màu `Trạm Ý Tưởng` hiện tại** | Sếp đã duyệt |
| **D07** | **Chưa kết luận được — chuyển sang QA gate** | Xem mục 11 |
| **D08** | Bộ trạng thái bắt buộc, chỉ cho **component người dùng tương tác được** | Xem mục 12 |

---

## 11. D07 · Tương phản nhãn ô bento — CHƯA ĐO ĐƯỢC

**Đo được chắc chắn:**

| Ô | Chữ | Nền ô | Tỉ lệ |
| --- | --- | --- | --- |
| `Tư vấn` · `Trạm Ý Tưởng` *(ô sáng)* | `#113F6B` | `#EDF6FD` đặc | **9.86 : 1** ✅ |
| 8 ô còn lại | `--gray-50` `#F8F8F8` | **`Colors/Opacity/White`** = `#FFFFFF @ 15%` *(`DEC-035`)* | **không tính được** |

**Vì sao không tính được:** nền ô gần như trong suốt, nên nền thật dưới chữ là **lớp artwork gradient phía sau lưới** (`534:3940`). Tỉ lệ đổi theo từng vị trí trên gradient. Con số `1.06` mà script trả về là vô nghĩa — nó so chữ trắng với lớp phủ trắng 5%, không phải với nền thật.

**Ngưỡng để tự kiểm:** chữ `#F8F8F8` đạt 4.5:1 khi nền dưới nó **tối hơn khoảng `#767676`**. Hai ô nghi ngờ nhất khi nhìn bản render: `PHÁP LÝ & THUẾ` (góc trên phải) và `HỆ THỐNG HÓA VẬN HÀNH` — chữ nằm trên vùng gradient sáng nhất.

**Gate:** đo bằng pixel thật trên bản dựng ở Local QA. Không tuyên bố PASS trước đó.

---

## 12. D08 · Bộ trạng thái bắt buộc

*Cập nhật 22/09 sau Compliance Check.*

| Component | Cần có | Hiện có (đo 22/09) |
| --- | --- | --- |
| **Button** `26:2182` | `Normal` · `Hover` · `Active` · `Focus` · `Disabled` · `Loading` × 3 cỡ | ✅ **18 variant** — đủ cả 6. `Active` đã có (`DEC-008` `DEC-014`) |
| **Ô bento** `518:2781` | `Default` · `Hover` · `Focus` | ✅ `Default · Hover · Focus · Placeholder · Tablet` |
| **`ServiceLinkCard`** `450:5984` *(trang Tư vấn — là link)* | `Default` · `Hover` · `Focus` | ✅ `State = Default \| Hover \| Focus` — `Focus` đã vẽ 22/09 (`DEC-010`) |
| **`Process Card`** *(trang AI — tĩnh)* | `Default` | ✅ component thường, không variant |
| **`FAQ Items`** | `Đóng` · `Mở` · `Hover` · `Focus` | ✅ đóng/mở · ❌ hover, focus |
| **Form field** (`Text field` `588:6238`) | `Default` · `Focus` · `Error` · `Disabled` | ✅ **10 variant** — đủ |
| **`Checkbox`** `29:2685` | `Checked` × `Default·Hover·Focus·Error·Disabled` | ✅ **10 variant** — `DEC-013` |
| **Form (cả khối)** | `Idle` · `Submitting` · `Success` · `Error` | ❌ |
| **NVG header** | `Close` · `Open` × 3 thiết bị | ✅ đủ 6 variant |

⚠️ **`Focus` là bắt buộc** — nó là cách người dùng bàn phím biết mình đang ở đâu, và form là điểm chuyển đổi chính của cả 7 trang.

⚠️ **`Hover` cũng bắt buộc trên desktop** — nó là tín hiệu duy nhất cho biết một thứ bấm được.

**Ghi chú đặt tên:** trong `26:2182`, property điều khiển *trạng thái* tên `small button`, property điều khiển *cỡ* tên `Property`. Hai tên này sẽ thành tên prop trong code — đề nghị `state` và `size`. Ô bento dùng `Tablet` như một giá trị của trục trạng thái — nên tách breakpoint ra khỏi trạng thái.

### 12.1 · Thẻ lưới đã tách làm hai — ĐÓNG (C5-b, xác minh 22/09)

| Khối | Component | Vai |
| --- | --- | --- |
| Trang Tư vấn · `6 dịch vụ` | **`ServiceLinkCard`** `450:5984` | Là **link** sang 6 trang dịch vụ. Có `State = Default \| Hover` |
| Trang AI · `5 bước thực hiện` | **`Process Card`** | **Tĩnh**, không tương tác |

Sáu instance trang Tư vấn đã trỏ đúng `ServiceLinkCard`; năm instance trang AI trỏ `Process Card`.

### 12.2 · `ServiceLinkCard` — ĐÓNG (đo lại 22/09, `DEC-010`)

```
Property 1 = Desktop | Mobile | Tablet      ← trục breakpoint
State      = Default | Hover | Focus        ← trục trạng thái
5 variant: Desktop×3 · Mobile×1 · Tablet×1
```

`Active` đã được **thay bằng `Focus`**. Đúng hướng: với một **link**, `Focus` quan trọng hơn hẳn — không có nó thì người dùng bàn phím không biết mình đang đứng ở thẻ nào.

Mobile/Tablet chỉ có `Default` — hợp lý, màn cảm ứng không có hover.

*Đoạn phân tích `Active` vs `Focus` và phương án "giải ở tầng code" ở bản 21/09 đã **SUPERSEDED** — Thắng vẽ thẳng `Focus` trong Figma.*

### 12.4 · Luật trạng thái tương tác toàn hệ — `DEC-014` `DEC-015`

| | Cơ chế | Nghĩa |
| --- | --- | --- |
| `Hover` | **sáng lên** *(hoặc không đổi, nếu đã quyết như vậy — xem `Checkbox`)* | *"bấm được"* |
| `Active` | **chìm xuống** — `INNER_SHADOW` đổ ngược chiều `Hover` | *"đã nhận cú bấm"* |
| `Focus` | **quầng sáng trắng bên ngoài** | *"bạn đang đứng đây"* |

> **Quầng sáng trắng = `Focus`, và chỉ `Focus`.** Không component nào được dùng nó cho việc khác.

`Disabled` toàn hệ = đổi sang `--gray-700`, **không giảm opacity**.

⚠️ Giá trị bóng đổ **không nằm trong token nào** (`#999999/50` · `#000000` · `#FFFFFF/50` viết thẳng). File chưa từng có token cho shadow — không phải lỗi, nhưng spec bàn giao phải chép đúng số.

### 12.3 · Breakpoint nằm trong trục variant — ghi chú cho Build

`ServiceLinkCard` có trục `Property 1 = Desktop | Mobile | Tablet`; ô bento có `Tablet` nằm lẫn trong trục trạng thái (`Default | Hover | Placeholder | Tablet | Focus`).

Trong Figma, để variant theo breakpoint là **hợp lý** — nó ghi lại thẻ đổi hình thế nào ở từng màn. Nhưng trong code, breakpoint là **media query**, không phải prop.

**Luật cho Build:** không sinh prop `breakpoint`. Variant theo màn đọc như **tài liệu responsive**, không phải API của component.

*Đề nghị nhỏ: đổi tên trục `Property 1` → `breakpoint` để tự nó nói ra ý nghĩa. Ô bento thì tách `Tablet` ra khỏi trục trạng thái.*

---

## 13. Trang Remote Office — 3 layout mới **[bổ sung 29/09 · đọc trực tiếp Figma `825:6535`]**

> ⚠️ **ĐÃ CHUYỂN VÀO REPO 29/09/2026** — bản chính của mục này giờ là `docs/remote-office/` trong repo `BK.-Web-Update-Sep-2026` (commit `9dfc246`), đầy đủ hơn mục 13 dưới đây. **Sửa trong repo, không sửa ở đây.** Mục 13 giữ lại để tra lịch sử.

> **Phạm vi mục này:** chỉ thêm **3 layout mới** và luật dùng của chúng. Mọi khối còn lại của Remote Office **dùng lại nguyên UI của 7 trang dịch vụ** (mục 5.3) — không có spec riêng, không được dựng lại khác đi.
>
> **Nguồn chân lý:** Figma `YmcXg1lQqGVjQOFrVtdOgW` → frame `Remote office` `825:6535`. Repo `remote-office-Sep-2026` trên GitHub **chỉ là hồ sơ nội dung (spec A)**, không có liên kết code nào với đường Figma → source Astro. Khi chữ hai bên lệch nhau, **Figma thắng**; chênh lệch A–B ghi ở `claude/remote-office-so-sanh-A-B.md`.
>
> Các luật đánh dấu **[suy luận]** là đề xuất của Agent — **chưa duyệt**, Build không tự áp khi Thắng chưa chốt.

### 13.1 · Cấu trúc trang — khối nào dùng lại, khối nào mới **[xác minh 29/09]**

Frame 1280 × 7985 · **chỉ có Desktop** · tên miền `baika.website`.

| # | Frame | Khối | UI dùng |
| --- | --- | --- | --- |
| R1 | `Herro` `825:6536` | Hero | **= hero 7 trang** — `Milkyway` · `Planet` · text-path `Remote Office` · quầng sáng góc (`Vector 6`) · nút CTA `Button 2` `Md` *"Ước tính chi phí miễn phí"*. Code: `HeroSection.astro` với `ctaLabel` |
| R2 | `Solution` `825:6548` | Chi phí thật của một nhân viên | 🆕 **Layout mới — 13.3** |
| R3 | `Baika sẽ làm gì` `825:6556` | BAIKA sẽ làm gì | **= S2** — `Detail Step Item` |
| R4 | `Ước tính khoản lệch` `834:7508` | Công cụ ước tính | 🆕 **Layout mới — 13.4** |
| R5 | `Bạn sẽ nhận được gì` `825:6592` | Bạn sẽ nhận được gì | **= S3** — 6 × `Solution planet` `794:3117` + `Neubula light` |
| R6 | `Gói dịch vụ` `825:6629` | Tuyển thêm người hay giao cho BAIKA | 🆕 **Layout mới — 13.5** |
| R7 | `Gói dịch vụ` `842:7714` | Các gói dịch vụ | **= S4** — 3 × `Các gói` *(thẻ giữa = `State=Focus` → thẻ nổi bật, giống trang CEO)* |
| R8 | `FAQ` `825:6635` | FAQ | **= S5** — `FAQ Items` |
| R9 | `Contact` `825:6643` | Liên hệ | **= S6** — `Text field` · `Checkbox` · `Button 2` |
| — | `Footer` · `Header` | | instance chung toàn site |

**Khác 7 trang về thứ tự:** không có khối *"Bạn có đang gặp vấn đề này?"* (3 thẻ vấn đề). Khối R2 đứng vào chỗ đó.

*Đã kiểm: `Solution planet` `794:3117` chính là vòm S3 của 7 trang (6 instance/trang ở `/advisory` `/remote-ops` `/legal-tax` `/ceo-blueprint`). Mục 5.2 còn ghi `Footer/Half circle item` — tên cũ, xem 13.7.*

### 13.2 · Component mới — nằm ngoài bảng 5.1

| Component | Node | Page | Trục variant | Dùng ở |
| --- | --- | --- | --- | --- |
| **`Data`** | `834:7502` | `Component` | `Property 1` = `Cost row` · `Total` — **2** | R2 *(5 instance)* |
| **`Table Item`** | `842:7837` | ⚠️ **`UI`** | `Property 1` = `Head·Body·Foot` × `Type` = `Default·Light` — **6** | R4 *(8)* · R6 *(20)* |
| **`Find Job`** | `854:8113` | `Component` | `Property 1` = `Default` *(đóng)* · `Variant2` *(mở)* — **2** | R4 *(1)* |

**`Data`** — một dòng số liệu. Rộng 700 FIXED · auto-layout ngang · padding `16 / 8` · `space-between` · viền dưới 1px `--gray-600` (inside).

| Variant | Nhãn | Giá trị | Nền |
| --- | --- | --- | --- |
| `Cost row` | `body` `--gray-50` | `body-lg` `--gray-50` | không |
| `Total` | `body` `--gray-50` | **`H-3`** `--gray-50` | `Colors/Opacity/Light` |

**`Table Item`** — một ô bảng. 400 × 60 FIXED · padding `16 / 32` · gap 10.

| | `Default` | `Light` |
| --- | --- | --- |
| Nền | không | `Colors/Opacity/White` |
| Viền | 1px `--gray-900` bốn phía (center) | không |

`Head` → chữ `H-3` · `Body` / `Foot` → chữ `body` · tất cả `--gray-50`. `Head` bo góc trên, `Foot` bo góc dưới *(bán kính hỗn hợp — Build đọc từ Figma, không đoán)*.

**`Find Job`** — ô chọn nhóm công việc. 300 × 56. Khung trong: nền `Colors/Opacity/White` · padding 16 · chữ `H-3` + icon `chevron-down`.
Khi mở: icon → `chevron-up` · danh sách 300 × 336 gồm **7 × `Check {Default}`** (300 × 48 · padding `12 / 16` · nền `Colors/Opacity/White`).

### 13.3 · Layout R2 — Chi phí thật (`Solution` `825:6548`)

```
Section 1280 × 602 · dọc · gap 80 (--s-20) · padding 80 / 40 (--s-20 / --s-10)
├─ H-1 --gray-50  "Một nhân viên lương 10 triệu tốn của bạn 14–15 triệu"
└─ Hàng ngang · gap 40 (--s-10)
   ├─ Trái 560 × 325
   │   ├─ Số lớn "23,5" + "%" · "Bảo hiểm" · "Công đoàn"
   │   └─ Đoạn giải thích (rộng 470) — HĐ cộng tác/dịch vụ vẫn phải đóng BHXH
   └─ Phải 600 × 325 · dọc · gap 12 (--s-3) · canh ĐÁY
       ├─ Data {Cost row} × 4
       └─ Data {Total}   × 1
```

**Dữ liệu trong bảng [xác minh]:**

| Dòng | Giá trị |
| --- | --- |
| Lương ghi trên hợp đồng | 10.000.000 đ |
| Bảo hiểm phần doanh nghiệp đóng (21,5%) | 2.150.000 đ |
| Kinh phí công đoàn (2%) | 200.000 đ |
| Chỗ ngồi, thiết bị, tuyển dụng, ngày nghỉ | 1.500.000 đ – 2.500.000 đ |
| **Tổng chi phí thật** *(`Total`)* | **≈ 14 – 15 triệu/tháng** |

`23,5%` = 21,5% + 2% — số lớn bên trái phải luôn bằng tổng hai dòng này.

**Luật:**

1. Bảng chi phí là **danh sách dữ liệu tĩnh**, không tương tác → dựng bằng `<dl>` hoặc `<table>`, **không** JS.
2. Dòng `Total` luôn là dòng **cuối cùng**, chỉ **một** dòng `Total` mỗi bảng.
3. Cột phải canh đáy để dòng `Total` thẳng hàng với đáy đoạn giải thích bên trái.
4. ⚠️ **Số lớn "23,5" đang lệch hệ** — cỡ **100px** (ngoài thang, `display-1` = 80) và màu **`#FFFFFF` thô** (vi phạm `DEC-035`). Chữ "%", "Bảo hiểm", "Công đoàn" cũng `#FFFFFF` thô. **Build không chép số 100 và không viết `#FFFFFF`** — màu dùng `--gray-50`; cỡ chữ **chờ Thắng chốt** (xem 13.8).

### 13.4 · Layout R4 — Công cụ ước tính (`Ước tính khoản lệch` `834:7508`)

**Đây là khối tương tác duy nhất có tính toán trên toàn site.**

```
Section 1280 × 924 · dọc · gap 80 (--s-20) · padding 96 / 40 (--s-24 / --s-10)
├─ H-1 "Ước tính khoản chênh lệch của bạn"
└─ Hàng ngang
   ├─ TRÁI — Đầu vào  532 × 208 · dọc · gap 4 (--s-1) · padding 16 (--s-4)
   │   3 dòng 500 × 56, mỗi dòng: nhãn (body --gray-50) ↔ điều khiển 300 × 56
   │   ├─ "Số người định tuyển"  → bộ tăng/giảm   [ < ]  2  [ > ]
   │   ├─ "Lương dự kiến"        → bộ tăng/giảm   [ < ]  10.000.000 đ  [ > ]
   │   └─ "Nhóm công việc"       → Find Job
   └─ PHẢI — Kết quả  532 × 619 · dọc · gap 80 (--s-20) · padding 16 (--s-4)
       ├─ Bảng 500 × 252 · gap 4 — 4 hàng × 2 ô Table Item 250 × 60
       ├─ Đường kẻ  Colors/Opacity/Light
       ├─ Khối kết quả · gap 12 (--s-3)
       │   ├─ "Ước tính chênh lệch"   body     --gray-300
       │   ├─ "18.400.000 đ"          display-2 --gray-50
       │   ├─ "≈220.800.000 đ/năm"    H-3
       │   └─ Chú thích               caption  — "tham khảo, chưa gồm VAT…"
       └─ Button 2 {Normal, Lg} 500 × 46 — "Gửi yêu cầu theo ước tính này"
```

**Bộ tăng/giảm (stepper)** — *không phải component, đang vẽ tay*: 300 × 56 · nền `Colors/Opacity/White` · padding `16 / 10` · gap 10 · giá trị chữ `H-3` · icon `chevron-left` / `chevron-right`.

**Bảng kết quả [xác minh]:**

| Hàng | Variant | Tự tuyển | Giao cho BAIKA |
| --- | --- | --- | --- |
| 1 | `Head` | Tự tuyển | Giao cho BAIKA |
| 2 | `Body` | 2 người | Gói Vận hành |
| 3 | `Body` | 14.150.000 đ | – |
| 4 | `Foot` | 28.300.000 đ | 9.900.000 đ |

**Công thức — khớp số trong Figma [xác minh bằng tính tay]:**

```
chi phí 1 người  = lương × 1,235 + 1.800.000        → 10.000.000 × 1,235 + 1.800.000 = 14.150.000
tự tuyển / tháng = chi phí 1 người × số người        → 14.150.000 × 2 = 28.300.000
chênh lệch       = tự tuyển − giá gói BAIKA           → 28.300.000 − 9.900.000 = 18.400.000
theo năm         = chênh lệch × 12                    → 220.800.000
```

- `1,235` = 1 + 21,5% bảo hiểm + 2% công đoàn — **khớp R2**.
- `1.800.000` = chi phí chỗ ngồi/thiết bị/tuyển dụng — nằm trong khoảng 1,5–2,5 triệu của R2 **nhưng không phải điểm giữa (2,0)**. Con số lấy từ spec A **[kế thừa — repo `remote-office-Sep-2026`]**.
- Giá gói BAIKA theo từng nhóm công việc × số người → **chưa có bảng giá** (quyết định mở ở `remote-office-so-sanh-A-B.md` mục 10). Build **không tự đặt giá**.

**Luật:**

1. **Kết quả cập nhật ngay** khi đổi đầu vào — Figma không có nút "Tính". **[suy luận]**
2. **Stepper phải bấm được bằng bàn phím** và có `Hover` / `Focus` / `Disabled` theo `DEC-014` (mục 12.4). `Disabled` = khi chạm giới hạn (vd. `<` ở 1 người).
3. Khối kết quả đặt `aria-live="polite"` — người dùng trình đọc màn hình nghe được số mới.
4. Bảng kết quả là `<table>` thật; hàng 1 là `<th scope="col">`.
5. Chú thích *"Con số mang tính tham khảo, chưa gồm VAT…"* **luôn hiện**, không được ẩn hay thu nhỏ hơn `caption`. **[suy luận]**
6. Định dạng số: dấu chấm ngăn nghìn + `đ` — `18.400.000 đ`. **Một định dạng duy nhất** trong khối (xem 13.8 #6).
7. JS chỉ cho khối này — script nhỏ tại chỗ, **không** kéo framework UI (CLAUDE.md mục 6).
8. Có JS tắt → vẫn hiện bảng với số mặc định trong Figma (2 người · 10 triệu) và nút gửi vẫn dùng được. **[suy luận]**
9. Layer ẩn `Frame 2121454407` (bản nháp khối kết quả cũ: *"Bạn tiết kiệm · ≈ 220,8 triệu/ năm"*) — **Build bỏ qua**.

### 13.5 · Layout R6 — Bảng so sánh (`Gói dịch vụ` `825:6629`)

```
Section 1280 × 681 · dọc · gap 40 (--s-10) · padding 80 / 40 (--s-20 / --s-10)
├─ H-1 "Tuyển thêm người hay giao cho Baika"
└─ Bảng 1200 · dọc · gap 4 (--s-1)
   ├─ Hàng đầu 1200 × 60 · canh PHẢI · 2 ô: Head Default | Head Light
   └─ 6 hàng thân 1200 × 60 · 3 ô × 400: Body Default (nhãn) | Body Default | Body Light
      (ô cuối hàng cuối = Foot Light)
```

**Dữ liệu [xác minh]:**

| Tiêu chí | Tuyển nhân viên | BAIKA Remote Office |
| --- | --- | --- |
| Chi phí mỗi tháng | ≈ 14–15 triệu cho một người | Từ 4,9 triệu |
| Bảo hiểm, công đoàn | Doanh nghiệp tự đóng, tăng theo mỗi người | Đã nằm trong phí dịch vụ |
| Thời gian có người làm | Vài tuần tuyển, thêm thời gian thử việc | 7 ngày làm việc |
| Người nghỉ phép, nghỉ việc | Việc dừng lại, phải tuyển lại | BAIKA bố trí người thay |
| Quản lý, chấm công | Doanh nghiệp tự làm | Không cần |
| Chứng từ chi phí | Bảng lương, hồ sơ bảo hiểm | Hoá đơn VAT |

**Luật:**

1. **Cột BAIKA luôn dùng `Type=Light`** (nền sáng), cột đối thủ dùng `Default` (chỉ viền). Không đảo.
2. **Cột BAIKA luôn nằm bên PHẢI** — mắt đọc so sánh trái → phải, kết luận ở cuối.
3. Dựng bằng `<table>`: cột nhãn là `<th scope="row">`, hàng đầu là `<th scope="col">`.
4. Hàng đầu **thiếu ô góc** trên Figma (chỉ 2 ô, canh phải) — code **thêm một `<th>` rỗng** ở góc để bảng đúng cấu trúc; nhìn vẫn như Figma.
5. Mỗi hàng đúng 3 ô, cao 60 tối thiểu. Chữ dài hơn → **hàng cao lên**, không cắt chữ, không thu cỡ. **[suy luận]**
6. Chỉ ô cuối cột BAIKA dùng `Foot` (bo góc dưới). Thêm/bớt hàng thì `Foot` luôn chuyển về hàng cuối.

### 13.6 · Responsive — **chưa có thiết kế** **[suy luận, chưa duyệt]**

Remote Office chỉ có Desktop 1280. Đề xuất dưới đây theo luật *"component đổi dạng, không co lại"* — **Build không dựng Tablet/Mobile khi Thắng chưa duyệt**.

| Layout | 768 | 375 |
| --- | --- | --- |
| R2 Chi phí | 2 cột → xếp dọc: số lớn trên, bảng dưới | như 768 · `Data` rộng 100% |
| R4 Ước tính | Trái / phải xếp dọc: đầu vào trên, kết quả dưới | stepper + `Find Job` rộng 100% · nhãn nằm **trên** điều khiển |
| R6 So sánh | Giữ bảng 3 cột | **Đổi dạng:** mỗi tiêu chí thành một thẻ — *tiêu chí* → 2 dòng *Tuyển* / *BAIKA*. **Không** cuộn ngang |

### 13.7 · Lỗi file Figma cần Thắng sửa — Build **không** tự bù

| # | Chỗ | Vấn đề | Đề nghị |
| --- | --- | --- | --- |
| 1 | `Table Item` `842:7837` | Nằm ở page **`UI`**, trái luật `DEC-034` (component chỉ ở page `Component`) | Chuyển sang page `Component` — ID không đổi |
| 2 | `Data` · `Table Item` · `Find Job` | Trục tên **`Property 1`**; `Find Job` có giá trị **`Variant2`** | `Data`: `Type = Cost row·Total` · `Table Item`: `Row = Head·Body·Foot` · `Find Job`: `State = Close·Open` (khớp `NVG header`, `Hamburger`) |
| 3 | `Find Job` | Chỉ có đóng/mở — **thiếu `Hover` · `Focus`**, mục chọn thiếu trạng thái **đang chọn** | Bổ sung — WCAG 2.4.7 |
| 4 | Stepper trong R4 | Vẽ tay, không phải component · thiếu `Hover` · `Focus` · `Disabled` | Tạo component `Stepper` |
| 5 | Nút CTA hero — **mọi trang**, không riêng Remote Office *(đính chính 29/09)* | Instance để **`State=Hover`** trên cả 7 trang lẫn Remote Office | Đổi về `Normal`. Code đã dựng theo `Normal` từ trước |
| 6 | Frame `825:6629` | Tên **"Gói dịch vụ"** trùng với `842:7714` | Đổi tên → `So sánh` |
| 7 | Frame hero — **mọi trang** *(đính chính 29/09)* | Tên **"Herro"** ở cả 7 trang lẫn `825:6536` | → `Hero` |
| 8 | Frame `825:6535` | Chế độ màu collection `Trụ` = **"Đào tạo CEO"** — nhiều khả năng sót lại khi nhân bản trang CEO | Chốt màu trụ của Remote Office (13.8 #1) |
| 9 | Mục 5.2 spec này | Vòm S3 ghi `Footer/Half circle item`; component thật đang dùng là `Solution planet` `794:3117` | Agent sửa mục 5.2 khi Thắng xác nhận |

### 13.8 · Quyết định còn mở — hỏi từng câu, theo thứ tự

1. **Màu trụ của Remote Office** — giữ "Đào tạo CEO", dùng "Vận hành", hay trụ riêng? *(chặn Build R1, R5, R7)*
2. **Remote Office dựng ở đâu** — trong repo này (trang `/remote-office`, trỏ `baika.website` vào) hay repo riêng? *(chặn Build toàn trang)*
3. **Cỡ chữ số lớn "23,5"** — về `display-1` (80) hay thêm token mới?
4. **Bảng giá BAIKA theo nhóm công việc** cho công thức R4 *(chặn R4)*.
5. **Nút "Gửi yêu cầu theo ước tính này"** — cuộn xuống form R9 và điền sẵn số ước tính, hay chỉ cuộn xuống?
6. **Định dạng số** — `≈220.800.000 đ/năm` (Figma R4) vs `≈ 220,8 triệu/ năm` (layer nháp) vs `≈ 14 – 15 triệu/tháng` (R2): chọn một quy ước cho cả trang.
7. **Khoảng `10`** (stepper padding · gap `Table Item`) — **ngoài thang spacing** (thang có 8 · 12). Về `--s-2` hay `--s-3`?
8. **Chữ "Baika" / "BAIKA"** trong tiêu đề R6 — thống nhất viết hoa?
