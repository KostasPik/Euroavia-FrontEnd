import axios from "axios";







const axiosInstance = axios.create({
    // baseURL: 'http://192.168.1.105:8000/api/',
    baseURL: 'https://euroaviaathens.eu.pythonanywhere.com/api/',

})
export default axiosInstance;