<template lang='pug'>
  v-btn(block flat :style='btnStyle' :href='href')
    v-icon(left dark) {{icon}}
    slot
</template>

<script>
export default {
  props: {
    btnStyle: {
      type: String,
      default: 'color:#1dcaff'
    },
    href: {
      type: String,
      default: '#'
    },
    icon: {
      type: String,
      default: 'fa-home'
    }
  }
}
</script>

<style>

</style>
