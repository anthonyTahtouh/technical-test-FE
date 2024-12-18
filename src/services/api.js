import axios from 'axios';

const API = axios.create({
  baseURL: 'http://46.101.252.244:3001',
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const register = (data) => API.post('/register', data);
export const login = (data) => API.post('/login', data);
export const uploadFile = (formData) => API.post('/upload', formData);
export const fetchFiles = () => API.get('/files');
export const shareFile = (id) => API.post(`/share/${id}`);
export const viewFile = (id) => API.get(`/view/${id}`);

export default API;
