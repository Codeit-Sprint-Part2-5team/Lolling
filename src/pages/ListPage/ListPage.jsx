import { useMemo, useState, useEffect } from 'react';
import Inner from '../../components/Inner/Inner';
import Button from '../../components/Button/Button';
import CardFolder from '../../components/CardFolder/CardFolder';
import useAsync from '../../hooks/useAsync';
import * as S from './ListPage.styled';
import { getCardFolderListRequest } from '../../apis/api';

export default function ListPage() {
  const [cardDataList, setCardDataList] = useState([]);
  const { requestFunction: getCardDataList } = useAsync(
    getCardFolderListRequest
  );

  useEffect(() => {
    const getData = async () => {
      const result = await getCardDataList(5788);
      if (result && result.data && result.data.results) {
        setCardDataList(result.data.results);
      }
    };
    getData();
  }, [getCardDataList]);

  const sortedCardDataByReaction = useMemo(() => {
    return [...cardDataList].sort((a, b) => b.reactionCount - a.reactionCount);
  }, [cardDataList]);

  const sortedCardDataByCreatedAt = useMemo(() => {
    return [...cardDataList].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }, [cardDataList]);

  return (
    <S.ListPageLayout>
      <Inner>
        <S.CardContainer>
          <S.TextBox>인기 롤링 페이퍼🔥</S.TextBox>
          {/* <S.CardSlider + CardList 포함하는 컴포넌트 만들기>
          <CardSlider /> */}
          <S.CardList>
            {sortedCardDataByReaction.map((card) => (
              <CardFolder
                key={card.id}
                name={card.name}
                backgroundColor={card.backgroundColor}
                backgroundImageURL={card.backgroundImageURL}
                messageCount={card.messageCount}
                topReactions={card.topReactions}
                recentMessages={card.recentMessages}
                sort='like'
              />
            ))}
          </S.CardList>
        </S.CardContainer>
        <S.RecentCardContainer>
          <S.TextBox>최근에 만든 롤링 페이퍼⭐️️</S.TextBox>
          <S.CardList>
            {sortedCardDataByCreatedAt.map((card) => (
              <CardFolder
                key={card.id}
                name={card.name}
                backgroundColor={card.backgroundColor}
                backgroundImageURL={card.backgroundImageURL}
                messageCount={card.messageCount}
                topReactions={card.topReactions}
                recentMessages={card.recentMessages}
              />
            ))}
          </S.CardList>
        </S.RecentCardContainer>
        <S.ButtonContainer>
          <Button
            variant={'primary'}
            text={'나도 만들어보기'}
            size={56}
            width={'280px'}
          />
        </S.ButtonContainer>
      </Inner>
    </S.ListPageLayout>
  );
}
