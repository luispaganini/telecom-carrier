import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import INumberInterface from '../../interfaces/INumberInterface';

interface NumberState {
  numbers: INumberInterface[];
  isLoading: boolean;
  error: string | null;
}

const initialState: NumberState = {
  numbers: [],
  isLoading: false,
  error: null,
};

const numberSlice = createSlice({
  name: 'numbers',
  initialState,
  reducers: {
    fetchNumbersStart(state) {
      state.isLoading = true;
    },
    fetchNumbersSuccess(state, action: PayloadAction<INumberInterface[]>) {
      state.numbers = action.payload;
      state.isLoading = false;
    },
    fetchNumbersFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { fetchNumbersStart, fetchNumbersSuccess, fetchNumbersFailure } = numberSlice.actions;

export default numberSlice.reducer;
