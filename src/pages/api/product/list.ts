import type { NextApiRequest, NextApiResponse } from 'next';
import { GetProductListResponse } from '@/@api-client/types/api/product-api.types';
import { Product } from '@/@api-client/types/models/product.types';
import { faker } from '@faker-js/faker';

const STATUS = {
  SUCCESS: 200,
};

const PRODUCTS_COUNT = 12;

const PRODUCTS_MOCK: Product[] = [...Array(PRODUCTS_COUNT)].map(() => ({
  id: faker.datatype.uuid(),
  image: faker.image.business(undefined, undefined, true),
  title: faker.commerce.product(),
  description: faker.commerce.productDescription(),
  price: faker.datatype.number({ min: 200, max: 1000 }),
  rating: faker.datatype.number({ min: 2, max: 5 }),
  created_at: +faker.date.past(),
  updated_at: +faker.date.past(),
}));

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetProductListResponse>
) {
  res.status(STATUS.SUCCESS).json({
    list: PRODUCTS_MOCK,
  });
}
