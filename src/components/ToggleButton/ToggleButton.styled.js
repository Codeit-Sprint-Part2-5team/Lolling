import styled from 'styled-components';

export const ToggleButtonLayout = styled.div`
  width: 244px;
  height: 40px;
  display: flex;
  background: #f6f6f6;
  border-radius: 6px;
`;

export const ToggleButtonSelectedItemBox = styled.div`
  display: flex;
  padding: 7px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 2px solid var(--purple-600);
  background: var(--white-color);
  color: var(--purple-700);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.16px;
  cursor: pointer;
  flex: 1;
`;

export const ToggleButtonLabelItemBox = styled.div`
  display: flex;
  height: 40px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  color: var(--grayscale-900);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;
  cursor: pointer;
  flex: 1;
`;
