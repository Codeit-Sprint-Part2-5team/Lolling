import styled from 'styled-components';

export const BadgeLayout = styled.div`
  display: inline-flex;
  padding: 0 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${(props) => `var(${props.backgroundColorVariable})`};
`;

export const BadgeTextBox = styled.p`
  color: ${(props) => `var(${props.colorVariable})`};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.07px;
`;
