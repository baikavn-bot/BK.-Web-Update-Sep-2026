// CÔNG CỤ CHẨN ĐOÁN THƯƠNG HIỆU — Brand Diagnostic (/marketing/diagnostic)
// =========================================================================
// Dữ liệu + phép tính, không có giao diện. Chép NGUYÊN VĂN logic và câu chữ của
// v1 (`docs/trang-con-thieu/du-lieu/ban-cu/baika-brand-launch-system__diagnostic.html`,
// hàm `computeScores` + `mapPackage`). Sếp chốt 05/10/2026: dùng lại logic v1.
//
// ✅ Sếp chốt GIỮ NGUYÊN chỗ lệch của v1: câu chấm điểm KHÔNG bắt trả lời, câu bỏ
//    trống bị loại khỏi mẫu số → trả lời 1 câu «Rồi» là được 100. ĐỪNG «sửa» nếu
//    chưa hỏi lại.
//
// Khác v1, có chủ ý: v1 có «gói đang tắt trong trang quản trị → chuyển gói khác».
// v2 không có trang quản trị → cả 3 gói luôn bật → bước chuyển gói không bao giờ xảy ra,
// nên không chép.

export const MUC_TRA_LOI = [
  { gt: '0', nhan: 'Chưa', phu: 'Chưa có' },
  { gt: '0.5', nhan: 'Một phần', phu: 'Đang làm' },
  { gt: '1', nhan: 'Rồi', phu: 'Đã có' },
] as const;

type LuaChon = { gt: string; nhan: string };

export const QUY_MO: LuaChon[] = [
  { gt: '1_10', nhan: '1–10' }, { gt: '11_50', nhan: '11–50' }, { gt: '51_200', nhan: '51–200' },
  { gt: '201_500', nhan: '201–500' }, { gt: '500_plus', nhan: '>500' },
];
export const GIAI_DOAN: LuaChon[] = [
  { gt: 'idea', nhan: 'Ý tưởng' }, { gt: 'prototype', nhan: 'Prototype' }, { gt: 'ready_to_launch', nhan: 'Sắp ra mắt' },
  { gt: 'already_launched', nhan: 'Đã ra mắt' }, { gt: 'repositioning', nhan: 'Tái định vị' },
];
export const THOI_HAN: LuaChon[] = [
  { gt: 'under_2_weeks', nhan: '<2 tuần' }, { gt: '2_4_weeks', nhan: '2–4 tuần' }, { gt: '1_3_months', nhan: '1–3 tháng' },
  { gt: '3_6_months', nhan: '3–6 tháng' }, { gt: 'not_fixed', nhan: 'Chưa cố định' },
];
export const NGAN_SACH: LuaChon[] = [
  { gt: 'under_30m', nhan: '<30 triệu' }, { gt: '30m_70m', nhan: '30–70 triệu' }, { gt: '70m_150m', nhan: '70–150 triệu' },
  { gt: '150m_300m', nhan: '150–300 triệu' }, { gt: 'over_300m', nhan: '>300 triệu' }, { gt: 'not_disclosed', nhan: 'Chưa tiết lộ' },
];

export type Truc = 'brand' | 'imc' | 'launch' | 'sales' | 'content' | 'measurement';
/** Thứ tự hiển thị 6 trục ở màn kết quả. */
export const THU_TU_TRUC: Truc[] = ['brand', 'imc', 'launch', 'sales', 'content', 'measurement'];
export const TEN_TRUC: Record<Truc, string> = {
  brand: 'Brand Foundation', imc: 'IMC / Truyền thông', launch: 'Launch Plan',
  sales: 'Sales Enablement', content: 'Content', measurement: 'Đo lường',
};

/** 15 câu chấm điểm: mã · câu hỏi · trục · trọng số. */
export const CAU_CHAM_DIEM: Array<{ ma: string; cau: string; truc: Truc; trongSo: number }> = [
  { ma: 'usp_clear', cau: 'Điểm khác biệt (USP) của sản phẩm đã rõ chưa?', truc: 'brand', trongSo: 1 },
  { ma: 'product_ready', cau: 'Sản phẩm đã sẵn sàng ra mắt thị trường chưa?', truc: 'launch', trongSo: 2 },
  { ma: 'positioning', cau: 'Định vị thương hiệu đã rõ ràng chưa?', truc: 'brand', trongSo: 2 },
  { ma: 'identity', cau: 'Bộ nhận diện (logo/visual) đã có chưa?', truc: 'brand', trongSo: 1 },
  { ma: 'core_message', cau: 'Thông điệp cốt lõi đã thống nhất chưa?', truc: 'brand', trongSo: 1 },
  { ma: 'channels_integrated', cau: 'Các kênh truyền thông đã được lên kế hoạch tích hợp chưa?', truc: 'imc', trongSo: 2 },
  { ma: 'mkt_sales_aligned', cau: 'Marketing và sales có nói cùng một thông điệp không?', truc: 'imc', trongSo: 1 },
  { ma: 'content_calendar', cau: 'Đã có lịch nội dung/chiến dịch chưa?', truc: 'content', trongSo: 1 },
  { ma: 'sales_materials', cau: 'Đội sales đã có tài liệu chốt khách (deck/proposal) chưa?', truc: 'sales', trongSo: 2 },
  { ma: 'sales_process', cau: 'Quy trình bán hàng đã rõ ràng chưa?', truc: 'sales', trongSo: 1 },
  { ma: 'launch_goal_clear', cau: 'Mục tiêu ra mắt (KPI) đã rõ ràng chưa?', truc: 'launch', trongSo: 2 },
  { ma: 'launch_plan', cau: 'Đã có kế hoạch ra mắt chi tiết chưa?', truc: 'launch', trongSo: 1 },
  { ma: 'measurement_plan', cau: 'Đã có cách đo lường hiệu quả launch chưa?', truc: 'measurement', trongSo: 1 },
  { ma: 'tracking_dashboard', cau: 'Đã có dashboard/công cụ theo dõi chưa?', truc: 'measurement', trongSo: 1 },
  { ma: 'content_capacity', cau: 'Năng lực sản xuất nội dung đã sẵn sàng chưa?', truc: 'content', trongSo: 1 },
];
const CAU = Object.fromEntries(CAU_CHAM_DIEM.map((c) => [c.ma, c]));

/**
 * 8 nhóm (bước). Nhóm 1 = thông tin liên hệ; 2–6 = câu chấm điểm (đúng thứ tự v1);
 * 7 = thời hạn; 8 = ngân sách + đồng ý.
 */
export const NHOM = [
  { ten: 'Thông tin doanh nghiệp', moTa: 'Thông tin để BAIKA liên hệ & phân loại.', cau: [] as string[] },
  { ten: 'Tình trạng sản phẩm', moTa: 'Mức độ sẵn sàng của sản phẩm.', cau: ['product_ready', 'usp_clear'] },
  { ten: 'Tình trạng thương hiệu', moTa: 'Nền tảng thương hiệu hiện tại.', cau: ['positioning', 'identity', 'core_message'] },
  { ten: 'Tình trạng truyền thông', moTa: 'Hiện trạng truyền thông tích hợp.', cau: ['channels_integrated', 'mkt_sales_aligned', 'content_calendar'] },
  { ten: 'Tình trạng sales enablement', moTa: 'Khả năng hỗ trợ đội bán hàng.', cau: ['sales_materials', 'sales_process'] },
  { ten: 'Mục tiêu launch', moTa: 'Mục tiêu, kế hoạch & đo lường ra mắt.', cau: ['launch_goal_clear', 'launch_plan', 'measurement_plan', 'tracking_dashboard', 'content_capacity'] },
  { ten: 'Timeline mong muốn', moTa: 'Thời gian dự kiến ra mắt.', cau: [] as string[] },
  { ten: 'Ngân sách dự kiến', moTa: 'Ngân sách & xác nhận tư vấn.', cau: [] as string[] },
].map((n) => ({ ...n, cauHoi: n.cau.map((m) => CAU[m]) }));

export type MaGoiTH = 'brand_foundation' | 'imc_launch_blueprint' | 'brand_to_market_launch';
export const GOI_TH: Record<MaGoiTH, { ten: string; moTa: string; hangMuc: string[] }> = {
  brand_foundation: { ten: 'Brand Foundation', moTa: 'Dựng nền tảng thương hiệu vững trước khi ra mắt.', hangMuc: ['Brand Diagnosis', 'Brand Strategy', 'Messaging System', 'Visual Identity Direction'] },
  imc_launch_blueprint: { ten: 'IMC Launch Blueprint', moTa: 'Lập kế hoạch truyền thông tích hợp cho chiến dịch.', hangMuc: ['Brand Foundation', 'IMC Blueprint', 'Launch Plan', 'Content Production Direction'] },
  brand_to_market_launch: { ten: 'Brand-to-Market Launch', moTa: 'Trọn gói từ thương hiệu đến thị trường và bán hàng.', hangMuc: ['IMC Launch Blueprint', 'Sales Enablement Kit', 'Launch Dashboard', 'Đồng hành ra mắt'] },
};

export interface KetQuaTH {
  /** Điểm từng trục, 0–100. Trục không có câu nào được trả lời = 0. */
  truc: Record<Truc, number>;
  /** Brand Readiness Score, 0–100. */
  tong: number;
  muc: 'Khởi đầu' | 'Đang định hình' | 'Sẵn sàng' | 'Sẵn sàng cao';
  goi: MaGoiTH;
  /** Thời hạn «<2 tuần» + ngân sách «<30 triệu» → hiện ghi chú kỳ vọng chưa khớp. */
  lechKyVong: boolean;
}

/**
 * @param traLoi mã câu → '0' | '0.5' | '1' (bỏ trống = không có khoá hoặc chuỗi rỗng)
 * @param thoiHan mã thời hạn ('' nếu chưa chọn) · @param nganSach mã ngân sách
 */
export function tinhThuongHieu(traLoi: Record<string, string>, thoiHan: string, nganSach: string): KetQuaTH {
  const tho: Record<Truc, number> = { brand: 0, imc: 0, launch: 0, sales: 0, content: 0, measurement: 0 };
  const tran: Record<Truc, number> = { brand: 0, imc: 0, launch: 0, sales: 0, content: 0, measurement: 0 };
  let tongTho = 0;
  let tongTran = 0;
  for (const c of CAU_CHAM_DIEM) {
    const v = traLoi[c.ma];
    if (v === '' || v == null) continue;           // bỏ trống → không tính vào mẫu số (giữ y v1)
    const d = Number(v);
    tho[c.truc] += d * c.trongSo;
    tran[c.truc] += c.trongSo;
    tongTho += d * c.trongSo;
    tongTran += c.trongSo;
  }
  const truc = Object.fromEntries(
    THU_TU_TRUC.map((k) => [k, tran[k] ? Math.round((tho[k] / tran[k]) * 100) : 0]),
  ) as Record<Truc, number>;
  const tong = tongTran ? Math.round((tongTho / tongTran) * 100) : 0;
  const muc = tong < 30 ? 'Khởi đầu' : tong < 60 ? 'Đang định hình' : tong < 80 ? 'Sẵn sàng' : 'Sẵn sàng cao';

  // Luật chọn gói — điều kiện ĐẦU TIÊN đúng thì dừng.
  const soTrucThap = THU_TU_TRUC.filter((k) => truc[k] < 50).length;
  const coThoiHan = !!thoiHan && thoiHan !== 'not_fixed';
  let goi: MaGoiTH;
  if (soTrucThap >= 4 && coThoiHan) goi = 'brand_to_market_launch';
  else if (truc.brand >= 45 && truc.imc < 65) goi = 'imc_launch_blueprint';
  else if (truc.brand < 45) goi = 'brand_foundation';
  else goi = 'imc_launch_blueprint';

  const lechKyVong = thoiHan === 'under_2_weeks' && nganSach === 'under_30m';
  return { truc, tong, muc, goi, lechKyVong };
}
