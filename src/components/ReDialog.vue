<template lang='pug'>
  v-layout(row justify-center)
    v-dialog(
      :value='value'
      :max-width='width'
      @input='close'
    )
      v-card
        v-card-title(primary-title)
          slot(name='dialog-title')
        v-container
          slot
        v-card-actions
          v-spacer
          slot(name='dialog-actions')
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '500px'
    }
  },
  methods: {
    close () {
      this.$emit('input')
    }
  }
}
</script>

<style>

</style>
