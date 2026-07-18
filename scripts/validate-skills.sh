#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SKILLS_DIR="$ROOT/skills"
errors=0

if [[ ! -d "$SKILLS_DIR" ]]; then
  echo "error: skills/ directory not found" >&2
  exit 1
fi

shopt -s nullglob
skill_dirs=("$SKILLS_DIR"/*/)
if [[ ${#skill_dirs[@]} -eq 0 ]]; then
  echo "error: no skill folders under skills/" >&2
  exit 1
fi

echo "Validating ${#skill_dirs[@]} skill(s)…"

for dir in "${skill_dirs[@]}"; do
  name="$(basename "$dir")"
  skill_file="$dir/SKILL.md"
  skill_ok=1

  if [[ ! -f "$skill_file" ]]; then
    echo "✗ $name — missing SKILL.md"
    errors=$((errors + 1))
    continue
  fi

  if ! head -n 1 "$skill_file" | grep -q '^---$'; then
    echo "✗ $name — SKILL.md must start with YAML frontmatter (---)"
    errors=$((errors + 1))
    continue
  fi

  frontmatter="$(awk 'NR==1{next} /^---$/{exit} {print}' "$skill_file")"
  fm_name="$(printf '%s\n' "$frontmatter" | sed -n 's/^name:[[:space:]]*//p' | head -n1 | tr -d '"' | tr -d "'")"
  fm_desc="$(printf '%s\n' "$frontmatter" | sed -n 's/^description:[[:space:]]*//p' | head -n1)"

  if [[ -z "$fm_name" ]]; then
    echo "✗ $name — frontmatter missing name"
    errors=$((errors + 1))
    skill_ok=0
  elif [[ "$fm_name" != "$name" ]]; then
    echo "✗ $name — folder name != frontmatter name ($fm_name)"
    errors=$((errors + 1))
    skill_ok=0
  fi

  if [[ -z "$fm_desc" ]]; then
    echo "✗ $name — frontmatter missing description"
    errors=$((errors + 1))
    skill_ok=0
  elif [[ ${#fm_desc} -lt 40 ]]; then
    echo "✗ $name — description looks too short (${#fm_desc} chars)"
    errors=$((errors + 1))
    skill_ok=0
  fi

  if [[ "$skill_ok" -eq 1 ]]; then
    echo "✓ $name"
  fi
done

expected=(
  code-review
  commit-and-pr
  safe-refactoring
  spec-first
  systematic-debugging
  test-driven-development
)

for name in "${expected[@]}"; do
  if [[ ! -f "$SKILLS_DIR/$name/SKILL.md" ]]; then
    echo "✗ catalog — expected skill missing: $name"
    errors=$((errors + 1))
  fi
done

if [[ "$errors" -gt 0 ]]; then
  echo "Failed with $errors error(s)." >&2
  exit 1
fi

echo "All skills OK."
