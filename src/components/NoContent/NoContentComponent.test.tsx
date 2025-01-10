import { render, screen } from '@testing-library/react';
import NoContentComponent from './NoContentComponent';

describe('NoContentComponent', () => {
  it('should render the default message when no message is provided', () => {
    render(<NoContentComponent />);
    
    expect(screen.getByText('Data not found')).toBeInTheDocument();
  });

  it('should render the provided message when message prop is passed', () => {
    const customMessage = "No data available";
    render(<NoContentComponent message={customMessage} />);
    
    expect(screen.getByText(customMessage)).toBeInTheDocument();
  });

  it('should apply the correct className if provided', () => {
    const customClass = 'my-custom-class';
    render(<NoContentComponent classname={customClass} />);
    
    expect(screen.getByRole('alert')).toHaveClass(customClass);
  });

  it('should have the "alert" and "alert-danger" classes by default', () => {
    render(<NoContentComponent />);
    
    expect(screen.getByRole('alert')).toHaveClass('alert');
    expect(screen.getByRole('alert')).toHaveClass('alert-danger');
  });
});
