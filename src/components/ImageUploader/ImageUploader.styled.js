import styled, { keyframes } from 'styled-components';
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

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled.img`
  display: block;
  width: 30px;
  animation: ${rotate} 3s infinite linear;
`;
