import axios from 'axios';
import { getCookie } from '../shared/Cookie';
// import { getCookie } from "../shared/Cookie";
// 1. Axios instance생성
export const api = axios.create({
    // baseURL: "http://localhost:3001",
    baseURL: "http://52.78.235.109/api",
    // credentials:true,  
})

export const apiForm = axios.create({
  baseURL: 'http://52.78.235.109/api',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  crdentials:true,
});

// 2. request interceptor
api.interceptors.request.use(
    // const token = getCookie("token");
    // config.headers.Authorization = token;
    (config) => {
        const accessToken = getCookie('accessToken');
        const refreshToken = getCookie('refreshToken');
        config.headers['Authorization'] = `Bearer ${accessToken}`;
        config.headers['Refresh-token'] = refreshToken;
        // config.headers['Access-Token-Expire-Time'] = 1234263763542;
        // 이 만료시간 어케야되지....
        return config;
  },
  (error) => {
    console.log(error);
  }
);

// 3. response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
  }
);

// copy, paste haha....
const apis = {
  post_all: async () => await api.get('/posts'),
 // db 용
 post_view2:  async (postId) => await api.get(`/posts/${postId}`,postId),
 post_write2: async (payload) => await apiForm.post('/posts', payload),
 post_del2:  async (postId) => await api.delete(`/posts/${postId}`,postId),

  // local용
  post_view:  async (id) => await api.get(`/posts/${id}`,id),
  post_write: async (payload) => await api.post('/posts', payload),
  post_del:  async (id) => await api.delete(`/posts/${id}`),
  post_reWr:  (postId, payload) =>  api.put(`/posts/?postId=${postId}`, postId, payload),
  
  post_heart:  (postId) =>  api.post(`/posts/like/?postId=${postId}`),

  com_write: (postId, payload) => 
   api.post(`/comments/?postID=${postId}/comment`, payload),
  com_del: async(postId, payload) =>
   api.delete(`/comments/?postID=${postId}/comment`, payload),
};

export default apis;
