import * as S from './Badge.styled';

function Badge({ name }) {
  return (
    <S.BadgeLayout name={name}>
      <S.BadgeTextBox name={name}>{name}</S.BadgeTextBox>
    </S.BadgeLayout>
  );
}

export default Badge;
