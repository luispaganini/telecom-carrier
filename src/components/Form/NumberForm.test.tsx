import { render, fireEvent, screen } from "@testing-library/react";
import NumberForm from "./NumberForm";
import { validateNumberForm } from "../../utils/validation";

jest.mock("../../utils/validation", () => ({
    validateNumberForm: jest.fn(),
  }));

describe("NumberForm", () => {
  it("should submit the form correctly when no validation errors", () => {
    (validateNumberForm as jest.Mock).mockReturnValue({});

    const initialData = {
      id: 1,
      value: "1234567890",
      monthlyPrice: "10.00",
      setupPrice: "5.00",
      currency: "USD",
    };

    const onSubmitMock = jest.fn();

    render(<NumberForm initialData={initialData} onSubmit={onSubmitMock} />);

    fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: "9876543210" } });
    
    fireEvent.click(screen.getByText(/Save Changes/i));

    expect(onSubmitMock).toHaveBeenCalledWith({
      id: 1,
      value: "9876543210",
      monthlyPrice: "10.00",
      setupPrice: "5.00",
      currency: "USD",
    });
  });

  it("should show validation errors when form data is invalid", () => {
    (validateNumberForm as jest.Mock).mockReturnValue({
      value: "Phone Number is required.",
      monthlyPrice: "Monthly Price must be greater than 0.",
      setupPrice: "Setup Price must be greater than 0.",
      currency: "Currency is required.",
    });

    const initialData = {
      id: 1,
      value: "",
      monthlyPrice: "0",
      setupPrice: "0",
      currency: "",
    };

    const onSubmitMock = jest.fn();

    render(<NumberForm initialData={initialData} onSubmit={onSubmitMock} />);

    // Clicar no botão de salvar
    fireEvent.click(screen.getByText(/Save Changes/i));

    // Verificar se as mensagens de erro aparecem
    expect(screen.getByText(/Phone Number is required./i)).toBeInTheDocument();
    expect(screen.getByText(/Monthly Price must be greater than 0./i)).toBeInTheDocument();
    expect(screen.getByText(/Setup Price must be greater than 0./i)).toBeInTheDocument();
    expect(screen.getByText(/Currency is required./i)).toBeInTheDocument();

    // Verificar se a função de submit NÃO foi chamada
    expect(onSubmitMock).not.toHaveBeenCalled();
  });
});
