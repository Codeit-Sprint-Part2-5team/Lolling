import styled from 'styled-components';

export const TestLayout = styled.div`
  > div {
    > form {
      > input,
      textarea {
        display: block;
        border: 1px solid var(--black-color);
      }
      > h4 {
        font-size: 40px;
        margin-top: 40px;
      }
    }
  }
`;
