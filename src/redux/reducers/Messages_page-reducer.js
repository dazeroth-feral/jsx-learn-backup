const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE__MESSAGES_PAGE__TEXTAREA_CHANGE =
	"UPDATE-MESSAGES_PAGE-TEXTAREA-CHANGE";

const Messages_page__reducer = (state, action) => {
	switch (action.type) {
		case ADD_NEW_MESSAGE:
			let new_Message = {
				// завдання значень для нового елементу в масиві
				id: 1,
				message: state.Messages_page__new_Text_in_Textarea,
			};

			state.data__Message_List.push(new_Message); // якщо строка не пуста, то елемент відправляється в масив
			state.Messages_page__new_Text_in_Textarea = ""; // обнулення строни до початкового стану
			break;

		case UPDATE__MESSAGES_PAGE__TEXTAREA_CHANGE:
			state.Messages_page__new_Text_in_Textarea = action.change_Word; // із атрибутів задання нового значенню елементу в масиві
			break;
		default:
			break;
	}

	return state;
};

export const add_New_Message__Action_Creator = () => {
	return {
		type: ADD_NEW_MESSAGE,
	};
};

export const textarea__Messages_page__Change__Action_Creator = (text) => {
	return {
		type: UPDATE__MESSAGES_PAGE__TEXTAREA_CHANGE,
		change_Word: text,
	};
};

export default Messages_page__reducer;
