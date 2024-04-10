import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import App from "./App";
import PostPage from "./pages/PostPage/PostPage";
import ListPage from "./pages/ListPage/ListPage";
import MessagePage from "./pages/MessagePage/MessagePage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='post'>
            <Route index element={<PostPage />} />
            <Route path='id' element={<ListPage />} />
            <Route path='message' element={<MessagePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
