import styled from 'styled-components';

export const AddButtonLayout = styled.img`
  display: flex;
  width: 56px;
  height: 56px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  background: var(--grayscale-500: #555555);
  cursor: pointer;

  &:disabled {
    background: var(--grayscale-300: #cccccc);
  }

  &:hover {
    background: var(--grayscale-600: #4a4a4a);
  }

  &:active {
    background: var(--grayscale-600: #4a4a4a);
  }

  &:focus {
    background: var(--grayscale-700: #3a3a3a);
    border: 1px solid var(--grayscale-800: #2b2b2b);
  }
`;
