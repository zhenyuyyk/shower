import axios from "axios"
import {Message} from 'element-ui'
import router from '@/router/index'

let returnMsg = (resultMsg: string): void => {
    Message({
        message: resultMsg,
        type: 'warning'
    });
}

let request = axios.create({
    baseURL: process.env.VUE_APP_URL
});


if (sessionStorage.getItem("token")) {
    request.defaults.headers.common['Authorization'] = sessionStorage.getItem("token")
}

// 在s秒内相同请求取消下一次 start
let paramsStr: Function = (params: any): String => {
    let str = "";
    if (typeof params === "undefined") {
        str = ""
    } else if (typeof params === "object") {
        Object.keys(params).forEach(key => {
            const element = params[key];
            if (element || element == 0) {
                if (str) {
                    str += `&${key}=${element}`;
                } else {
                    str += `?${key}=${element}`;
                }
            }
        });
    } else {
        str = `?${params}`;
    }
    return str;
}
let s: number = 1 //单位秒，ajax取消延后时间
let pending: Array<any> = []; //声明一个数组用于存储每个请求的取消函数和axios标识
let cancelToken = axios.CancelToken;
let removePending: Function = (config: any): void => {
    if (pending.length > 1 && pending[pending.length - 2].u === config.url + paramsStr(config.data || config.params) && pending[pending.length - 1].t - pending[pending.length - 2].t < s * 1000) {
        console.log("ajax取消操作")
        pending[pending.length - 1].f(); //执行取消操作
        pending.splice(pending.length, 1);
    }
}
// 在s秒内相同请求取消下一次 end

// 添加请求拦截器
request.interceptors.request.use((config) => {
    config.cancelToken = new cancelToken((c) => {
        // 用请求地址&请求参数拼接的字符串
        pending.push({u: config.url + paramsStr(config.data || config.params), t: new Date().getTime(), f: c});
    });
    removePending(config)
    return config;
}, (error) => {
    return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use((response) => {
    if (response.data.code == 2000) { //success
        // console.log("success")
    } else if (response.data.code == 17002) { //token过期
        returnMsg(response.data.message)
        router.push({
            path: '/login'
        })
    } else { //其他情况
        returnMsg(response.data.message)
    }
    return response.data;
}, (error) => {
    returnMsg(error.response.data.message)
    return Promise.reject(error);
});

export default request