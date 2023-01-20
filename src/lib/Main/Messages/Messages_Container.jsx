import React from "react";
import {
	add_New_Message__Action_Creator,
	textarea__Messages_page__Change__Action_Creator,
} from "../../../redux/reducers/Messages_page-reducer";

import Dialog_List from "./Dialog_List/Dialog_List";
import Dialog_Page from "./Dialog_Page/Dialog_Page";
import Messages from "./Messages";

const Messages_Container = (props) => {
	let el__Dialog_List = props.data__Dialog_List.map((data__Dialog_List) => (
		<Dialog_List
			dialog_link="#"
			dialog_name={data__Dialog_List.name}
		></Dialog_List>
	));

	let el__New_Message = props.data__Message_List.map((data__Message_List) => (
		<Dialog_Page message={data__Message_List.message}></Dialog_Page>
	));

	let add_New_Message = () => {
		props.dispatch(add_New_Message__Action_Creator());
	};

	let textarea_Change = (text) => {
		props.dispatch(textarea__Messages_page__Change__Action_Creator(text));
	};

	return (
		<Messages
			add_New_Message={add_New_Message}
			textarea_Change={textarea_Change}
			new_Text_in_Textarea={props.new_Text_in_Textarea}
			el__Dialog_List={el__Dialog_List}
			el__New_Message={el__New_Message}
		/>
	);
};

export default Messages_Container;
