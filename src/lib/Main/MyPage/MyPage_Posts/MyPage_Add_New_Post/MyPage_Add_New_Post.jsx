import React from 'react';

import css_clases from './MyPage_Add_New_Post.module.css';

const MyPage_Add_New_Post = (props) => {
  let text_posta = React.createRef();

  let textarea_Change = () => {
    let text = text_posta.current.value
    props.update_Post_Change(text)
  }

  return(
    <div className={css_clases.add_post}>

      <textarea 
        placeholder="Що в тебе на думці?"

        ref={text_posta} 
        onChange={textarea_Change} 
        className={css_clases.Textarea} 
        value={props.new_Post_Text}
      />
      <button onClick={props.add_New_Post} className={css_clases.Button}>Add Post</button>

  </div>
  )
}

export default MyPage_Add_New_Post;