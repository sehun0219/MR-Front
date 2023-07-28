import { useSetRecoilState } from 'recoil';
import { useState } from 'react';
import { cartState } from '../../store/cart';

import { Product } from '../../interfaces/product';
import SelectSize from '../SelectSize';
import Title from '../Title';

import {
  Container,
  ProductImg,
  ProductInfo,
  Description,
  Price,
  AddButton,
} from './style';
import { formatPrice } from '../../util';

interface ProductContentProps {
  product: Product;
}

const ProductContent = ({ product }: ProductContentProps) => {
  const [selectedSize, setSelectedSize] = useState(-1);
  const setCart = useSetRecoilState(cartState);

  const addToCart = () => {
    const selectLabel = product.sizeOptions.find(
      (size) => size.id === selectedSize
    )?.label;
    if (!selectLabel) {
      alert('Please select a size');
      return;
    }

    setCart((oldCart) => {
      return [
        ...oldCart,
        {
          title: product.title,
          imgURL: product.imageURL,
          size: selectLabel,
          price: product.price,
          quantity: 1,
        },
      ];
    });
  };

  return (
    <Container>
      <ProductImg src={product.imageURL} />
      <ProductInfo>
        <Title>{product.title}</Title>
        <Price>${formatPrice(product.price)}</Price>
        <Description>{product.description}</Description>
        <SelectSize
          selectedSize={selectedSize}
          sizeOptions={product.sizeOptions}
          onSelectedSize={setSelectedSize}
        />
        <AddButton
          onClick={() => {
            addToCart();
          }}
        >
          ADD TO CART
        </AddButton>
      </ProductInfo>
    </Container>
  );
};

export default ProductContent;
