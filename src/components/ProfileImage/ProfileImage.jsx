import * as S from "./ProfileImage.styled";

function ProfileImage({ image, size = "s" }) {
  return <S.ProfileImageLayout src={image} alt='프로필' size={size} />;
}

export default ProfileImage;
