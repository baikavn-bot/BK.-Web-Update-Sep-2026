// @ts-check
import { defineConfig } from 'astro/config';

// Site tĩnh hoàn toàn — không SSR, không adapter.
// Xem CLAUDE.md muc "Kien truc" truoc khi doi bat ky dong nao o day.
export default defineConfig({
  site: 'https://baika.vn',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  compressHTML: true,
  devToolbar: { enabled: false },
});
