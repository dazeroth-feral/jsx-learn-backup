import React from 'react';
import {add_post} from '../../../../../redux/state';

import css_clases from './MyPage_Add_New_Post.module.css';

const MyPage_Add_New_Post = () => {
  let text_posta = React.createRef();

  let add_Post = () => {
    let text = text_posta.current.value;
    if(!text == ''){
      add_post(text, 5);
    }
  };

  return(
    <div className={css_clases.add_post}>

    <textarea ref={text_posta} className={css_clases.textarea}></textarea>

    <br></br>

    <button onClick={add_Post} className={css_clases.button}>Add Post</button>

  </div>
  )
}

export default MyPage_Add_New_Post;