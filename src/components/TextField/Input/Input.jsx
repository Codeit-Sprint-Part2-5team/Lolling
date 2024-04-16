import React, { useState } from 'react';
import * as S from './Input.styled';

function Input({ disabled, width, placeholder, value, name, onChange }) {
  // 추후 disabled 조건에 따라 컴포넌트 외부에서 불러와서 사용
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    // 에러 예시: 입력된 값이 유효하지 않다면 에러를 발생 -> 추후 조건 변경
    const inputValue = e.target.value;
    if (inputValue.trim() === '') {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <S.InputLayout>
      <S.InputContainer
        $width={width}
        $error={error}
        value={value}
        name={name}
        type='text'
        placeholder={placeholder}
        className={disabled ? 'disabled' : ''}
        disabled={disabled}
        onBlur={handleChange}
        onChange={onChange} // 입력 내용이 변경될 때마다 호출
      />
      {error && <S.ErrorMessage>값을 입력해 주세요.</S.ErrorMessage>}
    </S.InputLayout>
  );
}

export default Input;
