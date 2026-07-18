# Testing patterns (quick reference)

Pulled in by `test-driven-development` when useful.

## Red → Green → Refactor

1. Write one failing test for the next behavior.
2. Implement the minimum to pass.
3. Refactor only while green.

## Prefer

- **Behavior over implementation** — refactors should not break tests if API is stable.
- **One reason to fail** per test.
- **DAMP over DRY** in tests — readable setup beats clever helpers.

## Pyramid (rough)

| Layer | Share | Role |
|---|---|---|
| Unit | ~80% | Fast business logic |
| Integration | ~15% | Module boundaries |
| E2E | ~5% | Critical user paths |

## Bug fixes

Start with a failing test that reproduces the bug, then fix, then confirm green.
