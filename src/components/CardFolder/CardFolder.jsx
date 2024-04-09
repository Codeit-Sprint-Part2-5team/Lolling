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

    const {
      data: { imageUrls },
    } = result;
    setProfileImage(imageUrls);
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <S.CardFolderLayout>
      <S.CardUserName>To. Sowon</S.CardUserName>
      <S.CardGuestContainer>
        {profileImage.map((image) => (
          <ProfileImage image={image} />
        ))}
        <S.VisitCount>30명이 작성했어요!</S.VisitCount>
      </S.CardGuestContainer>
      <S.CardEmoji></S.CardEmoji>
    </S.CardFolderLayout>
  );
}

export default CardFolder;
