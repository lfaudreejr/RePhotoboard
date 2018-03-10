<template lang='pug'>
  div.login
    div#okta-signin-container
</template>

<script>
import OktaSignIn from '@okta/okta-signin-widget'
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css'
import '@okta/okta-signin-widget/dist/css/okta-theme.css'

import config from '../config'

export default {
  name: 'Login',
  mounted: function () {
    this.$nextTick(function () {
      this.widget = new OktaSignIn({
        baseUrl: config.oidc.issuer.split('/oauth2')[0],
        clientId: config.oidc.clientId,
        redirectUri: config.oidc.redirectUri,
        logo: require('@/assets/logo.png'),
        i18n: {
          en: {
            'primaryauth.title': 'Sign in to RePhotoboard'
          }
        },
        authParams: {
          responseType: ['id_token', 'token'],
          issuer: config.oidc.issuer,
          display: 'page',
          scopes: config.oidc.scope.split(' ')
        },
        idps: [
          {
            type: 'FACEBOOK',
            id: config.idps.facebook
          }
        ]
      })

      this.widget.renderEl(
        { el: '#okta-signin-container' },
        () => {},
        (err) => {
          throw err
        }
      )
    })
  },
  destroyed () {
    this.widget.remove()
  }
}
</script>

<style>

</style>
