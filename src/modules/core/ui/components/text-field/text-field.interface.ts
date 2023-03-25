import type { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

export type TextFieldProps = {
  startAdornment?: ReactNode;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
