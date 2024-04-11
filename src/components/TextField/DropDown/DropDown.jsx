import React, { useState } from 'react';
import { DropDownLayout, DropDownItem } from './DropDown.styled';
import ArrowDown from 'src/assets/images/ArrowDownIcon.svg';
import ArrowUp from 'src/assets/images/ArrowUpIcon.svg';

function DropDown({ items }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('선택');

  const toggleDropDown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleItemClick = (name) => {
    setSelectedItem(name);
    setIsDropdownOpen(false);
  };

  return (
    <DropDownLayout>
      <button
        onClick={toggleDropDown}
        className='w-[240px] bg-[#F5F5F5] h-[50px] rounded-[5px] flex items-center justify-between p-[16px]'
      >
        <div className={`${selectedItem === '선택' && 'text-[#a0a0a0]'} w-fit`}>
          {selectedItem}
        </div>
        <div>{isDropdownOpen ? <ArrowUp /> : <ArrowDown />}</div>
      </button>

      {isDropdownOpen && (
        <div className='absolute bg-[#f5f5f5] w-[240px] rounded-bl-[5px] rounded-br-[5px]'>
          {items.map((item) => (
            <DropDownItem
              key={item.id}
              onClick={() => handleItemClick(item.name)}
            >
              {item.name}
            </DropDownItem>
          ))}
        </div>
      )}
    </DropDownLayout>
  );
}

export default DropDown;
