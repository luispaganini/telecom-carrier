import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NumberTable from './NumberTable';

const mockUpdateNumber = jest.fn();
const mockDeleteNumber = jest.fn();
const mockNumbers = [
  {
    id: 1,
    value: '1234567890',
    monthlyPrice: '10.00',
    setupPrice: '5.00',
    currency: 'USD',
  },
  {
    id: 2,
    value: '0987654321',
    monthlyPrice: '15.00',
    setupPrice: '7.00',
    currency: 'EUR',
  },
];

describe('NumberTable', () => {
  it('should render the loading component when isLoading is true', () => {
    render(
      <NumberTable
        numbers={[]}
        isLoading={true}
        error={null}
        updateNumber={mockUpdateNumber}
        deleteNumber={mockDeleteNumber}
      />
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render the NoContentComponent when error is provided', () => {
    render(
      <NumberTable
        numbers={[]}
        isLoading={false}
        error="Something went wrong"
        updateNumber={mockUpdateNumber}
        deleteNumber={mockDeleteNumber}
      />
    );

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  it('should render the table rows when numbers are provided', () => {
    render(
      <NumberTable
        numbers={mockNumbers}
        isLoading={false}
        error={null}
        updateNumber={mockUpdateNumber}
        deleteNumber={mockDeleteNumber}
      />
    );

    expect(screen.getByText('1234567890')).toBeInTheDocument();
    expect(screen.getByText('0987654321')).toBeInTheDocument();
    expect(screen.getByText('10.00')).toBeInTheDocument();
    expect(screen.getByText('5.00')).toBeInTheDocument();
    expect(screen.getByText('USD')).toBeInTheDocument();
    expect(screen.getByText('EUR')).toBeInTheDocument();
  });

  it('should open the edit modal when the edit icon is clicked', async () => {
    render(
      <NumberTable
        numbers={mockNumbers}
        isLoading={false}
        error={null}
        updateNumber={mockUpdateNumber}
        deleteNumber={mockDeleteNumber}
      />
    );

    const editIcon = screen.getAllByTitle('Edit')[0];
    fireEvent.click(editIcon);

    await waitFor(() => {
      expect(screen.getByText('Number')).toBeInTheDocument();
    });
  });

  it('should call deleteNumber when the delete icon is clicked', () => {
    render(
      <NumberTable
        numbers={mockNumbers}
        isLoading={false}
        error={null}
        updateNumber={mockUpdateNumber}
        deleteNumber={mockDeleteNumber}
      />
    );

    const deleteIcon = screen.getAllByTitle('Delete')[0];
    fireEvent.click(deleteIcon);

    expect(mockDeleteNumber).toHaveBeenCalledWith(1);
  });

  it('should not render the modal if editModalOpen is false', () => {
    render(
      <NumberTable
        numbers={mockNumbers}
        isLoading={false}
        error={null}
        updateNumber={mockUpdateNumber}
        deleteNumber={mockDeleteNumber}
      />
    );

    const modal = screen.queryByText('Edit Number');
    expect(modal).toBeNull();
  });

  it('should render the modal when editModalOpen is true', async () => {
    render(
      <NumberTable
        numbers={mockNumbers}
        isLoading={false}
        error={null}
        updateNumber={mockUpdateNumber}
        deleteNumber={mockDeleteNumber}
      />
    );

    const editIcon = screen.getAllByTitle('Edit')[0];
    fireEvent.click(editIcon);

    await waitFor(() => {
      expect(screen.getByText('Number')).toBeInTheDocument();
    });
  });
});
