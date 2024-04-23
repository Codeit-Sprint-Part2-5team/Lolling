import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const ButtonStyle = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${({ $smileicon }) => ($smileicon === 'on' ? '4px' : '10px')};
  text-align: center;
  font-family: Pretendard;
`;

export const ButtonLayout = styled.button`
  // 공통 부분
  ${ButtonStyle}
  width: ${({ width }) => width};
  cursor: pointer;
  transition: background-color 0.5s;

  // Size
  ${({ size, $variant }) =>
    size === 56 &&
    `
    height: 56px;
    padding: ${$variant === 'primary' ? '14px 24px' : '14px 16px'};
    border-radius: 12px;
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.18px;
  `}
  ${({ size }) =>
    size === 40 &&
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
  ${({ size }) =>
    size === 36 &&
    `
    height: 36px;
    padding: 6px 16px;
    flex-shrink: 0;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  `}
  ${({ size }) =>
    size === 28 &&
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

  // $Variant 
  ${({ $variant }) =>
    $variant === 'primary' &&
    `
    background: var(--purple-600, #9935FF);
    color: var(--white-color, #FFFFFF);

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
    &:disabled {
      background: var(--gray-300, #CCCCCC);
    }

  `}
  ${({ $variant }) =>
    $variant === 'secondary' &&
    `
    border: 1px solid var(--purple-600, #9935FF);
    background: var(--white-color, #FFFFFF);
    color: var(--purple-700, #861DEE, #861DEE);

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

    &:disabled {
      background: var(--gray-300, #CCCCCC);
      color: var(--white-color, #FFFFFF);
    }

  `}
  ${({ $variant }) =>
    $variant === 'outline' &&
    `
    border: 1px solid var(--gray-300, #CCCCCC);
    background: var(--white-color, #FFFFFF);
    color: var(--gray-900, #181818);

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

    &:disabled {
      background: var(--gray-300, #CCCCCC);
      color: var(--white-color, #FFFFFF);
    }
  `}
`;

export const SmileIconImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const SmileText = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LinkBox = styled(Link)`
  width: ${({ width }) => width};
`;
