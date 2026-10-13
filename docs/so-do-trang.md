# Sơ đồ trang — mọi đường dẫn của site

*Lập 13/10/2026 từ `src/pages/` **[xác minh]** · vai trò: SITEMAP (bảng ánh xạ: `docs/README.md`). Bản kiến trúc thông tin cũ (26/08): `docs/_chung/sitemap.md` — đã lỗi thời.*

Mỗi file trong `src/pages/` = một đường dẫn. Thêm trang → thêm dòng ở đây cùng commit.

## 1. Trang trên nhánh `main` (đang chạy ở `www.baika.tech`)

| Đường dẫn | Trang | Trụ (bộ màu) | File |
| --- | --- | --- | --- |
| `/` | Trang chủ — lưới bento dẫn vào các trụ | — | `index.astro` |
| `/advisory` | Tư vấn doanh nghiệp | `tu-van` | `advisory.astro` |
| `/remote-ops` | Hệ thống hóa vận hành | `van-hanh` | `remote-ops.astro` |
| `/marketing` | Marketing & Tăng trưởng | `marketing` | `marketing.astro` |
| `/finance` | Tài chính & Dòng tiền | `tai-chinh` | `finance.astro` |
| `/legal-tax` | Pháp lý & Thuế | `phap-ly` | `legal-tax.astro` |
| `/ai-os` | Công nghệ & AI ứng dụng | `cong-nghe-ai` | `ai-os.astro` |
| `/ceo-blueprint` | Đào tạo CEO | `dao-tao-ceo` | `ceo-blueprint.astro` |
| `/lien-he` | Liên hệ — form + FAQ | — | `lien-he.astro` |
| `/ceo-blueprint/assessment` | Công cụ: Business Blueprint Assessment | `dao-tao-ceo` | `ceo-blueprint/assessment.astro` |
| `/finance/assessment` | Công cụ: Finance Readiness Assessment | `tai-chinh` | `finance/assessment.astro` |
| `/remote-ops/survey` | Công cụ: Khảo sát Vận hành Doanh nghiệp | `van-hanh` | `remote-ops/survey.astro` |
| `/ai-os/diagnosis` | Công cụ: Khảo sát cơ hội ứng dụng AI | `cong-nghe-ai` | `ai-os/diagnosis.astro` |
| `/marketing/diagnostic` | Công cụ: Chẩn đoán thương hiệu | `marketing` | `marketing/diagnostic.astro` |
| `/chinh-sach-bao-mat` | Chính sách bảo mật (bản Kapi duyệt 05/10) | — | `chinh-sach-bao-mat.astro` |
| `/sap-ra-mat` | «Sắp ra mắt» — đích tạm của mọi chỗ chưa có trang | — | `sap-ra-mat.astro` |
| `/sitemap.xml` | Danh sách trang cho máy tìm kiếm (tự sinh lúc build, bỏ `/sap-ra-mat`) | — | `sitemap.xml.ts` |
| `/robots.txt` | Luật cho máy tìm kiếm (chặn `/api/`) | — | `public/robots.txt` |

Slug 7 trang dịch vụ + 5 công cụ **giữ y site cũ** (`DEC-019`) để link cũ không gãy.

## 2. Trang chỉ có trên nhánh `remote-office` (tới ngày ra mắt)

| Đường dẫn | Trang | Ghi chú |
| --- | --- | --- |
| `baika.website/` | Landing Remote Office (`remote-office.astro`, trụ `remote-office`) | `noindex`. Spec: `docs/remote-office/` |

Luật tên miền `baika.website` (trong `vercel.json`, chỉ trên nhánh `remote-office`):

| Gõ vào | Kết quả |
| --- | --- |
| `baika.website/` | Mở trang Remote Office |
| `baika.website/remote-office` | 308 → `baika.website/` |
| `baika.website/<8 trang chính>` | 307 → `www.baika.tech/<trang>` |
| `baika.website/<trang khác>` (chính sách, sắp ra mắt, công cụ…) | Mở thẳng từ bản dựng của nhánh này |

Chi tiết + vì sao dùng `routes`: `docs/remote-office/quy-trinh-build.md` §5.

## 3. Hàm chạy trên máy chủ (không phải trang)

| Đường dẫn | Làm gì |
| --- | --- |
| `/api/contact` | Nhận form Liên hệ → gửi mail |
| `/api/chan-doan` | Nhận kết quả 5 công cụ chẩn đoán → gửi mail |
| `/api/health` | Cho biết 3 biến môi trường của form đã đặt chưa (CÓ / KHÔNG) |

Chi tiết: `docs/ky-thuat.md` §3.

## 4. Đường dẫn của site cũ — chuyển hướng ngày trỏ `baika.vn`

Không chép lại ở đây. Bảng đầy đủ (176 địa chỉ đã rà, quyết định từng nhóm): `docs/chuyen-baika-vn.md` §4.

## 5. Điều hướng

- **Header** (`SiteHeader.astro`): desktop/tablet — Trạm ý tưởng · Trạm kết nối · Dịch vụ (bảng 8 mục, Remote Office đứng đầu) · Liên hệ. Mobile — nút 3 gạch. Hai mục Trạm dẫn về `/sap-ra-mat`.
- **Trang chủ:** 2 ô bento Trạm dẫn về `/sap-ra-mat`; ô Remote Office dẫn sang `baika.website`.
- **Chân trang:** link Chính sách bảo mật.
