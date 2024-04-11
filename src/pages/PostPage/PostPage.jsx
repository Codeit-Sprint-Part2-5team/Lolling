import React from 'react';
import Inner from '../../components/Inner/Inner';
import * as S from './PostPage.styled';

export default function PostPage() {
  return (
    <S.PostPageLayout>
      <Inner>
        <div>
          <form>
            <h4>To.</h4>
            <input placeholder='받는 사람 이름을 입력해 주세요' />
            <h4>배경화면을 선택해 주세요.</h4>
            <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
            <button>컬러</button>
            <button>이미지</button>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <button>생성하기</button>
          </form>
        </div>
      </Inner>
    </S.PostPageLayout>
  );
}
