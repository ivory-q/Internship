import { HTMLProps, ReactNode } from 'react';
import './index.scss';

interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  children?: ReactNode;
}

export const Button = ({ children, ...props }: IButtonProps) => {
  return (
    <button {...props} className={`btn`} type='button'>
      {children}
    </button>
  );
};
