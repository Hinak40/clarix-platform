import axios from 'axios';

const API = axios.create({
baseURL: 'https://clarix-platform.onrender.com/api'
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const getServices = () => API.get('/services');
export const createService = (data) => API.post('/services', data);
export const updateService = (id, data) => API.put(`/services/${id}`, data);
export const deleteService = (id) => API.delete(`/services/${id}`);

export const getPortfolio = () => API.get('/portfolio');
export const createPortfolio = (data) => API.post('/portfolio', data);
export const updatePortfolio = (id, data) => API.put(`/portfolio/${id}`, data);
export const deletePortfolio = (id) => API.delete(`/portfolio/${id}`);

export const getBlogs = () => API.get('/blogs');
export const getBlog = (id) => API.get(`/blogs/${id}`);
export const createBlog = (data) => API.post('/blogs', data);
export const updateBlog = (id, data) => API.put(`/blogs/${id}`, data);
export const deleteBlog = (id) => API.delete(`/blogs/${id}`);

export const sendInquiry = (data) => API.post('/inquiries', data);
export const getInquiries = () => API.get('/inquiries');

export const bookMeeting = (data) => API.post('/meetings', data);
export const getMeetings = () => API.get('/meetings');

export const loginAdmin = (data) => API.post('/auth/login', data);

export default API;