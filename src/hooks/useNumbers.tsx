import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { useAppSelector } from '../redux/hooks/useAppSelector';
import { fetchNumbers, deleteNumber, updateNumber, addNumber } from '../redux/actions/numberActions';
import INumberInterface from '../interfaces/INumberInterface';

const useNumbers = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { numbers, isLoading, error, pages } = useAppSelector((state) => state.numbers);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        dispatch(fetchNumbers(currentPage, itemsPerPage));
    }, [dispatch, currentPage]);

    const addNumberFunction = async (item: INumberInterface) => {
        try {
            await dispatch(addNumber(item, currentPage, itemsPerPage));
            return { success: true, message: 'Number added successfully!' };
        } catch {
            return { success: false, message: 'Failed to add number.' };
        }
    };

    const updateNumberFunction = async (item: INumberInterface) => {
        try {
            await dispatch(updateNumber(item, currentPage, itemsPerPage));
            return { success: true, message: 'Number updated successfully!' };
        } catch {
            return { success: false, message: 'Failed to update number.' };
        }
    };

    const deleteNumberFunction = async (id: number) => {
        try {
            await dispatch(deleteNumber(id, currentPage, itemsPerPage));

            return { success: true, message: 'Number deleted successfully!' };
        } catch {
            return { success: false, message: 'Failed to delete number.' };
        }
    };

    return {
        numbers,
        isLoading,
        error,
        pages,
        currentPage,
        setCurrentPage,
        addNumber: addNumberFunction,
        updateNumber: updateNumberFunction,
        deleteNumber: deleteNumberFunction,
    };
};

export default useNumbers;
