import styled from 'styled-components';
import { ReactComponent as CardImageSvg } from '../../assets/images/card.svg';
import { ReactComponent as ArrowDownSvg } from '../../assets/images/ArrowDownIcon.svg';
import { ReactComponent as SmileIconSvg } from '../../assets/images/EmojiSmile.svg';
import { ReactComponent as CursorIconSvg } from '../../assets/images/Cursor.svg';

export const HomePageLayout = styled.div`
  background: #fff;
  display: flex;
`;

export const MainContainer = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const FirstContainer = styled.div`
  display: flex;
  padding: 60px 0px 60px 60px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 152px;
  border-radius: 16px;
  background: var(--Surface, #f6f8ff);
`;

export const FirstContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const PointBox = styled.div`
  display: flex;
  padding: 6px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: var(--Purple-600, #9935ff);
`;

export const PointContentBox = styled.p`
  color: var(--white, #fff);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.07px;
`;

export const Content1 = styled.p`
  color: var(--gray-900, #181818);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.24px;
  margin-top: 16px;
  white-space: nowrap;
`;

export const Content2 = styled.p`
  color: var(--gray-500, #555);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.18px;
  margin-top: 8px;
`;

export const CardImageBox = styled(CardImageSvg)`
  display: flex;
  width: 720px;
  height: 204px;
  justify-content: center;
  align-items: center;
`;

export const SecondContainer = styled.div`
  display: flex;
  padding: 60px 192px 60px 0px;
  align-items: flex-start;
  border-radius: 16px;
  background: var(--Surface, #f6f8ff);
  gap: 289.69px;
  margin-bottom: 24px;
`;

export const Container = styled.div`
  width: 444px;
  height: 62px;
  flex-shrink: 0;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Inner = styled.div`
  display: flex;
  gap: 7.27px;
`;
export const SmallEmojiContainer = styled.div`
  display: flex;
  padding: 5.455px 10.909px;
  align-items: flex-start;
  gap: 6px;
  border-radius: 29.091px;
  background: rgba(0, 0, 0, 0.54);
  color: #fff;
  width: fit-content;
  align-items: center;
  justify-content: center;
`;

export const SmallEmojiBox = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 14.545px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.091px;
  width: 15px;
  height: 20px;
`;

export const SmallEmojiCountBox = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 14.545px;
  font-style: normal;
  font-weight: 400;
  line-height: 21.818px;
  letter-spacing: -0.145px;
  width: 15px;
  height: 22px;
`;

export const ArrowDownIconBox = styled(ArrowDownSvg)`
  width: 14.545px;
  height: 14.545px;
  flex-shrink: 0;
  margin: 9.09px;
`;

export const AddIconBox = styled.div`
  display: flex;
  width: fit-content;
  height: 32.727px;
  padding: 5.455px 14.545px;
  justify-content: center;
  align-items: center;
  gap: 0.09px;
  flex-shrink: 0;
  border-radius: 90.909px;
  border: 0.909px solid #dadcdf;
  margin-left: 28.8px;
`;

export const SmileIconBox = styled(SmileIconSvg)`
  width: 21.818px;
  height: 21.818px;
`;

export const ContentBox = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 14.545px;
  font-style: normal;
  font-weight: 500;
  line-height: 21.818px;
`;

export const CursorIconBox = styled(CursorIconSvg)`
  width: 33px;
  height: 33px;
  flex-shrink: 0;
  margin: 23px 21.91px 6px 4.09px;
`;

export const SecondContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  white-space: nowrap;
`;
