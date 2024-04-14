import { useEffect, useState } from 'react';
import Inner from '../../components/Inner/Inner';
import * as S from './PostPage.styled';
import useAsync from '../../hooks/useAsync';
import {
  createCardFolderRequest,
  getBackgroundImageRequest,
} from '../../apis/api';
import ColorOption from '../../components/ColorOption/ColorOption';
import ToggleButton from '../../components/ToggleButton/ToggleButton';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const INIT_CREATE_ROLL_PAPER = {
  name: '',
  backgroundColor: '',
  backgroundImageURL: null,
};

const BACKGROUND_COLORS = ['beige', 'purple', 'blue', 'green'];

export default function PostPage() {
  const [BACKGROUND_IMAGES, setBACKGROUND_IMAGES] = useState([]);
  const [rollPaperBody, setRollPaperBody] = useState(INIT_CREATE_ROLL_PAPER);
  const [contextSelected, setContextSelected] = useState(BACKGROUND_COLORS);
  const [selected, setSelected] = useState('beige');
  const [isActiveBtn, setActiveBtn] = useState(true);
  const nav = useNavigate();
  const { requestFunction: createRequest } = useAsync(createCardFolderRequest);
  const { requestFunction: getImageRequest } = useAsync(
    getBackgroundImageRequest
  );

  const onChangeInputHandler = (e) => {
    setRollPaperBody({
      ...rollPaperBody,
      [e.target['name']]: e.target.value,
    });
  };

  const onChangeBackgroundHandler = (value) => {
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

  const getImage = async () => {
    const result = await getImageRequest();
    if (!result) return;

    const {
      data: { imageUrls },
    } = result;
    setBACKGROUND_IMAGES(imageUrls);
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
    getImage();
  }, []);

  useEffect(() => {
    if (rollPaperBody.name === '') {
      return setActiveBtn(true);
    }
    return setActiveBtn(false);
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
            <input
              name='name'
              value={rollPaperBody.name}
              onChange={onChangeInputHandler}
              placeholder='받는 사람 이름을 입력해 주세요'
            />
          </S.ToContainer>
          <S.TextContainer>
            <h4>배경화면을 선택해 주세요.</h4>
            <p>컬러를 선택하거나 이미지를 선택할 수 있습니다.</p>
          </S.TextContainer>
          <S.SelectingContainer>
            <ToggleButton
              setContext={setContextSelected}
              left={BACKGROUND_COLORS}
              right={BACKGROUND_IMAGES}
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
