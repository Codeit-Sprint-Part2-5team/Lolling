import styled, { keyframes } from 'styled-components';
import spinnerImg from '../../assets/images/Spinner.png';

export const Layout = styled.div`
  max-width: 500px;
  width: calc(100% - 48px);
  height: 476px;
  padding: 40px;
  border-radius: 16px;
  background: var(--white-color);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 256px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 160px;
  height: 160px;
  background-image: url('${spinnerImg}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  animation: ${rotate} 1.5s linear infinite;
`;

export const Text = styled.p`
  color: var(--black-color);
`;
