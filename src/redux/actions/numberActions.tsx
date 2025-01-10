import { AppDispatch } from "../store";
import {
  fetchNumbersStart,
  fetchNumbersSuccess,
  fetchNumbersFailure,
} from "../reducers/numberReducer";
import {
  getNumbers,
  addNumber as addNumberApi,
  updateNumber as updateNumberApi,
  deleteNumber as deleteNumberApi,
} from "../../services/mockApi";
import INumberInterface from "../../interfaces/INumberInterface";

export const fetchNumbers =
  (page: number = 1, limit: number = 10) =>
  async (dispatch: AppDispatch) => {
    dispatch(fetchNumbersStart());
    try {
      const { data, total, pages } = await getNumbers(page, limit);

      dispatch(fetchNumbersSuccess({ data, total, pages }));
    } catch (error) {
      dispatch(fetchNumbersFailure(error instanceof Error ? error.message : "An unknown error occurred"));
    }
  };

export const addNumber = (newNumber: INumberInterface, currentPage: number, limit: number) => async (dispatch: AppDispatch) => {
  dispatch(fetchNumbersStart());
  try {
    await addNumberApi(newNumber);
    dispatch(fetchNumbers(currentPage, limit));
  } catch (error) {
    dispatch(fetchNumbersFailure(error instanceof Error ? error.message : "An unknown error occurred"));
  }
};

export const updateNumber = (updatedNumber: INumberInterface, currentPage: number, limit: number) => async (dispatch: AppDispatch) => {
  dispatch(fetchNumbersStart());
  try {
    await updateNumberApi(updatedNumber);
    dispatch(fetchNumbers(currentPage, limit));
  } catch (error) {
    dispatch(fetchNumbersFailure(error instanceof Error ? error.message : "An unknown error occurred"));
  }
};

export const deleteNumber = (id: number, currentPage: number, limit: number) => async (dispatch: AppDispatch) => {
  dispatch(fetchNumbersStart());
  try {
    await deleteNumberApi(id);
    dispatch(fetchNumbers(currentPage, limit));
  } catch (error) {
    dispatch(fetchNumbersFailure(error instanceof Error ? error.message : "An unknown error occurred"));
  }
};
