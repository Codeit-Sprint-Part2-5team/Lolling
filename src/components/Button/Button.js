import { useState } from 'react';
import * as S from './Button.styled';
import smileIcon from '../../assets/images/smileIcon.svg';
import smileWhiteIcon from '../../assets/images/SmileWhiteIcon.svg';

function Button({ text, variant, size, width, isSmileIcon = false }) {
  return (
    <S.ButtonLayout
      buttonVariant={variant}
      buttonSize={size}
      buttonWidth={width}
    >
      {isSmileIcon ? <img src={smileIcon} alt="스마일" /> : null}
      {text}
    </S.ButtonLayout>
  );
}

export default Button;
