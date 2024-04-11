import { useEffect, useState } from 'react';
import { getMockImageRequest } from '../../apis/api';
import useAsync from '../../hooks/useAsync';
import ProfileImage from '../ProfileImage/ProfileImage';
import * as S from './Card.styled';
import Badge from '../Badge/Badge';

function Card() {
  const [profileImage, setProfileImage] = useState([]);
  const { requestFunction: getProfileImage } = useAsync(getMockImageRequest);

  const getImage = async () => {
    const result = await getProfileImage();
    if (!result) return;

    const {
      data: { imageUrls },
    } = result;
    setProfileImage(imageUrls[1]);
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <S.CardLayout>
      <S.TopContainer>
        <ProfileImage image={profileImage} size='m' />
        <S.TextContainer>
          <S.NameContainer>
            <span>From.</span> <b>김동훈</b>
          </S.NameContainer>
          <Badge name='동료' />
        </S.TextContainer>
      </S.TopContainer>
      <S.BottomContainer>
        <S.ContentBox>
          코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
          하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심
          또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두
          조심 또 하세요!
        </S.ContentBox>
        <S.DateBox>2023.07.08</S.DateBox>
      </S.BottomContainer>
    </S.CardLayout>
  );
}

export default Card;
