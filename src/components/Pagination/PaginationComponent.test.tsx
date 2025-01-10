import { render, screen, fireEvent } from '@testing-library/react';
import { PaginationComponent } from './PaginationComponent';

describe('PaginationComponent', () => {
  const mockOnPageChange = jest.fn();

  it('should render the correct number of pages', () => {
    render(
      <PaginationComponent
        currentPage={1}
        totalPages={10}
        onPageChange={mockOnPageChange}
      />
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('should call onPageChange when a page number is clicked', () => {
    render(
      <PaginationComponent
        currentPage={1}
        totalPages={10}
        onPageChange={mockOnPageChange}
      />
    );

    fireEvent.click(screen.getByText('3'));

    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });

  it('should render the correct range of pages when in the middle of the range', () => {
    render(
      <PaginationComponent
        currentPage={6}
        totalPages={10}
        onPageChange={mockOnPageChange}
      />
    );

    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();
    expect(screen.getByText('8')).toBeInTheDocument();
  });

  it('should render the "First" and "Last" buttons and navigate correctly', () => {
    render(
      <PaginationComponent
        currentPage={5}
        totalPages={10}
        onPageChange={mockOnPageChange}
      />
    );

    fireEvent.click(screen.getByText('«'));
    expect(mockOnPageChange).toHaveBeenCalledWith(1);

    fireEvent.click(screen.getByText('»'));
    expect(mockOnPageChange).toHaveBeenCalledWith(10);
  });

  it('should not call onPageChange if the same page is clicked', () => {
    render(
      <PaginationComponent
        currentPage={5}
        totalPages={10}
        onPageChange={mockOnPageChange}
      />
    );

    fireEvent.click(screen.getByText('5'));

    expect(mockOnPageChange).not.toHaveBeenCalled();
  });
});
