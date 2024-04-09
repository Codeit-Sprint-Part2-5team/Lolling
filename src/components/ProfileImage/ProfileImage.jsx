import * as S from './ProfileImage.styled';

function ProfileImage({ image }) {
  return <S.ProfileImageLayout src={image} alt="프로필" size="s" />;
}

export default ProfileImage;
