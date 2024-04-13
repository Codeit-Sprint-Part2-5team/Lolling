import React, { useEffect, useState } from 'react';
import * as S from './HeaderService.styled';
import Inner from '../Inner/Inner';
import ProfileList from '../ProfileList/ProfileList';
import { getCardFolderListRequest } from '../../apis/api';

export default function HeaderService() {
  const [data, setData] = useState();

  const getData = async () => {
    const response = await getCardFolderListRequest();
    if (!response) return;

    setData(response.data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    data && (
      <Inner>
        <S.HeaderServiceLayout>
          <S.HeaderServiceTitleBox>To. </S.HeaderServiceTitleBox>
          <S.HeaderServiceContainer>
            <ProfileList recentMessages={null} messageCount={21} />
          </S.HeaderServiceContainer>
        </S.HeaderServiceLayout>
      </Inner>
    )
  );
}
