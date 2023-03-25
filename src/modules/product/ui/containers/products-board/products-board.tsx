import { ChangeEvent, type FC, useCallback, useState } from 'react';
// components
import { ProductGrid } from '@/modules/product/ui/components/products-grid';
import { ProductCard } from '@/modules/product/ui/components/product-card';
import { TextField } from '@/modules/core/ui/components/text-field';
import { Icon } from '@/modules/core/ui/components/icon';
import { Select } from '@/modules/core/ui/components/select';
// containers
import { ColorFilter } from '@/modules/filter/ui/containers/color-filter';
// hooks
import { useProductListQuery } from '@/modules/product/data/hooks/use-product-list-query';
// types
import type { SelectOption } from '@/modules/core/ui/components/select/select.interface';

import styles from './products-board.module.scss';

const SORT_VALUES: SelectOption[] = [
  {
    value: '+price',
    title: 'Price: High to Low',
  },
  {
    value: '-price',
    title: 'Price: Low to High',
  },
  {
    value: '+rating',
    title: 'Popular first',
  },
];

export const ProductsBoard: FC = () => {
  // state
  const [searchQuery, setSearchQuery] = useState('');
  const [sort, setSort] = useState('+rating');
  const [colors, setColors] = useState([]);
  // queries
  const productListQuery = useProductListQuery({
    q: searchQuery,
    colors: colors.join(','),
    sort,
  });

  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h1 className={styles.title}>Shop</h1>
        <div className={styles.tools}>
          <Select value={sort} onChange={setSort} options={SORT_VALUES} />
          <TextField
            value={searchQuery}
            className={styles.search}
            onChange={handleSearchChange}
            startAdornment={<Icon name='search' color='rgba(0, 0, 0, 0.54)' />}
          />
        </div>
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
          <ColorFilter activeColors={colors} onChange={setColors} />
        </div>
      </div>
    </div>
  );
};
