// KIỂM TRA CÔNG CỤ ƯỚC TÍNH — chạy 9 ca của docs/remote-office/spec-noi-dung.md §4.3
//
// Chạy:   node --experimental-strip-types tools/kiem-tra-uoc-tinh.mts
// Cần Node 22.6 trở lên (để Node đọc thẳng file .ts). Repo dùng Node 20 để build —
// file này chỉ dành cho agent kiểm tra, không nằm trong site.
//
// Ra «9/9» là đúng. Sếp đổi luật chọn gói (#14) hay con số 1.800.000 (#5) → sửa bảng
// ca bên dưới theo spec mới TRƯỚC, rồi mới sửa src/lib/uoc-tinh.ts.
// Ca 8: lương 3 triệu → hàm tự kẹp về 7 triệu (ô gõ tay chưa làm, nhưng hàm đã chịu được).

import { uocTinh, dinhDangTien } from '../src/lib/uoc-tinh.ts';

// ca · người · lương · nhóm · gói · tự tuyển · chênh lệch/tháng · /năm · trạng thái
type Ca = [number, number, number, number, string | null, number, number | null, number | null, string];
const ca: Ca[] = [
 [1,2,10_000_000,3,'van-hanh',28_300_000,18_400_000,220_800_000,'binh-thuong'],
 [2,2,10_000_000,4,'tron-goi',28_300_000,8_400_000,100_800_000,'goi-bi-nang'],
 [3,1,7_000_000,1,'van-hanh',10_445_000,545_000,6_540_000,'binh-thuong'],
 [4,1,7_000_000,4,'tron-goi',10_445_000,null,null,'khoi-luong-nho'],
 [5,3,25_000_000,2,'tron-goi',98_025_000,78_125_000,937_500_000,'binh-thuong'],
 [6,5,10_000_000,3,null,70_750_000,null,null,'bao-gia-rieng'],
 [7,2,10_000_000,6,null,28_300_000,null,null,'bao-gia-rieng'],
 [8,2,3_000_000,3,'van-hanh',20_890_000,10_990_000,131_880_000,'binh-thuong'],
 [9,2,10_300_000,3,'van-hanh',29_041_000,19_141_000,229_692_000,'binh-thuong'],
];
let ok = 0;
for (const [i,n,l,g,goi,tt,cl,nam,st] of ca) {
  const r = uocTinh(n,l,g);
  const pass = r.goi===goi && r.tuTuyen===tt && r.chenhLechThang===cl && r.chenhLechNam===nam && r.trangThai===st;
  if (pass) ok++;
  console.log(`ca ${i}: ${pass?'DUNG':'SAI '} goi=${r.goi} tuTuyen=${r.tuTuyen} chenh=${r.chenhLechThang} nam=${r.chenhLechNam} ${r.trangThai}`);
}
console.log(dinhDangTien(18400000), '|', ok+'/9');
if (ok !== ca.length) process.exit(1);
