# my-agent-skills — site

Landing и каталог для набора [Alex7develop/my-agent-skills](https://github.com/Alex7develop/my-agent-skills): тёмная витрина в духе терминала, с поиском/фильтром навыков и страницами установки.

Живёт **внутри монорепозитория** в папке `site/`, чтобы `npx skills add` продолжал видеть только `skills/` в корне — без `node_modules` и Vite-конфигов рядом с навыками.

## Стек

| Слой | Технология |
|---|---|
| UI | React 19 + TypeScript (strict) |
| Сборка | Vite 8 |
| Стили | styled-components + `ThemeProvider` |
| Стейт | Redux Toolkit (`searchQuery`, `activePhaseFilter`) |
| Роутинг | react-router-dom — `/`, `/skills`, `/skills/:slug` |

## Быстрый старт

Из корня репозитория:

```bash
cd site
npm install
npm run dev
```

Откроется локальный dev-сервер (обычно `http://localhost:5173`).

| Команда | Что делает |
|---|---|
| `npm run dev` | Dev-сервер с HMR |
| `npm run build` | Typecheck (`tsc -b`) + production-сборка в `dist/` |
| `npm run preview` | Превью собранного `dist/` |
| `npm run lint` | Oxlint |

## Страницы

- **`/`** — hero с анимацией печати команды установки, жизненный цикл по фазам, каталог с поиском/фильтром, блок «зачем».
- **`/skills`** — полный каталог из 6 навыков.
- **`/skills/:slug`** — карточка навыка + команда `npx skills add … --skill <slug>` с копированием.

## Структура

```
site/
├── public/
│   └── favicon.svg          # монограмма MAS
├── src/
│   ├── app/                 # store, App (роуты)
│   ├── components/          # Header, Hero, Terminal, SkillCard, …
│   ├── data/skills.ts       # единый источник данных о навыках
│   ├── features/catalog/    # Redux slice + селекторы фильтрации
│   ├── pages/               # Home, Catalog, Skill
│   └── styles/              # theme, GlobalStyle
├── package.json
└── vite.config.ts
```

Данные навыков не дублируются по страницам: всё идёт из `src/data/skills.ts`.

## Дизайн

Палитра и тон — консоль, не «AI purple»:

- фон `#0A0A0B`, поверхности `#141416`
- акцент `#5EEAD4` (команды, ссылки, активные состояния)
- mono для команд и имён навыков (`JetBrains Mono`)
- радиусы 0–4px, тонкие 1px-границы вместо теней

Терминал в hero печатает команду посимвольно; при `prefers-reduced-motion` текст показывается сразу. Кнопка копирования меняет иконку на галочку после успеха.

## Деплой

Статика после `npm run build` лежит в `site/dist/`. Подойдёт любой хостинг статики (GitHub Pages, Cloudflare Pages, Netlify, Vercel): root = `site`, build = `npm run build`, publish = `dist`.

Для GitHub Pages с project site может понадобиться `base` в `vite.config.ts` — выставьте путь репозитория, если деплоите не на корень домена.

## Связь с навыками

Исходники навыков — в корневом `../skills/`. Этот сайт их **не устанавливает** и не патчит: только витрина и UX вокруг команды `npx skills add Alex7develop/my-agent-skills`.
