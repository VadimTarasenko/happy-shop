export type SliderProps = {
  onAfterChange: (value: [min: number, max: number]) => void;
  min: number;
  max: number;
};
