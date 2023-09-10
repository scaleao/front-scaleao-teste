// import router from '@/router';
// import store from '@/store';
import axios, { AxiosRequestConfig } from 'axios';

console.log(process.env);

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'http://15.229.23.85'
      : 'http://15.229.23.85',
});

export { api };
