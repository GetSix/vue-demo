<template>
<div class="login">
  <van-tabs style="margin-top:50px;" >
          <van-tab style="padding:0 20px" :title="'登录'">
            <van-cell-group name="1">
              <van-field
                v-model="phone"
                required
                label="手机号"
                placeholder="请输入手机号"
                :error-message="errormessage1"
              ></van-field>
              <van-field
                v-model="password"
                required
                label="密码"
                placeholder="请输入密码"
                :error-message="errormessagepw"
              ></van-field>
            </van-cell-group>
            <van-button type="info" size="large" @click="login()">登录</van-button>
          </van-tab>

          <!-- 注册 -->
          <van-tab style="padding:0 20px;" :title="'注册'">
            <van-cell-group name="2">
              <van-field
                v-model="zcphone"
                required
                label="手机号"
                placeholder="请输入手机号"
                :error-message="errormessage3"
              />
              <van-field
                v-model="zcnickName"
                required
                label="昵称"
                placeholder="请输入昵称"
                :error-message="errormessageNC"
              />
              <van-field
                v-model="zcpassword"
                required
                label="密码"
                placeholder="请输入密码"
                :error-message="errormessage4"
              />
              <van-field
            v-model="yanzheng"
            center
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
          >
            <van-button @click="sms" slot="button" size="small" type="primary">发送验证码</van-button>
          </van-field>
            </van-cell-group>
            <br>
            <van-button type="info" size="large" @click="register()">注册</van-button>
            <p style="display:flex;">
              <van-checkbox v-model="checked" @click="checked=!checked" shape="square"></van-checkbox>同意
              <a href="#">用户协议</a>、
              <a href="#">隐私策略</a>
            </p>
          </van-tab>

        </van-tabs>
</div>
</template>
<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      active:'',
      show: true,
      zcphone: "",
      zcpassword: "",
      zcnickName: "",
      phone: "",
      user: "立即登录",
      password: "",
      errormessage1: "",
      errormessage2: "",
      errormessage3: "",
      errormessage4: "",
      errormessagepw: "",
      errormessageNC: "",
      checked: true,
      sendYZ: false,
      yanzheng: "",
      isSendYZ: false,
      nickName: "",
      avatar: "",
    }
  },
  created()
  {
   this.API.login('/top/album?offset=0&limit=30').then((res)=>{
     console.log(res);
   });
    // this.API.captcha('/captcha/sent?phone=13733811645')
    //   .then(res => {
    //     console.log(res); 
    //   })
  },

  methods: {
    //发送验证码
    sms(){
      this.API.captcha(`/captcha/sent?phone=${this.zcphone}`)
      .then(res => {
        console.log(res); 
        
      })
    },
    //判断手机是否注册
    // ifPhone(){
    //   console.log(222);
    //   this.API.zcphone('/cellphone/existence/check',{
    //    phone:this.zcphone,
    //    password:this.zcpassword,
    //    nickname:this.nickName,
    //    captcha:this.yanzheng
    //   })
    //   .then(res =>{
    //     console.log(res);
    //   })
    // },
    //刚注册初始化昵称
    // showNickname(){
    //   this.API.nickname(`/activate/init/profile?nickname=${this.zcnickName}`)
    // },
    //注册
    register(){
       this.API.reg(`/cellphone/existence/check?phone=${this.zcphone}&password=${this.zcpassword}&captcha=${this.yanzheng}&nickname=${this.zcnickName}`)
      .then(res =>{
        console.log(res);
        console.log(this.zcphone,this.zcpassword,this.yanzheng,this.zcnickName);
        
      })
    },
    sendYZM(){

    }
  }
};
</script>
<style scoped>


</style>