import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@okta/okta-vue'
import Main from '@/views/Main'

import config from '../config'

Vue.use(Router)
Vue.use(Auth, {
  issuer: config.oidc.issuer,
  client_id: config.oidc.clientId,
  redirect_uri: config.oidc.redirectUri,
  scope: config.oidc.scope
})

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/login',
      component: () => import('@/components/Login')
    },
    {
      path: '/implicit/callback',
      component: Auth.handleCallback()
    },
    {
      path: '/pin/:pin',
      name: 'pin',
      component: () => import('@/components/Pin'),
      beforeRouteEnter (to, from, next) {
        next()
      }
    },
    {
      path: '/:id',
      name: 'profile',
      component: () => import('@/views/Profile'),
      meta: {
        requiresAuth: false // Change when ready
      },
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
        }
      ]
    }
  ]
})

const onAuthRequired = async (from, to, next) => {
  if (from.matched.some(record => record.meta.requiresAuth) && !(await Vue.prototype.$auth.isAuthenticated())) {
    next({ path: '/login' })
  } else {
    next()
  }
}

router.beforeEach(onAuthRequired)

export default router
