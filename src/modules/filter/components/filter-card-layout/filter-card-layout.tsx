import { type FC } from 'react';

import type { FilterCardLayoutProps } from './filter-card-layout.interface';
import styles from './filter-card-layout.module.scss';

export const FilterCardLayout: FC<FilterCardLayoutProps> = ({
  title,
  children,
}) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
