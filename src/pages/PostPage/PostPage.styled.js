import styled from 'styled-components';

export const PostPageLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 200;
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

  @media (max-width: 768px) {
    width: 100%;
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
  grid-template-columns: ${({ $contextSelected }) =>
    $contextSelected === 'BACKGROUND_IMAGES'
      ? 'repeat(5, 1fr)'
      : 'repeat(4, 168px)'};
  gap: 16px;
  width: 100%;
  margin-bottom: 69px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`;

export const UploadImageBox = styled.div`
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
