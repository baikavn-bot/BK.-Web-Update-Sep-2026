# Buổi xem Figma — 7 câu hỏi giao diện còn treo

*Lập 04/10/2026. Thắng + agent cùng mở Figma `YmcXg1lQqGVjQOFrVtdOgW`, ~30 phút. Chốt câu nào thì agent sửa code + Figma (luật đồng bộ ngược, `CLAUDE.md` §3) và gạch câu đó ở đây.*

Mỗi câu: **đang chạy tạm** là cái khách đang thấy trên web hôm nay. Không chốt thì cái tạm đó ở lại khi ra mắt — không có câu nào chặn ra mắt.

## A. Trang Remote Office — ✅ XONG 04/10

Thắng chốt: agent tự đọc Figma, **chuẩn hoá Figma về token** (code giữ nguyên). Kết quả: #10 = 80 · #11 = 12 · #16 = theo nội dung · #17 = 40. Chi tiết: `remote-office/spec-giao-dien.md` §9.

<details><summary>Bảng câu hỏi gốc</summary>


| # | Câu hỏi | Figma | Đang chạy tạm | Agent gợi ý |
| --- | --- | --- | --- | --- |
| 10 | Số lớn «23,5» ở khối chi phí: **100px** như Figma hay **80px**? | 100 — ngoài thang chữ | 80 (`--fs-display-1`) | 80 — trong thang. Muốn 100 thì phải **thêm token mới** (Thắng duyệt) |
| 11 | Khoảng **10px** trong stepper + ô bảng | 10 — ngoài thang (có 8 · 12) | 12 (`--s-3`) | 12 — lệch 2px, mắt khó thấy |
| 16 | Ô bảng so sánh / ước tính: cao **cố định 66** hay **theo nội dung**? | 66 cố định | Theo nội dung (ô 1 dòng ≈ 54) | Theo nội dung — chữ dài không bị cắt. Nếu thích ô cao hơn: tăng padding bằng token, không đặt 66 |
| 17 | Lề trang tablet **24** hay **40**? | R2 · R4 · R6 = 24 · khối dùng lại = 40 | 40 cả trang | 40 — mọi khối thẳng một mép; `CLAUDE.md` §5 ghi tablet 24 → nếu chốt 40 thì sửa bảng §5 |

</details>

## B. Component dùng chung — còn chờ Thắng (`docs/nhat-ky-figma-chung.md`)

| # | Câu hỏi | Figma | Code | Cần Thắng |
| --- | --- | --- | --- | --- |
| DEC-090 | Quầng sáng thẻ gói nằm ở **Hover** (Figma) hay **Focus** (code)? Thắng 04/10: code «làm xấu hơn» | Hover | Focus | Rê chuột + bấm Tab trên thẻ gói ở preview, so với Figma `365:785` → chốt bên nào. Lưu ý: luật hệ (`CLAUDE.md` §4) nói quầng sáng thuộc Focus |
| Mới 04/10 | Chữ BAIKA chân trang: trong Figma **mờ hơn** trên web | Lớp mờ hành tinh phủ đậm | Rõ hơn | Chọn độ rõ: theo web (sửa Figma) hay theo Figma (sửa code) |
| Mới 04/10 | Nút `Button 2` cỡ **Lg** tắt icon: Normal cao **46**, Hover cao **48** | Lệch trong bộ `26:2182` | 48 mọi trạng thái | Đồng ý sửa Figma về 48 cho cả bộ? (đụng mọi nút Lg) |

## Sau buổi xem

Agent: sửa code + Figma theo từng câu đã chốt → chụp nhìn → ghi nhật ký → cập nhật `TRANG-THAI.md` §5 → commit trên `remote-office`.
