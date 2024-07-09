import { configureStore } from '@reduxjs/toolkit';
import portfolioSlice from './features/portfolioSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      portfolio: portfolioSlice,
    },
  });
} 

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];