import React from 'react';
import { render, screen } from '@testing-library/react';
import Box from './index.js';

const mockProduct = {
  id: 1,
  image_src: 'image-url',
  image_alt: 'Product Image',
  bestseller: true,
  category: 'Bestseller Category',
  name: 'Bestseller Product',
  currency: '$',
  price: 9.99,
};

describe('Box', () => {
  test('renders product details correctly', () => {
    render(<Box product={mockProduct} />);

    expect(screen.getByText('Best Seller')).toBeInTheDocument();
    expect(screen.getByAltText('Product Image')).toBeInTheDocument();
    expect(screen.getByText('Bestseller Category')).toBeInTheDocument();
    expect(screen.getByText('Bestseller Product')).toBeInTheDocument();
    expect(screen.getByText('$9.99')).toBeInTheDocument();
  });
});
