// CÔNG CỤ CHẨN ĐOÁN AI — AI Readiness Diagnosis (/ai-os/diagnosis)
// ===================================================================
// Dữ liệu + phép tính, không có giao diện. Chép NGUYÊN VĂN logic và câu chữ của
// v1 (`docs/trang-con-thieu/du-lieu/ban-cu/baika-ai-operating-system__diagnosis.html`,
// hàm `computeScores`). Sếp chốt 05/10/2026: dùng lại logic v1.
//
// 9 bước. Bước 1 hỏi doanh nghiệp, bước 9 hỏi thông tin liên hệ.

/** Thang 3 mức cho câu «sẵn sàng»: giá trị · nhãn · chữ phụ. */
export const MUC_SAN_SANG = [
  { gt: '0', nhan: 'Chưa', phu: 'Chưa có' },
  { gt: '0.5', nhan: 'Một phần', phu: 'Đang làm' },
  { gt: '1', nhan: 'Rồi', phu: 'Đã có' },
] as const;

type LuaChon = { gt: string; nhan: string };

export const QUY_MO: LuaChon[] = [
  { gt: '1_5', nhan: '1–5' }, { gt: '6_20', nhan: '6–20' }, { gt: '21_50', nhan: '21–50' },
  { gt: '51_100', nhan: '51–100' }, { gt: '101_300', nhan: '101–300' }, { gt: '300_plus', nhan: '>300' },
];

/** Dấu hiệu tự động hoá + điểm cộng. `data_scattered` hỏi ở bước 3, còn lại ở bước 2. */
export const DAU_HIEU: Array<LuaChon & { diem: number }> = [
  { gt: 'repeated_tasks', nhan: 'Nhiều thao tác lặp lại hằng ngày', diem: 20 },
  { gt: 'manual_csc', nhan: 'Chăm sóc khách hàng thủ công', diem: 15 },
  { gt: 'manual_reports', nhan: 'Báo cáo làm bằng tay', diem: 15 },
  { gt: 'content_creation', nhan: 'Tạo nội dung thường xuyên', diem: 10 },
  { gt: 'document_handling', nhan: 'Xử lý hồ sơ/hợp đồng/chứng từ', diem: 10 },
  { gt: 'team_3plus', nhan: 'Đội sales/CSKH/vận hành ≥3 người', diem: 10 },
  { gt: 'frequent_errors', nhan: 'Hay lỗi/quên việc/chậm phản hồi', diem: 5 },
];
export const DU_LIEU_PHAN_TAN = { gt: 'data_scattered', nhan: 'Dữ liệu nằm rải rác ở nhiều nơi (file, app, giấy...)', diem: 15 };

export const CONG_CU_DANG_DUNG: LuaChon[] = [
  { gt: 'spreadsheet', nhan: 'Excel / Google Sheets' }, { gt: 'crm', nhan: 'CRM' },
  { gt: 'accounting', nhan: 'Phần mềm kế toán' }, { gt: 'chat', nhan: 'Zalo / Messenger' },
  { gt: 'erp', nhan: 'ERP' }, { gt: 'none', nhan: 'Hầu như chưa có' },
];
export const VAI_TRO_AI: LuaChon[] = [
  { gt: 'sales', nhan: 'Sales Agent' }, { gt: 'marketing', nhan: 'Marketing Agent' },
  { gt: 'customer_care', nhan: 'CSKH Agent' }, { gt: 'finance', nhan: 'Finance Agent' },
  { gt: 'legal_tax', nhan: 'Legal/Tax Agent' }, { gt: 'hr', nhan: 'HR Agent' },
  { gt: 'ceo', nhan: 'CEO Assistant' }, { gt: 'operation', nhan: 'Operation Agent' },
];
export const QUY_TRINH_TU_DONG: LuaChon[] = [
  { gt: 'data_entry', nhan: 'Tự động nhập liệu' }, { gt: 'followup', nhan: 'Tự động CSKH / follow-up' },
  { gt: 'reporting', nhan: 'Tự động tổng hợp báo cáo' }, { gt: 'documents', nhan: 'Tự động xử lý chứng từ' },
  { gt: 'content', nhan: 'Tự động tạo nội dung' }, { gt: 'lead_routing', nhan: 'Tự động phân loại lead' },
];
export const PHAN_MEM_RIENG: LuaChon[] = [
  { gt: 'crm', nhan: 'CRM' }, { gt: 'erp', nhan: 'ERP' }, { gt: 'dashboard', nhan: 'Dashboard điều hành' },
  { gt: 'internal_tool', nhan: 'Internal tool / automation' }, { gt: 'knowledge_portal', nhan: 'Knowledge base portal' },
  { gt: 'integration', nhan: 'Tích hợp hệ thống' },
];
export const NGAN_SACH: LuaChon[] = [
  { gt: 'under_30m', nhan: '<30 triệu' }, { gt: '30_80m', nhan: '30–80 triệu' }, { gt: '80_200m', nhan: '80–200 triệu' },
  { gt: '200m_plus', nhan: '>200 triệu' }, { gt: 'unknown', nhan: 'Chưa rõ' },
];
export const THOI_GIAN: LuaChon[] = [
  { gt: 'immediate', nhan: 'Ngay lập tức' }, { gt: '1_month', nhan: 'Trong 1 tháng' }, { gt: '3_months', nhan: 'Trong 3 tháng' },
  { gt: '6_months', nhan: 'Trong 6 tháng' }, { gt: 'unknown', nhan: 'Chưa rõ' },
];

/** Tên + mô tả 9 bước (dòng phụ dưới tiêu đề mỗi bước). */
export const BUOC = [
  { ten: 'Thông tin doanh nghiệp', moTa: 'Cho BAIKA biết về doanh nghiệp của bạn.' },
  { ten: 'Hiện trạng quy trình', moTa: 'Mức độ rõ ràng của quy trình & dấu hiệu cần tự động hóa.' },
  { ten: 'Hiện trạng dữ liệu', moTa: 'Dữ liệu của bạn đang ở trạng thái nào.' },
  { ten: 'Công cụ / phần mềm đang dùng', moTa: 'Công cụ hiện tại và khả năng kết nối.' },
  { ten: 'Nhu cầu AI Agent', moTa: 'Chọn vai trò AI Agent bạn muốn xây.' },
  { ten: 'Nhu cầu Workflow Automation', moTa: 'Chọn quy trình muốn tự động hóa.' },
  { ten: 'Nhu cầu Custom Software', moTa: 'Chọn loại phần mềm riêng cần xây.' },
  { ten: 'Mức độ sẵn sàng triển khai', moTa: 'Mức độ sẵn sàng để triển khai AI.' },
  { ten: 'Gửi yêu cầu tư vấn', moTa: 'Để lại thông tin để nhận kết quả & tư vấn.' },
] as const;

export type MaGoiAI =
  | 'ai_opportunity_audit' | 'ai_agent_starter_kit' | 'ai_workflow_automation'
  | 'custom_ai_software' | 'ai_operating_system_partner';

export const GOI_AI: Record<MaGoiAI, { ten: string; moTa: string; hangMuc: string[] }> = {
  ai_opportunity_audit: { ten: 'AI Opportunity Audit', moTa: 'Chẩn đoán cơ hội ứng dụng AI cho doanh nghiệp.', hangMuc: ['Khảo sát hiện trạng', 'Bản đồ cơ hội AI', 'Khuyến nghị ưu tiên'] },
  ai_agent_starter_kit: { ten: 'AI Agent Starter Kit', moTa: 'Xây AI Agent đầu tiên theo 1–3 vai trò.', hangMuc: ['Thiết kế 1–3 AI Agent', 'Knowledge base nền', 'Hướng dẫn sử dụng'] },
  ai_workflow_automation: { ten: 'AI Workflow Automation', moTa: 'Tự động hóa các quy trình lặp lại.', hangMuc: ['Sơ đồ tự động hóa', 'Triển khai workflow', 'Đo lường hiệu quả'] },
  custom_ai_software: { ten: 'Custom AI Software', moTa: 'Phần mềm/internal tool riêng tích hợp AI.', hangMuc: ['CRM/ERP/dashboard riêng', 'Tích hợp AI theo nhu cầu', 'Bàn giao & đào tạo'] },
  ai_operating_system_partner: { ten: 'AI Operating System Partner', moTa: 'Đồng hành xây hệ điều hành AI toàn diện.', hangMuc: ['Toàn bộ 3 lớp giải pháp', 'Roadmap 30-60-90', 'AI Governance & đào tạo'] },
};

/** Những câu trả lời dùng để tính điểm. Mức sẵn sàng là chuỗi '0' / '0.5' / '1' (trống = chưa chọn). */
export interface TraLoiAI {
  process_documented: string;
  data_structured: string;
  tools_api: string;
  team_ready: string;
  leadership_goal: string;
  budget_ready: string;
  /** Mã các dấu hiệu đã tick (gồm cả `data_scattered` ở bước 3). */
  auto_signals: string[];
  ai_roles: string[];
  workflows: string[];
  software_needs: string[];
}

export interface KetQuaAI {
  /** Điểm sẵn sàng AI, 0–100. */
  sanSang: number;
  /** Điểm cơ hội tự động hoá, 0–100. */
  tuDongHoa: number;
  muc: 'Low Readiness' | 'Medium Readiness' | 'High Readiness' | 'Enterprise Ready';
  goi: MaGoiAI;
  /** Chọn quá nhiều nhu cầu (> 8) → hiện ghi chú «triển khai theo giai đoạn». */
  phamViLon: boolean;
}

/** Chép đúng `computeScores()` của v1. Luật chọn gói: điều kiện ĐẦU TIÊN đúng thì dừng. */
export function tinhAI(d: TraLoiAI): KetQuaAI {
  const lv = (v: string) => Number(v || 0);
  const sanSang = Math.round(
    lv(d.process_documented) * 20 + lv(d.data_structured) * 20 + lv(d.tools_api) * 15 +
    lv(d.team_ready) * 15 + lv(d.leadership_goal) * 15 + lv(d.budget_ready) * 15,
  );
  const diem: Record<string, number> = Object.fromEntries(
    [...DAU_HIEU, DU_LIEU_PHAN_TAN].map((x) => [x.gt, x.diem]),
  );
  const tuDongHoa = Math.min(100, d.auto_signals.reduce((s, k) => s + (diem[k] ?? 0), 0));
  const muc = sanSang < 30 ? 'Low Readiness' : sanSang < 60 ? 'Medium Readiness' : sanSang < 80 ? 'High Readiness' : 'Enterprise Ready';
  const soPhongBan = d.ai_roles.length;
  let goi: MaGoiAI;
  if (sanSang >= 75 && soPhongBan >= 3) goi = 'ai_operating_system_partner';
  else if (d.software_needs.length > 0) goi = 'custom_ai_software';
  else if (tuDongHoa >= 60) goi = 'ai_workflow_automation';
  else if (sanSang >= 30 && sanSang < 60 && soPhongBan >= 1 && soPhongBan <= 3) goi = 'ai_agent_starter_kit';
  else goi = 'ai_opportunity_audit';
  const phamViLon = d.ai_roles.length + d.workflows.length + d.software_needs.length > 8;
  return { sanSang, tuDongHoa, muc, goi, phamViLon };
}
