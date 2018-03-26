import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Register from '@/views/Register'
import Login from '@/views/Login'

import store from '@/store'

Vue.use(Router)

const checkAuth = (to, from, next) => {
  if (store.getters['auth/isAuthenticated']) {
    next()
    return
  }
  next('/login')
}

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/auth/:provider/callback',
      component: () => import('@/components/AuthCallback'),
      props: true
    },
    {
      path: '/pin/:pin',
      name: 'pin',
      component: () => import('@/components/Pin')
    },
    {
      path: '/user/:id',
      component: () => import('@/views/Profile'),
      beforeEnter: checkAuth,
      children: [
        {
          path: '',
          name: 'profile',
          component: () => import('@/components/BoardList')
        },
        {
          path: 'boards',
          name: 'boards',
          component: () => import('@/components/BoardList')
        },
        {
          path: 'pins',
          name: 'pins',
          component: () => import('@/components/PinList')
        },
        {
          path: 'boards/:board',
          name: 'board',
          component: () => import('@/components/Board')
        }
      ]
    }
  ]
})

export default router
