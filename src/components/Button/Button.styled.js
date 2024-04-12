import styled, { css } from 'styled-components';

const ButtonStyle = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-align: center;
  font-family: Pretendard;
`;

export const ButtonLayout = styled.button`
  // 공통 부분
  ${ButtonStyle}
  width: ${({ buttonWidth }) => buttonWidth}px;
  cursor: pointer;

  // Size
  ${({ buttonSize, buttonVariant }) =>
    buttonSize === 56 &&
    `
    height: 56px;
    padding: ${buttonVariant === 'primary' ? '14px 24px' : '14px 16px'};
    border-radius: 12px;
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.18px;
  `}
  ${({ buttonSize }) =>
    buttonSize === 40 &&
    `
    height: 40px;
    padding: 8px 16px;
    flex-shrink: 0;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: -0.16px;
  `}
  ${({ buttonSize }) =>
    buttonSize === 36 &&
    `
    height: 36px;
    padding: 6px 16px;
    flex-shrink: 0;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  `}
  ${({ buttonSize }) =>
    buttonSize === 28 &&
    `
    height: 28px;
    padding: 2px 16px;
    flex-shrink: 0;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.07px;
  `}

  // Variant 
  ${({ buttonVariant }) =>
    buttonVariant === 'primary' &&
    `
    background: var(--purple-600, #9935FF);
    color: var(--white-color, #FFFFFF);

    &:disabled {
      background: var(--gray-300, #CCCCCC);
    }

    &:hover {
      background: var(--purple-700, #861DEE);
    }
    &:active {
      background: var(--purple-800, #6E0AD1);
    }
    &:focus {
      background: var(--purple-800, #6E0AD1);
      border: 2px solid var(--purple-900, #5603A7);
    }

  `}
  ${({ buttonVariant }) =>
    buttonVariant === 'secondary' &&
    `
    border: 1px solid var(--purple-600, #9935FF);
    background: var(--white-color, #FFFFFF);
    color: var(--purple-700, #861DEE, #861DEE);

    &:disabled {
      background: var(--gray-300, #CCCCCC);
    }

    &:hover {
      background: var(--purple-100, #F8F0FF);
      border: 1px solid var(--purple-700, #861DEE);
    }

    &::active {
      background: var(--purple-700, #861DEE);
      border: 1px solid var(--purple-800, #6E0AD1);
    }

    &:focus {
      background: var(--white-color, #FFFFFF);
      border: 1px solid var(--purple-800, #6E0AD1);
    }

  `}
  ${({ buttonVariant }) =>
    buttonVariant === 'outline' &&
    `
    border: 1px solid var(--gray-300, #CCCCCC);
    background: var(--white-color, #FFFFFF);
    color: var(--gray-900, #181818);

    &:disabled {
      background: var(--gray-300, #CCCCCC);
    }

    &:hover {
      background: var(--gray-100, #F6F6F6);
    }

    &:active {
      background: var(--gray-100, #F6F6F6);
    }

    &:focus {
      background: var(--white-color, #FFFFFF);
      border: 1px solid var(--gray-500, #555555);
    }
  `}
`;