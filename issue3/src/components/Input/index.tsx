import { HTMLProps } from 'react';
import './index.scss';

interface IInputProps extends HTMLProps<HTMLInputElement> {
  error?: string;
}

export const Input = ({ error, ...props }: IInputProps) => {
  return (
    <div className='input__container'>
      <input
        {...props}
        className={`input__form ${error ? 'input__form--error' : ''}`}
      />
      {error && <span className='errors'>{error}</span>}
    </div>
  );
};
