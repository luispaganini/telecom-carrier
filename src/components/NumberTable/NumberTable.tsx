import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import LoadingComponent from '../Loading/LoadingComponent';
import NumberRow from './NumberRow';
import NoContentComponent from '../NoContent/NoContentComponent';
import INumberInterface from '../../interfaces/INumberInterface';
import EditNumberModalComponent from '../Modals/EditNumberModalComponent';

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
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Phone Number</th>
                        <th>Monthly Price</th>
                        <th>Setup Price</th>
                        <th>Currency</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.numbers.map((number) => (
                        <NumberRow key={number.id} number={number} onDelete={props.deleteNumber} onEdit={updateNumberModal} />
                    ))}
                </tbody>
            </Table>
        </div>
    );
};
