import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { phaseLabels, type Skill } from '../../data/skills';
import { PhaseBadge } from '../shared';

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  height: 100%;
  padding: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.bgElevated};
  transition:
    border-color 160ms ease,
    transform 160ms ease,
    background 160ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    background: #17171a;
    transform: translateY(-2px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: border-color 160ms ease, background 160ms ease;

    &:hover {
      transform: none;
    }
  }
`;

const Name = styled.h3`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.02em;
`;

const Tagline = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.95rem;
  font-weight: 500;
`;

const Description = styled.p`
  flex: 1;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
`;

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card to={`/skills/${skill.slug}`}>
      <PhaseBadge>{phaseLabels[skill.phase]}</PhaseBadge>
      <Name>{skill.name}</Name>
      <Tagline>{skill.tagline}</Tagline>
      <Description>{skill.description}</Description>
    </Card>
  );
}
