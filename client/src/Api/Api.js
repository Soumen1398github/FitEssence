import axios from 'axios';

// Create Axios instance
const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000',
  withCredentials: true, // optional: use for sending cookies if needed
});

// Automatically add JWT token if stored
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('fitgpt_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
