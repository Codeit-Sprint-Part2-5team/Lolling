import styled from 'styled-components';

export const Layout = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  > h4 {
    font-size: 20px;
  }
`;

export const TestLayout = styled.div`
  padding-bottom: 50px;
  border-bottom: 1px solid gray;

  > form {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    > input,
    textarea,
    select {
      width: 100%;
      display: block;
      border: 1px solid var(--black-color);
    }

    > h4 {
      font-size: 20px;
      color: var(--purple-600);
    }
  }
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 15px 0;
  border-radius: 10px;
  background-color: var(--purple-800);
  color: var(--white-color);
  cursor: pointer;

  &:active {
    background-color: var(--purple-600);
  }
`;
