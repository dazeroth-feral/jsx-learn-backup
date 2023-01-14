import './index.css';
import reportWebVitals from './reportWebVitals';

import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const render_Entire_Tree = (state) => {
  root.render(
    <React.StrictMode>
      <App 
        state={state} 
        add_New_Post={store.add_New_Post.bind(store)}
        update_Post_Change={store.update_Post_Change.bind(store)}
      />
    </React.StrictMode>
  );
}

render_Entire_Tree(store.getState())
store.getSubscribe(render_Entire_Tree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();