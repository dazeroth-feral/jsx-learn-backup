import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export let post_render_entire_tree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App state={state} />
    </React.StrictMode>
  );
};