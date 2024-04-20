import * as S from './Button.styled';
import { Link } from 'react-router-dom';
import smileIcon from '../../assets/images/smileIcon.svg';
import smileWhiteIcon from '../../assets/images/SmileWhiteIcon.svg';

export default function Button({
  to, // 링크 주소를 받음
  text, // 버튼 내부에 들어갈 텍스트 입력
  variant, // 버튼 색상 지정 - primary, secondery, outline
  size, // height값을 기준으로 버튼 별 크기 지정 - 56, 40, 36, 28
  width, // 버튼의 가로 길이 - px, %등 단위까지 입력
  disabled = false, // 버튼 활상화, 비활성화 - true, false
  isSmileIcon = 'off', // 웃음 아이콘 넣을지 안넣을지 지정 - on, off
  onClick,
  className,
  type,
}) {
  const buttonContent = (
    <>
      {isSmileIcon === 'on' ? (
        <>
          <S.SmileIconImg
            src={disabled ? smileWhiteIcon : smileIcon}
            alt='스마일'
          />
          <S.SmileText>{text}</S.SmileText>
        </>
      ) : (
        <>{text}</>
      )}
    </>
  );

  return to ? (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <S.ButtonLayout
        className={className}
        $variant={variant}
        size={size}
        width={width}
        disabled={disabled}
        $smileicon={isSmileIcon}
        onClick={onClick}
      >
        {buttonContent}
      </S.ButtonLayout>
    </Link>
  ) : (
    <S.ButtonLayout
      type={type}
      className={className}
      $variant={variant}
      size={size}
      width={width}
      disabled={disabled}
      $smileicon={isSmileIcon}
      onClick={onClick}
    >
      {buttonContent}
    </S.ButtonLayout>
  );
}