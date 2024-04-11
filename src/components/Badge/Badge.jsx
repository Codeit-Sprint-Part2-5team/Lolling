import { useState } from 'react';
import * as S from './Badge.styled';

function Badge({ name }) {
  const [backgroundColor, setBackgroundColor] = useState(--orange - 100);
  const [color, setColor] = useState(--orange - 100);

  switch (name) {
    case '지인':
      setBackgroundColor = '--orange-100,#FFF0D6';
      setColor = '--orange-500,#FF8832';
      break;
    case '동료':
      setBackgroundColor = '--purple-100,#F8F0FF';
      setColor = '--purple-600,#9935FF';
      break;
    case '가족':
      setBackgroundColor = '--green-,#E4FBDC';
      setColor = '--green-500,#2BA600';
      break;
    case '친구':
    default:
      setBackgroundColor = '--blue-100,#E2F5FF';
      setColor = '--blue-500,#00A2FE';
  }

  return (
    <S.BadgeLayout setBackgroundColor={setBackgroundColor}>
      <S.BadgeTextBox setColor={setColor}>{name}</S.BadgeTextBox>
    </S.BadgeLayout>
  );
}

export default Badge;
