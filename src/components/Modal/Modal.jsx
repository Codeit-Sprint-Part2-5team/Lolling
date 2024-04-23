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
  font,
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
      </S.HeaderContainer>
      <S.ContentBox style={{ fontFamily: font }}>{content}</S.ContentBox>
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
