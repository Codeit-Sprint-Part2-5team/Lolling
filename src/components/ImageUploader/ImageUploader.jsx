import { useEffect, useRef } from 'react';
import Button from '../Button/Button';
import * as S from './ImageUploader.styled';

export default function ImageUploader({
  setSelected,
  imageFile,
  setImageFile,
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
      <S.InputContainer>
        <Button
          text={'파일 선택'}
          size={56}
          width={'100%'}
          variant={'outline'}
        />
        <S.Input
          type='file'
          accept='image/*'
          onChange={handleImageChange}
          ref={inputRef}
        />
      </S.InputContainer>
      {imageFile && (
        <S.CancelButton type='button' onClick={handleClearClick}>
          X
        </S.CancelButton>
      )}
    </>
  );
}
