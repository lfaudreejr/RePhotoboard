<template lang='pug'>
  v-card(flat hover)
    v-card-media(:src="pin.picture")
    v-card-title {{pin.title}}
    v-card-text {{pin.description}}
</template>

<script>
export default {
  props: {
    pin: {
      type: Object,
      title: {
        type: String,
        required: true
      },
      picture: {
        type: String
      },
      description: {
        type: String
      },
      board: {
        type: String
      }
    }
  }
}
</script>

<style scoped>

</style>
