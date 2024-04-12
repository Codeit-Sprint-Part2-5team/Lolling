import React from 'react';
import Inner from '../../components/Inner/Inner';
import * as S from './RollingPage.styled';
import Card from '../../components/Card/Card';

export default function RollingPage() {
  return (
    <S.RollingPageLayout>
      <Inner>
        <S.CardContainer>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
        </S.CardContainer>
      </Inner>
    </S.RollingPageLayout>
  );
}
