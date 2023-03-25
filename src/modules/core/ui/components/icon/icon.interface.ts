import type { FC, SVGProps } from 'react';

export type IconName = 'check' | 'star' | 'starEmpty' | 'search';

export type IconProps = {
  name: IconName;
} & SVGProps<SVGSVGElement>;

export type IconsMap = Record<IconName, FC<SVGProps<SVGSVGElement>>>;
