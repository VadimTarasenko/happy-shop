import { SelectOption } from '@/modules/core/components/select/select.interface';

export const PRODUCT_SORT_OPTIONS: SelectOption[] = [
  {
    value: '+price',
    title: 'Price: High to Low',
  },
  {
    value: '-price',
    title: 'Price: Low to High',
  },
  {
    value: '+rating',
    title: 'Popular first',
  },
];
