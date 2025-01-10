import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import HomePage from './HomePage';
import userEvent from '@testing-library/user-event';
import useNumbers from '../hooks/useNumbers';

jest.mock('../hooks/useNumbers', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('HomePage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders page title', () => {
    (useNumbers as jest.Mock).mockReturnValue({
      numbers: [],
      isLoading: false,
      error: null,
      pages: 1,
      currentPage: 1,
      setCurrentPage: jest.fn(),
      addNumber: jest.fn(),
      updateNumber: jest.fn(),
      deleteNumber: jest.fn(),
    });

    render(<HomePage />);

    expect(screen.getByText('Phone Numbers for Sale')).toBeInTheDocument();
  });

  test('displays loading component while loading', () => {
    (useNumbers as jest.Mock).mockReturnValue({
      numbers: [],
      isLoading: true,
      error: null,
      pages: 1,
      currentPage: 1,
      setCurrentPage: jest.fn(),
      addNumber: jest.fn(),
      updateNumber: jest.fn(),
      deleteNumber: jest.fn(),
    });

    render(<HomePage />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('navigates through pages correctly', () => {
    const setCurrentPageMock = jest.fn();
    (useNumbers as jest.Mock).mockReturnValue({
      numbers: [],
      isLoading: false,
      error: null,
      pages: 5,
      currentPage: 1,
      setCurrentPage: setCurrentPageMock,
      addNumber: jest.fn(),
      updateNumber: jest.fn(),
      deleteNumber: jest.fn(),
    });

    render(<HomePage />);

    userEvent.click(screen.getByText('2'));

    expect(setCurrentPageMock).toHaveBeenCalledWith(2);
  });
});
