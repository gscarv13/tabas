import { render, screen } from '@testing-library/react';
import PropertyList from './PropertyList';

test('should render <PropertyList /> main text', () => {
  render(<PropertyList />);
  const mainText = screen.getByText(/Tenha a experiencia/i);

  expect(mainText).toBeInTheDocument();
});

test('should display all fetched properties', async () => {
  render(<PropertyList />);

  const propertiesList = await screen.findAllByTestId('property-card');
  expect(propertiesList.length).toBe(2);
});