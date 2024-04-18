import { useState } from 'react';
import * as S from './ToggleButton.styled';

export default function ToggleButton({
  setContext,
  left,
  right,
  leftName,
  rightName,
  className,
}) {
  const [selectedToggle, setSelectedToggle] = useState('left');

  const handleLeftClick = () => {
    setSelectedToggle('left');
    setContext(left);
  };

  const handleRightClick = () => {
    setSelectedToggle('right');
    setContext(right);
  };

  return (
    <S.ToggleButtonLayout className={className}>
      {selectedToggle === 'left' ? (
        <S.ToggleButtonSelectedItemBox type='button' onClick={handleLeftClick}>
          {leftName}
        </S.ToggleButtonSelectedItemBox>
      ) : (
        <S.ToggleButtonLabelItemBox type='button' onClick={handleLeftClick}>
          {leftName}
        </S.ToggleButtonLabelItemBox>
      )}
      {selectedToggle === 'right' ? (
        <S.ToggleButtonSelectedItemBox type='button' onClick={handleRightClick}>
          {rightName}
        </S.ToggleButtonSelectedItemBox>
      ) : (
        <S.ToggleButtonLabelItemBox type='button' onClick={handleRightClick}>
          {rightName}
        </S.ToggleButtonLabelItemBox>
      )}
    </S.ToggleButtonLayout>
  );
}
