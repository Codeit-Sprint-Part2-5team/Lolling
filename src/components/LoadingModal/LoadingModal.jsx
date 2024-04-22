import * as S from './LoadingModal.styled';

function Modal({ pending, text, className }) {
  if (!pending) return;
  return (
    <S.Layout className={className}>
      <S.ContentBox>
        <S.Spinner />
        <S.Text>{text}</S.Text>
      </S.ContentBox>
    </S.Layout>
  );
}

export default Modal;
