import { useState } from 'react';
import * as S from './ToggleButton.styled';

export default function ToggleButton({ setContext, left, right }) {
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
    <S.ToggleButtonLayout>
      {selectedToggle === 'left' ? (
        <S.ToggleButtonSelectedItemBox type='button' onClick={handleLeftClick}>
          컬러
        </S.ToggleButtonSelectedItemBox>
      ) : (
        <S.ToggleButtonLabelItemBox type='button' onClick={handleLeftClick}>
          컬러
        </S.ToggleButtonLabelItemBox>
      )}
      {selectedToggle === 'right' ? (
        <S.ToggleButtonSelectedItemBox type='button' onClick={handleRightClick}>
          이미지
        </S.ToggleButtonSelectedItemBox>
      ) : (
        <S.ToggleButtonLabelItemBox type='button' onClick={handleRightClick}>
          이미지
        </S.ToggleButtonLabelItemBox>
      )}
    </S.ToggleButtonLayout>
  );
}
