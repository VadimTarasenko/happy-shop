declare module '*.svg' {
  import { FC, SVGProps } from 'react';

  const Svg: FC<SVGProps<SVGSVGElement>>;

  export default Svg;
}
