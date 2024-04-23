import React from 'react';
import * as S from './NotFoundPage.styled';
import Button from '../../components/Button/Button';

export default function NotFoundPage() {
  return (
    <S.Layout>
      <S.InnerContainer>
        <S.Box>
          <S.Title>404</S.Title>
          <S.Content>
            <b>
              죄송합니다. <S.MobileBr />
              페이지를 찾을 수 없습니다.
            </b>
            존재하지 않는 주소를 입력하셨거나
            <br />
            요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
          </S.Content>
          <Button
            to='/'
            text={'홈으로'}
            variant={'primary'}
            size={56}
            width={'100%'}
          />
        </S.Box>
      </S.InnerContainer>
    </S.Layout>
  );
}
