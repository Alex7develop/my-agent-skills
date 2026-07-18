import styled from 'styled-components';
import { Hero } from '../components/Hero/Hero';
import { PhaseColumn } from '../components/PhaseColumn/PhaseColumn';
import { SearchAndFilter } from '../components/SearchAndFilter/SearchAndFilter';
import { SkillGrid } from '../components/SkillGrid/SkillGrid';
import {
  Container,
  Section,
  SectionLabel,
  SectionLead,
  SectionTitle,
} from '../components/shared';
import { phases, skills } from '../data/skills';

const PhaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const WhyCard = styled.article`
  padding: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.bgElevated};
`;

const WhyTitle = styled.h3`
  margin-bottom: 0.55rem;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.02em;
`;

const WhyText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.92rem;
`;

const whyItems = [
  {
    title: 'Агенты выбирают короткий путь',
    text: 'По умолчанию модель пропускает спеку, тесты и ревью — «потом добавлю». Навыки закрывают эти лазейки явным процессом.',
  },
  {
    title: 'Один цикл — от идеи до PR',
    text: 'Шесть навыков покрывают фазы до кода, во время реализации и перед мержем. Не нужно собирать процесс из разрозненных промптов.',
  },
  {
    title: 'Работает там, где вы уже пишете код',
    text: 'Установка одной командой в Cursor, Claude Code, Codex, Copilot и десятки других агентов через открытый формат Agent Skills.',
  },
];

export function HomePage() {
  return (
    <>
      <Hero />

      <Section id="lifecycle">
        <Container>
          <SectionLabel>Жизненный цикл</SectionLabel>
          <SectionTitle>Три фазы — шесть навыков</SectionTitle>
          <SectionLead>
            Навыки сгруппированы по моменту в разработке: что делать до кода,
            как реализовывать и что проверить перед мержем.
          </SectionLead>
          <PhaseGrid>
            {phases.map((phase) => (
              <PhaseColumn
                key={phase}
                phase={phase}
                skills={skills.filter((skill) => skill.phase === phase)}
              />
            ))}
          </PhaseGrid>
        </Container>
      </Section>

      <Section id="catalog">
        <Container>
          <SectionLabel>Каталог</SectionLabel>
          <SectionTitle>Все навыки</SectionTitle>
          <SectionLead>
            Ищите по имени или описанию, фильтруйте по фазе жизненного цикла.
          </SectionLead>
          <SearchAndFilter />
          <SkillGrid />
        </Container>
      </Section>

      <Section id="why">
        <Container>
          <SectionLabel>Зачем</SectionLabel>
          <SectionTitle>Структура вместо короткого пути</SectionTitle>
          <SectionLead>
            AI-агент без дисциплины пишет код быстро — и так же быстро копит
            технический долг. Эти навыки держат процесс.
          </SectionLead>
          <WhyGrid>
            {whyItems.map((item) => (
              <WhyCard key={item.title}>
                <WhyTitle>{item.title}</WhyTitle>
                <WhyText>{item.text}</WhyText>
              </WhyCard>
            ))}
          </WhyGrid>
        </Container>
      </Section>
    </>
  );
}
