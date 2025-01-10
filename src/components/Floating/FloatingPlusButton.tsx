import { Plus } from 'react-bootstrap-icons';

type FloatingPlusButtonProps = {
    handleShowModal: () => void;
};

export default function FloatingPlusButton(props: FloatingPlusButtonProps) {
    return (
        <button
            className="fixed bottom-4 right-4 rounded-full w-14 h-14 flex items-center justify-center shadow-lg bg-blue-500 text-white"
            onClick={props.handleShowModal}
        >
            <Plus size={28} className="m-auto" />
        </button>
    );
}
