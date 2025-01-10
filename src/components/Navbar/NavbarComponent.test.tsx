import { render, screen } from '@testing-library/react';
import NavbarComponent from './NavbarComponent';

describe('NavbarComponent', () => {
  it('should render the navbar with the correct brand text', () => {
    render(<NavbarComponent />);
    
    expect(screen.getByText('Telecom Carrier')).toBeInTheDocument();
  });

  it('should render the navbar with the TelephoneForwardFill icon', () => {
    render(<NavbarComponent />);
    
    const icon = screen.getByTestId('telephone-forward-fill');
    expect(icon).toBeInTheDocument();
  });

  it('should have the correct structure', () => {
    render(<NavbarComponent />);
    
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '#home');
  });
});
