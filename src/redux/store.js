import { combineReducers, legacy_createStore as createStore } from "redux";

import MyPage__reducer from "./reducers/MyPage-reducer";
import Messages_page__reducer from "./reducers/Messages_page-reducer";

let reducers = combineReducers({
	MyPage__reducer,
	Messages_page__reducer,
});

let store = createStore();

export default store;
