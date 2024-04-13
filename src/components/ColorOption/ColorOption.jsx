import * as S from './ColorOption.styled';
import checkicon from '../../assets/images/Check.svg';
import convertBackgroundColor from '../../utils/convertBackgroundColor';

export default function ColorOption({ background, select, setSelect }) {
  const isActive = select === background;

  const onChangeActive = () => {
    setSelect(background);
  };

  const convertColor = () => {
    if (!background.includes('http')) {
      return convertBackgroundColor(background);
    }
    return background;
  };

  return (
    <S.ColorOptionLayout>
      <S.ColorBox
        $background={convertColor(background)}
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
