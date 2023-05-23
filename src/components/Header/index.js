import React from 'react';
import { HeaderContainer, Counter, TopHeader, Button } from './Header.style';
import Bejamas from '../../Assets/Icons/Bejamas.svg';
import CartIcon from '../../Assets/Icons/Cart.svg';
import Cart from '../Cart';
import useCartStore from '../../store/useCartStore';

function Header() {
  const { cartVisible, setCartVisible, cartItems } = useCartStore();

  const handleToggleCart = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <HeaderContainer>
      <TopHeader>
        <img src={Bejamas} alt="Bejamas" />
        <Button onClick={handleToggleCart}>
          <img src={CartIcon} alt="CartIcon" />
          {cartItems.length > 0 && <Counter>{cartItems.length}</Counter>}
        </Button>
      </TopHeader>
      {cartVisible && <Cart onClose={handleToggleCart} />}
    </HeaderContainer>
  );
}

export default Header;
