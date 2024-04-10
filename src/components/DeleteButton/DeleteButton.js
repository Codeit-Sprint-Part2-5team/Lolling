import DeleteIcon from '../../assets/images/DeleteIcon.svg';
import * as S from './DeleteButton.styled';

function DeleteButton() {
  return <S.DeleteButtonLayout src={DeleteIcon} alt="삭제 버튼" />;
}

export default DeleteButton;
