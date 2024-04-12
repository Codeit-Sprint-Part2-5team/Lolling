import styled from 'styled-components';

export const PostPageLayout = styled.div`
  padding-top: 57px;
`;

export const FormContainer = styled.div`
  > div {
    > h4 {
      font-size: 24px;
      font-weight: bold;
    }

    > p {
      color: var(--gray-500, #555555);
    }

    > input {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid var(--gray-300, #cccccc);
      border-radius: 8px;
    }
  }
`;

export const ToContainer = styled.div`
  margin-bottom: 50px;
`;

export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 24px;
`;

export const SelectingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  margin-bottom: 45px;

  > button {
    width: 122px;
    padding: 8px 16px;
    cursor: pointer;
    background-color: var(--gray-100, #f6f6f6);
    &:first-child {
      border-radius: 6px 0 0 6px;
    }
    &:last-child {
      border-radius: 0 6px 6px 0;
    }

    &:hover,
    &:active {
      border: 2px solid var(--purple-600);
      border-radius: 6px;
      background-color: var(--white-color);
      color: var(--purple-700);
      font-weight: 700;
    }
  }
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 15px 0;
  border-radius: 10px;
  background-color: var(--purple-600, #9935ff);
  color: var(--white-color);
  cursor: pointer;

  &:active {
    background-color: var(--purple-600);
  }
`;
