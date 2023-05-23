import React from 'react';
import { useQuery, gql } from '@apollo/client';
import {
  ProductContainer,
  ProductTitle,
  Button,
  ImageBox,
  BottomContainer,
  LeftContainer,
  RightContainer,
  TopBar,
  ImageList,
  ImageItem,
  Category,
  Details,
  ImageItemSmall,
  SizeContainer,
  Divider,
  Description,
  Name,
  PhotoText,
  SizeInfo,
} from './Featured.style';
import useCartStore from '../../store/useCartStore';
import useWindowSize from '../../hooks/useWindowSize';

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
function Featured() {
  const { loading, error, data } = useQuery(GET_FEATURED_PRODUCT);
  const {
    loading: recLoading,
    error: recError,
    data: recData,
  } = useQuery(GET_RECOMMENDATIONS, {
    variables: { productId: data?.products[0]?.id },
    skip: !data,
  });
  const { width: windowWidth } = useWindowSize();

  const addToCart = useCartStore((state) => state.addToCart);
  const { setCartVisible } = useCartStore();

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const product = data.products[0];

  const handleAddToCart = () => {
    addToCart(product);
    setCartVisible(true);
  };

  return (
    <ProductContainer>
      <Divider />
      <TopBar>
        <ProductTitle>{product.name}</ProductTitle>
        {windowWidth < 767 ? (
          ''
        ) : (
          <Button onClick={handleAddToCart}>Add to cart</Button>
        )}
      </TopBar>
      <ImageBox>
        <ImageItem src={product.image_src} alt={product.image_alt} />
        <PhotoText>Photo of the day</PhotoText>
      </ImageBox>
      <BottomContainer>
        <LeftContainer>
          {windowWidth < 767 ? (
            <Button onClick={handleAddToCart}>Add to cart</Button>
          ) : (
            ''
          )}
          <Name>About the {product.name}</Name>
          <Category>{product.category}</Category>
          <Description>{product.details}</Description>
        </LeftContainer>
        <RightContainer>
          <Details>People also buy</Details>
          <ImageList>
            {recData &&
              recData.recommendations &&
              recData.recommendations.map((rec, index) => (
                <ImageItemSmall key={index} src={rec.src} alt={rec.alt} />
              ))}
          </ImageList>
          <Details>Details</Details>
          <SizeContainer>
            <SizeInfo>
              Size: {product.height} x {product.width} pixels
            </SizeInfo>
            <SizeInfo>Size: {product.size} mb</SizeInfo>
          </SizeContainer>
        </RightContainer>
      </BottomContainer>
      <Divider />
    </ProductContainer>
  );
}

export default Featured;
