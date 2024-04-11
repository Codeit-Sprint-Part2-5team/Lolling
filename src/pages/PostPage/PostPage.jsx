import { useState } from 'react';
import useAsync from '../../hooks/useAsync';
import { createCardFolderRequest } from '../../apis/api';

const INITIAL_VALUE = {
  userName: '',
  backgroundColor: '',
};

export default function PostPage() {
  const [rollingPaper, setRollingPaper] = useState(INITIAL_VALUE);
  const { requestFunction: createRequest } = useAsync(createCardFolderRequest);

  const onChangeInputHandler = (e) => {
    setRollingPaper({
      ...rollingPaper,
      [e.target['name']]: e.target.value,
    });
  };

  const createPaper = async (e) => {
    e.preventDefault();
    const result = await createRequest(rollingPaper);
    if (!result) return;

    setRollingPaper(INITIAL_VALUE);
  };

  return (
    <S.PostPageLayout>
      <S.FormContainer onSubmit={createPaper}>
        <label>
          <input
            name="userName"
            value={rollingPaper.userName}
            onChange={onChangeInputHandler}
            placeholder="받는 사람 이름을 입력해 주세요"
          />
        </label>
        <h4>배경화면을 선택해 주세요.</h4>
        <p>컬러를 선택하거나 이미지를 선택할 수 있습니다.</p>
        <div>
          <button type="button">컬러</button>
          <button type="button">이미지</button>
        </div>
        <div>
          <select
            name="backgroundColor"
            value={rollingPaper.backgroundColor}
            onChange={onChangeInputHandler}
          >
            <option value="beige">주황</option>
            <option value="purple">보라</option>
            <option value="blue">파랑</option>
            <option value="green">초록</option>
          </select>
        </div>
        <S.Button>생성하기</S.Button>
      </S.FormContainer>
    </S.PostPageLayout>
  );
}
