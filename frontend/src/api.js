import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to get the auth token from local storage
const getToken = () => {
  return localStorage.getItem('token');
};

// Add a request interceptor to include the token in requests
apiClient.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// --- API Functions ---

// Colleges
export const getColleges = () => apiClient.get('/colleges');
export const createCollege = (collegeData) => apiClient.post('/colleges', collegeData);

// Courses
export const getCourses = () => apiClient.get('/courses');
export const createCourse = (courseData) => apiClient.post('/courses', courseData);

// Auth
export const login = (credentials) => apiClient.post('/auth/login', credentials);
export const register = (userData) => apiClient.post('/auth/register', userData);

export default apiClient;
