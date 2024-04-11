import styled, { css } from 'styled-components';

const buttonStyles = {
  primary: {
    56: {
      padding: '14px 24px',
      borderRadius: '12px',
      background: 'var(--purple-600)',
      color: 'var(--white-color)',
      fontSize: '18px',
      fontWeight: '700',
      lineHeight: '28px',
      letterSpacing: '-0.18px',
    },
    40: {
      padding: '7px 16px',
      borderRadius: '6px',
      background: 'var(--purple-600)',
      color: 'var(--white-color)',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '26px',
      letterSpacing: '-0.16px',
    },
  },
  secondary: {
    padding: '7px 16px',
    borderRadius: '6px',
    border: '1px solid var(--purple-600)',
    background: 'var(--white-color)',
    color: 'var(--Purple-700, #861DEE)',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '26px',
    letterSpacing: '-0.16px',
  },
  outline: {
    56: {
      padding: '14px 16px',
      borderRadius: '12px',
      border: '1px solid var(--grayscale-300)',
      background: 'var(--white-color)',
      color: 'var(--grayscale-900)',
      fontSize: '18px',
      fontWeight: '700',
      lineHeight: '28px',
      letterSpacing: '-0.18px',
    },
    40: {
      height: '40px',
      padding: '8px 16px',
      flexShrink: '0',
      borderRadius: '6px',
      border: '1px solid var(--grayscale-300)',
      background: 'var(--white-color)',
      color: 'var(--grayscale-900)',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '26px',
      letterSpacing: '-0.16px',
    },
    36: {
      height: '36px',
      padding: '6px 16px',
      flexShrink: '0',
      borderRadius: '6px',
      border: '1px solid var(--grayscale-300)',
      background: 'var(--white-color)',
      color: 'var(--grayscale-900)',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '24px',
    },
    28: {
      height: '28px',
      padding: '2px 16px',
      flexShrink: '0',
      borderRadius: '6px',
      border: '1px solid var(--grayscale-300)',
      background: 'var(--white-color)',
      color: 'var(--grayscale-900)',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '20px',
      letterSpacing: '-0.07px',
    },
  },
};

const ButtonStyle = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-align: center;
  font-family: Pretendard;
`;

export const ButtonLayout = styled.button`
  ${({ buttonVariant, buttonSize }) => {
    if (
      buttonStyles[buttonVariant] &&
      buttonStyles[buttonVariant][buttonSize]
    ) {
      return buttonStyles[buttonVariant][buttonSize];
    }
    return buttonStyles.primary[56];
  }}
  ${ButtonStyle}
  width: ${({ buttonWidth }) => buttonWidth}px;
  cursor: pointer;
`;
