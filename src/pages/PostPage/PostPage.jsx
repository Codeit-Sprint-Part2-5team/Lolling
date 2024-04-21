import { useEffect, useState } from 'react';
import Inner from '../../components/Inner/Inner';
import * as S from './PostPage.styled';
import useAsync from '../../hooks/useAsync';
import {
  getBackgroundImageRequest,
  createCardFolderRequest,
  uploadBackgroundImageRequest,
} from '../../apis/api';
import ColorOption from '../../components/ColorOption/ColorOption';
import ToggleButton from '../../components/ToggleButton/ToggleButton';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/TextField/Input/Input';
import ImageUploader from '../../components/ImageUploader/ImageUploader';

const INIT_CREATE_ROLL_PAPER = {
  name: '',
  backgroundColor: '',
  backgroundImageURL: null,
};

const BACKGROUND_COLORS = ['beige', 'purple', 'blue', 'green'];

export default function PostPage() {
  const [backgroundImages, setBackgroundImages] = useState([]);
  const [rollPaperBody, setRollPaperBody] = useState(INIT_CREATE_ROLL_PAPER);
  const [contextSelected, setContextSelected] = useState(BACKGROUND_COLORS);
  const [selected, setSelected] = useState('beige');
  const [isActiveBtn, setActiveBtn] = useState(true);
  const [imageFile, setImageFile] = useState(null);
  const nav = useNavigate();
  const { requestFunction: getBackgroundImage } = useAsync(
    getBackgroundImageRequest
  );
  const { requestFunction: createRequest } = useAsync(createCardFolderRequest);
  const { requestFunction: uploadImageRequest } = useAsync(
    uploadBackgroundImageRequest
  );

  const getBackground = async () => {
    const result = await getBackgroundImage();
    if (!result) return;

    setBackgroundImages(result);
  };

  const onChangeInputHandler = (e) => {
    setRollPaperBody({
      ...rollPaperBody,
      [e.target['name']]: e.target.value,
    });
  };

  const uploadRequest = async () => {
    const url = await uploadImageRequest(imageFile);
    if (!url) return;

    setBackgroundImages([...backgroundImages, url]);
    setImageFile(null);
  };

  const onChangeBackgroundHandler = (value) => {
    /** 이미지를 선택해도 백엔드에선 컬러값을 4가지중 하나를 무조건 받아야 함.
     * backgroundColor만 null값을 허용안함 */
    if (value.includes('http')) {
      return setRollPaperBody({
        ...rollPaperBody,
        backgroundImageURL: value,
      });
    }

    return setRollPaperBody({
      ...rollPaperBody,
      backgroundColor: value,
      backgroundImageURL: null,
    });
  };

  const createPaper = async (e) => {
    e.preventDefault();
    const result = await createRequest(rollPaperBody);
    if (!result) return;

    setRollPaperBody(INIT_CREATE_ROLL_PAPER);

    const {
      data: { id },
    } = result;
    nav(`/post/${id}`);
  };

  useEffect(() => {
    getBackground();
    setContextSelected(BACKGROUND_COLORS);
  }, []);

  useEffect(() => {
    if (contextSelected.length > 4) {
      return setContextSelected(backgroundImages);
    }
    return;
  }, [backgroundImages]);

  useEffect(() => {
    if (!imageFile) return;
    uploadRequest();
  }, [imageFile]);

  useEffect(() => {}, [backgroundImages]);

  useEffect(() => {
    setActiveBtn(rollPaperBody.name === '');
  }, [rollPaperBody]);

  useEffect(() => {
    onChangeBackgroundHandler(selected);
  }, [selected]);

  return (
    <Inner>
      <S.PostPageLayout>
        <S.FormContainer onSubmit={createPaper}>
          <S.ToContainer>
            <h4>To.</h4>
            <Input
              width={'100%'}
              value={rollPaperBody.name}
              name={'name'}
              placeholder={'받는 사람 이름을 입력해 주세요.'}
              onChange={onChangeInputHandler}
            />
          </S.ToContainer>
          <S.TextContainer>
            <h4>배경화면을 선택해 주세요.</h4>
            <p>컬러를 선택하거나 이미지를 선택할 수 있습니다.</p>
          </S.TextContainer>
          <S.SelectingContainer>
            <ToggleButton
              leftName={'컬러'}
              rightName={'이미지'}
              setContext={setContextSelected}
              left={BACKGROUND_COLORS}
              right={backgroundImages}
            />
          </S.SelectingContainer>
          <S.BackgroundContainer>
            {contextSelected.map((item) => (
              <ColorOption
                key={item}
                background={item}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
            {contextSelected === backgroundImages && (
              <ImageUploader
                buttonStyle='addButton'
                setSelected={setSelected}
                imageFile={imageFile}
                setImageFile={setImageFile}
              />
            )}
          </S.BackgroundContainer>
          <Button
            text={'생성하기'}
            width={'100%'}
            variant={'primary'}
            size={56}
            disabled={isActiveBtn}
          />
        </S.FormContainer>
      </S.PostPageLayout>
    </Inner>
  );
}
