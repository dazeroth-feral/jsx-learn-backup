import './index.css';
import reportWebVitals from './reportWebVitals';

import state from './redux/state';
import {post_render_entire_tree} from './render';

post_render_entire_tree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();