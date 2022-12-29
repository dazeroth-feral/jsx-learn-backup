import React from 'react';
import css_clases from './MyPage.module.css';
import MyPage_Info from './MyPage_Info/MyPage_Info';
import MyPage_Posts from './MyPage_Posts/MyPage_Posts'

const MyPage = (props) => {
  return(
    <div>
      <MyPage_Info avatar={props.data__profile[0].avatar} name={props.data__profile[0].name} old={props.data__profile[0].old} was_born_in={props.data__profile[0].was_born_in}></MyPage_Info>

      <hr></hr>

      <MyPage_Posts avatar={props.avatar} data__MyPage_One_Post={props.data__MyPage_One_Post}></MyPage_Posts>
    </div>
  );
};

export default MyPage;