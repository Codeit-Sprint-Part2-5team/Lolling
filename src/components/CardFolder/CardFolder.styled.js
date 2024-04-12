import styled from 'styled-components';

export const CardFolderLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 275px;
  height: 260px;
  padding: 30px 24px 20px 24px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10%;
  object-fit: cover;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  background: ${({ $background }) => $background};
`;

export const UserInfoContainer = styled.div``;

export const CardUserNameBox = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const CardGuestContainer = styled.div`
  display: flex;
  margin-top: 12px;

  > img {
    border: 1.5px solid var(--white-color);
    margin-right: -10px;
  }
`;

export const WroteCountBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 6px 4px 6px;
  border-radius: 30px;
  background-color: var(--white-color);
  font-size: 12px;
  font-weight: 400;
`;

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