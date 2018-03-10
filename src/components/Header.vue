<template lang='pug'>
  v-toolbar(color="primary" dark app)
    v-btn(icon to='/')
      v-icon home
    v-toolbar-title {{title}}
    v-spacer
    <!-- <v-toolbar-items class="hidden-sm-and-down"> -->
      //- v-btn(round flat to="/") Home
      v-btn(round flat :to="{name: 'defaultProfileLanding', params: { id: 'fake_id' } }") Profile
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
    },
    async logout () {
      await this.$auth.logout()
      await this.isAuthenticated()
    }
  }
}
</script>

<style>

</style>
