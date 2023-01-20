import React from "react";

import css_clases from "./Messages.module.css";

const Messages = (props) => {
	let text_Messages = React.createRef();

	let add_New_Message = () => {
		props.add_New_Message();
	};

	let textarea_Change = () => {
		let text = text_Messages.current.value;
		props.textarea_Change(text);
	};

	return (
		<div className={css_clases.content_Page}>
			<div className={css_clases.Messages__content}>
				<div className={css_clases.Dialog_List}>
					<p className={css_clases.enter_Your_Dialog}>
						Виберіть співрозмовника:
					</p>
					{props.el__Dialog_List}
				</div>

				<div className={css_clases.Dialog_Page__content}>
					{props.el__New_Message}
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
