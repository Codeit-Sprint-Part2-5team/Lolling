import arrowRightIcon from '../../assets/images/ArrowRightIcon.svg';
import arrowLeftIcon from '../../assets/images/ArrowLeftIcon.svg';
import { ArrowLayout } from './ArrowButton.styled';

function ArrowButton({ arrowDirection }) {
  return arrowDirection === 'right' ? (
    <ArrowLayout src={arrowRightIcon} />
  ) : (
    <ArrowLayout src={arrowLeftIcon} />
  );
}

export default ArrowButton;
