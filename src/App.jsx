import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyle from './assets/styles/Global.styled';
import CardFolder from './components/CardFolder/CardFolder';
import Header from './components/Header/Header';
function App() {
  return (
    <>
      <GlobalStyle />
      <CardFolder />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
