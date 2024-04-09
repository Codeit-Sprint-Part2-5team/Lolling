import { useEffect, useState } from 'react';
import { getProfileImageRequest } from '../../apis/api';
import ProfileImage from '../ProfileImage/ProfileImage';
import useAsync from '../../hooks/useAsync';
import * as S from './CardFolder.styled';

function CardFolder() {
  const [profileImage, setProfileImage] = useState([]);
  const { requestFunction: getProfileImage } = useAsync(getProfileImageRequest);

  const getImage = async () => {
    const result = await getProfileImage();
    if (!result) return;

    const { imageUrls } = result;
    setProfileImage(imageUrls[0]);
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <S.CardFolderLayout>
      <S.CardUserName>To. Sowon</S.CardUserName>
      <ProfileImage />
      <S.CardEmoji></S.CardEmoji>
    </S.CardFolderLayout>
  );
}

export default CardFolder;
