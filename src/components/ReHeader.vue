<template lang='pug'>
  v-toolbar(color="primary" dark app)
    v-btn(icon to='/')
      v-icon home
    v-toolbar-title {{title}}
    v-spacer
    <!-- <v-toolbar-items class="hidden-sm-and-down"> -->
      //- v-btn(round flat to="/") Home
      v-btn(flat round v-if='authenticated' @click="goToProfile()") Profile
      v-btn(flat v-if='authenticated' @click="logout") Logout
      v-btn(flat round v-if='!authenticated' to="/login") Login
      v-btn(flat round v-if='!authenticated' to="/register") Register
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
      this.$store.dispatch('auth/LOGOUT')
      this.$router.push('/login')
    },
    goToProfile () {
      // const end = this.user.email.indexOf('@')
      // this.$router.push({name: 'defaultProfileLanding', params: { id: this.user.email.slice(0, end) }})
      this.$router.push({name: 'defaultProfileLanding', params: { id: this.user.username }})
    }
  }
}
</script>

<style>

</style>
