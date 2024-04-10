import ProfileImage from "../ProfileImage/ProfileImage";
import * as S from "./Card.styled";

function Card() {
  return (
    <S.CardLayout>
      <S.TopContainer>
        <ProfileImage size='m' />
        <S.TextContainer>
          <S.NameContainer>
            <span>From.</span> <b>김동훈</b>
          </S.NameContainer>
          <div>동료</div>
        </S.TextContainer>
      </S.TopContainer>
      <S.BottomContainer>
        <S.ContentBox>
          코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
          하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심
          또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두
          조심 또 하세요!
        </S.ContentBox>
        <S.DateBox>2023.07.08</S.DateBox>
      </S.BottomContainer>
    </S.CardLayout>
  );
}

export default Card;