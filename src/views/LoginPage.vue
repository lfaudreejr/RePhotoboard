<template lang='pug'>
  div.form-wrapper
    v-container(grid-list-xl text-xs-center)
      v-layout(row wrap)
        v-flex(xs12 sm6 offset-sm3)
          v-card.center-screen.re-form(flat)
            v-card-title(primary-title)
              h3.diplay-1.mb-0.secondary--text Rephotoboard - Sign In
            v-card-text
              h5(v-if='error' style='color:red') {{error}}
              v-form(ref='loginForm' v-model='valid')
                v-text-field(label='username' v-model='username' :rules='usernameRules' required)
                v-text-field(
                  label='password'
                  :append-icon="passwordHidden ? 'visibility' : 'visibility_off'"
                  :append-icon-cb="() => (passwordHidden = !passwordHidden)"
                  :type="passwordHidden ? 'password' : 'text'"
                  v-model='password'
                  :rules='passwordRules'
                  @keyup.enter.prevent='logUserIn'
                  required)
                v-card-actions
                  v-btn.primary(flat @click.prevent='logUserIn') Submit
                  v-btn(flat @click.prevent='clearForm') Clear
                //- p.subheading.mt-3 OR
                //- social-button(btnStyle='color:#1dcaff' href='/connect/twitter' icon='fa-twitter')
                //-   span Sign In with Twitter
                //- social-button(btnStyle='color:#3b5998' href='/connect/facebook' icon='fa-facebook')
                //-   span Sign In with Facebook
                //- social-button(btnStyle='color:#000' href='/connect/github' icon='fa-github')
                //-   span Sign In with Github
                //- social-button(btnStyle='color:#4285F4' href='/connect/google' icon='fa-google')
                //-   span Sign In with Google
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      valid: false,
      username: null,
      usernameRules: [
        (v) => !!v || 'Username is required'
        // eslint-disable-next-line
        // (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      password: null,
      passwordHidden: true,
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => (!!v && v.length >= 6) || 'Password must be atleast 6 characters'
      ],
      error: ''
    }
  },
  computed: {
    ...mapGetters({
      authStatus: 'auth/authStatus'
    })
  },
  methods: {
    clearForm () {
      this.resetFields()
      this.$refs.loginForm.reset()
    },
    resetFields () {
      this.email = null
      this.password = null
    },
    logUserIn () {
      if (this.$refs.loginForm.validate()) {
        this.$store.dispatch('auth/LOGIN_REQUEST', {email: this.username.trim(), password: this.password.trim()})
          .then(() => {
            this.$router.push({path: '/'})
          })
          .catch((err) => {
            this.error = err.response.data.message
            this.clearForm()
            localStorage.removeItem('token')
            console.error(err)
            this.$store.commit('LOGIN_ERROR')
            setTimeout(() => { this.error = '' }, 1500)
          })
      }
    }
  }
}
</script>

<style scoped>

</style>
