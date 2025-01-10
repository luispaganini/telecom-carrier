import { useState } from 'react';
import NavbarComponent from '../components/Navbar/NavbarComponent';
import NumberTable from '../components/NumberTable/NumberTable';
import FloatingPlusButton from '../components/Floating/FloatingPlusButton';
import NumberModalComponent from '../components/Modals/NumberModalComponent';
import LoadingComponent from '../components/Loading/LoadingComponent';
import NoContentComponent from '../components/NoContent/NoContentComponent';
import { PaginationComponent } from '../components/Pagination/PaginationComponent';
import { ToastComponent } from '../components/Toast/ToastComponent';
import useNumbers from '../hooks/useNumbers';
import INumberInterface from '../interfaces/INumberInterface';

export default function HomePage() {
    const {
        numbers,
        isLoading,
        error,
        pages,
        currentPage,
        setCurrentPage,
        addNumber,
        updateNumber,
        deleteNumber,
    } = useNumbers();

    const [showModal, setShowModal] = useState(false);
    const [toastData, setToastData] = useState({ show: false, message: '', title: '' });

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const showToast = (success: boolean, message: string, title: string) => {
        setToastData({
            show: true,
            message: message,
            title: success ? title : 'Error',
        });
    };

    const handleSubmit = async (item: INumberInterface) => {
        const result = await addNumber(item);
        showToast(result.success, result.message, 'Number Added');
        handleCloseModal();
    };

    const handleUpdateNumber = async (item: INumberInterface) => {
        const result = await updateNumber(item);
        showToast(result.success, result.message, 'Number Updated');
    };

    const handleDeleteNumber = async (id: number) => {
        const result = await deleteNumber(id);
        showToast(result.success, result.message, 'Number Deleted');
    };

    const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="pb-16">
            <NavbarComponent />
            <div className="container mx-auto mt-4">
                <h2 className="text-2xl font-semibold mb-4">Phone Numbers for Sale</h2>
                {isLoading ? (
                    <LoadingComponent classname="flex justify-center" />
                ) : error ? (
                    <NoContentComponent />
                ) : (
                    <>
                        <NumberTable
                            numbers={numbers}
                            updateNumber={handleUpdateNumber}
                            deleteNumber={handleDeleteNumber}
                            isLoading={isLoading}
                            error={error}
                        />
                        <div className="flex justify-center mt-4">
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

            <div className="fixed top-16 right-1 z-50">
                <ToastComponent
                    show={toastData.show}
                    title={toastData.title}
                    message={toastData.message}
                    setShow={(show) => setToastData((prev) => ({ ...prev, show }))}
                />
            </div>

            <NumberModalComponent
                show={showModal}
                handleClose={handleCloseModal}
                number={{ id: 0, value: '', monthlyPrice: '0', setupPrice: '0', currency: '' }}
                updateNumber={handleSubmit}
            />
        </div>
    );
}
