import styled from 'styled-components';

export const PostPageLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  padding: 57px 0;
  width: 720px;

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
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 50px;
  > h4 {
    line-height: 42px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 24px;

  > h4 {
    line-height: 36px;
  }

  > p {
    line-height: 26px;
  }
`;

export const SelectingContainer = styled.div`
  margin-bottom: 45px;
`;

export const BackgroundContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 168px);
  gap: 16px;
  width: 100%;
  margin-bottom: 69px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`;
