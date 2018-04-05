<template lang='pug'>
  v-container.auth-cb-wrapper
    v-progress-linear(indeterminate)
</template>

<script>
export default {
  props: {
    provider: String
  },
  mounted: function () {
    const query = this.$route.fullPath.slice(this.$route.fullPath.indexOf('?'))
    const payload = { provider: this.provider, query: query }
    this.$store.dispatch('auth/OAUTH_LOGIN', payload).then((res) => {
      this.$router.push('/')
    }).catch(err => {
      console.error(err)
      this.$router.push('/login')
    })
  }
}
</script>

<style>
.auth-cb-wrapper {
  margin-top: 70px;
}
</style>
