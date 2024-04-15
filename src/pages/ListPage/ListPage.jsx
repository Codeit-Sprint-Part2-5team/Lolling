import { useMemo, useState } from 'react';
import Inner from '../../components/Inner/Inner';
import Button from '../../components/Button/Button';
import CardFolder from '../../components/CardFolder/CardFolder';
import CardSlider from '../../components/CardSlider/CardSlider';
import * as S from './ListPage.styled';

export default function ListPage() {
  // 샘플 데이터
  const cardData = [
    { id: 1, content: '카드1', createdAt: '2024-04-16', reactionCount: 5 },
    { id: 2, content: '카드2', createdAt: '2024-04-17', reactionCount: 3 },
    { id: 3, content: '카드3', createdAt: '2024-04-18', reactionCount: 7 },
    { id: 4, content: '카드4', createdAt: '2024-04-19', reactionCount: 1 },
    // { id: 5, content: '카드5', createdAt: '2024-04-20', reactionCount: 9 }
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // 현재 보이는 카드의 인덱스를 상태로 관리

  const sortedCardData = useMemo(() => {
    return [...cardData].sort((a, b) => b.reactionCount - a.reactionCount);
  }, [cardData]);

  return (
    <Inner>
      <S.ListPageLayout>
        <S.HotCardContainer>
          <h4>인기 롤링 페이퍼🔥</h4>
          <S.CardSliderContainer>
            <CardSlider>
              {sortedCardData.map((card, index) => (
                <CardFolder
                  key={card.id}
                  data={card}
                  style={{ display: index === currentIndex ? 'block' : 'none' }}
                />
              ))}
            </CardSlider>
          </S.CardSliderContainer>
        </S.HotCardContainer>
        <S.RecentCardContainer>
          <h4>최근에 만든 롤링 페이퍼⭐️️</h4>
          <S.CardSliderContainer>
            <CardSlider>
              {sortedCardData.map((card, index) => (
                <CardFolder
                  key={card.id}
                  data={card}
                  style={{ display: index === currentIndex ? 'block' : 'none' }}
                />
              ))}
            </CardSlider>
          </S.CardSliderContainer>
        </S.RecentCardContainer>
        <S.ButtonContainer>
          <Button
            variant={'primary'}
            text={'나도 만들어보기'}
            size={56}
            width={'280px'}
          />
        </S.ButtonContainer>
      </S.ListPageLayout>
    </Inner>
  );
}
