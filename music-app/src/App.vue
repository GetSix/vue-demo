<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  data(){
    return{
      showL:false,
       showR:false,
    }
  },
  methods: {
    toSeek(){
      // this.$router.push({name:'seek'});
      this.$router.push({name:'seek'});
    },
     showPopupL() {
      this.showL = true;
    },
    showPopupR() {
      this.showR = true;
    },
    login(){
      this.showL = false;
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
<style scoped>
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
<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  data(){
    return{
      showL:false,
       showR:false,
    }
  },
  methods: {
    toSeek(){
      // this.$router.push({name:'seek'});
      this.$router.push({name:'seek'});
    },
     showPopupL() {
      this.showL = true;
    },
    showPopupR() {
      this.showR = true;
    },
    login(){
      this.showL = false;
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
<style scoped>
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
<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  data(){
    return{
      showL:false,
       showR:false,
    }
  },
  methods: {
    toSeek(){
      // this.$router.push({name:'seek'});
      this.$router.push({name:'seek'});
    },
     showPopupL() {
      this.showL = true;
    },
    showPopupR() {
      this.showR = true;
    },
    login(){
      this.showL = false;
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
<style scoped>
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