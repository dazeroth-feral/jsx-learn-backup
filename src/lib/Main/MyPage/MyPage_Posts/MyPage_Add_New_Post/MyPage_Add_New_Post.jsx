import React from "react";
import {
	add_New_Post__Action_Creator,
	textarea__MyPage__Change__Action_Creator,
} from "../../../../../redux/reducers/MyPage-reducer";

import css_clases from "./MyPage_Add_New_Post.module.css";

const MyPage_Add_New_Post = (props) => {
	let text_posta = React.createRef();

	let add_New_Post = () => {
		props.add_New_Post();
	};

	let textarea_Change = () => {
		let text = text_posta.current.value;
		props.textarea_Change(text);
	};

	return (
		<div className={css_clases.add_post}>
			<textarea
				placeholder="Що в тебе на думці?"
				ref={text_posta}
				onChange={textarea_Change}
				className={css_clases.Textarea}
				value={props.new_Text_in_Textarea}
			/>

			<button onClick={add_New_Post} className={css_clases.Button}>
				Add Post
			</button>
		</div>
	);
};

export default MyPage_Add_New_Post;
