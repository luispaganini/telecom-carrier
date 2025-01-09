import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Number {
  id: number;
  value: string;
  monthlyPrice: string;
  setupPrice: string;
  currency: string;
}

interface NumberState {
  numbers: Number[];
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
    fetchNumbersSuccess(state, action: PayloadAction<Number[]>) {
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
