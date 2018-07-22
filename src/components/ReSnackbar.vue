<template lang="pug">
  v-snackbar(
    :timeout="timeout"
    :color="color"
    :multi-line="mode === 'multi-line'"
    :verticle="mode === 'verticle'"
    :value="value"
    top
  )
    slot
    v-btn(dark flat @click.native="close") Close
</template>

<script>
export default {
  props: {
    timeout: {
      type: Number,
      default: 3000
    },
    color: {
      type: String,
      default: 'success'
    },
    mode: {
      type: String,
      default: 'multi-line'
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.$store.dispatch('snackbar/setSnackbar', {message: '', color: ''})
    }
  }
}
</script>

<style>

</style>
