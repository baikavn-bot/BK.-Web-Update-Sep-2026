// CÔNG CỤ ƯỚC TÍNH — phần TÍNH TOÁN (không có giao diện ở đây)
//
// ✅ 02/10/2026 — SẾP CHỐT: dùng LOGIC BAN ĐẦU của Spec v3 §13.6–13.7
//    (repo `baikavn-bot/remote-office-Sep-2026`, file
//    spec/BAIKA_Spec_v3_RemoteOffice_20260925.md). Luật "mới" đề xuất 29/09
//    (gói theo cả số người, báo giá riêng, gói bị nâng) đã BỎ.
//
// Nguồn: docs/remote-office/spec-noi-dung.md §4.1 (tham số) · §4.2 (luật chọn gói)
//        · §4.3 (ca kiểm thử — chạy `node --experimental-strip-types tools/kiem-tra-uoc-tinh.mts`).
//
// ⚠️ MỌI CON SỐ NẰM Ở ĐÂY, MỘT CHỖ. Đổi giá / tham số → chỉ sửa khối THAM_SO.
//    Giao diện (EstimatorSection.astro) chỉ gọi `uocTinh()` rồi vẽ theo `trangThai`.

export const THAM_SO = {
  /** Bảo hiểm phần doanh nghiệp đóng + kinh phí công đoàn: 21,5% + 2% = 23,5%.
   *  Viết dạng phần nghìn (1235) để tính bằng SỐ NGUYÊN — tránh lệch vài đồng. */
  heSoLuongPhanNghin: 1235,
  /** Chi phí cố định mỗi người (chỗ ngồi, thiết bị, tuyển dụng) — đúng Spec v3 §13.7. */
  chiPhiCoDinh: 1_800_000,
  luong: { min: 7_000_000, max: 25_000_000, buoc: 500_000, macDinh: 10_000_000 },
  /** Số vị trí nếu tự tuyển: 1–5, mặc định 2 (Spec v3 §13.7). */
  soNguoi: { min: 1, max: 5, macDinh: 2 },
  /** Ô "Nhóm công việc" = danh sách TICK 8 nhóm. Số nhóm = số ô đang tick (0…8).
   *  Tên 8 nhóm lấy từ khối R3 trên trang (một nguồn chữ). */
  soNhom: { min: 0, max: 8 },
  /** Ba nhóm tick sẵn khi mở trang — đúng Spec v3 §13.7. Phải trùng chữ với R3. */
  nhomMacDinh: ['Hành chính – văn thư', 'Nhân sự – tiền lương', 'Chăm sóc khách hàng'],
  goi: {
    'khoi-dau': { ten: 'Khởi đầu', gia: 4_900_000 },
    'van-hanh': { ten: 'Vận hành', gia: 9_900_000 },
    'tron-goi': { ten: 'Trọn gói', gia: 19_900_000 },
  },
} as const;

export type MaGoi = keyof typeof THAM_SO.goi;
export type TrangThai = 'binh-thuong' | 'khoi-luong-nho' | 'chua-chon-nhom';

export interface KetQua {
  trangThai: TrangThai;
  goi: MaGoi | null;             // null = chưa chọn nhóm việc
  tuTuyenMotNguoi: number;
  tuTuyen: number;
  giaGoi: number | null;
  chenhLechThang: number | null; // null khi không hiện số
  chenhLechNam: number | null;
}

/** Gói gợi ý THEO SỐ NHÓM VIỆC (Spec v3 §13.7):
 *  1 nhóm → Khởi đầu · 2–3 nhóm → Vận hành · từ 4 nhóm → Trọn gói. */
export function chonGoi(nhom: number): MaGoi {
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

  // Bỏ tick hết → chưa có gì để so (Spec v3 §13.6 «Chưa chọn nhóm việc»).
  if (nhom < 1) {
    return { trangThai: 'chua-chon-nhom', goi: null, tuTuyenMotNguoi, tuTuyen, giaGoi: null, chenhLechThang: null, chenhLechNam: null };
  }

  const goi = chonGoi(nhom);
  const giaGoi = THAM_SO.goi[goi].gia;
  const chenh = tuTuyen - giaGoi;
  // Không để số âm — chuyển trạng thái «Khối lượng nhỏ» (Spec v3 §13.6).
  if (chenh <= 0) {
    return { trangThai: 'khoi-luong-nho', goi, tuTuyenMotNguoi, tuTuyen, giaGoi, chenhLechThang: null, chenhLechNam: null };
  }
  return { trangThai: 'binh-thuong', goi, tuTuyenMotNguoi, tuTuyen, giaGoi, chenhLechThang: chenh, chenhLechNam: chenh * 12 };
}

/** 18400000 → «18.400.000 đ» (spec-noi-dung §4.4). */
export function dinhDangTien(v: number): string {
  return v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' đ';
}
