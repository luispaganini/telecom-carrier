import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import INumberInterface from "../../interfaces/INumberInterface";

type NumberModalComponentProps = {
  show: boolean;
  handleClose: () => void;
  number: INumberInterface;
  updateNumber: (item: INumberInterface) => void;
};

export default function NumberModalComponent(props: NumberModalComponentProps) {
  const [formData, setFormData] = useState<INumberInterface>(props.number);

  useEffect(() => {
    setFormData(props.number);
  }, [props.number]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.updateNumber(formData);
    props.handleClose();
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Number</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formNumberValue">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="value"
              value={formData.value}
              onChange={handleChange}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMonthlyPrice">
            <Form.Label>Monthly Price</Form.Label>
            <Form.Control
              type="number"
              name="monthlyPrice"
              value={formData.monthlyPrice}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSetupPrice">
            <Form.Label>Setup Price</Form.Label>
            <Form.Control
              type="number"
              name="setupPrice"
              value={formData.setupPrice}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCurrency">
            <Form.Label>Currency</Form.Label>
            <Form.Control
              type="text"
              name="currency"
              value={formData.currency}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}