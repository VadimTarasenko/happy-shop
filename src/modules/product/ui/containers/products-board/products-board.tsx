import { type FC } from 'react';
// components
import { ProductGrid } from '@/modules/product/ui/components/products-grid';
import { ProductCard } from '@/modules/product/ui/components/product-card';
// containers
import { PriceFilter } from '@/modules/filter/ui/containers/price-filter';
import { ColorFilter } from '@/modules/filter/ui/containers/color-filter';

import styles from './products-board.module.scss';

export const ProductsBoard: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.filters}>
        <PriceFilter />
        <ColorFilter />
      </div>
      <div className={styles.products}>
        <div className={styles.products_info}>
          <h1 className={styles.products_title}>Shop</h1>
        </div>
        <ProductGrid>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductGrid>
      </div>
    </div>
  );
};
