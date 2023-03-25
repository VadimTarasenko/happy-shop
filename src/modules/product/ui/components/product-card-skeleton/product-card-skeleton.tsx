import { type FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import styles from './product-card-skeleton.module.scss';

const SKELETON_THEME = {
  baseColor: '#e2e4ea',
  highlightColor: '#e9eff1',
};

export const ProductCardSkeleton: FC = () => {
  return <Skeleton className={styles.root} {...SKELETON_THEME} />;
};
