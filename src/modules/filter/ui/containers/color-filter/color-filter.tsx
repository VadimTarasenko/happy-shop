import { type FC } from 'react';

import styles from './color-filter.module.scss';
import { FilterCardLayout } from '@/modules/filter/ui/components/filter-card-layout';

const colors: { key: string; hex: string }[] = [
  {
    key: 'black',
    hex: '#000000',
  },
  {
    key: 'white',
    hex: '#FFFFFF',
  },
  {
    key: 'blue',
    hex: '#319DFF',
  },
  {
    key: 'yellow',
    hex: '#FFDE31',
  },
  {
    key: 'pink',
    hex: '#FF316A',
  },
];

export const ColorFilter: FC = () => {
  return (
    <FilterCardLayout title='Color'>
      <div className={styles.root}>
        {colors.map((color) => (
          <div
            key={color.key}
            className={styles.color}
            style={{ backgroundColor: color.hex }}
          />
        ))}
      </div>
    </FilterCardLayout>
  );
};
