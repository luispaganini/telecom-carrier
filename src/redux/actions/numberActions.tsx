import { AppDispatch } from '../store';
import { fetchNumbersStart, fetchNumbersSuccess, fetchNumbersFailure } from '../reducers/numberReducer';
import { getNumbers } from '../../services/mockApi';

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
