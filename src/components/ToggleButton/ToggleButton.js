import { useState } from 'react';
import * as S from './ToggleButton.styled';

export default function ToggleButton({
  setContext,
  left,
  right,
  third,
  leftName,
  rightName,
  thirdName,
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

  const handleThirdClick = () => {
    setSelectedToggle('third');
    setContext(third);
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
      {thirdName && (
        <>
          {selectedToggle === 'third' ? (
            <S.ToggleButtonSelectedItemBox
              type='button'
              onClick={handleThirdClick}
            >
              {thirdName}
            </S.ToggleButtonSelectedItemBox>
          ) : (
            <S.ToggleButtonLabelItemBox
              type='button'
              onClick={handleThirdClick}
            >
              {thirdName}
            </S.ToggleButtonLabelItemBox>
          )}
        </>
      )}
    </S.ToggleButtonLayout>
  );
}
