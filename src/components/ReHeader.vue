<template lang='pug'>
  v-toolbar(color="primary" dark app)
    v-btn(icon small to='/')
      v-icon home
    v-toolbar-title {{title}}
    v-spacer
    <!-- <v-toolbar-items class="hidden-sm-and-down"> -->
      //- v-btn(round flat to="/") Home
    v-btn(v-if="authenticated" icon small round @click="navigateRoute('/profile')")
      v-icon person
    v-btn(v-if="authenticated" flat small round @click="logout") Logout
    v-btn(v-if="!authenticated" flat small round @click="navigateRoute('/login')") Login
    v-btn(v-if="!authenticated" flat small round @click="navigateRoute('/register')") Register
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  props: {
    authenticated: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      title: 'RePhotoboard'
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/user'
    })
  },
  methods: {
    async logout () {
      this.$store.dispatch('auth/LOGOUT').then(() => {
        this.$router.push('/login')
      }).catch(err => {
        console.error(err)
        this.$router.push('/login')
      })
    },
    navigateRoute (route) {
      if (route === '/profile') {
        this.$router.push({ path: `/profile/${this.user.username}` })
      } else {
        this.$router.push({ path: route })
      }
    }
  }
}
</script>

<style>

</style>
