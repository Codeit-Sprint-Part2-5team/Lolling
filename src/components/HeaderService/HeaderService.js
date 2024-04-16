import React, { useEffect, useState } from 'react';
import * as S from './HeaderService.styled';
import Inner from '../Inner/Inner';
import ProfileList from '../ProfileList/ProfileList';
import { getCardFolderRequest } from '../../apis/api';
import EmojiBadge from '../EmojiBadge/EmojiBadge';
import arrowDownIcon from '../../assets/images/ArrowDownIcon.svg';
import Button from '../Button/Button';
import ShareIcon from '../../assets/images/ShareIcon.svg';
import { getReactionsRequest } from '../../apis/api';
import EmojiPicker from 'emoji-picker-react';

export default function HeaderService() {
  const [data, setData] = useState();
  const [emojiData, setEmojiData] = useState();
  const [showEmoji, setShowEmoji] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showShared, setShowShared] = useState(false);

  const getData = async () => {
    const response = await getCardFolderRequest(5777);

    if (!response) return;

    setData(response);
  };

  const getEmojiData = async () => {
    const response = await getReactionsRequest(5777);

    if (!response) return;

    setEmojiData(response.data.results);
  };

  useEffect(() => {
    getData();
    getEmojiData();
  }, []);

  const showEmojiContainer = () => {
    if (emojiData) setShowEmoji(!showEmoji);
  };

  const showEmojiPickerContainer = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const onEmojiClick = (emojiObject) => {
    console.log(emojiObject);
  };

  const showSharedContainer = () => {
    setShowShared(!showShared);
  };

  return (
    data && (
      <Inner>
        <S.HeaderServiceLayout>
          <S.HeaderServiceTitleBox>
            To. {data.data.name}
          </S.HeaderServiceTitleBox>
          <S.HeaderServiceContainer>
            <S.HeaderServiceDataContainer>
              <S.HeaderServiceInnerImg>
                <ProfileList recentMessages={data.data.recentMessages} />
              </S.HeaderServiceInnerImg>
              <S.UserCountBox>
                <S.UserCountSpanBox>
                  {data.data.messageCount}
                </S.UserCountSpanBox>
                명이 작성했어요!
              </S.UserCountBox>
            </S.HeaderServiceDataContainer>
            <S.BarItemsInner></S.BarItemsInner>
            <S.EmojiContainer>
              <S.EmojiBadgeContainer>
                <S.EmojiTopThree>
                  {data.data.topReactions?.map((item) => (
                    <EmojiBadge
                      key={item.id}
                      emoji={item.emoji}
                      count={item.count}
                    />
                  ))}
                </S.EmojiTopThree>
                <S.EmojiListButton>
                  <S.EmojiListButtonImg
                    src={arrowDownIcon}
                    alt='이모지 보기'
                    onClick={showEmojiContainer}
                  />
                  {showEmoji && (
                    <S.EmojiBoxItem>
                      {emojiData?.map((item) => (
                        <EmojiBadge
                          key={item.id}
                          emoji={item.emoji}
                          count={item.count}
                        />
                      ))}
                    </S.EmojiBoxItem>
                  )}
                </S.EmojiListButton>
              </S.EmojiBadgeContainer>
              <S.EmojiButtonContainer>
                <Button
                  text={'추가'}
                  variant={'outline'}
                  size={36}
                  isSmileIcon={'on'}
                  onClick={showEmojiPickerContainer}
                />
                <S.EmojiSelectdBox>
                  {showEmojiPicker && (
                    <EmojiPicker onEmojiClick={onEmojiClick} />
                  )}
                </S.EmojiSelectdBox>
                <S.BarItemsInner></S.BarItemsInner>
                <S.SharedButton onClick={showSharedContainer}>
                  <img src={ShareIcon} alt='공유하기' />
                </S.SharedButton>
                {showShared && (
                  <S.SharedSelectContainer>
                    <S.SharedSelectedItem>카카오톡 공유</S.SharedSelectedItem>
                    <S.SharedSelectedItem>URL 공유</S.SharedSelectedItem>
                  </S.SharedSelectContainer>
                )}
              </S.EmojiButtonContainer>
            </S.EmojiContainer>
          </S.HeaderServiceContainer>
        </S.HeaderServiceLayout>
      </Inner>
    )
  );
}
