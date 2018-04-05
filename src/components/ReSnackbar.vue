<template lang="pug">
  v-snackbar(
    :timeout="timeout"
    :color="color"
    :multi-line="mode === 'multi-line'"
    :verticle="mode === 'verticle'"
    :value="value"
  )
    slot(name="message")
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
  }
}
</script>

<style>

</style>
