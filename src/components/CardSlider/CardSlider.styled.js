import styled from 'styled-components';
import ArrowButton from '../../components/ArrowButton/ArrowButton';
import arrowRightIcon from '../../assets/images/ArrowRightIcon.svg';
import arrowLeftIcon from '../../assets/images/ArrowLeftIcon.svg';


export const CardSlider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;
  overflow-x: auto; 
  scroll-behavior: smooth; 

  .card-item {
    flex-shrink: 0; 
    margin: 0 10px 0 0; 
  }

  /* 스크롤바 속성 */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  position: relative; 
`;

export const LeftButton = styled(ArrowButton)`
  position: absolute;
  left: 35px;
  top: 50%;
  transform: translateY(-50%); 
  // ArrowIcon이랑 연결하기
`;

export const RightButton = styled(ArrowButton)`
  position: absolute;
  right: 35px;
  top: 50%;
  transform: translateY(-50%);
  // ArrowIcon이랑 연결하기
`;

