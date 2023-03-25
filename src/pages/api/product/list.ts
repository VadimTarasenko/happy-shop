import type { NextApiRequest, NextApiResponse } from 'next';
import { faker } from '@faker-js/faker';
// constants
import { colors } from '@/modules/product/data/constants/product-color.constants';
// types
import type { GetProductListResponse } from '@/@api-client/types/api/product-api.types';
import type { Product } from '@/@api-client/types/models/product.types';

const STATUS = {
  SUCCESS: 200,
};

const PRODUCTS_COUNT = 12;

const PRODUCTS_MOCK: Product[] = [...Array(PRODUCTS_COUNT)].map(() => ({
  id: faker.datatype.uuid(),
  image: faker.image.abstract(undefined, undefined, true),
  title: faker.commerce.product(),
  description: faker.commerce.productDescription(),
  price: faker.datatype.number({ min: 200, max: 1000 }),
  rating: faker.datatype.number({ min: 2, max: 5 }),
  color: colors[faker.datatype.number({ min: 0, max: colors.length - 1 })].key,
  created_at: +faker.date.past(),
  updated_at: +faker.date.past(),
}));

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetProductListResponse>
) {
  let list = PRODUCTS_MOCK;

  if (typeof req.query.q === 'string' && req.query.q !== '') {
    list = list.filter((product) =>
      product.title
        .toLowerCase()
        .includes((req.query.q as string).toLowerCase())
    );
  }

  if (typeof req.query.sort === 'string') {
    switch (req.query.sort) {
      case '-price':
        list = list.sort((a, b) => a.price - b.price);
        break;
      case '+price':
        list = list.sort((a, b) => b.price - a.price);
        break;
      case '+rating':
        list = list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
  }

  if (typeof req.query.colors === 'string' && req.query.colors !== '') {
    const filterColors = req.query.colors.split(',');

    list = list.filter((product) => filterColors.includes(product.color));
  }

  res.status(STATUS.SUCCESS).json({
    list,
  });
}
