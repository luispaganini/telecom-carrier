import React, { useState, useEffect } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import INumberInterface from "../../interfaces/INumberInterface";
import { validateNumberForm } from "../../utils/validation";

type NumberFormProps = {
  initialData: INumberInterface;
  onSubmit: (data: INumberInterface) => void;
};

export default function NumberForm({ initialData, onSubmit }: NumberFormProps) {
  const [formData, setFormData] = useState<INumberInterface>(initialData);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    setFormData(initialData);
    setErrors({});
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (value.trim()) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateNumberForm(formData);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formNumberValue" className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          name="value"
          value={formData.value}
          onChange={handleChange}
          isInvalid={!!errors.value}
        />
        <Form.Control.Feedback type="invalid">{errors.value}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formMonthlyPrice" className="mb-3">
        <Form.Label>Monthly Price</Form.Label>
        <Form.Control
          type="number"
          name="monthlyPrice"
          value={formData.monthlyPrice}
          onChange={handleChange}
          isInvalid={!!errors.monthlyPrice}
        />
        <Form.Control.Feedback type="invalid">{errors.monthlyPrice}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formSetupPrice" className="mb-3">
        <Form.Label>Setup Price</Form.Label>
        <Form.Control
          type="number"
          name="setupPrice"
          value={formData.setupPrice}
          onChange={handleChange}
          isInvalid={!!errors.setupPrice}
        />
        <Form.Control.Feedback type="invalid">{errors.setupPrice}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formCurrency" className="mb-3">
        <Form.Label>Currency</Form.Label>
        <Form.Control
          type="text"
          name="currency"
          value={formData.currency}
          onChange={handleChange}
          isInvalid={!!errors.currency}
        />
        <Form.Control.Feedback type="invalid">{errors.currency}</Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" variant="primary">
        Save Changes
      </Button>
    </Form>
  );
}
