import styled from 'styled-components';

export const RollingPageLayout = styled.div`
  padding: 113px 0 246px;
  background: var(--Orange-200, #ffe2ad);
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
