import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderLayout = styled.header`
  display: flex;
  align-items: center;
  height: 64px;
  border-bottom: 1px solid #ededed;

  @media (max-width: 760px) {
    display: flex;
    width: 768px;
    height: 64px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1px;
    padding: 11px 24px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 760px) {
    display: flex;
    align-items: center;
    gap: 465px;
  }
`;

export const LogoBox = styled.h1`
  width: fit-content;

  @media (max-width: 760px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
  }
`;

export const LinkBox = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 19px;
  font-weight: 700;
  color: #4a494f;
  text-align: center;
  font-family: Poppins;
  line-height: normal;
`;
