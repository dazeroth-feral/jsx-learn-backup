import {post_render_entire_tree} from '../render';

let state = {
  Messages_page:{
    data__Dialog_List: [
      {id: 1, name: 'Gleb Super'},
      {id: 2, name: 'Ne Gleb'},
      {id: 3, name: 'Sveta'}
    ],
  
    data__Message_List: [
      {id: 2, message: 'Hello, i`m Ne Gleb Super'},
      {id: 1, message: 'Hello, i`m Gleb'},
      {id: 3, message: 'I`m Sveta, fuck you boy!'}
    ]
  
  },

  MyPage: {
    // MyPage
    data__profile: [
      {
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/SBandera.jpg/274px-SBandera.jpg',
      name: 'Stepan Bandera',
      old: 63,
      was_born_in: 'vil. Staryj Yhryniv'
      }
    ],

    // MyPage_One_Post
    data__MyPage_One_Post: [
      {id: 1, message: 'Вітання козаче, присядь та випий склянку горілки.'},
      {id: 2, message: 'Вітання козаче.'}
    ]
  },

  News_page: {
    // News
    data__One_New: [
      {id: 1, h1: 'Вітаннячко!', message: 'Це моє перше повідомлення в вкладці "Новини"'},
      {id: 2, h1: 'Вітаннячко ще раз!', message: 'Це моє друге повідомлення в вкладці "Новини"'},
      {id: 3, h1: 'Вітаннячко знову!', message: 'Це моє третє повідомлення в вкладці "Новини"'}
    ] 
  }
};

export let add_post = (post_message, post_id) => {
  let new_post = {
    id: post_id, message: post_message
  }

  state.MyPage.data__MyPage_One_Post.push(new_post);
  post_render_entire_tree(state);
};

export default state;