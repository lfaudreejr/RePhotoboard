<template lang='pug'>
  v-toolbar(id="retoolbar" flat dense app color="grey lighten-5")
    v-btn(color="primary" icon small to='/')
      v-icon home
    v-toolbar-title(class="grey--text text--darken-1 hidden-xs-only") {{title}}
    v-spacer
    <!-- <v-toolbar-items class="hidden-sm-and-down"> -->
      //- v-btn(round flat to="/") Home
    v-btn(v-if="authenticated" color="primary" icon small round @click="navigateRoute('/profile')")
      v-icon person
    v-btn(v-if="authenticated" color="grey" flat small round @click="logout") Logout
    v-btn(v-if="!authenticated" color="grey" flat small round @click="navigateRoute('/login')") Login
    v-btn(v-if="!authenticated" color="grey" flat small round @click="navigateRoute('/register')") Register
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
        this.$bus.$emit('snackbar', {
          message: 'Logged out!',
          show: true,
          color: 'success'
        })
        this.$router.push('/login')
      }).catch(err => {
        console.error(err)
        this.$bus.$emit('snackbar', {
          message: 'There was an error',
          show: true,
          color: 'success'
        })
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

<style lang="scss" scoped>
#retoolbar {
  border-bottom: 2px solid #EEEEEE !important;
}
</style>
