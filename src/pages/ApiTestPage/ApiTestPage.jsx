import useAsync from '../../hooks/useAsync';
import { getCardFolderListRequest } from '../../apis/api';
import { createCardFolderRequest } from '../../apis/api';
import { useState } from 'react';
import * as S from './ApiTestPage.styled.js';

const INIT_CREATE_ROLL_PAPER = {
  userName: '',
  backgroundColor: '',
};

const INIT_CREATE_MESSAGE = {
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
      <S.FormContainer onSubmit={createPaper}>
        <label>
          <input
            name="userName"
            value={rollPaperBody.userName}
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
            value={rollPaperBody.backgroundColor}
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

export default function ListPage() {
  const [paperList, setPaperList] = useState();
  const [messageBody, setMessageBody] = useState(INIT_CREATE_MESSAGE);
  const { requestFunction: getCardFolder } = useAsync(getCardFolderListRequest);

  const getRequest = async () => {
    const result = await getCardFolder();
    if (!result) return;
    setPaperList(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRequest();
  };

  return (
    <S.TestLayout>
      <h4>리스폰스 확인은 네트워크 페이지에서</h4>
      <div className="getPaperList">
        <form>
          <h4>롤링 페이퍼 가져오기</h4>
          <button type="button" onClick={handleSubmit}>
            클릭
          </button>
        </form>
      </div>
      <div className="postMessage">
        <form>
          <h4>유저에게 메시지 보내기</h4>
          <input name="sender" placeholder="보내는 사람" />
          <input name="profileImageURL" placeholder="프로필 이미지" />
          <input name="relationship" placeholder="관계" />
          <textarea name="content" placeholder="내용" />
          <select name="font">
            <option value="Noto Sans">Noto Sans</option>
          </select>
          <button>보내기</button>
        </form>
      </div>
      <div className="getMessage">
        <form>
          <h4>유저가 받은 메세지 조회</h4>
          <input placeholder="id를 입력하세요" />
          <button>조회</button>
        </form>
      </div>
      <div>
        <form>
          <h4></h4>
        </form>
      </div>
      <PostPage />
    </S.TestLayout>
  );
}
