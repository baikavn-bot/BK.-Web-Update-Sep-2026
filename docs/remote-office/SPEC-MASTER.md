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
| Figma | [`YmcXg1lQqGVjQOFrVtdOgW` → frame `Remote office` `913:4649`](https://www.figma.com/design/YmcXg1lQqGVjQOFrVtdOgW/Baika-Design-system?node-id=913-4649) — **chỉ có Desktop 1280**. ⚠️ Không dựng theo `825:6072` (bản vẽ cũ) |
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
| **"Spec B"** | Bản **mới**: frame `825:6535` (nay `913:4649`) trong Figma design system, Thắng vẽ sau | → `spec-giao-dien.md` |

**Những gì của bản cũ KHÔNG còn dùng:**

| Thứ | Trạng thái |
| --- | --- |
| Figma riêng `EXoNVzx2MrGbL7oPkpzZbD` (bố cục 12 section, component riêng) | ⛔ **Bị thay** bởi frame `913:4649` |
| Bản UI Navy `#0B2545` / Cyan `#22C4DE` / font Spectral (21–25/09) | ⛔ **Đã huỷ** — kể cả phần đầu file `noi-dung/noi-dung-trang-web.md` của repo cũ còn ghi màu này |
| Thư mục `web/` của repo cũ (HTML thử) | ⛔ **Không dùng** làm mẫu code |
| Hệ chuyển động (v3.1) · luồng "Tạo yêu cầu tư vấn" 4 bước + tải tệp · Tablet/Mobile của bản cũ | ⏸ **Ngoài phạm vi v1**, trừ khi Thắng chốt đưa vào |

---

## 6. Phạm vi v1

| Trong v1 | Ngoài v1 |
| --- | --- |
| Trang Remote Office **Desktop** theo Figma `913:4649` | Luồng yêu cầu 4 bước + tải tệp |
| Công cụ ước tính chạy trên trang | Hệ chuyển động riêng |
| Form Liên hệ dùng lại `ContactSection` + `api/contact.ts` hiện có | Mọi thứ thuộc backend: lưu dữ liệu, agent, theo dõi hành vi *(luồng F — **không** đưa vào repo này)* |
| Gắn domain `baika.website` | Tablet / Mobile — **chờ quyết**, xem §7 #9 |

---

## 7. Danh sách DỪNG LẠI HỎI — chưa ai chốt, agent không được tự quyết

Gặp mục nào dưới đây: **dựng phần còn lại, để trống chỗ này, hỏi Thắng.**

| # | Câu hỏi | Chặn phần nào |
| --- | --- | --- |
| 1 | ✅ **ĐÃ CHỐT 29/09 — Màu trụ riêng cho Remote Office:** `--dam` `#2E4716` · `--trung` `#58832C` *(Thắng đưa)* · `--nhat` `#B6D79B` *(Claude đề xuất theo quy luật 7 trụ, Thắng duyệt)*. Figma: biến `Colors/Page/Remote Office/*` + mode **"Remote Office"** trong bộ biến `Trụ`, frame Remote Office (nay là `913:4649`) đã chuyển sang mode này | — |
| 2 | ✅ **ĐÃ CHỐT 29/09 — Giá công khai**, đặt **thay vào nhãn nhỏ phía trên tên gói** (chỗ đang ghi «Kiểm tra» · «Hệ thống hóa» · «Hỗ trợ»). Figma chưa cập nhật chữ | — |
| 3 | ✅ **ĐÃ CHỐT 29/09 — Giá:** 4.900.000 · 9.900.000 · 19.900.000 đ/tháng, viết dạng «4.900.000 đ/tháng» · **có** dòng «Giá chưa gồm VAT…» dưới khối gói. Figma đã cập nhật | — |
| 4 | ✅ **ĐÃ CHỐT 01/10 — Ô "Nhóm công việc" = danh sách TICK**: đúng **8 nhóm của khối R3** (chữ lấy từ R3, một nguồn) · **tick sẵn 3 nhóm** — *02/10 đổi theo logic ban đầu: Hành chính · Nhân sự · Chăm sóc khách hàng (thay cho «3 nhóm đầu»)* (trang mở ra = ca 1, 18.400.000 đ) · bấm mở thì danh sách **đẩy nội dung xuống**, không nổi đè. Figma `Find Job` Variant2 sửa 7 → 8 dòng, đã dựng | — |
| 5 | ✅ **02/10 — Con số 1.800.000**: giữ, vì nằm trong logic ban đầu sếp chốt (Spec v3 §13.7) **[suy luận từ câu chốt của sếp — Thắng xác nhận lại nếu sếp muốn số khác]** | — |
| 6 | ✅ **ĐÃ CHỐT 01/10 — Nút «Gửi yêu cầu theo ước tính này»**: gửi ước tính **kèm** thông tin cá nhân của khách, API đưa về mail BAIKA. Cách làm (Thắng chọn): bấm nút → **điền sẵn bản tóm tắt ước tính vào ô «Mô tả vấn đề»** của form R9 → cuộn xuống → con trỏ vào ô «Tên». Khách sửa / viết thêm được. **Không sửa API** — mail về như mọi form khác. Chữ mẫu: `spec-noi-dung.md` §4.6 | — |
| 7 | ✅ **ĐÃ CHỐT 30/09 (L12)** — FAQ 5 câu theo spec cũ; **không** dựng khối Cam kết riêng | — |
| 8 | ✅ **ĐÃ CHỐT 30/09 — L1–L13** (`spec-noi-dung.md` §12). **Còn `L14`**: dòng pháp lý — đặt ở đâu | Liên hệ |
| 9 | ✅ **Tablet / Mobile cho R2 · R4 · R6** — Thắng vẽ 01/10 (`spec-giao-dien.md` §7). `L15`–`L20` ✅ chốt 01/10. **Còn:** bảng so sánh `#15` | Responsive |
| 10 | **Cỡ chữ số lớn "23,5"** — Figma vẽ 100px (ngoài thang, `display-1` = 80) · ⏸ **Đang chạy TẠM** `--fs-display-1` (80) — `CostSection.astro` | Khối chi phí |
| 11 | **Khoảng `10px`** trong stepper và `Table Item` — ngoài thang spacing (thang có 8 · 12) · ⏸ **Đang chạy TẠM** `--s-3` (12) | Ước tính · So sánh |
| 12 | **Form Liên hệ**: ~~nút~~ ✅ «Đặt lịch khảo sát» (L13, 30/09). **Còn:** danh sách ô "Lĩnh vực" cho trang này là gì? | Liên hệ |
| 13 | **Menu**: trang này có mục trong menu `baika.vn` không, hay chỉ vào từ ô bento trang chủ? | Header |
| 14 | ✅ **ĐÃ CHỐT 02/10 — SẾP: logic công cụ ước tính theo LOGIC BAN ĐẦU** — Spec v3 §13.6–13.7 (repo `remote-office-Sep-2026`, file `spec/BAIKA_Spec_v3_RemoteOffice_20260925.md`): gói theo **số nhóm việc** (1 → Khởi đầu · 2–3 → Vận hành · từ 4 → Trọn gói) · số vị trí 1–5 · chênh lệch không để âm · tick sẵn Hành chính / Nhân sự / Chăm sóc khách hàng. Luật mới đề xuất 29/09 (báo giá riêng, gói bị nâng) **bỏ** | — |
| 15 | ✅ **ĐÃ CHỐT 01/10 — `D1` = (a)**: tablet giữ bảng 3 cột · mobile mỗi tiêu chí một khối, **phân biệt bằng viền / nền + chú giải đầu bảng** (không lặp chữ «Tự tuyển» / «BAIKA»). Figma đã thay frame, R6 đã dựng | — |
| 16 | **Ô bảng `Table Item` Desktop/Tablet cao cố định 66px** — ngoài thang. Code đang để ô cao theo nội dung (padding `--s-4` → ô một dòng ~54px, thấp hơn Figma 12px). Giữ như code, hay chốt một giá trị? | So sánh · Ước tính |
| 17 | **Lề trang ở tablet**: frame tablet R2 · R4 · R6 lề **24**, các khối dùng lại (Hero, Gói, FAQ…) lề **40** theo `--le-trang`. Code dùng **40** cho cả trang để các khối thẳng mép. Chốt một số | Cả trang |
| 18 | ✅ **ĐÃ CHỐT 01/10 — (b)**: nền dòng «Tổng chi phí thật» (`Data` · Total) đổi `--opacity-light` → **`--opacity-white`**. Tương phản từ ≈ 3.5–4.0 : 1 (dưới AA) lên **≈ 6.7–9.8 : 1** (đo trên ảnh chụp 375 · 768 · 1280). Figma component + code đã đổi | — |

---

## 8. Xong nghĩa là gì — checklist nghiệm thu

- [ ] Mọi khối trong `spec-giao-dien.md` §1 đã dựng; khối dùng lại **đúng component có sẵn**, không viết lại.
- [ ] Mọi chữ khớp `spec-noi-dung.md`; chỗ còn lệch để trống có chú thích `CHỜ CHỐT`.
- [ ] Công cụ ước tính ra **đúng số** ở cả 11 ca của `spec-noi-dung.md` §4.3 — tối thiểu ca 1: 2 người × 10.000.000 → 14.150.000 / 28.300.000 / chênh lệch 18.400.000 / năm 220.800.000.
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
| 30/09/2026 | Claude (phiên với Thắng) | Dựng lần 1 trên nhánh `remote-office` (6 khối dùng lại). Trang đặt `noindex`, chưa gắn domain. Chữ TẠM ở tiêu đề R3 (`L5`) và nút form R9 (`L13`) — ghi rõ trong code |
| 01/10/2026 | Claude (phiên với Thắng) | Thắng chốt **L1–L13** → Figma, code (FAQ 5 câu, nút «Đặt lịch khảo sát» qua prop `submitLabel`) và spec sửa cùng commit. Node ID chuyển sang frame `913:4649`. Ghi thêm lỗi Figma #11–#13 (`spec-giao-dien.md` §8) |
| 01/10/2026 | Claude (phiên với Thắng) | Đọc Tablet + Mobile của R2 · R4 · R6 (`spec-giao-dien.md` §7). Áp L6 · L7 · L8 · L9 · L10 sang 6 frame mới. Mở `L15`–`L20` + `#15` |
| 01/10/2026 | Claude (phiên với Thắng) | Chốt `L15`–`L20` → Figma (tablet, mobile, và «Gói BAIKA» ở desktop) + spec. Vẽ đề xuất `D1` |
| 01/10/2026 | Claude (phiên với Thắng) | `D1` = (a). Thay frame Figma tablet/mobile R6 · **dựng R6** (`CompareSection.astro`). Mở #16 (ô cao 66) · #17 (lề tablet) |
| 01/10/2026 | Claude (phiên với Thắng) | R6 mobile: chú giải + viền/nền thay cho chữ lặp (Figma + code). Ghi lệnh push hai nhánh vào `quy-trinh-build.md` §3 |
| 02/10/2026 | Claude (phiên với Thắng) | **#14 + #5 chốt (sếp): logic ban đầu Spec v3** → `uoc-tinh.ts` viết lại (bỏ luật mới, bỏ trạng thái «báo giá riêng» / «gói bị nâng») · tick sẵn 3 nhóm theo Spec v3 (code + Figma `913:4733`) · 11 ca kiểm thử viết lại → 11/11 |
| 02/10/2026 | Claude (phiên với Thắng) | Kiểm trước khi domain mở: `/?thu-baika-website` ra Remote Office ✅ · 3 biến gửi mail `true` trên Preview ✅ · gửi form thật ✅. **Mail ghi đúng trang gửi** (Thắng duyệt, áp cho CẢ 9 trang): form gửi kèm `trang`; tiêu đề `[<tên miền>] Liên hệ mới / Yêu cầu theo ước tính — <Tên>`, dòng «Gửi từ: <tên miền>/<đường dẫn>». Domain chặn ở Nhân Hòa (xác minh chủ thể) — `quy-trinh-build.md` §5 |
| 01/10/2026 | Claude (phiên với Thắng) | **Nối `baika.website`**: Thắng chốt gắn vào nhánh `remote-office` (Preview), giữ `noindex`. Thêm `vercel.json` (`routes` — `rewrites` không chạy được cho `/` vì file tĩnh được ưu tiên, đã xác minh) + `canonical` = `https://baika.website/`. Các bước Thắng làm trên Vercel/DNS: `quy-trinh-build.md` §5 |
| 01/10/2026 | Claude (phiên với Thắng) | **#6 chốt** → nút gửi điền sẵn ước tính vào ô «Mô tả vấn đề» (`EstimatorSection.astro`) + spec cùng commit. Không đổi Figma (không có giao diện mới) |
| 01/10/2026 | Claude (phiên với Thắng) | **#18 = (b)** → Figma `Data` Total (2 variant) + `CostSection.astro` + spec cùng commit |
| 01/10/2026 | Claude (phiên với Thắng) | **#4 chốt** → Figma (`Find Job` 8 dòng tên thật, desktop tick 3 dòng đầu) + code (`CheckItem.astro` mới, ô chọn số nhóm → danh sách tick) + spec cùng commit. Thêm ca 10 (0 nhóm) · 11 (8 nhóm) |
| 01/10/2026 | Claude (phiên với Thắng) | **Dựng R2** (`CostSection.astro`) **+ R4** (`EstimatorSection.astro` · công thức ở `src/lib/uoc-tinh.ts`) → trang đủ 9/9 khối. #4 #5 #6 #10 #11 #14 ghi rõ lựa chọn TẠM đang chạy. Mở #18 (tương phản dòng Tổng) |
| 29/09/2026 | Claude (phiên với Thắng) | Chốt #3 con số giá + dòng VAT. Figma: nhãn nhỏ thẻ gói → giá, thêm chú thích giá |
| 29/09/2026 | Claude (phiên với Thắng) | Chốt #1 màu trụ + #2 giá công khai. Tạo biến + mode màu trong Figma. #3 đổi thành câu xác nhận con số giá |
| 29/09/2026 | Claude (phiên với Thắng) | Gộp `claude/remote-office-cong-thuc-uoc-tinh.md` (project Claude) vào §4 `spec-noi-dung.md` và §4 `spec-giao-dien.md`. Thêm câu hỏi #14. **Từ nay bản trong repo là bản chính** |
