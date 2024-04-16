import styled from 'styled-components';

export const CardFolderLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: space-between;
  width: 275px;
  height: 260px;
  padding: 30px 24px 20px 24px;
  border-radius: 10%;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  overflow: hidden;

  > div {
    z-index: 100;
  }

  ${({ $background }) => {
    if ($background.includes('http')) {
      return `
      background-image: url(${$background});
      background-size: cover;
      color: var(--white-color);

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
    border: 1px solid rgba(0, 0, 0, 0.1);
    `;
  }}
`;

export const UserInfoContainer = styled.div``;

export const CardUserNameBox = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const CardGuestContainer = styled.div``;

export const VisitCountBox = styled.div`
  margin-top: 12px;
  font-size: 16px;
`;

export const CardEmojiContainer = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
`;
