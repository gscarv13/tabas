import { render, screen } from '@testing-library/react';
import Header from './Header';

test('should render main header text', () => {
  render(<Header />);
  const heroMainText = screen.getByText(/Seu apartamento mobiliado pronto para morar/i);
  expect(heroMainText).toBeInTheDocument();
});

test('should render secondary header text', () => {
  render(<Header />);
  const heroSubText = screen.getByText(/Apartamentos completos em São Paulo, Rio de Janeiro e Brasília desenhados para você se sentir em casa/i);
  expect(heroSubText).toBeInTheDocument();
});

