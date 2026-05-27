<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know
<!-- END:nextjs-agent-rules -->
## Logicform Systems Codex Operating Rules

### Token Budget Rules

- Use the existing Graphify graph before reading files.
- Do not rebuild Graphify unless explicitly requested.
- Do not run `$graphify .` during normal tasks.
- Prefer `graphify query "<question>"` and exact file targeting over full repository scans.
- Never inspect `node_modules`, `.next`, `graphify-out`, `.git`, `dist`, `build`, or `coverage`.
- Identify exact target files before editing.
- Edit the minimum number of files.
- Keep responses short unless a detailed plan is requested.

### High-Risk Shared Abstractions

Avoid modifying these unless necessary and explain impact before editing:

- `cn()`
- `Container()`
- `Section`
- `buttonVariants`
- `siteConfig`

### Logicform Systems Quality Rules

- Preserve the premium black/gold brand identity.
- Prioritize conversion, trust, SEO, accessibility, mobile responsiveness, and speed.
- Keep copy direct, practical, and business-owner friendly.
- Use `create-plan` before multi-file changes.
- Use `frontend-skill` for UI polish.
- Use `webapp-testing` for homepage, pricing, services, and contact flow checks.
- Use `vercel-deploy` only when deployment needs checking.
- Use `gh-fix-ci` only when GitHub checks fail.
- For contact forms and API routes, check validation, spam protection, secrets, and email delivery before editing.
