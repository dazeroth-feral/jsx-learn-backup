import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import css_clases from "./App.module.css";

import Footer from "./lib/Footer/Footer";
import Header from "./lib/Header/Header";
import Sidebar from "./lib/Sidebar/Sidebar";

import Messages_Container from "./lib/Main/Messages/Messages_Container";
import MyPage from "./lib/Main/MyPage/MyPage";
import Settings from "./lib/Main/MyPage/Settings/Settings";
import News from "./lib/Main/News/News";

const App = (props) => {
	return (
		<BrowserRouter>
			<div className={css_clases.None}></div>

			<div className={css_clases.App}>
				<Header></Header>
				<Sidebar></Sidebar>

				<main>
					<Routes>
						<Route
							path="/News"
							element={
								<News
									data__One_New={
										props.state.News_page.data__One_New
									}
								></News>
							}
						></Route>
						<Route
							path="*"
							element={
								<MyPage
									data__profile={
										props.state.MyPage.data__profile[0]
									}
									/* MyPage_Posts */
									data__MyPage_One_Post={
										props.state.MyPage.data__MyPage_One_Post
									}
									new_Text_in_Textarea={
										props.state.MyPage
											.MyPage__new_Text_in_Textarea
									}
									dispatch={props.dispatch}
								></MyPage>
							}
						></Route>
						<Route
							path="/Messages"
							element={
								<Messages_Container
									data__Dialog_List={
										props.state.Messages_page
											.data__Dialog_List
									}
									data__Message_List={
										props.state.Messages_page
											.data__Message_List
									}
									new_Text_in_Textarea={
										props.state.Messages_page
											.Messages_page__new_Text_in_Textarea
									}
									dispatch={props.dispatch}
								></Messages_Container>
							}
						></Route>
						<Route
							path="/Settings"
							element={<Settings></Settings>}
						></Route>
					</Routes>
				</main>

				<Footer className={css_clases.footer}></Footer>
			</div>
		</BrowserRouter>
	);
};

export default App;
