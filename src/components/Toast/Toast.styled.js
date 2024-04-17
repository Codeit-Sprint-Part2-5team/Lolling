import styled from 'styled-components';
import { ReactComponent as ToastCheckSvg } from '../../assets/images/toast-check.svg';
import { ReactComponent as ToastCloseSvg } from '../../assets/images/toast-close.svg';

export const Layout = styled.div`
  display: flex;
  width: 524px;
  height: 64px;
  padding: 19px 30px;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.8);
`;

export const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CheckIconBox = styled(ToastCheckSvg)`
  width: 24px;
  height: 24px;
`;

export const CheckTextBox = styled.p`
  color: var(--white-color, #fff);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;
`;

export const CloseIconButtonBox = styled.button`
  width: 24px;
  height: 24px;
  border: 0;
  background-color: transparent;
`;

export const CloseIconBox = styled(ToastCloseSvg)`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  cursor: pointer;
`;
