import React from 'react';
import css_clases from './News.module.css';
  
import News_One_New from './News_One_New/News_One_New';

const News = (props) => {
  let elements__One_New = props.data__One_New.map(data__One_New => <News_One_New id={data__One_New.id} h1={data__One_New.h1} message={data__One_New.message}></News_One_New>);

  return(
    <div className={css_clases.News_content}>
        {elements__One_New}
    </div>
  );
};

export default News;