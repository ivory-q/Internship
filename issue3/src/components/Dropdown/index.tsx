import { useRef, useState } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import './index.scss';

interface DropdownItem<T = any> {
  [k: string]: T;
}

interface IDropdownProps {
  title?: string;
  list: Array<DropdownItem>;
  onChange: (item: DropdownItem) => void;
}

export const Dropdown = ({ title, list, onChange }: IDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [headerTitle, setHeaderTitle] = useState(title);

  const dropdownMenu = useRef(null);
  useOnClickOutside(dropdownMenu, () => setIsOpen(false));

  const selectItem = (item: DropdownItem) => {
    const { title } = item;

    setIsOpen(false);
    setHeaderTitle(title);
    setIsSelected(true);
    onChange(item);
  };

  return (
    <div
      className='dropdown__container'
      ref={dropdownMenu}
      onClick={() => {
        setIsOpen((open) => !open);
      }}
    >
      <div className='dropdown__header'>
        <div
          className={`dropdown__title ${
            isSelected && 'dropdown__title--active'
          }`}
        >
          {headerTitle}
        </div>
        {isOpen ? (
          <div className='dropdown__arrow dropdown__arrow--reverse'></div>
        ) : (
          <div className='dropdown__arrow'></div>
        )}
      </div>
      {isOpen && (
        <div className='dropdown-list'>
          {list.map((item) => (
            <div
              className='dropdown-list__item'
              key={item.id}
              onClick={(e) => {
                e.stopPropagation();
                selectItem(item);
              }}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
