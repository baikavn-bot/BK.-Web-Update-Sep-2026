# Chuyển sang Claude Code — checklist ngày đầu

*Soạn 06/10/2026. Đọc từ trên xuống, làm đúng thứ tự, tick từng ô.*

Từ đây, việc **code** của website làm bằng **Claude Code** chạy thẳng trong thư mục repo trên máy Thắng (`D:\BK. Web\baika-website`). Việc chiến lược, tài liệu dài, luồng F (backend) vẫn có thể làm ở claude.ai.

## Khác gì so với trước

| | Trước (Cowork / claude.ai) | Claude Code |
| --- | --- | --- |
| Agent sửa file ở đâu | Bản sao trên máy ảo, chuyển qua lại bằng file `.bundle` | **Thẳng trong thư mục repo** của Thắng |
| Build, kiểm tra, chụp màn | Trên máy ảo | Trên máy Thắng (`pnpm build`, `pnpm kiem-tra`…) |
| Ai `git push` | Thắng gõ lệnh | **Agent push nhánh** (Thắng chốt 06/10) — **không bao giờ push `main`** |
| Ai merge vào `main` | Thắng (PR) | **Vẫn Thắng** (PR + CI xanh) |
| Đọc luật dự án | Instructions của Project claude.ai | `CLAUDE.md` (luật repo) + `CLAUDE.local.md` (cách làm việc, riêng máy Thắng) |
| Skill · Figma | Có sẵn trong tài khoản | **Phải cài lại** — bước 4, 5 dưới đây |
| Memory của Project claude.ai | Có | **Không theo sang** — mọi thứ cần nhớ phải nằm trong file |

## 0. Trước khi chuyển

- [ ] Merge xong các PR đang chờ, theo thứ tự: `chinh-sach-ban-duyet` → `spec-4-trang` → `cong-cu-chan-doan` → `nvg-co-dinh` → `ban-giao-claude-code` (nhánh chứa file này).
- [ ] Chốt `viec-cho` #24 (nền header khi cuộn) — để phiên Claude Code đầu tiên có việc rõ ràng.

## 1. Cài công cụ (một lần)

- [ ] **Git for Windows** — đã có (Thắng đang dùng `git` trong cmd). Claude Code trên Windows cần nó.
- [ ] **Node 20.11** — mở cmd, gõ `node -v`. Thiếu hoặc khác → cài bản 20 LTS từ nodejs.org. *(Bài kiểm `kiem-tra:chan-doan` / `kiem-tra:uoc-tinh` cần Node ≥ 22.6; build vẫn dùng 20. Chạy được trên GitHub CI rồi nên không bắt buộc ở máy.)*
- [ ] **pnpm 9.12** — `npm install -g pnpm@9.12.0`, kiểm bằng `pnpm -v`.
- [ ] **Claude Code** — cách dễ nhất: mở app Claude trên máy, vào phần **Code**, chọn thư mục `D:\BK. Web\baika-website`. Hoặc bản dòng lệnh theo hướng dẫn chính thức tại docs.claude.com (mục Claude Code → cài đặt cho Windows). *[Tèo chưa kiểm trực tiếp trên máy Thắng — làm theo hướng dẫn chính thức nếu khác.]*

## 2. Mở đúng repo, lấy bản mới nhất

- [ ] Trong cmd:
  ```
  cd /d "D:\BK. Web\baika-website"
  git switch main
  git pull --ff-only
  pnpm install --frozen-lockfile
  ```
- [ ] Kiểm: `git status` báo «nothing to commit» (hoặc chỉ có `Claude outputs/` bị bỏ qua).

## 3. File cách làm việc riêng — `CLAUDE.local.md`

- [ ] Tèo đã đặt sẵn `CLAUDE.local.md` ở gốc thư mục. Mở xem — đây là bản chuyển từ instructions của Project claude.ai (vai trò mentor, xưng hô, luật git mới, các bài học).
- [ ] Kiểm: `git status` **không** hiện file này (đã bị bỏ qua — đúng ý, vì repo công khai).
- [ ] Muốn đổi cách agent làm việc → sửa file này. Muốn đổi **luật của repo** → sửa `CLAUDE.md` (qua PR).

## 4. Cài lại 2 skill

Skill tài khoản claude.ai **có thể không** tự hiện trong Claude Code. Tèo đã chép sẵn bản hiện tại vào `Claude outputs\ban-giao-claude-code\skills\`.

- [ ] Trong cmd:
  ```
  xcopy /E /I /Y "D:\BK. Web\baika-website\Claude outputs\ban-giao-claude-code\skills" "%USERPROFILE%\.claude\skills"
  ```
- [ ] Kiểm: trong Claude Code gõ `/` → thấy `so-tay-dung-web` và `website-production-agent`.
- [ ] Sửa skill về sau: sửa file trong `%USERPROFILE%\.claude\skills\…`. (Bản trên claude.ai không tự đồng bộ — muốn giữ hai nơi giống nhau thì sửa cả hai.)

## 5. Kết nối Figma (MCP)

MCP = cổng để agent đọc / sửa Figma. Cần cho: đọc spec trước khi code, luật «đồng bộ ngược» (`CLAUDE.md` §3).

- [ ] Trong cmd (cùng thư mục repo):
  ```
  claude mcp add --transport http figma https://mcp.figma.com/mcp
  ```
- [ ] Mở Claude Code, gõ `/mcp` → chọn `figma` → đăng nhập Figma trên trình duyệt.
- [ ] Kiểm: hỏi *«Đọc tên node 452:6600 trong file YmcXg1lQqGVjQOFrVtdOgW»* → trả lời «NVG header».
- [ ] *(Notion — chỉ khi mở lại luồng D. Notion của sếp: CHỈ ĐỌC.)*
- *[Địa chỉ MCP và lệnh trên là theo tài liệu Figma/Claude Code Tèo biết tới 06/10 — báo lỗi thì xem hướng dẫn chính thức của Figma «Dev Mode MCP / remote server».]*

## 6. Quyền của agent — `.claude/settings.json` (đã có trong repo)

File này tự áp dụng khi mở repo. Tóm tắt:

| Nhóm | Gồm | Agent làm được? |
| --- | --- | --- |
| **Cho phép luôn** | `pnpm build` · `pnpm kiem-tra…` · `git status/diff/log` · tạo nhánh · `git add` · `git commit` · `git push origin <nhánh>` | Có, không hỏi |
| **Hỏi Thắng trước** | `git merge` · `git rebase` · `git stash` · xoá nhánh trên máy (`git branch -d/-D`) · thêm / bớt thư viện (`pnpm add/remove`) · sửa `tokens.css` · `vercel.json` · `.github/` | Phải Thắng bấm đồng ý |
| **Cấm** | push `main` (mọi cách viết đã biết: `-u`, `HEAD`, `refs/heads/main`, `+`, `--all`, `--mirror`, `git push` trống) · force push · xoá nhánh trên GitHub · gộp PR bằng `gh pr merge` · `git reset --hard` · `git clean` · `git config` · `rm -r` · đọc / sửa `.env` | Không, kể cả khi Thắng bảo |

- [ ] Kiểm: trong Claude Code gõ `/permissions` → thấy 3 nhóm trên.
- ⚠️ Danh sách cấm so theo **chữ đầu lệnh** — không chặn được mọi cách viết. Lớp bảo vệ thật vẫn là **khoá `main` trên GitHub** (PR + CI xanh). Đừng tắt khoá đó.

## 7. Lần đầu agent push

- [ ] Lần đầu agent `git push`, Windows có thể mở cửa sổ **đăng nhập GitHub** (Git Credential Manager). **Thắng tự đăng nhập** bằng tài khoản `baikavn-bot`. Agent không nhìn thấy mật khẩu — máy chỉ nhớ phiên đăng nhập.
- [ ] Push xong, agent đưa link mở PR → Thắng vào GitHub mở PR, chờ ✅, xem bản preview Vercel, rồi merge.

## 8. Phiên thử đầu tiên

- [ ] Gõ cho Claude Code:
  > Đọc CLAUDE.local.md, CLAUDE.md, TRANG-THAI.md và docs/viec-cho.md. Tóm tắt trong 5 dòng dự án đang ở đâu, và 3 việc nên làm tiếp theo thứ tự ưu tiên.
- [ ] Kiểm câu trả lời: tiếng Việt · xưng «em» · nhắc đúng việc đang treo (vd. #24 nền header, chờ duyệt Vercel Pro, 4 PR công cụ / header) · có phân biệt đã xác minh / suy đoán.
- [ ] Sai chỗ nào → sửa `CLAUDE.local.md` cho đúng rồi thử lại.

## 9. Những thứ vẫn ở claude.ai

- Project «BaiKa.vn»: instructions + tài liệu chiến lược, luồng D/F, tài liệu chưa chuyển (danh sách: `docs/README.md` → «Còn ở project Claude»). Phần lớn đã lỗi thời; cần cái nào cho code thì chép vào `docs/` (nhớ: repo công khai).
- Trang xem (artifact) đã lập: giữ link cũ.
