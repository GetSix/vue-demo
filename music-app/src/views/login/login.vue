<template>
    <div class="login">
        我是登录页面
        <div>
          
        </div>

    </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
    
    }
  },
  created()
  {
   this.API.login().then((res)=>{
     console.log(res);
   })
  },

  methods: {
    // showPopup() {
    //   this.show = true;
    // }
  }
};
</script>
<style scoped>
.login{
  width: 100%;
  height: 100%;
  background-image: url('http://p1.music.126.net/vlNvf4hP1Pc22kqEq46HyQ==/109951164639099149.jpg?imageView&quality=89')
}
</style>