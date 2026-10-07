// CÔNG CỤ CHẨN ĐOÁN KIỂU A — CEO Blueprint · Finance · Remote Ops
// ===================================================================
// Ba công cụ dùng CHUNG một cách tính, chỉ khác bộ câu hỏi và lời kết luận.
// File này KHÔNG có giao diện — chỉ có dữ liệu và phép tính, để kiểm được
// bằng `pnpm kiem-tra:chan-doan` mà không cần mở trình duyệt.
//
// NGUỒN: logic + câu chữ chép NGUYÊN VĂN từ site cũ baika.vn (v1), đọc ngày
// 05/10/2026 — bản lưu: `docs/trang-con-thieu/du-lieu/ban-cu/*__assessment.html`,
// `remote-ops__survey.html`. Mô tả công thức: `docs/trang-con-thieu/cong-cu-chan-doan-v1.md`.
//
// ✅ Sếp chốt 05/10/2026: «dùng lại logic v1», và GIỮ NGUYÊN cả 2 chỗ lệch của v1:
//   · Làm tròn 2 lần (điểm nhóm làm tròn rồi mới tính tổng) → tổng có thể lệch
//     tới ±5 so với tỉ lệ thật. ĐỪNG «sửa» chỗ này nếu chưa hỏi lại.
// (Chỗ lệch thứ hai thuộc công cụ Thương hiệu — xem thuong-hieu.ts.)

/** Thang trả lời 4 mức, điểm 0–3 theo thứ tự. */
export const THANG_DIEM = [
  'Chưa có gì',
  'Mới manh nha',
  'Có nhưng chưa ổn định',
  'Đã thành hệ thống',
] as const;

export interface NhomCauHoi {
  /** Mã nhóm của v1 — giữ nguyên để đối chiếu với dữ liệu cũ. */
  ma: string;
  ten: string;
  cauHoi: string[];
}

/** Một mức kết quả theo khoảng điểm tổng (0–100). */
export interface MucKetQua {
  tu: number;
  den: number;
  ten: string;
  moTa: string;
  /** Tên gói / lộ trình đề xuất. */
  goi: string;
}

export interface CongCuKieuA {
  /** Slug trang dịch vụ — cũng là phần đầu đường dẫn công cụ. */
  trang: 'ceo-blueprint' | 'finance' | 'remote-ops';
  /** Mã công cụ của v1 (ghi vào mail để đối chiếu). */
  maV1: string;
  /** Đường dẫn trang công cụ. */
  duongDan: string;
  nhanTru: string;
  tieuDe: string;
  moTa: string;
  dongPhu: string;
  /** Tên gọi một nhóm ở dòng tiến độ: «Khu vực» (v1 dùng cho cả 3). */
  tenNhom: string;
  nhom: NhomCauHoi[];
  muc: MucKetQua[];
  /** Chữ trên nút liên hệ ở màn kết quả. */
  nutTuVan: string;
  /** v1 chỉ Finance hiện «Điểm ước tính hiện tại» lúc đang làm. */
  coDiemUocTinh: boolean;
}

/** Mã một câu: `<mã nhóm>_<số thứ tự từ 1>` — đúng cách v1 đặt. */
export const maCau = (nhom: NhomCauHoi, i: number) => `${nhom.ma}_${i + 1}`;

export const soCau = (cc: CongCuKieuA) =>
  cc.nhom.reduce((n, g) => n + g.cauHoi.length, 0);

export interface KetQuaKieuA {
  /** Điểm từng nhóm, 0–10 (đã làm tròn). */
  nhom: Array<{ ma: string; ten: string; diem: number }>;
  /** Điểm tổng, 0–100. */
  tong: number;
  muc: MucKetQua;
  /** Mã 3 nhóm điểm thấp nhất — «nên bắt đầu». Cùng điểm thì nhóm đứng trước được chọn trước. */
  yeu: string[];
}

/**
 * Tính kết quả — chép đúng hàm `calc()` của v1:
 *   điểm nhóm = làm tròn( tổng điểm câu ÷ (số câu × 3) × 10 )
 *   điểm tổng = làm tròn( trung bình điểm nhóm × 10 )
 * Câu chưa trả lời tính 0 (v1 bắt trả lời đủ trước khi qua nhóm, nên thực tế không xảy ra).
 */
export function tinhKieuA(cc: CongCuKieuA, traLoi: Record<string, number>): KetQuaKieuA {
  const nhom = cc.nhom.map((g) => {
    let s = 0;
    g.cauHoi.forEach((_, i) => { s += traLoi[maCau(g, i)] ?? 0; });
    return { ma: g.ma, ten: g.ten, diem: Math.round((s / (g.cauHoi.length * 3)) * 10) };
  });
  const tong = Math.round((nhom.reduce((a, p) => a + p.diem, 0) / nhom.length) * 10);
  const muc = cc.muc.find((m) => tong >= m.tu && tong <= m.den) ?? cc.muc[0];
  const yeu = nhom.slice().sort((a, b) => a.diem - b.diem).slice(0, 3).map((p) => p.ma);
  return { nhom, tong, muc, yeu };
}

/** «Điểm ước tính hiện tại» lúc đang làm (chỉ Finance hiện) — đúng công thức v1. */
export function diemUocTinh(traLoi: Record<string, number>): number {
  const vals = Object.values(traLoi);
  if (!vals.length) return 0;
  return Math.round((vals.reduce((a, b) => a + b, 0) / (vals.length * 3)) * 100);
}

// ─── DỮ LIỆU 3 CÔNG CỤ — nguyên văn v1 ─────────────────────────────────

export const CEO_BLUEPRINT: CongCuKieuA = {
  trang: 'ceo-blueprint',
  maV1: 'BLUEPRINT_ASSESSMENT',
  duongDan: '/ceo-blueprint/assessment',
  nhanTru: 'CEO OPERATING BLUEPRINT',
  tieuDe: 'Business Blueprint Assessment',
  moTa: 'Tự đánh giá doanh nghiệp theo 10 trụ cột — nhận bản đồ điểm mạnh, điểm yếu và lộ trình phù hợp',
  dongPhu: '30 câu hỏi · 10 trụ cột · khoảng 7 phút · kết quả hiển thị ngay',
  tenNhom: 'Khu vực',
  coDiemUocTinh: false,
  nutTuVan: 'Đăng ký tư vấn chương trình',
  nhom: [
    { ma: 'CEO_SYSTEM_THINKING', ten: 'Tư duy hệ thống CEO', cauHoi: [
      'Tôi có bức tranh tổng thể doanh nghiệp trên giấy (sơ đồ, bản đồ hệ thống), không chỉ trong đầu.',
      'Các quyết định lớn được đưa ra theo khung tiêu chí rõ ràng, không thuần cảm tính.',
      'Tôi chủ động thiết kế cách doanh nghiệp vận hành thay vì chỉ xử lý sự vụ phát sinh.',
    ] },
    { ma: 'BUSINESS_FOUNDATION', ten: 'Nền tảng kinh doanh', cauHoi: [
      'Chân dung khách hàng mục tiêu được mô tả rõ và cả đội ngũ hiểu giống nhau.',
      'Giá trị khác biệt của doanh nghiệp được viết ra và kiểm chứng bằng phản hồi khách hàng.',
      'Lợi thế cạnh tranh hiện tại khó bị sao chép trong 1–2 năm tới.',
    ] },
    { ma: 'REVENUE_LOGIC', ten: 'Logic doanh thu', cauHoi: [
      'Tôi biết chính xác mảng nào đang tạo lợi nhuận thật, mảng nào đang bù lỗ.',
      'Giá bán được tính từ số liệu chi phí và biên lợi nhuận, không chỉ nhìn theo đối thủ.',
      'Doanh thu có tính lặp lại và dự báo được, không phụ thuộc vài thương vụ may rủi.',
    ] },
    { ma: 'OPERATING_SYSTEM', ten: 'Hệ điều hành doanh nghiệp', cauHoi: [
      'Các quy trình lõi được viết thành văn bản và đội ngũ làm theo.',
      'Mỗi vị trí có mô tả vai trò – trách nhiệm – quyền quyết định rõ ràng.',
      'Doanh nghiệp vận hành bình thường khi tôi vắng mặt 2 tuần.',
    ] },
    { ma: 'FINANCE_CASHFLOW', ten: 'Tài chính & dòng tiền', cauHoi: [
      'Tôi nhận được báo cáo quản trị định kỳ và tin vào số liệu đó.',
      'Dòng tiền được lập kế hoạch trước ít nhất 4–8 tuần.',
      'Tôi biết điểm hòa vốn và ngưỡng an toàn tiền mặt của doanh nghiệp.',
    ] },
    { ma: 'MARKETING_GROWTH', ten: 'Marketing & tăng trưởng', cauHoi: [
      'Doanh nghiệp có định vị rõ và thông điệp nhất quán trên các kênh.',
      'Có kênh tạo khách hàng ổn định, đo được chi phí cho mỗi khách hàng mới.',
      'Kế hoạch marketing gắn với mục tiêu doanh thu, có ngân sách và KPI.',
    ] },
    { ma: 'LEGAL_TAX_RISK', ten: 'Rủi ro pháp lý – thuế', cauHoi: [
      'Hợp đồng quan trọng được soát xét trước khi ký.',
      'Nghĩa vụ thuế được theo dõi theo lịch tuân thủ, không bị động chờ nhắc.',
      'Tài sản cá nhân của tôi và tài sản công ty được tách bạch rõ ràng.',
    ] },
    { ma: 'TECH_AI', ten: 'Công nghệ & AI', cauHoi: [
      'Dữ liệu kinh doanh quan trọng nằm trong hệ thống, không rải rác trong file cá nhân.',
      'Công cụ phần mềm hiện tại phục vụ tốt các quy trình chính.',
      'Doanh nghiệp đã ứng dụng AI có kiểm soát vào ít nhất một khâu công việc.',
    ] },
    { ma: 'CEO_DASHBOARD', ten: 'CEO Dashboard', cauHoi: [
      'Tôi có bộ chỉ số cốt lõi xem định kỳ hằng tuần.',
      'Số liệu điều hành được cập nhật tự động hoặc bán tự động, không đợi tổng hợp tay.',
      'Khi chỉ số bất thường, tôi biết trong vài ngày chứ không phải đến cuối quý.',
    ] },
    { ma: 'ROADMAP_90_DAYS', ten: 'Lộ trình 90 ngày', cauHoi: [
      'Doanh nghiệp có mục tiêu 90 ngày được viết ra với chỉ số đo được.',
      'Ưu tiên của tôi trong quý gắn với mục tiêu đó, không bị cuốn theo sự vụ.',
      'Cuối mỗi quý có phiên nhìn lại: điều gì đạt, điều gì cần rút kinh nghiệm.',
    ] },
  ],
  muc: [
    { tu: 0, den: 39, ten: 'Nền hệ thống đang mỏng', goi: 'Chương trình CEO Operating Blueprint',
      moTa: 'Doanh nghiệp đang vận hành chủ yếu dựa trên kinh nghiệm và sự có mặt của người đứng đầu. Chương trình trọn bộ CEO Operating Blueprint sẽ giúp bạn dựng bản đồ từ nền móng.' },
    { tu: 40, den: 69, ten: 'Có nền nhưng chưa thành hệ thống', goi: 'Chương trình CEO Operating Blueprint',
      moTa: 'Một số trụ đã hình thành nhưng chưa nối thành hệ thống hoàn chỉnh. Nên vào chương trình trọn bộ với trọng tâm là các trụ cột yếu nhất bên dưới.' },
    { tu: 70, den: 100, ten: 'Nền hệ thống khá vững', goi: 'Đồng hành cố vấn CEO',
      moTa: 'Doanh nghiệp đã có nền tốt. Giai đoạn này phù hợp với cố vấn 1-1 để tinh chỉnh các trụ còn yếu và nâng chuẩn quyết định của người đứng đầu.' },
  ],
};

export const FINANCE: CongCuKieuA = {
  trang: 'finance',
  maV1: 'FINANCE_ASSESSMENT',
  duongDan: '/finance/assessment',
  nhanTru: 'FINANCE READINESS',
  tieuDe: 'Finance Readiness Assessment',
  moTa: 'Đánh giá mức độ sẵn sàng của hệ thống tài chính doanh nghiệp trên 8 khu vực trọng yếu',
  dongPhu: '16 câu hỏi · 8 khu vực · khoảng 5 phút · kết quả hiển thị ngay',
  tenNhom: 'Khu vực',
  coDiemUocTinh: true,
  nutTuVan: 'Đăng ký đánh giá cùng chuyên gia',
  nhom: [
    { ma: 'ACCOUNTING', ten: 'Sổ sách kế toán', cauHoi: [
      'Số liệu kế toán phản ánh đúng thực tế kinh doanh của doanh nghiệp.',
      'Không còn khoản treo hoặc sai lệch tồn đọng kéo dài qua nhiều kỳ.',
    ] },
    { ma: 'DOCUMENTS', ten: 'Hóa đơn – chứng từ', cauHoi: [
      'Chứng từ đầy đủ, lưu trữ có hệ thống, truy xuất được trong vài phút.',
      'Quy trình phát hành và kiểm tra hóa đơn được kiểm soát chặt.',
    ] },
    { ma: 'WORKFLOW', ten: 'Quy trình tài chính', cauHoi: [
      'Đề nghị – duyệt chi có cấp phê duyệt và hạn mức rõ ràng.',
      'Tạm ứng, hoàn ứng, mua hàng, thanh toán đều theo quy trình chuẩn.',
    ] },
    { ma: 'REPORTING', ten: 'Báo cáo quản trị', cauHoi: [
      'CEO nhận báo cáo quản trị định kỳ: lãi lỗ theo mảng, cơ cấu chi phí.',
      'Các quyết định kinh doanh quan trọng dựa trên báo cáo đó.',
    ] },
    { ma: 'CASHFLOW', ten: 'Dòng tiền', cauHoi: [
      'Có kế hoạch thu – chi theo tuần hoặc theo tháng.',
      'Thiếu hụt tiền được dự báo trước, không rơi vào thế bị động.',
    ] },
    { ma: 'CAPITAL', ten: 'Sẵn sàng vốn', cauHoi: [
      'Hồ sơ tài chính đủ chuẩn khi ngân hàng hoặc nhà đầu tư yêu cầu.',
      'Có mô hình số liệu (doanh thu, chi phí, dự báo) trình bày được ngay.',
    ] },
    { ma: 'GOVERNANCE', ten: 'Quản trị tài chính', cauHoi: [
      'Phân quyền tài chính rõ ràng: ai duyệt gì, hạn mức bao nhiêu.',
      'Có cơ chế kiểm soát nội bộ hoặc đối chiếu chéo định kỳ.',
    ] },
    { ma: 'TAX_RISK', ten: 'Rủi ro thuế', cauHoi: [
      'Nghĩa vụ thuế được theo dõi theo lịch tuân thủ.',
      'Rủi ro thuế đã được rà soát trong 12 tháng gần đây.',
    ] },
  ],
  muc: [
    { tu: 0, den: 39, ten: 'Rủi ro cao — cần chẩn đoán ngay', goi: 'Finance Health Check',
      moTa: 'Hệ thống tài chính đang ở vùng rủi ro: số liệu khó tin cậy, kiểm soát mỏng. Bắt đầu bằng Finance Health Check để biết chính xác cần xử lý gì trước.' },
    { tu: 40, den: 69, ten: 'Cần làm sạch và thiết lập kiểm soát', goi: 'Finance Clean-Up & Control',
      moTa: 'Nền đã có nhưng còn nhiều lỗ hổng ở số liệu và quy trình. Gói Finance Clean-Up & Control là bước phù hợp để đưa hệ thống vào nề nếp.' },
    { tu: 70, den: 100, ten: 'Nền khá tốt — hướng tới chuẩn gọi vốn', goi: 'Capital Readiness Program',
      moTa: 'Hệ thống tài chính đã khá vững. Doanh nghiệp có thể hướng tới Capital Readiness Program để đạt chuẩn làm việc với ngân hàng, nhà đầu tư.' },
  ],
};

export const REMOTE_OPS: CongCuKieuA = {
  trang: 'remote-ops',
  maV1: 'OPS_SURVEY',
  duongDan: '/remote-ops/survey',
  nhanTru: 'REMOTE OPS',
  tieuDe: 'Khảo sát Vận hành Doanh nghiệp',
  moTa: 'Đo mức độ hệ thống hóa của bộ máy vận hành trên 8 khu vực — biết doanh nghiệp đang tắc ở đâu',
  dongPhu: '16 câu hỏi · 8 khu vực · khoảng 5 phút · kết quả hiển thị ngay',
  tenNhom: 'Khu vực',
  coDiemUocTinh: false,
  nutTuVan: 'Đặt lịch tư vấn Remote Ops',
  nhom: [
    { ma: 'PROCESS', ten: 'Quy trình', cauHoi: [
      'Các quy trình lõi được viết thành văn bản và đội ngũ làm theo.',
      'Người mới đọc tài liệu là làm được các việc cơ bản của vị trí.',
    ] },
    { ma: 'ROLES', ten: 'Tổ chức & vai trò', cauHoi: [
      'Mỗi vị trí có mô tả vai trò – trách nhiệm – quyền quyết định rõ ràng.',
      'Không có việc quan trọng bị rơi giữa hai người vì không rõ ai phụ trách.',
    ] },
    { ma: 'TASKS', ten: 'Giao việc & theo dõi', cauHoi: [
      'Công việc có người phụ trách, thời hạn và trạng thái trên hệ thống chung.',
      'Task trễ hạn được phát hiện tự động, không phụ thuộc ai đó nhớ ra.',
    ] },
    { ma: 'RHYTHM', ten: 'Nhịp điều hành', cauHoi: [
      'Có nhịp họp điều hành định kỳ với chương trình và thời lượng rõ.',
      'Quyết định sau họp được ghi lại và theo dõi đến khi hoàn thành.',
    ] },
    { ma: 'KPI', ten: 'Đo lường hiệu suất', cauHoi: [
      'Mỗi bộ phận có bộ chỉ số hiệu suất (KPI) rõ ràng.',
      'Chỉ số được cập nhật định kỳ, không đợi tổng hợp thủ công.',
    ] },
    { ma: 'REPORTING', ten: 'Báo cáo & cảnh báo', cauHoi: [
      'CEO nhận báo cáo vận hành định kỳ, đúng hạn.',
      'Báo cáo làm nổi các điểm nghẽn cần can thiệp, không chỉ liệt kê số liệu.',
    ] },
    { ma: 'DEPENDENCE', ten: 'Phụ thuộc cá nhân', cauHoi: [
      'Doanh nghiệp vận hành bình thường khi một nhân sự chủ chốt vắng 2 tuần.',
      'Tri thức công việc được lưu trong hệ thống, không chỉ trong đầu vài người.',
    ] },
    { ma: 'TOOLS', ten: 'Công cụ & dữ liệu', cauHoi: [
      'Các công cụ đang dùng phục vụ tốt quy trình chính.',
      'Dữ liệu vận hành nằm trong hệ thống, truy xuất được nhanh.',
    ] },
  ],
  muc: [
    { tu: 0, den: 39, ten: 'Vận hành đang phụ thuộc cá nhân', goi: 'Ops Diagnosis',
      moTa: "Bộ máy chạy chủ yếu nhờ vài người 'biết việc' — rủi ro cao khi biến động nhân sự. Bắt đầu bằng Ops Diagnosis để chẩn đoán chính xác và xếp thứ tự xử lý." },
    { tu: 40, den: 69, ten: 'Có nền nhưng chưa thành hệ thống', goi: 'Ops Blueprint',
      moTa: 'Một số khu vực đã có nề nếp nhưng chưa nối thành hệ điều hành hoàn chỉnh. Ops Blueprint là bước phù hợp: dựng trọn bộ tổ chức, quy trình và KPI.' },
    { tu: 70, den: 100, ten: 'Nền vận hành khá vững', goi: 'Remote Ops Partner',
      moTa: 'Doanh nghiệp đã có hệ thống tốt. Giai đoạn này phù hợp với Remote Ops Partner — vận hành đồng hành, tinh chỉnh và cảnh báo điểm nghẽn liên tục.' },
  ],
};

export const CONG_CU_KIEU_A = { 'ceo-blueprint': CEO_BLUEPRINT, finance: FINANCE, 'remote-ops': REMOTE_OPS } as const;
