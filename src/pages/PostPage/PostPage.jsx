import { useEffect, useState } from 'react';
import Inner from '../../components/Inner/Inner';
import * as S from './PostPage.styled';
import useAsync from '../../hooks/useAsync';
import { createCardFolderRequest } from '../../apis/api';
import ColorOption from '../../components/ColorOption/ColorOption';
import ToggleButton from '../../components/ToggleButton/ToggleButton';
import Button from '../../components/Button/Button';

const INIT_CREATE_ROLL_PAPER = {
  name: '',
  backgroundColor: '',
};

export default function PostPage() {
  const [select, setSelect] = useState('beige');
  const [rollPaperBody, setRollPaperBody] = useState(INIT_CREATE_ROLL_PAPER);
  const { requestFunction: createRequest } = useAsync(createCardFolderRequest);

  const onChangeInputHandler = (e) => {
    setRollPaperBody({
      ...rollPaperBody,
      [e.target['name']]: e.target.value,
    });
  };

  const onChangeBackgroundHandler = (value) => {
    setRollPaperBody({
      ...rollPaperBody,
      backgroundColor: value,
    });
  };

  const createPaper = async (e) => {
    e.preventDefault();
    const result = await createRequest(rollPaperBody);
    if (!result) return;

    console.log(result);
    setRollPaperBody(INIT_CREATE_ROLL_PAPER);
  };

  useEffect(() => {
    onChangeBackgroundHandler(select);
  }, [select]);

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
          <S.BackgroundContainer>
            <h4>배경화면을 선택해 주세요.</h4>
            <p>컬러를 선택하거나 이미지를 선택할 수 있습니다.</p>
          </S.BackgroundContainer>
          <S.SelectingContainer>
            <ToggleButton />
          </S.SelectingContainer>
          <S.SelectingBGContainer>
            <ColorOption
              color={'beige'}
              select={select}
              setSelect={setSelect}
            />
            <ColorOption
              color={'purple'}
              select={select}
              setSelect={setSelect}
            />
            <ColorOption color={'blue'} select={select} setSelect={setSelect} />
            <ColorOption
              color={'green'}
              select={select}
              setSelect={setSelect}
            />
          </S.SelectingBGContainer>
          <Button
            text={'생성하기'}
            width={'100%'}
            variant={'primary'}
            size={56}
          />
        </S.FormContainer>
      </S.PostPageLayout>
    </Inner>
  );
}
