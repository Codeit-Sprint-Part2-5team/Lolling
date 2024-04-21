import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './HeaderService.styled';
import ProfileList from '../ProfileList/ProfileList';
import { postReactionRequest } from '../../apis/api';
import EmojiBadge from '../EmojiBadge/EmojiBadge';
import arrowDownIcon from '../../assets/images/ArrowDownIcon.svg';
import ShareIcon from '../../assets/images/ShareIcon.svg';
import { getReactionsRequest } from '../../apis/api';
import EmojiPicker from 'emoji-picker-react';
import Toast from '../Toast/Toast';
import KakaoButton from '../KakaoButton/KakaoButton';

export default function HeaderService({
  id,
  name,
  recentMessages,
  messageCount,
  topReactions,
}) {
  const [emojiData, setEmojiData] = useState();
  const [isShowEmoji, setIsShowEmoji] = useState(false);
  const [isShowEmojiPicker, setIsShowEmojiPicker] = useState(false);
  const [isShowShareButton, setIsShowShareButton] = useState(false);
  const [isShowToast, setIsShowToast] = useState(false);
  const location = useLocation();
  const [emojiLog, setEmojiLog] = useState([]);
  const emojiPickerRef = useRef(null);
  const emojiButtonRef = useRef(null);
  const shareButtonRef = useRef(null);

  const getEmojiData = async () => {
    const response = await getReactionsRequest(id);

    if (!response) return;

    setEmojiData(response.data.results);
  };

  useEffect(() => {
    getEmojiData();
  }, [emojiLog]);

  const showEmojiContainer = () => {
    if (emojiData) setIsShowEmoji(!isShowEmoji);
  };

  const showEmojiPickerContainer = () => {
    setIsShowEmojiPicker(!isShowEmojiPicker);
  };

  const onEmojiClick = async (emojiObject) => {
    await postReactionRequest(id, {
      emoji: emojiObject.emoji,
      type: 'increase',
    });

    setEmojiLog((prevLog) => [...prevLog, emojiObject.emoji]);
  };

  const showSharedContainer = () => {
    setIsShowShareButton(!isShowShareButton);
  };

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsShowToast(true);
      setTimeout(() => {
        setIsShowToast(false);
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        setIsShowEmojiPicker(false);
      }

      if (
        emojiButtonRef.current &&
        !emojiButtonRef.current.contains(event.target)
      ) {
        setIsShowEmoji(false);
      }

      if (
        shareButtonRef.current &&
        !shareButtonRef.current.contains(event.target)
      ) {
        setIsShowShareButton(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.InnerContainer>
      <S.HeaderServiceLayout>
        <S.HeaderServiceTitleBox>To. {name}</S.HeaderServiceTitleBox>
        <S.HeaderServiceContainer>
          <S.HeaderServiceDataContainer>
            <S.HeaderServiceInnerImg>
              <ProfileList recentMessages={recentMessages} />
            </S.HeaderServiceInnerImg>
            <S.UserCountBox>
              <S.UserCountSpanBox>{messageCount}</S.UserCountSpanBox>
              명이 작성했어요!
            </S.UserCountBox>
          </S.HeaderServiceDataContainer>
          <S.BarItemsInner></S.BarItemsInner>
          <S.EmojiContainer>
            <S.EmojiBadgeContainer>
              <S.EmojiTopThree>
                {topReactions?.map((item) => (
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
                {isShowEmoji && (
                  <S.EmojiBoxItem ref={emojiButtonRef}>
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
              <S.EmojiButtonBox
                text={'추가'}
                variant={'outline'}
                size={36}
                isSmileIcon={'on'}
                onClick={showEmojiPickerContainer}
              />
              <S.EmojiSelectdBox ref={emojiPickerRef}>
                {isShowEmojiPicker && (
                  <EmojiPicker onEmojiClick={onEmojiClick} />
                )}
              </S.EmojiSelectdBox>
              <S.BarItemsInner></S.BarItemsInner>
              <S.SharedButton onClick={showSharedContainer}>
                <img src={ShareIcon} alt='공유하기' />
              </S.SharedButton>
              {isShowShareButton && (
                <S.SharedSelectContainer ref={shareButtonRef}>
                  <S.SharedSelectedItem>
                    <KakaoButton name={name} id={id} />
                  </S.SharedSelectedItem>
                  <S.SharedSelectedItem
                    onClick={() =>
                      handleCopyClipBoard(
                        `${'https://5rolling.netlify.app'}${location.pathname}`
                      )
                    }
                  >
                    URL 공유
                  </S.SharedSelectedItem>
                </S.SharedSelectContainer>
              )}
              {isShowToast && (
                <S.UrlToastContainer>
                  <Toast callback={() => setIsShowToast(false)} />
                </S.UrlToastContainer>
              )}
            </S.EmojiButtonContainer>
          </S.EmojiContainer>
        </S.HeaderServiceContainer>
      </S.HeaderServiceLayout>
    </S.InnerContainer>
  );
}
