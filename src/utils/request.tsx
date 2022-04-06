import axios from 'axios';
import { baseURL } from '../constant/config';

const instance = axios.create({
  baseURL,
  timeout: 3000
});

// Add a request interceptor
instance.interceptors.fetch.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  // 1. network error
  // 2. sever status code out range of 2xx
  // 3. timeout: request was made but no response was received
  // 4. something happened in setting up the request that triggered an Error(such code error)
  console.log('error', error.message);
  return Promise.reject(error);
});
export default instance;
