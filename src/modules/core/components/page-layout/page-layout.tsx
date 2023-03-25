import { type FC } from 'react';
// types
import type { ChildrenProp } from '@/modules/core/types/react.types';

import styles from './page-layout.module.scss';

export const PageLayout: FC<ChildrenProp> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};
