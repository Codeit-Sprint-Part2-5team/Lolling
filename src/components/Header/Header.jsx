import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Inner from '../Inner/Inner';
import Logo from '../../assets/images/logo.svg';
import Button from '../Button/Button';
import * as S from './Header.styled';

export default function Header() {
  const { pathname } = useLocation();
  const [isShowRollingButton, setIsShowRollingButton] = useState(false);

  useEffect(() => {
    switch (pathname) {
      case '/':
      case '/list':
        setIsShowRollingButton(true);
        break;
      default:
        setIsShowRollingButton(false);
        break;
    }
  }, [pathname]);

  return (
    <S.HeaderLayout>
      <Inner>
        <S.HeaderContainer>
          <S.LogoBox>
            <S.LinkBox to="/">
              <img src={Logo} alt="Rolling logo" />
              Rolling
            </S.LinkBox>
          </S.LogoBox>
          {isShowRollingButton && (
            <Link to="/post">
              <Button
                text={'롤링 페이퍼 만들기'}
                variant={'outline'}
                size={40}
                width={'157px'}
              />
            </Link>
          )}
        </S.HeaderContainer>
      </Inner>
    </S.HeaderLayout>
  );
}
