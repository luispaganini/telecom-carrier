import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import INumberInterface from "../../interfaces/INumberInterface";

interface NumberState {
  numbers: INumberInterface[];
  isLoading: boolean;
  error: string | null;
  total: number;
  pages: number;
}

const initialState: NumberState = {
  numbers: [],
  isLoading: false,
  error: null,
  total: 0,
  pages: 0,
};

const numberSlice = createSlice({
  name: "numbers",
  initialState,
  reducers: {
    fetchNumbersStart(state) {
      state.isLoading = true;
    },
    fetchNumbersSuccess(
      state,
      action: PayloadAction<{ data: INumberInterface[]; total: number, pages: number }>
    ) {
      state.numbers = action.payload.data;
      state.total = action.payload.total;
      state.isLoading = false;
      state.pages = action.payload.pages;
    },
    fetchNumbersFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { fetchNumbersStart, fetchNumbersSuccess, fetchNumbersFailure } =
  numberSlice.actions;

export default numberSlice.reducer;
