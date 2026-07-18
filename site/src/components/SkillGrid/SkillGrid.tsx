import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectFilteredSkills } from '../../features/catalog/selectors';
import { SkillCard } from '../SkillCard/SkillCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Empty = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.9rem;
`;

export function SkillGrid() {
  const filtered = useSelector(selectFilteredSkills);

  if (filtered.length === 0) {
    return <Empty>Ничего не найдено — попробуйте другой запрос.</Empty>;
  }

  return (
    <Grid>
      {filtered.map((skill) => (
        <SkillCard key={skill.slug} skill={skill} />
      ))}
    </Grid>
  );
}
