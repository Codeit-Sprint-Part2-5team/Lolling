import useAsync from '../../hooks/useAsync';
import { getCardFolderListRequest } from '../../apis/api';
import { useState } from 'react';
import * as S from './ApiTestPage.styled.js';

export default function ListPage() {
  const { requestFunction: getCardFolder } = useAsync(getCardFolderListRequest);
  const [list, setList] = useState();

  const getRequest = async () => {
    const result = await getCardFolder();
    if (!result) return;

    setList(result);
  };
  console.log(list);

  const handleSubmit = (e) => {
    e.preventDefault();
    getRequest();
  };

  return (
    <S.TestLayout>
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
    </S.TestLayout>
  );
}
