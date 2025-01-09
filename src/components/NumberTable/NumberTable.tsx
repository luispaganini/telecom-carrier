import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNumbers } from '../../redux/actions/numberActions';
import NumberRow from './NumberRow';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { AppDispatch } from '../../redux/store';

const NumberTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { numbers, isLoading, error } = useAppSelector((state) => state.numbers);

  useEffect(() => {
    dispatch(fetchNumbers());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Phone Number</th>
            <th>Monthly Price</th>
            <th>Setup Price</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {numbers.map((number) => (
            <NumberRow key={number.id} number={number} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NumberTable;
