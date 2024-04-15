import React, { useEffect, useState } from 'react';
import Inner from '../../components/Inner/Inner';
import * as S from './RollingPage.styled';
import Card from '../../components/Card/Card';
import useAsync from '../../hooks/useAsync';
import {
  getCardFolderListRequest,
  getCardFolderRequest,
  getMessageListRequest,
} from '../../apis/api';
import HeaderService from '../../components/HeaderService/HeaderService';
import Modal from '../../components/Modal/Modal';
import { useParams } from 'react-router-dom';
import convertBackgroundColor from '../../utils/convertBackgroundColor';

export default function RollingPage() {
  const [messageList, setMessageList] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [modal, setModal] = useState();
  const [recipient, setRecipient] = useState();
  const { requestFunction: getMessageList } = useAsync(getMessageListRequest);
  const { requestFunction: getRecipient } = useAsync(getCardFolderRequest);
  const { userId } = useParams();

  const getMessageData = async () => {
    const result = await getMessageList(userId);
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
  };

  useEffect(() => {
    getMessageData();
    getRecipientsData();
  }, []);

  const handleModalClose = () => {
    setModalVisible(false);
    setModal({});
  };

  const background =
    recipient?.backgroundImageURL ||
    convertBackgroundColor(recipient?.backgroundColor);

  return (
    <>
      <HeaderService />
      <S.RollingPageLayout $background={background}>
        <Inner>
          <S.CardContainer>
            <li>
              <Card add />
            </li>
            {messageList?.map((item) => (
              <li key={item.id}>
                <Card
                  setModal={setModal}
                  setModalVisible={setModalVisible}
                  content={item.content}
                  profileImageURL={item.profileImageURL}
                  relationship={item.relationship}
                  sender={item.sender}
                  createdAt={item.createdAt}
                />
              </li>
            ))}
          </S.CardContainer>
          {modalVisible && (
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
