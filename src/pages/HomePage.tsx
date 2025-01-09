import { useDispatch } from 'react-redux';
import NumberTable from '../components/NumberTable/NumberTable'
import { AppDispatch } from '../redux/store';
import { useAppSelector } from '../redux/hooks/useAppSelector';
import { deleteNumber, fetchNumbers, updateNumber } from '../redux/actions/numberActions';
import INumberInterface from '../interfaces/INumberInterface';
import { useEffect } from 'react';

export default function HomePage() {
    const dispatch = useDispatch<AppDispatch>();
    const { numbers, isLoading, error } = useAppSelector((state) => state.numbers);

    useEffect(() => {
        dispatch(fetchNumbers());
    }, [dispatch]);

    const deleteNumberFunction = async (id: number) => dispatch(deleteNumber(id))
    const editNumberFunction = async (item: INumberInterface) => dispatch(updateNumber(item)) 
    
    return (
        <div className="container mt-4">
            <h2>Phone Numbers for Sale</h2>
            <NumberTable
                numbers={numbers}
                isLoading={isLoading}
                error={error}
                updateNumber={editNumberFunction}
                deleteNumber={deleteNumberFunction}
            />
        </div>
    )
}
