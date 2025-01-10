import { render, screen, fireEvent } from '@testing-library/react';
import NumberRow from './NumberRow';

const mockOnEdit = jest.fn();
const mockOnDelete = jest.fn();

const mockNumber = {
  id: 1,
  value: '1234567890',
  monthlyPrice: '10.00',
  setupPrice: '5.00',
  currency: 'USD',
};

describe('NumberRow', () => {
  it('should render the number row with correct values', () => {
    render(
      <table>
        <tbody>
          <NumberRow
            number={mockNumber}
            onDelete={mockOnDelete}
            onEdit={mockOnEdit}
          />
        </tbody>
      </table>
    );

    expect(screen.getByText(mockNumber.id)).toBeInTheDocument();
    expect(screen.getByText(mockNumber.value)).toBeInTheDocument();
    expect(screen.getByText(mockNumber.monthlyPrice)).toBeInTheDocument();
    expect(screen.getByText(mockNumber.setupPrice)).toBeInTheDocument();
    expect(screen.getByText(mockNumber.currency)).toBeInTheDocument();
  });

  it('should call onEdit when the edit icon is clicked', () => {
    render(
      <table>
        <tbody>
          <NumberRow
            number={mockNumber}
            onDelete={mockOnDelete}
            onEdit={mockOnEdit}
          />
        </tbody>
      </table>
    );

    const editIcon = screen.getByTitle('Edit');
    fireEvent.click(editIcon);

    expect(mockOnEdit).toHaveBeenCalledWith(mockNumber);
  });

  it('should call onDelete when the delete icon is clicked', () => {
    render(
      <table>
        <tbody>
          <NumberRow
            number={mockNumber}
            onDelete={mockOnDelete}
            onEdit={mockOnEdit}
          />
        </tbody>
      </table>
    );

    const deleteIcon = screen.getByTitle('Delete');
    fireEvent.click(deleteIcon);

    expect(mockOnDelete).toHaveBeenCalledWith(mockNumber.id);
  });

  it('should render the edit and delete icons with correct titles', () => {
    render(
      <table>
        <tbody>
          <NumberRow
            number={mockNumber}
            onDelete={mockOnDelete}
            onEdit={mockOnEdit}
          />
        </tbody>
      </table>
    );

    const editIcon = screen.getByTitle('Edit');
    const deleteIcon = screen.getByTitle('Delete');

    expect(editIcon).toBeInTheDocument();
    expect(deleteIcon).toBeInTheDocument();
  });
});
