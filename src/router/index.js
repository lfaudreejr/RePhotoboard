import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@okta/okta-vue'
import Main from '@/views/Main'
import Profile from '@/views/Profile'
import Login from '@/components/Login'
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
      name: 'Main',
      component: Main
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
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
