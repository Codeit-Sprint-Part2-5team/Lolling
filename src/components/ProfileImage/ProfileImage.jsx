import React from "react";
import * as S from "./ProfileImage.styled";

function ProfileImage() {
  return (
    <S.ProfileImageLayout
      src='https://images.unsplash.com/photo-1522307837370-cc113a36b784?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      alt='프로필'
      size='m'
    />
  );
}

export default ProfileImage;
