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

Chạy đủ 9 ca trong `spec-noi-dung.md` §4.3 (theo luật chọn gói sếp đã duyệt). Thêm: tắt JavaScript → trang vẫn đọc được, hiện ca mẫu.

```bash
node --experimental-strip-types tools/kiem-tra-uoc-tinh.mts   # Node ≥ 22.6 · phải ra 9/9
```

Rồi kiểm trên trang thật (trình duyệt): mặc định ra 18.400.000 · chọn 4 nhóm → Trọn gói + dòng «nâng vì…» · 5 người → Báo giá riêng, nút `›` mờ · 1 người × 7 tr × 4 nhóm → câu «Khối lượng nhỏ». Ở 375 chọn 3 người × 25 tr (số dài nhất «98.025.000 đ») — không tràn ô.

### 4.5 Bàn phím

Chỉ dùng phím Tab / Shift+Tab / Enter / Space / mũi tên: đi qua được **mọi** nút, stepper, ô chọn, ô form; luôn thấy Focus (quầng sáng); không bị kẹt.

---

## 5. Gắn domain `baika.website` **[CHƯA THỬ — kiến thức chung về Vercel, phải thử trên bản preview trước]**

Mục tiêu: khách gõ `baika.website` → thấy trang Remote Office, thanh địa chỉ **giữ nguyên** `baika.website`.

1. **Thắng** (có quyền Vercel): Project → **Settings → Domains** → thêm `baika.website`. Vercel hiện bản ghi DNS cần khai → khai đúng như vậy ở nơi mua tên miền. *Agent không làm bước này.*
2. **Agent**: thêm `vercel.json` ở gốc repo:

```json
{
  "rewrites": [
    {
      "source": "/",
      "has": [{ "type": "host", "value": "baika.website" }],
      "destination": "/remote-office"
    }
  ]
}
```

3. **Chặn các trang khác mở trên domain mới** (vd. `baika.website/advisory`) → thêm `redirects` đưa về `baika.vn` cùng đường dẫn. Cú pháp cụ thể: kiểm tài liệu Vercel ở thời điểm làm.
4. **Không để Google tính trùng nội dung**: trang `/remote-office` đặt thẻ `<link rel="canonical" href="https://baika.website/">`.
5. **Kiểm tra** sau khi DNS có hiệu lực: mở `baika.website` → đúng trang, thanh địa chỉ vẫn `baika.website` · mở `baika.website/advisory` → chuyển về `baika.vn/advisory` · ô Remote Office trên trang chủ `baika.vn` → mở `baika.website` trong cùng tab.

⚠️ Rewrite theo domain **không thử được bằng link preview** của Vercel (link preview có domain riêng). Thử bằng cách mở thẳng `baika.vn/remote-office` trên preview trước; phần domain chỉ kiểm được sau khi gắn thật.
