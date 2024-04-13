import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyle from './assets/styles/Global.styled';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
