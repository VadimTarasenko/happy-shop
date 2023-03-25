import { type FC } from 'react';
// svgs
import ProductListEmpty from '@/assets/icons/empty-product-list.svg';

import styles from './product-list-empty-view.module.scss';

export const ProductListEmptyView: FC = () => {
  return (
    <div className={styles.root}>
      <ProductListEmpty />
      <span className={styles.title}>There is no such products</span>
      <span className={styles.subtitle}>
        Try checking your spelling or use more general filters
      </span>
    </div>
  );
};
