import { render, screen, fireEvent } from '@testing-library/react';
import FloatingPlusButton from './FloatingPlusButton';

describe('FloatingPlusButton', () => {
    it('renders the button with the correct styles', () => {
        render(<FloatingPlusButton handleShowModal={jest.fn()} />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('fixed bottom-4 right-4 rounded-full w-14 h-14 flex items-center justify-center shadow-lg bg-blue-500 text-white');
    });

    it('renders the Plus icon inside the button', () => {
        render(<FloatingPlusButton handleShowModal={jest.fn()} />);
        const icon = screen.getByTestId('plus-icon');
        expect(icon).toBeInTheDocument();
    });

    it('calls handleShowModal when the button is clicked', () => {
        const mockHandleShowModal = jest.fn();
        render(<FloatingPlusButton handleShowModal={mockHandleShowModal} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(mockHandleShowModal).toHaveBeenCalledTimes(1);
    });
});
