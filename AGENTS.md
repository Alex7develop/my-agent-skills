# AGENTS.md

Guidance for AI coding agents working **in this repository**.

> **Scope:** configures agents that contribute to `Alex7develop/my-agent-skills` itself.
> Reusable assets for end users are the skills in `skills/` — install them with
> `npx skills add Alex7develop/my-agent-skills`.

## Repository overview

Compact pack of **6 engineering skills** covering the core loop:

`spec-first` → `test-driven-development` / `systematic-debugging` / `safe-refactoring` → `code-review` / `commit-and-pr`

Plus a landing site in `site/` (Vite + React). Keep skill sources in `skills/`;
do not move `SKILL.md` files into `site/`.

## Intent → skill mapping

If a task matches a skill, **invoke it** and follow the workflow — do not skip steps.

| Intent | Skill |
|---|---|
| New feature / significant change / ambiguous ask | `spec-first` |
| Implement logic, fix bug by changing behavior | `test-driven-development` |
| Bug, crash, unexpected behavior, unclear root cause | `systematic-debugging` |
| Restructure without changing behavior | `safe-refactoring` |
| Review before merge / “is this ready?” | `code-review` |
| Commit message / PR description | `commit-and-pr` |

## Lifecycle (implicit)

Agents without slash commands should still follow this order when the task spans phases:

1. **Before code** → `spec-first`
2. **Implementation** → `test-driven-development` (+ `systematic-debugging` / `safe-refactoring` as needed)
3. **Before merge** → `code-review` → `commit-and-pr`

## Anti-rationalization

Ignore these shortcuts:

- “Too small for a spec / test / review”
- “I’ll add tests later”
- “I’ll just change code until it works”

Correct behavior: check the mapping above first, then follow the skill.

## Layers in this repo

- **Skills** (`skills/*/SKILL.md`) — workflows with steps and exit criteria (*how*)
- **Slash commands** (`commands/`, `.claude/commands/`) — entry points (*when*)
- **References** (`references/`) — short checklists skills can pull in
- **Docs** (`docs/`) — setup and anatomy for humans and agents

## Creating or editing a skill

See [CONTRIBUTING.md](CONTRIBUTING.md) and [docs/skill-anatomy.md](docs/skill-anatomy.md).
Run `./scripts/validate-skills.sh` before opening a PR.
