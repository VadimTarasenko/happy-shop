import { type FC } from 'react';
import cx from 'classnames';
// components
import { FilterCardLayout } from '@/modules/filter/components/filter-card-layout';
import { Icon } from '@/modules/core/components/icon';
// constants
import { colors } from '@/modules/product/constants/product-color.constants';

import type { PriceFilterProps } from './color-filter.interface';
import styles from './color-filter.module.scss';

export const ColorFilter: FC<PriceFilterProps> = ({
  activeColors,
  onChange,
}) => {
  const handleColorClick = (key: string) => () => {
    if (activeColors.includes(key)) {
      onChange(activeColors.filter((color) => color !== key));

      return;
    }

    onChange([...activeColors, key]);
  };

  return (
    <FilterCardLayout title='Color'>
      <div className={styles.root}>
        {colors.map((color) => {
          const isActive = activeColors.includes(color.key);

          return (
            <div
              key={color.key}
              onClick={handleColorClick(color.key)}
              className={cx(styles.color, { [styles.color_active]: isActive })}
              style={{ backgroundColor: color.hex }}
            >
              {isActive && <Icon name='check' className={styles.color_icon} />}
            </div>
          );
        })}
      </div>
    </FilterCardLayout>
  );
};
