import { useState } from 'react';
import Inner from '../../components/Inner/Inner';
import * as S from './PostPage.styled';
import useAsync from '../../hooks/useAsync';
import { createCardFolderRequest } from '../../apis/api';

const INIT_CREATE_ROLL_PAPER = {
  userName: '',
  backgroundColor: '',
};

export default function PostPage() {
  const [rollPaperBody, setRollPaperBody] = useState(INIT_CREATE_ROLL_PAPER);
  const { requestFunction: createRequest } = useAsync(createCardFolderRequest);

  const onChangeInputHandler = (e) => {
    setRollPaperBody({
      ...rollPaperBody,
      [e.target['name']]: e.target.value,
    });
  };

  const createPaper = async (e) => {
    e.preventDefault();
    const result = await createRequest(rollPaperBody);
    if (!result) return;

    setRollPaperBody(INIT_CREATE_ROLL_PAPER);
  };

  return (
    <S.PostPageLayout>
      <Inner>
        <S.FormContainer onSubmit={createPaper}>
          <h4>To.</h4>
          <input
            name='userName'
            value={rollPaperBody.userName}
            onChange={onChangeInputHandler}
            placeholder='받는 사람 이름을 입력해 주세요'
          />
          <h4>배경화면을 선택해 주세요.</h4>
          <p>컬러를 선택하거나 이미지를 선택할 수 있습니다.</p>
          <S.SelectingContainer>
            <button type='button'>컬러</button>
            <button type='button'>이미지</button>
          </S.SelectingContainer>
          <select
            name='backgroundColor'
            value={rollPaperBody.backgroundColor}
            onChange={onChangeInputHandler}
          >
            <option value='beige'>주황</option>
            <option value='purple'>보라</option>
            <option value='blue'>파랑</option>
            <option value='green'>초록</option>
          </select>
          <S.Button>생성하기</S.Button>
        </S.FormContainer>
      </Inner>
    </S.PostPageLayout>
  );
}
