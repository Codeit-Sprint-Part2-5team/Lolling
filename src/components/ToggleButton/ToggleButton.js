import { useState } from 'react';
import * as S from './ToggleButton.styled';

function ToggleButton() {
  const [selectedToggle, setSelectedToggle] = useState('left');

  const handleLeftClick = () => {
    setSelectedToggle('left');
  };

  const handleRightClick = () => {
    setSelectedToggle('right');
  };

  return (
    <S.ToggleButtonLayout>
      {selectedToggle === 'left' ? (
        <S.ToggleButtonSelectedItemBox onClick={handleLeftClick}>
          컬러
        </S.ToggleButtonSelectedItemBox>
      ) : (
        <S.ToggleButtonLabelItemBox onClick={handleLeftClick}>
          컬러
        </S.ToggleButtonLabelItemBox>
      )}
      {selectedToggle === 'right' ? (
        <S.ToggleButtonSelectedItemBox onClick={handleRightClick}>
          이미지
        </S.ToggleButtonSelectedItemBox>
      ) : (
        <S.ToggleButtonLabelItemBox onClick={handleRightClick}>
          이미지
        </S.ToggleButtonLabelItemBox>
      )}
    </S.ToggleButtonLayout>
  );
}

export default ToggleButton;
