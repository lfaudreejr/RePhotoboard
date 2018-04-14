import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'
import RegisterPage from '@/views/RegisterPage'
import LoginPage from '@/views/LoginPage'

import store from '@/store'

Vue.use(Router)

const checkAuth = (to, from, next) => {
  const isLoggedIn = store.getters['auth/isAuthenticated']

  if (!isLoggedIn) {
    return next({path: '/login'})
  } else {
    return next()
  }
}

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/auth/:provider/callback',
      component: () => import('@/components/AuthCallback'),
      props: true
    },
    {
      path: '/pin/:pin',
      name: 'pin',
      component: () => import('@/views/PinPage')
    },
    {
      path: '/profile/:id',
      component: () => import('@/views/ProfilePage'),
      beforeEnter: checkAuth,
      beforeRouteUpdate: checkAuth,
      children: [
        {
          path: '/profile/:id',
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
