import React, { useEffect, useState } from 'react';
import * as S from './HeaderService.styled';
import Inner from '../Inner/Inner';
import ProfileList from '../ProfileList/ProfileList';
import { getCardFolderRequest } from '../../apis/api';
import EmojiBadge from '../EmojiBadge/EmojiBadge';
import arrowDownIcon from '../../assets/images/ArrowDownIcon.svg';
import Button from '../Button/Button';
import ShareIcon from '../../assets/images/ShareIcon.svg';

export default function HeaderService() {
  const [data, setData] = useState();

  const getData = async () => {
    const response = await getCardFolderRequest(5788);

    if (!response) return;

    setData(response);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    data && (
      <Inner>
        <S.HeaderServiceLayout>
          <S.HeaderServiceTitleBox>
            To. {data.data.name}
          </S.HeaderServiceTitleBox>
          <S.HeaderServiceContainer>
            <S.HeaderServiceDataContainer>
              <S.HeaderServiceInnerImg>
                <ProfileList recentMessages={data.data.recentMessages} />
              </S.HeaderServiceInnerImg>
              <S.UserCountBox>
                <S.UserCountSpanBox>
                  {data.data.messageCount}
                </S.UserCountSpanBox>
                명이 작성했어요!
              </S.UserCountBox>
            </S.HeaderServiceDataContainer>
            <S.BarItemsInner></S.BarItemsInner>
            <S.EmojiContainer>
              <S.EmojiBadgeContainer>
                <S.EmojiTopThree>
                  {data.data.topReactions?.map((item) => (
                    <EmojiBadge
                      key={item.id}
                      emoji={item.emoji}
                      count={item.count}
                    />
                  ))}
                </S.EmojiTopThree>
                <S.EmojiListButton>
                  <S.EmojiListButtonImg src={arrowDownIcon} alt='이모지 보기' />
                </S.EmojiListButton>
              </S.EmojiBadgeContainer>
              <S.EmojiButtonContainer>
                <Button
                  text={'추가'}
                  variant={'outline'}
                  size={36}
                  isSmileIcon={'on'}
                />
                <S.BarItemsInner></S.BarItemsInner>
                <S.SharedButton>
                  <img src={ShareIcon} alt='공유하기' />
                </S.SharedButton>
              </S.EmojiButtonContainer>
            </S.EmojiContainer>
          </S.HeaderServiceContainer>
        </S.HeaderServiceLayout>
      </Inner>
    )
  );
}
