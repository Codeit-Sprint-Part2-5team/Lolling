import { useEffect, useState } from 'react';
import { getMockImageRequest } from '../../apis/api';
import ProfileImage from '../ProfileImage/ProfileImage';
import useAsync from '../../hooks/useAsync';
import * as S from './CardFolder.styled';
import EmojiBadge from '../EmojiBadge/EmojiBadge';

function CardFolder({
  name = 'Sowon',
  backgroundImageURL = 'url(https://picsum.photos/id/24/3840/2160)',
  backgroundColor = 'beige',
  messageCount = 21,
  topReactions,
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
    <S.CardFolderLayout $background={backgroundImageURL || backgroundColor}>
      <S.UserInfoContainer>
        <S.CardUserNameBox>To. {name}</S.CardUserNameBox>
        <S.CardGuestContainer>
          {profileImage.map((image, index) => (
            <ProfileImage key={index} image={image} />
          ))}
          {profileImage.length >= 1 ? (
            <S.WroteCountBox>{`+${messageCount}`}</S.WroteCountBox>
          ) : null}
        </S.CardGuestContainer>
        <S.VisitCountBox>{`${messageCount}명이 작성했어요!`}</S.VisitCountBox>
      </S.UserInfoContainer>
      <S.CardEmojiContainer>
        {topReactions?.map((item) => (
          <EmojiBadge key={item.id} emoji={item.emoji} count={item.count} />
        ))}
      </S.CardEmojiContainer>
    </S.CardFolderLayout>
  );
}

export default CardFolder;
