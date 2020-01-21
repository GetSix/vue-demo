import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[
      {
        path: '/cloud',
        name: 'cloud',
        component: () => import('../views/cloud.vue')
      },{
        path: '/find',
        name: 'find',
        component: () => import('../views/find.vue')
      },{
        path: '/video',
        name: 'video',
        component: () => import('../views/video.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },{
    path: '/seek',
    name: 'seek',
    component: () => import('../views/seek.vue')
  }
]

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};// 解决vue-router更新后调用push方控制台报错的问题 ;

const router = new VueRouter({
  routes
})

export default router
