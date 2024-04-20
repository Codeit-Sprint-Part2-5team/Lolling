import styled from 'styled-components';
import Button from '../Button/Button';

export const InputContainer = styled.label`
  position: relative;
  width: 100%;
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
