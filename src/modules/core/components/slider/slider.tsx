import { FC } from 'react';
import ReactSlider from 'react-slider';

import type { SliderProps } from './slider.interface';
import styles from './slider.module.scss';

export const Slider: FC<SliderProps> = ({ onAfterChange, min, max }) => {
  return (
    <ReactSlider<[number, number]>
      thumbClassName={styles.thumb}
      trackClassName={styles.track}
      defaultValue={[min, max]}
      onAfterChange={onAfterChange}
      renderThumb={(props, state) => (
        <div {...props}>
          <span className={styles.thumb_text}>{state.valueNow}$</span>
        </div>
      )}
      pearling
      minDistance={100}
      min={min}
      max={max}
    />
  );
};
