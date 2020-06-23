import Vue from 'vue'
import VueRouter from 'vue-router'

const MyHome = () =>import('../views/myhome/MyHome.vue')
const Category = () =>import('../views/category/Category.vue')
const Cart = () =>import('../views/cart/Cart.vue')
const Profile = () =>import('../views/profile/Profile.vue')

Vue.use(VueRouter)

  const routes = [
  {
    path: '',
    redirect:'/myhome'
  },
  {
    path: '/myhome',
    component: MyHome
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
