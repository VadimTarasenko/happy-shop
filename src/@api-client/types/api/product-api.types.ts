import type { Product } from '@/@api-client/types/models/product.types';

export type GetProductListParams = {
  q?: string;
  sort?: string;
  colors?: string;
};

export type GetProductListResponse = {
  list: Product[];
};
