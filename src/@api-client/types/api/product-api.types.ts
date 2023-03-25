import type { Product } from '@/@api-client/types/models/product.types';

export type GetProductListParams = {
  q?: string;
};

export type GetProductListResponse = {
  list: Product[];
};
