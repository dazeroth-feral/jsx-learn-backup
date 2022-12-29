import React from 'react';
import css_clases from './Sidebar.module.css';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';

const Sidebar = () => {
  return(

    <nav className={css_clases.side_bar}>

      <div className={css_clases.links}>


        <div className={css_clases.news}>

          <NavLink to="/News">Новини</NavLink>

        </div>


        <div className={css_clases.MyPage}>

          <NavLink to="/MyPage">Моя сторінка</NavLink>

        </div>


        <div className={css_clases.Messages}>

          <NavLink to="Messages">Повідомлення</NavLink>

        </div>


      </div>

    </nav>
  );
};

export default Sidebar;