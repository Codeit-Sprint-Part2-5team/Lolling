import styled, { keyframes } from 'styled-components';
import Button from '../../components/Button/Button';

export const RollingPageLayout = styled.div`
  min-height: calc(100vh - 146px);
  padding: 113px 0;
  ${({ $background }) => {
    if ($background.includes('http')) {
      return `
      background-image: url(${$background});
      background-size: cover;
      `;
    }
    return `
    background-color:${$background};
    `;
  }}
`;

export const ButtonBox = styled(Button)`
  position: absolute;
  top: -50px;
  right: 0;

  @media (max-width: 1248px) {
    position: fixed;
    top: unset;
    right: 24px;
    bottom: 24px;
    left: 24px;
    z-index: 1;
  }
`;

export const CardContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px 24px;

  @media (max-width: 1248px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
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
  width: 50px;
  margin: 50px auto 0;
  animation: ${rotate} 2s infinite linear;
`;
