import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Addresses from '../components/Addresses.vue'

Vue.use(VueRouter)

const routes = [
  {
    // Homeページ
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addresses',
    name: 'addreses',
    component: Addresses
  },
  {
    // Aboutページ
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
