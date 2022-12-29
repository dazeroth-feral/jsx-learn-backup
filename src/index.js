import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Messages
let data__Dialog_List = [
  {id: 1, name: 'Gleb Super'},
  {id: 2, name: 'Ne Gleb'},
  {id: 3, name: 'Sveta'}
];

let data__Message_List = [
  {id: 2, message: 'Hello, i`m Ne Gleb Super'},
  {id: 1, message: 'Hello, i`m Gleb'},
  {id: 3, message: 'I`m Sveta, fuck you boy!'}
];

// MyPage
let data__profile = [{
  avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/SBandera.jpg/274px-SBandera.jpg',
  name: 'Stepan Bandera',
  old: 63,
  was_born_in: 'vil. Staryj Yhryniv'
}];

// MyPage_One_Post
let data__MyPage_One_Post = [
  {id: 1, message: 'Вітання козаче, присядь та випий склянку горілки.'},
  {id: 2, message: 'Вітання козаче.'}
]

// News
let data__One_New = [
  {id: 1, h1: 'Вітаннячко!', message: 'Це моє перше повідомлення в вкладці "Новини"'},
  {id: 2, h1: 'Вітаннячко ще раз!', message: 'Це моє друге повідомлення в вкладці "Новини"'},
  {id: 3, h1: 'Вітаннячко знову!', message: 'Це моє третє повідомлення в вкладці "Новини"'}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
    data__Dialog_List={data__Dialog_List}
    data__Message_List={data__Message_List}
    data__profile={data__profile}

    /* MyPage_Posts */
    data__MyPage_One_Post={data__MyPage_One_Post}

    /* News */
    data__One_New={data__One_New}
    />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();