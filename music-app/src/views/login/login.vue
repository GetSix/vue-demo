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
            <van-cell-group name="1">
              <van-field
                v-model="zcphone"
                required
                label="手机号"
                placeholder="请输入手机号"
                :input="ifPhone"
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
                required
                label="短信验证码"
                placeholder="请输入短信验证码"
                :error-message="errormessage2"
              >
                <van-button slot="button" @click="sendYZM" size="small" type="primary">
                  <p class="sengyzm" v-if="!isSendYZ">发送验证码</p>
                  <p class="senddjs" v-else style="line-height:0; display:flex;">
                    <span>剩余</span>
                    <van-count-down class="djs" style="color:#ffffff" :time="60000" format="ss" />
                  </p>
                </van-button>
              </van-field>
            </van-cell-group>
            <van-button type="info" size="large" @click="register()">注册</van-button>
            <p style="display:flex;">
              <van-checkbox v-model="checked" @click="checked=!checked" shape="square"></van-checkbox>同意
              <a href="#">用户协议</a>、
              <a href="#">隐私策略</a>
            </p>
          </van-tab>

        </van-tabs>


         <van-field
    v-model="phone"
    required
    label="手机号"
    :input="isP"
    placeholder="请输入手机号"
    error-message="手机号格式错误"
  />
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
   this.API.login().then((res)=>{
     console.log(res);
   })
  },

  methods: {
    isP(){
      console.log(111);
      
    },
    //判断手机是否注册
    ifPhone(){
      console.log(222);
      this.API.zcphone('/cellphone/existence/check?phone='+this.zcphone)
      .then(res =>{
        console.log(res);
      })
    },
    //注册
    register(){

    },
    sendYZM(){

    }
  }
};
</script>
<style scoped>
.login{
  background-image: url('../../img/back.jpg');
}

</style>