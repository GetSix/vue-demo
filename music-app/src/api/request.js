import axios from 'axios';
const server=axios.create({
    baseURL:'http://musicapi.leanapp.cn',
    timeout:8000,
})
export const get=(url,config)=>server.get(url,config);