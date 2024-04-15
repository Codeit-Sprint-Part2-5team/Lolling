import * as S from './Modal.styled';
import Button from '../Button/Button';
import SenderProfile from '../SenderProfile/SenderProfile';

function Modal({
  profileImageURL,
  sender,
  relationship,
  date,
  content,
  onClick,
}) {
  return (
    <S.Layout>
      <S.HeaderContainer>
        <S.HeaderInner>
          <SenderProfile
            profileImageURL={profileImageURL}
            sender={sender}
            relationship={relationship}
          />
          <S.DateBox>{date}</S.DateBox>
        </S.HeaderInner>
        <S.DividerBox></S.DividerBox>
      </S.HeaderContainer>
      <S.ContentBox>{content}</S.ContentBox>
      <Button
        onClick={onClick}
        text={'확인'}
        variant={'primary'}
        size={40}
        width={'120px'}
      />
    </S.Layout>
  );
}

export default Modal;
