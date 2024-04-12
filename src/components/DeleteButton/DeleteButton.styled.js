import styled from 'styled-components';

export const DeleteButtonLayout = styled.img`
  display: inline-flex;
  padding: 6px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid var(--gray-300: #CCCCCC);
  background: var(--white-color: #FFFFFF)
  cursor: pointer;

  &:disabled {
    background: var(--gray-300: #CCCCCC);
  }

  &:hover {
    background: var(--gray-100: #F6F6F6);
  }

  &:active {
    background: var(--gray-100: #F6F6F6);
  }

  &:focus {
    border: 1px solid var(--gray-500: #555555);
    background: var(--white-color: #FFFFFF);
  }
`;
