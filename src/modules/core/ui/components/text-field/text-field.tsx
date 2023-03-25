import { type FC } from 'react';

import type { TextFieldProps } from './text-field.interface';
import styles from './text-field.module.scss';

export const TextField: FC<TextFieldProps> = ({ startAdornment, ...props }) => {
  return (
    <label className={styles.root}>
      {!!startAdornment && (
        <div className={styles.startAdornment}>{startAdornment}</div>
      )}
      <input className={styles.input} placeholder='Search product' {...props} />
    </label>
  );
};
