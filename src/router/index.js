import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Addresses from '../components/Addresses.vue'
import AddressesForm from '../views/AddressesForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    // Homeページ
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/addresses',
    name: 'addresses',
    component: Addresses
  },
  {
    path: '/addresses/:address_id?/edit',
    name: 'address_edit',
    component: AddressesForm
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
