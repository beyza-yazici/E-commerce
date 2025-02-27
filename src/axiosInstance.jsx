import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://workintech-fe-ecommerce.onrender.com',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `localStorage.getItem('token')`
    }
});


axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        // Token geçersiz olduğunda
        localStorage.removeItem('token'); // Token'ı sil
        window.location.href = '/login'; // Login sayfasına yönlendir
      }
      return Promise.reject(error);
    }
  );

export default axiosInstance;