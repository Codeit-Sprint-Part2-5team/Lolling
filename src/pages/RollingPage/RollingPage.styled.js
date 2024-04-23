import styled, { keyframes } from 'styled-components';
import Button from '../../components/Button/Button';

export const RollingPageLayout = styled.div`
  min-height: calc(100vh - 132px);
  padding: 112px 0;
  ${({ $background }) => {
    if ($background.includes('http')) {
      return `
      background-image: url(${$background});
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      `;
    }
    return `
    background-color:${$background};
    `;
  }}

  @media (max-width: 1248px) {
    min-height: calc(100vh - 132px);
    padding: 93px 0 91px;
  }
  @media (max-width: 768px) {
    min-height: calc(100vh - 113px);
    padding: 32px 0;
  }
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

export const DeleteModalBox = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  width: fit-content;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #b6b6b6;
  background: #fff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  font-size: 18px;
  color: var(--gray-600, #4a4a4a);

  @media (max-width: 1248px) {
    justify-content: space-between;
    position: fixed;
    top: unset;
    bottom: 70px;
    left: 24px;
    right: 24px;
    width: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
    padding: 10px;
    font-size: 16px;
    line-height: 130%;
    text-align: center;
  }
`;

export const Br = styled.br`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const CardContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px 24px;
  z-index: 1;

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

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: var(--purple-800);
`;

export const LoadingBox = styled.img`
  display: block;
  width: 50px;
  margin: 50px auto 0;
  animation: ${rotate} 3s infinite linear;
`;
