import React from 'react';
import css_clases from './MyPage_Info.module.css';
import { NavLink} from 'react-router-dom';
import Settings from '../Settings/Settings';

const MyPage_Info = (props) => {
  return(
      <div className={css_clases.profile_content}>

        <div className={css_clases.avatar}>

          <img className={css_clases.avatar_img} 
            src={props.avatar}
          ></img>

          <button className={css_clases.settings}>
            <NavLink to="/Settings">Settings</NavLink>
          </button>
          
        </div>

        <div className={css_clases.info_profile}>

          <div className={css_clases.name}>
            
            <div>
              {props.name}, {props.old} old.
            </div>
            
            <div>
              Ukraine, {props.was_born_in}.
            </div>

          </div>

        </div>

      </div>
  );
};

export default MyPage_Info;