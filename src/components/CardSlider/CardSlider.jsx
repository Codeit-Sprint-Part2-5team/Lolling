import React, { useRef, useState, useEffect } from 'react';
import * as S from './CardSlider.styled';
import ArrowButton from '../ArrowButton/ArrowButton';

function CardSlider({ children }) {
  const sliderRef = useRef(null);
  const cardFolderWidth = 275;
  const gap = 20;
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

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

  useEffect(() => {
    const handleScroll = () => {
      const currentSliderRef = sliderRef.current;
      const { scrollLeft, scrollWidth, clientWidth } = currentSliderRef;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth);
    };

    sliderRef.current.addEventListener('scroll', handleScroll);
    return () => {
      // eslint-disable-next-line
      sliderRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (sliderRef.current && children.length * (cardFolderWidth + gap) > sliderRef.current.offsetWidth) {
      setShowRightButton(true);
    } else {
      setShowRightButton(false);
    }
  }, [children, cardFolderWidth, gap]);

  return (
    <S.CardSlider>
      {showLeftButton && (
        <S.LeftButton onClick={handleLeftClick}>
          <ArrowButton direction='left' />
        </S.LeftButton>
      )}
      {showRightButton && (
        <S.RightButton onClick={handleRightClick}>
          <ArrowButton direction='right' />
        </S.RightButton>
      )}
      <S.CardList ref={sliderRef}>{children}</S.CardList>
    </S.CardSlider>
  );
}

export default CardSlider;
