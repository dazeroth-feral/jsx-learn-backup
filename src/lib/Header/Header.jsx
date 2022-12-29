import React from 'react';
import css_clases from './Header.module.css';

const Header = () => {
  return(
    <header className={css_clases.content}>
        <img className={css_clases.img} src={require('../../media/ico/ico.png')}></img>

        <div className={css_clases.h1}>БандераОнлайн</div>
    </header>
  );
};

export default Header;