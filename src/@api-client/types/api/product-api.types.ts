import type { Product } from '@/@api-client/types/models/product.types';

export type GetProductListParams = {};

export type GetProductListResponse = {
  list: Product[];
};
