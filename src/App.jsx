import React from "react";
import { Outlet } from "react-router-dom";
import GlobalStyle from "./assets/styles/Global.styled";

function App() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default App;
