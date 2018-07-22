<template lang='pug'>
  div.form-wrapper
    v-container(grid-list-xl text-xs-center)
      v-layout(row wrap)
        v-flex(xs12 sm6 offset-sm3)
          v-card.center-screen.re-form(flat)
            v-card-title(primary-title)
              h3.diplay-1.mb-0.secondary--text Rephotoboard - Register
            v-card-text
              h5(v-if='error' style='color:red') {{error}}
              v-form(ref='registerForm' v-model='valid')
                v-text-field(label='username' v-model='username' :rules='usernameRules' required)
                v-text-field(label='email' v-model='email' :rules='emailRules' required)
                v-text-field(
                  label='password'
                  :append-icon="passwordHidden ? 'visibility' : 'visibility_off'"
                  :append-icon-cb="() => (passwordHidden = !passwordHidden)"
                  :type="passwordHidden ? 'password' : 'text'"
                  v-model='password'
                  :rules='passwordRules'
                  hint='Passwords must be at least 6 characters in length.'
                  persistent-hint
                  required)
                v-text-field(
                  label='confirm password'
                  :append-icon="confirmPasswordHidden ? 'visibility' : 'visibility_off'"
                  :append-icon-cb="() => (confirmPasswordHidden = !confirmPasswordHidden)"
                  :type="confirmPasswordHidden ? 'password' : 'text'"
                  v-model='confirmPassword'
                  :rules='confirmPasswordRules'
                  required
                  @keyup.enter.prevent='registerUser'
                  )
                v-card-actions
                  v-btn.primary(flat @click.prevent='registerUser') Submit
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
  name: 'Register',
  data () {
    return {
      valid: false,
      username: null,
      usernameRules: [
        (v) => !!v || 'Username is required'
      ],
      email: null,
      emailRules: [
        (v) => !!v || 'E-mail is required',
        // eslint-disable-next-line
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      password: null,
      passwordHidden: true,
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => (!!v && v.length >= 6) || 'Password must be atleast 6 characters'
      ],
      confirmPassword: null,
      confirmPasswordHidden: true,
      confirmPasswordRules: [
        (v) => !!v || 'Password is required',
        (v) => (v === this.password) || 'Passwords do not match'
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
      this.$refs.registerForm.reset()
    },
    resetFields () {
      this.username = null
      this.email = null
      this.password = null
      this.confirmPassword = null
    },
    registerUser () {
      if (this.$refs.registerForm.validate()) {
        this.$store.dispatch('auth/REGISTER_REQUEST', {
          username: this.username, email: this.email, password: this.password})
          .then((response) => {
            this.$router.push('/')
          }).catch((err) => {
            this.error = err.response.data.message
            this.clearForm()
            console.error(err)
            setTimeout(() => { this.error = '' }, 1000)
          })
      }
    }
  }
}
</script>

<style scoped>

</style>
