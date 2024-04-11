import styled from 'styled-components';

export const PlusButtonLayout = styled.img`
  display: flex;
  width: 56px;
  height: 56px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  background: var(--grayscale-500);
  cursor: pointer;

  &:disabled {
    background: var(--grayscale-300);
  }

  &:hover {
    background: var(--grayscale-600);
  }

  &:active {
    background: var(--grayscale-700);
  }

  &:focus {
    background: var(--grayscale-700);
    border: 1px solid var(--grayscale-800);
  }
`;
