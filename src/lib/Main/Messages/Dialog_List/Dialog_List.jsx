import React from "react";
import css_clases from './Dialog_List.module.css';
import {NavLink} from 'react-router-dom';

const Dialog_List = (props) => {
  return(
    <div className={css_clases.content}>
      <NavLink to={`/Messages/` + props.dialog_link}>{props.dialog_name}</NavLink>
    </div>
  );
}

export default Dialog_List;