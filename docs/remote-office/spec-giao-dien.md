# Spec giao diện — Figma → Source · Trang Remote Office

**Trạng thái:** `DRAFT` — chờ Thắng duyệt · Lập 29/09/2026
**Quyền:** file này quyết **bố cục · token · component · trạng thái · hành vi · responsive** (xem `SPEC-MASTER.md` §2). Lệch với Figma → **Figma thắng**, rồi sửa file này cùng commit.
**Nguồn:** Figma `YmcXg1lQqGVjQOFrVtdOgW`, frame `Remote office` `825:6535` (1280 × 7985, **chỉ Desktop**) — đọc trực tiếp ngày 29/09 **[xác minh]**.

> Mở Figma: <https://www.figma.com/design/YmcXg1lQqGVjQOFrVtdOgW/Baika-Design-system?node-id=825-6535>
> Component ở page `Component` `660:2939` · trang ở page `UI` `191:812`. Node ID ghi trong file này **có thể đổi** nếu Thắng xoá rồi vẽ lại — trước khi dựng, mở đúng node để kiểm.

Tên token dưới đây là tên CSS trong `src/styles/tokens.css` (vd. `--s-20` = 80px). **Không có token mới.**

---

## 1. Khung trang — khối nào dùng lại, khối nào dựng mới

Trang dựng trên `ServicePageLayout` (có sẵn Header + Footer + màu trụ qua prop `pillar`).

| # | Frame Figma | Khối | Code | Ghi chú |
| --- | --- | --- | --- | --- |
| R1 | `Herro` `825:6536` | Hero | **Dùng lại** `HeroSection.astro` — `title="Remote Office"` · `tagline` · `lead` · `ctaLabel` · `ctaHref="#uoc-tinh"` | Giống hệt hero 7 trang (Milkyway · Planet · chữ cong · quầng sáng). Nút trong Figma để `State=Hover` — dựng theo `Normal` |
| R2 | `Solution` `825:6548` | Chi phí thật | 🆕 **Dựng mới** — §3 | **Không** dùng `SolutionSection.astro` (đó là 3 thẻ vấn đề của 7 trang) |
| R3 | `Baika sẽ làm gì` `825:6556` | BAIKA sẽ làm gì | **Dùng lại** `StepsSection.astro` — 4 cụm × 2 mục | Component Figma `Detail Step Item` |
| R4 | `Ước tính khoản lệch` `834:7508` | Công cụ ước tính | 🆕 **Dựng mới** — §4 | Khối duy nhất trên site có tính toán |
| R5 | `Bạn sẽ nhận được gì` `825:6592` | Bạn sẽ nhận được gì | **Dùng lại** `BenefitsSection.astro` — đúng 6 ý | Figma: 6 × `Solution planet` `794:3117` |
| R6 | `Gói dịch vụ` `825:6629` ⚠️ *tên sai* | Bảng so sánh | 🆕 **Dựng mới** — §5 | |
| R7 | `Gói dịch vụ` `842:7714` | Các gói | **Dùng lại** `PricingSection.astro` — 3 gói, gói giữa `featured` | Figma: thẻ giữa `State=Focus` = thẻ nổi bật, giống trang CEO |
| R8 | `FAQ` `825:6635` | FAQ | **Dùng lại** `FaqSection.astro` — 4 mục, mục 1 mở sẵn | |
| R9 | `Contact` `825:6643` | Liên hệ | **Dùng lại** `ContactSection.astro` + `api/contact.ts` | Danh sách `linhVuc` chờ chốt |

**Khác 7 trang về thứ tự:** không có khối "Bạn có đang gặp vấn đề này?" — R2 đứng vào chỗ đó.

**Màu trụ (`pillar`)** — ✅ chốt 29/09: bộ màu riêng. Figma: `Colors/Page/Remote Office/--dam` `#2E4716` (`VariableID:904:2`) · `--trung` `#58832C` (`904:3`) · `--nhat` `#B6D79B` (`904:4`); mode **"Remote Office"** (`904:0`) trong bộ biến `Trụ`.
**Khi dựng:** thêm đúng 3 biến này vào `tokens.css` (tên theo cách đặt của 7 trụ kia, vd. `--page-remote-office-dam`) · thêm giá trị `'remote-office'` vào prop `pillar` của `ServicePageLayout` + khối `[data-pillar='remote-office']` gán `--tru-dam/--tru-trung/--tru-nhat` như 7 trụ. `--tru-dam-0` = `--dam` trong suốt. **Không thêm giá trị nào khác.**

---

## 2. Component mới trong Figma

| Figma | Node | Page | Trục variant | Dùng ở |
| --- | --- | --- | --- | --- |
| `Data` | `834:7502` | `Component` | `Property 1` = `Cost row` · `Total` | R2 (5 dòng) |
| `Table Item` | `842:7837` | ⚠️ **`UI`** *(nên ở `Component`)* | `Property 1` = `Head·Body·Foot` × `Type` = `Default·Light` | R4 (8 ô) · R6 (20 ô) |
| `Find Job` | `854:8113` | `Component` | `Property 1` = `Default` *(đóng)* · `Variant2` *(mở)* | R4 |

**`Data`** — một dòng số liệu. Rộng 700 · ngang · padding `var(--s-4)` / `var(--s-2)` · canh hai đầu · viền dưới 1px `var(--gray-600)`.

| Variant | Nhãn | Giá trị | Nền |
| --- | --- | --- | --- |
| `Cost row` | `body` · `--gray-50` | `body-lg` · `--gray-50` | không |
| `Total` | `body` · `--gray-50` | **`H-3`** · `--gray-50` | `var(--opacity-light)` |

**`Table Item`** — một ô bảng. 400 × 60 · padding `var(--s-4)` / `var(--s-8)` · gap 10 ⏸ *(ngoài thang — Master §7 #11)*.

| | `Default` | `Light` |
| --- | --- | --- |
| Nền | không | `var(--opacity-white)` |
| Viền | 1px `var(--gray-900)` bốn phía | không |

`Head` → chữ `H-3` · `Body` / `Foot` → chữ `body` · tất cả `--gray-50`. `Head` bo góc trên, `Foot` bo góc dưới — **đọc bán kính từ Figma**, không đoán.

**`Find Job`** — ô chọn nhóm công việc. 300 × 56 · nền `var(--opacity-white)` · padding `var(--s-4)` · chữ `H-3` + icon `chevron-down`. Mở: icon `chevron-up` + danh sách 300 × 336, mỗi dòng 300 × 48 · padding `var(--s-3)` / `var(--s-4)` · nền `var(--opacity-white)`.
⚠️ Danh sách mở ra trong Figma là **7 dòng chữ mẫu giống nhau** — nội dung và kiểu chọn chờ chốt (Master §7 #4).

---

## 3. R2 — Chi phí thật (`825:6548`)

```
<section>  1280 × 602 · dọc · gap var(--s-20) · padding var(--s-20) var(--s-10)
├─ <h2> H-1 · --gray-50
└─ hàng ngang · gap var(--s-10)
   ├─ TRÁI 560 × 325
   │   ├─ số lớn "23,5" + "%" · "Bảo hiểm" · "Công đoàn"
   │   └─ đoạn giải thích (rộng 470)
   └─ PHẢI 600 × 325 · dọc · gap var(--s-3) · CANH ĐÁY
       ├─ Data {Cost row} × 4
       └─ Data {Total}   × 1
```

**Luật:**

1. Bảng chi phí là dữ liệu tĩnh → dựng bằng `<dl>` hoặc `<table>`, **không JS**.
2. Dòng `Total` luôn **cuối cùng**, chỉ **một** dòng `Total`.
3. Cột phải canh đáy để dòng `Total` thẳng hàng với đáy cột trái.
4. ⚠️ Số lớn "23,5" trong Figma: cỡ **100px** (ngoài thang) và màu **`#FFFFFF` thô**; chữ "%", "Bảo hiểm", "Công đoàn" cũng `#FFFFFF` thô. Code: màu `var(--gray-50)`; **cỡ chữ chờ chốt** (Master §7 #10). Cả cột trái còn đang lệch nội dung (`spec-noi-dung.md` `L2`).

---

## 4. R4 — Công cụ ước tính (`834:7508`)

```
<section id="uoc-tinh">  1280 × 924 · dọc · gap var(--s-20) · padding var(--s-24) var(--s-10)
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
```

**Stepper** — ⚠️ vẽ tay trong Figma, **chưa phải component**: 300 × 56 · nền `var(--opacity-white)` · padding `var(--s-4)` / 10 ⏸ · gap 10 ⏸ · số chữ `H-3` · icon `chevron-left` / `chevron-right`.

### 4.1 Hành vi

| Luật | Nguồn |
| --- | --- |
| **Tính lại ngay** khi đổi bất kỳ đầu vào nào — không có nút "Tính" | Figma không có nút tính · spec cũ §13.7 |
| Công thức, tham số, luật chọn gói, ca kiểm thử → **`spec-noi-dung.md` §4.1–4.3** — không chép số vào đây | |
| **Số người**: số nguyên, mặc định 2. Dưới 1 → đưa về 1. Nút `‹` **Disabled** ở 1. Giới hạn trên: spec cũ **5** · đề xuất mới **từ 5 → trạng thái "Báo giá riêng"** | ⏸ Master §7 #14 |
| **Lương**: mặc định 10.000.000. Nút `‹ ›` nhảy 500.000, Disabled ở 7.000.000 / 25.000.000. **Gõ tay được** → giữ đúng số khách gõ (làm tròn tới 1.000 đ), chỉ kẹp trong 7–25 triệu, kèm dòng nhắc nhỏ khi bị kẹp. Tự thêm dấu chấm ngăn nghìn khi gõ | Khoảng 7–25 tr: spec cũ §13.7 · cách gõ tay: **[đề xuất 29/09]** ⏸ |
| **Nhóm việc**: `Find Job` — kiểu chọn chờ chốt | ⏸ Master §7 #4 |
| Chạm giới hạn → nút `‹` hoặc `›` chuyển **`Disabled`** (`--gray-700`, giữ `opacity: 1`) | Luật chung `CLAUDE.md` |
| Chênh lệch ≤ 0 → **không hiện số âm**, chuyển trạng thái "Khối lượng nhỏ" | spec cũ §13.6–13.7 |
| **Mọi tham số ở MỘT chỗ trong code**; giao diện chỉ gọi hàm tính rồi vẽ theo `trangThai` — đổi luật chọn gói chỉ sửa một hàm | [đề xuất 29/09] |
| JS chỉ cho khối này — script nhỏ tại chỗ, **không** thêm framework UI | `CLAUDE.md` §6 |

### 4.2 Trạng thái khối kết quả *(Figma mới vẽ "Bình thường" — chữ các trạng thái ở `spec-noi-dung.md` §4.5)*

| Trạng thái | Khi nào | Hiện gì |
| --- | --- | --- |
| **Bình thường** | Chênh lệch > 0 | Như Figma: bảng 2 cột + số chênh lệch + theo năm + chú thích VAT |
| **Gói bị nâng** ⏸ *đi cùng luật mới* | Gói theo cả người + nhóm lớn hơn gói chỉ theo số người | Như trên + dòng phụ dưới tên gói |
| **Khối lượng nhỏ** | Chênh lệch ≤ 0 | Vẫn hiện hai cột chi phí, **không** hiện số tiết kiệm · câu "Khối lượng nhỏ" |
| **Báo giá riêng** ⏸ *đi cùng luật mới* | Từ 5 người hoặc từ 6 nhóm | Cột tự tuyển vẫn hiện số · cột BAIKA ghi "Báo giá riêng sau khảo sát" · không hiện chênh lệch · nút gửi vẫn bấm được |
| **Chưa chọn nhóm việc** | 0 nhóm *(nếu ô cho phép — Master §7 #4)* | Số chính thay bằng dấu gạch · câu nhắc |
| **Không có JS** | Trình duyệt tắt JS | Bảng + kết quả **ca 1** (2 người · 10 triệu · 3 nhóm) + câu "Bật JavaScript…"; nút gửi vẫn dùng được |

### 4.3 Truy cập (accessibility)

1. Stepper bấm được bằng bàn phím; mỗi nút có `aria-label` ("Giảm số người", "Tăng số người"…); số hiện tại đọc được.
2. Stepper và `Find Job` có đủ **`Hover` · `Focus` · `Disabled`** theo luật chung (Focus = quầng sáng `--shadow-drop-inner`). Figma chưa vẽ — dựng theo luật chung, **không tự chế kiểu mới**.
3. Khối kết quả có `aria-live="polite"` — trình đọc màn hình đọc số mới.
4. Bảng kết quả là `<table>` thật; hàng đầu `<th scope="col">`.
5. Layer ẩn `Frame 2121454407` trong Figma (bản nháp "Bạn tiết kiệm · ≈ 220,8 triệu/ năm") — **bỏ qua**.

---

## 5. R6 — Bảng so sánh (`825:6629`)

```
<section>  1280 × 681 · dọc · gap var(--s-10) · padding var(--s-20) var(--s-10)
├─ <h2> H-1
└─ <table> 1200 · gap giữa hàng var(--s-1)
   ├─ hàng đầu 1200 × 60 · 2 ô canh PHẢI: Head Default | Head Light
   └─ 6 hàng × 3 ô 400: Body Default (nhãn) | Body Default | Body Light
      (ô cuối cột BAIKA ở hàng cuối = Foot Light)
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
| `PricingSection` | ✅ Giá đặt **vào ô nhãn nhỏ** (`eyebrow`) có sẵn — Thắng chốt 29/09. **Không sửa component**, chỉ truyền giá qua `eyebrow` → 7 trang không bị ảnh hưởng. Dòng chú thích VAT (nếu chốt) đặt ngoài thẻ, dưới lưới gói |
| `FaqSection` | Component ghi "đúng 4 câu". Nếu Thắng chốt thêm câu (Master §7 #7) → kiểm component chịu được 5+ câu |
| `ContactSection` | Nút form đang dùng chung chữ cho mọi trang. Đổi riêng cho trang này (Master §7 #12) → thêm prop, **không** sửa chữ chung |
| Mọi khối dùng lại | **Không sửa component chung để vừa trang này** mà không kiểm lại 7 trang dịch vụ + trang chủ (`quy-trinh-build.md` §4) |

---

## 7. Responsive — Figma chưa vẽ **[suy luận — CHƯA DUYỆT, không dựng khi Thắng chưa chốt]**

Theo luật hệ: component **đổi dạng**, không co lại.

| Khối | 768 | 375 |
| --- | --- | --- |
| R2 Chi phí | Hai cột → xếp dọc: cột trái trên, bảng dưới | Như 768 · `Data` rộng 100% |
| R4 Ước tính | Đầu vào trên, kết quả dưới | Stepper + `Find Job` rộng 100%, nhãn nằm **trên** điều khiển |
| R6 So sánh | Giữ bảng 3 cột | **Đổi dạng:** mỗi tiêu chí thành một khối — nhãn trên, 2 dòng "Tự tuyển" / "BAIKA". **Không** cuộn ngang |
| Khối dùng lại | Tự theo responsive của component có sẵn | Như 768 |

---

## 8. Lỗi trong file Figma — Thắng sửa, code **không** tự bù

| # | Chỗ | Vấn đề | Đề nghị |
| --- | --- | --- | --- |
| 1 | `Table Item` `842:7837` | Nằm ở page `UI`, trái luật "component chỉ ở page `Component`" | Chuyển page — ID không đổi |
| 2 | `Data` · `Table Item` · `Find Job` | Tên trục `Property 1`; giá trị `Variant2` | `Type` · `Row` · `State = Close·Open` |
| 3 | `Find Job` | Chỉ có đóng/mở, thiếu `Hover` · `Focus` · dòng **đang chọn** | Bổ sung |
| 4 | Stepper R4 | Vẽ tay, không phải component, thiếu trạng thái | Tạo component `Stepper` |
| 5 | Nút CTA hero — **mọi trang** | Instance để `State=Hover` | Về `Normal` |
| 6 | Frame `825:6629` | Tên "Gói dịch vụ" trùng `842:7714` | → `So sánh` |
| 7 | Frame hero — **mọi trang** | Tên "Herro" | → `Hero` |
| 8 | ~~Frame `825:6535` — mode màu trụ = "Đào tạo CEO"~~ | ✅ **Đã sửa 29/09** — chuyển sang mode "Remote Office"; 4 lớp gradient đang gắn thẳng vào biến màu CEO đã gắn lại vào biến `Trụ` | — |
| 10 | ~~Thẻ gói R7 — nhãn nhỏ ghi «Kiểm tra» · «Hệ thống hóa» · «Hỗ trợ»~~ | ✅ **Đã sửa 29/09** — thay bằng giá | — |
| 9 | R2 cột trái | `#FFFFFF` thô · cỡ chữ 100 | Về `--gray-50` · cỡ theo Master §7 #10 |

---

## 9. Nhật ký Figma — ghi mỗi lần Figma đổi *(luật đồng bộ — Master §4)*

| Ngày | Node | Đổi gì | Code đã theo? | Commit |
| --- | --- | --- | --- | --- |
| 29/09/2026 | `825:6535` | Đọc lần đầu để lập spec | — | — |
| 29/09/2026 | Bộ biến | Tạo `Colors/Page/Remote Office/--dam · --trung · --nhat` (`904:2–4`) + mode "Remote Office" (`904:0`) trong bộ `Trụ` | Chưa dựng trang | commit spec này |
| 29/09/2026 | `842:7714` | Nhãn nhỏ 3 thẻ gói → «4.900.000 đ/tháng» · «9.900.000 đ/tháng» · «19.900.000 đ/tháng». Thêm text `Chú thích giá` `905:3394` dưới lưới gói — style `caption`, màu `--gray-50`. Section cao 685 → 742 (frame tự giãn, auto-layout) | Chưa dựng trang | commit spec này |
| 29/09/2026 | `825:6535` | Chuyển mode `Trụ` "Đào tạo CEO" → "Remote Office". Gắn lại 4 gradient (`825:6591` · `825:6593` · `825:6636` · `825:6644`) từ biến màu CEO sang `--tru-trung` / `--tru-nhat` | Chưa dựng trang | commit spec này |
