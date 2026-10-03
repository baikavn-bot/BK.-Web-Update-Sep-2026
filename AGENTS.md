# AGENTS.md

Hướng dẫn cho mọi agent lập trình (Codex, Cursor, Copilot, Gemini…) làm việc trong repo này.

**Luật của repo nằm ở `CLAUDE.md`.** File đó áp dụng cho **mọi** agent, không riêng Claude. Ở đây không chép lại, để khỏi có hai bản lệch nhau.

## Đọc theo thứ tự

1. `TRANG-THAI.md` — dự án đang ở đâu, cái gì kẹt, làm gì tiếp.
2. `CLAUDE.md` — luật: token, Figma, chất lượng, bảo mật, git.
3. `docs/<trang>/SPEC-MASTER.md` — nếu làm một trang cụ thể.

## Năm luật không được vi phạm (tóm tắt — bản đầy đủ ở `CLAUDE.md`)

1. Không tự chế màu / cỡ chữ / khoảng cách. Thiếu token thì hỏi.
2. Không có `#FFFFFF`, `#fff`, `white` trong CSS.
3. Không đặt khoá bí mật vào bất kỳ file nào.
4. Agent commit, **người** `git push`. Không force push.
5. Code và Figma mâu thuẫn → **Figma thắng**. Không chắc → dừng lại hỏi.

## Kiểm tra trước khi báo xong

```bash
pnpm build && pnpm kiem-tra
```
