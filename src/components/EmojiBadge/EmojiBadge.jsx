import * as S from './EmojiBadge.styled';

function EmojiBadge({ emoji, count = '0' }) {
  return (
    <S.EmojiBadgeLayout>
      {emoji}
      {count}
    </S.EmojiBadgeLayout>
  );
}
export default EmojiBadge;
