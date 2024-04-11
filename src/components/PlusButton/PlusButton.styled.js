import styled from 'styled-components';

const plusButtonBackgroundColor = {
  enabled: '--grayscale-500',
  hover: '--grayscale-600',
  pressed: '--grayscale-700',
  focus: '--grayscale-300',
};

export const PlusButtonLayout = styled.img`
  display: flex;
  width: 56px;
  height: 56px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  background: ${(props) =>
    `var(${plusButtonBackgroundColor[props.plusButtonEvent]})`};
  cursor: pointer;
  border: ${(props) =>
    props.plusButtonEvent === 'focus' ? '1px solid var(--grayscale-800)' : ''};
`;

export const DisabledPlusButtonLayout = styled.img`
  display: flex;
  width: 56px;
  height: 56px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  background: var(--grayscale-300);
`;
