import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import LoadingComponent from '../Loading/LoadingComponent';
import NumberRow from './NumberRow';
import NoContentComponent from '../NoContent/NoContentComponent';
import INumberInterface from '../../interfaces/INumberInterface';
import EditNumberModalComponent from '../Modals/NumberModalComponent';

type NumberTableProps = {
    numbers: INumberInterface[];
    isLoading: boolean;
    error: string | null;
    updateNumber: (item: INumberInterface) => void;
    deleteNumber: (id: number) => void;
}


export default function NumberTable(props: NumberTableProps) {
    const [editModalOpen, setEditModalOpen] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState<INumberInterface | null>(null)

    if (props.isLoading)
        return <LoadingComponent classname='d-flex justify-content-center mt-5' />;

    if (props.error)
        return <NoContentComponent message={props.error} classname='d-flex justify-content-center mt-5' />;

    const updateNumberModal = (e: INumberInterface) => {
        setSelectedNumber(e)
        setEditModalOpen(true)
    }

    return (
        <div>
            {editModalOpen && selectedNumber &&
                <EditNumberModalComponent
                    show={editModalOpen}
                    handleClose={() => setEditModalOpen(false)}
                    number={selectedNumber}
                    updateNumber={props.updateNumber}
                />
            }
            <div className="overflow-x-auto">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b">#</th>
                            <th className="px-4 py-2 border-b">Phone Number</th>
                            <th className="px-4 py-2 border-b">Monthly Price</th>
                            <th className="px-4 py-2 border-b">Setup Price</th>
                            <th className="px-4 py-2 border-b">Currency</th>
                            <th className="px-4 py-2 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.numbers.map((number) => (
                            <NumberRow key={Number(number.id)} number={number} onDelete={props.deleteNumber} onEdit={updateNumberModal} />
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};
