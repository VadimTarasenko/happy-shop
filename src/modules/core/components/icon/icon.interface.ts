import type { FC, SVGProps } from 'react';

export type IconName = 'check' | 'star' | 'starEmpty' | 'search' | 'arrowDown';

export type IconProps = {
  name: IconName;
} & SVGProps<SVGSVGElement>;

export type IconsMap = Record<IconName, FC<SVGProps<SVGSVGElement>>>;
