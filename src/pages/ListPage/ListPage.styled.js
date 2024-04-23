import styled, { keyframes } from 'styled-components';
import Inner from '../../components/Inner/Inner';

export const CardInner = styled(Inner)`
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  position: relative;
  flex-direction: column;
  width: 100%;
`;

export const TextBox = styled.h4`
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  letter-spacing: -0.01em;
  margin-left: 20px;
  margin-top: 50px;
  margin-bottom: 16px;

  @media (max-width: 1248px) {
    margin-left: 24px;
  }

  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;

export const ListPageLayout = styled.div`
  padding-bottom: 57px;
`;

export const RecentCardContainer = styled.div`
  // textbox 제외 컨테이너
  margin-top: 32px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingBox = styled.img`
  display: block;
  width: 30px;
  top: 50%;
  margin: 25% auto;
  animation: ${rotate} 3s infinite linear;
`;
