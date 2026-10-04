# Quy trình build · kiểm tra · đẩy code · gắn domain — Trang Remote Office

**Trạng thái:** `DRAFT` — chờ Thắng duyệt · Lập 29/09/2026
Viết lại từ cách Claude đã dựng 7 trang dịch vụ + trang chủ (24–29/09), để **agent khác làm y như vậy** mà không cần đọc lịch sử chat.

---

## 1. Chuẩn bị

| Cần | Kiểm sao |
| --- | --- |
| Node **20.11+**, **pnpm** | `node -v` · `pnpm -v` |
| Cài thư viện | `pnpm install` |
| **Đọc được Figma** `YmcXg1lQqGVjQOFrVtdOgW` (Figma MCP hoặc Dev Mode) | Mở được node `913:4649`. **Không đọc được Figma thì dừng** — không dựng theo ảnh chụp hay trí nhớ |
| Đã đọc `/CLAUDE.md` + `SPEC-MASTER.md` | |

---

## 2. Dựng

1. **Tạo trang** `src/pages/remote-office.astro`, dùng `ServicePageLayout`. Xem `src/pages/ceo-blueprint.astro` làm mẫu — cùng cách sắp khối, cùng cách truyền dữ liệu.
2. **Khối dùng lại** (`spec-giao-dien.md` §1): chỉ truyền props. **Không** chép code component ra file mới.
3. **Khối mới** (R2 Chi phí · R4 Ước tính · R6 So sánh): mỗi khối một file trong `src/components/`, tên nói đúng việc (vd. `CostSection.astro`, `EstimatorSection.astro`, `CompareSection.astro`). Đầu mỗi file ghi comment: node Figma, ngày đọc, kích thước đã đo.
4. **Chữ và số**: chép **nguyên văn** từ `spec-noi-dung.md`. Chỗ `⚠️ Lx` / `⏸` chưa chốt → để trống với `<!-- CHỜ CHỐT: Lx -->`.
5. **Giá trị**: chỉ dùng token trong `src/styles/tokens.css`. Cần giá trị không có token → dừng, ghi vào Master §7, hỏi.
6. **Sửa component chung** (vì trang này cần) → bắt buộc chạy lại kiểm tra §4.3 cho **cả 7 trang + trang chủ**.

---

## 3. Commit và đẩy code — ai làm bước nào

| Bước | Ai |
| --- | --- |
| Viết code, sửa spec, build, kiểm tra | **Agent** |
| `git add` từng file + `git commit` | **Agent** — bằng danh tính có sẵn của repo |
| **`git push`** | **Thắng** — agent **không bao giờ** đụng vào mật khẩu / token GitHub |
| Xem bản preview trên Vercel, duyệt | **Thắng** |

### 3.1 Danh tính commit — lỗi đã xảy ra thật, đừng lặp lại

```bash
git config user.name     # phải ra: BAIKA
git config user.email    # phải ra: 310423793+baikavn-bot@users.noreply.github.com
git commit -m "..."      # ✅ dùng danh tính đã đặt
git -c user.email=... commit   # ⛔ KHÔNG BAO GIỜ — Vercel không nhận ra tác giả, có thể chặn build
```

Kiểm trước khi báo Thắng push: `git log --format='%an <%ae>' -1` phải ra `BAIKA <310423793+baikavn-bot@users.noreply.github.com>`.

### 3.2 Luật commit

- **Luật đồng bộ** (Master §4): code đổi chữ / số / hành vi → spec sửa trong **cùng commit**.
- `git status` → đọc → `git add` **từng file**. **Không** `git add -A` / `git add .` khi chưa đọc danh sách.
- **Không** commit `.env`, `Claude outputs/`, ảnh chụp, file tạm.
- **Không** `git push --force`. Không viết lại lịch sử đã đẩy.
- Lời commit ngắn, nói đổi gì: `Remote Office: khoi so sanh theo Figma 922:3801`.

### 3.3 Nhánh — **[suy luận — đề xuất, Thắng chốt]**

Trang mới, lớn, có JS → nên làm trên nhánh riêng `remote-office`, để Vercel dựng **bản preview** mà không đụng bản đang chạy. Thắng duyệt preview rồi mới gộp vào `main`. *(7 trang trước đây đẩy thẳng `main`.)*

### 3.3a Lệnh push khi có hai nhánh *(01/10 — Thắng hỏi "tưởng `git push` là xong")*

`git push` chỉ đẩy **nhánh đang đứng**. Agent luôn trả máy Thắng về `main` sau khi commit, nên nhánh `remote-office` không tự lên. **Báo Thắng đúng một lệnh**, đẩy cả hai nhánh:

```
git push origin main remote-office
```

Kiểm trước khi báo: `git branch -vv` trên máy Thắng — nhánh nào ghi `ahead N` là còn N commit chưa đẩy.

### 3.4 Sự cố hay gặp

| Triệu chứng | Nguyên nhân | Xử lý |
| --- | --- | --- |
| `Unable to create ... .git/index.lock: File exists` | Lệnh git trước bị ngắt, để lại file khoá | Xoá `.git/index.lock` (máy của Thắng có thể phải xin quyền xoá) |
| `Author identity unknown` | Máy chưa đặt danh tính cho repo | Đặt **cho repo này**: `git config user.name "BAIKA"` · `git config user.email "310423793+baikavn-bot@users.noreply.github.com"` |
| Vercel báo **Error** đỏ | Build lỗi | Bản cũ vẫn chạy, khách không bị ảnh hưởng. Đọc log, sửa, commit lại |

---

## 4. Kiểm tra — bắt buộc trước khi báo "xong"

### 4.1 Build và luật tĩnh

```bash
pnpm build                                   # phải sạch 0 lỗi (có astro check)
grep -rniE "#fff\b|#ffffff|:\s*white\b" src/ --exclude=tokens.css   # phải KHÔNG ra dòng nào
```

*(Loại `tokens.css` vì nó chứa ngoại lệ duy nhất được phép: màu bóng của Focus — xem `/CLAUDE.md` §4.)*

### 4.2 Nhìn bằng mắt — không kết luận bằng số đếm

Chụp trang `/remote-office` ở **1280** và **1920**, **mở ảnh ra nhìn**, đặt cạnh Figma. Bài học đã trả giá: một lượt sửa từng báo "0 lỗi" nhưng làm 8 ô trang chủ thành khối trắng đặc — chỉ nhìn mới thấy.

Ảnh ở trang dưới màn hình tải chậm (`loading="lazy"`) → cuộn tới rồi đợi ảnh tải xong mới chụp.

### 4.3 Không làm hỏng trang cũ

Chạy `pnpm preview` (mở ở `http://localhost:4321`), rồi chạy script dưới. Cần Playwright có trình duyệt Chromium; **không** thêm Playwright vào `package.json` của repo.

```js
// kiem-tra-trang.cjs — chạy: node kiem-tra-trang.cjs
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const trang = ['/', '/remote-ops', '/marketing', '/finance', '/legal-tax',
                 '/ai-os', '/advisory', '/ceo-blueprint', '/lien-he', '/remote-office'];
  for (const duong of trang) for (const w of [375, 768, 1280, 1920]) {
    const p = await b.newPage({ viewport: { width: w, height: 900 } });
    const loi = [];
    p.on('console', m => { if (m.type() === 'error') loi.push(m.text()); });
    p.on('pageerror', e => loi.push(e.message));
    await p.goto('http://localhost:4321' + duong, { waitUntil: 'networkidle' });
    const r = await p.evaluate(() => ({
      tran: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      h1: document.querySelectorAll('h1').length,
    }));
    console.log(duong, w, JSON.stringify(r), loi.length ? 'LOI ' + loi.join(' | ') : 'ok');
    await p.close();
  }
  await b.close();
})();
```

**Đạt khi:** mọi dòng `"tran":0` (không tràn ngang) · `"h1":1` (đúng một tiêu đề chính) · cuối dòng là `ok` (không lỗi JS).
*(Tablet/Mobile: khối dùng lại theo component có sẵn; 3 khối mới R2 · R4 · R6 theo `spec-giao-dien.md` §7 — chụp 375 và 768, đặt cạnh frame Figma để so.)*

### 4.4 Công cụ ước tính

Chạy đủ 11 ca trong `spec-noi-dung.md` §4.3 (theo luật chọn gói sếp đã duyệt). Thêm: tắt JavaScript → trang vẫn đọc được, hiện ca mẫu.

```bash
node --experimental-strip-types tools/kiem-tra-uoc-tinh.mts   # Node ≥ 22.6 · phải ra 11/11
```

Rồi kiểm trên trang thật (trình duyệt): mặc định tick Hành chính · Nhân sự · Chăm sóc khách hàng → 18.400.000 / Gói Vận hành · bỏ hết rồi tick 1 nhóm → Khởi đầu · 4 nhóm → Trọn gói · 5 người → nút `›` mờ, số vẫn tính · 1 người × 7 tr × 4 nhóm → câu «Khối lượng nhỏ» · bỏ tick hết → «0 nhóm việc» + câu «Chọn ít nhất một nhóm việc…» · mở/đóng danh sách tick bằng Enter, Tab vào từng ô, Space để tick. Ở 375 chọn 3 người × 25 tr × 2 nhóm (số dài nhất «≈1.057.500.000 đ/năm») — không tràn ô.

**Nút gửi ước tính (#6):** bấm nút → ô «Mô tả vấn đề» có đoạn ước tính đúng số đang hiện, con trỏ ở ô «Tên» · viết thêm một dòng, đổi số, bấm lại → đoạn ước tính thay mới, dòng tự viết còn nguyên · điền đủ form, **chặn lời gọi `/api/contact` và đọc nội dung gửi đi** (luật DEC-079 — không chỉ nhìn giao diện): trường `mota` phải chứa đoạn ước tính. Ở 375 chọn 3 người × 25 tr (số dài nhất «98.025.000 đ») — không tràn ô.

### 4.5 Bàn phím

Chỉ dùng phím Tab / Shift+Tab / Enter / Space / mũi tên: đi qua được **mọi** nút, stepper, ô chọn, ô form; luôn thấy Focus (quầng sáng); không bị kẹt.

---

## 5. Gắn domain `baika.website` *(viết lại 01/10 — Thắng chốt: gắn vào NHÁNH `remote-office` trước, giữ `noindex`)*

> **✅ Trạng thái 04/10 — XONG:** `baika.website` + `www.baika.website` đều chạy **[xác minh 04/10, tra DNS]** · 6 mục kiểm §5.6 **đạt** (Thắng kiểm 04/10) · Deployment Protection **đã tắt** để khách ngoài xem được (Thắng làm 04/10, xem 5.5) · dòng thử đã xoá · chuyển hướng 8 trang sang `www.baika.tech` (Thắng chốt A, 04/10 — xem 5.2). Quy ước `www`: địa chỉ chính **không** `www` (`CLAUDE.md` §2). Còn lại: ra mắt thật — 5.7.
>
> *Trạng thái 03/10 (lịch sử):* Nhân Hòa đã mở khoá — `baika.website` trỏ `216.198.79.1`, `www` chưa có DNS.
>
> *Trạng thái 02/10 (lịch sử):* Vercel đã thêm domain (Preview · nhánh `remote-office`) · ZoneDNS đã có bản ghi `A @ 216.198.79.1` · **CHẶN:** tên miền bị nhà đăng ký (Nhân Hòa) tạm khoá vì chưa xác minh chủ thể — nameserver đang là `ns1/ns2.verification-hold.suspended-domain.com` (tra ICANN Lookup 01/10). Đã gửi yêu cầu mở khoá. Mở xong → kiểm nameserver phải về ZoneDNS.

Mục tiêu: khách gõ `baika.website` → thấy trang Remote Office, thanh địa chỉ **giữ nguyên** `baika.website`.

### 5.1 Vì sao dùng `routes`, không dùng `rewrites` **[xác minh 01/10]**

Bản kế hoạch 29/09 định dùng `rewrites` cho đường dẫn `/`. **Không chạy được:** trên Vercel, file tĩnh có sẵn được ưu tiên trước `rewrites` — tài liệu Vercel: *"precedence is given to the filesystem prior to rewrites being applied"*. Repo có `dist/index.html` (trang chủ site mới) nên `/` luôn ra trang chủ, rewrite bị bỏ qua. Người của Vercel xác nhận cùng điều này ở github.com/vercel/vercel/discussions/5723.

→ Dùng `routes` trong `vercel.json`: các dòng `routes` được xét **theo thứ tự**, trước khi tìm file. **[✅ xác minh 02/10 — Thắng mở `/?thu-baika-website` trên preview `a39573b` → ra trang Remote Office, tức `routes` đè được `index.html`]**

### 5.2 `vercel.json` làm gì — đọc từ trên xuống

| # | Khi nào | Làm gì |
| --- | --- | --- |
| 1 | Ở `baika.website`, mở `/remote-office` | Chuyển về `/` (308) — một trang chỉ một địa chỉ |
| 2 | Ở `baika.website`, mở 8 trang còn lại (`/advisory` … `/lien-he`) | Chuyển sang `https://www.baika.tech/<trang>` (307 — tạm, đổi được). **Vì sao:** `baika.website` (nhánh `remote-office`) và `baika.tech` (nhánh `main`) cùng một repo, nên 8 trang này có sẵn ở `baika.website` — chuyển đi để mỗi trang chỉ một địa chỉ. Đích là `baika.tech` vì đó là nơi bản mới đang chạy; `baika.vn` hiện **vẫn là site cũ, không thuộc repo này** (Thắng chốt 04/10). Trỏ thẳng `www.baika.tech` vì `baika.tech` chuyển về `www` — tránh chuyển hai lần. **⚠️ Ngày `baika.vn` trỏ sang repo này: đổi dòng này về `https://baika.vn/$1`** |
| 3 | Ở `baika.website`, mở `/` | **Mở trang Remote Office**, thanh địa chỉ không đổi |
| ~~4~~ | ~~`/?thu-baika-website`~~ | Dòng kiểm thử cho 5.3 — **đã xoá 04/10** sau khi domain chạy |

Không đụng: `/api/*` (form gửi mail), `/_astro/*`, `/img/*`, `favicon.svg` — vẫn chạy ở `baika.website` như ở mọi domain.
`www.baika.website` → chuyển về `baika.website` bằng cài đặt Domains của Vercel (bước 5.4), không viết trong `vercel.json`.

### 5.3 Kiểm cơ chế TRƯỚC khi có domain *(Agent soạn, Thắng mở)*

Sau khi push nhánh `remote-office`, mở bản preview mới nhất của nhánh, **thêm `/?thu-baika-website` vào cuối**:

- Ra trang **Remote Office** → `routes` đè được file tĩnh → dòng 3 sẽ chạy khi có domain. Đi tiếp 5.4.
- Ra **trang chủ** (không phải Remote Office) → `routes` cũng thua file tĩnh → **dừng**, báo Agent. Phương án dự phòng: Routing Middleware (một file chạy trước mọi request) — phức tạp hơn, chưa làm.

### 5.4 Thắng làm trên Vercel + nơi mua tên miền *(Agent không làm — cần đăng nhập của anh)*

1. Vercel → project `bk-web-update-sep-2026` → **Settings → Domains → Add Domain** → gõ `baika.website`. Vercel hỏi thêm `www.baika.website` → đồng ý, chọn chuyển `www` về `baika.website`.
2. Bấm **Edit** ở dòng `baika.website` → **Connect to an environment** chọn **Preview** → ô **Git Branch** gõ `remote-office` → Save. Làm tương tự cho `www.baika.website` nếu Vercel không tự theo.
3. Vercel hiện bản ghi DNS cần khai (thường: **A** cho `baika.website`, **CNAME** cho `www`). **Chép đúng giá trị Vercel hiện** — không chép số từ tài liệu này.
4. Vào trang quản lý tên miền nơi anh mua `baika.website` → mục DNS → thêm 2 bản ghi đó. Có bản ghi A / CNAME cũ cho cùng tên thì **xoá bản cũ** (trùng là Vercel báo "Invalid Configuration").
5. Chờ Vercel báo dòng domain **Valid Configuration** (vài phút tới vài giờ).

### 5.5 ⚠️ Hai điều xảy ra do gắn vào NHÁNH (Preview), không phải bản chính **[xác minh — tài liệu Vercel 01/10 · 02/10: 3 biến gửi mail đã `true` trên Preview]**

1. **Khoá đăng nhập.** Mặc định Vercel bật *Deployment Protection — Standard Protection*: *"protects all domains except production domains"*. `baika.website` gắn vào nhánh là domain Preview → **người chưa đăng nhập Vercel sẽ thấy trang bắt đăng nhập**, không thấy Remote Office. Hợp với giai đoạn duyệt nội bộ; muốn người ngoài (sếp) xem thì: Settings → **Deployment Protection** → tắt cho Preview, hoặc gộp `main` và chuyển domain sang Production. **[✅ 04/10: Thắng tắt *Vercel Authentication* (Require Log In) — khách ngoài đã xem được, kiểm bằng cửa sổ ẩn danh. Hệ quả: mọi bản preview của mọi nhánh đều xem được nếu có link. Bật lại: cùng trang → Require Log In → Save]**
2. **Biến môi trường gửi mail.** Form gửi mail cần 3 biến (`RESEND_API_KEY` · `CONTACT_TO` · `CONTACT_FROM`) **bật cho môi trường Preview**. Kiểm: mở `https://baika.website/api/health` → cả ba `true`.

### 5.6 Kiểm sau khi domain chạy

- `baika.website` → trang Remote Office, thanh địa chỉ vẫn `baika.website`
- `www.baika.website` → chuyển về `baika.website`
- `baika.website/remote-office` → chuyển về `baika.website`
- `baika.website/advisory` → chuyển sang `www.baika.tech/advisory` *(04/10: lúc kiểm còn trỏ `baika.vn` — đã đổi, kiểm lại sau khi push)*
- Bấm «Gửi yêu cầu theo ước tính này» → điền form → gửi → mail về hộp thư BAIKA
- Xem mã nguồn trang: `<link rel="canonical" href="https://baika.website/">` + `noindex` còn đó
- Xong → **xoá dòng 4 (kiểm thử)** trong `vercel.json` — ✅ **đạt cả 6 mục, 04/10; đã xoá dòng thử**

### 5.7 Khi ra mắt thật *(chưa làm — #5 #14 sếp đã chốt 02/10; còn chờ tên miền mở khoá + quyết định gỡ `noindex`)*

Gộp `remote-office` vào `main` **bằng Pull Request** (`main` đã khoá) → Domains: chuyển `baika.website` từ Preview sang **Production** → gỡ `noindex` → ô bento Remote Office trên trang chủ đã trỏ `https://baika.website` sẵn. ⚠️ Vercel gói **Hobby** chỉ cho *"non-commercial, personal use"* — trang bán dịch vụ cần gói **Pro** trước khi ra mắt (sếp quyết).
