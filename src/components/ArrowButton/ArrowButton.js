import arrowRightIcon from '../../assets/images/ArrowRightIcon.svg';
import arrowLeftIcon from '../../assets/images/ArrowLeftIcon.svg';
import * as S from './ArrowButton.styled';

export default function ArrowButton({ direction, className }) {
  return direction === 'right' ? (
    <S.ArrowButtonLayout src={arrowRightIcon} className={className} />
  ) : (
    <S.ArrowButtonLayout src={arrowLeftIcon} className={className} />
  );
}
