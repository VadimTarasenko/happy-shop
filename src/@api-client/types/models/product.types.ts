import { BaseResource } from '@/@api-client/types/models/base-model.types';

export type Product = BaseResource & {
  image: string;
  title: string;
  description: string;
  rating: number;
  price: number;
  color: string;
};
