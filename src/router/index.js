import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

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
      component: () => import('@/views/Login')
    },
    {
      path: '/register',
      component: () => import('@/views/Register')
    },
    // {
    //   path: '/connect/:provider',
    //   component: () => import('@/components/ConnectPage'),
    //   props: true
    // },
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
      path: '/:id',
      component: () => import('@/views/Profile'),
      beforeEnter: checkAuth,
      children: [
        {
          path: '',
          name: 'defaultProfileLanding',
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
