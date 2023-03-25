import { type FC } from 'react';
// components
import { FilterCardLayout } from '@/modules/filter/components/filter-card-layout';
import { Slider } from '@/modules/core/components/slider';

import type { PriceFilterProps } from './price-filter.interface';

export const PriceFilter: FC<PriceFilterProps> = ({ onChange }) => {
  return (
    <FilterCardLayout title='Price'>
      <Slider onAfterChange={onChange} min={0} max={1000} />
    </FilterCardLayout>
  );
};
