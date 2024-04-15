import styled from 'styled-components';

export const EmojiBadgeLayout = styled.div`
  display: flex;
  padding: 8px 12px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 65px;
  gap: 4px;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
`;

export const EmojiBadgeNumberBox = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
`;
