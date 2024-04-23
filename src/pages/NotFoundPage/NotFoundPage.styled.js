import styled from 'styled-components';
import Inner from '../../components/Inner/Inner';

export const Layout = styled.div`
  background: var(--Purple-200, #ecd9ff);
`;

export const InnerContainer = styled(Inner)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 200px 0 100px;
  @media (max-width: 768px) {
    padding: 100px 0 30px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  padding: 60px;
  border-radius: 20px;
  background: var(--Surface, #f6f8ff);

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

export const Title = styled.h2`
  font-size: 250px;
  color: var(--Purple-600, #9935ff);
  @media (max-width: 768px) {
    font-size: 120px;
  }
`;

export const Content = styled.p`
  margin: 40px 0 60px;
  font-size: 18px;
  line-height: 155.556%;
  letter-spacing: -0.18px;
  color: var(--gray-500, #555);
  text-align: center;

  & b {
    display: block;
    margin-bottom: 10px;
    font-size: 22px;
  }

  @media (max-width: 768px) {
    margin: 20px 0 40px;
  }
`;

export const MobileBr = styled.br`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
