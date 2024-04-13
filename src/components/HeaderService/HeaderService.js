import React from 'react';
import * as S from './HeaderService.styled';
import Inner from '../Inner/Inner';

export default function HeaderService() {
  return (
    <Inner>
      <S.HeaderServiceLayout>
        <S.HeaderServiceTitleBox>To. Ashley Kim</S.HeaderServiceTitleBox>
        <S.HeaderServiceContainer></S.HeaderServiceContainer>
      </S.HeaderServiceLayout>
    </Inner>
  );
}
