import qs from 'qs';
import {
  GetProductListParams,
  GetProductListResponse,
} from '@/@api-client/types/api/product-api.types';

type Method = 'POST' | 'GET' | 'PUT';

const makeEndpoint = <P = unknown, R = unknown>(
  method: Method,
  url: string | ((params: P) => string),
  // eslint-disable-next-line no-undef
  fetchParams?: Omit<RequestInit, 'method'>
): ((params: P) => Promise<R>) => {
  return (params: P) => {
    const _url = typeof url === 'string' ? url : url(params);
    const _params = params ? qs.stringify(params) : '';

    return fetch(`${_url}?${_params}`, {
      method,
      ...fetchParams,
    }).then((res) => res.json());
  };
};

export const api = {
  product: {
    list: makeEndpoint<GetProductListParams, GetProductListResponse>(
      'GET',
      '/api/product/list'
    ),
  },
};
