# Spec giao diện — Figma → Source · Trang Remote Office

**Trạng thái:** `DRAFT` — chờ Thắng duyệt · Lập 29/09/2026
**Quyền:** file này quyết **bố cục · token · component · trạng thái · hành vi · responsive** (xem `SPEC-MASTER.md` §2). Lệch với Figma → **Figma thắng**, rồi sửa file này cùng commit.
**Nguồn:** Figma `YmcXg1lQqGVjQOFrVtdOgW`, frame `Remote office` **`913:4649`** (1280 × 8391, nằm trong section `Desktop` của page `UI`) — đọc trực tiếp ngày 01/10 **[xác minh]**.
**Tablet 768 + Mobile 375** — Thắng vẽ 01/10 cho **3 khối mới** (R2 · R4 · R6), mỗi khối một frame rời trong section `Tablet` `489:3046` / `Mobile` `450:6597` — bảng ở §7. Khối dùng lại theo responsive có sẵn của component.

> ⚠️ **Frame cũ `825:6535` không còn** — 30/09 Thắng nhân bản sang `913:4649`, mọi node ID đổi theo. Node `825:…` trong các bản trước của file này là ID cũ.
> ⚠️ **Đừng nhầm với `825:6072` `Remote Office / Desktop 1280`** — bản vẽ cũ theo khung spec v3 (có khối "Cam kết" riêng, tiêu đề «BAIKA làm thay tám nhóm việc»…), vẫn nằm trên page `UI`. **Không dựng theo nó.**

> Mở Figma: <https://www.figma.com/design/YmcXg1lQqGVjQOFrVtdOgW/Baika-Design-system?node-id=913-4649>
> Component ở page `Component` `660:2939` · trang ở page `UI` `191:812`. Node ID ghi trong file này **có thể đổi** nếu Thắng xoá rồi vẽ lại — trước khi dựng, mở đúng node để kiểm.

Tên token dưới đây là tên CSS trong `src/styles/tokens.css` (vd. `--s-20` = 80px). **Không có token mới.**

---

## 1. Khung trang — khối nào dùng lại, khối nào dựng mới

Trang dựng trên `ServicePageLayout` (có sẵn Header + Footer + màu trụ qua prop `pillar`).

| # | Frame Figma | Khối | Code | Ghi chú |
| --- | --- | --- | --- | --- |
| R1 | `Herro` `913:4650` | Hero | **Dùng lại** `HeroSection.astro` — `title="Remote Office"` · `tagline` · `lead` · `ctaLabel` · `ctaHref="#uoc-tinh"` | Giống hệt hero 7 trang (Milkyway · Planet · chữ cong · quầng sáng). Nút trong Figma để `State=Hover` — dựng theo `Normal` |
| R2 | `Solution` `923:4219` | Chi phí thật | ✅ **Đã dựng 01/10** — `CostSection.astro` · §3 + §7.1 | **Không** dùng `SolutionSection.astro` (đó là 3 thẻ vấn đề của 7 trang) |
| R3 | `Baika sẽ làm gì` `913:4679` | BAIKA sẽ làm gì | **Dùng lại** `StepsSection.astro` — 4 cụm × 2 mục | Component Figma `Detail Step Item` |
| R4 | `Ước tính khoản lệch` `913:4711` | Công cụ ước tính | ✅ **Đã dựng 01/10** — `EstimatorSection.astro` + `src/lib/uoc-tinh.ts` · §4 + §7.2 | Khối duy nhất trên site có tính toán |
| R5 | `Bạn sẽ nhận được gì` `913:4756` | Bạn sẽ nhận được gì | **Dùng lại** `BenefitsSection.astro` — đúng 6 ý | Figma: 6 × `Solution planet` `794:3117` |
| R6 | `Gói dịch vụ` `922:3801` ⚠️ *tên sai* | Bảng so sánh | ✅ **Đã dựng 01/10** — `CompareSection.astro` · §5 + §7.3 | |
| R7 | `Gói dịch vụ` `913:4823` | Các gói | **Dùng lại** `PricingSection.astro` — 3 gói, gói giữa `featured`, prop `note` | Figma: thẻ giữa `State=Focus` = thẻ nổi bật, giống trang CEO |
| R8 | `FAQ` `913:4830` | FAQ | **Dùng lại** `FaqSection.astro` — **5 mục**, mục 1 mở sẵn | Thắng chốt L12 ngày 30/09 |
| R9 | `Contact` `913:4838` | Liên hệ | **Dùng lại** `ContactSection.astro` + `api/contact.ts` — `submitLabel="Đặt lịch khảo sát"` | Danh sách `linhVuc` chờ chốt |

**Khác 7 trang về thứ tự:** không có khối "Bạn có đang gặp vấn đề này?" — R2 đứng vào chỗ đó.

**Màu trụ (`pillar`)** — ✅ chốt 29/09: bộ màu riêng. Figma: `Colors/Page/Remote Office/--dam` `#2E4716` (`VariableID:904:2`) · `--trung` `#58832C` (`904:3`) · `--nhat` `#B6D79B` (`904:4`); mode **"Remote Office"** (`904:0`) trong bộ biến `Trụ`.
**Khi dựng:** thêm đúng 3 biến này vào `tokens.css` (tên theo cách đặt của 7 trụ kia, vd. `--page-remote-office-dam`) · thêm giá trị `'remote-office'` vào prop `pillar` của `ServicePageLayout` + khối `[data-pillar='remote-office']` gán `--tru-dam/--tru-trung/--tru-nhat` như 7 trụ. `--tru-dam-0` = `--dam` trong suốt. **Không thêm giá trị nào khác.**

---

## 2. Component mới trong Figma

| Figma | Node | Page | Trục variant | Dùng ở |
| --- | --- | --- | --- | --- |
| `Data` | `834:7502` | `Component` | `State` = `Cost row` · `Total` × `Type` = `Desktop` (682 rộng) · `Mobile` (327 rộng) *(đổi 30/09)* | R2 (5 dòng) |
| `Table Item` | `842:7837` | `Component` *(đã chuyển 30/09)* | `Locate` = `Head·Body·Foot` × `Type` = `Default·Light` × `Device` = `Desktop/Tablet` (padding `--s-4`/`--s-8`) · `Mobile` (padding `--s-2`/`--s-4`) *(Thắng thêm 01/10 — L16)* | R4 (8 ô) · R6 (20 ô) |
| `Find Job` | `854:8113` | `Component` | `Property 1` = `Default` *(đóng)* · `Variant2` *(mở — 8 dòng `Check`)* | R4 |
| `Check` | `836:7698` | `Component` | `Property 1` = `Default` *(chưa tick)* · `Choose` *(đã tick)* | R4 — mỗi dòng trong `Find Job` |

**`Data`** — một dòng số liệu. Rộng theo cột chứa · ngang · padding `var(--s-4)` / `var(--s-2)` · canh hai đầu · viền dưới 1px `var(--gray-600)`.

| Variant | Nhãn | Giá trị | Nền |
| --- | --- | --- | --- |
| `Cost row` | `body` · `--gray-50` | `body-lg` · `--gray-50` | không |
| `Total` | `body` · `--gray-50` | **`H-3`** · `--gray-50` | `var(--opacity-white)` *(đổi từ `--opacity-light` 01/10 — #18)* |

**`Table Item`** — một ô bảng. 400 × 60 · padding `var(--s-4)` / `var(--s-8)` · gap 10 ⏸ *(ngoài thang — Master §7 #11)*.

| | `Default` | `Light` |
| --- | --- | --- |
| Nền | không | `var(--opacity-white)` |
| Viền | 1px `var(--gray-900)` bốn phía | không |

`Head` → chữ `H-3` · `Body` / `Foot` → chữ `body` · tất cả `--gray-50`. `Head` bo góc trên, `Foot` bo góc dưới — **đọc bán kính từ Figma**, không đoán.

**`Find Job`** — ô chọn nhóm công việc. 300 × 56 · nền `var(--opacity-white)` · padding `var(--s-4)` · chữ `H-3` + icon `chevron-down`. Mở: icon `chevron-up` + danh sách cách ô 10 ⏸ *(#11)* · **8 dòng `Check`** 300 × 48, sát nhau (gap 0).
**`Check`** — một dòng tick: padding `var(--s-3)` / `var(--s-4)` · nền `var(--opacity-white)` · chữ `H-3` bên trái · ô `Checkbox` `29:2685` 24 × 24 bên phải (component gốc 20, Figma kéo lên 24) · canh hai đầu. `Choose` = ô đã tick.
✅ #4 chốt 01/10: 8 dòng = 8 mục R3 · desktop vẽ sẵn 3 dòng `Choose`: Hành chính · Nhân sự · Chăm sóc khách hàng *(02/10 — theo logic ban đầu Spec v3, sếp chốt)*.

---

## 3. R2 — Chi phí thật (`923:4219`) *(Thắng vẽ lại 30/09 — đọc lại 01/10)*

```
<section>  1280 × 717 · dọc · gap var(--s-10) · padding var(--s-20) var(--s-6)
├─ <h2> H-1 · --gray-50
└─ hàng ngang 1232 · gap var(--s-10)
   ├─ TRÁI 596 · dọc · gap 140 ⏸ · padding var(--s-4) 0
   │   ├─ đoạn «Hợp đồng mang tên cộng tác…» (Cost Note)
   │   └─ cụm số lớn "23,5" + "%" · "Bảo hiểm" · "Công đoàn"
   └─ PHẢI 596 · dọc · gap var(--s-3)
       ├─ Data {Cost row} × 4
       ├─ Data {Total}   × 1
       └─ chú thích caption · --gray-50 «Số liệu minh hoạ…» (L1)
```

**Luật:**

1. Bảng chi phí là dữ liệu tĩnh → dựng bằng `<dl>` hoặc `<table>`, **không JS**.
2. Dòng `Total` luôn **cuối cùng**, chỉ **một** dòng `Total`. Chú thích L1 nằm **dưới** dòng `Total`.
3. ⚠️ Số lớn "23,5" trong Figma: cỡ **100px** (ngoài thang) và màu **`#FFFFFF` thô**; chữ "%" (24px, không style) · "Bảo hiểm" · "Công đoàn" (H-3) cũng `#FFFFFF` thô. Code: màu `var(--gray-50)`; **cỡ chữ chờ chốt** (Master §7 #10).
4. ⚠️ Khoảng cách dọc cột trái **140** — ngoài thang `--s-*`. Chờ chốt cùng #10.
5. ⚠️ 5 dòng `Data` trên frame **Desktop** đang dùng variant **`Type=Mobile`** (bị kéo giãn ra 596). Nếu Desktop phải dùng `Type=Desktop` thì đổi trong Figma — code dựng một dòng co giãn theo cột, không phân biệt hai variant.

**Code (01/10)** — `CostSection.astro`, bảng là `<dl>`, không JS:

- Cột trái cao bằng cột phải, `justify-content: space-between` → đoạn chữ ở đỉnh, cụm số ở đáy. Ra đúng hình mà **không cần số 140**. Dưới 768 (xếp dọc) dùng gap `--s-10` ⏸ TẠM.
- «23,5»: `--fs-display-1` (80) ⏸ TẠM — Master §7 #10. Cụm «% · Bảo hiểm · Công đoàn» cách nhau `calc(var(--s-1) / 2)` (= 2, nửa bậc nhỏ nhất).
- Cụm số đọc thành **một câu** cho trình đọc màn hình (`aria-label` «23,5% bảo hiểm và công đoàn»).
- Dòng `Total`: nền `--opacity-white` (✅ #18, 01/10). Nền cũ `--opacity-light` chỉ đạt ≈ 3.5–4.0 : 1; nền mới ≈ 6.7–9.8 : 1 — đạt AA.

## 4. R4 — Công cụ ước tính (`913:4711`)

```
<section id="uoc-tinh">  1280 × 986 · dọc · gap var(--s-20) · padding var(--s-24) var(--s-10)
├─ <h2> H-1
└─ hàng ngang
   ├─ TRÁI — đầu vào  532 × 208 · dọc · gap var(--s-1) · padding var(--s-4)
   │   3 dòng 500 × 56: nhãn (body, --gray-50) ↔ điều khiển 300 × 56
   │   ├─ Số người     → stepper  [ ‹ ]  2  [ › ]
   │   ├─ Lương        → stepper  [ ‹ ]  10.000.000 đ  [ › ]
   │   └─ Nhóm việc    → Find Job
   └─ PHẢI — kết quả  532 × 619 · dọc · gap var(--s-20) · padding var(--s-4)
       ├─ <table> 500 × 252 · gap var(--s-1) — 4 hàng × 2 ô Table Item 250 × 60
       │     Head / Body / Body / Foot
       ├─ đường kẻ  var(--opacity-light)
       ├─ khối kết quả · gap var(--s-3)
       │   ├─ nhãn       body       --gray-300
       │   ├─ số chính   display-2  --gray-50
       │   ├─ quy ra năm H-3
       │   └─ chú thích  caption    (luôn hiện)
       └─ Button 2 {Normal, Lg} 500 × 46
   (dưới bảng kết quả: chú thích công thức `924:4523` — L7, caption)
```

⚠️ Khung `Difference Estimate Container` `913:4713` **không dùng auto-layout** (cao cố định). Thêm chú thích L7 làm nút gửi bị đẩy ra ngoài khung → 30/09 Claude nới 615 → 677. Lần sau thêm chữ lại tràn — **nên chuyển khung sang auto-layout** (Figma §8 #11).

**Stepper** — ⚠️ vẽ tay trong Figma, **chưa phải component**: 300 × 56 · nền `var(--opacity-white)` · padding `var(--s-4)` / 10 ⏸ · gap 10 ⏸ · số chữ `H-3` · icon `chevron-left` / `chevron-right`.

**Code (01/10)** — `EstimatorSection.astro` (giao diện) + `src/lib/uoc-tinh.ts` (mọi con số, luật chọn gói, hàm tính):

| Phần | Code đang làm | Ghi chú |
| --- | --- | --- |
| Stepper | `<button>` 44 × 44 (`calc(var(--s-10) + var(--s-1))`) + `<output aria-live>` · 10 → `--s-3` ⏸ #11 | Vùng chạm ≥ 44 (WCAG). Hover / Active / Focus theo luật chung, Disabled `--gray-700` |
| Nhóm việc | `<details>` + `<summary>` (ô «N nhóm việc» + mũi tên) → danh sách `CheckItem.astro` (= Figma `Check`), mỗi dòng một `<input type="checkbox">` thật trong `<fieldset>` | ✅ #4. `<details>` là ô mở/đóng có sẵn của trình duyệt: chạy cả khi tắt JS, Enter/Space mở được, trình đọc màn hình đọc được "đang mở/đóng". Cả dòng là vùng bấm (48 cao). 8 tên lấy từ prop `nhomViec` — trang truyền dữ liệu R3 vào |
| Lương gõ tay | **Chưa làm** — chỉ nút `‹ ›` | Đề xuất 29/09, chưa ai duyệt |
| Nút gửi | `Button2` Lg, `href="#lien-he"`. Có JS: chặn đường dẫn → điền ước tính vào `#lien-he textarea[name="mota"]` → cuộn mượt tới `#lien-he` (tôn trọng `prefers-reduced-motion`) → focus ô `ten`. Không có JS: đường dẫn cuộn xuống bình thường | ✅ #6 (01/10). Chữ + luật thay đoạn cũ: `spec-noi-dung.md` §4.6 |
| Không JS | Server vẽ sẵn ca 1 + `<noscript>` «Bật JavaScript để tính theo số của bạn.» | |
| Mái vòm khối R5 | Khối R4 đặt `position: relative; z-index: 1` | Quầng `.nhan__cung` của R5 trồi lên 450px, che mờ nút gửi nếu thiếu dòng này — cùng cách `ServicesSection` đang làm |

Kiểm hành vi (02/10, Playwright — logic ban đầu): tick sẵn Hành chính · Nhân sự · CSKH → 18.400.000 / Vận hành · 1 nhóm → Khởi đầu, 23.400.000 · 4 nhóm → Trọn gói, 8.400.000 · 5 người → nút `›` Disabled, vẫn tính số · bỏ tick hết → «0 nhóm việc» + câu nhắc · tắt JS → ca 1.

### 4.1 Hành vi

| Luật | Nguồn |
| --- | --- |
| **Tính lại ngay** khi đổi bất kỳ đầu vào nào — không có nút "Tính" | Figma không có nút tính · spec cũ §13.7 |
| Công thức, tham số, luật chọn gói, ca kiểm thử → **`spec-noi-dung.md` §4.1–4.3** — không chép số vào đây | |
| **Số người**: số nguyên 1–5, mặc định 2. Nút `‹` **Disabled** ở 1, `›` **Disabled** ở 5. Số người chỉ đổi tiền tự tuyển, **không** đổi gói | ✅ Spec v3 §13.7 (sếp chốt 02/10) |
| **Lương**: mặc định 10.000.000. Nút `‹ ›` nhảy 500.000, Disabled ở 7.000.000 / 25.000.000. **Gõ tay được** → giữ đúng số khách gõ (làm tròn tới 1.000 đ), chỉ kẹp trong 7–25 triệu, kèm dòng nhắc nhỏ khi bị kẹp. Tự thêm dấu chấm ngăn nghìn khi gõ | Khoảng 7–25 tr: spec cũ §13.7 · cách gõ tay: **[đề xuất 29/09]** ⏸ |
| **Nhóm việc**: tick từng nhóm trong 8 nhóm R3, số nhóm = số ô tick → quyết định gói (§4.2 spec-noi-dung). Mặc định tick Hành chính · Nhân sự · Chăm sóc khách hàng (`THAM_SO.nhomMacDinh`). Mở danh sách → **đẩy** phần bên dưới xuống (≥ 768: nhãn «Nhóm công việc» vẫn ngang ô 56) | ✅ #4 (01/10) · Spec v3 (02/10) |
| Chạm giới hạn → nút `‹` hoặc `›` chuyển **`Disabled`** (`--gray-700`, giữ `opacity: 1`) | Luật chung `CLAUDE.md` |
| Chênh lệch ≤ 0 → **không hiện số âm**, chuyển trạng thái "Khối lượng nhỏ" | spec cũ §13.6–13.7 |
| **Mọi tham số ở MỘT chỗ trong code**; giao diện chỉ gọi hàm tính rồi vẽ theo `trangThai` — đổi luật chọn gói chỉ sửa một hàm | [đề xuất 29/09] |
| JS chỉ cho khối này — script nhỏ tại chỗ, **không** thêm framework UI | `CLAUDE.md` §6 |

### 4.2 Trạng thái khối kết quả *(Figma mới vẽ "Bình thường" — chữ các trạng thái ở `spec-noi-dung.md` §4.5)*

| Trạng thái | Khi nào | Hiện gì |
| --- | --- | --- |
| **Bình thường** | Chênh lệch > 0 | Như Figma: bảng 2 cột + số chênh lệch + theo năm + chú thích VAT |
| **Khối lượng nhỏ** | Chênh lệch ≤ 0 | Vẫn hiện hai cột chi phí, **không** hiện số tiết kiệm · câu "Khối lượng nhỏ" |
| **Chưa chọn nhóm việc** | Bỏ tick hết (0 nhóm) | Ô ghi «0 nhóm việc» · cột BAIKA «-» · số chính «—» · câu nhắc §4.5 *(đã dựng)* |
| **Không có JS** | Trình duyệt tắt JS | Bảng + kết quả **ca 1** (2 người · 10 triệu · 3 nhóm) + câu "Bật JavaScript…"; nút gửi vẫn dùng được |

### 4.3 Truy cập (accessibility)

1. Stepper bấm được bằng bàn phím; mỗi nút có `aria-label` ("Giảm số người", "Tăng số người"…); số hiện tại đọc được.
2. Stepper và `Find Job` có đủ **`Hover` · `Focus` · `Disabled`** theo luật chung (Focus = quầng sáng `--shadow-drop-inner`). Figma chưa vẽ — dựng theo luật chung, **không tự chế kiểu mới**.
3. Khối kết quả có `aria-live="polite"` — trình đọc màn hình đọc số mới.
4. Bảng kết quả là `<table>` thật; hàng đầu `<th scope="col">`.
5. Layer ẩn `Frame 2121454407` trong Figma (bản nháp "Bạn tiết kiệm · ≈ 220,8 triệu/ năm") — **bỏ qua**.

---

## 5. R6 — Bảng so sánh (`922:3801`) *(khung mới 30/09)*

```
<section>  1280 × 738 · dọc · gap var(--s-10) · padding var(--s-20) var(--s-10)
├─ <h2> H-1 «Tuyển thêm người hay giao cho BAIKA?»
├─ <table> 1200 · Figma dùng GRID 7 hàng × 3 cột bằng nhau · gap hàng var(--s-1) · gap cột 0
│  ├─ hàng đầu: ô góc trống | Head Default «Tuyển thêm nhân viên» | Head Light «BAIKA Remote Office»
│  └─ 6 hàng × 3 ô 400: Body Default (nhãn) | Body Default | Body Light
│     (ô cuối cột BAIKA ở hàng cuối = Foot Light)
└─ chú thích caption `924:4524` — L10, rộng 1200
```

**Luật:**

1. **Cột BAIKA luôn `Type=Light`**, cột tự tuyển `Default`. Không đảo.
2. **Cột BAIKA luôn bên PHẢI.**
3. `<table>` thật: cột nhãn `<th scope="row">`, hàng đầu `<th scope="col">`.
4. Hàng đầu Figma **thiếu ô góc** → code thêm một `<th>` rỗng ở góc; nhìn vẫn như Figma.
5. Hàng cao **tối thiểu** 60. Chữ dài → hàng cao lên; không cắt chữ, không thu cỡ. **[suy luận]**
6. Chỉ ô cuối cột BAIKA dùng `Foot`. Thêm/bớt hàng thì `Foot` luôn về hàng cuối.

---

## 6. Khối dùng lại — những điều cần nhớ

| Khối | Điều cần nhớ |
| --- | --- |
| `PricingSection` | ✅ Giá đặt **vào ô nhãn nhỏ** (`eyebrow`) có sẵn — Thắng chốt 29/09, không sửa thẻ gói. Dòng chú thích VAT: **thêm prop `note`** (30/09) — bỏ trống thì không hiện, nên 7 trang không đổi (đã so ảnh chụp từng pixel: giống hệt) |
| `FaqSection` | ✅ 5 câu (L12, 30/09). Component nhận mảng bất kỳ độ dài — đã chụp kiểm 01/10 |
| `ContactSection` | ✅ Thêm prop `submitLabel` (01/10) — trang này truyền «Đặt lịch khảo sát» (L13). Bỏ trống = «Đăng ký rà soát», 7 trang không đổi (đã so ảnh chụp từng pixel) |
| Mọi khối dùng lại | **Không sửa component chung để vừa trang này** mà không kiểm lại 7 trang dịch vụ + trang chủ (`quy-trinh-build.md` §4) |

---

## 7. Responsive — Figma đã vẽ 01/10 **[xác minh — đọc trực tiếp]**

| Khối | Desktop 1280 | Tablet 768 | Mobile 375 |
| --- | --- | --- | --- |
| R2 Chi phí | `923:4219` | `923:4311` | `923:4098` |
| R4 Ước tính | `913:4711` | `923:4248` | `922:3630` |
| R6 So sánh | `922:3801` | `933:3544` *(D1)* | `933:4613` *(D1)* |

⚠️ Hai frame **thừa** trên page `UI` (ngoài 3 section): `923:4127` (375) và `923:4015` (1200) — bản nháp R4, chữ cũ. **Không dựng theo** (§8 #14).

### 7.1 R2 Chi phí

Cả ba khổ **cùng một cấu trúc**: tiêu đề → `Cost Container` ngang, **có xuống dòng (wrap)**, gap `var(--s-10)` cả hai chiều.

| | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| Padding section | `--s-20` / `--s-6` | như desktop | như desktop |
| Cột trái · phải | 596 · 596 (2 cột) | 340 · 340 (2 cột) | **xếp dọc**, mỗi cột 327 |
| Dòng `Data` | `Type=Mobile` *(§8 #12)* | `Type=Mobile` | `Type=Mobile` |

→ Code: **một** bố cục flex-wrap, hai cột chia đôi, dưới 768 thì một cột. Không cần ba bản.
`Data` `Type=Mobile`: nhãn **bọc dòng** (rộng tối đa ~150), số **canh phải**. `Type=Desktop`: nhãn một dòng, số canh trái. Cả ba khổ đang dùng `Mobile` → code dựng theo `Mobile`.
→ Code: dưới 1280 nhãn và số **chia đôi dòng, cả hai được xuống dòng** (đúng `923:4109` / `923:4311` — «1.500.000 đ – / 2.500.000 đ» gãy hai dòng). Từ 1280 số giữ một dòng, nhãn nhận phần còn lại.
Đoạn «Hợp đồng mang tên…»: `body-lg`, riêng «01/07/2025» là `H-3` (nhấn mạnh).

### 7.2 R4 Ước tính

| | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| Padding section | `--s-24` / `--s-10` | `--s-24` / `--s-6` | như tablet |
| Gap tiêu đề → nội dung | `--s-20` | `--s-10` | `--s-10` |
| Đầu vào ↔ kết quả | **hai cột** ngang (532 · 532) | **xếp dọc** (đầu vào trên) | xếp dọc |
| Dòng đầu vào | nhãn 200 ↔ điều khiển 300 | nhãn **120** ↔ điều khiển **lấp đầy** (588) · gap `--s-3` | **nhãn TRÊN** điều khiển (327, lấp đầy) · gap `--s-1` · giữa các dòng `--s-3` *(Thắng sửa 01/10 — L15/L17)* |
| Bảng kết quả | 2 × 250 | 2 × 360 · `Table Item Device=Desktop/Tablet` | 2 × 164 · `Table Item Device=Mobile` (padding `--s-2`/`--s-4` → chữ có 132px) |
| Số chênh lệch | `display-2` | **`H-1`** | **`H-1`** |
| Gap khối kết quả → nút | `--s-20` | `--s-10` | `--s-10` |
| Nút gửi | 500, `Button 2 · Lg` | lấp đầy | lấp đầy |

✅ **Một bộ chữ cho mọi khổ** (L15–L19 chốt 01/10). Chữ đầy đủ vừa chỗ nhờ Thắng sửa bố cục mobile: nhãn đặt trên điều khiển (ô lương rộng 327 → «10.000.000 đ» 115px vừa) và ô bảng mobile giảm padding ngang còn `--s-4` (chỗ cho chữ 132px → «28.300.000 đ» 102px vừa).
⚠️ Ca số dài nhất cần thử khi dựng: «98.025.000 đ» và «≈1.057.500.000 đ/năm» (ca 5, §4.3) — kiểm ở 375 không tràn ô.

### 7.3 R6 So sánh — ✅ D1 = (a), Thắng chốt 01/10 · đã dựng

| | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| Padding section | `--s-20` / `--s-10` | `--s-20` / `--s-6` *(Figma — code dùng `--le-trang` = `--s-10` như các khối khác của trang, Master §7 #17)* | `--s-20` / `--s-6` |
| Bảng | **3 cột** bằng nhau: tiêu chí · tự tuyển · BAIKA | **3 cột** như desktop (D1) | **chú giải** ở đầu: ô viền «Tuyển thêm nhân viên» · ô sáng «BAIKA Remote Office» (`Body Default` · `Body Light`) → **mỗi tiêu chí một khối**: tên tiêu chí chữ **H-3 trần, không khung** → `Body Default` (bên tự tuyển) → `Foot Light` (bên BAIKA) · trong khối `--s-2` · giữa khối và chú giải `--s-4` *(Thắng chốt 01/10: bỏ chữ «Tự tuyển ·» / «BAIKA ·» lặp lại)* |
| Ô | `Table Item Device=Desktop/Tablet` · padding `--s-4`/`--s-6` · Figma cao cố định 66 *(Master §7 #16 — code để cao theo nội dung)* | như desktop | `Table Item Device=Mobile` · padding `--s-4`/`--s-4` |
| Ô cùng hàng | cao bằng nhau | cao bằng nhau | — |

**Code** (`src/components/CompareSection.astro`): **một** `<table>` cho cả 3 khổ. Dưới 768 các ô đổi `display` thành khối, hàng đầu (`thead`) thành dòng chú giải. Mỗi ô có chữ «Tự tuyển: » / «BAIKA: » **ẩn khỏi mắt** (`sr-only`) để trình đọc màn hình vẫn biết ô thuộc bên nào — viền / nền là thông tin chỉ mắt thấy (WCAG 1.4.1).
Hai ô viền sát nhau (tiêu chí · tự tuyển) bỏ viền trái ô sau → vạch 1px như Figma (viền "giữa" chồng nhau).

--- | --- | --- | --- |
| Padding section | `--s-20` / `--s-10` | `--s-20` / `--s-6` | như tablet |
| Bảng | GRID 7 × **3** (cột tiêu chí · tự tuyển · BAIKA) | GRID 7 × **2** — **bỏ cột tiêu chí** | **hai bảng xếp dọc**, mỗi bảng 7 × 1: bảng "Tự tuyển" rồi bảng "BAIKA" — **bỏ cột tiêu chí** |
| Ô | 400 × 60 | 360 × 60 | 327 × 60 |

**Đề xuất D1** *(Claude vẽ 01/10, chờ Thắng đánh giá)* — section `933:3543` trên page `UI`: Tablet `933:3544` giữ bảng **3 cột** như desktop (mỗi cột 240, ô cùng hàng cao bằng nhau) · Mobile `933:4613` **mỗi tiêu chí một khối**: `Head Default` (tên tiêu chí) → `Body Default` «Tự tuyển · …» → `Foot Light` «BAIKA · …», giữa khối `--s-3`, trong khối `--s-1`.

⛔ **Chưa dựng tablet/mobile** — chờ Thắng chốt `D1` (`SPEC-MASTER.md` §7 #15): bỏ cột tiêu chí thì người đọc thấy «7 ngày làm việc», «Không cần» mà không biết đang so cái gì; trên mobile còn phải cuộn qua 7 dòng rồi **nhớ** để so với 7 dòng bên dưới (trái nguyên tắc Nielsen "nhận ra thay vì phải nhớ"). Trình đọc màn hình cũng mất nhãn hàng.

---

## 8. Lỗi trong file Figma — Thắng sửa, code **không** tự bù

| # | Chỗ | Vấn đề | Đề nghị |
| --- | --- | --- | --- |
| 1 | ~~`Table Item` `842:7837` nằm ở page `UI`~~ | ✅ **Đã chuyển** sang page `Component` (30/09) | — |
| 2 | `Table Item` · `Find Job` | Tên trục `Property 1`; giá trị `Variant2` *(`Data` đã sửa 30/09: `State` × `Type`)* | `Row` · `State = Close·Open` |
| 3 | `Find Job` | Chỉ có đóng/mở, thiếu `Hover` · `Focus` *(dòng **đang chọn** ✅ đã có từ 01/10: `Check` `Choose`)* | Bổ sung Hover · Focus — code đang theo luật chung |
| 4 | Stepper R4 | Vẽ tay, không phải component, thiếu trạng thái | Tạo component `Stepper` |
| 5 | Nút CTA hero — **mọi trang** | Instance để `State=Hover` | Về `Normal` |
| 6 | Frame `922:3801` | Tên "Gói dịch vụ" trùng `913:4823` | → `So sánh` |
| 7 | Frame hero — **mọi trang** | Tên "Herro" | → `Hero` |
| 8 | ~~Frame Remote Office — mode màu trụ = "Đào tạo CEO"~~ | ✅ **Đã sửa 29/09** — chuyển sang mode "Remote Office"; 4 lớp gradient đang gắn thẳng vào biến màu CEO đã gắn lại vào biến `Trụ` | — |
| 10 | ~~Thẻ gói R7 — nhãn nhỏ ghi «Kiểm tra» · «Hệ thống hóa» · «Hỗ trợ»~~ | ✅ **Đã sửa 29/09** — thay bằng giá | — |
| 9 | R2 cột trái | `#FFFFFF` thô · cỡ chữ 100 · gap 140 | Về `--gray-50` · cỡ theo Master §7 #10 |
| 11 | `913:4713` khung công cụ ước tính | Không auto-layout, cao cố định — thêm chữ là tràn | Chuyển sang auto-layout dọc |
| 12 | R2 — 5 dòng `Data` | Frame Desktop dùng variant `Type=Mobile` | Đổi sang `Type=Desktop` nếu đó là ý định |
| 14 | `923:4127` (375) · `923:4015` (1200) | Hai bản nháp R4 nằm lẻ trên page `UI`, chữ cũ («Lương dự kiến», «10tr») | Xoá |
| 15 | Nhãn đầu vào R4 (cả 3 khổ) | Màu chữ **thô**, không gắn biến | Gắn `--gray-50` |
| 13 | ~~`825:6072` bản vẽ cũ cạnh bản đúng~~ ✅ Thắng đổi tên «Remote Office cũ / Desktop 1280» 01/10 | Bản vẽ cũ theo spec v3 vẫn nằm trên page `UI` cạnh bản đúng → agent dễ đọc nhầm | Xoá, hoặc đổi tên thêm `(CŨ — không dựng)` |

---

## 9. Nhật ký Figma — ghi mỗi lần Figma đổi *(luật đồng bộ — Master §4)*

| Ngày | Node | Đổi gì | Code đã theo? | Commit |
| --- | --- | --- | --- | --- |
| 02/10/2026 | `913:4733` `Find Job` desktop | **Sếp chốt logic ban đầu (Spec v3).** Claude đổi 3 dòng tick sẵn: Hành chính · Nhân sự · **Chăm sóc khách hàng** (bỏ tick «Kế toán – thuế») | Có — `THAM_SO.nhomMacDinh` | commit này |
| 01/10/2026 | `834:7503` · `913:5167` `Data` Total | **Thắng chốt #18 (b). Claude:** nền 2 variant Total `Colors/Opacity/Light` → `Colors/Opacity/White`. 3 instance R2 (`923:4235` · `923:4327` · `923:4114`) theo component, không có ghi đè — đã kiểm | Có — `CostSection.astro` | commit này |
| 01/10/2026 | `854:8114` `Find Job` Variant2 · `913:4733` | **Thắng:** mở sẵn danh sách tick ở desktop R4 (`Find Job` = Variant2, component `Check` `836:7698`). **Claude theo #4 chốt:** thêm dòng thứ 8 (`947:58`) · đổi 8 chữ mẫu «Hành chính - văn thư» thành 8 tên R3 · instance desktop tick 3 dòng đầu (`Choose`). Tablet `923:4266` / mobile `922:3648` vẫn vẽ trạng thái đóng — đúng, không cần thêm frame | Có — `CheckItem.astro` + `EstimatorSection` | commit này |
| 01/10/2026 | `933:4613` Mobile R6 | **Thắng chốt:** viền = tự tuyển, nền sáng = BAIKA, thêm chú giải đầu bảng. **Claude:** bỏ tiền tố «Tự tuyển · » / «BAIKA · » ở 12 ô · tên tiêu chí từ ô `Head Default` thành chữ H-3 trần (`936:5`…`936:25`) để không lẫn với "ô viền = tự tuyển" · thêm hàng `Chú giải` `936:6386` · khoảng trong khối 4 → 8 (`--s-2`), giữa khối 12 → 16 (`--s-4`) | Có | commit này |
| 01/10/2026 | R6 tablet/mobile | **D1 = (a)**: Claude thay `923:4293` → `933:3544` (Tablet) và `922:3962` → `933:4613` (Mobile), xoá section đề xuất `933:3543`, đổi tên frame «So sánh · Tablet/Mobile». Dời 2 frame xuống để hết chồng lên frame Ước tính (tablet y 4706, mobile y 4809). **Thắng** đổi padding dọc `Table Item Device=Mobile` 8 → 16 (`--s-4`) | Có — `CompareSection` | commit này |
| 01/10/2026 | R4 · R6 tablet/mobile | **Thắng:** `Table Item` thêm trục `Device` (Mobile padding `--s-2`/`--s-4`) · mobile R4 nhãn đặt trên điều khiển, bảng thành GRID. Đổi tên `825:6072` → «Remote Office cũ / Desktop 1280». **Claude áp L15–L20:** `923:4261` · `922:3643` «10.000.000 đ» · bảng tablet/mobile «14.150.000 đ» «28.300.000 đ» «9.900.000 đ» · `Find Job` «3 nhóm việc» · nút «Gửi yêu cầu theo ước tính này» · so sánh «Doanh nghiệp tự đóng, tăng theo mỗi người» · **desktop** `913:4739` «Giao cho BAIKA» → «Gói BAIKA» (L18 áp cả 3 khổ). Vẽ đề xuất D1 trong section `933:3543` | Chưa dựng | commit này |
| 01/10/2026 | Tablet · Mobile | **Thắng vẽ** R2 · R4 · R6 cho 768 + 375 (§7). **Claude áp các chữ đã chốt** sang 6 frame mới: «Lương mỗi người» `923:4259` · `922:3641` (L6) · tiêu đề «Tuyển thêm người hay giao cho BAIKA?» `923:4294` · `922:3963` (L8) · đầu cột «Tuyển thêm nhân viên» `923:4296` · `922:3965` (L9) · thêm chú thích công thức `928:65` · `928:66` (L7) · thêm chú thích so sánh `928:67` · `928:68` (L10). Chữ rút gọn khác (L15–L20) **chưa đụng**, chờ chốt | Chưa dựng | commit này |
| 01/10/2026 | `913:4649` | Đọc lại cả frame: R2 đã vẽ lại (`923:4219`, xem §3) · `Data` đổi trục `State` × `Type` · `Table Item` chuyển page `Component` | §1–§5 cập nhật | commit này |
| 30/09/2026 | `913:4649` | **Claude sửa theo L1–L13 Thắng chốt:** `913:4726` «Lương dự kiến» → «Lương mỗi người» (L6) · `922:3802` → «Tuyển thêm người hay giao cho BAIKA?» (L8) · đầu cột `I922:3804;842:7816` → «Tuyển thêm nhân viên» (L9) · nút form `I913:4868;26:2449` → «Đặt lịch khảo sát» (L13) · FAQ `913:4835–4837` viết lại + nhân bản mục 5 `924:3515` = 5 câu spec (L12) · thêm `924:4523` chú thích công thức dưới bảng ước tính (L7) · thêm `924:4524` chú thích dưới bảng so sánh (L10) · nới `913:4713` 615 → 677 cho nút gửi khỏi tràn | Có (FAQ, nút form) · R4/R6 chưa dựng | commit này |
| 30/09/2026 | `913:4649` | **Thắng:** nhân bản frame `825:6535` → `913:4649` (mọi node ID đổi) · thêm chú thích L1 «Số liệu minh hoạ cho một vị trí lương 10 triệu, con số thực tế tuỳ từng doanh nghiệp.» dưới bảng chi phí. Cùng ngày, R2 thành frame mới `923:4219` và bảng so sánh `922:3801` dùng GRID *(thấy khi đọc 01/10 — không rõ ai sửa, Thắng xác nhận)* | — | commit này |
| 29/09/2026 | `825:6535` | Đọc lần đầu để lập spec *(frame này không còn)* | — | — |
| 30/09/2026 | — | **Dựng lần 1** trên nhánh `remote-office`: `src/pages/remote-office.astro` — R1 · R3 · R5 · R7 · R8 (chỉ câu 1 — đủ 5 câu ở lượt 01/10) · R9. R2 · R4 · R6 chưa dựng. Thêm 3 biến `--page-remote-office-*` vào `tokens.css` (đúng giá trị Figma `904:2–4`) · `pillar='remote-office'` · prop `noindex` (BaseLayout, ServicePageLayout) · prop `note` (PricingSection) | Có | nhánh `remote-office` |
| 29/09/2026 | Bộ biến | Tạo `Colors/Page/Remote Office/--dam · --trung · --nhat` (`904:2–4`) + mode "Remote Office" (`904:0`) trong bộ `Trụ` | Chưa dựng trang | commit spec này |
| 29/09/2026 | `842:7714` | Nhãn nhỏ 3 thẻ gói → «4.900.000 đ/tháng» · «9.900.000 đ/tháng» · «19.900.000 đ/tháng». Thêm text `Chú thích giá` `905:3394` dưới lưới gói — style `caption`, màu `--gray-50`. Section cao 685 → 742 (frame tự giãn, auto-layout) | Chưa dựng trang | commit spec này |
| 29/09/2026 | `825:6535` | Chuyển mode `Trụ` "Đào tạo CEO" → "Remote Office". Gắn lại 4 gradient (`825:6591` · `825:6593` · `825:6636` · `825:6644`) từ biến màu CEO sang `--tru-trung` / `--tru-nhat` | Chưa dựng trang | commit spec này |
