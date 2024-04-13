import React from 'react';
import Inner from '../../components/Inner/Inner';
import * as S from './MessagePage.styled';
import MarkDown from '../../components/TextField/MarkDown';
import Input from '../../components/TextField/Input/Input';
import DropDown from '../../components/TextField/DropDown/DropDown';

export default function MessagePage() {
  return (
    <Inner>
      <S.PostPageLayout>
        <S.FormContainer>
          <S.FromContainer>
            <h4>From.</h4>
            <Input />
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
            <DropDown />
          </S.RelationShipContainer>
          <S.TextAreaContainer>
            <h4>내용을 입력해 주세요</h4>
            <MarkDown />
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
