import ProfileImage from '../ProfileImage/ProfileImage';
import * as S from './Card.styled';
import Badge from '../Badge/Badge';

export default function Card({ content, profileImageURL, relationship, sender, createdAt}) {
  return (
    <S.CardLayout>
      <S.TopContainer>
        <ProfileImage image={profileImageURL} size='m' />
        <S.TextContainer>
          <S.NameContainer>
            <span>From.</span> <b>{sender}</b>
          </S.NameContainer>
          <Badge name={relationship} />
        </S.TextContainer>
      </S.TopContainer>
      <S.BottomContainer>
        <S.ContentBox>{content}</S.ContentBox>
        <S.DateBox>{createdAt.slice(0, 10)}</S.DateBox>
      </S.BottomContainer>
    </S.CardLayout>
  );
}
