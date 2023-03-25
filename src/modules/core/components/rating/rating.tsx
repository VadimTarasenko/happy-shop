import { type FC, useState, useCallback } from 'react';
import cx from 'classnames';
// components
import { Icon } from '@/modules/core/components/icon';

import type { RatingProps } from './rating.interface';
import styles from './rating.module.scss';

const STARS_COUNT = 5;

export const Rating: FC<RatingProps> = ({
  value,
  onChange,
  readonly = false,
}) => {
  const [localRating, setLocalRating] = useState<number | null>(null);
  const rating = localRating ?? value;

  const handleRootMouseLeave = useCallback(() => {
    setLocalRating(null);
  }, []);

  const handleStarMouseEnter = (starIndex: number) => () => {
    setLocalRating(starIndex + 1);
  };

  const handleStarClick = (starIndex: number) => () => {
    if (onChange) {
      onChange(starIndex + 1);
    }
  };

  return (
    <div
      className={cx(styles.root, { [styles.root_readonly]: readonly })}
      onMouseLeave={handleRootMouseLeave}
    >
      {[...Array(STARS_COUNT)].map((_, i) => (
        <div
          key={i}
          className={styles.star}
          onClick={handleStarClick(i)}
          onMouseEnter={handleStarMouseEnter(i)}
        >
          <Icon
            name={i < rating ? 'star' : 'starEmpty'}
            color={i < rating ? 'rgb(250, 175, 0)' : 'rgba(0, 0, 0, 0.26)'}
          />
        </div>
      ))}
    </div>
  );
};
