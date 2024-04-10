import styled from "styled-components";

export const InputLayout = styled.div``;

export const InputContainer = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 320px;
  height: 50px;
  padding: 12px 16px;
  gap: 10px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  box-sizing: border-box;
  background: #ffffff;
  font-size: 16px;

  &.active {
    border: 2px solid #3a3a3a;
  }

  &.focused {
    border: 2px solid #555555;
  }

  &.button {
    border: 1px solid #555555;
    border-radius: 8px;
  }

  &.disabled {
    border: 1px solid #cccccc;
    border-radius: 8px;
    background: #f6f6f6;
  }

  &.error {
    border-color: #ff0000;
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  bottom: -20px;
  left: 0;
  color: red;
  font-size: 14px;
`;
