import React from 'react';
import css_clases from './MyPage_Add_New_Post.module.css';

const MyPage_Add_New_Post = () => {
  return(
    <div className={css_clases.add_post}>

    <textarea className={css_clases.textarea}></textarea>

    <br></br>

    <button className={css_clases.button}>Add Post</button>

  </div>
  )
}

export default MyPage_Add_New_Post;