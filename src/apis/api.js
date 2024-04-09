import axios from 'axios';

const SWAGGER_URL = `https://rolling-api.vercel.app`;

export async function getProfileImageRequest() {
  const response = await axios.get(`${SWAGGER_URL}/profile-images/`);

  if (!response.ok) {
    throw new Error('프로필 이미지 파일을 불러오는데 실패했습니다');
  }

  return response;
}
