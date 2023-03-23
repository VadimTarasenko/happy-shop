import { type FC } from 'react';

import type { ProductGridProps } from './product-grid.interface';
import styles from './product-grid.module.scss';

export const ProductGrid: FC<ProductGridProps> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};
