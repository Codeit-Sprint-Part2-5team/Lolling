import { useState, useEffect } from 'react';
import Inner from '../../components/Inner/Inner';
import * as S from './MessagePage.styled';
import MarkDown from '../../components/TextField/MarkDown';
import Input from '../../components/TextField/Input/Input';
import DropDown from '../../components/TextField/DropDown/DropDown';
import Button from '../../components/Button/Button';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import useAsync from '../../hooks/useAsync';
import { createMessageRequest, getMockImageRequest } from '../../apis/api';
import { useNavigate } from 'react-router-dom';

const INIT_CREATE_MESSAGE = {
  recipientId: 0,
  sender: '',
  profileImageURL:
    'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png',
  relationship: '친구',
  content: '',
  font: 'Noto Sans',
};

export default function MessagePage({ id = 5788 }) {
  const [messageBody, setMessageBody] = useState(INIT_CREATE_MESSAGE);
  const [profileImage, setProfileImage] = useState([]);
  const [selected, setSelected] = useState('');
  const [isActiveBtn, setActiveBtn] = useState(true);
  const [textareaBody, setTextareaBody] = useState('');
  const { requestFunction: getImageRequest } = useAsync(getMockImageRequest);
  const { requestFunction: postMessageRequest } =
    useAsync(createMessageRequest);
  const nav = useNavigate();
  const INIT_DROPDOWN = {
    relationship: ['친구', '지인', '가족', '동료'],
    font: ['Noto Sans', 'Pretendard', '나눔명조', '나눔손글씨 손편지체'],
  };

  const getImage = async () => {
    const result = await getImageRequest();
    if (!result) return;

    const {
      data: { imageUrls },
    } = result;
    setProfileImage(imageUrls);
  };

  const postMessage = async (e) => {
    e.preventDefault();
    const result = await postMessageRequest(messageBody);
    if (!result) return;

    setMessageBody(INIT_CREATE_MESSAGE);

    nav(`/post/${id}`);
  };

  const onChangeInputHandler = (e) => {
    setMessageBody({
      ...messageBody,
      [e.target['name']]: e.target.value,
    });
  };

  const onChangeImageHandler = (value) => {
    setMessageBody({
      ...messageBody,
      profileImageURL: value,
    });
  };

  useEffect(() => {
    setSelected(profileImage[0]);
  }, [profileImage]);

  useEffect(() => {
    setMessageBody({
      ...messageBody,
      content: textareaBody,
    });
    console.log(textareaBody);
  }, [textareaBody]);

  useEffect(() => {
    if (messageBody.sender === '') return setActiveBtn(true);
    if (messageBody.content === '') return setActiveBtn(true);

    return setActiveBtn(false);
  }, [messageBody]);

  useEffect(() => {
    getImage();
    setMessageBody({
      ...messageBody,
      recipientId: id,
    });
  }, []);

  return (
    <Inner>
      <S.PostPageLayout>
        <S.FormContainer onSubmit={postMessage}>
          <S.FromContainer>
            <h4>From.</h4>
            <Input
              width={'100%'}
              placeholder={'이름을 입력해 주세요.'}
              name={'sender'}
              onChange={onChangeInputHandler}
              value={messageBody.sender}
            />
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
                  onChange={onChangeImageHandler}
                />
              ))}
            </S.ProfileBox>
          </S.ProfileImageContainer>
          <S.RelationShipContainer>
            <h4>상대와의 관계</h4>
            <DropDown
              items={INIT_DROPDOWN.relationship}
              type={'relationship'}
              messageBody={messageBody}
              setMessageBody={setMessageBody}
            />
          </S.RelationShipContainer>
          <S.TextAreaContainer>
            <h4>내용을 입력해 주세요</h4>
            <MarkDown
              textareaBody={textareaBody}
              setTextareaBody={setTextareaBody}
            />
          </S.TextAreaContainer>
          <S.FontContainer>
            <h4>폰트 선택</h4>
            <DropDown
              items={INIT_DROPDOWN.font}
              type={'font'}
              messageBody={messageBody}
              setMessageBody={setMessageBody}
            />
          </S.FontContainer>
          <Button
            disabled={isActiveBtn}
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
