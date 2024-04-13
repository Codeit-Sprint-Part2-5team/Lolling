import * as S from './ColorOption.styled';
import checkicon from '../../assets/images/Check.svg';
import convertBackgroundColor from '../../utils/convertBackgroundColor';

export default function ColorOption({ color, image, select, setSelect }) {
  const isActive = select === color;

  const onChangeActive = () => {
    setSelect(color);
  };

  return (
    <S.ColorOptionLayout>
      <S.ColorBox
        $color={convertBackgroundColor(color)}
        $isActive={isActive}
        onClick={onChangeActive}
      >
        <S.IconBox>
          <S.CheckImg src={checkicon} />
        </S.IconBox>
      </S.ColorBox>
    </S.ColorOptionLayout>
  );
}
