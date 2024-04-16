import * as S from './CardFolder.styled';
import EmojiBadge from '../EmojiBadge/EmojiBadge';
import ProfileList from '../ProfileList/ProfileList';
import convertBackgroundColor from '../../utils/convertBackgroundColor';
function CardFolder({
  name = 'Sowon',
  backgroundImageURL = 'https://picsum.photos/id/24/3840/2160',
  backgroundColor = 'beige',
  messageCount = 21,
  topReactions = null,
  recentMessages = null,
  sort = 'latest', // 수정: 기본값으로 'latest'를 사용하여 sort prop을 추가
}) {
  let sortedData = recentMessages; // 수정: 기본값으로 recentMessages를 사용

  if (sort === 'like') {
    sortedData = recentMessages.sort(
      (a, b) => b.reactionCount - a.reactionCount
    );
  }

  return (
    <S.CardFolderLayout
      $background={
        backgroundImageURL || convertBackgroundColor(backgroundColor)
      }
    >
      <S.UserInfoContainer>
        <S.CardUserNameBox>To.{name}</S.CardUserNameBox>
        <S.CardGuestContainer>
          <ProfileList
            recentMessages={sortedData} // 수정: recentMessages 대신 sortedData를 전달
            messageCount={messageCount}
          />
        </S.CardGuestContainer>
        {messageCount ? (
          <S.VisitCountBox>{`${messageCount}명이 작성했어요!`}</S.VisitCountBox>
        ) : (
          '페이퍼 남기러 가요~'
        )}
      </S.UserInfoContainer>
      <S.CardEmojiContainer>
        {topReactions?.map((item) => (
          <EmojiBadge key={item.id} emoji={item.emoji} count={item.count} />
        ))}
      </S.CardEmojiContainer>
    </S.CardFolderLayout>
  );
}

export default CardFolder;
