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
      console.log(data)
      dispatch(fetchNumbersSuccess({ data, total, pages }));
    } catch (error) {
      dispatch(fetchNumbersFailure(error instanceof Error ? error.message : "An unknown error occurred"));
    }
  };

export const addNumber = (newNumber: INumberInterface) => async (dispatch: AppDispatch) => {
  dispatch(fetchNumbersStart());
  try {
    await addNumberApi(newNumber);
    dispatch(fetchNumbers());
  } catch (error) {
    dispatch(fetchNumbersFailure(error instanceof Error ? error.message : "An unknown error occurred"));
  }
};

export const updateNumber = (updatedNumber: INumberInterface) => async (dispatch: AppDispatch) => {
  dispatch(fetchNumbersStart());
  try {
    await updateNumberApi(updatedNumber);
    dispatch(fetchNumbers());
  } catch (error) {
    dispatch(fetchNumbersFailure(error instanceof Error ? error.message : "An unknown error occurred"));
  }
};

export const deleteNumber = (id: number) => async (dispatch: AppDispatch) => {
  dispatch(fetchNumbersStart());
  try {
    await deleteNumberApi(id);
    dispatch(fetchNumbers());
  } catch (error) {
    dispatch(fetchNumbersFailure(error instanceof Error ? error.message : "An unknown error occurred"));
  }
};
