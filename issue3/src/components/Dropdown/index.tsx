import { useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import DropdownItem from '../../types/DropdownItem';
import './index.scss';

interface IDropdownProps {
  title?: string;
  list: DropdownItem[];
  value?: DropdownItem;
  error?: string;
  onChange: (item: DropdownItem) => void;
}

export const Dropdown = ({
  title,
  list = [],
  error,
  value,
  onChange,
}: IDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [headerTitle, setHeaderTitle] = useState(title);

  const dropdownMenu = useRef(null);
  useOnClickOutside(dropdownMenu, () => setIsOpen(false));

  useEffect(() => {
    if (value?.name) {
      selectItem(value);
    } else {
      clearSelection();
    }
  }, [value]);

  const clearSelection = () => {
    setHeaderTitle(title);
    setIsSelected(false);
  };

  const selectItem = (item: DropdownItem) => {
    const { name } = item;

    setIsOpen(false);
    setHeaderTitle(name || '');
    setIsSelected(true);
    onChange(item);
  };

  return (
    <div
      className={`dropdown__container ${error ? 'dropdown--error' : ''}`}
      ref={dropdownMenu}
      onClick={() => {
        setIsOpen((open) => !open);
      }}
    >
      <div className='dropdown__header'>
        <div
          className={`dropdown__title ${
            isSelected ? 'dropdown__title--active' : ''
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
          {list.map((item, index) => (
            <div
              className='dropdown-list__item'
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                selectItem(item);
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
      {error && <span className='errors'>{error}</span>}
    </div>
  );
};
