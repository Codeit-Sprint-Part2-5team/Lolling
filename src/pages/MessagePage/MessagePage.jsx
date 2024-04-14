import { useState, useEffect } from 'react';
import Inner from '../../components/Inner/Inner';
import * as S from './MessagePage.styled';
import MarkDown from '../../components/TextField/MarkDown';
import Input from '../../components/TextField/Input/Input';
import DropDown from '../../components/TextField/DropDown/DropDown';
import Button from '../../components/Button/Button';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import useAsync from '../../hooks/useAsync';
import { getMockImageRequest } from '../../apis/api';

export default function MessagePage() {
  const [profileImage, setProfileImage] = useState([]);
  const [selected, setSelected] = useState();
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

  useEffect(() => {
    setSelected(profileImage[0]);
  }, [profileImage]);

  return (
    <Inner>
      <S.PostPageLayout>
        <S.FormContainer>
          <S.FromContainer>
            <h4>From.</h4>
            <Input />
          </S.FromContainer>
          <S.ProfileImageContainer>
            <S.ProfileTitle>프로필 이미지</S.ProfileTitle>
            <S.ProfileImg src={selected} />
            <S.ProfileP>프로필 이미지를 선택해주세요!</S.ProfileP>
            <S.ProfileBox>
              {profileImage.map((image) => (
                <ProfileImage
                  key={image}
                  image={image}
                  size={'m'}
                  setSelected={setSelected}
                  selected={selected}
                />
              ))}
            </S.ProfileBox>
          </S.ProfileImageContainer>
          <S.RelationShipContainer>
            <h4>상대와의 관계</h4>
            <DropDown />
          </S.RelationShipContainer>
          <S.TextAreaContainer>
            <h4>내용을 입력해 주세요</h4>
            <MarkDown />
          </S.TextAreaContainer>
          <S.FontContainer>
            <h4>폰트 선택</h4>
            <select>
              <option>Noto Sans</option>
            </select>
          </S.FontContainer>
          <Button
            variant={'primary'}
            text={'생성하기'}
            size={56}
            width={'100%'}
          />
        </S.FormContainer>
      </S.PostPageLayout>
    </Inner>
  );
}
