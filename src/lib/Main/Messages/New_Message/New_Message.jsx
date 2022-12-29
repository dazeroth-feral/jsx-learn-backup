import React from "react";
import css_clases from './New_Message.module.css';

const New_Message = (props) => {
  return(
    <div className={css_clases.New_Message}>
      {props.message}
    </div>
  );
}

export default New_Message;
