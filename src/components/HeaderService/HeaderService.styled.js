import styled from 'styled-components';
import EmojiBadge from '../EmojiBadge/EmojiBadge';

export const HeaderServiceLayout = styled.div`
  display: flex;
  padding: 13px 0;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderServiceTitleBox = styled.h1`
  width: 227px;
  color: var(--gray-800, #2b2b2b);
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.28px;
`;

export const HeaderServiceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const HeaderServiceDataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const HeaderServiceInnerImg = styled.div`
  margin-bottom: 16px;
`;

export const UserCountBox = styled.div`
  display: flex;
  color: var(--gray-900, #181818);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
`;

export const UserCountSpanBox = styled.p`
  color: var(--gray-900, #181818);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
`;

export const BarItemsInner = styled.div`
  width: 1px;
  height: 28px;
  background: var(--gray-200, #eee);
`;

export const EmojiContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const EmojiBadgeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2px;
`;

export const EmojiButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;

export const EmojiTopThree = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const EmojiListButton = styled.button`
  display: flex;
  width: 36px;
  height: 36px;
  padding: 6px;
  justify-content: center;
  align-items: center;
  background: white;
  cursor: pointer;
`;

export const EmojiListButtonImg = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const SharedButton = styled.button`
  display: flex;
  height: 36px;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
  cursor: pointer;

  &:hover {
    background: var(--gray-100, #f6f6f6);
  }

  &:active {
    background: var(--gray-100, #f6f6f6);
  }

  &:focus {
    background: var(--white-color, #ffffff);
    border: 1px solid var(--gray-500, #555555);
  }
`;

export const EmojiBoxItem = styled.div`
  display: inline-flex;
  width: 334px;
  position: absolute;
  top: 130px;
  transform: translateX(-136px);
  flex-wrap: wrap;
  padding: 24px;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #b6b6b6;
  background: #fff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;

export const EmojiSelectdBox = styled.div`
  position: absolute;
  top: 130px;
  transform: translateX(-259px);
`;

export const SharedSelectContainer = styled.ul`
  display: inline-flex;
  padding: 10px 1px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  position: absolute;
  top: 130px;
  transform: translateX(36px);
`;

export const SharedSelectedItem = styled.li`
  display: flex;
  width: 138px;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;

  &:hover {
    background: var(--gray-100, #f6f6f6);
  }
`;

export const UrlToastContainer = styled.div`
  display: flex;
  width: 524px;
  height: 64px;
  padding: 19px 30px;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
`;

export const UrlToastTextBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

export const UrlToastTextItem = styled.p`
  color: var(--white, #fff);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;
`;
