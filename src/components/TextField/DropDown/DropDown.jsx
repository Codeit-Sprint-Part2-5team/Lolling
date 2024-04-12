import React, { useState } from 'react';
import * as S from './DropDown.styled'; 
import ArrowDown from '../../../assets/images/ArrowDownIcon.svg';
import ArrowUp from '../../../assets/images/ArrowUpIcon.svg';

function DropDown() {
  const [isOpen, setIsOpen] = useState(false); 
  const [selectedItem, setSelectedItem] = useState(null); 

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false); 
  };

  return (
    <S.DropDownLayout>
      <S.DropDownInput onClick={toggleDropDown}>
        {selectedItem || 'DropDown'}
        <img src={isOpen ? ArrowUp : ArrowDown} alt="arrow-icon" className="dropdown-arrow" />
      </S.DropDownInput>
      {isOpen && (
        <S.DropDownItemList>
          <S.DropDownItem>
            <S.DropDownItemHover onClick={() => handleItemClick("가족")}>가족</S.DropDownItemHover>
            <S.DropDownItemHover onClick={() => handleItemClick("지인")}>지인</S.DropDownItemHover>
            <S.DropDownItemHover onClick={() => handleItemClick("친구")}>친구</S.DropDownItemHover>
            <S.DropDownItemHover onClick={() => handleItemClick("연인")}>연인</S.DropDownItemHover>
          </S.DropDownItem>
        </S.DropDownItemList>
      )}
    </S.DropDownLayout>
  );
}

export default DropDown;
