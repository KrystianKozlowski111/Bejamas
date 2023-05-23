import React from 'react';
import useCartStore from '../../store/useCartStore';
import {
  BestSeller,
  ImageBox,
  Image,
  Name,
  Category,
  BoxContainer,
  Cart,
  Price,
} from './Box.style';

function Box({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const { setCartVisible } = useCartStore();

  const handleAddToCart = () => {
    addToCart(product);
    setCartVisible(true);
  };

  return (
    <BoxContainer>
      <ImageBox>
        <Image src={product.image_src} alt={product.image_alt} />
        {product.bestseller ? <BestSeller>Best Seller</BestSeller> : ''}
        <Cart onClick={handleAddToCart}>ADD TO CART</Cart>
      </ImageBox>
      <Category>{product.category}</Category>
      <Name>{product.name}</Name>

      <Price>
        {product.currency}
        {product.price}
      </Price>
    </BoxContainer>
  );
}

export default Box;
