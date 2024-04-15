import ProfileImage from '../ProfileImage/ProfileImage';
import * as S from './Card.styled';
import Badge from '../Badge/Badge';
import AddButton from '../AddButton/AddButton';

export default function Card({
  add,
  setModal,
  setModalVisible,
  content,
  profileImageURL,
  relationship,
  sender,
  createdAt,
}) {
  const date = createdAt?.slice(0, 10);
  const handleCardClick = () => {
    setModal({
      content,
      profileImageURL,
      relationship,
      sender,
      date,
    });
    setModalVisible(true);
  };
  return (
    <>
      {add ? (
        <S.CardLayout $add={add}>
          <AddButton />
        </S.CardLayout>
      ) : (
        <S.CardLayout onClick={handleCardClick}>
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
            <S.DateBox>{date}</S.DateBox>
          </S.BottomContainer>
        </S.CardLayout>
      )}
    </>
  );
}
