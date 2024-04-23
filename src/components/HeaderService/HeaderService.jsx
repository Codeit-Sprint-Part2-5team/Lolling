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
  backgroundImageURL,
}) {
  const [emojiData, setEmojiData] = useState();
  const [emojiDataLength, setEmojiDataLength] = useState([]);
  const [isShowEmoji, setIsShowEmoji] = useState(false);
  const [isShowEmojiPicker, setIsShowEmojiPicker] = useState(false);
  const [isShowShareButton, setIsShowShareButton] = useState(false);
  const [isShowToast, setIsShowToast] = useState(false);
  const location = useLocation();
  const [emojiLog, setEmojiLog] = useState([]);
  const emojiPickerRef = useRef(null);
  const emojiPickerButtonRef = useRef(null);
  const emojiListRef = useRef(null);
  const emojiListButtonRef = useRef(null);
  const shareListRef = useRef(null);
  const sharedButtonRef = useRef(null);

  const getEmojiData = async () => {
    const response = await getReactionsRequest(id);

    if (!response) return;

    setEmojiData(response.data.results);
    setEmojiDataLength(response.data.results.length);
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
        !emojiPickerRef.current.contains(event.target) &&
        emojiPickerButtonRef.current &&
        !emojiPickerButtonRef.current.contains(event.target)
      ) {
        setIsShowEmojiPicker(false);
      }

      if (
        emojiListRef.current &&
        !emojiListRef.current.contains(event.target) &&
        emojiListButtonRef.current &&
        !emojiListButtonRef.current.contains(event.target)
      ) {
        setIsShowEmoji(false);
      }

      if (
        shareListRef.current &&
        !shareListRef.current.contains(event.target) &&
        sharedButtonRef.current &&
        !sharedButtonRef.current.contains(event.target)
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
                {emojiData?.slice(0, 3).map((item) => (
                  <EmojiBadge
                    key={item.id}
                    emoji={item.emoji}
                    count={item.count}
                  />
                ))}
              </S.EmojiTopThree>
              {emojiDataLength > 0 && (
                <S.EmojiListButton>
                  <S.EmojiListButtonImg
                    src={arrowDownIcon}
                    alt='이모지 보기'
                    ref={emojiListButtonRef}
                    onClick={showEmojiContainer}
                  />
                  {isShowEmoji && (
                    <S.EmojiBoxItem ref={emojiListRef}>
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
              )}
            </S.EmojiBadgeContainer>
            <S.EmojiButtonContainer>
              <div ref={emojiPickerButtonRef}>
                <S.EmojiButtonBox
                  text={'추가'}
                  variant={'outline'}
                  size={36}
                  isSmileIcon={'on'}
                  onClick={showEmojiPickerContainer}
                />
              </div>
              <S.EmojiSelectdBox ref={emojiPickerRef}>
                {isShowEmojiPicker && (
                  <EmojiPicker onEmojiClick={onEmojiClick} />
                )}
              </S.EmojiSelectdBox>
              <S.BarItemsInner></S.BarItemsInner>
              <S.SharedButton
                ref={sharedButtonRef}
                onClick={showSharedContainer}
              >
                <img src={ShareIcon} alt='공유하기' />
              </S.SharedButton>
              {isShowShareButton && (
                <S.SharedSelectContainer ref={shareListRef}>
                  <S.SharedSelectedItem>
                    <KakaoButton
                      name={name}
                      id={id}
                      image={backgroundImageURL}
                    />
                  </S.SharedSelectedItem>
                  <S.SharedSelectedItem>
                    <button
                      onClick={() =>
                        handleCopyClipBoard(
                          `${'https://5rolling.netlify.app'}${
                            location.pathname
                          }`
                        )
                      }
                    >
                      URL 공유
                    </button>
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
