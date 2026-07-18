# my-agent-skills

Небольшой набор из 6 практических навыков для AI-агентов (Claude Code, Cursor,
Codex, Copilot и др.), закрывающих базовый цикл разработки: спека → TDD →
код-ревью → отладка → рефакторинг → коммит/PR.

Формат основан на открытой [Agent Skills specification](https://github.com/vercel-labs/skills).

## Установка

Через открытую CLI `skills` (работает с 70+ агентами):

```bash
# поставить все навыки (интерактивный выбор)
npx skills add Alex7develop/my-agent-skills

# поставить все навыки сразу, без вопросов
npx skills add Alex7develop/my-agent-skills --all

# посмотреть список перед установкой
npx skills add Alex7develop/my-agent-skills --list

# поставить только один навык
npx skills add Alex7develop/my-agent-skills --skill code-review

# неинтерактивно, в конкретного агента (для CI)
npx skills add Alex7develop/my-agent-skills --skill test-driven-development -a claude-code -y
```

## Навыки в наборе

| Навык | Когда срабатывает |
|---|---|
| `spec-first` | Перед началом новой фичи/значимого изменения — короткая спека вместо кода "с ходу" |
| `test-driven-development` | При написании логики / исправлении багов — red-green-refactor |
| `code-review` | Перед мержем — структурированный чек-лист ревью |
| `systematic-debugging` | Баг / неожиданное поведение — системный поиск причины вместо угадывания |
| `safe-refactoring` | Изменение структуры кода без изменения поведения |
| `commit-and-pr` | Оформление коммитов и описания PR |

## Структура репозитория

```
my-agent-skills/
├── README.md
└── skills/
    ├── spec-first/SKILL.md
    ├── test-driven-development/SKILL.md
    ├── code-review/SKILL.md
    ├── systematic-debugging/SKILL.md
    ├── safe-refactoring/SKILL.md
    └── commit-and-pr/SKILL.md
```

Каждый навык — это папка с одним файлом `SKILL.md` (YAML frontmatter `name` +
`description`, дальше — процесс). `description` — это то, по чему агент решает,
подключать ли навык, поэтому формулируйте его "с запасом", перечисляя реальные
слова/фразы пользователя.

## Как расширять

1. Скопируйте любую папку из `skills/` как шаблон.
2. Замените `name`/`description` и содержимое.
3. Проверьте, что описание однозначно триггерится и не пересекается с другими
   навыками в наборе (если два навыка описывают одно и то же — агент будет
   путаться, какой подключить).
4. Закоммитьте — новый навык сразу доступен через `npx skills add`.

## Лицензия

MIT
