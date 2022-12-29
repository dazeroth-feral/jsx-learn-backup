import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import css_clases from './App.module.css';

import Footer from './lib/Footer/Footer';
import Header from './lib/Header/Header';
import Sidebar from './lib/Sidebar/Sidebar';

import Messages from './lib/Main/Messages/Messages';
import MyPage from './lib/Main/MyPage/MyPage';
import Settings from './lib/Main/MyPage/Settings/Settings';
import News from './lib/Main/News/News';

const App = (props) => {
  return (
    <BrowserRouter>

      <div className={css_clases.App}>

        <Header></Header>
        <Sidebar></Sidebar>

          <Routes>
            <Route path='/News' element={
              <News
                data__One_New={props.data__One_New}
              ></News>
            }></Route>
            <Route path='*' element={

              <MyPage
                data__profile={props.data__profile}

              /* MyPage_Posts */
                data__MyPage_One_Post={props.data__MyPage_One_Post}
                avatar={props.data__profile[0].avatar}
              ></MyPage>

            }></Route>
            <Route path='/Messages/*' element={

              <Messages 
                data__Dialog_List={props.data__Dialog_List} 
                data__Message_List={props.data__Message_List} 
              ></Messages>

            }></Route>
            <Route path='/Settings' element={<Settings></Settings>}></Route>
          </Routes>
        
        <Footer className={css_clases.footer}></Footer>

      </div>

    </BrowserRouter>
  );
};

export default App;