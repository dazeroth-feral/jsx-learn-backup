import MyPage__reducer from "./reducers/MyPage-reducer";
import Message_page__reducer from "./reducers/Messages_page-reducer";

let store = {
	_state: {
		Messages_page: {
			data__Dialog_List: [
				{ id: 1, name: "Gleb Super" },
				{ id: 2, name: "Ne Gleb" },
				{ id: 3, name: "Sveta" },
			],

			data__Message_List: [
				{ id: 2, message: "Hello, i`m Ne Gleb Super" },
				{ id: 1, message: "Hello, i`m Gleb" },
				{ id: 3, message: "I`m Sveta, fuck you boy!" },
			],

			Messages_page__new_Text_in_Textarea: "",
		},

		MyPage: {
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
					message:
						"Вітання козаче, присядь та випий склянку горілки.",
				},
				{ id: 2, message: "Вітання козаче." },
			],

			MyPage__new_Text_in_Textarea: "",
		},

		News_page: {
			// News
			data__One_New: [
				{
					id: 1,
					h1: "Вітаннячко!",
					message: 'Це моє перше повідомлення в вкладці "Новини"',
				},
			],
		},
	},
	getState() {
		return this._state;
	},

	render_Entire_Tree() {
		console.log("tested");
	},
	subscribe(observer) {
		this.render_Entire_Tree = observer;
	},

	dispatch(action) {
		this._state.MyPage = MyPage__reducer(this._state.MyPage, action);
		this._state.Messages_page = Message_page__reducer(
			this._state.Messages_page,
			action
		);

		this.render_Entire_Tree(this._state); // ТУЙКІТЬ РЕНДЕР БО СУБСКРАЙБ ЙОМУ ВЖЕ ЗАДАВ ІСТИННІСЬ ФУНКЦІЇ!
	},
};

window.store = store; // надання доступу до перегляду масиву в вікні консолі сайту
export default store;
