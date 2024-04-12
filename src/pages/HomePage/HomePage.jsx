import React from 'react';
import Inner from '../../components/Inner/Inner';
import * as S from './HomePage.styled';

export default function HomePage() {
  return (
    <S.HomePageLayout>
      <Inner>HomePage</Inner>
    </S.HomePageLayout>
  );
}
