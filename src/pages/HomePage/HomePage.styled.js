import styled from 'styled-components';
import { ReactComponent as CardImageSvg } from '../../assets/images/card.svg';

export const HomePageLayout = styled.div`
  background: #fff;
  display: flex;
  padding-bottom: 35px;

  @media (max-width: 1248px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 49px;
    padding: 49px 0 24px;
  }
  @media (max-width: 768px) {
    gap: 0;
    padding: 42px 0 24px;
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
    padding-bottom: 24px;
  }

  @media (max-width: 768px) {
    padding: 0;
    gap: 24px;
  }
`;

export const FirstContainer = styled.div`
  display: flex;
  padding: 60px 0px 60px 60px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 152px;
  border-radius: 16px;
  background: var(--surface, #f6f8ff);
  margin-top: 60px;

  @media (max-width: 1248px) {
    width: 100%;
    border-radius: 16px;
    background: var(--surface, #f6f8ff);
    flex-direction: column;
    gap: 0;
    justify-content: center;
    padding: 40px;
    margin-top: 0;
  }

  @media (max-width: 768px) {
    padding: 0 0 20px;
    align-items: center;
    overflow: hidden;
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
    margin-bottom: 57px;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    padding: 24px 24px 0 24px;
  }
`;

export const PointBox = styled.div`
  display: flex;
  padding: 6px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: var(--purple-600, #9935ff);

  @media (max-width: 1248px) {
    display: flex;
    padding: 6px 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 768px) {
    display: flex;
    padding: 4px 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

export const PointContentBox = styled.p`
  color: var(--white, #fff);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.07px;

  @media (max-width: 1248px) {
    color: var(--white-color, #fff);
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.07px;
  }

  @media (max-width: 768px) {
    color: var(--white-color, #fff);
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.07px;
  }
`;

export const Content1 = styled.p`
  color: var(--gray-900, #181818);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.24px;
  margin-top: 16px;
  white-space: normal;

  @media (max-width: 1248px) {
    color: var(--gray-900, #181818);
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -0.24px;
  }

  @media (max-width: 768px) {
    width: 100%;
    color: var(--gray-900, #181818);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.18px;
    white-space: normal;
  }
`;

export const BrBox = styled.br`
  display: block;

  @media (max-width: 1248px) {
    display: inline-block;
    margin-right: 8px;
  }
`;

export const Content2 = styled.p`
  color: var(--gray-500, #555);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.18px;
  margin-top: 8px;

  @media (max-width: 1248px) {
    color: var(--gray-500, #555);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: -0.18px;
  }

  @media (max-width: 768px) {
    color: var(--gray-500, #555);
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.15px;
    white-space: normal;
    width: 100%;
  }
`;

export const CardImageBox = styled(CardImageSvg)`
  display: flex;
  width: 720px;
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

  @media (max-width: 768px) {
    width: 115%;
    padding: 0;
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  padding: 60px 192px 60px 0px;
  align-items: flex-start;
  border-radius: 16px;
  background: var(--surface, #f6f8ff);
  gap: 125px;
  margin-bottom: 24px;

  @media (max-width: 1248px) {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    gap: 0;
    padding: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin-bottom: 31px;
    gap: 0;
  }
`;

export const GroupImageBox = styled.img`
  width: 470px;
  flex-shrink: 0;
  margin-left: 125px;

  @media (max-width: 1248px) {
    width: 470px;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 82%;
    margin-bottom: 51px;
  }
`;

export const ContentBox = styled.p`
  color: #000;
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
    margin-bottom: 36px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 48px;
    padding: 24px 0 0 24px;
  }
`;

export const ButtonContainer = styled.div`
  width: 280px;
  margin: 0 auto;
  @media (max-width: 1248px) {
    width: 100%;
  }
`;
