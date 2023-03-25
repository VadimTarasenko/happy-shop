export type SelectOption = {
  value: string;
  title: string;
};

export type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
};
