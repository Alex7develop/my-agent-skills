import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { phaseLabels, type Phase, type Skill } from '../../data/skills';

const Column = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.bgElevated};
`;

const Label = styled.h3`
  color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  list-style: none;
`;

const Item = styled.li``;

const SkillLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  transition: color 160ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const SkillName = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.92rem;
  font-weight: 600;
`;

const SkillTagline = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.88rem;

  ${SkillLink}:hover & {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

interface PhaseColumnProps {
  phase: Phase;
  skills: Skill[];
}

export function PhaseColumn({ phase, skills }: PhaseColumnProps) {
  return (
    <Column>
      <Label>{phaseLabels[phase]}</Label>
      <List>
        {skills.map((skill) => (
          <Item key={skill.slug}>
            <SkillLink to={`/skills/${skill.slug}`}>
              <SkillName>{skill.name}</SkillName>
              <SkillTagline>{skill.tagline}</SkillTagline>
            </SkillLink>
          </Item>
        ))}
      </List>
    </Column>
  );
}
