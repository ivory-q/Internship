import { HTMLProps, ReactNode } from 'react';
import './index.scss';

interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  children?: ReactNode;
}

export const Button = ({ children, className, ...props }: IButtonProps) => {
  return (
    <button {...props} className={`btn ${className}`} type='button'>
      {children}
    </button>
  );
};
