import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import NavbarComponent from '../components/Navbar/NavbarComponent';
import NumberTable from '../components/NumberTable/NumberTable';
import { AppDispatch } from '../redux/store';
import { useAppSelector } from '../redux/hooks/useAppSelector';
import { deleteNumber, fetchNumbers, updateNumber, addNumber } from '../redux/actions/numberActions';
import INumberInterface from '../interfaces/INumberInterface';
import FloatingPlusButton from '../components/Floating/FloatingPlusButton';
import NumberModalComponent from '../components/Modals/NumberModalComponent';
import LoadingComponent from '../components/Loading/LoadingComponent';
import NoContentComponent from '../components/NoContent/NoContentComponent';
import { PaginationComponent } from '../components/Pagination/PaginationComponent';
import { ToastComponent } from '../components/Toast/ToastComponent';

export default function HomePage() {
    const dispatch = useDispatch<AppDispatch>();
    const { numbers, isLoading, error, pages } = useAppSelector((state) => state.numbers);
    const [showModal, setShowModal] = useState(false);
    const numberDefault: INumberInterface = { id: 0, value: '', monthlyPrice: '0', setupPrice: '0', currency: '' };
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    
    const [showToast, setShowToast] = useState(false);
    const [messageToast, setMessageToast] = useState('Success');

    useEffect(() => {
        dispatch(fetchNumbers(currentPage, itemsPerPage));
    }, [dispatch, currentPage]);

    const deleteNumberFunction = async (id: number) => {
        try {
            await dispatch(deleteNumber(id));
            setMessageToast('Number deleted successfully!');
            setShowToast(true);
        } catch (error) {
            setMessageToast('Failed to delete number.');
            setShowToast(true);
        }
    };

    const editNumberFunction = async (item: INumberInterface) => {
        try {
            await dispatch(updateNumber(item));
            setMessageToast('Number updated successfully!');
            setShowToast(true);
        } catch (error) {
            setMessageToast('Failed to update number.');
            setShowToast(true);
        }
    };

    const addNumberFunction = async (item: INumberInterface) => {
        try {
            await dispatch(addNumber(item));
            setMessageToast('Number added successfully!');
            setShowToast(true);
        } catch (error) {
            setMessageToast('Failed to add number.');
            setShowToast(true);
        }
    };

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleSubmit = (item: INumberInterface) => {
        addNumberFunction(item);
        handleCloseModal();
    };

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='pb-16'>
            <NavbarComponent />
            <div className="container mx-auto mt-4">
                <h2 className="text-2xl font-semibold mb-4">Phone Numbers for Sale</h2>
                {isLoading ? (
                    <LoadingComponent classname='flex justify-center' />
                ) : error ? (
                    <NoContentComponent />
                ) : (
                    <>
                        <NumberTable
                            numbers={numbers}
                            isLoading={isLoading}
                            error={error}
                            updateNumber={editNumberFunction}
                            deleteNumber={deleteNumberFunction}
                        />
                        <div className='flex justify-center mt-4'>
                            <PaginationComponent
                                currentPage={currentPage}
                                totalPages={pages}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </>
                )}
                <FloatingPlusButton handleShowModal={handleShowModal} />
            </div>
            
            <div className='fixed top-16 right-1 z-50'>
                <ToastComponent setShow={setShowToast} show={showToast} title='Number' message={messageToast}/>
            </div>

            <NumberModalComponent
                show={showModal}
                handleClose={handleCloseModal}
                number={numberDefault}
                updateNumber={handleSubmit}
            />
        </div>
    );
}