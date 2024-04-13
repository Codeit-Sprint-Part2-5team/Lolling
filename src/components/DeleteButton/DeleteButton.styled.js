import styled from 'styled-components';

export const DeleteButtonLayout = styled.button`
  display: inline-flex;
  padding: 6px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid var(--gray-300, #cccccc);
  background: var(--white-color, #ffffff);
  cursor: pointer;

  &:hover {
    background: var(--gray-100, #f6f6f6);
  }

  &:active {
    background: var(--gray-100, #f6f6f6);
  }

  &:focus {
    border: 1px solid var(--gray-500, #555555);
    background: var(--white-color, #fffff);
  }

  &:disabled {
    background: var(--gray-300, #cccccc);
  }
`;

export const DeleteButtonItemBox = styled.img`
  width: 24px;
  height: 24px;
`;
