import styled from 'styled-components';

export const SenderProfileLayout = styled.div`
  display: flex;
  gap: 14px;
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

  @media (max-width: 768px) {
    font-size: 18px;

    & b {
      font-size: 16px;
    }
  }
`;
