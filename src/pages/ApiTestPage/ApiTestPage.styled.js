import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const TestLayout = styled.div`
  > form {
    > input,
    textarea {
      width: 50%;
      display: block;
      border: 1px solid var(--black-color);
    }
    > h4 {
      font-size: 20px;
      color: var(--purple-600);
    }
  }
`;

export const PostPageLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const FormContainer = styled.form`
  width: 700px;
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
