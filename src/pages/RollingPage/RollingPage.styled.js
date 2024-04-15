import styled from 'styled-components';

export const RollingPageLayout = styled.div`
  min-height: calc(100vh - 146px);
  padding: 113px 0 246px;
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

export const CardContainer = styled.ul`
  display: flex;
  gap: 28px 24px;
  flex-wrap: wrap;
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
