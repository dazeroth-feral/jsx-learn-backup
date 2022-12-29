import css_clases from './News_One_New.module.css'

const News_One_New = (props) => {
  return(
    <div className={css_clases.One_New_content}>

        <span className={css_clases.h1}>
          {props.h1}
        </span>

        <br></br><hr color="black"></hr>

        <span className={css_clases.props_content}>
          {props.message}
        </span>

        <div className={css_clases.author}>
          by dazeroth
        </div>

    </div>
  );
};

export default News_One_New;