import axios from 'axios';
import { getCookie } from '../shared/Cookie';

const api = axios.create({
  baseURL: 'http://52.79.226.242',
});

api.interceptors.request.use(
  (config) => {
    const token = getCookie('token');
    config.headers.Authorization = token;
    return config;
  },
  (error) => {
    // console.log(error);
  }
);

const apis = {
  //user
  registerUser: (newUser) => api.post('/api/users/signup', newUser),
  loginUser: (userData) => api.post('/api/users/login', userData),
  logoutUser: (userData) => api.post('/api/auth/users/logout', userData),

  //post
  getPosts: () => api.get('/api/posts'),
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
