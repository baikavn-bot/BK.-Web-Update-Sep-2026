<!-- CHÉP NGUYÊN VĂN — đầu file do agent thêm 03/10/2026, phần dưới đường kẻ giữ y bản gốc. md5 bản gốc: 11dda5193cdfc6ade033eef6f6608e91 -->

> 📦 **Bản chép nguyên văn** từ project Claude «BaiKa.vn», file `claude/website-agent-decisions-2.md` (bản lưu 25/09/2026). Chuyển vào repo ngày 03/10/2026 — **từ nay bản này là bản chính.**
> Sửa **ở đây**, không sửa bản trong project Claude nữa.
> Khi file này lệch với nguồn khác, thứ tự tin: **Figma** → `CLAUDE.md` / `TRANG-THAI.md` / `docs/<trang>/` → file này.
> Đường dẫn `claude/<tên>.md` bên dưới là file trong project Claude. File nào đã chuyển thì nay nằm ở `docs/_chung/<tên>.md` — tra bảng ở `docs/README.md`.
>
> **⚠️ Chỗ đã lỗi thời — đọc trước khi tin nội dung bên dưới:**
> - Quyết định **sau 25/09** không nằm trong file này. Remote Office: `docs/remote-office/SPEC-MASTER.md` §7 + §9. `DEC-102` (dọn nợ + trang CEO) vẫn ở project Claude: `claude/dec-102-don-no-va-trang-ceo.md`.
> - Lịch sử theo ngày của mọi thay đổi: `CHANGELOG.md`.

---

# DECISION LOG — Baika Website · QUYỂN 2 (từ DEC-093)

> 📌 **Đây là phần tiếp của `claude/website-agent-decisions.md`.**
> Quyển 1 chứa **DEC-001 → DEC-092** và các mục `VD-001 → VD-011`.
> Tách quyển vì quyển 1 đã hơn 100 KB — mỗi lần đọc tốn rất nhiều, và
> phần lớn nội dung là lịch sử đã đóng.
>
> **Luật tra cứu:** tìm một quyết định thì đọc quyển 2 trước *(mới nhất,
> nhẹ nhất)*; không thấy mới mở quyển 1. Mọi DEC từ **093 trở đi** nằm ở đây.
>
> *Quyển 2 mở ngày 25/09/2026, đầu Giai đoạn 2 — khung trang + 6 section.*

---

## DEC-093 · Khung trang 7 trang dịch vụ + quy tắc responsive

*25/09/2026 · Luồng E · Giai đoạn 2 · **[đã xác minh — đo cả 3 breakpoint]***

Nguồn: trang `Tư vấn doanh nghiệp` — trang **duy nhất** được vẽ đủ ba khổ màn.
Desktop `382:8828` (1280×6727) · Tablet `480:2033` (768×7626) · Mobile `450:5539` (375×10176).

⚠️ Trang tablet trong Figma **tên là `Frame`**, không phải "Tư vấn doanh nghiệp" — tìm theo tên sẽ trượt.

### Bốn quy tắc responsive — đã xác minh

**1. Lề hai bên đổi ĐÚNG MỘT LẦN, ở mốc 768**

| | < 768 | ≥ 768 |
| --- | --- | --- |
| Lề | **24** (`--s-6`) | **40** (`--s-10`) |

Tablet và desktop **giống hệt nhau**. Đặt thành biến `--le-trang` trong `ServicePageLayout`, mọi section dùng chung.

**2. 🔑 Padding TRÊN–DƯỚI của section KHÔNG đổi theo khổ màn**

Đo cả ba khổ đều ra cùng một bộ số: Solution **80** · Baika sẽ làm gì **96** · 6 dịch vụ **0** · Gói dịch vụ **80** · FAQ **96** · Contact **96**.

→ Trang co giãn bằng cách **đổi cách xếp**, không phải bằng cách bóp khoảng cách dọc. Đây là điều dễ làm sai nhất khi dựng section.

**3. FAQ và Contact đổi trục ở mốc 1280**

`≥ 1280` xếp ngang (hai cột) · `< 1280` xếp dọc. Tablet 768 đã dọc rồi. Khớp với cách trang Liên hệ đã dựng (`@media (min-width: 1280px)`).

**4. KHÔNG giới hạn bề ngang** — section trải hết màn. Thắng đã chốt ở trang Liên hệ 25/09: *"Contact Section: Fill Page"*.

### Tổng chiều cao — khớp chính xác

| | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| Cộng 9 section | 6727 | 7626 | 10176 |
| Figma ghi | 6727 ✓ | 7626 ✓ | 10176 ✓ |

### Hai dải màn KHÔNG có bản vẽ — [suy luận, cần duyệt]

Style guide khai báo 5 dải: `0–479 · 480–767 · 768–1023 · 1024–1279 · 1280+`. **Đã mở cả 5 khung — chúng RỖNG**, chỉ đặt tên dải chứ không có số đo. Figma chỉ vẽ trang ở 375, 768, 1280.

→ `480–767` cho chạy theo mobile · `1024–1279` cho chạy theo tablet. Khớp cách trang Liên hệ đã dựng nên ít rủi ro, nhưng vẫn là **suy luận**.

### ⚠️ Mâu thuẫn trong chính file Figma

`tokens.css` có `--grid-margin` = **16 / 24 / 32** (sinh từ *grid style*). Các trang thật dùng **24 / 40 / 40** (đo từ padding khung trang). Hai chỗ lệch nhau.

**Đã chọn: số đo từ trang thật** — vì đó là thứ người xem thấy, và trang Liên hệ đã dựng theo số đó.

🔴 **Hệ quả cần nhớ:** class `.container` trong `global.css` đang dùng `--grid-margin`, nên nó **không khớp trang nào cả**. Đừng dùng `.container` cho trang dịch vụ.

### Bộ màu 7 trụ — đã nối lại

`BaseLayout` đặt `data-pillar` lên thẻ `<html>` từ trước, nhưng **không có CSS nào đọc nó**. Đã thêm bản đồ trong `ServicePageLayout`: `[data-pillar='...']` → `--tru-dam` / `--tru-trung` / `--tru-nhat`.

→ Mọi section viết `var(--tru-trung)`. Đổi prop `pillar` là toàn bộ màu trang tự đổi. **Đây là thứ làm "dựng một lần, dùng bảy lần" chạy được.** Không section nào được viết thẳng tên màu của một trụ cụ thể.

---

## DEC-094 · 🔴 BÀI HỌC: lớp tô trong Figma có ĐỘ ĐỤC RIÊNG, tách rời alpha của màu

*25/09/2026 · Luồng E · **[lỗi đã mắc, đã sửa, đã quét lại toàn bộ]***

Dựng vòng cung hành tinh ở Hero, em đọc lớp tô là `#FFFFFF` alpha 1 → alpha 0 và áp nguyên vào CSS. Chụp ảnh ra thì **vòng cung sáng loá, che mất nửa Hero**.

Nguyên nhân: lớp tô đó có thuộc tính **`opacity: 0.15` của riêng nó**, nằm tách rời khỏi alpha trong mã màu. Bộ đọc thuộc tính em tự viết chỉ lấy `opacity` cho màu đặc (SOLID), **bỏ sót với gradient**.

### Đã quét lại cả 10 component đã dựng — 22 chỗ có độ đục < 1

| Chỗ | Kết quả |
| --- | --- |
| `FAQ Items` — nền `#D5D5D5` @ 25% / 50% | ✅ **Đúng sẵn** — dùng token `--opacity-gray` / `--opacity-light`, alpha nằm trong token (tokens.css mục 6) |
| `Các gói` — 3 vệt sáng @ 75% | ✅ **Đúng sẵn** — đã bắt được `fillOp: 0.75` |
| `Footer` — Planet Ellipse 3/4 @ 75% | 🟡 Không ảnh hưởng: hoạ tiết này vốn là bản dựng lại bằng CSS, không phải sao chép từng pixel (DEC-092) |
| `Hero` — vòng cung @ 15% | 🔴 **Sai, đã sửa** |

→ **21/22 chỗ đã đúng.** Chỉ Hero sai.

### Luật cho các phiên sau

> Khi đọc màu từ Figma, **luôn lấy cả ba thứ**: mã màu · alpha trong màu · **`opacity` của lớp tô**. Thiếu cái thứ ba là sai màu mà build vẫn sạch, test vẫn qua — chỉ chụp ảnh đối chiếu mới thấy.

Câu lệnh quét nhanh toàn bộ một component:

```js
n.fills.forEach(f => { if (f.opacity < 1) console.log(n.name, f.opacity); });
```

**Bài học rộng hơn:** build sạch 0 lỗi **không chứng minh** màu đúng. Chỉ có chụp ảnh và so bằng mắt mới bắt được loại lỗi này.

---

## DEC-095 · Hero — dựng xong, chữ cong bằng SVG, còn thiếu ảnh nền sao

*25/09/2026 · Luồng E · Giai đoạn 2*

### Ba con số KHÔNG đổi ở cả ba khổ màn

- Chiều cao Hero **680**
- Chữ cong: khung **1382×639** ở **y=240**, luôn căn giữa ngang
- Vòng cung: **1920×727** ở **y=344**, cũng luôn căn giữa

→ Hoạ tiết **không co theo màn**. Màn hẹp thì thấy ít hơn, chứ hình không bị bóp méo. Đây là điều dễ làm sai nhất ở section này.

### Cỡ chữ cong — một công thức khớp cả ba

1280 → 80 · 768 → 48 · 375 → 24. Chia cho bề ngang màn: **6.25vw · 6.25vw · 6.4vw** → `min(6.25vw, 80px)` khớp cả ba. Đo bằng trình duyệt thật: **80 / 48 / 23.4**.

### Chữ cong dựng bằng SVG `<textPath>`, KHÔNG xuất ảnh

Đây là `<h1>` của trang — phải đọc được, chọn được, Google phải đọc được. Xuất ảnh là mất hết.

CSS thuần không uốn được chữ theo đường cong; SVG thì làm được. Đường dẫn: nửa trên hình elip `M 0 319.5 A 691 319.5 0 0 1 1382 319.5`, chữ đặt `startOffset="50%"` + `text-anchor="middle"` → điểm giữa chữ rơi đúng đỉnh cung.

Gradient tô chữ: `--tru-trung` → `--tru-dam` (alpha 0). **Hướng gradient đọc từ ảnh render (trái sáng → phải tối), chưa xác minh bằng ma trận** — nếu Thắng thấy lệch thì sửa một dòng.

### ⚠️ Cần Thắng xuất ảnh nền sao

`Milkyway` trong Figma là **ảnh thật** (image fill JPEG) + hiệu ứng NOISE, không phải hình vẽ CSS. **Proxy mạng chặn tên miền Figma ở CẢ HAI môi trường** (máy Thắng và container của Claude, đều lỗi 403) — không tải tự động được.

Hướng dẫn xuất đã ghi ở cuối `HeroSection.astro`. Chưa có ảnh thì Hero vẫn chạy, chỉ là nền đen.

### ⚠️ Một chỗ buộc phải lệch bản vẽ

Khối nội dung Figma rộng **527 cố định** ở cả ba khổ. Trên màn 375 thì 527 **tràn ra ngoài màn** (Figma đặt nó ở x=−76). Trên web không thể vậy → dùng `max-width: 527px`. Đây là **lỗi của bản vẽ**, không phải lựa chọn.

Hệ quả: Hero mobile cao **762** thay vì 680, vì chữ xuống dòng nhiều hơn khi khối co lại còn 327.

### 🔶 Cần Thắng quyết: vùng chạm của nút CTA

Nút trong Hero là **`Md` = 40** theo bản vẽ. **WCAG đòi ≥ 44px trên màn cảm ứng** — đúng vấn đề Thắng vừa chốt ở `Các gói` (đổi sang `lg` = 48).

Đây là nút chuyển đổi chính của **cả 7 trang**. Giữ `md` thì hai nút CTA quan trọng nhất site lại khác cỡ nhau. Em **giữ đúng bản vẽ** và chờ Thắng quyết có mở rộng quyết định đó ra toàn site không.

---

## DEC-096 · Giai đoạn 2 — 5/6 section dùng chung đã dựng xong

*25/09/2026 · Luồng E · **[xác minh — đo bằng trình duyệt thật ở cả 3 khổ màn]***

| Section | File | Figma D/T/M | Đo được D/T/M |
| --- | --- | --- | --- |
| Hero | `HeroSection.astro` | 680 · 680 · 680 | 686 · 686 · 762 |
| Bạn có đang gặp vấn đề này | `SolutionSection.astro` | 423 · 739 · 776 | **423** · 728 · 785 |
| Bạn sẽ nhận được gì | `BenefitsSection.astro` | 1098 · 1098 · 1592 | **1093 · 1093 · 1586** |
| Các gói dịch vụ | `PricingSection.astro` | 1157 · 1145 · 2101 | 1172 · 1179 · 2162 |
| Câu hỏi thường gặp | `FaqSection.astro` | 566 · 680 · 785 | 587 · 663 · 874 |

**Chỗ lệch còn lại gần như toàn bộ do FONT.** Container của Claude bị chặn `fonts.googleapis.com`, nên ảnh chụp kiểm tra dùng font dự phòng — chữ rộng hẹp khác Be Vietnam Pro / Chakra Petch thật, nên xuống dòng khác, nên section cao khác. **Bản trên Vercel mới là bản kiểm thật** (luật đã ghi ở DEC-042).

### 🔑 Phát hiện đáng giá nhất: mọi quầng sáng nền đều dùng MÀU TRỤ

| Hoạ tiết | Màu trong Figma | Là token nào |
| --- | --- | --- |
| Quầng FAQ (Ellipse 14) | `#E79F01 → #F7CE7A` @50%, blur 300 | `--tru-trung` → `--tru-nhat` |
| Quầng Contact (Ellipse 15) | như trên, blur 120 | như trên |
| Quầng ấm ở "Nhận được gì" (Vector 6) | `#F7CE7A → #1E1E1E`, blur 500 | `--tru-nhat` → `--gray-950` |

→ Sang trang khác **tự đổi màu**, không sửa một dòng nào. Đây là chỗ bộ biến `--tru-*` ở `ServicePageLayout` (DEC-093) trả lại giá trị rõ nhất.

### Chi tiết từng section

**Bạn có đang gặp vấn đề này** — 3 ô + 2 đường kẻ dọc 1px `--gray-50` (desktop). Cộng thử 80+37+80+146+80 = **423**, khớp tuyệt đối.
✅ **Đính chính DEC-087:** em từng nghi bản tablet sai vì để ô rộng 392 trong khung 688. **Đo lại thì đó là chủ ý** — ba ô 392 **căn giữa**, giữ một cột chữ hẹp cho dễ đọc. Mobile mới là lấp đầy (327). Đã sửa code theo số đo; bản trước cho lấp đầy cả tablet là **sai**.

**Bạn sẽ nhận được gì** — section giàu hình nhất: **6 mái vòm treo trên sợi dây sáng**, dưới một vòng cung hành tinh.
- Desktop: tháp **3–2–1**, 6 sợi dây mỗi sợi một độ dài (207 · 140 · 208 · 371 · 218 · 364)
- Tablet: **2 vòm × 3 hàng**, vẫn đúng ba mốc y = 200 · 404 · 608 → section vẫn cao **1098 y hệt desktop**. Chỉ còn 2 sợi dây
- Mobile: **một cột** 6 vòm, gap 12, 1 sợi dây
- Vòm dùng lại component `Footer/Half circle item` đã dựng ở Giai đoạn 1
- Khung vòm **chạy hết bề ngang section**, không chừa lề trang (đo được: tablet 768, mobile 375)

**Các gói dịch vụ** — số cột đo được cho từng khổ: **1 · 2 · 3**. Gap **24 · 12 · 24** — gap 12 ở tablet nhìn lạ nhưng là con số duy nhất để hai thẻ 338 vừa khít khung 688.
Thêm prop `featured` cho `PricingCard`: gói được khuyên dùng sáng sẵn. Figma đánh dấu bằng `State=Focus`, nhưng code **không** gán thẳng trạng thái Focus — Focus là chỗ con trỏ bàn phím đang đứng, gán cố định là lỗi WCAG 2.4.7. Cùng cách đã xử lý ô bento nổi bật ở DEC-057.

**Câu hỏi thường gặp** — một trong hai section đổi trục ở mốc 1280: desktop hai cột (tiêu đề 200 trái · danh sách 800 phải), dưới 1280 xếp dọc. Câu đầu mở sẵn; `<details>` lo phần đóng/mở, không một dòng JS (DEC-084).

---

## DEC-097 · 🔴 Hai lỗi cùng một gốc: suy luận thay vì đo, và gán thẳng thuộc tính

*25/09/2026 · Luồng E · **[cả hai đều chỉ lộ ra khi ĐO, build đều sạch 0 lỗi]***

### Lỗi 1 — đoán bố cục tablet, lệch 347px

Em đoán *"tháp 3–2–1 rộng 1200 không nhét vừa 768 nên tablet chắc xếp một cột"*. Đo ra section cao **1445** trong khi Figma ghi **1098** — lệch 347px.

Sự thật: bản vẽ **giữ nguyên ba hàng** ở tablet, chỉ đổi từ 3-2-1 thành 2-2-2. Không ai đoán ra được điều đó.

Cùng lỗi ở `Các gói`: em để lưới `auto-fit` tự tính số cột → ra **1 cột** ở tablet thay vì 2, section cao 2124 thay vì 1145. Nguyên nhân kỹ thuật: `auto-fit` lấy **cận trên** (384) để quyết định số cột, mà 384×2 không vừa khung 688.

> **Luật:** Tư vấn là trang duy nhất có đủ ba khổ màn trong Figma. Đã bỏ công đo desktop thì đo nốt tablet và mobile — **đừng suy ra**. Chi phí đo là một lần gọi; chi phí đoán sai là dựng lại cả section.

### Lỗi 2 — lặp lại đúng DEC-060, ở một dạng khác

DEC-060 đã ghi: *"component nhận vị trí từ trang thì truyền qua biến CSS, không gán thẳng thuộc tính."*

Em vẫn gán thẳng `style="left:...; top:..."` cho 6 mái vòm. Ở desktop chúng `position: absolute` nên chạy đúng. Nhưng **dưới 1280 chúng nằm trong lưới và để `position: relative`** — mà `left`/`top` trên một phần tử `relative` thì **đẩy lệch nó khỏi ô lưới**. Kết quả: vòm bên phải bị đẩy ra ngoài và cắt cụt.

Sửa: truyền bằng biến CSS (`--x`, `--y`, `--cao`), CSS chỉ đọc ở đúng khổ màn cần. **Gỡ được toàn bộ `!important`** — bản trước phải dùng `!important` để đè style nội tuyến, kéo theo phải chặn `max-width` cho từng media query, và chỉ cần quên một chỗ là cả 6 sợi dây dồn về một điểm.

> **Luật (nhắc lại lần hai):** toạ độ truyền từ trang xuống component **luôn đi bằng biến CSS**. Dấu hiệu nhận biết đã làm sai: phải viết `!important` để sửa.

### Điểm chung của cả hai

Build **sạch 0 lỗi** trong cả hai trường hợp. `astro check` không biết gì về việc section cao sai 347px hay vòm bị cắt. **Chỉ có đo bằng trình duyệt thật và nhìn ảnh mới bắt được.** Đây là lần thứ ba bài học này xuất hiện (DEC-035-A · DEC-094 · và đây).

---

## DEC-098 · Ảnh nền sao — cắt bỏ phần không ai nhìn thấy, giảm 32%

*25/09/2026 · Luồng E · **[xác minh — so bốn bản ở cỡ hiển thị thật]***

Thắng xuất `Milkyway` 2560×1360. Hai việc đã làm:

**1. Nén mạnh — vì đây là loại ảnh giấu được vết nén.** So bốn bản ở cỡ hiển thị thật (1280): `1280 q75 = 112 KB` · `1280 q55 = 74 KB` · `1920 q35 = 106 KB` · `2560 q35 = 179 KB` — **không phân biệt được bằng mắt**.
Lý do: ảnh sao là kết cấu **tối, nhiễu cao, tương phản thấp** — vết nén lẫn vào chính cái nhiễu. Ngược hẳn với logo (nét sắc, nền phẳng) ở DEC-064/065, chỗ đó buộc phải để chất lượng cao.

**2. Cắt bỏ 32% chiều cao không ai nhìn thấy.** Vòng cung hành tinh (elip 1920×727 ở y=344, căn giữa) che kín mọi thứ từ **y=437** trở xuống — chỗ cao nhất của nó là hai mép màn, tính bằng phương trình elip. Khung ảnh cao 694 → **257px cuối không bao giờ lộ ra**. Cắt còn 470 (chừa lề an toàn).

**Kết quả: 51 KB (1x) · 125 KB (2x)** — từ 174/569 KB.

Cũng đã gỡ lớp `Top left light` khỏi Hero: Thắng xoá khỏi Figma ngày 25/09 vì *"thấy không cần thiết"*.

---

## DEC-099 · 🔶 Còn thiếu để xong Giai đoạn 2: section Contact

*25/09/2026 · Luồng E · **[chưa dựng — cần một quyết định trước]***

Section `Contact` (Desktop 382:8965, cao 661) là **cùng một cái form với trang Liên hệ đã chạy thật**, chỉ khác bố cục: ở đây là **200 (tiêu đề + mạng xã hội) · 800 (form)**, còn trang Liên hệ là 560 · 600.

**Vấn đề:** form ở `lien-he.astro` đang viết **thẳng trong trang**, không phải component. Nó chứa phần JS có thật, có lỗi đã sửa (DEC-079 — `FormData` bỏ qua ô đang khoá) và bộ thông báo lỗi theo từng mã HTTP.

Hai đường, cần Thắng chốt:

| | Làm gì | Được | Mất |
| --- | --- | --- | --- |
| **(a)** *khuyến nghị* | **Tách form ra thành `ContactForm.astro`**, cả trang Liên hệ lẫn 7 trang dịch vụ cùng dùng | Một bản duy nhất. Sửa một chỗ, đúng cả 8 trang | Động vào trang Liên hệ đang chạy thật — phải kiểm lại kỹ |
| **(b)** | Chép form sang section mới | Không động vào trang đang chạy | **Hai bản của một đoạn code có logic tinh tế.** Lần sau sửa lỗi mà quên một bản là hỏng âm thầm |

Em nghiêng hẳn về **(a)**: công ty không có dev, hai bản của cùng một thứ là loại nợ đắt nhất về sau.

---

## DEC-100 · ✅ Giai đoạn 2 XONG — tách form thành component dùng chung

*25/09/2026 · Luồng E · Thắng chốt phương án (a) ở DEC-099 · **[xác minh — 5 phép thử trên cả hai trang]***

### Đã làm

`lien-he.astro` **533 → 277 dòng**. Phần form chuyển sang `ContactForm.astro`, cả trang Liên hệ lẫn section `Contact` của 7 trang dịch vụ đều gọi nó.

⚠️ Code được **cắt nguyên văn theo số dòng**, không gõ lại một chữ nào — gõ lại là cơ hội tạo lỗi mới trên một thứ đang chạy tốt. Đoạn cắt có `assert` kiểm đúng điểm đầu và điểm cuối trước khi ghi.

### Phép thử hồi quy — chạy trên CẢ HAI trang, cả hai đều đạt

| # | Thử gì | Kết quả |
| --- | --- | --- |
| 1 | Gửi form rỗng | Báo lỗi *"Chưa điền tên"*, **không gọi mạng** ✓ |
| 2 | Email sai định dạng | Báo *"Email chưa đúng định dạng"* ✓ |
| 3 | **Điền đủ → chặn lời gọi, đọc nội dung THẬT gửi lên** | `{website, ten, email, sdt, mota, dongy}` — **đủ 6 trường** ✓ |
| 4 | Sau khi gửi được | Khối xác nhận hiện, form ẩn ✓ |
| 5 | Bấm *"Gửi một yêu cầu khác"* | Form quay lại, đã xoá trắng ✓ |

Phép thử **số 3 chính là phép thử đã bắt được lỗi DEC-079** (`FormData` bỏ qua ô đang khoá → gửi lên object rỗng ở 100% số lần). Nó là lý do chính phải tách thay vì chép: **một bản duy nhất thì không có bản nào bị quên khi sửa lỗi.**

### Section `Contact` — số đo

Desktop 661 · Tablet 810 · Mobile 972. Padding dọc 96 ở cả ba.
Đây là section **thứ hai** đổi trục ở mốc 1280 (cùng FAQ): ≥1280 hai cột **200 · 800** dạt hai mép, cột trái `space-between` nên tiêu đề bám đỉnh còn mạng xã hội tụt xuống đáy. Dưới 1280 xếp dọc, gap 40.
Cộng thử desktop: 96 + 469 + 96 = **661** ✓

### 🔶 Hai việc còn lại của Thắng ở section này

1. **Ba đường dẫn mạng xã hội** (VD-010 mục 1) — hiện hiện chữ nhưng **không bấm được**, thà vậy còn hơn ba link chết.
2. **Ba icon 48×48** — bản vẽ dùng icon tròn (bộ Ionicons) nằm NGANG; ở đây đang là CHỮ nên phải xếp DỌC.
   Lý do đổi: cột trái chỉ rộng 200. Ba icon nằm ngang vừa khít (48×3 + 26×2 = 196), nhưng **ba chữ nằm ngang cần hơn 250px** — đã thấy thật khi chụp: chữ tràn sang cột form và **đè lên nút gửi**.
   Em **không tự vẽ lại logo Facebook/Instagram/LinkedIn từ trí nhớ** — vẽ sai một nét là sai nhận diện thương hiệu của người ta. Cần Thắng xuất, giống cách đã làm với ảnh nền sao.
   📌 Có icon rồi thì đổi `flex-direction` về hàng ngang, đúng một dòng.

### Trạng thái Giai đoạn 2

| Section | Trạng thái |
| --- | --- |
| Hero · Bạn có đang gặp vấn đề này · Bạn sẽ nhận được gì · Các gói dịch vụ · Câu hỏi thường gặp · Liên hệ | ✅ **đủ 6** |
| Khung trang + bộ màu 7 trụ | ✅ DEC-093 |

**Tiếp theo — Giai đoạn 3:** section `Baika sẽ làm gì`, dựng từ **Đào tạo CEO** (12 thẻ `Detail Step Item`, cao 1737 — ca nặng nhất trong 7 trang). Figma có sẵn frame riêng cho section này ở **cả tablet (768×1883) và mobile (375×2082)**, nên không phải đoán — đúng thứ đã trả giá để học ở DEC-097.
