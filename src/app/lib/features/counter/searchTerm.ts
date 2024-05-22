// slice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
  category: '',
  currentPage: 0,
};

const searchTermSlice = createSlice({
  name: 'searchTerm',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setCate: (state, action) => {
      state.category = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setSearchTerm, setCate, setCurrentPage } = searchTermSlice.actions;

export default searchTermSlice.reducer;
