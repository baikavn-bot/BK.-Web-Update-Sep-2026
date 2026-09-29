# Spec nội dung — Trang Remote Office

**Trạng thái:** `DRAFT` — chờ Thắng duyệt · Lập 29/09/2026
**Quyền:** file này quyết **chữ · con số · công thức · điều được / không được hứa** (xem `SPEC-MASTER.md` §2).
**Nguồn:** chữ đọc trực tiếp từ Figma `825:6535` ngày 29/09 **[xác minh]**, đối chiếu với spec v3 §13.3 ngày 25/09 trong repo `baikavn-bot/remote-office-Sep-2026` **[kế thừa]**.

Cách đọc mỗi khối:

- ✅ **Khớp** — Figma và spec cũ giống nhau từng chữ. Dùng luôn.
- ⚠️ **Lệch — mã `Lx`** — hai bên khác nhau. **Dừng lại hỏi** theo luật C (`SPEC-MASTER.md` §3). Chi tiết ở §12.
- ➕ **Chỉ có ở spec cũ** — Figma không có. Không tự thêm vào trang; nằm trong §12 chờ Thắng quyết.

Chữ trong «» là **nguyên văn** — không sửa dấu, không đổi chữ hoa/thường.

---

## 1. Hero ✅

| Phần | Nguyên văn |
| --- | --- |
| Chữ cong trên cung (`<h1>`) | «Remote Office» |
| Tiêu đề phụ | «Bộ phận văn phòng của bạn, không cần tuyển thêm người» |
| Mô tả | «Giao việc hành chính, nhân sự, kế toán, chăm sóc khách hàng cho BAIKA. Bạn nhận kết quả đúng hạn, không phải tuyển người, không phải chấm công.» |
| Nút | «Ước tính chi phí miễn phí» → cuộn tới khối Ước tính |

---

## 2. Chi phí thật của một nhân viên

**Tiêu đề** ✅ «Một nhân viên lương 10 triệu tốn của bạn 14–15 triệu»

**Bảng chi phí** ✅ *(chữ khớp; Figma thêm «đ» sau số — xem `L4`)*

| Nhãn | Số |
| --- | --- |
| «Lương ghi trên hợp đồng» | «10.000.000 đ» |
| «Bảo hiểm phần doanh nghiệp đóng (21,5%)» | «2.150.000 đ» |
| «Kinh phí công đoàn (2%)» | «200.000 đ» |
| «Chỗ ngồi, thiết bị, tuyển dụng, ngày nghỉ» | «1.500.000 đ – 2.500.000 đ» |
| **«Tổng chi phí thật»** *(dòng Total)* | **«≈ 14 – 15 triệu/tháng»** |

**Cột trái** ⚠️ `L2`

- Figma: số lớn «23,5» «%» · «Bảo hiểm» · «Công đoàn» · đoạn «Hợp đồng mang tên cộng tác hay dịch vụ, nếu có trả công và có quản lý, vẫn phải đóng BHXH bắt buộc từ 01/07/2025»
- Spec cũ: ba mốc «+7,2%» · «01/7/2025» · «2%» (nguyên văn ở §12)

**Chú thích dưới bảng** ➕ `L1` — spec cũ có, Figma không có.

---

## 3. BAIKA sẽ làm gì

**Tiêu đề** ⚠️ `L5` — Figma «BAIKA sẽ làm gì» · spec cũ «BAIKA làm thay tám nhóm việc»

**Nội dung** ✅ — 4 cụm × 2 mục:

| # | Nhãn cụm | Mục | Mô tả |
| --- | --- | --- | --- |
| 01 | «Giấy tờ và con người» | «Hành chính – văn thư» | «Nhận thư, trực điện thoại, soạn công văn, lưu trữ hồ sơ.» |
| | | «Nhân sự – tiền lương» | «Bảng lương, khai bảo hiểm, thuế thu nhập cá nhân, hồ sơ nhân viên.» |
| 02 | «Sổ sách và tuân thủ» | «Kế toán – thuế» | «Ghi sổ, tờ khai, báo cáo tài chính cùng đơn vị đủ điều kiện hành nghề.» |
| | | «Tuân thủ – quy chế» | «Rà hồ sơ, soạn quy chế và biểu mẫu, nhắc hạn nộp báo cáo.» |
| 03 | «Khách hàng và bán hàng» | «Chăm sóc khách hàng» | «Trực fanpage, Zalo OA, tin nhắn sàn, hotline theo ca.» |
| | | «Hỗ trợ kinh doanh» | «Lập báo giá, nhập CRM, chăm khách tiềm năng, đối soát đơn.» |
| 04 | «Nội dung và số liệu» | «Nội dung – livestream» | «Lịch nội dung, dựng clip ngắn, vận hành phiên livestream.» |
| | | «Số liệu – báo cáo» | «Bảng số liệu hằng tuần về doanh thu, công nợ, nhân sự.» |

---

## 4. Công cụ ước tính

**Tiêu đề** ✅ «Ước tính khoản chênh lệch của bạn» *(chỉ Figma có tiêu đề; spec cũ không đặt)*

**Nhãn ô nhập** ⚠️ `L6`

| Figma | Spec cũ |
| --- | --- |
| «Số người định tuyển» | «Số vị trí nếu tự tuyển» |
| «Lương dự kiến» | «Mức lương dự kiến mỗi người» |
| «Nhóm công việc» | «Chọn nhóm việc bạn muốn giao» |

**Bảng kết quả** ✅ *(chỉ Figma có)* — đầu cột «Tự tuyển» · «Giao cho BAIKA»; ô mẫu «2 người» · «Gói Vận hành» · «14.150.000 đ» · «-» · «28.300.000 đ» · «9.900.000 đ»

**Khối kết quả** ✅

| Phần | Nguyên văn |
| --- | --- |
| Nhãn | «Ước tính chênh lệch» |
| Số chính | «18.400.000 đ» *(ca mẫu)* |
| Quy ra năm | «≈220.800.000 đ/năm» *(ca mẫu)* |
| Chú thích — **luôn hiện** | «Con số mang tính tham khảo, chưa gồm VAT. Giá chính thức theo báo giá sau buổi khảo sát 45 phút.» |
| Nút | «Gửi yêu cầu theo ước tính này» — đích đến: **chờ chốt** (`SPEC-MASTER.md` §7 #6) |

**Chú thích công thức** ➕ `L7` — spec cũ có, Figma không có.

### 4.1 Tham số và công thức **[kế thừa — spec v3 §13.7 · gộp `claude/remote-office-cong-thuc-uoc-tinh.md` 29/09 · số khớp Figma, đã chạy lại bằng code 29/09]**

**Mọi tham số nằm ở MỘT chỗ trong code** (một hằng số / một file). Đổi giá hay tham số → chỉ sửa chỗ đó, không đụng logic.

| Tham số | Giá trị | Trạng thái |
| --- | --- | --- |
| Bảo hiểm phần doanh nghiệp đóng | 21,5% lương | ✅ khớp bảng chi phí §2 · *chưa ai đối chiếu văn bản luật* |
| Kinh phí công đoàn | 2% lương | ✅ khớp §2 |
| Chi phí cố định mỗi người (chỗ ngồi, thiết bị, tuyển dụng) | 1.800.000 đ | ⏸ spec cũ ghi **"giả định"** — nằm trong khoảng 1,5–2,5 triệu nhưng không phải điểm giữa · Master §7 #5 |
| Giá gói Khởi đầu · Vận hành · Trọn gói | 4.900.000 · 9.900.000 · 19.900.000 đ/tháng, chưa VAT | ✅ **công khai** (Thắng chốt 29/09) · ⏸ con số cụ thể: giả định theo spec cũ — Master §7 #3 |
| Số nhóm việc tối đa của gói | 1 · 3 · 5 | ✅ bảng giá spec cũ |
| Gói "thay được" | nửa vị trí · 1,5–2 · 3–4 vị trí | ✅ bảng giá spec cũ · ⚠️ chưa khớp số đơn vị công việc (100 đơn vị × 30 phút = 50 giờ/tháng mà "thay 1,5–2 người") — sếp cần có câu trả lời khi khách hỏi |
| Lương nhập được | 7.000.000 – 25.000.000 đ · nút ‹ › nhảy 500.000 | ✅ khoảng từ spec cũ |
| Số người nhập được | spec cũ: 1–5 · đề xuất mới: 1–4, từ 5 → "Báo giá riêng" | ⏸ Master §7 #14 |

```
chi phí tự tuyển 1 người / tháng = lương × 1,235 + 1.800.000     (1,235 = 1 + 21,5% + 2%)
tự tuyển / tháng                  = chi phí 1 người × số người
chênh lệch / tháng                = tự tuyển − giá gói BAIKA
chênh lệch / năm                  = chênh lệch / tháng × 12
```

**Tính bằng số nguyên**: `lương × 1235 / 1000`, làm tròn — không nhân số lẻ trực tiếp, tránh lệch vài đồng do máy cộng số thập phân.

### 4.2 Luật chọn gói — ⏸ CHỜ SẾP DUYỆT (Master §7 #14)

Hai phương án. **Build không tự chọn** — dựng sao cho đổi luật chỉ sửa một hàm.

| | Luật cũ (spec v3 §13.7) | Luật mới đề xuất (29/09) |
| --- | --- | --- |
| Cách chọn | Chỉ theo **số nhóm việc**: 1 → Khởi đầu · 2–3 → Vận hành · từ 4 → Trọn gói | **Gói nhỏ nhất đáp ứng CẢ HAI**: số người ≤ "thay được" của gói **và** số nhóm ≤ số nhóm tối đa của gói |
| Vấn đề | Tiền tự tuyển tính theo người, gói chọn theo nhóm → hai đầu vào không liên quan. Giữ 2 người: 1 nhóm báo tiết kiệm 23,4 tr · 3 nhóm 18,4 tr · 5 nhóm 8,4 tr (tick càng nhiều càng "tiết kiệm ít"). 1 nhóm + 5 người lương 25 tr → báo tiết kiệm **158 tr/tháng** với gói "thay được nửa vị trí" | Nút ‹ › nhảy số nguyên → **gói Khởi đầu không bao giờ được chọn** (nó chỉ thay nửa vị trí). Muốn nó xuất hiện phải thêm mức «Chưa tới 1 người» ⏸ |

Bảng chọn gói theo luật mới:

| Số người \ Số nhóm | 1 | 2–3 | 4–5 | 6+ |
| --- | --- | --- | --- | --- |
| 1–2 | Vận hành | Vận hành | Trọn gói | Báo giá riêng |
| 3–4 | Trọn gói | Trọn gói | Trọn gói | Báo giá riêng |
| 5+ | Báo giá riêng | Báo giá riêng | Báo giá riêng | Báo giá riêng |

### 4.3 Ca kiểm thử — code phải ra đúng **[chạy lại bằng code 29/09, khớp file công thức]**

Theo **luật mới**. Nếu sếp chọn luật cũ, ca 3, 5, 6, 7 đổi — cột cuối ghi kết quả luật cũ.

| # | Người | Lương | Nhóm | Gói | Tự tuyển | Chênh lệch / tháng | Theo năm | Trạng thái | Luật cũ ra |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 2 | 10.000.000 | 3 | Vận hành | 28.300.000 | **18.400.000** | **220.800.000** | Bình thường *(= Figma)* | giống |
| 2 | 2 | 10.000.000 | 4 | Trọn gói | 28.300.000 | 8.400.000 | 100.800.000 | Gói bị nâng | giống (không có trạng thái "bị nâng") |
| 3 | 1 | 7.000.000 | 1 | Vận hành | 10.445.000 | 545.000 | 6.540.000 | Bình thường | Khởi đầu · 5.545.000 |
| 4 | 1 | 7.000.000 | 4 | Trọn gói | 10.445.000 | — | — | Khối lượng nhỏ | giống |
| 5 | 3 | 25.000.000 | 2 | Trọn gói | 98.025.000 | 78.125.000 | 937.500.000 | Bình thường | Vận hành · 88.125.000 |
| 6 | 5 | 10.000.000 | 3 | — | 70.750.000 | — | — | Báo giá riêng | Vận hành · 60.850.000 |
| 7 | 2 | 10.000.000 | 6 | — | 28.300.000 | — | — | Báo giá riêng | Trọn gói · 8.400.000 |
| 8 | 2 | 3.000.000 *(gõ tay → kẹp 7 tr)* | 3 | Vận hành | 20.890.000 | 10.990.000 | 131.880.000 | Bình thường + dòng nhắc | giống |
| 9 | 2 | 10.300.000 *(gõ tay)* | 3 | Vận hành | 29.041.000 | 19.141.000 | 229.692.000 | Bình thường | giống |

### 4.4 Định dạng số

Dấu chấm ngăn nghìn + « đ»: `18.400.000 đ`. Số thập phân dùng dấu phẩy: `23,5%`. *(Cách viết "theo năm" còn lệch giữa các chỗ — Figma «≈220.800.000 đ/năm» là bản đang dùng.)*

### 4.5 Chữ cho các trạng thái **[Figma chưa vẽ]**

| Trạng thái | Nguyên văn | Nguồn |
| --- | --- | --- |
| Chưa chọn nhóm việc | «Chọn ít nhất một nhóm việc để BAIKA ước tính giúp bạn.» | spec cũ §13.6 |
| Khối lượng nhỏ | «Khối lượng việc bạn chọn còn nhỏ. Giữ người làm trong công ty vẫn rẻ hơn — cứ liên hệ khi cần giao thêm.» | spec cũ §13.6 |
| Tắt JavaScript | «Bật JavaScript để tính theo số của bạn.» | spec cũ §13.7 |
| Gói bị nâng | «nâng vì chọn N nhóm việc» *(dòng phụ dưới tên gói)* | ⏸ đề xuất 29/09 — đi cùng luật mới |
| Báo giá riêng | «Báo giá riêng sau khảo sát» *(cột BAIKA)* | ⏸ đề xuất 29/09 — đi cùng luật mới |

---

## 5. Bạn sẽ nhận được gì ✅

Đúng 6 ý, theo thứ tự Figma:

1. «Không phải chấm công, quản lý»
2. «Không phải tuyển thêm người»
3. «Chi phí cố định hằng tháng»
4. «Có hoá đơn VAT, tính chi phí được trừ»
5. «Việc không đứt khi có người nghỉ»
6. «Báo cáo hằng tháng, đổi gói theo tháng»

---

## 6. Bảng so sánh

**Tiêu đề** ⚠️ `L8` — Figma «Tuyển thêm người hay giao cho Baika» · spec cũ «Tuyển thêm người hay giao cho BAIKA?»

**Đầu cột** ⚠️ `L9` — Figma «Tuyển  nhân viên» *(2 dấu cách, thiếu «thêm»)* · spec cũ «Tuyển thêm nhân viên» · cột phải ✅ «BAIKA Remote Office»

**6 hàng** ✅

| Tiêu chí | Tự tuyển | BAIKA |
| --- | --- | --- |
| «Chi phí mỗi tháng» | «≈ 14–15 triệu cho một người» | «Từ 4,9 triệu» *(giá đã công khai — khớp giá gói Khởi đầu)* |
| «Bảo hiểm, công đoàn» | «Doanh nghiệp tự đóng, tăng theo mỗi người» | «Đã nằm trong phí dịch vụ» |
| «Thời gian có người làm» | «Vài tuần tuyển, thêm thời gian thử việc» | «7 ngày làm việc» |
| «Người nghỉ phép, nghỉ việc» | «Việc dừng lại, phải tuyển lại» | «BAIKA bố trí người thay» |
| «Quản lý, chấm công» | «Doanh nghiệp tự làm» | «Không cần» |
| «Chứng từ chi phí» | «Bảng lương, hồ sơ bảo hiểm» | «Hoá đơn VAT» |

**Chú thích dưới bảng** ➕ `L10` — spec cũ có, Figma không có. ⚠️ Câu này đang **gánh ranh giới nội dung** về BHXH (§8).

---

## 7. Các gói dịch vụ

**Tiêu đề** ✅ «Các gói dịch vụ»

| | Khởi đầu | Vận hành *(nổi bật)* | Trọn gói |
| --- | --- | --- | --- |
| **Nhãn nhỏ = GIÁ** ✅ *(chốt 29/09, thay «Kiểm tra» · «Hệ thống hóa» · «Hỗ trợ»)* | «4.900.000 đ/tháng» | «9.900.000 đ/tháng» | «19.900.000 đ/tháng» |
| Checklist ✅ | «Gói nền đầy đủ» · «1 nhóm việc» · «40 đơn vị công việc» · «Báo cáo tháng» | «Gói nền đầy đủ» · «3 nhóm việc» · «100 đơn vị công việc» · «Họp rà soát mỗi quý» | «Gói nền đầy đủ» · «5 nhóm việc» · «220 đơn vị công việc» · «Ưu tiên thời gian trả kết quả» |
| Nút ✅ | «Chọn gói này» | «Chọn gói này» | «Chọn gói này» |
| Thay được | ➕ «Nửa vị trí hành chính» | ➕ «1,5 – 2 vị trí» | ➕ «3 – 4 vị trí» |

*(Con số giá: giả định theo spec cũ — Master §7 #3.)*

**Chú thích dưới bảng giá** ➕ ⏸ *Claude đề xuất đưa vào vì giá đã công khai — Master §7 #3* — «Giá chưa gồm VAT. Gói nền gồm cổng gửi yêu cầu, một điều phối viên phụ trách riêng, kho hồ sơ số và báo cáo tháng. Một đơn vị công việc tương đương một đầu việc chuẩn khoảng 30 phút.»

---

## 8. FAQ

**Tiêu đề** ✅ «Các câu hỏi thường gặp»

Figma có 4 mục — **chỉ mục 1 là câu hỏi thật**, 3 mục sau là khối "Cam kết" của spec cũ chuyển sang ⚠️ `L12`:

| # | Tiêu đề mục | Nội dung |
| --- | --- | --- |
| 1 | «Dùng dịch vụ này thì doanh nghiệp có hết nghĩa vụ đóng BHXH không?» | «Với nhân viên bạn đang trực tiếp sử dụng thì nghĩa vụ vẫn giữ nguyên. Cái bạn tiết kiệm được là không phải tuyển thêm người cho những việc BAIKA làm thay.» 🔒 **câu bắt buộc giữ** |
| 2 | «Đúng quy định» | «Nhân sự BAIKA do BAIKA tuyển dụng, ký hợp đồng lao động và đóng bảo hiểm đầy đủ. Bạn nghiệm thu theo kết quả.» |
| 3 | «Giữ bí mật dữ liệu» | «Ký cam kết bảo mật, xử lý dữ liệu cá nhân theo Luật Bảo vệ dữ liệu cá nhân, phân quyền truy cập theo từng người.» |
| 4 | «Dễ hạch toán, linh hoạt» | «Phí dịch vụ có hoá đơn VAT, tính vào chi phí được trừ. Không bắt ký dài hạn, đổi gói theo tháng.» |

➕ **Chỉ có ở spec cũ** (nguyên văn ở §12 `L12`): ô cam kết «Cam kết bằng hợp đồng» · 4 câu FAQ về chỉ đạo người làm, hết đơn vị công việc, giữ dữ liệu, thời gian bắt đầu.

---

## 9. Liên hệ

**Tiêu đề** ✅ «Liên hệ»
**Ô form** ✅ «Tên» · «Đơn vị / Doanh nghiệp» · «Email» · «Số điện thoại» · «Lĩnh vực» · «Mô tả vấn đề» — giống 7 trang dịch vụ
**Checkbox** ✅ «Tôi đồng ý để Baika liên hệ và xử lý thông tin theo chính sách bảo mật»
**Nút** ⚠️ `L13` — Figma «Đăng ký rà soát» · spec cũ đề xuất «Đặt lịch khảo sát»
**Danh sách ô "Lĩnh vực"** — ⏸ **chưa có** ở cả hai nguồn (`SPEC-MASTER.md` §7 #12)

**Dòng pháp lý cuối trang** ➕ `L14` — spec cũ: «Nội dung trên trang mang tính giới thiệu dịch vụ, không phải đề nghị giao kết hợp đồng. Điều khoản chính thức theo hợp đồng dịch vụ ký giữa hai bên.»

---

## 10. Ranh giới nội dung — luôn đúng, không cần hỏi **[kế thừa — spec v3 §13.8]**

1. **Không hứa khách hết nghĩa vụ đóng BHXH.** Câu FAQ số 1 là câu bắt buộc giữ nguyên văn.
2. **Không dùng các chữ** «luật sư», «dịch vụ pháp lý», «tư vấn pháp luật», «LEXIS».
3. **Không bán gói "người ngồi riêng"** cho một khách — mọi yêu cầu đi qua cổng tiếp nhận, BAIKA phân công người.
4. **Mọi con số trên trang chỉ lấy từ file này.** Thêm số mới phải hỏi.
5. **Thông tin pháp nhân:** Công ty Cổ phần Công nghệ BAIKA · MST 0319512450 · Tầng 15, 72 Lê Thánh Tôn, Phường Sài Gòn, TP. Hồ Chí Minh · 0905 247 365 · baika.vn@gmail.com

---

## 11. SEO **[kế thừa — `noi-dung/noi-dung-trang-web.md` repo cũ · chưa duyệt]**

| | Nguyên văn |
| --- | --- |
| Title | «BAIKA Remote Office — thuê ngoài việc văn phòng từ 4,9 triệu/tháng» *(giá đã công khai)* |
| Meta description | «Giao việc hành chính, nhân sự, kế toán, chăm sóc khách hàng cho BAIKA. Không tuyển thêm người, không quản lý lao động, có hoá đơn VAT. Khảo sát miễn phí 45 phút.» |

*(Đường dẫn gợi ý `baika.vn/remote-office` trong file cũ **đã lỗi thời** — trang chạy ở `baika.website`.)*

---

## 12. Chỗ lệch chờ chốt

Mỗi dòng Thắng chốt một chữ: **F** (theo Figma) · **N** (theo spec cũ) · **khác** (ghi chữ mới) · **bỏ**.

| Mã | Khối | Figma | Spec cũ | Thắng chốt | Ngày |
| --- | --- | --- | --- | --- | --- |
| `L1` | Chi phí — chú thích | *(không có)* | «Số liệu minh hoạ cho một vị trí lương 10 triệu; con số thực tế tuỳ từng doanh nghiệp.» | | |
| `L2` | Chi phí — cột trái | số lớn «23,5» «%» · «Bảo hiểm» · «Công đoàn» + 1 câu mốc «01/07/2025» | 3 mốc: «+7,2%» — «Lương tối thiểu vùng tăng từ đầu năm 2026, mức sàn đóng bảo hiểm tăng theo.» · «01/7/2025» — «Hợp đồng mang tên cộng tác hay dịch vụ, nếu có trả công và có quản lý, vẫn phải đóng BHXH bắt buộc.» · «2%» — «Kinh phí công đoàn tính trên quỹ lương đóng bảo hiểm, cộng dồn theo từng người tuyển thêm.» | | |
| `L3` | Chi phí — ngày | «01/07/2025» | «01/7/2025» | | |
| `L4` | Chi phí — đơn vị | số có «đ» | số không có «đ» | | |
| `L5` | Tiêu đề khối 3 | «BAIKA sẽ làm gì» | «BAIKA làm thay tám nhóm việc» | | |
| `L6` | Nhãn ô ước tính | xem §4 | xem §4 | | |
| `L7` | Ước tính — chú thích công thức | *(không có)* | «Chi phí tự tuyển = lương + 21,5% bảo hiểm + 2% kinh phí công đoàn + khoảng 1,8 triệu chỗ ngồi, thiết bị, tuyển dụng.» | | |
| `L8` | Tiêu đề so sánh | «…giao cho Baika» | «…giao cho BAIKA?» | | |
| `L9` | Đầu cột so sánh | «Tuyển  nhân viên» | «Tuyển thêm nhân viên» | | |
| `L10` | So sánh — chú thích | *(không có)* | «Phần tiết kiệm đến từ việc không phải tuyển thêm người cho những việc BAIKA làm thay. Nghĩa vụ bảo hiểm với nhân viên bạn đang trực tiếp sử dụng vẫn giữ nguyên.» | | |
| `L11` | Nhãn nhỏ thẻ gói | «Kiểm tra » · «Hệ thống hóa» · «Hỗ trợ» *(nhãn của 7 trang dịch vụ)* | *(không có)* | **khác: thay bằng giá** — «4.900.000 đ/tháng» · «9.900.000 đ/tháng» · «19.900.000 đ/tháng» | 29/09 |
| `L12` | Cam kết / FAQ | 3 ô cam kết nằm trong FAQ, mất «Cam kết bằng hợp đồng» | Khối Cam kết riêng 4 ô + FAQ 5 câu — «Cam kết bằng hợp đồng» — «Mỗi đầu việc có hạn trả kết quả rõ ràng. Trễ hạn thì BAIKA chịu phạt theo hợp đồng.» · FAQ 2 «Tôi có được chỉ đạo trực tiếp người làm không?» — «Bạn làm việc với điều phối viên và gửi yêu cầu qua cổng. BAIKA chọn người phù hợp và chịu trách nhiệm về kết quả, nhờ vậy dịch vụ không gián đoạn khi có người nghỉ.» · FAQ 3 «Dùng hết đơn vị công việc trong tháng thì sao?» — «BAIKA báo trước khi gần hết. Bạn mua thêm theo đơn giá của gói hoặc nâng gói từ tháng sau.» · FAQ 4 «Dữ liệu công ty tôi được giữ thế nào?» — «Hai bên ký cam kết bảo mật. Mỗi nhân sự chỉ truy cập phần dữ liệu cần cho việc mình làm, và mọi truy cập đều được ghi lại.» · FAQ 5 «Bao lâu thì bắt đầu được?» — «Trong 7 ngày làm việc sau khi ký hợp đồng.» | | |
| `L13` | Nút form | «Đăng ký rà soát» | «Đặt lịch khảo sát» | | |
| `L14` | Dòng pháp lý cuối trang | *(không có)* | xem §9 | | |

---

## Phụ lục A — Bản nháp hàm tính · ⚠️ THAM KHẢO, CHƯA DUYỆT

Nguồn: `claude/remote-office-cong-thuc-uoc-tinh.md` (29/09). Viết theo **luật mới**, đã chạy ra đúng 9 ca ở §4.3.
**Không chép thẳng vào `src/`.** Khi Build dựng thật: đặt ở một file riêng (vd. `src/lib/uoc-tinh.ts`), tách phần tham số ra đầu file, rồi **xoá phụ lục này** và ghi đường dẫn file code vào đây — để không có hai bản code.

```js
export const THAM_SO = {
  bhxhPhanNghin: 215,        // 21,5%
  congDoanPhanNghin: 20,     // 2%
  chiPhiCoDinh: 1_800_000,   // GIẢ ĐỊNH — chờ xác nhận
  nguoi: { min: 1, max: 4 },
  luong: { min: 7_000_000, max: 25_000_000, buoc: 500_000 },
};
export const GOI = [
  { ten: 'Khởi đầu', gia: 4_900_000,  toiDaNhom: 1, toiDaNguoi: 0.5, thayDuoc: 'nửa vị trí' },
  { ten: 'Vận hành', gia: 9_900_000,  toiDaNhom: 3, toiDaNguoi: 2,   thayDuoc: '1,5 – 2 vị trí' },
  { ten: 'Trọn gói', gia: 19_900_000, toiDaNhom: 5, toiDaNguoi: 4,   thayDuoc: '3 – 4 vị trí' },
];
const kep = (x, a, b) => Math.min(Math.max(x, a), b);

export function uocTinh({ soNguoi, luong, soNhom }) {
  const P = THAM_SO;
  const l = kep(Math.round(luong / 1000) * 1000, P.luong.min, P.luong.max);
  const n = Math.max(1, Math.floor(soNguoi));
  const k = Math.max(0, Math.floor(soNhom));
  const motNguoi = Math.round(l * (1000 + P.bhxhPhanNghin + P.congDoanPhanNghin) / 1000) + P.chiPhiCoDinh;
  const tuTuyen = motNguoi * n;
  const base = { soNguoi: n, luong: l, soNhom: k, motNguoi, tuTuyen };
  if (k === 0) return { ...base, trangThai: 'chua-chon-nhom' };
  const goi = GOI.find(g => n <= g.toiDaNguoi && k <= g.toiDaNhom); // gói nhỏ nhất đáp ứng cả hai
  if (!goi) return { ...base, trangThai: 'bao-gia-rieng' };
  const chenhLech = tuTuyen - goi.gia;
  if (chenhLech <= 0) return { ...base, goi, trangThai: 'khoi-luong-nho' };
  return { ...base, goi, chenhLech, theoNam: chenhLech * 12, trangThai: 'binh-thuong' };
}
```

Trạng thái "Gói bị nâng" = giao diện tự so gói trả về với gói chỉ tính theo số người.

