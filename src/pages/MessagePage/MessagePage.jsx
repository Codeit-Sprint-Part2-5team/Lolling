import React from 'react';
import Inner from '../../components/Inner/Inner';
import * as S from './MessagePage.styled';

export default function MessagePage() {
  return (
    <Inner>
      <S.PostPageLayout>
        <S.FormContainer>
          <S.FromContainer>
            <h4>From.</h4>
            <input />
          </S.FromContainer>
          <S.ProfileImageContainer>
            <h4>프로필 이미지</h4>
            <div>
              <div></div>
              <p>프로필 이미지를 선택해주세요!</p>
              <div></div>
            </div>
          </S.ProfileImageContainer>
          <S.RelationShipContainer>
            <h4>상대와의 관계</h4>
            <select>
              <option>지인</option>
            </select>
          </S.RelationShipContainer>
          <S.TextAreaContainer>
            <h4>내용을 입력해 주세요</h4>
            <textarea />
          </S.TextAreaContainer>
          <S.FontContainer>
            <h4>폰트 선택</h4>
            <select>
              <option>Noto Sans</option>
            </select>
          </S.FontContainer>
          <button>생성하기</button>
        </S.FormContainer>
      </S.PostPageLayout>
    </Inner>
  );
}
