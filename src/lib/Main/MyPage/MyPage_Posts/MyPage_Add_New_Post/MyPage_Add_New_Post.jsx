import React from 'react';
import {add_post, update_Post_Change} from '../../../../../redux/state';

import css_clases from './MyPage_Add_New_Post.module.css';

const MyPage_Add_New_Post = (props) => {
  let text_posta = React.createRef();

  let add_Post = () => {
    add_post()
  }

  let textarea_Change = () => {
    let text = text_posta.current.value
    update_Post_Change(text)
  }

  return(
    <div className={css_clases.add_post}>

      <textarea 
        placeholder="Що в тебе на думіці?"

        ref={text_posta} 
        onChange={textarea_Change} 
        className={css_clases.Textarea} 
        value={props.new_Post_Text}
      />
      <button onClick={add_Post} className={css_clases.Button}>Add Post</button>

  </div>
  )
}

export default MyPage_Add_New_Post;