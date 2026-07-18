import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import type { RootState } from '../../app/store';
import { phaseLabels, phases } from '../../data/skills';
import {
  setActivePhaseFilter,
  setSearchQuery,
  type PhaseFilter,
} from '../../features/catalog/catalogSlice';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.75rem;
`;

const Search = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => theme.colors.bgElevated};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.95rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const Tabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tab = styled.button<{ $active: boolean }>`
  padding: 0.45rem 0.75rem;
  border: 1px solid
    ${({ theme, $active }) =>
      $active ? theme.colors.accent : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ $active }) =>
    $active ? 'rgba(94, 234, 212, 0.1)' : 'transparent'};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.accent : theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.78rem;
  cursor: pointer;
  transition:
    color 160ms ease,
    border-color 160ms ease,
    background 160ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    border-color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const filters: { value: PhaseFilter; label: string }[] = [
  { value: 'all', label: 'Все' },
  ...phases.map((phase) => ({
    value: phase as PhaseFilter,
    label: phaseLabels[phase],
  })),
];

export function SearchAndFilter() {
  const dispatch = useDispatch();
  const searchQuery = useSelector(
    (state: RootState) => state.catalog.searchQuery,
  );
  const activePhaseFilter = useSelector(
    (state: RootState) => state.catalog.activePhaseFilter,
  );

  return (
    <Wrap>
      <Search
        type="search"
        placeholder="Поиск по имени или описанию…"
        value={searchQuery}
        onChange={(event) => dispatch(setSearchQuery(event.target.value))}
        aria-label="Поиск навыков"
      />
      <Tabs role="tablist" aria-label="Фильтр по фазе">
        {filters.map((filter) => (
          <Tab
            key={filter.value}
            type="button"
            role="tab"
            aria-selected={activePhaseFilter === filter.value}
            $active={activePhaseFilter === filter.value}
            onClick={() => dispatch(setActivePhaseFilter(filter.value))}
          >
            {filter.label}
          </Tab>
        ))}
      </Tabs>
    </Wrap>
  );
}
