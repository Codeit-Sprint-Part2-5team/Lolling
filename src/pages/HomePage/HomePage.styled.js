import styled from 'styled-components';
import { ReactComponent as CardImageSvg } from '../../assets/images/card.svg';
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
  margin-top: 60px;
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
  gap: 125px;
  margin-bottom: 24px;
`;

export const GroupImageBox = styled.img`
  width: 470px;
  height: 204px;
  flex-shrink: 0;
  margin-left: 125px;
`;

export const ContentBox = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 14.545px;
  font-style: normal;
  font-weight: 500;
  line-height: 21.818px;
`;

export const SecondContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  white-space: nowrap;
`;
