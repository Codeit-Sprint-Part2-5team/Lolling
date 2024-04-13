import DeleteIcon from '../../assets/images/DeleteIcon.svg';
import DeleteWhiteIcon from '../../assets/images/DeleteWhiteIcon.svg';
import * as S from './DeleteButton.styled';

export default function DeleteButton({ disabled }) {
  return (
    <S.DeleteButtonLayout disabled={disabled}>
      <S.DeleteButtonItemBox
        src={disabled ? DeleteWhiteIcon : DeleteIcon}
        alt="삭제 버튼"
      />
    </S.DeleteButtonLayout>
  );
}
