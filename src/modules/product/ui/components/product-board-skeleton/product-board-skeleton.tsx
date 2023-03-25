import { FC } from 'react';
// components
import { ProductGrid } from '@/modules/product/ui/components/products-grid';
import { ProductCardSkeleton } from '@/modules/product/ui/components/product-card-skeleton';

export const ProductBoardSkeleton: FC = () => {
  return (
    <ProductGrid>
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
    </ProductGrid>
  );
};
