import styled, { css } from 'styled-components';

const buttonStyles = {
  primary: {
    56: {
      padding: '14px 24px',
      borderRadius: '12px',
      background: 'var(--purple-600: #9935FF)',
      color: 'var(--white-color: #FFFFFF)',
      fontSize: '18px',
      fontWeight: '700',
      lineHeight: '28px',
      letterSpacing: '-0.18px',
      disabled: {
        background: 'var(--grayscale-300: #CCCCCC)',
      },
      hover: {
        background: 'var(--purple-700: #861DEE)',
      },
      active: {
        background: 'var(--purple-800: #6E0AD1)',
      },
      focus: {
        background: 'var(--purple-800: #6E0AD1)',
        border: '2px solid var(--purple-900: #5603A7)',
      },
    },
    40: {
      padding: '7px 16px',
      borderRadius: '6px',
      background: 'var(--purple-600: #9935FF)',
      color: 'var(--white-color: #FFFFFF)',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '26px',
      letterSpacing: '-0.16px',
      disabled: {
        background: 'var(--grayscale-300: #CCCCCC)',
      },
      hover: {
        background: 'var(--purple-700: #861DEE)',
      },
      active: {
        background: 'var(--purple-800: #6E0AD1)',
      },
      focus: {
        background: 'var(--purple-800: #6E0AD1)',
        border: '1px solid var(--purple-900: #5603A7)',
      },
    },
  },
  secondary: {
    padding: '7px 16px',
    borderRadius: '6px',
    border: '1px solid var(--purple-600: #9935FF)',
    background: 'var(--white-color: #FFFFFF)',
    color: 'var(--purple-700: #861DEE, #861DEE)',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '26px',
    letterSpacing: '-0.16px',
    disabled: {
      background: 'var(--grayscale-300: #CCCCCC)',
    },
    hover: {
      background: 'var(--purple-100: #F8F0FF)',
      border: '1px solid var(--purple-700: #861DEE)',
    },
    active: {
      background: 'var(--purple-700: #861DEE)',
      border: '1px solid var(--purple-800: #6E0AD1)',
    },
    focus: {
      background: 'var(--white-color: #FFFFFF)',
      border: '1px solid var(--purple-800: #6E0AD1)',
    },
  },
  outline: {
    56: {
      padding: '14px 16px',
      borderRadius: '12px',
      border: '1px solid var(--grayscale-300: #CCCCCC)',
      background: 'var(--white-color: #FFFFFF)',
      color: 'var(--grayscale-900: #181818)',
      fontSize: '18px',
      fontWeight: '700',
      lineHeight: '28px',
      letterSpacing: '-0.18px',
      disabled: {
        background: 'var(--grayscale-300: #CCCCCC)',
      },
      hover: {
        background: 'var(--gray-100, #F6F6F6)',
      },
      active: {
        background: 'var(--gray-100, #F6F6F6)',
      },
      focus: {
        background: 'var(--white-color: #FFFFFF)',
        border: '1px solid var(--grayscale-500: #555555)',
      },
    },
    40: {
      height: '40px',
      padding: '8px 16px',
      flexShrink: '0',
      borderRadius: '6px',
      border: '1px solid var(--grayscale-300: #CCCCCC)',
      background: 'var(--white-color: #FFFFFF)',
      color: 'var(--grayscale-900: #181818)',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '26px',
      letterSpacing: '-0.16px',
      disabled: {
        background: 'var(--grayscale-300: #CCCCCC)',
      },
      hover: {
        background: 'var(--gray-100, #F6F6F6)',
      },
      active: {
        background: 'var(--gray-100, #F6F6F6)',
      },
      focus: {
        background: 'var(--white-color: #FFFFFF)',
        border: '1px solid var(--grayscale-500: #555555)',
      },
    },
    36: {
      height: '36px',
      padding: '6px 16px',
      flexShrink: '0',
      borderRadius: '6px',
      border: '1px solid var(--grayscale-300: #CCCCCC)',
      background: 'var(--white-color: #FFFFFF)',
      color: 'var(--grayscale-900: #181818)',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '24px',
      disabled: {
        background: 'var(--grayscale-300: #CCCCCC)',
      },
      hover: {
        background: 'var(--gray-100, #F6F6F6)',
      },
      active: {
        background: 'var(--gray-100, #F6F6F6)',
      },
      focus: {
        background: 'var(--white-color: #FFFFFF)',
        border: '1px solid var(--grayscale-500: #555555)',
      },
    },
    28: {
      height: '28px',
      padding: '2px 16px',
      flexShrink: '0',
      borderRadius: '6px',
      border: '1px solid var(--grayscale-300: #CCCCCC)',
      background: 'var(--white-color: #FFFFFF)',
      color: 'var(--grayscale-900: #181818)',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '20px',
      letterSpacing: '-0.07px',
      disabled: {
        background: 'var(--grayscale-300: #CCCCCC)',
      },
      hover: {
        background: 'var(--gray-100, #F6F6F6)',
      },
      active: {
        background: 'var(--gray-100, #F6F6F6)',
      },
      focus: {
        background: 'var(--white-color: #FFFFFF)',
        border: '1px solid var(--grayscale-500: #555555)',
      },
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
