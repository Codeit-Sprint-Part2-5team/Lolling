import * as S from './Button.styled';
import smileIcon from '../../assets/images/smileIcon.svg';
import smileWhiteIcon from '../../assets/images/SmileWhiteIcon.svg';

export default function Button({
  text,
  variant,
  size,
  width,
  disabled = false,
  isSmileIcon = 'off',
  onClick,
  className,
}) {
  return (
    <S.ButtonLayout
      className={className}
      $variant={variant}
      size={size}
      width={width}
      disabled={disabled}
      $smileicon={isSmileIcon}
      onClick={onClick}
    >
      {isSmileIcon === 'on' ? (
        <S.SmileIconImg
          src={disabled ? smileWhiteIcon : smileIcon}
          alt='스마일'
        />
      ) : null}
      {text}
    </S.ButtonLayout>
  );
}
