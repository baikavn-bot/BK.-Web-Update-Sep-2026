// CÔNG CỤ ƯỚC TÍNH — phần TÍNH TOÁN (không có giao diện ở đây)
//
// Nguồn: docs/remote-office/spec-noi-dung.md §4.1 (tham số) · §4.2 (luật chọn gói)
//        · §4.3 (9 ca kiểm thử — chạy `node --experimental-strip-types` hoặc
//        xem tools ghi trong quy-trinh-build.md §4.4).
//
// ⚠️ MỌI CON SỐ NẰM Ở ĐÂY, MỘT CHỖ. Đổi giá / tham số → chỉ sửa khối THAM_SO.
//    Giao diện (EstimatorSection.astro) chỉ gọi `uocTinh()` rồi vẽ theo `trangThai`.

export const THAM_SO = {
  /** Bảo hiểm phần doanh nghiệp đóng + kinh phí công đoàn: 21,5% + 2% = 23,5%.
   *  Viết dạng phần nghìn (1235) để tính bằng SỐ NGUYÊN — tránh lệch vài đồng. */
  heSoLuongPhanNghin: 1235,
  /** ⏸ Chi phí cố định mỗi người (chỗ ngồi, thiết bị, tuyển dụng).
   *  Spec cũ ghi "giả định" — CHỜ SẾP DUYỆT (SPEC-MASTER §7 #5). */
  chiPhiCoDinh: 1_800_000,
  luong: { min: 7_000_000, max: 25_000_000, buoc: 500_000, macDinh: 10_000_000 },
  soNguoi: { min: 1, max: 5, macDinh: 2 },
  /** Ô "Nhóm công việc" = danh sách TICK 8 nhóm (Thắng chốt #4 ngày 01/10).
   *  Số nhóm = số ô đang tick (0…8). Mặc định tick sẵn 3 nhóm đầu.
   *  Tên 8 nhóm KHÔNG nằm ở đây — lấy từ khối R3 trên trang (một nguồn chữ). */
  soNhom: { min: 0, max: 8, macDinh: 3 },
  goi: {
    'khoi-dau': { ten: 'Khởi đầu', gia: 4_900_000, nhomToiDa: 1, nguoiToiDa: 0.5 },
    'van-hanh': { ten: 'Vận hành', gia: 9_900_000, nhomToiDa: 3, nguoiToiDa: 2 },
    'tron-goi': { ten: 'Trọn gói', gia: 19_900_000, nhomToiDa: 5, nguoiToiDa: 4 },
  },
} as const;

/** ⏸ LUẬT CHỌN GÓI — CHỜ SẾP DUYỆT (SPEC-MASTER §7 #14).
 *  'moi' (đang dùng): gói nhỏ nhất đáp ứng CẢ số người lẫn số nhóm; vượt → báo giá riêng.
 *     Chọn tạm vì THẬN TRỌNG hơn: không bao giờ báo khoản tiết kiệm phóng đại.
 *  'cu': chỉ theo số nhóm (spec v3 §13.7).
 *  Đổi luật = đổi đúng dòng này. */
export const LUAT_CHON_GOI: 'moi' | 'cu' = 'moi';

export type MaGoi = keyof typeof THAM_SO.goi;
export type TrangThai = 'binh-thuong' | 'goi-bi-nang' | 'khoi-luong-nho' | 'bao-gia-rieng' | 'chua-chon-nhom';

export interface KetQua {
  trangThai: TrangThai;
  goi: MaGoi | null;            // null = báo giá riêng
  tuTuyenMotNguoi: number;
  tuTuyen: number;
  giaGoi: number | null;
  chenhLechThang: number | null; // null khi không hiện số
  chenhLechNam: number | null;
}

const thuTu: MaGoi[] = ['khoi-dau', 'van-hanh', 'tron-goi'];

function chonGoiMoi(nguoi: number, nhom: number): { goi: MaGoi | null; theoNguoi: MaGoi | null } {
  const vua = (m: MaGoi, n: number, g: number) => n <= THAM_SO.goi[m].nguoiToiDa && g <= THAM_SO.goi[m].nhomToiDa;
  const goi = thuTu.find((m) => vua(m, nguoi, nhom)) ?? null;
  const theoNguoi = thuTu.find((m) => nguoi <= THAM_SO.goi[m].nguoiToiDa) ?? null;
  return { goi, theoNguoi };
}

function chonGoiCu(nhom: number): MaGoi {
  if (nhom <= 1) return 'khoi-dau';
  if (nhom <= 3) return 'van-hanh';
  return 'tron-goi';
}

/** Kẹp về khoảng cho phép, làm tròn tới 1.000 đ. */
export function kepLuong(v: number): number {
  const { min, max } = THAM_SO.luong;
  return Math.min(max, Math.max(min, Math.round(v / 1000) * 1000));
}

export function uocTinh(nguoi: number, luong: number, nhom: number): KetQua {
  const l = kepLuong(luong);
  const tuTuyenMotNguoi = Math.round((l * THAM_SO.heSoLuongPhanNghin) / 1000) + THAM_SO.chiPhiCoDinh;
  const tuTuyen = tuTuyenMotNguoi * nguoi;

  // Bỏ tick hết → chưa có gì để so (spec-noi-dung §4.5 «Chưa chọn nhóm việc»).
  if (nhom < 1) {
    return { trangThai: 'chua-chon-nhom', goi: null, tuTuyenMotNguoi, tuTuyen, giaGoi: null, chenhLechThang: null, chenhLechNam: null };
  }

  let goi: MaGoi | null;
  let biNang = false;
  if (LUAT_CHON_GOI === 'moi') {
    const r = chonGoiMoi(nguoi, nhom);
    goi = r.goi;
    biNang = goi !== null && r.theoNguoi !== null && thuTu.indexOf(goi) > thuTu.indexOf(r.theoNguoi);
  } else {
    goi = chonGoiCu(nhom);
  }

  if (goi === null) {
    return { trangThai: 'bao-gia-rieng', goi, tuTuyenMotNguoi, tuTuyen, giaGoi: null, chenhLechThang: null, chenhLechNam: null };
  }
  const giaGoi = THAM_SO.goi[goi].gia;
  const chenh = tuTuyen - giaGoi;
  if (chenh <= 0) {
    return { trangThai: 'khoi-luong-nho', goi, tuTuyenMotNguoi, tuTuyen, giaGoi, chenhLechThang: null, chenhLechNam: null };
  }
  return {
    trangThai: biNang ? 'goi-bi-nang' : 'binh-thuong',
    goi, tuTuyenMotNguoi, tuTuyen, giaGoi,
    chenhLechThang: chenh, chenhLechNam: chenh * 12,
  };
}

/** 18400000 → «18.400.000 đ» (spec-noi-dung §4.4). */
export function dinhDangTien(v: number): string {
  return v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' đ';
}
