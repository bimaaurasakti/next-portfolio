import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { projectPortfolio } from '@/data/index'  // Impor projectPortfolio
import { RootState } from '@/lib/store';

export interface Portfolio {
  title: string;
  subTitle: string;
  logo: string;
  thumbnail: string;
  technology: string[];
  show: boolean;
}

export interface PortfolioState {
  list: Portfolio[];
}

const initialState: PortfolioState = {
  list: projectPortfolio 
}

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    addPortfolio: (state, action: PayloadAction<Portfolio>) => {
      state.list.push(action.payload);
    },
    removePortfolio: (state, action: PayloadAction<number>) => {
      state.list.splice(action.payload, 1);
    },
    filterByTechnology: (state, action: PayloadAction<string>) => {
      if (action.payload === "All") {
        state.list.forEach(project => {
          project.show = true;
        });
      } else {
        state.list.forEach(project => {
          project.show = project.technology.includes(action.payload);
        });
      }
    }
  }
})

export const { addPortfolio, removePortfolio, filterByTechnology } = portfolioSlice.actions
export const selectPortfolio = (state: RootState) => state.portfolio.list 
export default portfolioSlice.reducer
