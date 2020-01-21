import axios from 'axios';
const server=axios.create({
    baseURL:'http://120.77.242.209',
    timeout:8000,
})
export const get=(url,config)=>server.get(url,config);
export const post=(url,config)=>server.get(url,config);