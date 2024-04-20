import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './HeaderService.styled';
import Inner from '../Inner/Inner';
import ProfileList from '../ProfileList/ProfileList';
import { getCardFolderRequest, postReactionRequest } from '../../apis/api';
import EmojiBadge from '../EmojiBadge/EmojiBadge';
import arrowDownIcon from '../../assets/images/ArrowDownIcon.svg';
import Button from '../Button/Button';
import ShareIcon from '../../assets/images/ShareIcon.svg';
import { getReactionsRequest } from '../../apis/api';
import EmojiPicker from 'emoji-picker-react';
import Toast from '../Toast/Toast';

const { Kakao } = window;

export default function HeaderService({ userId }) {
  const [data, setData] = useState();
  const [emojiData, setEmojiData] = useState();
  const [isShowEmoji, setIsShowEmoji] = useState(false);
  const [isShowEmojiPicker, setIsShowEmojiPicker] = useState(false);
  const [isShowShareButton, setIsShowShareButton] = useState(false);
  const [isShowToast, setIsShowToast] = useState(false);
  const location = useLocation();
  const [emojiLog, setEmojiLog] = useState([]);
  const realUrl = `https://5rolling.netlify.app/post/${userId}`;
  const thumnailImage = require('../../assets/images/share-img.png');
  const emojiPickerRef = useRef(null);
  const emojiButtonRef = useRef(null);
  const shareButtonRef = useRef(null);

  const getData = async () => {
    const response = await getCardFolderRequest(userId);

    if (!response) return;

    setData(response);
  };

  const getEmojiData = async () => {
    const response = await getReactionsRequest(userId);

    if (!response) return;

    setEmojiData(response.data.results);
  };

  useEffect(() => {
    getData();
    getEmojiData();
  }, [emojiLog]);

  const showEmojiContainer = () => {
    if (emojiData) setIsShowEmoji(!isShowEmoji);
  };

  const showEmojiPickerContainer = () => {
    setIsShowEmojiPicker(!isShowEmojiPicker);
  };

  const onEmojiClick = async (emojiObject) => {
    await postReactionRequest(userId, {
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
    Kakao.cleanup();
    Kakao.init('078e480e2602fab08071f90f6fc7425a');
    console.log(Kakao); // 잘 작동하면 true
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Rolling',
        description: `${data.data.name}님의 롤링페이퍼입니다`,
        imageUrl: thumnailImage,
        link: {
          mobileWebUrl: realUrl,
          webUrl: realUrl,
        },
      },
      buttons: [
        {
          title: '롤링페이퍼 확인하기',
          link: {
            mobileWebUrl: realUrl,
            webUrl: realUrl,
          },
        },
      ],
    });
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        setIsShowEmojiPicker(false);
        console.log(isShowEmojiPicker);
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
                <Button
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
                  <S.SharedSelectContainer>
                    <S.SharedSelectedItem onClick={shareKakao}>
                      카카오톡 공유
                    </S.SharedSelectedItem>
                    <S.SharedSelectedItem
                      ref={shareButtonRef}
                      onClick={() =>
                        handleCopyClipBoard(
                          `${'http://localhost:3000'}${location.pathname}`
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
      </Inner>
    )
  );
}
