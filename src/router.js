import Vue from 'vue'
import Router from 'vue-router'
import NowControl from './views/NowControl.vue'
import History from './views/History.vue'
import Login from './views/Login.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/Login'
    },
    {
      path: '/Login',
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

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    if (token === 'null' || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});

export default router;