<template lang='pug'>
  div.card-wrapper
    div.card-item
      <!-- wrap in a router -->
      div.card-inner
        <!-- Should contain 6 images -->
        div.card-inner-wrapper
          board-content-grid
      div.card-title {{board.title}}
</template>

<script>
import BoardContentGrid from '@/components/BoardContentGrid'

export default {
  components: {
    BoardContentGrid
  },
  props: {
    board: {
      type: Object,
      title: {
        type: String
      }
    }
  }
}
</script>

<style>
.card-inner-wrapper {
  background: #f4f4f4;
  color: #746d6a;
  text-shadow: 0 1px #fff;
  border: 1px solid #ccc;
  /* width: 100%; */
  /* height: 100%; */
  /* overflow: hidden; */
}
</style>
