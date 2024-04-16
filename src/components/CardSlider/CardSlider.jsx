import React, { useRef } from "react";
import * as S from './CardSlider.styled';
import ArrowButton from "../ArrowButton/ArrowButton";

function CardSlider({ children }) {
  const SliderRef = useRef(null);

  const handleLeftClick = (e) => {
    console.log(e);
    console.log(SliderRef.current.scrollLeft); 
    SliderRef.current.scrollLeft -= 300; 
  };
  
  const handleRightClick = (e) => {
    SliderRef.current.scrollLeft += 300;
  };

  return (
    <S.CardSlider ref={SliderRef}>
      <S.LeftButton onClick={handleLeftClick}>
        <ArrowButton direction="left" />
      </S.LeftButton>
      {children}
      <S.RightButton onClick={handleRightClick}>
        <ArrowButton direction="right" />
      </S.RightButton>
    </S.CardSlider>
  );
}

export default CardSlider;
