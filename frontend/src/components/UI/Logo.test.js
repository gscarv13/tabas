import { render, screen } from '@testing-library/react';
import Logo from './Logo';

test('should render <Logo />', () => {
  render(<Logo />);
  
  const component = screen.getByTestId('logo-svg');
  expect(component).toBeInTheDocument();
});
