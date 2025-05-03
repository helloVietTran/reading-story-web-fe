import axios from 'axios';
import Cookies from 'js-cookie';

const baseUrl =
  import.meta.env.VITE_BACKEND_URL + import.meta.env.VITE_BACKEND_PREFIX;

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

let isRefreshing = false;
let refreshPromise = null;

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('reading_web_jwt');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Xử lý response errors (đặc biệt là 401 để refresh token)
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      if (!isRefreshing) {
        isRefreshing = true;

        try {
          const refreshToken = Cookies.get('reading_web_refresh_token');
          if (!refreshToken) {
            throw new Error('Refresh token not found');
          }

          // Gọi API refresh token
          const { data } = await axios.post(`${baseUrl}/auth/refresh`, {
            refreshToken,
          });

          const { accessToken } = data;

          // save new token
          Cookies.set('reading_web_jwt', accessToken, { expires: 1 / 24 });
          Cookies.set('reading_web_refresh_token', refreshToken, {
            expires: 1,
          });

          isRefreshing = false;
          refreshPromise = null;

          // retry request with new token
          originalRequest._retry = true;
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return axiosInstance(originalRequest);
        } catch (err) {
          console.error('Refresh token failed. Redirecting to login.');
          isRefreshing = false;
          refreshPromise = null;
          window.location.href = '/login';
          return Promise.reject(err);
        }
      }

      // wait for new token then retry
      if (!refreshPromise) {
        refreshPromise = new Promise((resolve) => {
          const interval = setInterval(() => {
            if (!isRefreshing) {
              clearInterval(interval);
              resolve();
            }
          }, 50);
        });
      }

      await refreshPromise;
      const newToken = Cookies.get('reading_web_jwt');
      originalRequest._retry = true;
      originalRequest.headers.Authorization = `Bearer ${newToken}`;
      return axiosInstance(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
