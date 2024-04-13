import * as S from './ProfileList.styled';
import ProfileImage from '../ProfileImage/ProfileImage';

export default function ProfileList({ recentMessages, messageCount }) {
  return (
    <>
      <S.CardGuestContainer>
        {recentMessages?.map((item) => (
          <ProfileImage key={item.id} image={item.profileImageURL} />
        ))}
      </S.CardGuestContainer>
      {messageCount > recentMessages?.length ? (
        <S.WroteCountBox>{`+ ${messageCount}`}</S.WroteCountBox>
      ) : null}
    </>
  );
}
