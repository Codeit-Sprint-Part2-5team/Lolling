import * as S from './Card.styled';
import AddButton from '../AddButton/AddButton';
import { Link } from 'react-router-dom';
import SenderProfile from '../SenderProfile/SenderProfile';
import DeleteButton from '../DeleteButton/DeleteButton';

export default function Card({
  add,
  id,
  setModal,
  content,
  profileImageURL,
  relationship,
  sender,
  createdAt,
  edit,
  deleteMessage,
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
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteMessage(id);
    console.log('delete');
  };

  return (
    <>
      {add ? (
        <S.CardLayout $add={add}>
          <Link to='message'>
            <AddButton />
          </Link>
        </S.CardLayout>
      ) : (
        <S.CardLayout onClick={handleCardClick}>
          <S.TopContainer>
            <SenderProfile
              profileImageURL={profileImageURL}
              sender={sender}
              relationship={relationship}
            />
            {edit && <DeleteButton onClick={handleDelete} />}
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
