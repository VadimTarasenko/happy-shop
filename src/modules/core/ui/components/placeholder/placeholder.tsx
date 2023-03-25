import { type FC } from 'react';

import type { PlaceholderProps } from './placeholder.interface';

export const Placeholder: FC<PlaceholderProps> = ({
  isActive,
  placeholder,
  children,
}) => {
  if (isActive) {
    return <>{placeholder}</>;
  }

  return <>{children}</>;
};
