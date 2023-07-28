import { CartItem as ICartItem } from '../../interfaces/cart';
import {
  Container,
  Product13Bold,
  ProductImg,
  ProductInfo,
  ProductName,
} from './styles';
import { formatPrice } from '../../util';

const CartItem = ({ title, imgURL, price, size, quantity }: ICartItem) => {
  return (
    <Container>
      <ProductImg src={imgURL} alt={title} />
      <ProductInfo>
        <ProductName>{title}</ProductName>
        <Product13Bold>
          {quantity} x ${formatPrice(price)}
        </Product13Bold>
        <Product13Bold>Size: {size}</Product13Bold>
      </ProductInfo>
    </Container>
  );
};

export default CartItem;
