import axios from "axios";

const service = axios.create({
  baseURL: import.meta.evn.VITE_BASE_URL,
  timeout: 5000,
});

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default service;
