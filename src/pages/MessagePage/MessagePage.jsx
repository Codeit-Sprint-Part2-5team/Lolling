import { useState, useEffect } from 'react';
import Inner from '../../components/Inner/Inner';
import * as S from './MessagePage.styled';
import MarkDown from '../../components/TextField/MarkDown';
import Input from '../../components/TextField/Input/Input';
import DropDown from '../../components/TextField/DropDown/DropDown';
import Button from '../../components/Button/Button';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import useAsync from '../../hooks/useAsync';
import {
  createMessageRequest,
  getMockImageRequest,
  uploadProfileImageRequest,
} from '../../apis/api';
import { useNavigate, useParams } from 'react-router-dom';
import ImageUploader from '../../components/ImageUploader/ImageUploader';
import LoadingModal from '../../components/LoadingModal/LoadingModal';

const INIT_CREATE_MESSAGE = {
  recipientId: 0,
  sender: '',
  profileImageURL:
    'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png',
  relationship: '친구',
  content: '',
  font: 'Noto Sans',
};

export default function MessagePage() {
  const [messageBody, setMessageBody] = useState(INIT_CREATE_MESSAGE);
  const [profileImage, setProfileImage] = useState([]);
  const [selected, setSelected] = useState('');
  const [isActiveBtn, setActiveBtn] = useState(true);
  const [textareaBody, setTextareaBody] = useState('');
  const [profileContext, setProfileContext] = useState('img');
  const [imageFile, setImageFile] = useState();
  const [isSubmit, setSubmit] = useState(false);
  const { requestFunction: getImageRequest } = useAsync(getMockImageRequest);
  const { pending, requestFunction: getUrl } = useAsync(
    uploadProfileImageRequest
  );
  const { requestFunction: postMessageRequest } =
    useAsync(createMessageRequest);
  const nav = useNavigate();
  const { userId } = useParams();

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

  const urlRequest = async (e) => {
    e.preventDefault();
    setActiveBtn(true);

    if (imageFile) {
      const url = await getUrl(imageFile);

      setMessageBody({
        ...messageBody,
        profileImageURL: url,
      });
    }

    return setSubmit(true);
  };

  const postMessage = async () => {
    if (isSubmit === false) return;
    const result = await postMessageRequest(messageBody);
    if (!result) return;
    setMessageBody(INIT_CREATE_MESSAGE);
    nav(`/post/${userId}`);
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
    if (profileContext === 'upload' && imageFile) {
      const preview = URL.createObjectURL(imageFile);
      return setSelected(preview);
    }
    return setSelected(profileImage[0]);
  }, [profileImage, profileContext]);

  useEffect(() => {
    setMessageBody({
      ...messageBody,
      content: textareaBody,
    });
  }, [textareaBody]);

  useEffect(() => {
    setActiveBtn(messageBody.sender === '' || messageBody.content === '');
  }, [messageBody.sender, messageBody.content]);

  useEffect(() => {
    postMessage();
  }, [isSubmit]);

  useEffect(() => {
    getImage();
    setMessageBody({
      ...messageBody,
      recipientId: Number(userId),
    });
  }, []);

  return (
    <Inner>
      <S.PostPageLayout>
        <S.FormContainer onSubmit={urlRequest}>
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
            <S.StyledToggleButton
              leftName={'이미지'}
              rightName={'업로드'}
              setContext={setProfileContext}
              left={'img'}
              right={'upload'}
            />
            <S.ProfileImg src={selected} />
            <S.ProfileP>자신만의 프로필 이미지를 선택하세요!</S.ProfileP>
            {profileContext === 'img' ? (
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
            ) : (
              <S.ProfileBox>
                <ImageUploader
                  setSelected={setSelected}
                  imageFile={imageFile}
                  setImageFile={setImageFile}
                />
              </S.ProfileBox>
            )}
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
            type={'submit'}
            disabled={isActiveBtn}
            variant={'primary'}
            text={'생성하기'}
            size={56}
            width={'100%'}
          />
          {pending && (
            <S.LoadingModalBox>
              <LoadingModal pending={pending} text={'업로드중..'} />
            </S.LoadingModalBox>
          )}
        </S.FormContainer>
      </S.PostPageLayout>
    </Inner>
  );
}
