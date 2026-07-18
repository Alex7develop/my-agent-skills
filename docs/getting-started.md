# Getting started

## Install all skills

```bash
npx skills add Alex7develop/my-agent-skills --all
```

Browse first:

```bash
npx skills add Alex7develop/my-agent-skills --list
```

One skill:

```bash
npx skills add Alex7develop/my-agent-skills --skill code-review
```

Works with 70+ agents via the open [skills CLI](https://github.com/vercel-labs/skills) (Cursor, Claude Code, Codex, Copilot, Cline, …).

## After install

Skills activate from their `description` when your request matches (e.g. “сделай ревью”, “исправь баг”, “закоммить”). You can also ask the agent explicitly: “use spec-first”.

## Cursor

Install with the CLI above (project or global). Skills land under the agent’s skills directory; Cursor discovers them automatically. Prefer skills over pasting full workflows into rules files.

See also: [cursor-setup.md](cursor-setup.md).

## Claude Code

```bash
npx skills add Alex7develop/my-agent-skills --all -a claude-code
```

Or install as a plugin from this repo (see root `plugin.json` / `.claude-plugin/`).

Slash commands: `.claude/commands/` (`/spec`, `/tdd`, `/debug`, `/refactor`, `/review`, `/commit`).

## Catalog & site

- skills.sh: https://skills.sh/Alex7develop/my-agent-skills
- GitHub: https://github.com/Alex7develop/my-agent-skills
- Landing source: [`site/`](../site/)
