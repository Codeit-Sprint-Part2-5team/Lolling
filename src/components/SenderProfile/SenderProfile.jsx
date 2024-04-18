import React from 'react';
import ProfileImage from '../ProfileImage/ProfileImage';
import * as S from './SenderProflie.styled';
import Badge from '../Badge/Badge';

export default function SenderProfile({
  profileImageURL,
  sender,
  relationship,
}) {
  return (
    <S.SenderProfileLayout>
      <ProfileImage image={profileImageURL} size='m' />
      <S.TextContainer>
        <S.NameContainer>
          <span>From.</span> <b>{sender}</b>
        </S.NameContainer>
        <Badge name={relationship} />
      </S.TextContainer>
    </S.SenderProfileLayout>
  );
}
