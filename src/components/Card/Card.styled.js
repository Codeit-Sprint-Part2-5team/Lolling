import styled from 'styled-components';

export const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 384px;
  height: 280px;
  padding: 28px 24px 24px;
  border-radius: 16px;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  background-color: var(--white, #fff);

  ${({ $add }) =>
    $add &&
    `
    justify-content: center;
    align-items: center;
    `}
`;

export const TopContainer = styled.div`
  display: flex;
  gap: 14px;
  width: 100%;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--gray-200, #eee);
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const NameContainer = styled.div`
  display: flex;
  gap: 6px;
  font-size: 20px;
  line-height: 24px;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-top: 16px;
`;

export const ContentBox = styled.p`
  display: -webkit-box;
  width: 100%;
  overflow: hidden;
  font-size: 18px;
  line-height: 28px;
  color: var(--gray-600, #4a4a4a);
  letter-spacing: -0.18px;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const DateBox = styled.p`
  font-size: 12px;
  color: var(--gray-400, #999);
  letter-spacing: -0.06px;
`;