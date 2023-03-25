import { FC, memo } from 'react';
// icons
import Check from '@/assets/icons/check.svg';
import Star from '@/assets/icons/star.svg';
import StarEmpty from '@/assets/icons/star-empty.svg';

import type { IconProps, IconsMap } from './icon.interface';

export const icons: IconsMap = {
  check: Check,
  star: Star,
  starEmpty: StarEmpty,
};

const Icon: FC<IconProps> = ({ name, ...props }) => {
  const SVGIcon = icons[name];

  if (!SVGIcon) {
    console.warn(`Icon "${name}" does not exist`);

    return null;
  }

  return <SVGIcon {...props} />;
};

export default memo(Icon);
