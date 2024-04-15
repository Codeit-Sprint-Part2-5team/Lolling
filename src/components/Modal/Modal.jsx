import * as S from './Modal.styled';
import ProfileImage from '../ProfileImage/ProfileImage';
import Badge from '../Badge/Badge';
import Button from '../Button/Button';

function Modal({ image, name, badgeName, date, content, onClick }) {
  return (
    <S.Layout>
      <S.HeaderContainer>
        <S.HeaderInner>
          <S.UserProfileContainer>
            <ProfileImage image={image} />
            <S.UserProfileTextContainer>
              <S.UserProfileNameContainer>
                <S.UserProfileTextBox>From.</S.UserProfileTextBox>
                <S.UserProfileNameBox>{name}</S.UserProfileNameBox>
              </S.UserProfileNameContainer>
              <Badge name={badgeName} />
            </S.UserProfileTextContainer>
          </S.UserProfileContainer>
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
