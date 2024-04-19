import React, { useEffect, useState } from 'react';
import Inner from '../../components/Inner/Inner';
import * as S from './RollingPage.styled';
import Card from '../../components/Card/Card';
import useAsync from '../../hooks/useAsync';
import {
  deleteCardFolderRequest,
  deleteMessageRequest,
  getCardFolderRequest,
  getMessageListRequest,
} from '../../apis/api';
import HeaderService from '../../components/HeaderService/HeaderService';
import Modal from '../../components/Modal/Modal';
import { useNavigate, useParams } from 'react-router-dom';
import convertBackgroundColor from '../../utils/convertBackgroundColor';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import KakaoButton from '../../components/KakaoButton/KakaoButton';

export default function RollingPage({ edit }) {
  const [messageList, setMessageList] = useState();
  const [modal, setModal] = useState();
  const [recipient, setRecipient] = useState();
  const { requestFunction: getMessageList } = useAsync(getMessageListRequest);
  const { requestFunction: getRecipient } = useAsync(getCardFolderRequest);
  const { requestFunction: deleteCardFolder } = useAsync(
    deleteCardFolderRequest
  );
  const { requestFunction: deleteMessageCard } = useAsync(deleteMessageRequest);
  const { userId } = useParams();
  const navigate = useNavigate();
  const [dataLimit, setDataLimit] = useState(8);
  const [isFetching, setIsFetching] = useInfiniteScroll(updateFunctionOnScroll);
  const [messageCount, setMessageCount] = useState();

  function updateFunctionOnScroll() {
    const noMoreData = messageCount && dataLimit - 9 > messageCount;
    if (noMoreData) return;
    setDataLimit((prev) => prev + 9);
    getMessageData(dataLimit);
    setIsFetching(false);
  }

  useEffect(() => {
    updateFunctionOnScroll();
  }, []);

  const getMessageData = async (limit) => {
    const result = await getMessageList(userId, limit);
    if (!result) return;
    const {
      data: { results },
    } = result;
    setMessageList(results);
  };

  const getRecipientsData = async () => {
    const result = await getRecipient(userId);
    if (!result) return;
    const { data } = result;
    setRecipient(data);
    setMessageCount(data.messageCount);
  };

  const deleteAll = async () => {
    await deleteCardFolder(userId);
  };

  const deleteMessage = async (id) => {
    await deleteMessageCard(id);
  };

  useEffect(() => {
    getMessageData();
    getRecipientsData();
  }, []);

  const handleModalClose = () => {
    setModal();
  };

  const background =
    recipient?.backgroundImageURL ||
    convertBackgroundColor(recipient?.backgroundColor);

  const handleDeleteAll = () => {
    deleteAll();
    navigate('/');
  };

  return (
    <>
      <HeaderService userId={userId} />
      <S.RollingPageLayout $background={background}>
        <Inner>
          <KakaoButton name={recipient?.name} id={recipient?.id} />
          {edit && (
            <S.ButtonBox
              text={'삭제하기'}
              variant={'primary'}
              size={40}
              onClick={handleDeleteAll}
            />
          )}
          <S.CardContainer>
            {!edit && (
              <li>
                <Card add />
              </li>
            )}

            {messageList?.map((item) => (
              <li key={item.id}>
                <Card
                  edit={edit}
                  id={item.id}
                  setModal={setModal}
                  content={item.content}
                  profileImageURL={item.profileImageURL}
                  relationship={item.relationship}
                  sender={item.sender}
                  createdAt={item.createdAt}
                  deleteMessage={deleteMessage}
                  setMessageList={setMessageList}
                />
              </li>
            ))}
          </S.CardContainer>
          {modal && (
            <S.ModalContainer>
              <Modal
                profileImageURL={modal.profileImageURL}
                sender={modal.sender}
                relationship={modal.relationship}
                date={modal.date}
                content={modal.content}
                onClick={handleModalClose}
              />
            </S.ModalContainer>
          )}
        </Inner>
      </S.RollingPageLayout>
    </>
  );
}
