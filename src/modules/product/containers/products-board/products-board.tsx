import { ChangeEvent, type FC, useCallback, useState } from 'react';
// components
import { ProductGrid } from '@/modules/product/components/products-grid';
import { ProductCard } from '@/modules/product/components/product-card';
import { TextField } from '@/modules/core/components/text-field';
import { Icon } from '@/modules/core/components/icon';
import { Select } from '@/modules/core/components/select';
import { Placeholder } from '@/modules/core/components/placeholder';
import { PriceFilter } from '@/modules/filter/containers/price-filter';
import { ProductListEmptyView } from '@/modules/product/components/product-list-empty-view';
import { ProductBoardSkeleton } from '@/modules/product/components/product-board-skeleton';
// containers
import { ColorFilter } from '@/modules/filter/containers/color-filter';
// hooks
import { useProductListQuery } from '@/modules/product/hooks/use-product-list-query';
// constants
import { PRODUCT_SORT_OPTIONS } from '@/modules/product/constants/product-sort.constants';

import styles from './products-board.module.scss';

const MAX_PRICE = 1000;

export const ProductsBoard: FC = () => {
  // state
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('+rating');
  const [colors, setColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[min: number, max: number]>([
    // todo: update default range based on existing data
    0,
    MAX_PRICE,
  ]);
  // queries
  const productListQuery = useProductListQuery({
    q: search,
    colors: colors.join(','),
    minPrice: priceRange[0],
    maxPrice: priceRange[1],
    sort,
  });

  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h1 className={styles.title}>Shop</h1>
        <div className={styles.tools}>
          <Select
            value={sort}
            onChange={setSort}
            options={PRODUCT_SORT_OPTIONS}
          />
          <TextField
            value={search}
            className={styles.search}
            onChange={handleSearchChange}
            startAdornment={<Icon name='search' color='rgba(0, 0, 0, 0.54)' />}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.products}>
          <Placeholder
            isActive={productListQuery.data?.list.length === 0}
            placeholder={<ProductListEmptyView />}
          >
            <Placeholder
              isActive={productListQuery.isLoading}
              placeholder={<ProductBoardSkeleton />}
            >
              <ProductGrid>
                {productListQuery.data?.list.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </ProductGrid>
            </Placeholder>
          </Placeholder>
        </div>
        <div className={styles.filters}>
          <PriceFilter onChange={setPriceRange} />
          <ColorFilter activeColors={colors} onChange={setColors} />
        </div>
      </div>
    </div>
  );
};
