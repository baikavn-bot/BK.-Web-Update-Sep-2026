# baika-website

Website giới thiệu của **BAIKA**, công ty tư vấn và kiến tạo hệ thống vận hành cho doanh nghiệp.

| Trang | Địa chỉ | Trạng thái |
| --- | --- | --- |
| Trang chủ · 7 trang dịch vụ · Liên hệ | `baika.vn` (về sau) · hiện chạy ở `baika.tech` | Đã chạy |
| Landing Remote Office | `baika.website` | Chạy bản thử (`noindex`, nhánh `remote-office`) — chờ sếp duyệt ra mắt |

Mọi trang và landing **chung một source** này, dù chạy ở tên miền nào.

**Người mới / agent mới — đọc theo thứ tự:**

1. [`TRANG-THAI.md`](TRANG-THAI.md) — đang ở đâu, cái gì kẹt, làm gì tiếp.
2. [`CONTRIBUTING.md`](CONTRIBUTING.md) — quy trình nhánh, commit, Pull Request, cần quyền gì.
3. [`CLAUDE.md`](CLAUDE.md) — luật trước khi sửa code (token, Figma, bảo mật).
4. [`docs/viec-cho.md`](docs/viec-cho.md) — việc đang chờ, khi nào nhắc.
5. [`docs/README.md`](docs/README.md) — mục lục tài liệu, nhật ký quyết định `DEC-…`.

Báo lỗ hổng bảo mật: [`SECURITY.md`](SECURITY.md).

> ⚠️ Trang Remote Office (`src/pages/remote-office.astro`, `vercel.json`…) **chỉ có trên nhánh `remote-office`** cho tới ngày ra mắt. Tài liệu thì có ở cả hai nhánh.

---

## Ai làm gì

Công ty **không có lập trình viên**. Code do agent (Claude) viết. **Thắng Trương** (designer) duyệt và tự chạy `git push`. Vercel tự dựng lại site sau mỗi lần push.

---

## Chạy trên máy

Cần **Node 20.11** trở lên (xem `.nvmrc`) và **pnpm 9**.

```bash
pnpm install    # cài lần đầu
pnpm dev        # mở http://localhost:4321
```

Ở `pnpm dev`, form Liên hệ **không gửi được mail**. Thư mục `api/` chỉ chạy trên Vercel, đó là bình thường.

## Dựng và kiểm tra

```bash
pnpm build         # kiểm tra kiểu + dựng ra dist/ — phải 0 lỗi
pnpm kiem-tra      # luật màu, #FFFFFF, khoá bí mật — 1 giây
pnpm preview       # xem bản đã dựng
```

Mỗi lần push, GitHub **tự chạy** `pnpm build` + `pnpm kiem-tra` (tab **Actions** của repo). ✓ xanh mới gộp.

Các bài kiểm tra cần trình duyệt (tràn ngang, ảnh chụp, so ảnh trước/sau): [`tools/kiem-tra/README.md`](tools/kiem-tra/README.md).

---

## Nền tảng

Astro 4 (site tĩnh) · TypeScript · CSS Variables · pnpm · GitHub · Vercel.

- **Token** (màu, chữ, khoảng cách) sinh từ Figma, nằm ở `src/styles/tokens.css`. Không tự chế giá trị mới.
- **Figma** `YmcXg1lQqGVjQOFrVtdOgW` là nguồn chân lý về giao diện. Code lệch Figma thì Figma thắng.
- **Form Liên hệ** gửi mail qua Resend. Cần 3 biến môi trường trên Vercel (tên biến: `.env.example`). Kiểm tra nhanh bằng cách mở `/api/health`.

## Thư mục

| Thư mục / file | Chứa gì |
| --- | --- |
| `src/pages/` | Mỗi file một trang |
| `src/components/` | Các khối giao diện, mỗi khối một file `.astro` |
| `src/styles/` | Token + CSS dùng chung |
| `src/lib/` | Phần tính toán (công cụ ước tính Remote Office) |
| `api/` | Hàm gửi mail và trang tự kiểm, chạy trên Vercel |
| `docs/` | Spec dựng từng trang + nhật ký quyết định. Mục lục: [`docs/README.md`](docs/README.md) |
| `tools/` | Script kiểm tra, không nằm trong site |
| `.github/` | Kiểm tra tự động (CI), Dependabot, mẫu Pull Request |
| `vercel.json` | Luật tên miền `baika.website` |

## Lịch sử

[`CHANGELOG.md`](CHANGELOG.md)
