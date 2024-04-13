import * as S from './Button.styled';
import smileIcon from '../../assets/images/smileIcon.svg';
import smileWhiteIcon from '../../assets/images/SmileWhiteIcon.svg';

export default function Button({
  text,
  variant,
  size,
  width,
  disabled = false,
  isSmileIcon = false,
}) {
  return (
    <S.ButtonLayout
      variant={variant}
      size={size}
      width={width}
      disabled={disabled}
    >
      {isSmileIcon ? (
        <img src={disabled ? smileWhiteIcon : smileIcon} alt='스마일' />
      ) : null}
      {text}
    </S.ButtonLayout>
  );
}