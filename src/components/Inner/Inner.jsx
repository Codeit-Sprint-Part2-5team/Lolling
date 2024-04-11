import React from 'react';
import * as S from './Inner.styled';

export default function Inner({ children }) {
  return (
    <S.InnerLayout>
      { children }
    </S.InnerLayout>
  );
}

