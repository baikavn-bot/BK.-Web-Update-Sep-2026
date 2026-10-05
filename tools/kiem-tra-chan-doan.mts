// KIỂM TRA 5 CÔNG CỤ CHẨN ĐOÁN — logic giữ y v1 (sếp chốt 05/10/2026)
//
// Chạy:   pnpm kiem-tra:chan-doan
//         (= node --experimental-strip-types tools/kiem-tra-chan-doan.mts)
// Cần Node 22.6 trở lên (để Node đọc thẳng file .ts). Repo dùng Node 20 để build —
// file này chỉ dành cho agent kiểm tra, không nằm trong site.
//
// Mỗi ca: một bộ câu trả lời → kết quả TÍNH TAY trước theo công thức v1
// (`docs/trang-con-thieu/cong-cu-chan-doan-v1.md`). Ra «N/N» là đúng.
// Đổi logic → sửa bảng ca ở đây TRƯỚC, rồi mới sửa src/lib/chan-doan/.

import { tinhKieuA, diemUocTinh, maCau, FINANCE, CEO_BLUEPRINT, REMOTE_OPS, type CongCuKieuA } from '../src/lib/chan-doan/kieu-a.ts';
import { tinhAI, type TraLoiAI } from '../src/lib/chan-doan/ai.ts';
import { tinhThuongHieu, CAU_CHAM_DIEM } from '../src/lib/chan-doan/thuong-hieu.ts';

let dung = 0;
let tong = 0;
const kiem = (ten: string, ra: unknown, mong: unknown) => {
  tong++;
  const a = JSON.stringify(ra);
  const b = JSON.stringify(mong);
  const ok = a === b;
  if (ok) dung++;
  console.log(`${ok ? 'DUNG' : 'SAI '}  ${ten}${ok ? '' : `\n      ra   ${a}\n      mong ${b}`}`);
};

/** Trả lời theo từng nhóm: mỗi phần tử là mảng điểm các câu trong nhóm đó. */
const traLoiA = (cc: CongCuKieuA, theoNhom: number[][]) => {
  const r: Record<string, number> = {};
  cc.nhom.forEach((g, gi) => g.cauHoi.forEach((_, i) => { r[maCau(g, i)] = theoNhom[gi][i]; }));
  return r;
};
const deu = (cc: CongCuKieuA, v: number) => traLoiA(cc, cc.nhom.map((g) => g.cauHoi.map(() => v)));

// ─── KIỂU A ───────────────────────────────────────────────────────────
{
  const r = tinhKieuA(FINANCE, deu(FINANCE, 2));
  // ví dụ trong tài liệu: mỗi nhóm 4/6×10 = 6.67 → 7 → tổng 70 (lệch do làm tròn 2 lần — giữ y v1)
  kiem('A1 Finance toàn mức 2 → 70, gói Capital Readiness', [r.tong, r.muc.goi, r.nhom.map((n) => n.diem)], [70, 'Capital Readiness Program', [7, 7, 7, 7, 7, 7, 7, 7]]);
}
{
  const r = tinhKieuA(FINANCE, deu(FINANCE, 0));
  kiem('A2 Finance toàn 0 → 0, 3 nhóm yếu là 3 nhóm đầu', [r.tong, r.muc.goi, r.yeu], [0, 'Finance Health Check', ['ACCOUNTING', 'DOCUMENTS', 'WORKFLOW']]);
}
{
  const r = tinhKieuA(FINANCE, deu(FINANCE, 3));
  kiem('A3 Finance toàn 3 → 100', [r.tong, r.muc.ten], [100, 'Nền khá tốt — hướng tới chuẩn gọi vốn']);
}
{
  // 4 nhóm [1,1] → 3.33→3 · 4 nhóm [2,1] → 5 → trung bình 4 → 40 = đúng mốc dưới mức 2
  const r = tinhKieuA(FINANCE, traLoiA(FINANCE, [[1, 1], [1, 1], [1, 1], [1, 1], [2, 1], [2, 1], [2, 1], [2, 1]]));
  kiem('A4 Finance mốc 40 → mức «Cần làm sạch»', [r.tong, r.muc.goi], [40, 'Finance Clean-Up & Control']);
}
{
  // mỗi nhóm [2,2,1] = 5/9×10 = 5.56 → 6 → tổng 60 (tỉ lệ thật 55.6)
  const r = tinhKieuA(CEO_BLUEPRINT, traLoiA(CEO_BLUEPRINT, CEO_BLUEPRINT.nhom.map(() => [2, 2, 1])));
  kiem('A5 CEO mỗi nhóm [2,2,1] → 60', [r.tong, r.muc.goi], [60, 'Chương trình CEO Operating Blueprint']);
}
{
  // điểm nhóm: 10 · 2 · 7 · 3 · 8 · 0 · 5 · 5 → TB 5 → 50
  const r = tinhKieuA(REMOTE_OPS, traLoiA(REMOTE_OPS, [[3, 3], [0, 1], [2, 2], [1, 1], [3, 2], [0, 0], [2, 1], [1, 2]]));
  kiem('A6 Remote Ops hỗn hợp → 50, Ops Blueprint, yếu REPORTING·ROLES·RHYTHM',
    [r.tong, r.muc.goi, r.nhom.map((n) => n.diem), r.yeu],
    [50, 'Ops Blueprint', [10, 2, 7, 3, 8, 0, 5, 5], ['REPORTING', 'ROLES', 'RHYTHM']]);
}
kiem('A7 Điểm ước tính lúc đang làm (2 câu: 2 và 3 → 83)', diemUocTinh({ X_1: 2, X_2: 3 }), 83);
kiem('A8 Điểm ước tính khi chưa trả lời câu nào → 0', diemUocTinh({}), 0);

// ─── AI ───────────────────────────────────────────────────────────────
const ai = (p: Partial<TraLoiAI>): TraLoiAI => ({
  process_documented: '', data_structured: '', tools_api: '', team_ready: '', leadership_goal: '', budget_ready: '',
  auto_signals: [], ai_roles: [], workflows: [], software_needs: [], ...p,
});
{
  const r = tinhAI(ai({}));
  kiem('B1 AI trống → 0 · 0 · Low · Audit', [r.sanSang, r.tuDongHoa, r.muc, r.goi], [0, 0, 'Low Readiness', 'ai_opportunity_audit']);
}
{
  // 10 + 10 + 15 + 7.5 + 7.5 + 0 = 50 · dấu hiệu 20+15+15+10+5 = 65 (có «dữ liệu rải rác» ở bước 3)
  const r = tinhAI(ai({ process_documented: '0.5', data_structured: '0.5', tools_api: '1', team_ready: '0.5', leadership_goal: '0.5', budget_ready: '0',
    auto_signals: ['repeated_tasks', 'manual_reports', 'data_scattered', 'content_creation', 'frequent_errors'], ai_roles: ['sales', 'marketing'] }));
  kiem('B2 AI mẫu Figma → 50 · 65 · Medium · Workflow Automation', [r.sanSang, r.tuDongHoa, r.muc, r.goi], [50, 65, 'Medium Readiness', 'ai_workflow_automation']);
}
{
  const r = tinhAI(ai({ process_documented: '0.5', data_structured: '0.5', tools_api: '1', team_ready: '0.5', leadership_goal: '0.5',
    auto_signals: ['repeated_tasks'], ai_roles: ['sales', 'hr'] }));
  kiem('B3 AI sẵn sàng 50, 2 phòng ban, tự động hoá thấp → Starter Kit', [r.sanSang, r.goi], [50, 'ai_agent_starter_kit']);
}
{
  const r = tinhAI(ai({ process_documented: '1', data_structured: '1', tools_api: '1', team_ready: '1', leadership_goal: '1', budget_ready: '1',
    ai_roles: ['sales', 'hr', 'ceo'], software_needs: ['crm'] }));
  kiem('B4 AI 100 + 3 phòng ban → Partner (luật 1 thắng cả nhu cầu phần mềm)', [r.sanSang, r.muc, r.goi], [100, 'Enterprise Ready', 'ai_operating_system_partner']);
}
{
  const r = tinhAI(ai({ process_documented: '1', data_structured: '1', tools_api: '1', team_ready: '1', leadership_goal: '1', budget_ready: '1',
    ai_roles: ['sales', 'hr'], software_needs: ['crm'] }));
  kiem('B5 AI 100 + 2 phòng ban + cần phần mềm → Custom Software', r.goi, 'custom_ai_software');
}
{
  const tat = ['repeated_tasks', 'manual_csc', 'manual_reports', 'data_scattered', 'content_creation', 'document_handling', 'team_3plus', 'frequent_errors'];
  const r = tinhAI(ai({ auto_signals: tat }));
  kiem('B6 AI tick đủ 8 dấu hiệu → tự động hoá 100', r.tuDongHoa, 100);
}
{
  const r = tinhAI(ai({ team_ready: '0.5' }));
  kiem('B7 AI 7.5 làm tròn lên 8', r.sanSang, 8);
}
{
  const r = tinhAI(ai({ ai_roles: ['sales', 'marketing', 'customer_care', 'finance', 'legal_tax', 'hr', 'ceo', 'operation'], workflows: ['content'] }));
  kiem('B8 AI chọn 9 nhu cầu → ghi chú «triển khai theo giai đoạn»', r.phamViLon, true);
}

// ─── THƯƠNG HIỆU ──────────────────────────────────────────────────────
const tatCa = (v: string) => Object.fromEntries(CAU_CHAM_DIEM.map((c) => [c.ma, v]));
{
  // mẫu Figma: 9.5 / 20 = 47.5 → 48
  const r = tinhThuongHieu({
    product_ready: '1', usp_clear: '0.5', positioning: '0.5', identity: '1', core_message: '0',
    channels_integrated: '0.5', mkt_sales_aligned: '0', content_calendar: '0', sales_materials: '0.5', sales_process: '0.5',
    launch_goal_clear: '1', launch_plan: '0', measurement_plan: '0', tracking_dashboard: '0', content_capacity: '0.5',
  }, '1_3_months', '');
  kiem('C1 Thương hiệu mẫu Figma → 48 · Đang định hình · IMC',
    [r.tong, r.muc, r.goi, r.truc],
    [48, 'Đang định hình', 'imc_launch_blueprint', { brand: 50, imc: 33, launch: 80, sales: 50, content: 25, measurement: 0 }]);
}
{
  // chỗ lệch v1 (giữ nguyên): trả lời đúng 1 câu «Rồi» → 100
  const r = tinhThuongHieu({ usp_clear: '1' }, '', '');
  kiem('C2 Thương hiệu chỉ 1 câu «Rồi» → 100 (giữ y v1)', [r.tong, r.muc, r.goi], [100, 'Sẵn sàng cao', 'imc_launch_blueprint']);
}
{
  const r = tinhThuongHieu(tatCa('0'), '2_4_weeks', '');
  kiem('C3 Thương hiệu toàn «Chưa» + có thời hạn → Brand-to-Market', [r.tong, r.muc, r.goi], [0, 'Khởi đầu', 'brand_to_market_launch']);
}
{
  const r = tinhThuongHieu(tatCa('0'), 'not_fixed', '');
  kiem('C4 Thương hiệu toàn «Chưa» + «Chưa cố định» → Brand Foundation', r.goi, 'brand_foundation');
}
{
  const r = tinhThuongHieu(tatCa('1'), 'not_fixed', '');
  kiem('C5 Thương hiệu toàn «Rồi» → 100 · IMC (luật cuối)', [r.tong, r.goi], [100, 'imc_launch_blueprint']);
}
{
  const r = tinhThuongHieu({ ...tatCa('1'), usp_clear: '0', positioning: '0', identity: '0', core_message: '0' }, '1_3_months', '');
  kiem('C6 Thương hiệu: chỉ trục Brand thấp → Brand Foundation', [r.truc.brand, r.goi], [0, 'brand_foundation']);
}
{
  const r = tinhThuongHieu({}, 'under_2_weeks', 'under_30m');
  kiem('C7 Thời hạn <2 tuần + ngân sách <30 triệu → ghi chú lệch kỳ vọng', [r.lechKyVong, r.tong], [true, 0]);
}

console.log(`\n${dung}/${tong}`);
if (dung !== tong) process.exit(1);
