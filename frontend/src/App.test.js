import { render, screen } from '@testing-library/react';
import App from './App';

test('should render <Header />', () => {
  render(<App />);
  const heroText = screen.getByText(/Seu apartamento mobiliado pronto para morar/i);
  expect(heroText).toBeInTheDocument();
});

test('should render <Property List/>', async () => {
  render(<App />);
  const propertiesList = await screen.findByText(/Tenha a experiencia/i);
  expect(propertiesList).toBeInTheDocument();
});
