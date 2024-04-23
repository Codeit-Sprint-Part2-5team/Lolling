import styled, { css } from 'styled-components';
import ToggleButton from '../../components/ToggleButton/ToggleButton';

export const PostPageLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  padding: 57px 0 130px;
  width: 720px;

  > div {
    > h4 {
      font-size: 24px;
      font-weight: bold;
      line-height: 36px;
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

const FlexMargin = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 50px;
`;

export const FromContainer = styled.div`
  ${FlexMargin}
`;

export const ProfileImageContainer = styled.div`
  ${FlexMargin}
  display: grid;
  grid-template-areas:
    'Title Title'
    'Select Select'
    'Img P'
    'Img Box';
  grid-template-columns: 80px 1fr;
  gap: 12px 32px;
`;

export const ProfileTitle = styled.h4`
  grid-area: Title;
`;

export const StyledToggleButton = styled(ToggleButton)`
  grid-area: Select;
  margin-bottom: 15px;
`;

export const ProfileImg = styled.img`
  grid-area: Img;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

export const ProfileP = styled.p`
  grid-area: P;
  line-height: 26px;
`;

export const ProfileBox = styled.div`
  grid-area: Box;
  display: flex;
  justify-content: space-between;
  position: relative;

  > img {
    cursor: pointer;
    border: 1px solid var(--gray-200);
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 4px 2px;
  }
`;

export const RelationShipContainer = styled.div`
  ${FlexMargin}
`;

export const TextAreaContainer = styled.div`
  ${FlexMargin}
`;

export const FontContainer = styled.div`
  ${FlexMargin}
`;
