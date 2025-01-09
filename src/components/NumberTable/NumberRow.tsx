import React from 'react';

interface Number {
  id: number;
  value: string;
  monthlyPrice: string;
  setupPrice: string;
  currency: string;
}

interface NumberRowProps {
  number: Number;
}

const NumberRow: React.FC<NumberRowProps> = ({ number }) => {
  return (
    <tr>
      <td>{number.id}</td>
      <td>{number.value}</td>
      <td>{number.monthlyPrice}</td>
      <td>{number.setupPrice}</td>
      <td>{number.currency}</td>
    </tr>
  );
};

export default NumberRow;
