import { useState } from 'react';
import * as S from './Badge.styled';

function Badge({ name }) {
  const [backgroundColor, setBackgroundColor] = useState(--orange - 100);
  const [color, setColor] = useState(--orange - 100);

  switch (name) {
    case '지인':
      setBackgroundColor = '--orange-100';
      setColor = '--orange-500';
      break;
    case '동료':
      setBackgroundColor = '--purple-100';
      setColor = '--purple-600';
      break;
    case '가족':
      setBackgroundColor = '--green-100';
      setColor = '--green-500';
      break;
    case '친구':
    default:
      setBackgroundColor = '--blue-100';
      setColor = '--blue-500';
  }

  return (
    <S.BadgeLayout setBackgroundColor={setBackgroundColor}>
      <S.BadgeTextBox setColor={setColor}>{name}</S.BadgeTextBox>
    </S.BadgeLayout>
  );
}

export default Badge;
