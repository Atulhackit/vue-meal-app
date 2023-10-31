import axios from 'axios'
const VITE_API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1/'
const axiosClient = axios.create({
  baseURL: VITE_API_BASE_URL,
});


export default axiosClient;