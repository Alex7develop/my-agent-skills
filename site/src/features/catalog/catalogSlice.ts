import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Phase } from '../../data/skills';

export type PhaseFilter = Phase | 'all';

interface CatalogState {
  searchQuery: string;
  activePhaseFilter: PhaseFilter;
}

const initialState: CatalogState = {
  searchQuery: '',
  activePhaseFilter: 'all',
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setActivePhaseFilter(state, action: PayloadAction<PhaseFilter>) {
      state.activePhaseFilter = action.payload;
    },
  },
});

export const { setSearchQuery, setActivePhaseFilter } = catalogSlice.actions;
export default catalogSlice.reducer;
