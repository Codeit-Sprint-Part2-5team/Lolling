import { useState } from 'react';
import * as S from './Button.styled';
import smileIcon from '../../assets/images/smileIcon.svg';
import smileWhiteIcon from '../../assets/images/SmileWhiteIcon.svg';

function Button({
  buttonState = 'enabled',
  text,
  variant,
  size,
  width,
  isSmileIcon = false,
}) {
  const [buttonEvent, setButtonEvent] = useState('enabled');

  return buttonState === 'enabled' ? (
    <S.ButtonLayout
      buttonVariant={variant}
      buttonSize={size}
      buttonWidth={width}
      ButtonEvent={buttonEvent}
      // 처음 마우스 올렸을 때 hover로 상태 변경
      onMouseEnter={() => {
        setButtonEvent('hover');
      }}
      // 마우스를 올렸다가 뗄 때 enabled로 상태 변경
      onMouseLeave={() => {
        setButtonEvent('enabled');
      }}
      // 마우스로 버튼을 누르는 중에 pressed로 상태 변경
      onMouseDown={() => {
        setButtonEvent('pressed');
      }}
      // 마우스로 버튼을 선택했을 때 focus로 상태 변경
      onFocus={() => {
        setButtonEvent('focus');
      }}
      // 마우스가 focus를 잃었을 때 enabled로 상태 변경
      onBlur={() => {
        setButtonEvent('enabled');
      }}
    >
      {isSmileIcon ? <img src={smileIcon} alt="스마일" /> : null}
      {text}
    </S.ButtonLayout>
  ) : (
    <S.DisabledButtonLayout buttonSize={size} buttonWidth={width}>
      {isSmileIcon ? <img src={smileWhiteIcon} alt="스마일" /> : null}
      {text}
    </S.DisabledButtonLayout>
  );
}

export default Button;
