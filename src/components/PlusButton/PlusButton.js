import PlusIcon from '../../assets/images/PlusIcon.svg';
import * as S from './PlusButton.styled';
import { useEffect, useState } from 'react';

function PlusButton({ buttonState }) {
  const [plusButtonState, setPlusButtonState] = useState('enabled');
  const [plusButtonEvent, setPlusButtonEvent] = useState('enabled');

  useEffect(() => {
    if (buttonState) {
      setPlusButtonState(buttonState);
    }
  }, [plusButtonState]);

  return plusButtonState === 'enabled' ? (
    <S.PlusButtonLayout
      src={PlusIcon}
      alt="더하기 이미지"
      plusButtonEvent={plusButtonEvent}
      // 처음 마우스 올렸을 때 hover로 상태 변경
      onMouseEnter={() => {
        setPlusButtonEvent('hover');
      }}
      // 마우스를 올렸다가 뗄 때 enabled로 상태 변경
      onMouseLeave={() => {
        setPlusButtonEvent('enabled');
      }}
      // 마우스로 버튼을 누르는 중에 pressed로 상태 변경
      onMouseDown={() => {
        setPlusButtonEvent('pressed');
      }}
      // 마우스로 버튼을 선택했을 때 focus로 상태 변경
      onFocus={() => {
        setPlusButtonEvent('focus');
      }}
      // 마우스가 focus를 잃었을 때 enabled로 상태 변경
      onBlur={() => {
        setPlusButtonEvent('enabled');
      }}
    />
  ) : (
    <S.PlusButtonDisabledLayout src={PlusIcon} alt="더하기 이미지" />
  );
}

export default PlusButton;
