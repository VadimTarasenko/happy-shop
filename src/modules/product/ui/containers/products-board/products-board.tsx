import { type FC } from 'react';
// components
import { ProductGrid } from '@/modules/product/ui/components/products-grid';
import { ProductCard } from '@/modules/product/ui/components/product-card';
// containers
import { PriceFilter } from '@/modules/filter/ui/containers/price-filter';
import { ColorFilter } from '@/modules/filter/ui/containers/color-filter';

import styles from './products-board.module.scss';
import { useProductListQuery } from '@/modules/product/data/hooks/use-product-list-query';

export const ProductsBoard: FC = () => {
  const productListQuery = useProductListQuery({});

  return (
    <div className={styles.root}>
      <div className={styles.products}>
        <ProductGrid>
          {productListQuery.data?.list.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </ProductGrid>
      </div>
      <div className={styles.filters}>
        <PriceFilter />
        <ColorFilter />
      </div>
    </div>
  );
};
