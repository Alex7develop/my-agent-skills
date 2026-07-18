import { createSelector } from '@reduxjs/toolkit';
import { skills } from '../../data/skills';
import type { RootState } from '../../app/store';

const selectSearchQuery = (state: RootState) => state.catalog.searchQuery;
const selectActivePhaseFilter = (state: RootState) =>
  state.catalog.activePhaseFilter;

export const selectFilteredSkills = createSelector(
  [selectSearchQuery, selectActivePhaseFilter],
  (searchQuery, activePhaseFilter) => {
    const query = searchQuery.trim().toLowerCase();

    return skills.filter((skill) => {
      const matchesPhase =
        activePhaseFilter === 'all' || skill.phase === activePhaseFilter;

      if (!matchesPhase) return false;
      if (!query) return true;

      return (
        skill.name.toLowerCase().includes(query) ||
        skill.tagline.toLowerCase().includes(query) ||
        skill.description.toLowerCase().includes(query)
      );
    });
  },
);
