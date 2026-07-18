import { Link, Navigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  getSkillBySlug,
  installSkillCmd,
  phaseLabels,
} from '../data/skills';
import {
  Container,
  PhaseBadge,
  SectionLabel,
} from '../components/shared';
import { TerminalTypewriter } from '../components/TerminalTypewriter/TerminalTypewriter';

const Page = styled.div`
  padding: 3rem 0 4.5rem;
`;

const Back = styled(Link)`
  display: inline-block;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.85rem;
  transition: color 160ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Name = styled.h1`
  margin: 0.85rem 0 0.5rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.15;
`;

const Tagline = styled.p`
  margin-bottom: 1.25rem;
  font-size: 1.15rem;
  font-weight: 500;
`;

const Description = styled.p`
  max-width: 40rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.05rem;
`;

const InstallBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.85rem;
  max-width: 40rem;
`;

const InstallLabel = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export function SkillPage() {
  const { slug = '' } = useParams();
  const skill = getSkillBySlug(slug);

  if (!skill) {
    return <Navigate to="/skills" replace />;
  }

  const command = installSkillCmd(skill.slug);

  return (
    <Page>
      <Container>
        <Back to="/skills">← К каталогу</Back>
        <SectionLabel>Навык</SectionLabel>
        <PhaseBadge>{phaseLabels[skill.phase]}</PhaseBadge>
        <Name>{skill.name}</Name>
        <Tagline>{skill.tagline}</Tagline>
        <Description>{skill.description}</Description>
        <InstallBlock>
          <InstallLabel>Установка</InstallLabel>
          <TerminalTypewriter command={command} animate={false} />
        </InstallBlock>
      </Container>
    </Page>
  );
}
