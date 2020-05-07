import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Zyf from './zyf.js'
import zhRouter from  './zh/zhRouter.js'
import mxmRouter from  './mxm/mxmRouter.js'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',



    component: () => import('../views/About.vue')
  },
      ...Zyf,
      ...zhRouter,
      ...mxmRouter,


      



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
