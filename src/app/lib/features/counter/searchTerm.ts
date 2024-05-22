// slice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
  category: '',
};

const searchTermSlice = createSlice({
  name: 'searchTerm',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      console.log('new searchterm', state.searchTerm);
    },
    setCate: (state, action) => {
      state.category = action.payload;
      console.log('new category ', state.category);
    },
  },
});

export const { setSearchTerm, setCate } = searchTermSlice.actions;

export default searchTermSlice.reducer;
