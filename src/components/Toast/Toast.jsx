import * as S from './Toast.styled';

function Toast() {
  return (
    <S.Layout>
      <S.CheckContainer>
        <S.CheckIconBox></S.CheckIconBox>
        <S.CheckTextBox>URL이 복사 되었습니다.</S.CheckTextBox>
      </S.CheckContainer>
      <S.CloseIconBox></S.CloseIconBox>
    </S.Layout>
  );
}

export default Toast;
