import axios from "axios";


axios.interceptors.response.use(function(res){
    //相应拦截器
    return res.data;
});


const config={
    baseURL: '/REST/',
    timeout: 10000,
}

export function get(uri){
    return axios.get(uri,config)
}

export function post(uri,data){
    return axios.post(uri,data,config)
}