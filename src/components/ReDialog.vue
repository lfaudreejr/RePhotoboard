<template lang='pug'>
  v-layout(row justify-center)
    v-dialog(
      :value='value'
      :max-width='width'
      @input='close'
    )
      v-card.re-dialog-wrapper.pa-3
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
.re-dialog-wrapper {
  border-radius: 8px;
  color: #746d6a;
  background: #EEEEEE;
}
</style>
