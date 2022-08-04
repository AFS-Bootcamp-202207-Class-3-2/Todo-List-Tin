import axios from 'axios'
import {  message } from 'antd';
const api = axios.create({
    baseURL: "http://localhost:8081",
});

axios.interceptors.response.use(
    (response) => {
        if (response.data.code === 400) {
            message.error(response.data.message);
        }
        console.log("----");
        message.success(response.data.message);
        
        return response;
    },
    (error) => {
        console.log("请求出错：", error);
    }
 );


export default api;