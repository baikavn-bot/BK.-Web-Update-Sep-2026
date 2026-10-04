> 📦 **Bản chép nguyên văn** từ project Claude (`claude/dec-102-don-no-va-trang-ceo.md`) ngày 04/10/2026. Chỗ đã lỗi thời:
> - Dòng «Soạn sẵn để dán vào quyển 2» — không dán nữa; file này là nơi chính của DEC-102.
> - «Còn treo» mục 2 trỏ `claude/viec-cho-nhac.md` → nay là `docs/viec-cho.md` (mục 1).
> - Commit `6828c48` → `e881a85` là mã trên máy Thắng ngày 26/09.

# DEC-102 · Dọn nợ dùng chung + dựng trang Đào tạo CEO

*26/09/2026 · Luồng E · Commit `6828c48` → `8c3490f` → `e881a85` (máy Thắng) · **[xác minh: so ảnh pixel trước/sau + so với ảnh Figma]***

> Soạn sẵn để dán vào `claude/website-agent-decisions-2.md` (quyển 2 đang dừng ở DEC-100).
> ⚠️ Code có nhắc `DEC-101` (form 2 cấu hình, 25/09) nhưng quyển 2 chưa có mục đó — nên mục này đánh số 102.

## Quyết định (Thắng chốt)

| # | Việc | Làm gì | Vì sao |
| --- | --- | --- | --- |
| 1 | Tiêu đề section | Một class `.tieu-de-section` trong `global.css`, 7 section dùng chung | Figma đã gom sẵn: 37 tiêu đề cùng text style `H-1` + biến `--gray-50`. Code trước đây chép 5 dòng vào 7 file |
| 1b | **Chữ cong Display 1 ở Hero** | Figma: tạo **bộ biến `Trụ` 7 mode** (`--tru-dam` · `--tru-trung` · `--tru-nhat` alias sang `Colors/Page/<trụ>/…`, thêm `--tru-dam-0` = màu đậm alpha 0) · mỗi khung trang gán mode trụ của mình · **1 paint style `Hero/Display 1`** gán cho 7 chữ | Một paint style chỉ chứa 1 bộ màu → cần mode để 1 style tự đổi màu theo trang. Đúng cơ chế code đang dùng (`data-pillar`). Loại: 7 style riêng (sửa 7 lần), giữ nguyên (Figma sửa tay 7 chữ) |
| 2 | Mái vòm Planet | Một component `PlanetDome` (`huong="len"` Hero · `"xuong"` Nhận được gì), **lấy thông số bát "Bạn sẽ nhận được gì"** | Trước đây 2 bản CSS chép tay, lệch nhau |
| 3 | Số thứ tự mờ | Một component `SoMo`. Figma: 25 số "BAIKA sẽ làm gì" đổi sang **Light + đúng gradient + effect style `LayerBlur/Progessive/24`** của số trên thẻ dịch vụ | Thắng chốt chuẩn hoá hẳn — mọi số to mờ giống hệt nhau |
| 4 | Figma "Bạn sẽ nhận được gì" | Thay 4 khung `Solution Center` → `Solution planet` (Pháp lý, Vận hành, CEO, AI) | |
| 5 | Trang `/ceo-blueprint` | Dựng đủ 7 section; thẻ "Năng lực CEO" ở Tư vấn đã trỏ sang | Ca nặng nhất (12 thẻ) — thử template trước |
| 6 | Quầng sáng "BAIKA sẽ làm gì" trang Tư vấn | Thắng: to hơn là **vẽ lệch**. Figma đã đồng bộ về 1000×1490 ở cả desktop/tablet/mobile; code bỏ biến thể `lon` | Một cỡ cho mọi trang (trừ AI — xử lý khi dựng) |
| 7 | 3 màu lạc token | Menu header `Frame 74` → paint style `Liner/Stroke/Black` (đã gán style ở cả 3 biến thể). Chữ Button 1 → `--gray-950`. Code: biến chung `--liner-stroke-black` trong `global.css`, dùng ở menu + nền gói dịch vụ | Hết màu lạc token trong CSS |

## Phát hiện khi dựng trang CEO — đã sửa

**Quầng sáng "BAIKA sẽ làm gì" neo sai.** Figma neo **ĐỈNH** section (constraints MIN/MIN), đỉnh khung bao −423.175 ở mọi trang. Code cũ neo đáy → trang cao (CEO 1713) quầng tụt xuống nửa dưới. Mobile đặt khác (khung bao −684.88, −743) — trang khác dùng cùng độ dời **[suy luận]**.

**Mask cắt mất quầng sáng ngoài khung.** Thêm `mask-clip: no-clip` → quầng dưới đáy bát sáng lại, gần Figma hơn (64 → 74, Figma 77). Safari có thể chưa hỗ trợ — khi đó quay về như cũ, không vỡ.

**Figma nội suy gradient KHÔNG nhân trước alpha** (đã thử): điểm dừng trong suốt vẫn nhuộm màu dải giữa. Vì vậy `--tru-dam-0` phải mang đúng màu đậm của từng trụ, không dùng "trong suốt" chung được.

## Còn treo — cần Thắng

1. **Nội dung gói 1 & 2 trang CEO:** chờ ảnh Thắng gửi → cập nhật Figma → cập nhật code.
2. **Blueprint Assessment:** xem `claude/viec-cho-nhac.md` — nhắc sau khi dựng xong các trang hiện có.
3. **Trang AI:** quầng sáng cỡ riêng (1309×1978, xoay −135) + `Process Card` chưa có code; số trong `Process Card` nên theo cùng style `SoMo`.
4. `--tru-dam-0` trong Figma là giá trị chép (không alias được vì cần alpha 0) → đổi màu `--dam` của trụ nào thì đổi cả biến này.
