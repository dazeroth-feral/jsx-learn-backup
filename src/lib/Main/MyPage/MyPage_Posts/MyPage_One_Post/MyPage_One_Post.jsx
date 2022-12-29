import React from 'react';

import css_clases from './MyPage_One_Post.module.css';

const MyPage_One_Post = (props) => {
  return(
    <div className={css_clases.content}>
      <div className={css_clases.avatar}>
        <img 
          src={props.avatar}
          ></img>
        <button className={css_clases.like}>Delete</button>
      </div>
      <div className={css_clases.post_text}>
        {props.message}
      </div>
    </div>
  );
};

export default MyPage_One_Post;