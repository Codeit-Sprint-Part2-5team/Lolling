import arrowRightIcon from '../../assets/images/ArrowRightIcon.svg';
import arrowLeftIcon from '../../assets/images/ArrowLeftIcon.svg';
import * as S from './ArrowButton.styled';

function ArrowButton({ arrowDirection }) {
  return arrowDirection === 'right' ? (
    <S.ArrowLayout src={arrowRightIcon} />
  ) : (
    <S.ArrowLayout src={arrowLeftIcon} />
  );
}

export default ArrowButton;
