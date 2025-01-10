import { render, screen, fireEvent } from '@testing-library/react';
import { ToastComponent } from './ToastComponent';

jest.useFakeTimers();

describe('ToastComponent', () => {
  
  test('should render Toast when show is true', () => {
    render(<ToastComponent show={true} setShow={jest.fn()} title="Test Title" message="Test Message" />);
    
    const toastElement = screen.getByText('Test Message');
    expect(toastElement).toBeInTheDocument();
  });

  test('should not render Toast when show is false', () => {
    render(<ToastComponent show={false} setShow={jest.fn()} title="Test Title" message="Test Message" />);
    
    const toastElement = screen.queryByText('Test Message');
    expect(toastElement).not.toBeInTheDocument();
  });

  test('should call setShow when close button is clicked', () => {
    const mockSetShow = jest.fn();
    render(<ToastComponent show={true} setShow={mockSetShow} title="Test Title" message="Test Message" />);
    
    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);

    expect(mockSetShow).toHaveBeenCalledWith(false);
  });

  test('should hide Toast after 3 seconds', () => {
    const mockSetShow = jest.fn();
    render(<ToastComponent show={true} setShow={mockSetShow} title="Test Title" message="Test Message" />);
    
    jest.advanceTimersByTime(3000);

    expect(mockSetShow).toHaveBeenCalledWith(false);
  });

});

