import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyle from './assets/styles/Global.styled';
import Header from './components/Header/Header';
import ApiTestPage from './pages/ApiTestPage/ApiTestPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <ApiTestPage />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
