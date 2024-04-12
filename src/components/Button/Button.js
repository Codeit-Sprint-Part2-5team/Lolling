import * as S from './Button.styled';
import smileIcon from '../../assets/images/smileIcon.svg';
import smileWhiteIcon from '../../assets/images/SmileWhiteIcon.svg';

export default function Button({
  text,
  variant,
  size,
  width,
  isSmileIcon = false,
}) {
  return (
    <S.ButtonLayout
      buttonVariant={variant}
      buttonSize={size}
      buttonWidth={width}
    >
      {isSmileIcon ? <img src={smileIcon} alt="스마일" /> : null}
      {text}
    </S.ButtonLayout>
  );
}
