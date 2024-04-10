import { useEffect, useState } from 'react';
import { getMockImageRequest } from '../../apis/api';
import ProfileImage from '../ProfileImage/ProfileImage';
import useAsync from '../../hooks/useAsync';
import * as S from './CardFolder.styled';
import EmojiBadge from '../EmojiBadge/EmojiBadge';

function CardFolder({
  currentUserReceivedEmojiInfo,
  currentUserVisitorInfo,
  userName = 'Sowon',
  background = 'var(--orange-200)',
}) {
  const [profileImage, setProfileImage] = useState([]);
  const { requestFunction: getProfileImage } = useAsync(getMockImageRequest);

  const getImage = async () => {
    const result = await getProfileImage();
    if (!result) return;

    const {
      data: { imageUrls },
    } = result;
    setProfileImage(imageUrls.slice(-3));
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <S.CardFolderLayout $background={background}>
      <S.UserInfoContainer>
        <S.CardUserNameBox>To. {userName}</S.CardUserNameBox>
        <S.CardGuestContainer>
          {profileImage.map((image, index) => (
            <ProfileImage key={index} image={image} />
          ))}
          {profileImage.length >= 1 ? (
            <S.WroteCountBox>+27</S.WroteCountBox>
          ) : null}
        </S.CardGuestContainer>
        <S.VisitCountBox>30명이 작성했어요!</S.VisitCountBox>
      </S.UserInfoContainer>
      <S.CardEmojiContainer>
        <EmojiBadge />
        <EmojiBadge emoji={'1f44d'} count={'15'} />
        <EmojiBadge emoji={'1f604'} count={'20'} />
      </S.CardEmojiContainer>
    </S.CardFolderLayout>
  );
}

export default CardFolder;
