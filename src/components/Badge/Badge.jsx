import * as S from './Badge.styled';

function Badge({ name }) {
  let backgroundColorVariable;
  let colorVariable;

  switch (name) {
    case '지인':
      backgroundColorVariable = '--orange-100';
      colorVariable = '--orange-500';
      break;
    case '동료':
      backgroundColorVariable = '--purple-100';
      colorVariable = '--purple-600';
      break;
    case '가족':
      backgroundColorVariable = '--green-100';
      colorVariable = '--green-500';
      break;
    case '친구':
    default:
      backgroundColorVariable = '--blue-100';
      colorVariable = '--blue-500';
  }

  return (
    <S.BadgeLayout backgroundColorVariable={backgroundColorVariable}>
      <S.BadgeTextBox colorVariable={colorVariable}>{name}</S.BadgeTextBox>
    </S.BadgeLayout>
  );
}

export default Badge;
