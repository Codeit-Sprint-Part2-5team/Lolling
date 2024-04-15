import styled from 'styled-components';

export const ListPageLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > div {
    > h4 {
      font-size: 24px;
      font-weight: bold;
      line-height: 36px;
    }
  }
`;

export const HotCardContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
  margin-top: 20px;
  margin-bottom: 20px; 
  width: 100%; 
  gap: 5px;
`;

export const RecentCardContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
  width: 100%; 
  gap: 5px;
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  // flex-shrink: 0;
  // margin: 0 10px 0 0;
`;

export const CardSliderContainer = styled.div`
  display: flex;
  overflow-x: auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; 
  margin-top: 20px;
`;
