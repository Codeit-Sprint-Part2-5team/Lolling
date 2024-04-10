import { Emoji, EmojiStyle } from 'emoji-picker-react';
import * as S from './EmojiBadge.styled';

function EmojiBadge({ emoji = '1f423', count = '20' }) {
  return (
    <S.EmojiBadgeLayout>
      <Emoji unified={emoji} size="16" />
      {count}
    </S.EmojiBadgeLayout>
  );
}
export default EmojiBadge;
