import arrowRightIcon from '../../assets/images/ArrowRightIcon.svg';
import arrowLeftIcon from '../../assets/images/ArrowLeftIcon.svg';
import * as S from './ArrowButton.styled';

export default function ArrowButton({ arrowDirection }) {
  return arrowDirection === 'right' ? (
    <S.ArrowLayout src={arrowRightIcon} />
  ) : (
    <S.ArrowLayout src={arrowLeftIcon} />
  );
}
