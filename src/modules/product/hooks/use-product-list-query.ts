import { useQuery, UseQueryOptions } from '@tanstack/react-query';
// api
import { api } from '@/@api-client';
import {
  GetProductListParams,
  GetProductListResponse,
} from '@/@api-client/types/api/product-api.types';

const PRODUCT_LIST_CACHE_KEY = 'PRODUCT_LIST';

export const useProductListQuery = (
  params: GetProductListParams,
  options?: Omit<
    UseQueryOptions<GetProductListResponse, Error, GetProductListResponse>,
    'queryKey' | 'queryFn'
  >
) => {
  return useQuery<GetProductListResponse, Error, GetProductListResponse>({
    queryKey: [PRODUCT_LIST_CACHE_KEY, params],
    queryFn: () => api.product.list(params),
    ...options,
  });
};
