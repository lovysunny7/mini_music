import { configureStore } from '@reduxjs/toolkit';
// import { post, comment, user } from './modules'; // 이렇게도 되는지 몰겠음
import post from './modules/post';
import comment from './modules/comment';
import user from './modules/user';

const store = configureStore({
  reducer: {
    user,
    post,
    comment,
  },
});

export default store;
