import { type FC } from 'react';
import cx from 'classnames';
// components
import { Icon } from '@/modules/core/ui/components/icon';

import type { CheckboxProps } from './checkbox.interface';
import styles from './checkbox.module.scss';

export const Checkbox: FC<CheckboxProps> = ({ value, onChange }) => {
  const handleClick = () => {
    onChange && onChange(!value);
  };

  return (
    <div
      className={cx(styles.root, { [styles.root_active]: value })}
      onClick={handleClick}
    >
      <Icon name='check' color='#ffffff' />
    </div>
  );
};
