import styled from 'styled-components';
import ArrowButton from '../../components/ArrowButton/ArrowButton';

export const LeftButton = styled(ArrowButton)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%) rotate(180deg);
  // arrowLeftIcon이 연결되지 않아 회전시킴
  z-index: 1;
`;

export const RightButton = styled(ArrowButton)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: 1;
`;

export const CardSlider = styled.div`
  position: relative;
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  width: 1160px;
  padding: 0px;
  gap: 20px;
  margin-left: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;

  /* 스크롤바 숨김 */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;