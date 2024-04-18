import styled from 'styled-components';
import { ReactComponent as CardImageSvg } from '../../assets/images/Card.svg';
import Button from '../../components/Button/Button';

export const HomePageLayout = styled.div`
  background: #fff;
  display: flex;
  padding-bottom: 174px;

  @media (max-width: 1248px) {
    display: flex;
    width: 100%;
    height: 1175px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 49px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (max-width: 1248px) {
    align-items: flex-start;
    width: 100%;
    height: 910px;
    padding-bottom: 24px;
  }
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

  @media (max-width: 1248px) {
    width: 100%;
    height: 440px;
    border-radius: 16px;
    background: var(--Surface, #f6f8ff);
    display: flex;
    flex-direction: column;
    gap: 0;
    justify-content: center;
    padding: 40px;
    margin-top: 0;
  }
`;

export const FirstContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1248px) {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const PointBox = styled.div`
  display: flex;
  padding: 6px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: var(--Purple-600, #9935ff);

  @media (max-width: 1248px) {
    display: flex;
    padding: 6px 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

export const PointContentBox = styled.p`
  color: var(--white, #fff);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.07px;

  @media (max-width: 1248px) {
    color: var(--white, #fff);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.07px;
  }
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

  @media (max-width: 1248px) {
    color: var(--gray-900, #181818);
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -0.24px;
  }
`;

export const BrBox = styled.div`
  display: block;

  @media (max-width: 1248px) {
    display: none;
  }
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

  @media (max-width: 1248px) {
    color: var(--gray-500, #555);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: -0.18px;
  }
`;

export const CardImageBox = styled(CardImageSvg)`
  display: flex;
  width: 720px;
  height: 204px;
  justify-content: center;
  align-items: center;
  padding-right: 40px;

  @media (max-width: 1248px) {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  padding: 60px 192px 60px 0px;
  align-items: flex-start;
  border-radius: 16px;
  background: var(--Surface, #f6f8ff);
  gap: 125px;
  margin-bottom: 24px;

  @media (max-width: 1248px) {
    width: 100%;
    height: 440px;
    display: flex;
    flex-direction: column-reverse;
    gap: 0;
    padding: 0;
  }
`;

export const GroupImageBox = styled.img`
  width: 470px;
  flex-shrink: 0;
  margin-left: 125px;

  @media (max-width: 1248px) {
    width: 470px;
    margin: 36px 125px 40px 125px;
  }
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

  @media (max-width: 1248px) {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px 315px 0 40px;
  }
`;

export const ButtonBox = styled(Button)`
  @media (max-width: 1248px) {
    width: 720px;
    height: 56px;
  }
`;
