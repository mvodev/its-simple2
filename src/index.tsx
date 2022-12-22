import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import ListApp from './ListApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ListApp />
  </React.StrictMode>
);