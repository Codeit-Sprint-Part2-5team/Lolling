import PlusIcon from '../../assets/images/PlusIcon.svg';
import * as S from './AddButton.styled';

export default function AddButton({ disabled = false }) {
  return (
    <S.AddButtonLayout type='button' disabled={disabled}>
      <S.AddButtonItemBox src={PlusIcon} alt='추가하기 버튼' />
    </S.AddButtonLayout>
  );
}
