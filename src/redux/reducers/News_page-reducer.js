let initialState = {
	// News
	data__One_New: [
		{
			id: 1,
			h1: "Вітаннячко!",
			message: 'Це моє перше повідомлення в вкладці "Новини"',
		},
	],
};

const News_page__reducer = (state = initialState, action) => {
	return state;
};

export default News_page__reducer;
