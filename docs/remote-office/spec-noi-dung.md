# Spec nội dung — Trang Remote Office

**Trạng thái:** `DRAFT` — chờ Thắng duyệt · Lập 29/09/2026
**Quyền:** file này quyết **chữ · con số · công thức · điều được / không được hứa** (xem `SPEC-MASTER.md` §2).
**Nguồn:** chữ đọc trực tiếp từ Figma `913:4649` ngày 01/10 *(frame cũ `825:6535` đã bị thay — xem `spec-giao-dien.md`)* **[xác minh]**, đối chiếu với spec v3 §13.3 ngày 25/09 trong repo `baikavn-bot/remote-office-Sep-2026` **[kế thừa]**.

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

**Bảng chi phí** ✅ *(số có «đ» — `L4` chốt theo Figma)*

| Nhãn | Số |
| --- | --- |
| «Lương ghi trên hợp đồng» | «10.000.000 đ» |
| «Bảo hiểm phần doanh nghiệp đóng (21,5%)» | «2.150.000 đ» |
| «Kinh phí công đoàn (2%)» | «200.000 đ» |
| «Chỗ ngồi, thiết bị, tuyển dụng, ngày nghỉ» | «1.500.000 đ – 2.500.000 đ» |
| **«Tổng chi phí thật»** *(dòng Total)* | **«≈ 14 – 15 triệu/tháng»** |

**Cột trái** ✅ *(`L2` · `L3` chốt theo Figma — bỏ 3 mốc của spec cũ)*

- Số lớn «23,5» «%» · «Bảo hiểm» · «Công đoàn»
- Đoạn «Hợp đồng mang tên cộng tác hay dịch vụ, nếu có trả công và có quản lý, vẫn phải đóng BHXH bắt buộc từ 01/07/2025»

**Chú thích dưới bảng** ✅ `L1` — «Số liệu minh hoạ cho một vị trí lương 10 triệu, con số thực tế tuỳ từng doanh nghiệp.» *(Thắng tự thêm vào Figma; dấu phẩy, không phải chấm phẩy như spec cũ)*

---

## 3. BAIKA sẽ làm gì

**Tiêu đề** ✅ «BAIKA sẽ làm gì» *(`L5` chốt theo Figma)*

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

**Nhãn ô nhập** ✅ *(`L6` — giữ nhãn ngắn của Figma vì nhãn dài vỡ bố cục, nhất là trên mobile; riêng nhãn lương đổi cho rõ là lương **mỗi người**)*

| Nhãn | Ghi chú |
| --- | --- |
| «Số người định tuyển» | |
| «Lương mỗi người» | đổi từ «Lương dự kiến» 30/09 |
| «Nhóm công việc» | ô ghi «N nhóm việc» (N = số ô đang tick, kể cả «0 nhóm việc») |

**Danh sách tick nhóm việc** ✅ *(#4 chốt 01/10)* — đúng **8 mục của khối R3** (§3), cùng chữ, cùng thứ tự: «Hành chính – văn thư» · «Nhân sự – tiền lương» · «Kế toán – thuế» · «Tuân thủ – quy chế» · «Chăm sóc khách hàng» · «Hỗ trợ kinh doanh» · «Nội dung – livestream» · «Số liệu – báo cáo». **Tick sẵn 3 nhóm: «Hành chính – văn thư» · «Nhân sự – tiền lương» · «Chăm sóc khách hàng»** *(Spec v3 §13.7 — sếp chốt logic ban đầu 02/10; thay cho «3 mục đầu» chốt 01/10)*. Code không chép lại 8 tên này — lấy thẳng từ dữ liệu R3, nên sửa tên ở §3 là danh sách tự đổi theo.

**Bảng kết quả** ✅ *(chỉ Figma có)* — đầu cột «Tự tuyển» · «Gói BAIKA» *(L18, 01/10)*; ô mẫu «2 người» · «Gói Vận hành» · «14.150.000 đ» · «-» · «28.300.000 đ» · «9.900.000 đ»

**Khối kết quả** ✅

| Phần | Nguyên văn |
| --- | --- |
| Nhãn | «Ước tính chênh lệch» |
| Số chính | «18.400.000 đ» *(ca mẫu)* |
| Quy ra năm | «≈220.800.000 đ/năm» *(ca mẫu)* |
| Chú thích — **luôn hiện** | «Con số mang tính tham khảo, chưa gồm VAT. Giá chính thức theo báo giá sau buổi khảo sát 45 phút.» |
| Nút | «Gửi yêu cầu theo ước tính này» — ✅ #6: điền sẵn ước tính vào form Liên hệ (§4.6) |

**Chú thích công thức** ✅ `L7` — nằm **dưới bảng kết quả**: «Chi phí tự tuyển = lương + 21,5% bảo hiểm + 2% kinh phí công đoàn + khoảng 1,8 triệu chỗ ngồi, thiết bị, tuyển dụng.» ⚠️ con số «1,8 triệu» vẫn chờ sếp (Master §7 #5) — đổi số thì đổi cả câu này.

### 4.1 Tham số và công thức **[kế thừa — spec v3 §13.7 · gộp `claude/remote-office-cong-thuc-uoc-tinh.md` 29/09 · số khớp Figma, đã chạy lại bằng code 29/09]**

**Mọi tham số nằm ở MỘT chỗ trong code** (một hằng số / một file). Đổi giá hay tham số → chỉ sửa chỗ đó, không đụng logic.

| Tham số | Giá trị | Trạng thái |
| --- | --- | --- |
| Bảo hiểm phần doanh nghiệp đóng | 21,5% lương | ✅ khớp bảng chi phí §2 · *chưa ai đối chiếu văn bản luật* |
| Kinh phí công đoàn | 2% lương | ✅ khớp §2 |
| Chi phí cố định mỗi người (chỗ ngồi, thiết bị, tuyển dụng) | 1.800.000 đ | ✅ 02/10 — giữ theo logic ban đầu sếp chốt (Master §7 #5) |
| Giá gói Khởi đầu · Vận hành · Trọn gói | 4.900.000 · 9.900.000 · 19.900.000 đ/tháng, chưa VAT | ✅ **công khai, con số đã chốt** (Thắng 29/09) |
| Số nhóm việc tối đa của gói | 1 · 3 · 5 | ✅ bảng giá spec cũ |
| Gói "thay được" | nửa vị trí · 1,5–2 · 3–4 vị trí | ✅ bảng giá spec cũ · ⚠️ chưa khớp số đơn vị công việc (100 đơn vị × 30 phút = 50 giờ/tháng mà "thay 1,5–2 người") — sếp cần có câu trả lời khi khách hỏi |
| Lương nhập được | 7.000.000 – 25.000.000 đ · nút ‹ › nhảy 500.000 | ✅ khoảng từ spec cũ |
| Số người nhập được | 1–5, mặc định 2 | ✅ Spec v3 §13.7 (sếp chốt 02/10) |
| Số nhóm việc | = số ô tick, 0–8 · tick sẵn 3 · 0 → trạng thái «Chưa chọn nhóm việc» | ✅ #4 (01/10) · logic Spec v3 (02/10) |

```
chi phí tự tuyển 1 người / tháng = lương × 1,235 + 1.800.000     (1,235 = 1 + 21,5% + 2%)
tự tuyển / tháng                  = chi phí 1 người × số người
chênh lệch / tháng                = tự tuyển − giá gói BAIKA
chênh lệch / năm                  = chênh lệch / tháng × 12
```

**Tính bằng số nguyên**: `lương × 1235 / 1000`, làm tròn — không nhân số lẻ trực tiếp, tránh lệch vài đồng do máy cộng số thập phân.

### 4.2 Luật chọn gói — ✅ SẾP CHỐT 02/10: LOGIC BAN ĐẦU (Spec v3 §13.6–13.7 (repo `remote-office-Sep-2026`, file `spec/BAIKA_Spec_v3_RemoteOffice_20260925.md`))

Gói gợi ý **chỉ theo số nhóm việc** khách tick:

| Số nhóm tick | Gói | Giá |
| --- | --- | --- |
| 0 | — *(trạng thái «Chưa chọn nhóm việc»)* | — |
| 1 | Khởi đầu | 4.900.000 |
| 2–3 | Vận hành | 9.900.000 |
| 4 trở lên | Trọn gói | 19.900.000 |

Chênh lệch = chi phí tự tuyển × số người − giá gói, **không để âm** (≤ 0 → «Khối lượng nhỏ»). Số người không ảnh hưởng tới gói.

*Đã bỏ:* luật mới đề xuất 29/09 (gói theo cả số người lẫn số nhóm · trạng thái «Báo giá riêng» · «Gói bị nâng»). Lý do đề xuất khi ấy xem lịch sử git của file này trước 02/10.

### 4.3 Ca kiểm thử — code phải ra đúng **[chạy bằng code 02/10 — 11/11]**

| # | Người | Lương | Nhóm | Gói | Tự tuyển | Chênh lệch / tháng | Theo năm | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 2 | 10.000.000 | 3 | Vận hành | 28.300.000 | **18.400.000** | **220.800.000** | Bình thường *(= Figma)* |
| 2 | 2 | 10.000.000 | 4 | Trọn gói | 28.300.000 | 8.400.000 | 100.800.000 | Bình thường |
| 3 | 1 | 7.000.000 | 1 | Khởi đầu | 10.445.000 | 5.545.000 | 66.540.000 | Bình thường |
| 4 | 1 | 7.000.000 | 4 | Trọn gói | 10.445.000 | — | — | Khối lượng nhỏ |
| 5 | 3 | 25.000.000 | 2 | Vận hành | 98.025.000 | 88.125.000 | 1.057.500.000 | Bình thường |
| 6 | 5 | 10.000.000 | 3 | Vận hành | 70.750.000 | 60.850.000 | 730.200.000 | Bình thường |
| 7 | 2 | 10.000.000 | 6 | Trọn gói | 28.300.000 | 8.400.000 | 100.800.000 | Bình thường |
| 8 | 2 | 3.000.000 *(kẹp về 7 tr)* | 3 | Vận hành | 20.890.000 | 10.990.000 | 131.880.000 | Bình thường |
| 9 | 2 | 10.300.000 | 3 | Vận hành | 29.041.000 | 19.141.000 | 229.692.000 | Bình thường |
| 10 | 2 | 10.000.000 | **0** *(bỏ tick hết)* | — | 28.300.000 | — | — | Chưa chọn nhóm việc |
| 11 | 2 | 10.000.000 | **8** *(tick hết)* | Trọn gói | 28.300.000 | 8.400.000 | 100.800.000 | Bình thường |

### 4.4 Định dạng số

Dấu chấm ngăn nghìn + « đ»: `18.400.000 đ`. Số thập phân dùng dấu phẩy: `23,5%`. *(Cách viết "theo năm" còn lệch giữa các chỗ — Figma «≈220.800.000 đ/năm» là bản đang dùng.)*

### 4.5 Chữ cho các trạng thái **[Figma chưa vẽ]**

| Trạng thái | Nguyên văn | Nguồn |
| --- | --- | --- |
| Chưa chọn nhóm việc | «Chọn ít nhất một nhóm việc để BAIKA ước tính giúp bạn.» | spec cũ §13.6 |
| Khối lượng nhỏ | «Khối lượng việc bạn chọn còn nhỏ. Giữ người làm trong công ty vẫn rẻ hơn — cứ liên hệ khi cần giao thêm.» | spec cũ §13.6 |
| Tắt JavaScript | «Bật JavaScript để tính theo số của bạn.» | spec cũ §13.7 |


### 4.6 Ước tính điền sẵn vào form Liên hệ ✅ *(#6 — Thắng chốt 01/10)*

Bấm nút «Gửi yêu cầu theo ước tính này» → đoạn sau được điền vào **đầu** ô «Mô tả vấn đề» của form R9. Số lấy đúng lúc bấm.

```
Ước tính từ công cụ trên trang Remote Office:
• 2 người · lương 10.000.000 đ/người
• 3 nhóm việc: Hành chính – văn thư, Nhân sự – tiền lương, Kế toán – thuế
• Tự tuyển 28.300.000 đ/tháng
• Gói Vận hành 9.900.000 đ/tháng
• Chênh lệch ≈ 18.400.000 đ/tháng
```

| Trạng thái | Khác ở đâu |
| --- | --- |
| Khối lượng nhỏ | không có dòng chênh lệch |
| Chưa chọn nhóm việc | dòng nhóm thành «• Chưa chọn nhóm việc» · không có dòng gói, dòng chênh lệch |

**Luật:**

1. Dòng đầu «Ước tính từ công cụ trên trang Remote Office:» là **dấu mốc**. Bấm lại sau khi đổi số → code tìm dấu mốc, **thay** đoạn ước tính cũ (tới dòng trống đầu tiên), **giữ** chữ khách đã viết bên dưới.
2. Khách xoá dấu mốc rồi bấm lại → đoạn mới được thêm lên đầu, chữ cũ giữ nguyên.
3. Tắt JavaScript → nút chỉ cuộn xuống form, không điền.
4. Mail về BAIKA: đoạn này nằm ở mục «Mô tả vấn đề». **Từ 02/10** (Thắng duyệt): mail có đoạn này thì tiêu đề là «[baika.website] Yêu cầu theo ước tính — <Tên>» và dòng «Gửi từ: baika.website/». `api/contact.ts` nhận ra bằng chính dòng dấu mốc ở luật 1 (`DAU_MOC_UOC_TINH`) — **đổi chữ dấu mốc thì đổi cả hai nơi**.
5. Đã gửi thử thật 02/10 (bản preview `a39573b`): mail về đủ đoạn ước tính, số khớp trang.

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

**Tiêu đề** ✅ «Tuyển thêm người hay giao cho BAIKA?» *(`L8`)*

**Đầu cột** ✅ «Tuyển thêm nhân viên» *(`L9`)* · «BAIKA Remote Office»

**6 hàng** ✅ *(code: `soSanh` trong `src/pages/remote-office.astro`, dựng 01/10)*

| Tiêu chí | Tự tuyển | BAIKA |
| --- | --- | --- |
| «Chi phí mỗi tháng» | «≈ 14–15 triệu cho một người» | «Từ 4,9 triệu» *(giá đã công khai — khớp giá gói Khởi đầu)* |
| «Bảo hiểm, công đoàn» | «Doanh nghiệp tự đóng, tăng theo mỗi người» | «Đã nằm trong phí dịch vụ» |
| «Thời gian có người làm» | «Vài tuần tuyển, thêm thời gian thử việc» | «7 ngày làm việc» |
| «Người nghỉ phép, nghỉ việc» | «Việc dừng lại, phải tuyển lại» | «BAIKA bố trí người thay» |
| «Quản lý, chấm công» | «Doanh nghiệp tự làm» | «Không cần» |
| «Chứng từ chi phí» | «Bảng lương, hồ sơ bảo hiểm» | «Hoá đơn VAT» |

**Chú thích dưới bảng** ✅ `L10` — «Phần tiết kiệm đến từ việc không phải tuyển thêm người cho những việc BAIKA làm thay. Nghĩa vụ bảo hiểm với nhân viên bạn đang trực tiếp sử dụng vẫn giữ nguyên.» 🔒 câu này **gánh ranh giới BHXH** (§10) — không bỏ.

---

## 7. Các gói dịch vụ

**Tiêu đề** ✅ «Các gói dịch vụ»

| | Khởi đầu | Vận hành *(nổi bật)* | Trọn gói |
| --- | --- | --- | --- |
| **Nhãn nhỏ = GIÁ** ✅ *(chốt 29/09, thay «Kiểm tra» · «Hệ thống hóa» · «Hỗ trợ»)* | «4.900.000 đ/tháng» | «9.900.000 đ/tháng» | «19.900.000 đ/tháng» |
| Checklist ✅ | «Gói nền đầy đủ» · «1 nhóm việc» · «40 đơn vị công việc» · «Báo cáo tháng» | «Gói nền đầy đủ» · «3 nhóm việc» · «100 đơn vị công việc» · «Họp rà soát mỗi quý» | «Gói nền đầy đủ» · «5 nhóm việc» · «220 đơn vị công việc» · «Ưu tiên thời gian trả kết quả» |
| Nút ✅ | «Chọn gói này» | «Chọn gói này» | «Chọn gói này» |
| Thay được | ➕ «Nửa vị trí hành chính» | ➕ «1,5 – 2 vị trí» | ➕ «3 – 4 vị trí» |

**Chú thích dưới bảng giá** ✅ *(chốt 29/09, Figma đã có)* — «Giá chưa gồm VAT. Gói nền gồm cổng gửi yêu cầu, một điều phối viên phụ trách riêng, kho hồ sơ số và báo cáo tháng. Một đơn vị công việc tương đương một đầu việc chuẩn khoảng 30 phút.»

---

## 8. FAQ

**Tiêu đề** ✅ «Các câu hỏi thường gặp»

**5 câu** ✅ *(`L12` — theo spec cũ; Figma `913:4830` đã sửa khớp 30/09)*. Khối "Cam kết" **không** dựng.

| # | Câu hỏi | Trả lời |
| --- | --- | --- |
| 1 | «Dùng dịch vụ này thì doanh nghiệp có hết nghĩa vụ đóng BHXH không?» | «Với nhân viên bạn đang trực tiếp sử dụng thì nghĩa vụ vẫn giữ nguyên. Cái bạn tiết kiệm được là không phải tuyển thêm người cho những việc BAIKA làm thay.» 🔒 **câu bắt buộc giữ** |
| 2 | «Tôi có được chỉ đạo trực tiếp người làm không?» | «Bạn làm việc với điều phối viên và gửi yêu cầu qua cổng. BAIKA chọn người phù hợp và chịu trách nhiệm về kết quả, nhờ vậy dịch vụ không gián đoạn khi có người nghỉ.» |
| 3 | «Dùng hết đơn vị công việc trong tháng thì sao?» | «BAIKA báo trước khi gần hết. Bạn mua thêm theo đơn giá của gói hoặc nâng gói từ tháng sau.» |
| 4 | «Dữ liệu công ty tôi được giữ thế nào?» | «Hai bên ký cam kết bảo mật. Mỗi nhân sự chỉ truy cập phần dữ liệu cần cho việc mình làm, và mọi truy cập đều được ghi lại.» |
| 5 | «Bao lâu thì bắt đầu được?» | «Trong 7 ngày làm việc sau khi ký hợp đồng.» |

⚠️ Câu 3 hứa «đơn giá của gói» khi mua thêm — **chưa có đơn giá** ở đâu trong spec. Khách hỏi thì sếp cần có số.

---

## 9. Liên hệ

**Tiêu đề** ✅ «Liên hệ»
**Ô form** ✅ «Tên» · «Đơn vị / Doanh nghiệp» · «Email» · «Số điện thoại» · «Lĩnh vực» · «Mô tả vấn đề» — giống 7 trang dịch vụ
**Checkbox** ✅ «Tôi đồng ý để Baika liên hệ và xử lý thông tin theo chính sách bảo mật»
**Nút** ✅ «Đặt lịch khảo sát» *(`L13` — riêng trang này; 7 trang dịch vụ giữ «Đăng ký rà soát»)*
**Danh sách ô "Lĩnh vực"** — ⏸ **chưa có** ở cả hai nguồn (`SPEC-MASTER.md` §7 #12)

**Dòng pháp lý cuối trang** ⏸ `L14` — Thắng hỏi đặt ở đâu (30/09). Đề xuất: dòng `caption` ngay **dưới form Liên hệ**, không đưa vào Footer chung. Spec cũ: «Nội dung trên trang mang tính giới thiệu dịch vụ, không phải đề nghị giao kết hợp đồng. Điều khoản chính thức theo hợp đồng dịch vụ ký giữa hai bên.»

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

## 12. Chỗ lệch — Thắng đã chốt L1–L13 (30/09) · L15–L20 (01/10) · còn L14

`L15`–`L20` (01/10): Figma tablet/mobile rút gọn chữ so với desktop. **Một trang = một bộ chữ** cho mọi khổ, trừ khi Thắng chốt khác — code đổi chữ theo khổ màn phải in cả hai bản rồi ẩn một, dễ lệch.

Mỗi dòng Thắng chốt một chữ: **F** (theo Figma) · **N** (theo spec cũ) · **khác** (ghi chữ mới) · **bỏ**.

| Mã | Khối | Figma | Spec cũ | Thắng chốt | Ngày |
| --- | --- | --- | --- | --- | --- |
| `L1` | Chi phí — chú thích | *(không có)* | «Số liệu minh hoạ cho một vị trí lương 10 triệu; con số thực tế tuỳ từng doanh nghiệp.» | «Số liệu minh hoạ cho một vị trí lương 10 triệu, con số thực tế tuỳ từng doanh nghiệp.» *(Thắng tự thêm vào Figma, dấu phẩy)* | 30/09 |
| `L2` | Chi phí — cột trái | số lớn «23,5» «%» · «Bảo hiểm» · «Công đoàn» + 1 câu mốc «01/07/2025» | 3 mốc: «+7,2%» — «Lương tối thiểu vùng tăng từ đầu năm 2026, mức sàn đóng bảo hiểm tăng theo.» · «01/7/2025» — «Hợp đồng mang tên cộng tác hay dịch vụ, nếu có trả công và có quản lý, vẫn phải đóng BHXH bắt buộc.» · «2%» — «Kinh phí công đoàn tính trên quỹ lương đóng bảo hiểm, cộng dồn theo từng người tuyển thêm.» | **F** — bỏ 3 mốc | 30/09 |
| `L3` | Chi phí — ngày | «01/07/2025» | «01/7/2025» | **F** «01/07/2025» | 30/09 |
| `L4` | Chi phí — đơn vị | số có «đ» | số không có «đ» | **F** — có «đ» | 30/09 |
| `L5` | Tiêu đề khối 3 | «BAIKA sẽ làm gì» | «BAIKA làm thay tám nhóm việc» | **F** «BAIKA sẽ làm gì» | 30/09 |
| `L6` | Nhãn ô ước tính | xem §4 | xem §4 | **F**, trừ «Lương dự kiến» → **«Lương mỗi người»**. Lý do: nhãn dài vỡ bố cục, nhất là mobile | 30/09 |
| `L7` | Ước tính — chú thích công thức | *(không có)* | «Chi phí tự tuyển = lương + 21,5% bảo hiểm + 2% kinh phí công đoàn + khoảng 1,8 triệu chỗ ngồi, thiết bị, tuyển dụng.» | **N** — đặt dưới bảng ước tính | 30/09 |
| `L8` | Tiêu đề so sánh | «…giao cho Baika» | «…giao cho BAIKA?» | **N** «Tuyển thêm người hay giao cho BAIKA?» | 30/09 |
| `L9` | Đầu cột so sánh | «Tuyển  nhân viên» | «Tuyển thêm nhân viên» | **N** «Tuyển thêm nhân viên» | 30/09 |
| `L10` | So sánh — chú thích | *(không có)* | «Phần tiết kiệm đến từ việc không phải tuyển thêm người cho những việc BAIKA làm thay. Nghĩa vụ bảo hiểm với nhân viên bạn đang trực tiếp sử dụng vẫn giữ nguyên.» | **N** — đặt dưới bảng so sánh | 30/09 |
| `L11` | Nhãn nhỏ thẻ gói | «Kiểm tra » · «Hệ thống hóa» · «Hỗ trợ» *(nhãn của 7 trang dịch vụ)* | *(không có)* | **khác: thay bằng giá** — «4.900.000 đ/tháng» · «9.900.000 đ/tháng» · «19.900.000 đ/tháng» | 29/09 |
| `L12` | Cam kết / FAQ | 3 ô cam kết nằm trong FAQ, mất «Cam kết bằng hợp đồng» | Khối Cam kết riêng 4 ô + FAQ 5 câu — «Cam kết bằng hợp đồng» — «Mỗi đầu việc có hạn trả kết quả rõ ràng. Trễ hạn thì BAIKA chịu phạt theo hợp đồng.» · FAQ 2 «Tôi có được chỉ đạo trực tiếp người làm không?» — «Bạn làm việc với điều phối viên và gửi yêu cầu qua cổng. BAIKA chọn người phù hợp và chịu trách nhiệm về kết quả, nhờ vậy dịch vụ không gián đoạn khi có người nghỉ.» · FAQ 3 «Dùng hết đơn vị công việc trong tháng thì sao?» — «BAIKA báo trước khi gần hết. Bạn mua thêm theo đơn giá của gói hoặc nâng gói từ tháng sau.» · FAQ 4 «Dữ liệu công ty tôi được giữ thế nào?» — «Hai bên ký cam kết bảo mật. Mỗi nhân sự chỉ truy cập phần dữ liệu cần cho việc mình làm, và mọi truy cập đều được ghi lại.» · FAQ 5 «Bao lâu thì bắt đầu được?» — «Trong 7 ngày làm việc sau khi ký hợp đồng.» | **N** — FAQ 5 câu theo spec cũ; không dựng khối Cam kết | 30/09 |
| `L13` | Nút form | «Đăng ký rà soát» | «Đặt lịch khảo sát» | **N** «Đặt lịch khảo sát» | 30/09 |
| `L14` | Dòng pháp lý cuối trang | *(không có)* | xem §9 | ⏸ Thắng hỏi chỗ đặt — đề xuất dưới form Liên hệ, chờ chốt |  |
| `L15` | Ước tính — ô lương *(tablet · mobile)* | «10tr» | «10.000.000 đ» *(desktop, §4.4)* | **N** «10.000.000 đ» — Thắng sửa bố cục mobile (nhãn trên điều khiển) cho vừa | 01/10 |
| `L16` | Ước tính — số trong bảng *(tablet · mobile)* | «14tr150» · «28tr300» · «9tr900» | «14.150.000 đ» · «28.300.000 đ» · «9.900.000 đ» | **N** — Thắng thêm biến thể `Table Item` Mobile padding `--s-4` | 01/10 |
| `L17` | Ước tính — ô nhóm việc *(tablet · mobile)* | «3 nhóm» | «3 nhóm việc» | **N** «3 nhóm việc» | 01/10 |
| `L18` | Ước tính — đầu cột phải *(tablet · mobile)* | «Gói BAIKA» | «Giao cho BAIKA» | **F** «Gói BAIKA» — áp **cả desktop** | 01/10 |
| `L19` | Ước tính — nút *(tablet · mobile)* | «Gửi yêu cầu theo ước tính» | «Gửi yêu cầu theo ước tính này» | **N** «Gửi yêu cầu theo ước tính này» | 01/10 |
| `L20` | So sánh — hàng 2 cột tự tuyển *(tablet · mobile)* | «Doanh nghiệp tự đóng» | «Doanh nghiệp tự đóng, tăng theo mỗi người» | **N** «Doanh nghiệp tự đóng, tăng theo mỗi người» | 01/10 |

---

## Phụ lục A — Hàm tính → đã chuyển vào code *(01/10)*

Bản nháp từng nằm ở đây đã được dựng thật — **không còn hai bản code**:

| Gì | Ở đâu |
| --- | --- |
| Tham số (lương, số người, số nhóm, giá gói, 1.800.000…), luật chọn gói, hàm tính, định dạng tiền | `src/lib/uoc-tinh.ts` — tham số ở **đầu file** |
| 11 ca kiểm thử §4.3 | `tools/kiem-tra-uoc-tinh.mts` — chạy `node --experimental-strip-types tools/kiem-tra-uoc-tinh.mts` (Node ≥ 22.6), phải ra `11/11` |
| Giao diện gọi hàm rồi vẽ theo `trangThai` | `src/components/EstimatorSection.astro` |

Từ 02/10 code theo luật chọn gói §4.2 (logic ban đầu Spec v3) — bản nháp này viết theo luật mới đã bỏ.
