import React, { useEffect, useState } from 'react';
import * as S from './HeaderService.styled';
import Inner from '../Inner/Inner';
import ProfileList from '../ProfileList/ProfileList';
import { getCardFolderRequest } from '../../apis/api';
import EmojiBadge from '../EmojiBadge/EmojiBadge';

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

  if (data) console.log(data.data.name);

  return (
    data && (
      <Inner>
        <S.HeaderServiceLayout>
          <S.HeaderServiceTitleBox>
            To. {data.data.name}
          </S.HeaderServiceTitleBox>
          <S.HeaderServiceContainer>
            <S.HeaderServiceDataContainer>
              <ProfileList recentMessages={data.data.recentMessages} />
              <S.UserCountBox>
                <S.UserCountSpanBox>
                  {data.data.messageCount}
                </S.UserCountSpanBox>
                명이 작성했어요!
              </S.UserCountBox>
            </S.HeaderServiceDataContainer>
            {data.data.topReactions?.map((item) => (
              <EmojiBadge key={item.id} emoji={item.emoji} count={item.count} />
            ))}
          </S.HeaderServiceContainer>
        </S.HeaderServiceLayout>
      </Inner>
    )
  );
}
