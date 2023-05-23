import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { gql } from '@apollo/client';
import Featured from './index';

const mockFeaturedData = {
  products: [
    {
      id: 1,
      size: 100,
      width: 100,
      price: 10,
      name: 'Featured Product',
      image_src: 'image-url',
      image_alt: 'Product Image',
      height: 200,
      details: 'Product details',
      currency: '$',
      category: 'Featured Category',
    },
  ],
};

const mockRecommendationsData = {
  recommendations: [
    {
      src: 'recommendation-image-url-1',
      alt: 'Recommendation Image 1',
    },
    {
      src: 'recommendation-image-url-2',
      alt: 'Recommendation Image 2',
    },
  ],
};

const GET_FEATURED_PRODUCT = gql`
  query MyQuery {
    products(where: { featured: { _eq: true } }) {
      id
      size
      width
      price
      name
      image_src
      image_alt
      height
      details
      currency
      category
    }
  }
`;

const GET_RECOMMENDATIONS = gql`
  query GetRecommendations($productId: Int!) {
    recommendations(where: { product_id: { _eq: $productId } }) {
      src
      alt
    }
  }
`;

const mocks = [
  {
    request: {
      query: GET_FEATURED_PRODUCT,
    },
    result: {
      data: mockFeaturedData,
    },
  },
  {
    request: {
      query: GET_RECOMMENDATIONS,
      variables: { productId: 1 },
    },
    result: {
      data: mockRecommendationsData,
    },
  },
];

describe('Featured', () => {
  test('renders featured product and recommendations correctly', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Featured />
      </MockedProvider>
    );

    await screen.findByText('Featured Product');
    expect(screen.getByText('Featured Product')).toBeInTheDocument();
    expect(screen.getByAltText('Product Image')).toBeInTheDocument();
    expect(screen.getByText('People also buy')).toBeInTheDocument();
    expect(screen.getByAltText('Recommendation Image 1')).toBeInTheDocument();
    expect(screen.getByAltText('Recommendation Image 2')).toBeInTheDocument();
  });
});
