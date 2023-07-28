import { useRecoilValue } from 'recoil';

import { cartListState } from '../../store/cart';
import { CartList, CartText, Container } from './styles';
import CartItem from '../CartItem';
import { useState } from 'react';

const Header = () => {
  const { cartList, total } = useRecoilValue(cartListState);
  const [isViewCart, setIsViewCart] = useState(false);
  return (
    <Container>
      <CartText
        isViewCart={isViewCart}
        onClick={() => {
          if (total > 0) setIsViewCart(!isViewCart);
        }}
      >
        My Cart ({total})
      </CartText>
      {isViewCart && (
        <CartList>
          {cartList.map((item) => (
            <CartItem {...item} />
          ))}
        </CartList>
      )}
    </Container>
  );
};

export default Header;
