import * as S from './ProfileList.styled';
import ProfileImage from '../ProfileImage/ProfileImage';

export default function ProfileList({ recentMessages, messageCount }) {
  return (
    <>
      {recentMessages?.map((item) => (
        <ProfileImage key={item.id} image={item.profileImageURL} />
      ))}
      {messageCount > recentMessages?.length ? (
        <S.WroteCountBox>{`+ ${messageCount}`}</S.WroteCountBox>
      ) : null}
    </>
  );
}
