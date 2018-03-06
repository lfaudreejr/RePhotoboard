<template>
  <v-toolbar color="primary" dark app>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/">Home</v-btn>
      <v-btn flat :to="{name: 'defaultProfileLanding', params: { id: 'fake_id' } }">Profile</v-btn>
      <v-btn
        flat
        v-if='authenticated'
        @click="logout"
      >
        Logout
      </v-btn>
      <v-btn
        flat
        v-if='!authenticated'
        to="/login"
      >
        Login
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
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
