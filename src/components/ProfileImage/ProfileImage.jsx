import * as S from './ProfileImage.styled';

function ProfileImage({ image, size = 's', setSelected, selected }) {
  const onChangeImage = () => {
    setSelected(image);
  };
  return (
    <S.ProfileImageLayout
      src={image}
      alt='프로필'
      size={size}
      onClick={onChangeImage}
    />
  );
}

export default ProfileImage;
