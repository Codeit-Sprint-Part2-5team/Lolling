import DeleteIcon from '../../assets/images/DeleteIcon.svg';
import * as S from './DeleteButton.styled';
import { useState } from 'react';

function DeleteButton() {
  const [deleteButtonEvent, setDeleteButtonEvent] = useState('enabled');
  return (
    <S.DeleteButtonLayout
      src={DeleteIcon}
      alt="삭제 버튼"
      deleteButtonEvent={deleteButtonEvent}
      // 처음 마우스 올렸을 때 hover로 상태 변경
      onMouseEnter={() => {
        setDeleteButtonEvent('hover');
      }}
      // 마우스를 올렸다가 뗄 때 enabled로 상태 변경
      onMouseLeave={() => {
        setDeleteButtonEvent('enabled');
      }}
      // 마우스로 버튼을 누르는 중에 pressed로 상태 변경
      onMouseDown={() => {
        setDeleteButtonEvent('pressed');
      }}
      // 마우스로 버튼을 선택했을 때 focus로 상태 변경
      onFocus={() => {
        setDeleteButtonEvent('focus');
      }}
      // 마우스가 focus를 잃었을 때 enabled로 상태 변경
      onBlur={() => {
        setDeleteButtonEvent('enabled');
      }}
    />
  );
}

export default DeleteButton;
