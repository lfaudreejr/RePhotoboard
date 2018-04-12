<template lang='pug'>
  v-container.auth-cb-wrapper
    v-layout(row)
      v-flex(xs12)
        v-progress-circular(indeterminate)
</template>

<script>
export default {
  props: {
    provider: String
  },
  mounted: function () {
    const query = this.$route.fullPath.slice(this.$route.fullPath.indexOf('?'))
    // const query = `?access_token=${this.$route.query.access_token}`
    const payload = { provider: this.provider, query: query }
    this.$store.dispatch('auth/OAUTH_LOGIN', payload).then((res) => {
      this.$router.push(`/auth/${this.provider}/callback`)
    }).catch(err => {
      console.error(err)
      this.$router.push('/')
    })
  }
}
</script>

<style scoped>
.auth-cb-wrapper {
  margin-top: 70px;
}
</style>
