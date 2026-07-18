# CLAUDE.md

Instructions for Claude Code (and compatible agents) in this repository.

## What this repo is

`my-agent-skills` — 6 practical Agent Skills for the loop **spec → TDD/debug/refactor → review → commit/PR**.

Install for users:

```bash
npx skills add Alex7develop/my-agent-skills --all
```

## When working here

1. Prefer existing skills under `skills/` — do not invent parallel workflows.
2. For new features in `site/`, still use `spec-first` then TDD where behavior changes.
3. Keep root clean for `npx skills add`: skills live only in `skills/*/SKILL.md`.
4. Never commit `site/node_modules`, `site/dist`, or local install clutter (`.agents/`, `skills-lock.json`).

## Skill routing (short)

- Broad feature ask → read `skills/spec-first/SKILL.md`
- Behavior change → `skills/test-driven-development/SKILL.md`
- “Doesn’t work” → `skills/systematic-debugging/SKILL.md`
- Structure only → `skills/safe-refactoring/SKILL.md`
- Pre-merge check → `skills/code-review/SKILL.md`
- Git wrap-up → `skills/commit-and-pr/SKILL.md`

## Slash commands

Claude Code commands are in `.claude/commands/` (mirrored in `commands/` for other tools).

## Validation

```bash
./scripts/validate-skills.sh
cd site && npm run build
```

Full contribution rules: [CONTRIBUTING.md](CONTRIBUTING.md).
