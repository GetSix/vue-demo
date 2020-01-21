import {get} from './request';
export const API={
  zcphone(url,config){
    return get(url);
  },
  reg(url,config){
    return get(url);
  },
  login(url,config){
      return get('/top/album?offset=0&limit=30');
  },
}