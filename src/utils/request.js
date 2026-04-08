import axios from "axios";

//1.第一次封装：创建axios实例
const request = axios.create({
    baseURL: "/",
    timeout: 5000
})

//2.第二次封装：请求拦截器
request.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})
//响应拦截器
request.interceptors.response.use(response => {
    return response.data
}, error => {
    return Promise.reject(error)
})

export default request