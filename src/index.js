import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import Input from './components/TextField/Input/Input';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Main />
    <Input />
  </div>
);
