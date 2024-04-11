import styled from 'styled-components';

const deleteButtonBackgroundColor = {
  enabled: '--white-color',
  hover: '--grayscale-300',
  pressed: '--grayscale-300',
  focus: '--white-color',
};

export const DeleteButtonLayout = styled.img`
  display: inline-flex;
  padding: 6px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid var(--gray-300, #ccc);
  background: ${(props) =>
    `var(${deleteButtonBackgroundColor[props.deleteButtonEvent]})`};
  cursor: pointer;
  border: ${(props) =>
    props.deleteButtonEvent === 'focus'
      ? '1px solid var(--grayscale-500)'
      : ''};
`;
