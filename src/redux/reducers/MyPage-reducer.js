const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE__MY_PAGE__TEXTAREA_CHANGE = "UPDATE-MY_PAGE-TEXTAREA-CHANGE";

let initialState = {
	// MyPage
	data__profile: [
		{
			avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/SBandera.jpg/274px-SBandera.jpg",
			name: "Stepan Bandera",
			old: 63,
			was_born_in: "vil. Staryj Yhryniv",
		},
	],

	// MyPage_One_Post
	data__MyPage_One_Post: [
		{
			id: 1,
			message: "Вітання козаче, присядь та випий склянку горілки.",
		},
		{ id: 2, message: "Вітання козаче." },
	],

	MyPage__new_Text_in_Textarea: "",
};

const MyPage__reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_POST:
			let new_post = {
				// завдання значень для нового елементу в масиві
				id: 999,
				message: state.MyPage__new_Text_in_Textarea,
			};

			state.data__MyPage_One_Post.push(new_post); // якщо строка не пуста, то елемент відправляється в масив
			state.MyPage__new_Text_in_Textarea = ""; // обнулення строни до початкового стану
			break;

		case UPDATE__MY_PAGE__TEXTAREA_CHANGE:
			state.MyPage__new_Text_in_Textarea = action.change_Word; // із атрибутів задання нового значенню елементу в масиві
			break;

		default:
			return state;
	}

	return state;
};

export const add_New_Post__Action_Creator = () => {
	return {
		type: ADD_NEW_POST,
	};
};

export const textarea__MyPage__Change__Action_Creator = (text) => {
	return {
		type: UPDATE__MY_PAGE__TEXTAREA_CHANGE,
		change_Word: text,
	};
};

export default MyPage__reducer;
