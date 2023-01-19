import React from "react";
import {
	add_New_Message__Action_Creator,
	textarea__Messages_page__Change__Action_Creator,
} from "../../../redux/reducers/Messages_page-reducer";
import css_clases from "./Messages.module.css";

import Dialog_List from "./Dialog_List/Dialog_List";
import Dialog_Page from "./Dialog_Page/Dialog_Page";

const Messages = (props) => {
	let el__Dialog_List = props.data__Dialog_List.map((data__Dialog_List) => (
		<Dialog_List
			dialog_link="#"
			dialog_name={data__Dialog_List.name}
		></Dialog_List>
	));
	let el__New_Message = props.data__Message_List.map((data__Message_List) => (
		<Dialog_Page message={data__Message_List.message}></Dialog_Page>
	));

	let text_Messages = React.createRef();

	let add_New_Message = () => {
		props.dispatch(add_New_Message__Action_Creator());
	};

	let textarea_Change = () => {
		let text = text_Messages.current.value;
		props.dispatch(textarea__Messages_page__Change__Action_Creator(text));
	};

	return (
		<div className={css_clases.content_Page}>
			<div className={css_clases.Messages__content}>
				<div className={css_clases.Dialog_List}>
					<p className={css_clases.enter_Your_Dialog}>
						Виберіть співрозмовника:
					</p>
					{el__Dialog_List}
				</div>

				<div className={css_clases.Dialog_Page__content}>
					{el__New_Message}
				</div>
			</div>

			<div className={css_clases.block_Send_Message}>
				<textarea
					className={css_clases.textarea_From_New_Message}
					placeholder="Що в тебе на думці?"
					ref={text_Messages}
					onChange={textarea_Change}
					value={props.new_Text_in_Textarea}
				/>
				<button onClick={add_New_Message}>Send Message</button>
			</div>
		</div>
	);
};

export default Messages;
