import React from 'react';
import css_clases from './Messages.module.css';
import {Routes, Route} from 'react-router-dom';

import Dialog_List from './Dialog_List/Dialog_List';
import Dialog_Page from './Dialog_Page/Dialog_Page';

const Messages = (props) => {
  let el__Dialog_List = props.data__Dialog_List.map(data__Dialog_List => <Dialog_List dialog_link='#' dialog_name={data__Dialog_List.name}></Dialog_List>)
  let el__New_Message = props.data__Message_List.map(data__Message_List => <Dialog_Page message={data__Message_List.message}></Dialog_Page>)

  let id = 1

  return(
    <div className={css_clases.Messages__content}>
      
      <div className={css_clases.Dialog_List}>
         {el__Dialog_List}
      </div>

      <div className={css_clases.Dialog_Page__content}>
        <Routes>
          <Route path={`/Messages/` + id} element={<Dialog_Page dialog_id={id}></Dialog_Page>} />
          <Route path={`/Messages/` + id + 1} element={<Dialog_Page dialog_id={id}></Dialog_Page>} />
          <Route path={`/Messages/` + id + 2} element={<Dialog_Page dialog_id={id}></Dialog_Page>} />
        </Routes>
      </div>
      
    </div>
  );
};

export default Messages;