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
  background: var(--gray-500: #555555);
  cursor: pointer;

  &:disabled {
    background: var(--gray-300: #cccccc);
  }

  &:hover {
    background: var(--gray-600: #4a4a4a);
  }

  &:active {
    background: var(--gray-600: #4a4a4a);
  }

  &:focus {
    background: var(--gray-700: #3a3a3a);
    border: 1px solid var(--gray-800: #2b2b2b);
  }
`;
