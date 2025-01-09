import { AppDispatch } from '../store';
import { fetchNumbersStart, fetchNumbersSuccess, fetchNumbersFailure } from '../reducers/numberReducer';
import { getNumbers } from '../../services/mockApi';
import INumberInterface from '../../interfaces/INumberInterface';

export const fetchNumbers = () => async (dispatch: AppDispatch) => {
    dispatch(fetchNumbersStart());

    try {
        const data = await getNumbers();
        dispatch(fetchNumbersSuccess(data));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(fetchNumbersFailure(error.message));
        } else {
            dispatch(fetchNumbersFailure('An unknown error occurred'));
        }
    }
};

export const addNumber = (newNumber: INumberInterface) => async (dispatch: AppDispatch) => {
    dispatch(fetchNumbersStart());

    try {
        const data = await getNumbers();
        const updatedData = [...data, newNumber];
        dispatch(fetchNumbersSuccess(updatedData));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(fetchNumbersFailure(error.message));
        } else {
            dispatch(fetchNumbersFailure('An unknown error occurred'));
        }
    }
}

export const updateNumber = (updatedNumber: INumberInterface) => async (dispatch: AppDispatch) => {
    dispatch(fetchNumbersStart());

    try {
        const data = await getNumbers();
        const updatedData = data.map((num: any) => num.id === updatedNumber.id ? updatedNumber : num);
        dispatch(fetchNumbersSuccess(updatedData));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(fetchNumbersFailure(error.message));
        } else {
            dispatch(fetchNumbersFailure('An unknown error occurred'));
        }
    }
}

export const deleteNumber = (id: number) => async (dispatch: AppDispatch) => {
    dispatch(fetchNumbersStart());

    try {
        console.log("DELETING TEST")
        const data = await getNumbers();
        const updatedData = data.filter((num: INumberInterface) => num.id !== id);
        console.log(updatedData)
        dispatch(fetchNumbersSuccess(updatedData));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(fetchNumbersFailure(error.message));
        } else {
            dispatch(fetchNumbersFailure('An unknown error occurred'));
        }
    }
}
