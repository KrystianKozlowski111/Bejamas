import React from 'react';
import useCartStore from '../../store/useCartStore';
import {
  CartItem,
  CartContainer,
  CartBox,
  CartX,
  CartImage,
  CartText,
  CartPrice,
  RemoveAllButton,
  Wrapper,
} from './Cart.style';
import { Divider } from '../Featured/Featured.style';
import Xbutton from '../../Assets/Icons/Xbutton.svg';

function Cart({ onClose }) {
  const { cartItems, clearCart } = useCartStore();

  const handleRemoveAll = () => {
    clearCart();
  };

  return (
    <>
      {cartItems.length === 0 ? (
        ''
      ) : (
        <Wrapper>
          <CartBox>
            <CartX onClick={onClose}>
              <img src={Xbutton} alt="Close" />
            </CartX>

            {cartItems.length === 0 ? (
              ''
            ) : (
              <>
                {cartItems.map((item) => (
                  <React.Fragment key={item.id}>
                    <CartItem>
                      <CartContainer>
                        <CartText>{item.name}</CartText>
                        <CartPrice>
                          {item.currency}
                          {item.price}
                        </CartPrice>
                      </CartContainer>
                      <CartImage src={item.image_src} alt={item.name} />
                    </CartItem>
                    <Divider />
                  </React.Fragment>
                ))}
                <RemoveAllButton onClick={handleRemoveAll}>
                  Clear
                </RemoveAllButton>
              </>
            )}
          </CartBox>
        </Wrapper>
      )}
    </>
  );
}

export default Cart;
