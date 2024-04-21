import React from 'react';
import * as S from './Inner.styled';

export default function Inner({ children, className }) {
  return <S.InnerLayout className={className}>{children}</S.InnerLayout>;
}
