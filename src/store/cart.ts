import { atom, selector } from 'recoil';
import { CartItem } from '../interfaces/cart';

export const cartState = atom<CartItem[]>({
  key: 'cartState',
  default: [],
});

export const cartListState = selector({
  key: 'cartListState',
  get: ({ get }) => {
    const cart = get(cartState);

    const sizeCartList = cart.reduce((acc, cur) => {
      const { size } = cur;
      if (acc[size]) {
        acc[size] = { ...cur, quantity: acc[size].quantity + 1 };
      } else {
        acc[size] = cur;
      }
      return acc;
    }, {} as { [key: string]: CartItem });

    return {
      cartList: Object.values(sizeCartList),
      total: cart.length,
    };
  },
});
