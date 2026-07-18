# Cursor setup

## Recommended: skills CLI

```bash
npx skills add Alex7develop/my-agent-skills --all
```

This installs into Cursor (and other detected agents). Restart Cursor or open a new agent chat if skills do not appear immediately.

## Project vs global

- **Project** (default): skills available in the current repo.
- **Global** (`-g`): available across projects on your machine.

```bash
npx skills add Alex7develop/my-agent-skills --all -g
```

## Rules vs skills

- **Skills** (`SKILL.md`) — full workflows with steps and exit criteria. Use for process.
- **Rules** (`.cursor/rules/*.mdc`) — short standing policies. Do **not** paste entire skills into rules; link or keep a one-line pointer instead.

## Verify

In chat, ask for something that should trigger a skill, e.g.:

- “Сделай короткую спеку перед реализацией экспорта в PDF”
- “Проведи code review этого diff”

If the agent skips the workflow, name the skill explicitly: “follow the `code-review` skill”.
