import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://172.20.122.136:3333',
});
