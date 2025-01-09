import INumberInterface from '../../interfaces/INumberInterface';
import { PencilSquare, Trash } from 'react-bootstrap-icons';

interface NumberRowProps {
  number: INumberInterface;
  onDelete: (id: number) => void;
  onEdit: (item: INumberInterface) => void;
}

export default function NumberRow(props: NumberRowProps) {
  return (
    <tr>
      <td>{props.number.id}</td>
      <td>{props.number.value}</td>
      <td>{props.number.monthlyPrice}</td>
      <td>{props.number.setupPrice}</td>
      <td>{props.number.currency}</td>
      <td>
          <div className='flex items-center'>
            <PencilSquare className="me-2 cursor-pointer" title='Edit' onClick={() => props.onEdit(props.number)}/>
            <Trash className="cursor-pointer" title='Delete' onClick={() => props.onDelete(props.number.id)}/>
          </div>
      </td>
    </tr>
  );
};
