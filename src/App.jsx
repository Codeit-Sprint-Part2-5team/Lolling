import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyle from './assets/styles/Global.styled';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
      <Modal name="김동훈" badgeName="동료" date="2023.07.08" />
    </>
  );
}

export default App;
