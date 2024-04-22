import styled, { css } from 'styled-components';

export const CardFolderLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: space-between;
  width: 275px;
  height: 260px;
  padding: 30px 24px 20px 24px;
  border-radius: 10%;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  overflow: hidden;

  > div {
    z-index: 100;
  }

  ${({ $background }) => {
    if ($background.includes('http')) {
      return `
      background-image: url(${$background});
      background-size: cover;
      background-position: center;
      color: var(--white-color);

        &::after {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.2);
        }
      `;
    }

    const shapeInit = css`
      position: absolute;
      content: '';
    `;

    const beigeShape = css`
      &::after {
        ${shapeInit}
        top: 116px;
        left: 150px;
        width: 500px;
        height: 500px;
        opacity: 0.7;
        border-radius: 51px;
        background-color: #ffd382;
      }
    `;

    const purpleShape = css`
      &::after {
        ${shapeInit}
        width: 336px;
        height: 169px;
        top: 124px;
        left: 133px;
        opacity: 0.4;
        border-radius: 90.5px;
        background-color: #dcb9ff;
      }
    `;

    const greenShape = css`
      &::after {
        ${shapeInit}
        width: 336px;
        height: 169px;
        top: 124px;
        left: 133px;
        opacity: 0.3;
        border-radius: 90.5px;
        background-color: #9be282;
      }
    `;

    const blueShape = css`
      &::after {
        ${shapeInit}
        top: 140px;
        left: 150px;
        width: 202px;
        height: 202px;
        opacity: 0.7;
        border-radius: 51px;
        background-color: #9dddff;
        transform: rotate(45deg);
      }
    `;

    const innerColorShape = css`
      background-color: ${$background};
      border: 1px solid rgba(0, 0, 0, 0.1);
    `;

    switch ($background) {
      case 'var(--orange-200)':
        return css`
          ${innerColorShape}, ${beigeShape}
        `;
      case 'var(--blue-200)':
        return css`
          ${innerColorShape}, ${blueShape}
        `;
      case 'var(--green-200)':
        return css`
          ${innerColorShape}, ${greenShape}
        `;
      case 'var(--purple-200)':
        return css`
          ${innerColorShape}, ${purpleShape}
        `;
      default:
        return css`
          ${innerColorShape}, ${purpleShape}
        `;
    }
  }}
`;

export const UserInfoContainer = styled.div``;

export const CardUserNameBox = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const CardGuestContainer = styled.div``;

export const VisitCountBox = styled.div`
  margin-top: ${({ $nopaper }) => ($nopaper ? 39 : 12)}px;
  font-size: 16px;
`;

export const CardEmojiContainer = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
`;
