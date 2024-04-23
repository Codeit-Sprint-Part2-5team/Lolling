import React from 'react';
import Inner from '../../components/Inner/Inner';
import * as S from './HomePage.styled';
import GroupImg from '../../assets/images/Group.png';
import Button from '../../components/Button/Button';

export default function HomePage() {
  return (
    <S.HomePageLayout>
      <Inner>
        <S.MainContainer>
          <S.FirstContainer>
            <S.FirstContentContainer>
              <S.PointBox>
                <S.PointContentBox>Point. 01</S.PointContentBox>
              </S.PointBox>
              <S.Content1>
                누구나 손쉽게, 온라인
                <S.BrBox></S.BrBox>
                롤링 페이퍼를 만들 수 있어요
              </S.Content1>
              <S.Content2>로그인 없이 자유롭게 만들어요.</S.Content2>
            </S.FirstContentContainer>
            <S.CardImageBox></S.CardImageBox>
          </S.FirstContainer>
          <S.SecondContainer>
            <S.GroupImageBox src={GroupImg}></S.GroupImageBox>
            <S.SecondContentContainer>
              <S.PointBox>
                <S.PointContentBox>Point. 02</S.PointContentBox>
              </S.PointBox>
              <S.Content1>
                서로에게 이모지로 감정을
                <S.BrBox></S.BrBox>
                표현해보세요
              </S.Content1>
              <S.Content2>롤링 페이퍼에 이모지를 추가할 수 있어요.</S.Content2>
            </S.SecondContentContainer>
          </S.SecondContainer>
          <S.ButtonContainer>
            <Button
              to='/list'
              text={'구경해보기'}
              variant={'primary'}
              size={56}
              width={'100%'}
            />
          </S.ButtonContainer>
        </S.MainContainer>
      </Inner>
    </S.HomePageLayout>
  );
}
