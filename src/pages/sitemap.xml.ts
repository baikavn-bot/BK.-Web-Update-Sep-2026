// SITEMAP — danh sách trang cho máy tìm kiếm, tự sinh lúc build.
// Thêm 05/10/2026. Không dùng thư viện ngoài (@astrojs/sitemap) để khỏi thêm
// phụ thuộc: tự đọc mọi file .astro trong src/pages.
//
// Thêm trang mới → tự có trong sitemap, không phải sửa file này.
// Trang KHÔNG đưa vào: xem BO_QUA bên dưới (trang tạm, chưa phải nội dung thật).
//
// Địa chỉ gốc lấy từ `site` trong astro.config.mjs (hiện là https://baika.vn).
import type { APIRoute } from 'astro';

const BO_QUA = new Set([
  '/sap-ra-mat', // trang tạm «Sắp ra mắt» — không cần Google lưu
]);

const files = Object.keys(import.meta.glob('./**/*.astro'));

export const GET: APIRoute = ({ site }) => {
  const goc = (site?.href ?? 'https://baika.vn/').replace(/\/$/, '');
  const duongDan = files
    .map((f) => f.replace(/^\.\//, '/').replace(/\.astro$/, '').replace(/\/index$/, '') || '/')
    .filter((p) => !p.includes('[') && !p.split('/').some((s) => s.startsWith('_')))
    .filter((p) => !BO_QUA.has(p))
    .sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)));

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    duongDan.map((p) => `  <url><loc>${goc}${p === '/' ? '/' : p}</loc></url>`).join('\n') +
    '\n</urlset>\n';

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
