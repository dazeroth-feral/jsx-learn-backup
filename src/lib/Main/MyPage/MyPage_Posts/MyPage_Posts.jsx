import React from "react";
import css_clases from "./MyPage_Posts.module.css";

import MyPage_Add_New_Post from "./MyPage_Add_New_Post/MyPage_Add_New_Post";

const MyPage_Posts = (props) => {
	return (
		<div className={css_clases.content}>
			<div className={css_clases.form_for_add}>
				<MyPage_Add_New_Post
					add_New_Post={props.add_New_Post}
					textarea_Change={props.textarea_Change}
					new_Text_in_Textarea={props.new_Text_in_Textarea}
				></MyPage_Add_New_Post>
			</div>

			<hr className={css_clases.Mini_Hr}></hr>

			<div className={css_clases.posts}>{props.el__MyPage_One_Post}</div>
		</div>
	);
};

export default MyPage_Posts;
