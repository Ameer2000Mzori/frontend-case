import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'app/features/sreachTerms/searchTerm'; // Adjust the path
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
    },
  });

export const wrapper = createWrapper(makeStore);
