import styled from 'styled-components';

export const ColorOptionLayout = styled.div``;

export const ColorBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 168px;
  height: 168px;
  border-radius: 16px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s;

  > div {
    display: ${({ $isActive }) => ($isActive ? 'flex' : 'none')};
  }

  &:hover {
    transform: scale(1.1);
  }

  ${({ $background }) => {
    if ($background.includes('http')) {
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
    return `background-color:${$background}`;
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
export const CheckImg = styled.img`
  width: 25px;
`;