<!-- CHÉP NGUYÊN VĂN — đầu file do agent thêm 03/10/2026, phần dưới đường kẻ giữ y bản gốc. md5 bản gốc: f79e0cea58c16d7aa17b5d9c32c19e5e -->

> 📦 **Bản chép nguyên văn** từ project Claude «BaiKa.vn», file `claude/van-hanh-sau-launch.md` (bản lưu 23/09/2026). Chuyển vào repo ngày 03/10/2026 — **từ nay bản này là bản chính.**
> Sửa **ở đây**, không sửa bản trong project Claude nữa.
> Khi file này lệch với nguồn khác, thứ tự tin: **Figma** → `CLAUDE.md` / `TRANG-THAI.md` / `docs/<trang>/` → file này.
> Đường dẫn `claude/<tên>.md` bên dưới là file trong project Claude. File nào đã chuyển thì nay nằm ở `docs/_chung/<tên>.md` — tra bảng ở `docs/README.md`.
>
> **⚠️ Chỗ đã lỗi thời — đọc trước khi tin nội dung bên dưới:**
> - Bản `CLAUDE.md` mẫu bên trong là **bản nháp 22/09**. Bản thật ở gốc repo — bản đó thắng.
> - «CSS Modules» trong file này → thực tế là `<style>` trong từng `.astro` (`DEC-041`).
> - Các «hàng rào» đề xuất (bảo vệ nhánh `main`, bộ ảnh chụp chuẩn) — trạng thái thật xem `TRANG-THAI.md`. Kiểm tra tự động đã có từ 03/10 (`.github/workflows/`).

---

# Vận hành `baika.vn` sau khi lên — không có dev

*22/09/2026 · Luồng E · Kèm `DEC-017`*

Tài liệu này trả lời một câu: **không có dev thì sửa bug, thêm bớt, cập nhật nội dung bằng cách nào.**

---

## 0. Bối cảnh đã chốt

| | |
| --- | --- |
| Nội dung site | **Cố định.** Không có blog, không có tin tức, không có gì cập nhật thường xuyên |
| Khi cần đổi | Đổi cả thiết kế, không phải sửa vài chữ *(Thắng xác nhận 22/09)* |
| Người dựng | `/website-production-agent` |
| Loại dự án | **REBUILD hoàn toàn** — chỉ kế thừa domain `baika.vn` |
| Nền tảng | Astro tĩnh trên Vercel *(`DEC-001`)* |

**Điều này làm thay đổi đánh giá rủi ro.** Trước đây Agent lo rằng Astro không có CMS thì không ai cập nhật nội dung được. Nếu nội dung **vốn không cập nhật**, mối lo đó biến mất — và Astro tĩnh trở thành lựa chọn **đúng nhất**, không phải lựa chọn rủi ro:

| | Astro tĩnh | CMS / no-code |
| --- | --- | --- |
| Cần ai bảo trì định kỳ | ❌ Không | ✅ Có — cập nhật plugin, gia hạn, đổi API |
| Hỏng khi lâu không đụng tới | ❌ Không — HTML tĩnh chạy mãi | ⚠️ Có thể |
| Bề mặt tấn công | Gần như không — không server, không database | Có |
| Chi phí hàng tháng | ~0 | Có |

> Một site tĩnh **không cần ai chăm cũng sống**. Đó chính là thứ một công ty không có dev cần.

---

## 1. Cái duy nhất phải có — nếu thiếu thì mọi thứ khác vô nghĩa

Agent không sống trong công ty. Thứ **sống** giữa các phiên là **tài khoản**, không phải trí nhớ của Agent.

> ⚠️ **Tất cả những thứ dưới đây CHƯA TỒN TẠI** *(xác nhận 23/09)*. Chúng sẽ được tạo mới ở đúng phase. Không giả định có sẵn repository, deployment, Vercel project hay production pipeline.

| Thứ | Phải thuộc về ai | Vì sao |
| --- | --- | --- |
| **Tài khoản GitHub** chứa mã nguồn | **BAIKA**, Thắng có quyền admin | Đây là toàn bộ website. Nếu nó nằm trong tài khoản cá nhân của một người rồi người đó nghỉ, **site không lấy lại được** |
| **Dự án Vercel** nối với repo đó | **BAIKA**, Thắng có quyền admin | Nơi site thật sự chạy |
| **Tên miền `baika.vn` + quyền DNS** | **BAIKA** | Mất quyền tên miền là mất site, dù mã nguồn còn nguyên |

*(Thuật ngữ: **repo** = kho chứa mã nguồn trên GitHub. **DNS** = bảng chỉ đường trỏ `baika.vn` tới nơi site đang chạy.)*

**Đây là điểm hỏng duy nhất thật sự.** Mọi thứ khác trong tài liệu này đều sửa được. Mất tài khoản thì không.

---

## 2. Cơ chế: repo tự mang theo hướng dẫn của nó

Mỗi phiên Claude mới là một tờ giấy trắng — không nhớ gì phiên trước. Cách bù: **để hướng dẫn ngay trong repo**.

Tạo file **`CLAUDE.md`** ở thư mục gốc của repo. Claude Code đọc file này **tự động** mỗi khi mở dự án. Nội dung cần có:

```markdown
# baika.vn

Website marketing của BAIKA — 7 trang dịch vụ + trang chủ + liên hệ.
Nội dung CỐ ĐỊNH. Không có CMS, không có blog.

Đây là REBUILD hoàn toàn. Repo này là source of truth duy nhất cho code.
Website baika.vn phiên bản trước KHÔNG phải baseline — không migrate,
không reuse, không inherit gì từ nó.

## Stack
Astro + TypeScript · CSS Modules + CSS Variables · pnpm · Vercel

## Chạy
pnpm install · pnpm dev · pnpm build

## Luật không được phá
- Không hardcode màu — tất cả qua CSS variable
- 21 biến màu trụ phải có prefix tên nhóm (--tuvan-dam, không phải --dam)
- Footer + NVG bar giống hệt mọi trang, không nhuộm màu trang
- Mỗi trang đúng MỘT <h1>, là chữ thật (SVG textPath), không phải ảnh
- Không dùng <iframe> để bọc nội dung trang
- Quầng sáng trắng = trạng thái Focus, chỉ Focus
- Disabled = đổi sang --gray-700, KHÔNG giảm opacity

## Nguồn sự thật
- Thiết kế: Figma YmcXg1lQqGVjQOFrVtdOgW, page UI
- Spec bàn giao: claude/ban-giao-ky-thuat.md (trong project BaiKa)
- Nhật ký quyết định: claude/website-agent-decisions.md

## Quy trình sửa
Không push thẳng lên main. Tạo nhánh → Vercel tự dựng bản Preview →
Thắng xem link Preview → duyệt thì mới gộp vào main.
```

**Đây là thứ đáng giá nhất trong cả tài liệu này.** Nó biến "một agent lạ" thành "một agent đã biết dự án" ngay từ câu đầu tiên.

---

## 3. Hàng rào an toàn — để Agent không phá được bản đang chạy

| Hàng rào | Làm gì | Vì sao cần |
| --- | --- | --- |
| **Không push thẳng `main`** | Mọi thay đổi đi qua một nhánh riêng | `main` là bản đang chạy thật. Sửa thẳng lên đó là sửa trực tiếp lên site khách đang xem |
| **Vercel Preview** | Mỗi nhánh tự có một link riêng để xem thử | Thắng **nhìn thấy** thay đổi trước khi nó lên thật. Không phải tin lời Agent |
| **Ảnh chụp chuẩn** *(visual regression)* | Lưu ảnh chụp 9 trang lúc launch. Mỗi lần sửa, chụp lại và so | Bắt được kiểu lỗi "sửa chỗ A làm vỡ chỗ B" — loại lỗi con người hay bỏ sót nhất |
| **Build gãy khi sai hằng số** | Khai báo trong code: 3 vấn đề · 6 kết quả · 4 FAQ · đúng 1 gói `ĐỀ XUẤT` | Sai thì **không build được**, không lên tới production |

*(Thuật ngữ: **Preview** = một bản sao của site chạy ở địa chỉ tạm, chỉ để xem thử. **main** = nhánh chính, là bản đang phục vụ khách.)*

---

## 4. Làm thế nào với từng loại việc

### 4.1 · Sửa bug

| Bước | Làm gì |
| --- | --- |
| 1 | Thắng mô tả **triệu chứng**, không phải nguyên nhân: *"trang Tài chính trên điện thoại, khối gói bị tràn ra ngoài màn hình"* + link trang + ảnh chụp nếu có |
| 2 | Agent mở repo, đọc `CLAUDE.md`, **tái hiện lỗi** trước khi sửa |
| 3 | Agent sửa trên nhánh riêng, đẩy lên, Vercel ra link Preview |
| 4 | Thắng mở link Preview, xem đúng chỗ đó **và** hai ba chỗ khác |
| 5 | Duyệt → gộp vào `main` → tự lên production |

⚠️ **Luật:** Agent **không được báo "đã sửa xong" nếu chưa chạy thử**. Đọc code rồi đoán là hỏng.

### 4.2 · Đổi vài chữ, đổi số điện thoại, đổi địa chỉ

Cùng quy trình 4.1, chỉ ngắn hơn. Vẫn qua Preview — vì một dòng sửa sai chỗ cũng làm vỡ layout.

### 4.3 · Thêm / bớt một khối, một trang

**Thiết kế trước, dựng sau.** Đây là luật, không phải khuyến nghị.

| Bước | Làm gì |
| --- | --- |
| 1 | Thắng vẽ trong Figma, dùng token + component có sẵn |
| 2 | Cập nhật `claude/ban-giao-ky-thuat.md` |
| 3 | Mới gọi Agent dựng |

Đi tắt bước 1–2 thì Agent sẽ **tự chế** layout, màu, khoảng cách — và nó sẽ lệch với 8 trang còn lại. Không ai phát hiện ngay, nhưng sau vài lần thì site mất tính nhất quán.

### 4.4 · Đổi cả thiết kế

Không phải "sửa" — đây là **dự án mới**. Chạy lại Discovery, khoá spec mới, rồi mới dựng. Đừng cố vá dần từ bản cũ sang.

---

## 5. Ba việc Thắng phải tự làm được, không cần ai

Đây là mức tối thiểu để không bị kẹt.

| # | Việc | Cách |
| --- | --- | --- |
| 1 | **Biết site còn sống không** | Mở `baika.vn`. Mở bảng điều khiển Vercel xem lần deploy gần nhất thành công hay lỗi |
| 2 | 🚨 **Quay về bản trước** | Vercel → chọn bản deploy cũ → **Promote to Production**. Một cú bấm, không cần code, không cần ai |
| 3 | **Đọc link Preview và nói có/không** | Không cần hiểu code — chỉ cần nhìn và đánh giá đúng/sai |

**Việc số 2 là phanh khẩn cấp.** Kể cả khi mọi thứ khác hỏng — Agent không gọi được, không ai biết code — Thắng vẫn đưa site về trạng thái tốt gần nhất trong 30 giây. Hãy **tập thử một lần ngay sau khi launch**, đừng đợi lúc cần mới học.

---

## 6. Rủi ro còn lại — biết trước thì không bất ngờ

| Rủi ro | Mức | Xử lý |
| --- | --- | --- |
| **Không gọi được Agent** *(hết hạn tài khoản, dịch vụ gián đoạn)* | 🟡 Thấp | Site **vẫn chạy bình thường** — nó là HTML tĩnh. Chỉ là không sửa được cho tới khi gọi lại được. Với site nội dung cố định, "đóng băng" không phải sự cố |
| **Tài khoản GitHub/Vercel nằm sai người** | 🔴 **Cao** | Xem mục 1. Phải xử lý **trước khi launch**, không phải sau |
| **Tên miền hết hạn** | 🔴 Cao | Đặt tự động gia hạn + nhắc lịch. Đây là thứ duy nhất làm site **chết hẳn** |
| **Thư viện cũ dần** | 🟢 Rất thấp | Site đã build ra HTML tĩnh — thư viện cũ không ảnh hưởng bản đang chạy. Chỉ cần nâng khi nào muốn sửa code |
| **Agent sửa sai mà không ai phát hiện** | 🟠 Trung bình | Hàng rào mục 3: Preview + ảnh chụp chuẩn + build gãy khi sai hằng số |

---

## 7. Việc phải làm trước khi launch

- [ ] Tạo tài khoản **GitHub của BAIKA**, Thắng có quyền admin
- [ ] Tạo **dự án Vercel của BAIKA**, nối với repo, Thắng có quyền admin
- [ ] Xác nhận **tên miền `baika.vn` thuộc quyền BAIKA**, bật tự động gia hạn
- [ ] Agent viết **`CLAUDE.md`** ở gốc repo *(mục 2)*
- [ ] Bật **bảo vệ nhánh `main`** — không cho push thẳng
- [ ] Lưu **bộ ảnh chụp chuẩn 9 trang** ở 3 breakpoint làm mốc so sánh
- [ ] Thắng **tập một lần** thao tác quay về bản trước trên Vercel *(mục 5, việc 2)*
