import React from "react";
import css_clases from './Dialog_Page.module.css';

const Dialog_Page = (props) => {
  return(
    <div className={css_clases.New_Message}>
      {props.message}
    </div>
  );
}

export default Dialog_Page;
