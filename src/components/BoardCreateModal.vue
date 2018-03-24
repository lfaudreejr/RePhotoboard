<template lang='pug'>
  re-dialog(:value='value' max-width='500px' @input='close')
    span.headline(slot='dialog-title') Create Board
    v-text-field(label='Enter Board Name' v-model='boardName' required)
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
      this.boardName = ''
    }
  },
  data () {
    return {
      boardName: ''
    }
  }
}
</script>

<style>

</style>

