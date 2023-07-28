import { useEffect, useState } from 'react';
import { getLiveProduct } from '../apis/product';
import { Product } from '../interfaces/product';
import Header from '../components/Header';

import { MainLayout } from './styles';
import ProductContent from '../components/ProductContent';

const Main = () => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    getLiveProduct()
      .then((res) => {
        setProduct(res);
      })
      .catch(() => {
        setProduct(null);
      });
  }, []);

  return (
    <MainLayout>
      <Header />
      {product?.id && <ProductContent product={product} />}
    </MainLayout>
  );
};

export default Main;
