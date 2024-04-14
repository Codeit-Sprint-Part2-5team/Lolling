import styled, { keyframes } from 'styled-components';

const pending = keyframes`
  50% {
    opacity: 0.2;
  }
`;

export const ColorOptionLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 168px;
  height: 168px;
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s;

  > div {
    display: ${({ $isActive }) => ($isActive ? 'flex' : 'none')};
    z-index: 100;
  }

  &:hover {
    transform: scale(1.1);
  }

  ${({ $background, $pending }) => {
    if ($background.includes('http')) {
      if ($pending) {
        return `animation: ${pending} 1s ease-in-out infinite `;
      }
      return `
      background-image: url(${$background});
      background-size: cover;

      &::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
      }
      `;
    }
    return `
    background-color:${$background};
    border: 1px solid rgba(0, 0, 0, 0.08);
    `;
  }}
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: var(--gray-500);
  border-radius: 50%;
`;
export const CheckIcon = styled.img`
  width: 25px;
`;
