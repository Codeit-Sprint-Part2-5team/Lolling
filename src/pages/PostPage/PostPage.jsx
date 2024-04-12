import React from 'react';
import Inner from '../../components/Inner/Inner';
import * as S from './PostPage.styled';
import ColorOption from '../../components/ColorOption/ColorOption';

export default function PostPage() {
  const temp = {
    color: 'var(--green-200)',
  };
  return (
    <S.PostPageLayout>
      <Inner>
        <ColorOption color={temp.color} />
      </Inner>
    </S.PostPageLayout>
  );
}
