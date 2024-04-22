import styled, { keyframes } from 'styled-components';
import LoadingIcon from '../../assets/images/loadingIcon.png';

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContentBox = styled.div``;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 100px;
  height: 100px;
  background-image: url('${LoadingIcon}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  animation: ${rotate} 1.5s linear infinite;
`;

export const Text = styled.p`
  color: var(--black-color);
`;
