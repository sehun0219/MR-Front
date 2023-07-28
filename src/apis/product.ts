import http from './http';

import { Product } from '../interfaces/product';

export const getLiveProduct = async () => {
  try {
    const response = await http.get<Product>('/live/product');
    return response.data;
  } catch (e) {
    return null;
  }
};
