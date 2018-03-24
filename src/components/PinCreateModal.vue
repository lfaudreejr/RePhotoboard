<template lang='pug'>
  re-dialog(:value='value' max-width='500px' @input='close')
    span.headline(slot='dialog-title') Create Pin
    v-text-field(label='Enter Pin Name' v-model='pinData.pinName' required)
    v-text-field(label='Enter Pin Url' v-model='pinData.pinUrl' required)
    div(slot='dialog-actions')
      v-btn(color='primary' flat @click.native='close') Cancel
      v-btn(color='primary' flat @click.native='close') Create
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.clear()
      this.$emit('input')
    },
    clear () {
      this.pinData = {}
    }
  },
  data () {
    return {
      pinData: {
        pinName: '',
        pinUrl: ''
      }
    }
  }
}
</script>

<style>

</style>
