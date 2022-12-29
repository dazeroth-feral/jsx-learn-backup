import React from 'react';
import css_clases from './Footer.module.css';

const Footer = () => {
  return(
    <footer>
        <div className={css_clases.author_name}>by dazeroth</div>
    </footer>
  );
};

export default Footer;