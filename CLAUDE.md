# CLAUDE.md — luật của repo `baika-website`

*Cập nhật 24/09/2026 · Đọc hết file này trước khi sửa bất cứ dòng nào.*

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

Nội dung site **cố định** (`DEC-017`). Không CMS, không database, không API lúc chạy.
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

### Tài liệu — nằm trong Claude Project "BaiKa"

| File | Chứa gì |
| --- | --- |
| `claude/website-agent-decisions.md` | **Nhật ký quyết định `DEC-001`…`DEC-036`. Đọc trước khi kết luận điều gì** |
| `claude/website-agent-design-spec.md` | Design Spec · `LOCKED` |
| `claude/website-agent-implementation-spec.md` | Implementation Spec · `LOCKED` |
| `claude/ban-giao-ky-thuat.md` | Spec bàn giao — token, component, trạng thái, checklist nghiệm thu |
| `claude/noi-dung-day-du.md` | Nội dung nguyên văn 7 trang |
| `claude/ban-do-section.md` | Khung section 7 trang |
| `claude/van-hanh-sau-launch.md` | Vận hành sau khi lên — không có dev thì sửa bug thế nào |

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

### Bốn trạng thái bắt buộc

Mọi khu vực lấy dữ liệu phải có đủ: **Loading** (skeleton) → **Empty** (có lối thoát) → **Error** (nói rõ hỏng gì, còn an toàn gì) → **Not found** (khác Empty).

Ở v1 chỉ **form Liên hệ** cần: `Idle` → `Submitting` → `Success` / `Error`. Thiết kế nằm ở section `Form States` `645:3184`.

### Hiệu năng

Site tĩnh, không framework UI ở client. JS chỉ dùng cho thứ thật sự cần tương tác (menu, accordion, form). Mặc định là **không JS**.

---

## 7. Cấu trúc thư mục

```
baika-website/
├── CLAUDE.md              ← file này
├── astro.config.mjs       ← site tĩnh, không adapter
├── src/
│   ├── styles/
│   │   ├── tokens.css     ← 82 biến Figma. KHÔNG sửa tay
│   │   ├── reset.css
│   │   └── global.css     ← chỉ thứ dùng ở MỌI trang
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── components/        ← một component = một thư mục: .astro + .module.css
│   └── pages/             ← mỗi file = một URL
└── public/                ← file tĩnh phục vụ nguyên trạng
```

**Quy tắc:** cái gì dùng ở mọi trang → `global.css`. Cái gì thuộc về một khối → CSS Module của khối đó. Không có đường thứ ba.

---

## 8. Lệnh

```bash
pnpm install     # cài lần đầu
pnpm dev         # chạy local, mở http://localhost:4321
pnpm build       # kiểm tra kiểu + dựng bản production vào dist/
pnpm preview     # xem thử bản đã dựng
```

---

## 9. Bảo mật

**Không bao giờ** đặt API key, token, mật khẩu vào bất kỳ file nào trong repo — kể cả trong comment, kể cả tạm.

Key nằm trong **biến môi trường** ở Vercel. File `.env` đã bị `.gitignore` chặn; `.env.example` chỉ chứa tên biến, không chứa giá trị.

Nếu phát hiện key bị commit: **dừng lại, báo Thắng ngay, và nhắc anh thu hồi key đó.** Xoá commit thôi là chưa đủ — key đã lộ là đã lộ.

---

## 10. Bài học đã trả giá — đừng lặp lại

| Bài học | Từ đâu ra |
| --- | --- |
| **Sau mỗi lượt ghi hàng loạt, phải mở ra NHÌN.** Số đếm khớp không chứng minh kết quả đúng | `DEC-035-A` — bind 566 paint "thành công, 0 lỗi", nhưng làm mất opacity và 8 ô bento trang chủ thành khối trắng đặc |
| **Kiểm một thuộc tính thì đọc cả giá trị lẫn styleId** | `DEC-022` — kết luận nhầm "shadow không có token", thật ra file có 7 effect style |
| **Thao tác theo tên node thì kiểm kích thước kết quả trước khi ghi** | Componentise nhầm cả khối form 840×528 vì vòng lặp đi ngược quá xa |
| **Dữ liệu mẫu trong file demo ≠ yêu cầu dự án** | Từng có cả một "luồng B — landing page ClearWork" sinh ra từ một khối demo trong file HTML. Sai đó sống qua nhiều phiên |
| **Đổi tên trục variant thì ghi lại instance trước, đổi cả bộ một lượt, đối chiếu lại sau** | `DEC-036` — 213 instance, 0 gãy, nhờ làm đúng trình tự này |

---

## 11. Còn treo — đọc trước khi tưởng mọi thứ đã xong

- **`Nav Button` `472:4918` thiếu `Hover` + `Focus`** — là mục menu bấm được, WCAG 2.4.7 đòi focus nhìn thấy. **Chặn Release Candidate**
- **Hai ô bento `Trạm Ý Tưởng` + `Trạm Kết Nối` trỏ đi đâu** — cả hai ngoài phạm vi v1, để nguyên là 2 link chết trên trang chủ lúc launch
- **`Button 1 · Active`** dùng `--shadow-inner-press` vốn thiết kế cho nút tối; trên nút trắng có thể quá nặng
- **`Checkbox` `29:2685` chưa gán effect style** — đang dùng giá trị thô
- **Chưa có spec animation** — chuyển động đang ở dạng ngụ ý (sticky S2, accordion, NVG mở, hover bento). Build tự quyết thì phải ghi lại
- **`Item Container` `273:358`** — 0 instance, vẫn mang tên trục `Property 1`/`Variant2`. Chưa duyệt xoá. Bỏ qua
- **3 frame nháp lẻ trên page `UI`** — `Grid Container` `634:2882`, `Footer` `634:3080`, `Baika logo Test` `563:3678`. Chưa duyệt xoá, đừng dựng theo
