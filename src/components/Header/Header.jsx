import React from 'react';
import Inner from '../Inner/Inner';
import Logo from '../../assets/images/logo.svg';
import * as S from './Header.styled';

export default function Header() {
  return (
    <S.HeaderLayout>
      <Inner>
        <S.LogoBox>
          <S.LinkBox to='/'>
            <img src={Logo} alt='Rolling logo' />
            Rolling
          </S.LinkBox>
        </S.LogoBox>
      </Inner>
    </S.HeaderLayout>
  );
}
