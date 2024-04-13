import React, { useEffect, useState } from 'react';
import Inner from '../../components/Inner/Inner';
import * as S from './RollingPage.styled';
import Card from '../../components/Card/Card';
import useAsync from '../../hooks/useAsync';
import { getMessageListRequest } from '../../apis/api';
import HeaderService from '../../components/HeaderService/HeaderService';

export default function RollingPage() {
  const [messageList, setMessageList] = useState();
  const { requestFunction: getMessageList } = useAsync(getMessageListRequest);

  const getData = async () => {
    const result = await getMessageList(5788);
    if (!result) return;
    const {
      data: { results },
    } = result;
    setMessageList(results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <HeaderService />
      <S.RollingPageLayout>
        <Inner>
          <S.CardContainer>
            <li>
              <Card add />
            </li>
            {messageList?.map((item) => (
              <li key={item.id}>
                <Card
                  content={item.content}
                  profileImageURL={item.profileImageURL}
                  relationship={item.relationship}
                  sender={item.sender}
                  createdAt={item.createdAt}
                />
              </li>
            ))}
          </S.CardContainer>
        </Inner>
      </S.RollingPageLayout>
    </>
  );
}
