import './index.css';
import reportWebVitals from './reportWebVitals';

import state, {subscribe} from './redux/state';
import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const render_Entire_Tree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} />
    </React.StrictMode>
  );
}

render_Entire_Tree(state)
subscribe(render_Entire_Tree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();