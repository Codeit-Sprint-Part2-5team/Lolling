import * as S from './Input.styled';

function Input({ active, error, submitted, ...props }) {
  const [focused, setFocused] = useState(false);
  const [clickedOutside, setClickedOutside] = useState(false);

  const handleClickOutside = () => {
    setClickedOutside(true);
    setFocused(false);
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
        onBlur={handleClickOutside}
        onFocus={() => setFocused(true)}
        {...props}
      />
      {error && <S.ErrorMessage>Error Message</S.ErrorMessage>}
    </S.InputLayout>
  );
}

export default Input;
