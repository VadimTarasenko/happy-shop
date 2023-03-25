import { ChangeEvent, type FC, useCallback, useState } from 'react';
// components
import { ProductGrid } from '@/modules/product/ui/components/products-grid';
import { ProductCard } from '@/modules/product/ui/components/product-card';
import { TextField } from '@/modules/core/ui/components/text-field';
import { Icon } from '@/modules/core/ui/components/icon';
// containers
import { PriceFilter } from '@/modules/filter/ui/containers/price-filter';
import { ColorFilter } from '@/modules/filter/ui/containers/color-filter';
// hooks
import { useProductListQuery } from '@/modules/product/data/hooks/use-product-list-query';

import styles from './products-board.module.scss';

export const ProductsBoard: FC = () => {
  // state
  const [searchQuery, setSearchQuery] = useState('');
  // queries
  const productListQuery = useProductListQuery({
    q: searchQuery,
  });

  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.tools}>
        <TextField
          value={searchQuery}
          onChange={handleSearchChange}
          startAdornment={<Icon name='search' color='rgba(0, 0, 0, 0.54)' />}
        />
      </div>
      <div className={styles.content}>
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
    </div>
  );
};
