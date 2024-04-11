import styled from 'styled-components';

export const DeleteButtonLayout = styled.img`
  display: inline-flex;
  padding: 6px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid var(--grayscale-300);
  background: var(--white-color)
  cursor: pointer;

  &:disabled {
    background: var(--grayscale-300);
  }

  &:hover {
    background: var(--grayscale-100);
  }

  &:pressed {
    background: var(--grayscale-100);
  }

  &:focus {
    border: 1px solid var(--grayscale-500);
    background: var(--white-color);
  }
`;
