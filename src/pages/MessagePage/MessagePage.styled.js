import styled from 'styled-components';
export const PostPageLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  padding-top: 57px;
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

export const FromContainer = styled.div``;
export const ProfileImageContainer = styled.div``;
export const RelationShipContainer = styled.div``;
export const TextAreaContainer = styled.div``;
export const FontContainer = styled.div``;
