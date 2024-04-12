import * as S from './ColorOption.styled';
import checkicon from '../../assets/images/Check.svg';
import { useState } from 'react';

export default function ColorOption({ color, setColor }) {
  const [isActive, setActive] = useState(false);

  const onChangeActive = () => {
    setActive(!isActive);
  };

  return (
    <S.ColorOptionLayout>
      <S.ColorBox $color={color} isActive={isActive} onClick={onChangeActive}>
        <S.ImgBox>
          <S.CheckImg src={checkicon} />
        </S.ImgBox>
      </S.ColorBox>
    </S.ColorOptionLayout>
  );
}
