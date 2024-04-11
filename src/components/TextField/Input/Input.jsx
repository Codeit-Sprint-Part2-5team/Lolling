import React, { useState } from 'react';
import * as S from './Input.styled';

function Input({ ...props }) {
  const [active, setActive] = useState(false);
  const [focused, setFocused] = useState(false);
  const [clickedOutside, setClickedOutside] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleClickOutside = () => {
    setClickedOutside(true);
    setFocused(false);
  };

  const handleFocus = () => {
    setActive(true);
    setFocused(true);
    setClickedOutside(false);
  };

  const handleBlur = () => {
    setActive(false);
    setFocused(false);
    setClickedOutside(false);
  };

  const handleSubmission = () => {
    // 어떤 조건에서 에러 발생한다고 가정 -> 추후 수정
    if (props.value === '') {
      setError(true);
    } else {
      setError(false);
      setSubmitted(true);
    }
  };

  return (
    <S.InputLayout>
      <S.InputContainer
        className={
          error
            ? 'error'
            : active
            ? 'active'
            : focused
            ? 'focused'
            : clickedOutside
            ? 'button'
            : submitted
            ? 'disabled'
            : ''
        }
        onBlur={handleBlur}
        onFocus={handleFocus}
        {...props}
      />
      {error && <S.ErrorMessage>Error Message</S.ErrorMessage>}
      <button onClick={handleSubmission}>Submit</button>
    </S.InputLayout>
  );
}

export default Input;
