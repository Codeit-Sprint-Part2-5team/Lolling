import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import App from './App';
import PostPage from './pages/PostPage/PostPage';
import ListPage from './pages/ListPage/ListPage';
import MessagePage from './pages/MessagePage/MessagePage';
import RollingPage from './pages/RollingPage/RollingPage';
import ApiTestPage from './pages/ApiTestPage/ApiTestPage';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='list' element={<ListPage />} />
          <Route path='post'>
            <Route index element={<PostPage />} />
            <Route path=':userId'>
              <Route index element={<RollingPage />} />
              <Route path='message' element={<MessagePage />} />
            </Route>
            <Route path='apitest' element={<ApiTestPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
