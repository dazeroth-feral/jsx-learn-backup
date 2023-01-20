import React from "react";

import {
	add_New_Post__Action_Creator,
	textarea__MyPage__Change__Action_Creator,
} from "../../../../redux/reducers/MyPage-reducer";

import MyPage_Posts from "./MyPage_Posts";
import MyPage_OnePost from "./MyPage_OnePost/MyPage_OnePost";

const MyPage_Posts_Container = (props) => {
	let el__MyPage_One_Post = props.data__MyPage_One_Post.map(
		(data__MyPage_One_Post) => (
			<MyPage_OnePost
				avatar={props.avatar}
				message={data__MyPage_One_Post.message}
			></MyPage_OnePost>
		)
	);

	let add_New_Post = () => {
		props.dispatch(add_New_Post__Action_Creator());
	};

	let textarea_Change = (text) => {
		props.dispatch(textarea__MyPage__Change__Action_Creator(text));
	};
	return (
		<MyPage_Posts
			add_New_Post={add_New_Post}
			textarea_Change={textarea_Change}
			el__MyPage_One_Post={el__MyPage_One_Post}
			new_Text_in_Textarea={props.new_Text_in_Textarea}
		/>
	);
};

export default MyPage_Posts_Container;
