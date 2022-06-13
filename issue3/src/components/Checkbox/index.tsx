import { nanoid } from 'nanoid';
import { ReactNode, useState } from 'react';
import './index.scss';

interface ICheckboxProps {
  checked?: boolean;
  children?: ReactNode;
  error?: string;
  onChange?: (checked: boolean) => void;
}

const checkboxId = nanoid();

export const Checkbox = ({
  children,
  checked = false,
  error,
  onChange,
}: ICheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <label htmlFor={checkboxId} className='checkbox__container '>
      <input
        type='checkbox'
        checked={checked}
        onChange={() => {
          onChange && onChange(!isChecked);
          setIsChecked(!isChecked);
        }}
        id={checkboxId}
        className='checkbox__old'
      />
      <svg
        className={`checkbox__new ${error ? 'checkbox__new--error' : ''} ${
          isChecked ? 'checkbox__new--active' : ''
        }`}
        aria-hidden='true'
        viewBox='0 0 15 11'
        fill='none'
      >
        <path
          d='M1 4.5L5 9L14 1'
          strokeWidth='2'
          stroke={isChecked ? 'white' : 'none'}
        />
      </svg>
      <div>{children}</div>
      {error && <span className='errors'>{error}</span>}
    </label>
  );
};
