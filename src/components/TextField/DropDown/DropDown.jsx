import React, { useState } from 'react';
import * as S from './DropDown.styled';
import ArrowDown from '../../../assets/images/ArrowDownIcon.svg';
import ArrowUp from '../../../assets/images/ArrowUpIcon.svg';

function DropDown({ items, type, messageBody, setMessageBody, font }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    setMessageBody(() => ({
      ...messageBody,
      [type]: item,
    }));
  }; 

  const handleSelectedFont = (font) => {
    setSelectedItem(font);
    setMessageBody({ ...messageBody, font });
  }; 

  return (
    <S.DropDownLayout>
      <S.DropDownInput onClick={toggleDropDown}>
        {selectedItem}
        <img
          src={isOpen ? ArrowUp : ArrowDown}
          alt='arrow-icon'
          className='dropdown-arrow'
        />
      </S.DropDownInput>
      {isOpen && (
        <S.DropDownItemList>
          <S.DropDownItem>
          {items.map((item) => (
            <S.DropDownItemHover
              key={item}
              onClick={() => {
                type === 'font'
                  ? handleSelectedFont(item)
                  : handleItemClick(item);
              }}
            >
              {item}
            </S.DropDownItemHover>
          ))}
          </S.DropDownItem>
        </S.DropDownItemList>
      )}
    </S.DropDownLayout>
  );
}

export default DropDown;
