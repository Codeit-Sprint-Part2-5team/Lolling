import { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import CardFolder from '../../components/CardFolder/CardFolder';
import useAsync from '../../hooks/useAsync';
import * as S from './ListPage.styled';
import { getCardFolderListRequest } from '../../apis/api';
import CardSlider from '../../components/CardSlider/CardSlider';

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
      <S.CardInner>
        <S.CardContainer>
          <S.TextBox>인기 롤링 페이퍼🔥</S.TextBox>
          <CardSlider>
            {sortedCardDataByReaction?.map((item) => (
              <Link key={item.id} to={`/post/${item.id}`}>
                <CardFolder
                  name={item.name}
                  backgroundColor={item.backgroundColor}
                  backgroundImageURL={item.backgroundImageURL}
                  messageCount={item.messageCount}
                  topReactions={item.topReactions}
                  recentMessages={item.recentMessages}
                  sort='like'
                />
              </Link>
            ))}
          </CardSlider>
        </S.CardContainer>
        <S.TextBox>최근에 만든 롤링 페이퍼⭐️️</S.TextBox>
        <S.RecentCardContainer>
          <CardSlider>
            {sortedCardDataByCreatedAt.map((item) => (
              <Link key={item.id} to={`/post/${item.id}`}>
                <CardFolder
                  name={item.name}
                  backgroundColor={item.backgroundColor}
                  backgroundImageURL={item.backgroundImageURL}
                  messageCount={item.messageCount}
                  topReactions={item.topReactions}
                  recentMessages={item.recentMessages}
                />
              </Link>
            ))}
          </CardSlider>
        </S.RecentCardContainer>
        <S.ButtonContainer>
          <Link to='/post'>
            <Button
              variant={'primary'}
              text={'나도 만들어보기'}
              size={56}
              width={'280px'}
            />
          </Link>
        </S.ButtonContainer>
      </S.CardInner>
    </S.ListPageLayout>
  );
}
