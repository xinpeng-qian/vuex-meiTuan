import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BlankPage from '../views/Blank.vue'
import Index from '../page/Index.vue'
import ChangeCity from '../page/ChangeCity.vue'
import GoodsList from '../page/GoodsList.vue'
import Login from '../page/Login.vue'
import Register from '../page/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [{
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/goods',
      name: 'goods',
      component: GoodsList
    },
    {
      path: '/changeCity',
      name: 'changeCity',
      component: ChangeCity
    }]
  },
  {
    path: '/blank',
    name: 'blank',
    component: BlankPage,
    children: [{
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
