import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyle from './assets/styles/Global.styled';
import Header from './components/Header/Header';
import ListPage from './pages/ListPage/ListPage';
function App() {
  return (
    <>
      <GlobalStyle />
      <ListPage />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
