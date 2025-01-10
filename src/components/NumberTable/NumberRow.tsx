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
      <td className="px-4 py-2 border-b">{props.number.id}</td>
      <td className="px-4 py-2 border-b">{props.number.value}</td>
      <td className="px-4 py-2 border-b">{props.number.monthlyPrice}</td>
      <td className="px-4 py-2 border-b">{props.number.setupPrice}</td>
      <td className="px-4 py-2 border-b">{props.number.currency}</td>
      <td className="px-4 py-2 border-b">
        <div className='flex items-center'>
          <PencilSquare className="mr-2 cursor-pointer" title='Edit' onClick={() => props.onEdit(props.number)} />
          <Trash className="cursor-pointer" title='Delete' onClick={() => props.onDelete(Number(props.number.id))} />
        </div>
      </td>
    </tr>
  );
}