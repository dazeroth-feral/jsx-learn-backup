import React from "react";

import css_clases from "./MyPage.module.css";

import MyPage_Info from "./MyPage_Info/MyPage_Info";
import MyPage_Posts_Container from "./MyPage_Posts/MyPage_Posts_Container";

const MyPage = (props) => {
	return (
		<div>
			<MyPage_Info
				avatar={props.data__profile[0].avatar}
				name={props.data__profile[0].name}
				old={props.data__profile[0].old}
				was_born_in={props.data__profile[0].was_born_in}
			></MyPage_Info>

			<hr></hr>

			<MyPage_Posts_Container
				avatar={props.avatar}
				data__MyPage_One_Post={props.data__MyPage_One_Post}
				new_Text_in_Textarea={props.new_Text_in_Textarea}
				dispatch={props.dispatch}
			></MyPage_Posts_Container>
		</div>
	);
};

export default MyPage;
