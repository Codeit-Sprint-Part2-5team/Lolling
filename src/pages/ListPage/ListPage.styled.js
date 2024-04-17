import styled from 'styled-components';

export const CardContainer = styled.div`
// 인기순 카드 목록 컨테이너(h 태그 + CardList)
  position: relative;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

export const TextBox = styled.h4`
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  letter-spacing: -0.01em;
`;

export const ListPageLayout = styled.div`
  padding: 20px 0 100px;
  overflow-y: hidden;
`;

export const RecentCardContainer = styled.div`
// 최신순 카드 목록 컨테이너
  margin-top: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;