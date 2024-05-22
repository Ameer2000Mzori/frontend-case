import { configureStore } from '@reduxjs/toolkit';
import searchTermSliceReducer from 'app/lib/features/counter/searchTerm';

export const makeStore = () => {
  return configureStore({
    reducer: {
      search: searchTermSliceReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
