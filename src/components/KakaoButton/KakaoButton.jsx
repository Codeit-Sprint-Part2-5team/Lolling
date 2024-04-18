import React, { useEffect } from 'react';
import ThumnailImage from '../../assets/images/share-img.png';

const { Kakao } = window;

export default function KakaoButton({ name }) {
  const realUrl = 'https://5rolling.netlify.app';

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('078e480e2602fab08071f90f6fc7425a');
    console.log(Kakao); // 잘 작동하면 true
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Rolling',
        description: `${name}님의 롤링페이퍼입니다`,
        imageUrl: ThumnailImage,
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: '롤링페이퍼 확인하기',
          link: {
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

  return <button onClick={shareKakao}>카카오톡 공유</button>;
}
