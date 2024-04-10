import styled from 'styled-components';

export const Layout = styled.div`
  width: 600px;
  height: 476px;
  flex-shrink: 0;
  border-radius: 16px;
  background: var(--white-color);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 599px;
  height: 116px;
  padding-top: 40px;
  gap: 20px;
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 520px;
  height: 56px;
`;

export const UserProfileContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 16px;
`;

export const UserProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

export const UserProfileNameContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;
`;

export const UserProfileTextBox = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const UserProfileNameBox = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

export const DateBox = styled.p`
  color: var(--gray-400, #999);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.07px;
`;

export const DividerBox = styled.div`
  width: 520px;
  height: 1px;
  flex-shrink: 0;
  background: var(--gray-200, #eee);
`;

export const ContentBox = styled.p`
  width: 520px;
  margin-top: 16px;
  height: 256px;
  color: #5a5a5a;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.18px;
  padding-right: 20px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #ccc;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
`;
