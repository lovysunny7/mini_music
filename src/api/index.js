import axios from 'axios';
import { getCookie } from '../shared/Cookie';

const api = axios.create({
  baseURL: 'http://52.78.235.109',
});

api.interceptors.request.use(
  (config) => {
    const accessToken = getCookie('accessToken');
    const refreshToken = getCookie('refreshToken');
    config.headers['Authorization'] = `Bearer ${accessToken}`;
    config.headers['Refresh-token'] = refreshToken;
    // config.headers['Access-Token-Expire-Time'] = 1234263763542;
    return config;
  },
  (error) => {
    console.log(error);
  }
);

const apis = {
  //user
  registerUser: (userData) => api.post('/api/users/signup', userData),
  loginUser: (userData) => api.post('/api/users/login', userData),
  logoutUser: (userData) => api.post('/api/auth/users/logout', userData),
  getMypage: (userData) => api.get('/api/mypage', userData),

  //post
  getPosts: () => api.get('/api/posts'),
  getGenrePosts: () => api.get('/api/posts?genre=:genre'),
  addPost: (contents) => api.post('/api/posts', contents),
  editPost: (postId, contents) => api.post(`/posts/${postId}`, contents),
  delPost: (postId) => api.delete(`/api/posts/${postId}`),
  getDetail: (postId) => api.get(`/api/posts/${postId}`),

  //comment
  addComment: (postId, comment) => api.post(`/api/comments/${postId}`, comment),
  editComment: (postId, commentId, comments) =>
    api.post(`/api/comments/${postId}/comment/${commentId}`, comments),
  delComment: (id, commentId) =>
    api.delete(`/api/board/${id}/comment/${commentId}`),
  getComments: (id) => api.get(`/api/board/${id}/comments`),

  //heart
  addheart: (postId) => api.post(`/api/likes/${postId}`),
};

export default apis;
