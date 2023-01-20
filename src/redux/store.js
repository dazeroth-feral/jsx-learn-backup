import { combineReducers, legacy_createStore as createStore } from "redux";

import MyPage__reducer from "./reducers/MyPage-reducer";
import Messages_page__reducer from "./reducers/Messages_page-reducer";
import News_page__reducer from "./reducers/News_page-reducer";

let reducers = combineReducers({
	MyPage: MyPage__reducer,
	Messages_page: Messages_page__reducer,
	News_page: News_page__reducer,
});

let store = createStore(reducers);

export default store;
