import Vue from 'vue'
import Router from 'vue-router'
import NowControl from './views/NowControl.vue'
import History from './views/History.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/NowControl',
      name: 'NowControl',
      component: NowControl
    },
    {
      path: '/History',
      name: 'history',
      component: History
    },
  ]
})
