import { render, screen } from '@testing-library/react';
import PropertyItem from './PropertyItem';

test('renders property item with all props', () => {
  const propertyItemProps = {
    id: 1,
    name: "Ido",
    address: "40676 Eric Street, Wardtown",
    cover: "path/to/cover/1",
    description: "Illo fugit voluptatem. Qui laudantium qui.",
    monthly_rate: 24410.96,
    pictures: [{id: 1, url: '/path/to/image1'}, {id: 2, url: '/path/to/image2'}, {id: 3, url: '/path/to/image3'}]
  }

  render(<PropertyItem {...propertyItemProps} />)

  const propertyName = screen.getByText(propertyItemProps.name)
  const propertyDescription = screen.getByText(propertyItemProps.description)
  
  expect(propertyName).toBeInTheDocument();
  expect(propertyDescription).toBeInTheDocument();
});
