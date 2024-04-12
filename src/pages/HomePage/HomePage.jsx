import React from 'react';
import Inner from '../../components/Inner/Inner';
import * as S from './HomePage.styled';

export default function HomePage() {
  return (
    <S.HomePageLayout>
      <Inner>
        <S.MainContainer>
          <S.FirstContainer>
            <S.FirstContentContainer>
              <S.PointBox>
                <S.PointContentBox>Point. 01 </S.PointContentBox>
              </S.PointBox>
              <S.Content1>
                누구나 손쉽게, 온라인
                <br /> 롤링 페이퍼를 만들 수 있어요
              </S.Content1>
              <S.Content2>로그인 없이 자유롭게 만들어요.</S.Content2>
            </S.FirstContentContainer>
            <S.CardImageBox></S.CardImageBox>
          </S.FirstContainer>
        </S.MainContainer>
      </Inner>
    </S.HomePageLayout>
  );
}
