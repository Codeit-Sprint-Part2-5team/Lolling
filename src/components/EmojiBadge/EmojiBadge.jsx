import * as S from './EmojiBadge.styled';

function EmojiBadge({ emoji, count = '0' }) {
  return (
    <S.EmojiBadgeLayout>
      {emoji}
      <S.EmojiBadgeNumberBox>{count}</S.EmojiBadgeNumberBox>
    </S.EmojiBadgeLayout>
  );
}
export default EmojiBadge;
