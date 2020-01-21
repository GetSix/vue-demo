<template>
  <div class="home">
    <div id="nav">
      <header>
        <van-sticky>
          <van-grid :border="false" :column-num="6">
          <van-grid-item>
            <van-icon size='20' @click="showPopup" name="wap-nav" />
          </van-grid-item>
          <van-grid-item>
            <router-link to="/">我的</router-link>
          </van-grid-item>
          <van-grid-item>
            <router-link to="/find">发现</router-link>
          </van-grid-item>
          <van-grid-item>
            <router-link to="/cloud">云村</router-link>
          </van-grid-item>
          <van-grid-item>
            <router-link to="/video">视频</router-link>
          </van-grid-item>
          <van-grid-item >
                <van-icon @click="seek()" size='20' name="search" />
          </van-grid-item>
        </van-grid>
        </van-sticky>
      </header>
        <van-popup  v-model="show" position="left" :style="{ width: '85%',height:'100%' }">
            <van-grid :border="false" :column-num="3">
            <van-grid-item>
              <van-image style="margin-top:50px; margin-left:20px; float:left; display:block;" round width="70px" height="70px" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
              <div style="width:100%; margin-left:20px; margin-top:10px;">用户621456</div>
            </van-grid-item>
            </van-grid>
            <van-grid :border="false" :column-num="4">
              <van-grid-item>
                 <van-icon size='20px' name="envelop-o" />
                <div style=" margin-top:10px;">我的消息</div>
              </van-grid-item>
              <van-grid-item>
                <van-icon size='20px' name="friends-o" />
                <div style=" margin-top:10px;">我的好友</div>
              </van-grid-item>
              <van-grid-item>
                <van-icon size='20px' name="bell" />
                <div style=" margin-top:10px;">听歌识曲</div>
              </van-grid-item>
              <van-grid-item>
                <van-icon size='20px' name="star" />
                <div style=" margin-top:10px;">个性装扮</div>
              </van-grid-item>
            </van-grid>
              <van-cell style="text-align: left;"  title="演出" icon="coupon" />
              <van-cell style="text-align: left;" title="商城" icon="shop" />
              <van-cell style="text-align: left;" title="附近的人" icon="location-o" />
              <van-cell style="text-align: left;" title="口袋彩铃" icon="volume" />
              <van-cell style="text-align: left;" title="创作中心" icon="bulb-o" />

              <van-cell style="text-align: left;" title="我的订单" icon="column" />
              <van-cell style="text-align: left;" title="定时停止播放" icon="clock" />
              <van-cell style="text-align: left;" title="扫一扫" icon="scan" />
              <van-cell style="text-align: left;" title="音乐闹钟" icon="clock" />
              <van-cell style="text-align: left;" title="音乐网盘" icon="upgrade" />
              <van-cell style="text-align: left;" title="在线听歌免流量" icon="notes-o" />
              <van-cell style="text-align: left;" title="优惠劵" icon="coupon" />
              <van-cell style="text-align: left;" title="青少年模式" icon="contact" />

              <van-sticky :offset-top="50">
                <van-grid :border="false" :column-num="3">
                <van-grid-item>
                  <van-icon size='20px' name="bulb-o" />
                  <div style="  margin-top:10px;">夜间模式</div>
                </van-grid-item>
                <van-grid-item>
                  <van-icon size='20px' name="setting-o" />
                  <div style=" margin-top:10px;">设置</div>
                </van-grid-item>
                <van-grid-item  @click="login">
                  <div>
                      <van-icon size='20px' name="bell" />
                      <div style=" margin-top:10px;">退出</div>
                  </div>
                  <div style="display:none;">
                      <van-icon size='20px' name="star" />
                      <div style=" margin-top:10px;">登录</div>
                  </div>
                </van-grid-item>
              </van-grid>
          </van-sticky>
        </van-popup>
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'home',
  components: {

  },
  data(){
    return{
      show:false,
    }
  },
  created()
  {

  },
  methods: {
    toSeek(){
      // this.$router.push({name:'seek'});
      this.$router.push({name:'seek'});
    },
     showPopup() {
      this.show = true;
    },
    login(){
    this.$router.push({
        name:'login'
    })
    },
    seek(){
    this.$router.push({
        name:'seek'
    })
    }
  },
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}


#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
