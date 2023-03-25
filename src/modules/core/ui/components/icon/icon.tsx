import { type FC } from 'react';
// icons
import Check from '@/assets/icons/check.svg';
import Star from '@/assets/icons/star.svg';
import StarEmpty from '@/assets/icons/star-empty.svg';
import Search from '@/assets/icons/search.svg';
import ArrowDown from '@/assets/icons/arrow-down.svg';

import type { IconProps, IconsMap } from './icon.interface';

export const icons: IconsMap = {
  check: Check,
  star: Star,
  starEmpty: StarEmpty,
  search: Search,
  arrowDown: ArrowDown,
};

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  const SVGIcon = icons[name];

  if (!SVGIcon) {
    console.warn(`Icon "${name}" does not exist`);

    return null;
  }

  return <SVGIcon {...props} />;
};
