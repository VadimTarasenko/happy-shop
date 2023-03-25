import { type FC } from 'react';

import styles from './color-filter.module.scss';
import { FilterCardLayout } from '@/modules/filter/ui/components/filter-card-layout';

const colors: { key: string; hex: string }[] = [
  {
    key: 'light-primary',
    hex: 'rgb(176, 190, 197)',
  },
  {
    key: 'dark-primary',
    hex: 'rgb(84, 110, 122)',
  },
  {
    key: 'light-secondary',
    hex: 'rgb(128, 203, 196)',
  },
  {
    key: 'secondary',
    hex: 'rgb(0, 150, 136)',
  },
  {
    key: 'light-green',
    hex: 'rgb(237, 247, 237)',
  },
  {
    key: 'green',
    hex: 'rgb(108, 192, 103)',
  },
  {
    key: 'dark-green',
    hex: 'rgb(100, 186, 95)',
  },
  {
    key: 'light-red',
    hex: 'rgb(228, 135, 132)',
  },
  {
    key: 'red',
    hex: 'rgb(217, 83, 79)',
  },
  {
    key: 'dark-red',
    hex: 'rgb(213, 76, 72)',
  },
  {
    key: 'yellow',
    hex: 'rgb(240, 173, 78)',
  },
  {
    key: 'dark-yellow',
    hex: 'rgb(236, 156, 61)',
  },
  {
    key: 'orange',
    hex: 'rgb(255, 171, 145)',
  },
  {
    key: 'dark-orange',
    hex: 'rgb(216, 67, 21)',
  },
  {
    key: 'grey',
    hex: 'rgb(213, 217, 233)',
  },
  {
    key: 'black',
    hex: 'rgb(11, 22, 29)',
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
