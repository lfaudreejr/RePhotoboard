<template lang='pug'>
  v-toolbar(color="primary" dark app)
    v-btn(icon to='/')
      v-icon home
    v-toolbar-title {{title}}
    v-spacer
    <!-- <v-toolbar-items class="hidden-sm-and-down"> -->
      //- v-btn(round flat to="/") Home
      v-btn(flat round v-if='authenticated' :to="{name: 'defaultProfileLanding', params: { id: 'fake_id' } }") Profile
      v-btn(flat v-if='authenticated' @click="logout") Logout
      v-btn(flat round v-if='!authenticated' to="/login") Login
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title: 'RePhotoboard',
      authenticated: false
    }
  },
  created () {
    this.isAuthenticated()
  },
  watch: {
    '$route': 'isAuthenticated'
  },
  methods: {
    async isAuthenticated () {
      this.authenticated = await this.$auth.isAuthenticated()
      if (this.authenticated) {
        const user = await this.$auth.getUser()
        return this.$store.dispatch('user/setUser', user)
      }
      return false
    },
    async logout () {
      await this.$auth.logout()
      await this.isAuthenticated()
      this.$store.dispatch('user/setUser', false)
      this.$router.push({name: 'main'})
    }
  }
}
</script>

<style>

</style>
