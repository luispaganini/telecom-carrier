import { Modal } from "react-bootstrap";
import INumberInterface from "../../interfaces/INumberInterface";
import NumberForm from "../Form/NumberForm";

type NumberModalComponentProps = {
  show: boolean;
  handleClose: () => void;
  number: INumberInterface;
  updateNumber: (item: INumberInterface) => void;
};

export default function NumberModalComponent({
  show,
  handleClose,
  number,
  updateNumber,
}: NumberModalComponentProps) {
  const handleSubmit = (data: INumberInterface) => {
    updateNumber(data);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Number</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NumberForm initialData={number} onSubmit={handleSubmit} />
      </Modal.Body>
    </Modal>
  );
}
