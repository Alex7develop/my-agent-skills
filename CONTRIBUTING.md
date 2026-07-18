# Contributing

Thanks for improving `my-agent-skills`. This pack stays **small on purpose**: six
focused skills that cover the everyday loop. Prefer deepening an existing skill
over adding a near-duplicate.

## Before proposing a new skill

1. Search `skills/` — does an existing skill already cover the intent?
2. Check that the trigger phrases in `description` will not collide with another skill.
3. Confirm the idea fits [docs/skill-anatomy.md](docs/skill-anatomy.md).
4. Justify the gap in the PR: what user phrases need a new skill?

A good skill is **specific**, **verifiable**, **battle-tested**, and **minimal**.

## Editing skills

1. Change only `skills/<name>/SKILL.md` (and references if needed).
2. Keep YAML frontmatter: `name` (kebab-case) + `description` (when to use + trigger phrases).
3. Keep the process short — steps an agent can follow, not an essay.
4. Run validation:

```bash
./scripts/validate-skills.sh
```

## Site changes

The landing app lives in `site/`. See [site/README.md](site/README.md).

```bash
cd site
npm install
npm run build
```

Do not place Vite/app files in the repo root.

## Pull requests

- One logical change per PR when possible.
- Describe **why**, not only what.
- Link related issues.
- Note risks / out of scope items.

Use the `commit-and-pr` skill for commit messages and PR bodies.

## Local install clutter

After testing `npx skills add` locally you may see `.agents/`, `.claude/skills` symlinks, or `skills-lock.json`. These are gitignored — do not commit them. Source of truth remains `skills/`.
