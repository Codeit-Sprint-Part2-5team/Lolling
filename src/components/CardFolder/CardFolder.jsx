import { useEffect, useState } from 'react';
import { getMockImageRequest } from '../../apis/mockApi';
import ProfileImage from '../ProfileImage/ProfileImage';
import useAsync from '../../hooks/useAsync';
import * as S from './CardFolder.styled';

function CardFolder() {
  const [profileImage, setProfileImage] = useState([]);
  const { requestFunction: getProfileImage } = useAsync(getMockImageRequest);

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
      <S.CardUserNameBox>To. Sowon</S.CardUserNameBox>
      <S.CardGuestContainer>
        {profileImage.map((image) => (
          <ProfileImage image={image} />
        ))}
        <S.VisitCountBox>30명이 작성했어요!</S.VisitCountBox>
      </S.CardGuestContainer>
      <S.CardEmojiBox></S.CardEmojiBox>
    </S.CardFolderLayout>
  );
}

export default CardFolder;
