import { type FC } from 'react';
import cx from 'classnames';

import type { TextFieldProps } from './text-field.interface';
import styles from './text-field.module.scss';

export const TextField: FC<TextFieldProps> = ({
  startAdornment,
  className,
  ...props
}) => {
  return (
    <label className={cx(styles.root, className)}>
      {!!startAdornment && (
        <div className={styles.startAdornment}>{startAdornment}</div>
      )}
      <input className={styles.input} placeholder='Search product' {...props} />
    </label>
  );
};
