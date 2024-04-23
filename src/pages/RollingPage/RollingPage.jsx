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
import LoadingIcon from '../../assets/images/loadingIcon.png';
import Button from '../../components/Button/Button';

export default function RollingPage({ edit }) {
  const [messageList, setMessageList] = useState();
  const [modal, setModal] = useState();
  const [recipient, setRecipient] = useState();
  const { pending, requestFunction: getMessageList } = useAsync(
    getMessageListRequest
  );
  const { requestFunction: getRecipient } = useAsync(getCardFolderRequest);
  const { requestFunction: deleteCardFolder } = useAsync(
    deleteCardFolderRequest
  );
  const { requestFunction: deleteMessageCard } = useAsync(deleteMessageRequest);
  const { userId } = useParams();
  const navigate = useNavigate();
  const [dataLimit, setDataLimit] = useState(edit ? 9 : 8);
  const [setIsFetching] = useInfiniteScroll(updateFunctionOnScroll);
  const [messageCount, setMessageCount] = useState();
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const noMoreData = messageCount && dataLimit - 9 > messageCount;

  function updateFunctionOnScroll() {
    if (noMoreData) return;
    setDataLimit((prev) => prev + 9);
    getMessageData(dataLimit);
    setIsFetching(false);
  }

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
    updateFunctionOnScroll();
    getMessageData(edit ? 9 : 8);
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
  console.log(recipient);

  return (
    <>
      <HeaderService
        id={userId}
        name={recipient?.name}
        recentMessages={recipient?.recentMessages}
        messageCount={recipient?.messageCount}
        topReactions={recipient?.topReactions}
        backgroundImageURL={recipient?.backgroundImageURL}
      />
      <S.RollingPageLayout $background={background}>
        <Inner>
          {edit && (
            <S.ButtonBox
              text={'삭제하기'}
              variant={'primary'}
              size={40}
              onClick={() => setIsDeleteModal(true)}
            />
          )}
          {isDeleteModal && (
            <S.DeleteModalBox>
              <span>
                정말로 <b>{recipient.name}</b>님의 롤링페이퍼를 <S.Br />
                삭제하시겠습니까?
              </span>
              <S.ButtonContainer>
                <Button
                  text={'네'}
                  variant={'primary'}
                  size={36}
                  onClick={handleDeleteAll}
                />
                <Button
                  text={'아니오'}
                  variant={'outline'}
                  size={36}
                  onClick={() => setIsDeleteModal(false)}
                />
              </S.ButtonContainer>
            </S.DeleteModalBox>
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
          {pending && <S.LoadingBox src={LoadingIcon} alt='로딩' />}
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
