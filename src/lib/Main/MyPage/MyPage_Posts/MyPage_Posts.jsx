import React from 'react';
import css_clases from './MyPage_Posts.module.css';

import MyPage_Add_New_Post from './MyPage_Add_New_Post/MyPage_Add_New_Post';
import MyPage_One_Post from './MyPage_One_Post/MyPage_One_Post';

const MyPage_Posts = (props) => {
  let el__MyPage_One_Post = props.data__MyPage_One_Post.map(data__MyPage_One_Post => <MyPage_One_Post avatar={props.avatar} message={data__MyPage_One_Post.message}></MyPage_One_Post>)

  return(
    <div className={css_clases.content}>

      <div className={css_clases.form_for_add}>
        <MyPage_Add_New_Post></MyPage_Add_New_Post>
      </div>

      <hr></hr>      

      <div className={css_clases.posts}>
        {el__MyPage_One_Post}
      </div>
    </div>
  );
};

export default MyPage_Posts;