<template lang='pug'>
  v-layout(row justify-center)
    v-dialog(v-model='dialog' persistent max-width='290px')
      v-card
        v-card-title.headline Are you sure?
        v-card-text This is permanent.
        v-card-actions
          v-spacer
            v-btn(color='primary' flat @click.native='dialog = false') Cancel
            v-btn(color='secondary' flat @click.native='dialog = false') Ok
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  }
}
</script>

<style>

</style>
