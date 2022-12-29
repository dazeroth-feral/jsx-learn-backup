import React from 'react';
import css_clases from './Messages.module.css';

import Dialog_List from './Dialog_List/Dialog_List';
import New_Message from './New_Message/New_Message';

const Messages = (props) => {
  let el__Dialog_List = props.data__Dialog_List.map(data__Dialog_List => <Dialog_List dialog_link="#" dialog_name={data__Dialog_List.name}></Dialog_List>)
  let el__New_Message = props.data__Message_List.map(data__Message_List => <New_Message message={data__Message_List.message}></New_Message>)

  return(

    <div className={css_clases.Messages__content}>
      <div className={css_clases.dialog_list}>
         {el__Dialog_List}
      </div>

      <div className={css_clases.messages}>
        {el__New_Message}
      </div>
      
    </div>

  );
};

export default Messages;