import axios from 'axios';

const API_URL = `https://rolling-api.vercel.app/`;
const RECIPIENTS_URL = `https://rolling-api.vercel.app/5-5/recipients/`;
const MESSAGES_URL = `https://rolling-api.vercel.app/5-5/messages/`;

export const getMockImageRequest = async () => {
  const response = await axios.get(`${API_URL}profile-images/`);
  if (response.status < 200 || response.status >= 300) {
    throw new Error('프로필 이미지 가져오기 실패');
  }

  return response;
};

export const createCardFolderRequest = async ({ name, backgroundColor }) => {
  const response = await axios({
    method: 'post',
    url: `${RECIPIENTS_URL}`,
    data: {
      name: name,
      backgroundColor: backgroundColor,
    },
  });

  if (response.status < 200 || response.status >= 300) {
    throw new Error('롤링 페이퍼 생성 실패');
  }

  return response;
};

export const getCardFolderListRequest = async () => {
  const response = await axios.get(`${RECIPIENTS_URL}`);

  if (response.status < 200 || response.status >= 300) {
    throw new Error('롤링 페이퍼 정보 가져오기 실패');
  }

  return response;
};

export const getCardFolderRequest = async (id) => {
  const response = await axios.get(`${RECIPIENTS_URL}${id}/`);

  if (response.status < 200 || response.status >= 300) {
    throw new Error('유저 페이퍼 페이지 정보 가져오기 실패');
  }

  return response;
};

export const getMessageListRequest = async (id) => {
  const response = await axios.get(`${RECIPIENTS_URL}${id}/messages/`);

  if (response.status < 200 || response.status >= 300) {
    throw new Error('롤링 페이퍼 정보 가져오기 실패');
  }

  return response;
};

export const createMessageRequest = async (body) => {
  const { sender, relationship, content, font, recipientId } = body;

  const response = await axios({
    method: 'post',
    url: `${RECIPIENTS_URL}${recipientId}/messages/`,
    data: {
      recipientId: recipientId,
      sender: sender,
      profileImageURL: 'https://picsum.photos/id/1082/100/100',
      relationship: relationship,
      content: content,
      font: font,
    },
  });

  if (response.status < 200 || response.status >= 300) {
    throw new Error('롤링 페이퍼 정보 가져오기 실패');
  }

  return response;
};

export const deleteMessageRequest = async (id) => {
  const response = await axios({
    method: 'delete',
    url: `${MESSAGES_URL}${id}/`,
  });

  if (response.status < 200 || response.status >= 300) {
    throw new Error('메시지 삭제 실패');
  }

  return response;
};

export const deleteCardFolderRequest = async (id) => {
  const response = await axios({
    method: 'delete',
    url: `${RECIPIENTS_URL}${id}/`,
  });

  if (response.status < 200 || response.status >= 300) {
    throw new Error('롤링 페이퍼 페이지 삭제 실패');
  }

  return response;
};
