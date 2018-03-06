import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@okta/okta-vue'
import Main from '@/views/Main'
import Profile from '@/views/Profile'
import Login from '@/components/Login'
import BoardList from '@/components/BoardList'
import PinList from '@/components/PinList'

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
      path: '/:id',
      name: 'profile',
      component: Profile,
      meta: {
        requiresAuth: false // Change when ready
      },
      children: [
        {
          path: '',
          name: 'defaultProfileLanding',
          component: BoardList
        },
        {
          path: 'boards',
          name: 'boards',
          component: BoardList
        },
        {
          path: 'pins',
          name: 'pins',
          component: PinList
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/implicit/callback',
      component: Auth.handleCallback()
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
