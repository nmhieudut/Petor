import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { configs } from '../utils/config';

const axiosClient = axios.create({
  baseURL: `${configs.baseUrl}/api/v1`,
  timeout: 2000,
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: '',
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  async config => {
    let token = '';
    try {
      token = await AsyncStorage.getItem('token');
    } catch (error) {
      /* Nothing */
    }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // Must return config
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  },
);

export default axiosClient;
