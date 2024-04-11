import axios from 'axios';

const API_URL = `https://rolling-api.vercel.app`;
const TEAM_URL = `https://rolling-api.vercel.app/5-5/recipients/`;

export const getMockImageRequest = async () => {
  const response = await axios.get(`${API_URL}profile-images/`);
  if (response.status < 200 || response.status >= 300) {
    throw new Error('프로필 이미지 가져오기 실패');
  }

  console.log(response);
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
  console.log(response);
  return response;
};

export const getCardFolderListRequest = async () => {
  const response = await axios.get(`${TEAM_URL}`);

  if (response.status < 200 || response.status >= 300) {
    throw new Error('롤링 페이퍼 정보 가져오기 실패');
  }
  console.log(response);
  return response;
};

export const getMessageRequest = async (id) => {
  const response = await axios.get(`${TEAM_URL}${id}/messages`);

  if (response.status < 200 || response.status >= 300) {
    throw new Error('롤링 페이퍼 정보 가져오기 실패');
  }
  console.log(response);
  return response;
};

export const createMessageRequest = async (id, body) => {
  const { sender, profileImageURL, relationship, content, font } = body;

  const response = await axios({
    method: 'post',
    url: `${TEAM_URL}${id}/messages`,
    data: {
      sender: sender,
      profileImageURL: profileImageURL,
      relationship: relationship,
      content: content,
      font: font,
    },
  });
  if (response.status < 200 || response.status >= 300) {
    throw new Error('롤링 페이퍼 정보 가져오기 실패');
  }
  console.log(response);
  return response;
};
