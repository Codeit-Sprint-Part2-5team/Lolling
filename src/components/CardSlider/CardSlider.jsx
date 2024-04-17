import React, { useRef } from 'react';
import * as S from './CardSlider.styled';
import ArrowButton from '../ArrowButton/ArrowButton';

function CardSlider({ children }) {
  const sliderRef = useRef(null);
  const cardFolderWidth = 275;
  const gap = 20;

  // 카드 리스트의 너비에 따른 카드 폴더의 수 계산
  const calculateCardCount = () => {
    const cardListWidth = sliderRef.current.offsetWidth;
    return Math.floor((cardListWidth + gap) / (cardFolderWidth + gap));
  };

  const handleLeftClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -=
        (cardFolderWidth + gap) * calculateCardCount();
    }
  };

  const handleRightClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft +=
        (cardFolderWidth + gap) * calculateCardCount();
    }
  };

  return (
    <S.CardSlider>
      <S.LeftButton onClick={handleLeftClick}>
        <ArrowButton direction='left' />
      </S.LeftButton>
      <S.RightButton onClick={handleRightClick}>
        <ArrowButton direction='right' />
      </S.RightButton>
      <S.CardList ref={sliderRef}>{children}</S.CardList>
    </S.CardSlider>
  );
}

export default CardSlider;
