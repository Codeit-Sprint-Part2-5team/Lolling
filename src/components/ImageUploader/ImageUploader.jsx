import { useRef } from 'react';
import AddButton from '../AddButton/AddButton';
import Button from '../Button/Button';
import * as S from './ImageUploader.styled';
import LoadingIcon from '../../assets/images/loadingIcon.png';

function TextButtonStyle({ handleImageChange, inputRef }) {
  return (
    <S.InputContainer>
      <Button text={'파일 선택'} size={56} width={'100%'} variant={'outline'} />
      <S.Input
        type='file'
        accept='image/*'
        onChange={handleImageChange}
        ref={inputRef}
      />
    </S.InputContainer>
  );
}

function AddButtonStyle({ handleImageChange, inputRef, pending }) {
  return (
    <S.PostInputContainer>
      {pending ? <S.LoadingIcon src={LoadingIcon} /> : <AddButton />}
      <S.Input
        type='file'
        accept='image/*'
        onChange={handleImageChange}
        ref={inputRef}
      />
    </S.PostInputContainer>
  );
}

export default function ImageUploader({
  buttonStyle = 'textButton',
  setSelected,
  imageFile,
  setImageFile,
  pending,
}) {
  const inputRef = useRef();

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
    const preview = URL.createObjectURL(e.target.files[0]);
    setSelected(preview);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = '';
    setImageFile(null);
    setSelected(
      'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png'
    );
  };

  return (
    <>
      {buttonStyle === 'textButton' ? (
        <TextButtonStyle
          handleImageChange={handleImageChange}
          inputRef={inputRef}
        />
      ) : (
        <AddButtonStyle
          handleImageChange={handleImageChange}
          inputRef={inputRef}
          pending={pending}
        />
      )}
      {imageFile && (
        <S.CancelButton type='button' onClick={handleClearClick}>
          X
        </S.CancelButton>
      )}
    </>
  );
}
