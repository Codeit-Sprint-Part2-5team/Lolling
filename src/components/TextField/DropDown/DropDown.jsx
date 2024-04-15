import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './DropDown.styled';
import ArrowDown from '../../../assets/images/ArrowDownIcon.svg';
import ArrowUp from '../../../assets/images/ArrowUpIcon.svg';

function DropDown({ relationship, font }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('친구');
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
        {selectedItem || relationship}
        <img
          src={isOpen ? ArrowUp : ArrowDown}
          alt='arrow-icon'
          className='dropdown-arrow'
        />
      </S.DropDownInput>
      {isOpen && (
        <S.DropDownItemList>
          <S.DropDownItem>
            <S.DropDownItemHover onClick={() => handleItemClick('친구')}>
              친구
            </S.DropDownItemHover>
            <S.DropDownItemHover onClick={() => handleItemClick('지인')}>
              지인
            </S.DropDownItemHover>
            <S.DropDownItemHover onClick={() => handleItemClick('동료')}>
              동료
            </S.DropDownItemHover>
            <S.DropDownItemHover onClick={() => handleItemClick('가족')}>
              가족
            </S.DropDownItemHover>
          </S.DropDownItem>
        </S.DropDownItemList>
      )}
    </S.DropDownLayout>
  );
}

DropDown.propTypes = {
  relationship: PropTypes.oneOf(['친구', '지인', '동료', '가족']).isRequired,
  font: PropTypes.oneOf(['Noto Sans', 'Pretendard', '나눔명조', '나눔손글씨 손편지체']).isRequired,
};

export default DropDown;
