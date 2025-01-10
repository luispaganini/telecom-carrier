import { render, fireEvent, screen } from "@testing-library/react";
import NumberModalComponent from "./NumberModalComponent";
import INumberInterface from "../../interfaces/INumberInterface";
jest.mock("../../utils/validation", () => ({
  validateNumberForm: jest.fn(),
}));

describe("NumberModalComponent", () => {
  const mockUpdateNumber = jest.fn();
  const mockHandleClose = jest.fn();

  const initialData: INumberInterface = {
    id: 1,
    value: "1234567890",
    monthlyPrice: "10.00",
    setupPrice: "5.00",
    currency: "USD",
  };

  it("should render the modal when show is true", () => {
    render(
      <NumberModalComponent
        show={true}
        handleClose={mockHandleClose}
        number={initialData}
        updateNumber={mockUpdateNumber}
      />
    );

    expect(screen.getByLabelText(/Phone Number/i)).toHaveValue("1234567890");
    expect(screen.getByLabelText(/Monthly Price/i)).toHaveValue(10);
  });

  it("should close the modal when handleClose is called", () => {
    render(
      <NumberModalComponent
        show={true}
        handleClose={mockHandleClose}
        number={initialData}
        updateNumber={mockUpdateNumber}
      />
    );

    fireEvent.click(screen.getByLabelText(/Close/i));

    expect(mockHandleClose).toHaveBeenCalled();
  });
});
