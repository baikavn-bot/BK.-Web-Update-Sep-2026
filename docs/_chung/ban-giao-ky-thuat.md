<!-- CHÉP NGUYÊN VĂN — đầu file do agent thêm 03/10/2026, phần dưới đường kẻ giữ y bản gốc. md5 bản gốc: d981c3f6710981eaee1736ffcd18e353 -->

> 📦 **Bản chép nguyên văn** từ project Claude «BaiKa.vn», file `claude/ban-giao-ky-thuat.md` (bản lưu 24/09/2026). Chuyển vào repo ngày 03/10/2026 — **từ nay bản này là bản chính.**
> Sửa **ở đây**, không sửa bản trong project Claude nữa.
> Khi file này lệch với nguồn khác, thứ tự tin: **Figma** → `CLAUDE.md` / `TRANG-THAI.md` / `docs/<trang>/` → file này.
> Đường dẫn `claude/<tên>.md` bên dưới là file trong project Claude. File nào đã chuyển thì nay nằm ở `docs/_chung/<tên>.md` — tra bảng ở `docs/README.md`.
>
> **⚠️ Chỗ đã lỗi thời — đọc trước khi tin nội dung bên dưới:**
> - Bảng «site cũ» (Next.js, `next/font`, Lexend, Geist Mono) mô tả **site cũ để audit**, không phải site này (`DEC-018`).
> - Text style `label-mono` đã đổi tên thành `label` (`DEC-036`).
> - Các mục «chặn RC» có thể đã xong — đối chiếu `CLAUDE.md` §11 và quyển 2 nhật ký quyết định.

---

# Bàn giao thiết kế `baika.vn` — các trang trong

*Thắng → `/website-production-agent` · 08/09/2026, cập nhật 22/09/2026 · Luồng E*

Tài liệu này đi kèm file Figma. **Chỗ nào tài liệu không nói, đừng đoán — hỏi Thắng.** Mục 6 liệt kê những thứ **chưa được thiết kế**; đó là chỗ dễ đoán sai nhất.

> 🔴 **TRA CỨU COMPONENT Ở ĐÂU — cập nhật 24/09/2026 (`DEC-034`).** File Figma `YmcXg1lQqGVjQOFrVtdOgW` có 5 page, mỗi page một vai trò:
>
> | Page | Node | Tìm gì ở đây |
> | --- | --- | --- |
> | **`Component`** | `660:2939` | **Toàn bộ main component của website** — 17 component set + 6 component đơn |
> | `UI` | `191:812` | **Trang và màn** — 7 trang dịch vụ, trang chủ, Liên hệ, Form States. **0 main component** |
> | `Icon` | `6:20457` | Thư viện icon Lucide. Giữ nguyên, đừng động vào |
> | `Style guide` | `1:217` | Trang tài liệu hệ thống. Không xuất ra web |
> | `Component (cũ – không dùng)` | `8:12070` | **Kho cũ đã đóng — bỏ qua hoàn toàn.** Trong đó có một `Text field` `58:5013` trùng tên nhưng **sai**; cái đúng là `588:6238` ở page `Component` |
>
> **Node ID không đổi khi chuyển page** — mọi ID trong tài liệu này vẫn tra được.

> **Đổi người nhận — 22/09/2026.** Trước đây tài liệu này viết cho một dev tên Tuấn. **Công ty không còn dev.** Người dựng web giờ là `/website-production-agent`. Nội dung kỹ thuật không đổi — chỉ đổi đối tượng đọc. Chỗ nào trước ghi *"báo lại cho Tuấn"* thì nay là *"agent nêu ra để Thắng quyết"*.

---

## 0. Nền tảng

> **ĐÂY LÀ WEBSITE DỰNG MỚI HOÀN TOÀN.** Thứ duy nhất kế thừa từ trước project là **domain `baika.vn`**.
> `baika.vn` đang chạy chỉ là **current-state reference / audit source** — không phải codebase, design, architecture, component hay asset baseline. Không migrate, reuse hay inherit bất cứ thứ gì từ nó trừ khi Thắng chủ động yêu cầu.

### Site cũ — quan sát audit, KHÔNG phải baseline *(đo 08/09/2026)*

| | |
| --- | --- |
| Framework | **Next.js** — `/_next/static/chunks/…`, build bằng Turbopack |
| CSS | **Tailwind** |
| Font | nạp qua `next/font`: **Be Vietnam Pro** *(`--font-sans`)* · **Lexend** · **Geist Mono** |

### Site mới — đã chốt 21/09/2026 *(`DEC-001`)*

| | |
| --- | --- |
| Framework | **Astro** + TypeScript |
| CSS | **CSS Modules + CSS Variables** — không Tailwind |
| Visual | SVG/CSS cho hệ hình ảnh · WebP/AVIF cho ảnh raster |
| Hạ tầng | pnpm · Git/GitHub · Vercel *(Preview + Production)* |

**Không dùng Next.js/React làm mặc định.** Chỉ đưa thêm thư viện vào nếu chứng minh được là cần.

**Typography — ĐÃ CHỐT (`DEC-023` `DEC-024`):**

| Vai trò | Font | Style |
| --- | --- | --- |
| Chữ hiển thị lớn | **Be Vietnam Pro** | `display-1` 80 SemiBold · `display-2` 48 Bold |
| **Tiêu đề** | **Chakra Petch** | `H-1` 32 Bold · `H-2` 24 Bold · `H-3` 19 Medium |
| Chữ thường | **Be Vietnam Pro** | `body-lg` 17 · `body` 15 · `caption` 13 · `label-mono` 11 |

⚠️ **Nạp subset `vietnamese` cho CẢ HAI font** — thiếu là dấu tiếng Việt rơi sang font hệ thống.

**Chữ mono: BỎ.** Quy ước ClearWork không còn hiệu lực (`DEC-024`). Style `label-mono` nên đổi tên thành `label`.

⚠️ Còn **66 node `Noto Sans`** chưa chuẩn hoá hết, và `Button Text` đang dùng **18/16/14px** ngoài thang chữ.

**Mọi hiệu ứng trong bộ thiết kế đều làm được với Astro** — `position: sticky`, SVG `textPath` cho chữ vòng cung, `background-clip: text` cho chữ gradient, accordion bằng `<details>`. Không cần phương án dự phòng nào.

### ⚠️ Quan sát audit site cũ — ghi lại để biết cái gì cần tránh

**Toàn bộ nội dung site hiện tại nằm trong một `<iframe>`.**

```
baika.vn/                          ← vỏ Next.js, <body> RỖNG, 0 ký tự chữ
  └── <iframe src="/trangchu.html?v=3">   ← toàn bộ nội dung nằm trong đây
```

Và **không có thẻ `<h1>` nào** — không ở vỏ ngoài, cũng không ở trong iframe.

Hệ quả:

- Google mở `baika.vn/` thấy **một trang trắng không chữ**. Nội dung thật ở địa chỉ khác *(`/trangchu.html`)*, nên uy tín trang không dồn về đúng URL
- Không `h1` = trang không tuyên bố nó nói về cái gì
- 7 trang dịch vụ là **cửa vào chính từ Google**. Thiết kế đẹp cỡ nào cũng không cứu được nếu dựng theo kiểu này

Ba tiêu chí dưới đây là **chuẩn độc lập của site mới** — áp dụng vì chúng đúng, không phải vì site cũ sai. Astro xuất HTML tĩnh nên cấu trúc đó không phát sinh, nhưng **vẫn phải đo**, không coi là đương nhiên:

1. Không iframe ở bất kỳ trang nào
2. Mỗi trang có **đúng một `<h1>`** là tên dịch vụ *(chữ hero chạy trên vòng cung)*
3. `<h1>` phải là **chữ thật**, không phải ảnh — dùng SVG `textPath`

---

## 1. Phạm vi

✅ **URL đã chốt (`DEC-019`, 23/09)** — giữ nguyên 7 slug, không redirect. Slug là **định danh công khai của trang**, cùng loại với domain, nên giữ nó không phải là kế thừa site cũ.

| Trang | URL | Màu trụ |
| --- | --- | --- |
| Tư vấn Doanh nghiệp | `/advisory` | 01 vàng |
| Hệ thống hóa Vận hành | `/remote-ops` | 02 xanh ngọc |
| Marketing & Tăng trưởng | `/marketing` | 03 hồng |
| Tài chính & Dòng tiền | `/finance` | 04 xanh dương |
| Pháp lý & Thuế | `/legal-tax` | 05 đỏ |
| Công nghệ & AI | `/ai-os` | 06 tím |
| Đào tạo & CEO | `/ceo-blueprint` | 07 navy |
| Liên hệ | `/lien-he` *(đề xuất — chưa có slug cũ để giữ)* | — không màu trụ |
| Trang chủ | `/` | — **theme riêng của BAIKA**, không thuộc trụ nào *(`DEC-002`)* |

**Ngoài phạm vi đợt này:** Giới thiệu · Trạm Ý Tưởng · Trạm Kết Nối *(tên miền riêng)*.

---

## 2. Luật nền tảng — nhớ một câu

> **Vỏ trung tính, ruột đổi màu.**

**Luật này áp dụng cho 7 trang dịch vụ.** Trang chủ có theme riêng của BAIKA — đây là yêu cầu của founder, không phải ngoại lệ tạm thời *(`DEC-002`)*.

| Vỏ — giống hệt mọi trang | Ruột — đổi theo trang |
| --- | --- |
| NVG bar · Footer · Nền trang · Thang `--gray-*` · Thang chữ · Nút · Form · Accordion · Lưới | Màu trụ · Chữ hero · Nội dung mọi section · Vệt sáng trong body |

**Footer và NVG bar là một component cứng, không biến thể, không prop màu.** Vòng cung sáng ở footer dùng dải xám, không dùng màu trang.

**Trang không thuộc 8 Trụ** *(Liên hệ, và sau này Giới thiệu…)* **không có màu trụ** — chỉ vỏ + nội dung trung tính.

---

## 3. Token màu

Biến nằm trong Figma, collection **`Global Tokens`**, nhóm **`Colors/Page`**. **[xác minh 22/09 — Figma]**

> ⚠️ **Đổi tên nhóm 22/09:** trước là `Colors/Trụ`, nay là **`Colors/Page`**. Giá trị không đổi. Tài liệu nào còn ghi `Colors/Trụ` là bản cũ.

⚠️ **Bộ biến này chỉ có mode `light`, không có mode Dark.** Site chạy nền tối nên không ảnh hưởng — đừng đi tìm mode Dark.

> 🔴 **KHÔNG CÓ `#FFFFFF` THÔ TRONG THIẾT KẾ — `DEC-035` + `DEC-035-A`, 24/09/2026.** Luật chia theo độ mờ:
>
> | Trắng ở dạng | Dùng biến | Đang dùng |
> | --- | --- | --- |
> | **Đục 100%** | `Colors/Neutral 2/--gray-50` `#F8F8F8` | ~460 paint |
> | **Trong suốt** | `Colors/Opacity/White` `#FFFFFF @ 15%` — **alpha nằm trong biến**, paint để opacity 100% | 53 paint |
>
> Đo lại page `UI`: **0** điểm `#FFFFFF` thô. Nhóm `Colors/Opacity` có 4 biến: `White` `#FFFFFF@15%` · `Light` `#D5D5D5@50%` · `Gray` `#D5D5D5@25%` · `Dark` `#212121@50%`.
>
> **Luật:** chuỗi `#FFFFFF` / `#fff` / `white` **không được viết thẳng trong CSS**. Gặp trắng thô ở đâu trong Figma = lỗi, nêu ra để Thắng quyết.
>
> **Ngoại lệ duy nhất: màu bóng đổ.** `Shadow/Drop-Inner` và `Checkbox/Focus` vẫn dùng `#FFFFFF` — đó là màu *effect*, không phải fill, và làm mờ nó sẽ giết quầng sáng Focus. Chép đúng số, đừng đổi.

Mỗi trụ là **một nhóm chứa 3 biến**, tên biến giống hệt nhau ở cả 7 nhóm:

```
Colors / Page / <Tên trụ> / --dam
                          / --trung
                          / --nhat
```

| Nhóm | `--dam` *(tối)* | `--trung` *(màu chính)* | `--nhat` *(sáng)* |
| --- | --- | --- | --- |
| `Tư vấn` | `#815901` | `#E79F01` | `#F7CE7A` |
| `Vận hành` | `#005545` | `#01BB98` | `#7FE0C5` |
| `Marketing` | `#710044` | `#D70082` | `#FF47B6` |
| `Tài chính` | `#003F73` | `#0077D9` | `#9BD0FF` |
| `Pháp lý` | `#95212B` | `#FB3748` | `#FFC8C8` |
| `Công nghệ & AI` | `#5D2E99` | `#9B4DFF` | `#C4B5FF` |
| `Đào tạo CEO` | `#2D3078` | `#5458DE` | `#A9BEFF` |

**`--trung` là màu chính của trang** — chữ hero, điểm nhấn.

⚠️ **Tên biến KHÔNG duy nhất — nhóm mới là thứ phân biệt.** Có bảy biến cùng tên `--dam`. Khi xuất sang CSS **phải ghép tên nhóm vào**, nếu không bảy giá trị đè lên nhau:

```css
/* ĐÚNG */
--tuvan-dam · --tuvan-trung · --tuvan-nhat
--vanhanh-dam · … (7 nhóm × 3 = 21 biến)

/* SAI — chỉ còn 3 biến, 6 trụ mất màu */
--dam · --trung · --nhat
```

⚠️ **`--dam` KHÔNG dùng cho chữ.** Nó quá tối trên nền tối — dùng cho điểm cuối gradient, lõi quầng sáng, đổ bóng.

**Chữ hero là gradient `-trung` → `-dam` với điểm cuối trong suốt.** Viết CSS đúng cách:

```css
/* ĐÚNG */
background: linear-gradient(90deg, var(--congnghe-trung), rgb(93 46 153 / 0));
/* SAI — `transparent` = đen trong suốt, chữ sẽ bị xám bẩn ở đuôi */
background: linear-gradient(90deg, var(--congnghe-trung), transparent);
```

Bảy giá trị `--dam` **không suy ra được từ `--trung` bằng một hệ số** — hệ số thực tế chạy từ `0.45` (vận hành) tới `0.60` (công nghệ), chọn bằng mắt. Đọc token, đừng tính trong code.

**Vỏ dùng `Colors/Neutral 2` (`--gray-*`)** — xám trung tính thuần `R=G=B`, không nghiêng về màu trụ nào. Các giá trị hay dùng:

| Token | Giá trị | Dùng ở |
| --- | --- | --- |
| `--gray-50` | `#F8F8F8` | viền component, chữ trên nền tối |
| `--gray-100` | `#F1F1F1` | chữ footer, viền nút `Normal` |
| `--gray-700` | `#6D6D6D` | **trạng thái `Disabled` toàn hệ** |
| `--gray-950` | `#1E1E1E` | nền trang, nền ô checkbox đã tick |

Vệt sáng footer: `--gray-50` → `--gray-300` → `--gray-500` → `--gray-700` → `--gray-900`.
Chữ footer `--gray-100` trên `--gray-950` = tương phản `14.76:1`.

**Màu ngữ nghĩa** *(có sẵn, đừng tạo mới)*: `Colors/Red/100 #FFC8C8` · `Colors/Red/200 #FB3748` · `Colors/Green/100 #84EBB4` · `Colors/Green/200 #257551` · `Colors/Yellow/100 #FFDB43` · `Colors/Yellow/200 #DFB400`.

⚠️ **Không hardcode màu.** Thiếu token thì hỏi, đừng tự chế — trang này có 7 biến thể màu, một giá trị viết cứng là 7 chỗ phải sửa.

---

## 4. Cấu trúc trang — 7 khối, thứ tự cố định

```
S1  Hero  +  Bạn có đang gặp vấn đề này?
S2  BAIKA sẽ làm gì
S3  Bạn sẽ nhận được gì
S4  Các gói dịch vụ
S5  FAQ
S6  Liên hệ
    Footer
```

Thứ tự giống nhau ở cả 7 trang dịch vụ. **FAQ đứng trước Liên hệ** — cố ý, không phải nhầm.

**Hai trang có thêm một khối chèn giữa S2 và S3** — cùng một component, khác nội dung:

| Trang | Khối chèn | Số thẻ |
| --- | --- | --- |
| Tư vấn Doanh nghiệp | `6 dịch vụ trọng tâm` — dẫn sang 6 trang kia | 6 · lưới `3+3` |
| Công nghệ & AI | `Các bước thực hiện` — 5 bước chạy dự án | 5 · lưới `3+2` |

Hai trang này có **8 khối**, năm trang còn lại có **7**. Đây là ngoại lệ duy nhất, và cả hai dùng chung một component nên không phát sinh dạng layout mới.

---

## 5. Component

### 5.1 · `b-stage-scope` — dùng ở S2, cả 7 trang

Component nặng nhất. Đọc kỹ.

**Cấu trúc**

| | |
| --- | --- |
| **Mỗi cụm là MỘT khối riêng** | Bắt buộc. Nếu để tất cả module trong một danh sách phẳng thì sticky sẽ bám suốt section, không nhả |
| Cột trái | Một frame chứa **số thứ tự + tên cụm**, hug chiều cao |
| Cột phải | 1–5 thẻ xếp dọc |
| Chiều cao khối | Cột nào cao hơn quyết định. **Không đặt `min-height` thủ công** — frame nhãn trái tự làm sàn |

**Cuộn**

| | |
| --- | --- |
| Cơ chế | `position: sticky` với **khối cụm làm biên**. Nhãn bám tới hết khối, nhãn kế tiếp đẩy lên thay. Không cần JS |
| ⚠️ `top` | **`128px` + khoảng thở** — Header trong file cao đúng `128px` ở cả 7 trang. KHÔNG để `0`, nhãn sẽ chui xuống dưới nav |
| Trạng thái khi bám | **Không đổi hình** |
| Cuộn ngang | ❌ Không dùng ở bất kỳ đâu trên desktop |

**Số thứ tự cụm**

- Nằm trong luồng, chung frame với tên cụm → bám sticky cùng nhãn
- **Cỡ số là tham số layout**, không phải lựa chọn kiểu chữ — nó đặt sàn chiều cao cho mọi cụm ở mọi trang
- **Trang Công nghệ & AI: KHÔNG đánh số** — 4 nhóm ở đó song song, không phải các bước

**Số cụm và số thẻ theo trang**

| Trang | Cụm | Thẻ mỗi cụm | Đánh số |
| --- | --- | --- | --- |
| Vận hành | 3 | 1 / 2 / 3 | ✅ |
| Marketing | 3 | 4 / 3 / 2 | ✅ |
| Tài chính | 4 | 1 / 2 / 4 / 1 | ✅ |
| Pháp lý | 3 | 2 / 4 / 2 | ✅ |
| Công nghệ & AI | 4 | 1 / 3 / 2 / 2 | ❌ **không** |
| Đào tạo & CEO | 4 | 3 / 5 / 2 / 2 | ✅ |
| Tư vấn Doanh nghiệp | 4 | 1 / 1 / 1 / 1 | ❌ **không** |

Cụm nhiều thẻ nhất là **5** *(trang CEO)*. Cụm ít nhất là **1** — kiểm tra ca này không bị hụt.

**Hai trang không đánh số** *(AI, Tư vấn)*: text `Solution Number` trong file được **để `hidden`, không xoá**. Không render nó ra HTML. Vì không có số, frame nhãn trái ở hai trang này chỉ cao `29px` thay vì `161px` — sàn chiều cao biến mất, đây là chủ ý.

Trang Tư vấn dùng component này **và** có thêm khối 6 dịch vụ ở 5.6.

### 5.2 · `Bạn sẽ nhận được gì` — S3, cả 7 trang

**Đúng 6 mục ở cả 7 trang** — hằng số, không có biến thể.

- Vòng cung rủ **từ trên xuống** *(ngược chiều cung ở hero — cố ý, tạo cặp đối xứng)*
- 6 vòm nửa tròn xếp `3 – 2 – 1`, đường dẫn thả từ cung xuống, xuyên qua vòm
- **Chữ nằm dưới vòm, không nằm trong vòm** — nên chữ dài ngắn tuỳ ý, vòm giữ cỡ cố định
- Điều kiện: **đỉnh các vòm trong cùng hàng phải thẳng nhau**
- Vòm cuối đứng một mình là **vị trí nhấn**, đã chọn nội dung riêng cho từng trang
- Mobile: kim tự tháp mất, thành danh sách dọc 6 mục — thứ tự giữ nguyên

### 5.3 · Thẻ gói dịch vụ — S4

| Số gói | Trang | Bố cục desktop |
| --- | --- | --- |
| 3 | Vận hành · Marketing · Tài chính · CEO | 1 hàng 3 |
| 4 | Tư vấn · Pháp lý | **`2 + 2`** |
| 5 | Công nghệ & AI | **`3 + 2`** |

**Luật: không bao giờ để hàng lẻ 1 thẻ.** `3+1` là sai, dùng `2+2`.

Desktop **xuống hàng**, không cuộn ngang — đây là khối để so sánh, phải thấy hết cùng lúc.
Mobile cuộn ngang được, nhưng phải **hé mép thẻ kế tiếp**.

Một thẻ mỗi trang có nhãn `ĐỀ XUẤT`.

⚠️ Component `Các gói` `365:785` hiện có `Default | Focus`, **chưa có `Hover`** — cần xác nhận là chủ ý *(có thể chỉ nút bên trong mới hover)*.

### 5.4 · FAQ — S5

- **Đúng 4 câu ở cả 7 trang** — hằng số
- Câu trả lời dài nhất `296 ký tự` ≈ **4 dòng** ở bề rộng cột thường. Đặt chiều cao accordion mở theo ca đó
- Trạng thái: đóng · mở · hover · focus bàn phím

⚠️ Component `FAQ Items` `230:3231` hiện **chỉ có `Default | Variant2`** — thiếu `Hover` và `Focus`, mà đây là thứ bấm được, có **28 instance trên 7 trang**. **Chặn Release Candidate.**

### 5.5 · Form — S6, và dùng lại cho trang Liên hệ

Trường: **Họ và tên\*** · **Số điện thoại\*** · **Email** · **Đơn vị / Doanh nghiệp** · **Lĩnh vực** *(dropdown)* · **Mô tả ngắn vấn đề**

⚠️ **Bắt buộc:** checkbox *"Tôi đồng ý với chính sách bảo mật"*.

Danh sách **Lĩnh vực khác nhau ở mỗi trang** — lấy trong `claude/noi-dung-theo-section.md`, mục `S7` của từng trang.

**Riêng trang Pháp lý** có thêm trường **Mức độ khẩn cấp**: Bình thường / Khẩn — cần xử lý trong tuần / Rất khẩn — đang có yêu cầu từ cơ quan thuế.

⚠️ **Trạng thái của cả khối form** *(`Submitting` · `Success` · `Error`)* **chưa vẽ.** Đây là điểm chuyển đổi chính của cả 7 trang — **chặn Release Candidate**. Xem mục 6.

### 5.6 · Thẻ lưới `Process card` — dùng ở khối chèn của 2 trang

**Đã tách thành hai component 22/09** *(`DEC-008`)*:

| | `ServiceLinkCard` `450:5984` | `Process Card` |
| --- | --- | --- |
| Dùng ở | Trang Tư vấn — khối `6 dịch vụ` | Trang AI — khối `5 bước thực hiện` |
| Bấm được | ✅ mỗi thẻ link sang 1 trang dịch vụ | ❌ không link |
| Trạng thái | `Default · Hover · Focus` (desktop) · `Default` (mobile/tablet) | `Default` — cố định, không tương tác |

Cấu tạo thẻ: số chìm làm nền → tiêu đề → 2–3 dòng mô tả. Số nằm sau chữ, không đẩy chữ xuống.

| | Trang Tư vấn | Trang Công nghệ & AI |
| --- | --- | --- |
| Tiêu đề khối | `6 dịch vụ trọng tâm` | `Các bước thực hiện` |
| Số thẻ · lưới | 6 · `3 + 3` | 5 · `3 + 2` |
| Số `01…` nghĩa là gì | Chỉ đánh dấu vị trí — 6 trục **song song** | **Thứ tự thật** — 5 bước nối tiếp nhau |

**Luật chung cho cả hai:**

- **Không bao giờ để hàng lẻ 1 thẻ.** 5 thẻ = `3+2`, không phải `4+1`
- **Ô trống ở hàng cuối để trống.** Không kéo giãn 2 thẻ hàng dưới cho đầy hàng — bề rộng thẻ phải khớp hàng trên, canh trái
- Không cuộn ngang trên desktop

**Vì sao trang AI dùng lưới này chứ không dùng `b-stage-scope` như S2:** hai khối nằm sát nhau, cùng một dạng layout thì đọc thành một section dài. Và ở đây mỗi bước chỉ có một câu — con số cỡ lớn của `b-stage-scope` không có gì để nâng đỡ, chỉ chiếm chỗ.

### 5.7 · Trạng thái tương tác — luật chung toàn hệ

*Chốt 22/09 · `DEC-014` `DEC-015`*

Ba trạng thái, **ba cơ chế thị giác khác nhau** — không cái nào phải đoán:

| | Cơ chế | Người dùng đọc ra |
| --- | --- | --- |
| `Hover` | **sáng lên** *(hoặc không đổi, nếu đã quyết như vậy)* | *"bấm được"* |
| `Active` | **chìm xuống** | *"đã nhận cú bấm"* |
| `Focus` | **quầng sáng trắng bên ngoài** | *"bạn đang đứng đây"* |

> **Quầng sáng trắng = `Focus`, và chỉ `Focus`.** Không component nào được dùng nó cho việc khác.

**`Button` `26:2182`** — 18 variant *(6 trạng thái × 3 cỡ)*:

| Trạng thái | Nền | Viền | Hiệu ứng |
| --- | --- | --- | --- |
| `Normal` | `--gray-950` | `--gray-100` 2px | `DROP_SHADOW #000000/10` r2 off `0,2` |
| `Hover` | gradient `#000000→#666666` | gradient `#FFFFFF→#414141` 2px | `INNER_SHADOW #999999/50` r6 off `0,−4` |
| `Active` | gradient | gradient 2px | `INNER_SHADOW #000000` **r12 s4 off `0,+4`** |
| `Focus` | gradient | gradient 2px | `INNER_SHADOW` như `Hover` **+ `DROP_SHADOW #FFFFFF/50` r6 s1** |
| `Disabled` | `--gray-700` | `#FFFFFF` 2px | — |
| `Loading` | gradient | gradient 2px | — |

`Hover` và `Active` dùng **cùng một `INNER_SHADOW` nhưng đổ ngược chiều** — `−4` là ánh sáng hắt từ dưới lên (nổi), `+4` đậm và toả rộng hơn là bóng đổ từ trên xuống (lún).

**`Checkbox` `29:2685`** — 10 variant, hai trục `Checked = False | True` × `State = Default | Hover | Focus | Error | Disabled`:

| State | Viền ô | Nền ô *(khi `Checked=True`)* | Hiệu ứng |
| --- | --- | --- | --- |
| `Default` | `--gray-50` 1px | `--gray-950` | — |
| `Hover` | `--gray-50` 1px | `--gray-950` | — **giống `Default`, cố ý** |
| `Focus` | `--gray-50` 1px | `--gray-950` | `DROP_SHADOW #FFFFFF` r2 |
| `Error` | `Colors/Red/200` 1px | `--gray-950` | — |
| `Disabled` | `--gray-700` 1px | `--gray-950` | — *(dấu tick cũng `--gray-700`)* |

`Hover` không đổi hình là **quyết định, không phải thiếu sót** — tín hiệu hover nằm ở nhãn và con trỏ chuột, không ở ô 20px.

**`Disabled` toàn hệ = đổi sang `--gray-700`, KHÔNG giảm opacity.**

**`Text field` `588:6238`** — 10 variant: `State = Default | Focus | Disabled | Typing | Choose | Error` × `Type = Default | Dropdown`. *(10 chứ không phải 12 là đúng — `Choose` chỉ có nghĩa với `Dropdown`.)*

⚠️ **Giá trị bóng đổ không nằm trong token nào** — `#999999/50` · `#000000` · `#FFFFFF/50` đều viết thẳng trong file. Không phải lỗi *(file chưa từng có token cho shadow)*, nhưng phải chép đúng số: màu · độ mờ · bán kính · spread · offset. Đoán sai thì cảm giác nổi/chìm mất.

---

## 6. ⚠️ CHƯA ĐƯỢC THIẾT KẾ — hỏi, đừng đoán

Đây là phần quan trọng nhất của tài liệu này. *(Cập nhật 22/09)*

### 🔴 Chặn Release Candidate

| Hạng mục | Tình trạng |
| --- | --- |
| **Form: `Success` + `Error` cho cả khối** | ❌ Chưa vẽ. Nút `Loading` đã có — đó là một phần của `Submitting`, còn thiếu hai cái kia. **Không có `Success`:** người dùng bấm *Gửi* 3–4 lần vì tưởng chưa ăn → BAIKA nhận lead trùng. **Không có `Error`:** mất hết dữ liệu vừa gõ, gần như không ai gõ lại |
| **Trang `Liên hệ`** | ❌ Chưa vẽ. Có trong nav và trong phạm vi |
| **`FAQ Items` thiếu `Hover` + `Focus`** | ❌ `230:3231` chỉ có `Default \| Variant2`. 28 instance trên 7 trang |

### 🟠 Cần chốt trước khi dựng

| Hạng mục | Tình trạng |
| --- | --- |
| **Breakpoint mobile** | ⚠️ `Home/Mobile` = **375**, `Mobile section` (trang dịch vụ) = **390**. Lệch nhau. `D01` chốt **375** — cần sửa một chỗ cho khớp |
| **`Planet` `321:178` chỉ có 1 variant màu** | ⚠️ `Colors = Pháp lý`, nhưng **7 trang đều dùng**. Vòng cung là visual chính của hero. Chốt: vẽ 7 variant, hay giữ 1 variant và đổi màu bằng token ở tầng code? *(Khuyến nghị: giữ 1, đổi bằng `--<trụ>-trung` — nhưng phải ghi rõ, không để 6 trang override thủ công)* |
| **Định dạng + dung lượng asset hero** | ⚠️ Dải sao, vệt sáng — chưa chốt. Nếu xuất PNG thì cân dung lượng: 7 trang × ảnh nền lớn sẽ nặng, và trang dịch vụ là cửa vào từ Google. Làm được bằng CSS/SVG thì tốt hơn. **Agent nêu phương án để Thắng chốt trước khi dựng** |

### 🟡 Đã đủ — không còn chặn

| Hạng mục | Tình trạng |
| --- | --- |
| Trạng thái `Button` — 6 trạng thái × 3 cỡ | ✅ Đủ 18 variant *(mục 5.7)* |
| `Checkbox` — 10 variant, hai trục | ✅ Đủ *(mục 5.7)* |
| `Text field` — 10 variant | ✅ Đủ |
| `ServiceLinkCard` · ô bento · `NVG header` · `Footer` | ✅ Đủ trạng thái |
| Focus bàn phím | ✅ Đã có luật chung — quầng sáng trắng *(mục 5.7)* |
| **Mobile** | ✅ Section `Mobile` chỉ có **một trang mẫu: Tư vấn Doanh nghiệp**. **Đây là chủ ý** — bản demo để thấy từng khối co lại thế nào. Sáu trang kia **áp dụng cùng quy tắc**, không vẽ lại. Chỗ nào không suy ra được từ mẫu này thì **hỏi Thắng, đừng tự quyết** |
| **Tablet** | ✅ Cùng nguyên tắc — 1 trang mẫu 768px, suy ra cho các trang còn lại |
| **Bốn trạng thái Loading/Empty/Error/Not found** | ✅ **Không áp dụng.** Site Astro tĩnh, không có khu vực lấy dữ liệu động. Nơi duy nhất cần là **form** — đã nằm ở phần 🔴 |

### Vẫn còn thiếu, không chặn

| Hạng mục | Tình trạng |
| --- | --- |
| **Header bản mobile** | ❌ Trang mẫu đang dùng instance Header **rộng 1280px** trong khung 375 — chưa có bản mobile. Footer thì đã có bản 375 |
| **NVG bar mở ra trông thế nào** | ❌ Component `NVG header` có `Open`, nhưng chưa đặt vào trang mẫu mobile |
| **Animation / chuyển cảnh** | ❌ Chưa có spec |

---

## 7. Nội dung còn chờ xác nhận

| # | Việc | Ảnh hưởng |
| --- | --- | --- |
| 1 | **Trang CEO: 2 trụ cột `Lãnh đạo đội ngũ` và `Đàm phán & Gọi vốn`** do Thắng bổ sung 07/09 từ khối "6 học phần" trên site cũ. Bản gốc chỉ có 10 trụ cột. **Chờ Academy** — nếu không thuộc chương trình thì gỡ 2 thẻ, trả số về 10 | Trang CEO, S2 |
| 2 | **`Finance Governance`** đã gộp vào dòng *"Quy trình tài chính, duyệt chi & kiểm soát nội bộ"* của gói Clean-Up & Control. Chờ xác nhận có bán kèm không | Trang Tài chính, S4 |
| 3 | **Trang Vận hành** đã chọn bộ gói `Ops Diagnosis / Ops Blueprint / Remote Ops Partner`. Bộ `Ba nhịp đồng hành` trên site cũ **bỏ** | Trang Vận hành, S4 |
| 4 | **Đường dẫn trang Liên hệ** chưa chốt | Sitemap |
| 5 | **Cam kết trong khối `Các bước thực hiện`** — bước `03` hứa *"sprint 2 tuần"*, bước `05` hứa *"phản hồi sự cố trong 4 giờ làm việc"*. Đây là **SLA với khách**, không phải mô tả. Chưa ai ở BAIKA duyệt hai con số này. Nếu không đúng thì bỏ mệnh đề, giữ phần còn lại của bước | Trang AI, khối chèn |

---

## 8. Phải gỡ khỏi site đang chạy — không liên quan thiết kế nhưng gấp

Hai khối số liệu trên site hiện tại **không có thật** *(Thắng xác nhận 07/09)*:

- **Trang CEO:** `200+ học viên` · `80+ doanh nghiệp` · cohort khai giảng `08/09/2026`
- **Trang Marketing:** `+340%` đơn hàng · `12M+` lượt xem · `8.4x` ROAS · `95%` phủ sóng — kèm dòng *"số liệu thực… là kết quả đo được"*

Cả hai **không nằm trong bộ thiết kế mới**. Nhưng site cũ vẫn đang chạy — nên gỡ sớm.

---

## 9. Sai lệch đã ghi nhận — biết trước, đừng báo lỗi

| Mã | Nội dung | Trạng thái |
| --- | --- | --- |
| `VD-001` | **Tương phản nhãn 8 ô bento trang chủ chưa đo.** Chữ `--gray-50` trên nền ô `--gray-50` 5% phủ lên gradient artwork. Thắng chốt 22/09: *"đó là ý đồ của UI"* | Chấp nhận có chủ ý. **QA không báo FAIL mục này** |

---

## 10. Checklist nghiệm thu

**Cấu trúc & SEO**

- [ ] 7 trang dịch vụ + trang chủ + trang Liên hệ dựng xong
- [ ] **Không trang nào dùng `<iframe>`**
- [ ] **Mỗi trang có đúng một `<h1>`**, là chữ thật *(SVG `textPath`)*, không phải ảnh

**Hệ thống**

- [ ] Footer và NVG bar **giống hệt** ở mọi trang, không nhuộm màu trang
- [ ] Không có giá trị màu hardcode — tất cả qua biến
- [ ] 21 biến màu trụ xuất ra CSS **có prefix tên nhóm**, không đè lên nhau
- [ ] Chữ hero dùng `rgb(… / 0)` ở điểm cuối gradient, **không dùng `transparent`**

**Layout**

- [ ] Nhãn sticky ở S2 bám đúng, `top` ≥ `128px`, không chui dưới nav
- [ ] S4 không có hàng lẻ 1 thẻ ở bất kỳ trang nào
- [ ] Khối chèn 2 trang: ô trống hàng cuối để trống, không kéo giãn thẻ

**Tương tác**

- [ ] Mọi thứ bấm được đều có `Hover` **và** `Focus` bàn phím
- [ ] **Quầng sáng trắng chỉ dùng cho `Focus`**, không dùng cho `Hover` hay `Active`
- [ ] `Disabled` đổi sang `--gray-700`, **không giảm opacity**
- [ ] Giá trị bóng đổ chép đúng số từ Figma, không ước lượng
- [ ] Form có checkbox chính sách bảo mật
- [ ] Form có trạng thái `Submitting` · `Success` · `Error`, và `Error` **giữ nguyên dữ liệu đã gõ**
- [ ] 6 thẻ ở trang Tư vấn link đúng sang 6 trang dịch vụ

**Responsive**

- [ ] Breakpoint mobile thống nhất **375** ở cả trang chủ lẫn trang dịch vụ
- [ ] Mobile: 6 trang còn lại dựng theo **quy tắc rút từ trang mẫu Tư vấn**, chỗ nào không suy ra được thì đã hỏi Thắng

**Nội dung**

- [ ] Địa chỉ footer: *Tầng 15, 72 Lê Thánh Tôn, **P. Sài Gòn**, TP. Hồ Chí Minh* — không còn "Quận 1"
- [ ] Không còn hai khối số liệu bịa ở mục 8

---

## Tài liệu kèm theo

| File | Nội dung |
| --- | --- |
| `claude/noi-dung-theo-section.md` | Toàn bộ chữ của 7 trang, xếp theo thứ tự section |
| `claude/noi-dung-day-du.md` | Nội dung nguyên văn từ site cũ + 28 câu trả lời FAQ |
| `claude/ban-do-section.md` | Map cụm ↔ module, danh sách nội dung đã cắt và lý do |
| `claude/website-agent-design-spec.md` | Design Spec — `LOCKED` 21/09 |
| `claude/website-agent-implementation-spec.md` | Implementation Spec — `LOCKED` 21/09 |
| `claude/website-agent-decisions.md` | Nhật ký quyết định `DEC-001` … `DEC-015` + `VD-001` |
| `claude/website-agent-figma-gap-audit.md` | Rà soát Figma 22/09 — còn thiếu gì để đóng spec |
