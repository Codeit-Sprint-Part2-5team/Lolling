import axios from 'axios';

const SWAGGER_URL = `https://rolling-api.vercel.app`;

export const getProfileImageRequest = async () => {
  const response = await axios.get(`${SWAGGER_URL}/profile-images/`);

  if (response.status < 200 || response.status >= 300) {
    throw new Error('프로필 이미지 가져오기 실패');
  }

  return response;
};
