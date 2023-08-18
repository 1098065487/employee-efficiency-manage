import axios from 'axios';
import qs from 'qs';

const Axios = axios.create({
    baseURL: "/projecttest",  // 请求的二级域名，一般都有，作为代理的拦截识别标志
    timeout: 60000,  // 可选
    responseType: "json",
    withCredentials: true, // 是否允许带cookie这些
    headers: {  // 请求头（类型之类。。）
        "Content-Type": "application/json;charset=UTF-8",
    },
});

// 请求拦截器
Axios.interceptors.request.use(
    (config) => {
        if (config.data && config.method === "get") {
            // get 方法的时候，拼接字符串
            config.url = config.url + "?" + qs.stringify(config.data)
        }
        // 设置公共请求参数
        if (config.data && config.method === "post") {
            if(typeof config.data !== "string") {
                // 可以在这里加入公共的请求参数之类
                // config.data["logId"] = getDate()
            }
        }
        return config
    },
    (error) => {
        console.log('error.message', error.message)
        return Promise.reject(error)
    }
);
// 响应拦截器
Axios.interceptors.response.use(
    (response) => {
        // const key = response.config.url + '&' + response.config.method;
        // removePending(key)
        return response
    },
    (error) => {
        console.log('error.message', error.message)
        return Promise.reject(error)
    }
);

export default Axios;