import { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Inner from '../../components/Inner/Inner';
import Button from '../../components/Button/Button';
import CardFolder from '../../components/CardFolder/CardFolder';
import useAsync from '../../hooks/useAsync';
import * as S from './ListPage.styled';
import { getCardFolderListRequest } from '../../apis/api';
import CardSlider from '../../components/CardSlider/CardSlider'; // CardSlider 추가

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
        {/* 인기 롤링 페이퍼 */}
        <S.CardContainer>
          <S.TextBox>인기 롤링 페이퍼🔥</S.TextBox>
          <CardSlider>
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
          </CardSlider>
        </S.CardContainer>

        {/* 최근에 만든 롤링 페이퍼 */}
        <S.RecentCardContainer>
          <S.TextBox>최근에 만든 롤링 페이퍼⭐️️</S.TextBox>
          <CardSlider>
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
          </CardSlider>
        </S.RecentCardContainer>

        {/* 나도 만들어보기 버튼 */}
        <S.ButtonContainer>
        <Link to="/post">
          <Button
            variant={'primary'}
            text={'나도 만들어보기'}
            size={56}
            width={'280px'}
          />
          </Link>
        </S.ButtonContainer>
      </Inner>
    </S.ListPageLayout>
  );
}
