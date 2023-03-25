import { type FC, useCallback, useState } from 'react';
import cx from 'classnames';
// components
import { Icon } from '@/modules/core/ui/components/icon';

import type { SelectProps } from './select.interface';
import styles from './select.module.scss';

export const Select: FC<SelectProps> = ({ value, onChange, options }) => {
  const activeOption = options.find((option) => option.value === value);
  // state
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleOptionClick = (_value: string) => () => {
    onChange(_value);
    setIsOpen(false);
  };

  // todo: handle case if options array doesn't have active option
  if (!activeOption) {
    throw new Error(
      `${value} could not be found in the 'options' array. Please make sure you have an option with this value.`
    );
  }

  return (
    <div className={styles.root}>
      <div className={styles.label} onClick={handleSelectToggle}>
        <span className={styles.label_text}>{activeOption.title}</span>
        <div className={styles.label_arrow}>
          <Icon name='arrowDown' />
        </div>
      </div>
      {isOpen && (
        <div className={styles.options}>
          {options.map((option) => (
            <div
              key={option.value}
              className={cx(styles.option, {
                [styles.option_active]: option.value === value,
              })}
              onClick={handleOptionClick(option.value)}
            >
              <span className={styles.option_text}>{option.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
