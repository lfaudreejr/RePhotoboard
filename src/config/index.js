export default {
  oidc: {
    clientId: process.env.VUE_APP_OIDC_CLIENTID,
    issuer: process.env.VUE_APP_OIDC_ISSUER,
    redirectUri: process.env.VUE_APP_OIDC_REDIRECT_URI,
    scope: 'openid profile email'
  },
  idps: {
    facebook: process.env.VUE_APP_IDPS_FACEBOOK
  }
}
