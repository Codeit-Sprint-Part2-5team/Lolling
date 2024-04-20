import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button/Button';

export const HeaderLayout = styled.header`
  display: flex;
  align-items: center;
  height: 64px;
  border-bottom: 1px solid #ededed;

  @media (max-width: 1248px) {
    display: flex;
    width: 100%;
    height: 64px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 64px;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    gap: 500px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1248px) {
    display: flex;
    align-items: center;
    gap: 465px;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 79px;
  }
`;

export const LogoBox = styled.h1`
  width: fit-content;

  @media (max-width: 1248px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 8px;
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

  @media (max-width: 768px) {
    color: var(--gray-light-gray-90, #4a494f);
    text-align: center;
    font-family: Poppins;
    font-size: 19.971px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const ButtonBox = styled(Button)`
  @media (max-width: 768px) {
    width: 142px;
    font-size: 14px;
  }
`;
