# SPEC MASTER — Trang Remote Office (`baika.website`)

**Trạng thái:** `DRAFT` — chờ Thắng duyệt · Lập 29/09/2026
**Người quyết cuối:** Thắng Trương (designer, phụ trách website). Công ty **không có dev** — code do agent viết, Thắng duyệt và tự `git push`.

> **Agent đọc file này TRƯỚC TIÊN.** Nó nói: trang này là gì · tài liệu nào có quyền quyết cái gì · làm gì khi hai nguồn nói khác nhau · khi nào phải dừng lại hỏi.
> Luật chung của repo (token, cấm `#FFFFFF`, breakpoint, accessibility, bảo mật) nằm ở **`/CLAUDE.md`** — đọc cả file đó. File này **không lặp lại** luật chung, chỉ thêm luật riêng cho trang Remote Office.

Ký hiệu dùng trong bộ spec: **[xác minh]** = đọc trực tiếp từ Figma/repo, có ngày · **[kế thừa]** = lấy từ tài liệu đã chốt trước · **[suy luận]** = đề xuất, **chưa duyệt** — không tự áp.

---

## 0. Thứ tự đọc

| # | File | Đọc để biết |
| --- | --- | --- |
| 1 | `/CLAUDE.md` | Luật chung của repo |
| 2 | **`SPEC-MASTER.md`** *(file này)* | Ai quyết cái gì · luật lệch · danh sách dừng lại hỏi |
| 3 | `spec-noi-dung.md` | Chữ, con số, công thức, điều được / không được hứa |
| 4 | `spec-giao-dien.md` | Figma → source: bố cục, component, trạng thái, hành vi |
| 5 | `quy-trinh-build.md` | Cách dựng, kiểm tra, commit, gắn domain |

---

## 1. Trang này là gì

BAIKA nhận làm thay việc văn phòng lặp lại của doanh nghiệp (hành chính, nhân sự – tiền lương, kế toán – thuế, chăm sóc khách hàng…). Khách gửi yêu cầu qua cổng tiếp nhận, BAIKA trả kết quả theo cam kết — **khách quản lý kết quả, không quản lý người**. **[kế thừa — spec v3 §13.0]**

Trang phải làm được hai việc: **nói rõ khách tiết kiệm bao nhiêu**, và **lấy được thông tin liên hệ**.

| | |
| --- | --- |
| Domain | `baika.website` — gắn vào **cùng dự án Vercel** với `baika.vn` bằng rewrite *(chưa chạy thử — xem `quy-trinh-build.md` §5)* |
| Đường dẫn trong repo | `src/pages/remote-office.astro` *(đề xuất — [suy luận])* |
| Figma | [`YmcXg1lQqGVjQOFrVtdOgW` → frame `Remote office` `825:6535`](https://www.figma.com/design/YmcXg1lQqGVjQOFrVtdOgW/Baika-Design-system?node-id=825-6535) — **chỉ có Desktop 1280** |
| Khác 7 trang dịch vụ | Có **công cụ ước tính** tính trên trang · có **bảng so sánh** · là trang bán **một sản phẩm** |
| Giống 7 trang dịch vụ | Hero · BAIKA sẽ làm gì · Bạn sẽ nhận được gì · Các gói · FAQ · Liên hệ · Header · Footer — **dùng lại nguyên component có sẵn** |

---

## 2. Quyền quyết — ai có tiếng nói cuối về loại thông tin nào

| Loại thông tin | Nguồn có quyền quyết | Ghi chú |
| --- | --- | --- |
| **Chữ, con số, công thức ước tính, điều được hứa / không được hứa, thông tin pháp nhân, SEO** | **`spec-noi-dung.md`** | |
| **Bố cục, khoảng cách, token, component, variant, trạng thái, hành vi tương tác, responsive** | **`spec-giao-dien.md`** — và **Figma thắng** tài liệu này nếu hai bên lệch | Figma đổi → cập nhật `spec-giao-dien.md` (luật §4) |
| **Luật code chung** | `/CLAUDE.md` | Token, `#FFFFFF`, accessibility, bảo mật |
| **Thứ không nằm trong bảng này** | **Không ai** → dừng lại hỏi Thắng | Không tự quyết |

---

## 3. Luật khi hai nguồn nói khác nhau *(Thắng chốt 29/09 — phương án C)*

1. **Chữ trong Figma khác `spec-noi-dung.md` → DỪNG, không tự chọn bên nào.**
2. Ghi chỗ lệch vào bảng **"Chỗ lệch chờ chốt"** trong `spec-noi-dung.md` §12 (nếu chưa có), rồi hỏi Thắng.
3. Trong lúc chờ: dựng phần còn lại, **để trống** đúng chỗ đang lệch bằng chú thích `<!-- CHỜ CHỐT: #mã -->`. Không điền tạm bằng một trong hai bản.
4. Thắng chốt xong → ghi chữ đã chốt vào `spec-noi-dung.md`, đánh dấu dòng lệch là **đã chốt** kèm ngày.
5. **Từ lần sau**, với những chỗ đã chốt: `spec-noi-dung.md` thắng (phương án A). Figma mà vẫn khác thì báo Thắng sửa Figma.

Bố cục / token / component lệch giữa Figma và `spec-giao-dien.md` → **Figma thắng**, nhưng vẫn phải sửa `spec-giao-dien.md` cho khớp **trong cùng commit**.

---

## 4. Luật đồng bộ — sửa một nơi, cập nhật mọi nơi *(Thắng chốt 29/09)*

> **Mỗi khi sửa code, Figma hoặc spec, phải cập nhật các nguồn còn lại cho khớp và commit cùng một lượt.**

| Sửa ở | Phải cập nhật thêm | Ghi chú |
| --- | --- | --- |
| **Code** làm đổi chữ / số / hành vi | `spec-noi-dung.md` hoặc `spec-giao-dien.md` | Cùng commit |
| **Figma** | `spec-giao-dien.md` §"Nhật ký Figma": ngày · node · đổi gì — và code nếu đã dựng | Figma **không nằm trong git** → spec là chỗ ghi lại. Nên đặt tên phiên bản trong Figma (*File → Save to version history*) trùng tên commit |
| **Spec** (quyết định mới) | Code, và báo Thắng nếu Figma cần sửa | Chưa dựng kịp thì đánh dấu dòng đó `⏳ chưa đồng bộ` — **không** để spec nói điều code chưa làm mà không ghi chú |

**Commit đúng cách** — "commit toàn bộ nguồn" nghĩa là **đủ các file liên quan**, **không** phải `git add -A` mù:

- Chạy `git status`, đọc danh sách, `git add` **từng file** thuộc thay đổi này.
- Không bao giờ commit `.env`, `Claude outputs/`, ảnh chụp nháp, file tạm.
- Commit bằng danh tính của repo — xem `quy-trinh-build.md` §3.

---

## 5. Tên cũ → tên mới *(để đọc được tài liệu trước 29/09)*

| Trước đây gọi là | Nghĩa cũ | Giờ là |
| --- | --- | --- |
| **"Spec A"** | Bản **cũ**: spec v3 + v3.1 (25/09) trong repo `baikavn-bot/remote-office-Sep-2026` + Figma riêng `EXoNVzx2MrGbL7oPkpzZbD` | Phần **nội dung** còn hiệu lực → `spec-noi-dung.md`. Phần bố cục → **bị thay** |
| **"Spec B"** | Bản **mới**: frame `825:6535` trong Figma design system, Thắng vẽ sau | → `spec-giao-dien.md` |

**Những gì của bản cũ KHÔNG còn dùng:**

| Thứ | Trạng thái |
| --- | --- |
| Figma riêng `EXoNVzx2MrGbL7oPkpzZbD` (bố cục 12 section, component riêng) | ⛔ **Bị thay** bởi frame `825:6535` |
| Bản UI Navy `#0B2545` / Cyan `#22C4DE` / font Spectral (21–25/09) | ⛔ **Đã huỷ** — kể cả phần đầu file `noi-dung/noi-dung-trang-web.md` của repo cũ còn ghi màu này |
| Thư mục `web/` của repo cũ (HTML thử) | ⛔ **Không dùng** làm mẫu code |
| Hệ chuyển động (v3.1) · luồng "Tạo yêu cầu tư vấn" 4 bước + tải tệp · Tablet/Mobile của bản cũ | ⏸ **Ngoài phạm vi v1**, trừ khi Thắng chốt đưa vào |

---

## 6. Phạm vi v1

| Trong v1 | Ngoài v1 |
| --- | --- |
| Trang Remote Office **Desktop** theo Figma `825:6535` | Luồng yêu cầu 4 bước + tải tệp |
| Công cụ ước tính chạy trên trang | Hệ chuyển động riêng |
| Form Liên hệ dùng lại `ContactSection` + `api/contact.ts` hiện có | Mọi thứ thuộc backend: lưu dữ liệu, agent, theo dõi hành vi *(luồng F — **không** đưa vào repo này)* |
| Gắn domain `baika.website` | Tablet / Mobile — **chờ quyết**, xem §7 #9 |

---

## 7. Danh sách DỪNG LẠI HỎI — chưa ai chốt, agent không được tự quyết

Gặp mục nào dưới đây: **dựng phần còn lại, để trống chỗ này, hỏi Thắng.**

| # | Câu hỏi | Chặn phần nào |
| --- | --- | --- |
| 1 | ✅ **ĐÃ CHỐT 29/09 — Màu trụ riêng cho Remote Office:** `--dam` `#2E4716` · `--trung` `#58832C` *(Thắng đưa)* · `--nhat` `#B6D79B` *(Claude đề xuất theo quy luật 7 trụ, Thắng duyệt)*. Figma: biến `Colors/Page/Remote Office/*` + mode **"Remote Office"** trong bộ biến `Trụ`, frame `825:6535` đã chuyển sang mode này | — |
| 2 | ✅ **ĐÃ CHỐT 29/09 — Giá công khai**, đặt **thay vào nhãn nhỏ phía trên tên gói** (chỗ đang ghi «Kiểm tra» · «Hệ thống hóa» · «Hỗ trợ»). Figma chưa cập nhật chữ | — |
| 3 | **Con số giá cụ thể** — đang **giả định** giữ 4.900.000 · 9.900.000 · 19.900.000 đ/tháng như spec cũ, viết dạng «4.900.000 đ/tháng». Kèm: có thêm dòng «Giá chưa gồm VAT…» dưới khối gói không *(Claude đề xuất có)* | Gói · Ước tính |
| 4 | **Ô "Nhóm công việc"** hiện "3 nhóm việc" nhưng danh sách mở ra là 7 dòng chữ mẫu giống nhau. Chọn **số nhóm** hay chọn **từng nhóm** (bản cũ: 8 ô tick)? Có mấy lựa chọn? | Ước tính |
| 5 | **Con số 1.800.000** trong công thức — giả định từ spec cũ, chưa xác nhận | Ước tính |
| 6 | **Nút "Gửi yêu cầu theo ước tính này"** dẫn đi đâu: cuộn xuống form và điền sẵn số ước tính, hay chỉ cuộn xuống? | Ước tính · Liên hệ |
| 7 | **Khối "Cam kết"** của bản cũ bị gộp vào FAQ và mất ô *"Cam kết bằng hợp đồng"*. Khôi phục khối riêng, hay giữ như Figma? Bổ sung 4 câu FAQ của bản cũ không? | FAQ |
| 8 | **Chữ lệch giữa Figma và nội dung** — danh sách ở `spec-noi-dung.md` §12 | Từng chỗ |
| 9 | **Tablet / Mobile** — Figma chưa vẽ. Có đề xuất ở `spec-giao-dien.md` §7, **chưa duyệt** | Responsive |
| 10 | **Cỡ chữ số lớn "23,5"** — Figma vẽ 100px (ngoài thang, `display-1` = 80) | Khối chi phí |
| 11 | **Khoảng `10px`** trong stepper và `Table Item` — ngoài thang spacing (thang có 8 · 12) | Ước tính · So sánh |
| 12 | **Form Liên hệ**: nút ghi "Đăng ký rà soát" (Figma) hay "Đặt lịch khảo sát" (spec cũ)? Danh sách ô "Lĩnh vực" cho trang này là gì? | Liên hệ |
| 13 | **Menu**: trang này có mục trong menu `baika.vn` không, hay chỉ vào từ ô bento trang chủ? | Header |
| 14 | **Luật chọn gói của công cụ ước tính** — luật cũ (theo số nhóm) hay luật mới (theo cả số người lẫn số nhóm)? Kèm: giới hạn số người 1–5 hay 1–4 + "Báo giá riêng" · có thêm mức «Chưa tới 1 người» không. **Đổi con số hiện ra với khách → sếp duyệt.** Chi tiết `spec-noi-dung.md` §4.2 | Ước tính |

---

## 8. Xong nghĩa là gì — checklist nghiệm thu

- [ ] Mọi khối trong `spec-giao-dien.md` §1 đã dựng; khối dùng lại **đúng component có sẵn**, không viết lại.
- [ ] Mọi chữ khớp `spec-noi-dung.md`; chỗ còn lệch để trống có chú thích `CHỜ CHỐT`.
- [ ] Công cụ ước tính ra **đúng số** ở cả 9 ca của `spec-noi-dung.md` §4.3 — tối thiểu ca 1: 2 người × 10.000.000 → 14.150.000 / 28.300.000 / chênh lệch 18.400.000 / năm 220.800.000.
- [ ] Không có `#FFFFFF`, `#fff`, `white` trong CSS mới (`grep` được).
- [ ] Không có giá trị ngoài token (khoảng cách, màu, bo góc) — trừ chỗ đã ghi trong §7.
- [ ] `pnpm build` sạch 0 lỗi.
- [ ] Chụp màn thật ở 1280 và 1920 — **mở ra nhìn**, không kết luận bằng số đếm.
- [ ] 7 trang dịch vụ + trang chủ **không bị ảnh hưởng** (chạy lại bài kiểm tra ở `quy-trinh-build.md` §4).
- [ ] Bàn phím: Tab đi được qua mọi nút, stepper, ô chọn, form — thấy rõ Focus.
- [ ] Spec đã cập nhật cho khớp code (luật §4), cùng commit.

---

## 9. Nhật ký bộ spec

| Ngày | Ai | Thay đổi |
| --- | --- | --- |
| 29/09/2026 | Claude (phiên với Thắng) | Lập bộ spec: Master · Nội dung · Giao diện · Quy trình. Chốt luật lệch C và luật đồng bộ |
| 29/09/2026 | Claude (phiên với Thắng) | Chốt #1 màu trụ + #2 giá công khai. Tạo biến + mode màu trong Figma. #3 đổi thành câu xác nhận con số giá |
| 29/09/2026 | Claude (phiên với Thắng) | Gộp `claude/remote-office-cong-thuc-uoc-tinh.md` (project Claude) vào §4 `spec-noi-dung.md` và §4 `spec-giao-dien.md`. Thêm câu hỏi #14. **Từ nay bản trong repo là bản chính** |
