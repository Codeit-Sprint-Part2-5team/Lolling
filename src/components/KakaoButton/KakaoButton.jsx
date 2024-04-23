import React, { useEffect } from 'react';
import * as S from './KakaoButton.styled';

const { Kakao } = window;

export default function KakaoButton({ name, id }) {
  const realUrl = `https://5rolling.netlify.app/post/${id}`;

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('078e480e2602fab08071f90f6fc7425a');
  }, []);

  const shareKakao = (e) => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Rolling',
        description: `${name}님의 롤링페이퍼입니다`,
        imageUrl:
          'https://5rolling.netlify.app/static/media/logo.c1f18ffcdc76df4e2e28b644ee3ae6fb.svg',
        link: {
          mobileWebUrl: realUrl,
          webUrl: realUrl,
        },
      },
      buttons: [
        {
          title: '롤링페이퍼 확인하기',
          link: {
            mobileWebUrl: realUrl,
            webUrl: realUrl,
          },
        },
      ],
    });
  };

  return (
    <S.KakaoSharedButtonLayout onClick={shareKakao}>
      카카오톡 공유
    </S.KakaoSharedButtonLayout>
  );
}
