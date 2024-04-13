import styled from 'styled-components';

const COLORS = {
  지인: {
    background: '--orange-100',
    color: '--orange-500',
  },
  동료: {
    background: '--purple-100',
    color: '--purple-600',
  },
  가족: {
    background: '--green-100',
    color: '--green-500',
  },
  친구: {
    background: '--blue-100',
    color: '--blue-500',
  },
};

export const BadgeLayout = styled.div`
  display: inline-flex;
  padding: 0 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${({ name }) => `var(${COLORS[name].background})`};
  width: fit-content;
`;

export const BadgeTextBox = styled.p`
  color: ${({ name }) => `var(${COLORS[name].color})`};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.07px;
`;
