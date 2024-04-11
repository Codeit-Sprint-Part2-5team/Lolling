import axios from 'axios';

const API_URL = `https://rolling-api.vercel.app`;
const TEAM_URL = `https://rolling-api.vercel.app/5-5/recipients/`;

export const getMockImageRequest = async () => {
  const response = await axios.get(`${API_URL}profile-images/`);
  if (response.status < 200 || response.status >= 300) {
    throw new Error('프로필 이미지 가져오기 실패');
  }

  return response;
};

export const createCardFolderRequest = async ({
  userName,
  backgroundColor,
}) => {
  const response = await axios({
    method: 'post',
    url: `${TEAM_URL}`,
    data: {
      name: userName,
      backgroundColor: backgroundColor,
    },
  });

  if (response.status < 200 || response.status >= 300) {
    throw new Error('롤링 페이퍼 생성 실패');
  }

  return response;
};

export const getCardFolderListRequest = async () => {
  const response = await axios.get(`${TEAM_URL}`);

  if (response.status < 200 || response.status >= 300) {
    throw new Error('롤링 페이퍼 정보 가져오기 실패');
  }

  return response;
};

export const getMessageListRequest = async (id) => {
  const response = await axios.get(`${TEAM_URL}${id}/messages/`);

  if (response.status < 200 || response.status >= 300) {
    throw new Error('롤링 페이퍼 정보 가져오기 실패');
  }

  return response;
};

export const createMessageRequest = async (body, id = 5777) => {
  const { sender, relationship, content, font } = body;

  const response = await axios({
    method: 'post',
    url: `${TEAM_URL}${id}/messages/`,
    data: {
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
    url: `${TEAM_URL}${id}/`,
  });

  if (response.status < 200 || response.status >= 300) {
    throw new Error('롤링 페이퍼 삭제 실패');
  }

  return response;
};

export const deleteCardFolderRequest = async (id) => {
  const response = await axios({
    method: 'delete',
    url: `${TEAM_URL}${id}/`,
  });

  if (response.status < 200 || response.status >= 300) {
    throw new Error('롤링 페이퍼 삭제 실패');
  }

  return response;
};
