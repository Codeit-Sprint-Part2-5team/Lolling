import styled from 'styled-components';

export const InnerLayout = styled.div`
  position: relative;
  max-width: 1200px;
  width: calc(100% - 48px);
  margin: 0 auto;

  @media (max-width: 768px) {
    width: calc(100% - 40px);
  }
`;
