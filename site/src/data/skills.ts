export type Phase = 'before-code' | 'implementation' | 'before-merge';

export interface Skill {
  slug: string;
  name: string;
  phase: Phase;
  tagline: string;
  description: string;
}

export const skills: Skill[] = [
  {
    slug: 'spec-first',
    name: 'spec-first',
    phase: 'before-code',
    tagline: 'Спека перед кодом',
    description:
      'Короткая спецификация — цель, границы, контракт, критерии готовности — прежде чем написана хоть одна строка кода.',
  },
  {
    slug: 'test-driven-development',
    name: 'test-driven-development',
    phase: 'implementation',
    tagline: 'Red → Green → Refactor',
    description:
      'Разработка через тесты: сначала падающий тест, потом минимальная реализация, потом рефакторинг на зелёных тестах.',
  },
  {
    slug: 'systematic-debugging',
    name: 'systematic-debugging',
    phase: 'implementation',
    tagline: 'Причина, а не симптом',
    description:
      'Системный поиск корневой причины бага через явную гипотезу и сужение области, вместо правок наугад.',
  },
  {
    slug: 'safe-refactoring',
    name: 'safe-refactoring',
    phase: 'implementation',
    tagline: 'Структура без изменения поведения',
    description:
      'Маленькие проверяемые шаги рефакторинга под защитой тестов — без смешивания с изменением функциональности.',
  },
  {
    slug: 'code-review',
    name: 'code-review',
    phase: 'before-merge',
    tagline: 'Пять осей ревью',
    description:
      'Структурированная проверка перед мержем: корректность, читаемость, безопасность, производительность, тесты.',
  },
  {
    slug: 'commit-and-pr',
    name: 'commit-and-pr',
    phase: 'before-merge',
    tagline: 'Коммиты и PR, которые объясняют «почему»',
    description:
      'Атомарные коммиты и описания PR, дающие ревьюеру контекст без необходимости читать весь diff.',
  },
];

export const phaseLabels: Record<Phase, string> = {
  'before-code': 'Перед кодом',
  implementation: 'Реализация',
  'before-merge': 'Перед мержем',
};

export const phases: Phase[] = [
  'before-code',
  'implementation',
  'before-merge',
];

export const INSTALL_ALL_CMD =
  'npx skills add Alex7develop/my-agent-skills';

export const GITHUB_URL =
  'https://github.com/Alex7develop/my-agent-skills';

export const SKILLS_SH_URL =
  'https://skills.sh/Alex7develop/my-agent-skills';

export function installSkillCmd(slug: string): string {
  return `npx skills add Alex7develop/my-agent-skills --skill ${slug}`;
}

export function getSkillBySlug(slug: string): Skill | undefined {
  return skills.find((skill) => skill.slug === slug);
}
