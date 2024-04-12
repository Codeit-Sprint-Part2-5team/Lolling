import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import MarkDown from './components/TextField/MarkDown';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Main />
    <MarkDown />
  </div>
);
