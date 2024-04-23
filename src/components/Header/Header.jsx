import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Inner from '../Inner/Inner';
import Logo from '../../assets/images/logo.svg';
import * as S from './Header.styled';
import Button from '../Button/Button';

export default function Header() {
  const { pathname } = useLocation();
  const { userId } = useParams();
  const [isShowRollingButton, setIsShowRollingButton] = useState(false);
  const [isInvisibleOnMobile, setIsInvisibleOnMobile] = useState('false');
  const [path, setPath] = useState();

  console.log('pathname', pathname);
  console.log('path', path);
  useEffect(() => {
    switch (path) {
      case '/':
      case '/list':
        setIsShowRollingButton(true);
        break;
      case `/post/${userId}`:
        setIsInvisibleOnMobile('true');
        break;
      default:
        setIsShowRollingButton(false);
        break;
    }
  }, [path]);

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  return (
    <S.HeaderLayout $invisible={isInvisibleOnMobile}>
      <Inner>
        <S.HeaderContainer>
          <S.LogoBox>
            <S.LinkBox to='/'>
              <img src={Logo} alt='Rolling logo' />
              Rolling
            </S.LinkBox>
          </S.LogoBox>
          {isShowRollingButton && (
            <S.ButtonBox>
              <Button
                to='/post'
                text={'롤링 페이퍼 만들기'}
                variant={'outline'}
                size={40}
                width={'100%'}
              />
            </S.ButtonBox>
          )}
        </S.HeaderContainer>
      </Inner>
    </S.HeaderLayout>
  );
}
