import type { ReactNode } from 'react';
import type { ChildrenProp } from '@/modules/core/types/react.types';

export type PlaceholderProps = ChildrenProp & {
  isActive: boolean;
  placeholder: ReactNode;
};
