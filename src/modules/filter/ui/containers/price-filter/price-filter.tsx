import { type FC } from 'react';
// components
import { Checkbox } from '@/modules/core/ui/components/checkbox';
import { FilterCardLayout } from '@/modules/filter/ui/components/filter-card-layout';

import styles from './price-filter.module.scss';

export const PriceFilter: FC = () => {
  return (
    <FilterCardLayout title='Price'>
      <div className={styles.root}>
        <Checkbox value />
      </div>
    </FilterCardLayout>
  );
};
