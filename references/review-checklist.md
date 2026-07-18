# Review checklist (five axes)

Companion to `code-review`.

1. **Correctness** — Does it do what was intended? Edge cases?
2. **Readability** — Would a new teammate understand it without a walkthrough?
3. **Security** — Input validation, injections, secrets, authz?
4. **Performance** — Obvious N+1, accidental O(n²), resource leaks?
5. **Tests** — Behavior covered? Not only the happy path?

Severity labels:

- **Blocks merge** — bugs, security, data loss
- **Should fix** — weak tests, confusing structure
- **Optional** — taste / style (label as such)
