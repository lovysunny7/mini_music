import axios from 'axios';
import { getCookie } from '../shared/Cookie';
// import { getCookie } from "../shared/Cookie";
// 1. Axios instance생성
// headers에 content-type을 정하게 되면, 프리플라이트가 날아가지 않아서 로그인 실패
export const api = axios.create({
    // baseURL: "http://localhost:3001",
    baseURL: "http://52.78.235.109/api",
    credentials:true,  
})

// 2. request interceptor
api.interceptors.request.use(
    // const token = getCookie("token");
    // config.headers.Authorization = token;
    // config.headers['Access-Token-Expire-Time'] = 1234263763542;
    (config) => {
        const accessToken = getCookie('accessToken');
        const refreshToken = getCookie('refreshToken');
        config.headers['Authorization'] = `Bearer ${accessToken}`;
        config.headers['Refresh-token'] = refreshToken;
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

// 복붙신공
const apis = {
  post_all: async () => await api.get('/posts'),
 // db 용
 post_view2:  async (postId) => await api.get(`/posts/${postId}`,postId),
 post_write2: async (payload) => await api.post('/posts', payload),
 post_del2:  async (postId) => await api.delete(`/posts/${postId}`,postId),
 post_reWr2:  async (postId, payload) => await api.put(`/posts/${postId}`, payload),
 post_heart2: async (postId) => await api.post(`/posts/like/${postId}`),

 // local json db용
  post_view:  async (id) => await api.get(`/posts/${id}`,id),
  post_write: async (payload) => await api.post('/posts', payload),
  post_del:  async (id) => await api.delete(`/posts/${id}`),
  post_reWr:  async (postId,payload) =>  api.put(`/posts/${postId}`, payload),
  post_heart:  (postId) =>  api.post(`/posts/like/${postId}`),

  com_write: (postId, payload) => 
   api.post(`/comments/?postID=${postId}/comment`, payload),
  com_del: async(postId, payload) =>
   api.delete(`/comments/?postID=${postId}/comment`, payload),
};

export default apis;
