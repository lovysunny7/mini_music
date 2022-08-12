import axios from "axios";
// import { getCookie } from "../shared/Cookie";
// 1. Axios instance생성
export const api = axios.create({
    baseURL: "http://localhost:3001/"
})

// 2. request interceptor
api.interceptors.request.use(
    config => {
        // const token = getCookie("token");
        // config.headers.Authorization = token;
        return config;
    },
    error => {
        console.log(error);
    }
)

// 3. response interceptor
api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        console.log(error);
    }
);


// copy, paste haha....
const apis = {
  //user
  post_view: async (postId) => await api.get(`/api/post/?postId=${postId}`),
  post_write: async (payload) => await api.post('api/post', payload),
  post_reWr: async (postId, payload) => await api.put(`/api/post/?postId=${postId}`, payload),
  post_del: async (postId, payload) => await api.delete(`/api/post/?postId=${postId}`,payload),
  post_heart: async (postId) => await api.post(`/api/post/like/?postId=${postId}`),
  com_write: async(postId, payload) => 
  await api.post(`/api/post/?postID=${postId}/comment`, payload),
  com_del: async(postId, payload) =>
  await api.delete(`/api/post/?postID=${postId}/comment`, payload),
};

export default apis;