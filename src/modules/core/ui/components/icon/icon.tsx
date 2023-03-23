import { FC, memo } from 'react';
// icons
import Check from '@/assets/icons/check.svg';

import type { IconProps, IconsMap } from './icon.interface';

export const icons: IconsMap = {
  check: Check,
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
