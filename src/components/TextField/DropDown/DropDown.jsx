import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './DropDown.styled';
import ArrowDown from '../../../assets/images/ArrowDownIcon.svg';
import ArrowUp from '../../../assets/images/ArrowUpIcon.svg';

function DropDown({ items, font }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]);
  
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };
  
  return (
    <S.DropDownLayout font={font}>
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
          {items.map(item => (
            <S.DropDownItem key={item} onClick={() => handleItemClick(item)}>
              {item}
            </S.DropDownItem>
          ))}
        </S.DropDownItemList>
      )}
    </S.DropDownLayout>
  );
}

DropDown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  font: PropTypes.string.isRequired,
};

export default DropDown;
