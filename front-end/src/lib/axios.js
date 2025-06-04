import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: '/api',  // No localhost:5000 here, because Vite will handle it
  withCredentials: true,
});
