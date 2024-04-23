import React, { useEffect } from 'react';
import * as S from './KakaoButton.styled';

const { Kakao } = window;

export default function KakaoButton({
  name,
  id,
  image,
  messageCount,
  topReactions,
}) {
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
        imageUrl: image,
        link: {
          mobileWebUrl: realUrl,
          webUrl: realUrl,
        },
      },
      // itemContent: {
      //   items: [
      //     {
      //       item: '롤링페이퍼 작성 수',
      //       itemOp: messageCount,
      //     },
      //     {
      //       item: '리액션',
      //       itemOp: topReactions.map(
      //         (reaction) => `${reaction.emoji} ${reaction.count}`
      //       ),
      //     },
      //   ],
      // },
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
