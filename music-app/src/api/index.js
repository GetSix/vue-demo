import {get , post } from './request';
export const API={
  //验证码
  captcha(url,config){
    return get(url);
  },
  //初始化昵称
  nickname(url,config){
    return get(url);
  },
  //注册
  reg(url,config){
    return get(url);
  },
  login(url,config){
      return get(url);
  },
}