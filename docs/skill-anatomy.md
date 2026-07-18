# Skill anatomy

Each skill is a folder with one `SKILL.md`.

## Layout

```
skills/<skill-name>/
└── SKILL.md
```

## Frontmatter (required)

```yaml
---
name: kebab-case-name
description: >
  What to do + when to use + real user phrases that should trigger this skill.
  Also say when NOT to use it if collisions are likely.
---
```

- `name` — unique, lowercase, hyphens only; matches folder name.
- `description` — the **router**. Agents choose skills from this field. Include trigger phrases and exclusions.

## Body sections (recommended)

1. **Overview** — one short paragraph: why this skill exists.
2. **When to use / When to skip** — clear boundaries.
3. **Process** — numbered steps the agent must follow.
4. **Output format** — template for the answer (optional but useful).
5. **Checklist** — exit criteria (“done when…”).

Optional: anti-rationalization table (excuses + rebuttals), red flags.

## Writing principles

| Do | Don't |
|---|---|
| Actionable steps | Vague advice (“be careful”) |
| Verifiable exit criteria | “Seems good” |
| Real user phrases in `description` | Overlap with a sibling skill’s triggers |
| 5–10 minute read for the agent | Multi-page essays |

## Validation

```bash
./scripts/validate-skills.sh
```

Checks: folder = `name`, frontmatter present, `description` non-empty, `SKILL.md` exists.
