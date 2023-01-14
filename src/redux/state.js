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
    ],

    new_Post_Text: ''
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

export let add_post = () => {
  let last__post_id = state.MyPage.data__MyPage_One_Post[state.MyPage.data__MyPage_One_Post.length - 1].id // ПРи підключенні БД можна організувати адекватне позначення айдішника, а не ця вся хуйня з не оновлюючимися масивами! >:C

  let new_post = { // завдання значень для нового елементу в масиві
    id: last__post_id = 1, message: state.MyPage.new_Post_Text
  }

  if(!new_post.message == ''){ // перевірка на пусте поле
    state.MyPage.data__MyPage_One_Post.push(new_post); // якщо строка не пуста, то елемент відправляється в масив
  }
  state.MyPage.new_Post_Text = '' // обнулення строни до початкового стану
  post_render_entire_tree(state) // ререндеринг контенту сторінки
};

export let update_Post_Change = (change_Word) => {
  state.MyPage.new_Post_Text = change_Word // із атрибутів задання нового значенню елементу в масиві
  post_render_entire_tree(state) // ререндеринг контенту сторінки
};

window.state = state // надання доступу до перегляду масиву в вікні консолі сайту

export default state;