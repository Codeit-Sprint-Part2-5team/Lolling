import styled from 'styled-components';

export const ColorOptionLayout = styled.div``;

export const ColorBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  height: 168px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border: ${({ $select }) =>
    $select ? '2px solid rgba(0, 0, 0, 0.8)' : '1px solid rgba(0,0,0,0.08)'}
  cursor: pointer;
  background-color: ${({ $color }) => $color};

  > div {
    display: none;
  }

  &:hover > div {
    display: flex;
  }
`;
export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: var(--gray-500);
  border-radius: 50%;
`;
export const CheckImg = styled.img`
  width: 25px;
`;
