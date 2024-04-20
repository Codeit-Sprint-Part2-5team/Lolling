import styled from 'styled-components';
import Button from '../Button/Button';

export const InputContainer = styled.label`
  position: relative;
  width: 100%;
`;

export const PostInputContainer = styled.label`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 168px;
  height: 168px;
  border-radius: 16px;
  transition: transform 0.3s;
  cursor: pointer;
  background-color: var(--gray-300);

  &:hover {
    transform: scale(1.1);
  }
`;

export const Input = styled.input`
  position: absolute;
  inset: 0 0;
  opacity: 0;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  position: absolute;
  left: -30px;
  top: -50px;
  background-color: var(--white-color, #ffffff);
  cursor: pointer;
`;
