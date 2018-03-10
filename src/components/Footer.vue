<template lang='pug'>
  v-footer.app(:fixed="fixed")
    span &copy; 2017
</template>

<script>
export default {
  data () {
    return {
      fixed: true
    }
  }
}
</script>

<style scoped>
.footer {
  padding: 15px;
}
</style>
