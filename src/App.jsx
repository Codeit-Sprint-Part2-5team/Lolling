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
      <Modal />
    </>
  );
}

export default App;
