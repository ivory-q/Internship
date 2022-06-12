import { HTMLProps } from 'react';
import './index.scss';

export const Input = ({ className, ...props }: HTMLProps<HTMLInputElement>) => {
  return <input {...props} className={`input ${className}`} />;
};
