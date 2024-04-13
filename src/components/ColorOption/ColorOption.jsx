import * as S from './ColorOption.styled';
import checkicon from '../../assets/images/Check.svg';
import convertBackgroundColor from '../../utils/convertBackgroundColor';
import { useEffect, useState } from 'react';

export default function ColorOption({ color, select, setSelect }) {
  const isActive = select === color;

  const onChangeActive = () => {
    setSelect(color);
  };

  return (
    <S.ColorOptionLayout>
      <S.ColorBox
        $color={convertBackgroundColor(color)}
        $isActive={isActive}
        onClick={onChangeActive}
      >
        <S.ImgBox>
          <S.CheckImg src={checkicon} />
        </S.ImgBox>
      </S.ColorBox>
    </S.ColorOptionLayout>
  );
}
