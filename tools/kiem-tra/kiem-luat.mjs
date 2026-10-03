// KIỂM LUẬT TĨNH — không cần trình duyệt, chạy trong 1 giây.
// Đọc mọi file trong src/, BỎ phần chú thích (comment) rồi mới tìm — để câu
// "không gõ #FFFFFF" trong chú thích không bị tính là vi phạm.
// Luật lấy từ CLAUDE.md §4 (token) + §9 (bảo mật).
// Chạy: pnpm kiem-tra   (hoặc node tools/kiem-tra/kiem-luat.mjs)
//
// src/ : quét CẢ BA luật.
// api/ : CHỈ quét luật khoá bí mật — có chủ ý: api/contact.ts dựng HTML của MAIL,
//        mà trình đọc mail (Gmail, Outlook) không hiểu var(--...), nên mail buộc
//        phải viết màu thẳng. Đó là ngoại lệ duy nhất, không áp cho trang web.
import fs from 'node:fs';
import path from 'node:path';

const THU_MUC = process.env.SRC || 'src';
const THU_MUC_API = 'api';
const BO_QUA = new Set(['tokens.css']);               // file được phép chứa giá trị gốc
const LUAT = [
  ['Không có màu trắng thô (#fff / #ffffff / white) — dùng token', /#fff\b|#ffffff\b|:\s*white\b/i],
  ['Không có mã màu viết cứng — mọi màu qua var(--...)',            /(?:color|background|border|fill|stroke)[^;{}\n]*#[0-9a-f]{3,8}\b/i],
  ['Không có khoá bí mật trong code (src/ + api/)',                               /(?:api[_-]?key|secret|password|token)\s*[:=]\s*["'][^"']{8,}["']/i],
];

const boChuThich = (s) => s
  .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '))
  .replace(/<!--[\s\S]*?-->/g, (m) => m.replace(/[^\n]/g, ' '))
  .replace(/\{\/\*[\s\S]*?\*\/\}/g, (m) => m.replace(/[^\n]/g, ' '))
  .replace(/(^|[\s;{(])\/\/.*$/gm, '$1');

const lietKe = (goc) => { const out = []; if (!fs.existsSync(goc)) return out;
  const walk = (d) => { for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name);
    if (f.isDirectory()) walk(p); else if (/\.(astro|css|scss|ts|tsx|js|jsx|mjs|html|vue|svelte)$/.test(f.name) && !BO_QUA.has(f.name)) out.push(p);
  } };
  walk(goc); return out; };
const filesSrc = lietKe(THU_MUC);
const filesApi = lietKe(THU_MUC_API);

let hong = 0;
for (const [ten, re] of LUAT) {
  const gap = [];
  const files = ten.startsWith('Không có khoá bí mật') ? [...filesSrc, ...filesApi] : filesSrc;
  for (const f of files) boChuThich(fs.readFileSync(f, 'utf8')).split('\n').forEach((l, i) => { if (re.test(l)) gap.push(`  ${f}:${i + 1}  ${l.trim().slice(0, 100)}`); });
  console.log(`${gap.length ? 'HONG' : 'OK  '}  ${ten}${gap.length ? ` (${gap.length} chỗ)` : ''}`);
  gap.slice(0, 15).forEach((g) => console.log(g));
  if (gap.length) hong++;
}
try {
  const { execSync } = await import('node:child_process');
  if (execSync('git ls-files .env .env.local', { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim()) { console.log('HONG  File .env đang bị git theo dõi — khoá bí mật có thể đã lộ'); hong++; }
} catch {}
process.exit(hong ? 1 : 0);
