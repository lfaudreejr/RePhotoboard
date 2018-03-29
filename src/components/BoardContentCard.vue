<template lang='pug'>
  div.card-wrapper(@click='visitBoard()')
    div.card-item
      <!-- wrap in a router -->
      div.m-0.p-0
        <!-- Should contain 6 images -->
        div.card-inner-wrapper
          board-content-grid(:pins='board.board_pins')
      div.card-title.grey--text.text--darken-1 {{board.title}}
</template>

<script>
import BoardContentGrid from '@/components/BoardContentGrid'

export default {
  components: {
    BoardContentGrid
  },
  methods: {
    visitBoard: function () {
      this.$router.push({name: 'board', params: { board: this.board._id }})
    }
  },
  props: {
    board: {
      type: Object,
      default: {},
      title: {
        type: String,
        default: ''
      }
    }
  }
}
</script>

<style scoped>
.card-inner-wrapper {
  text-shadow: 0 1px #fff;
  overflow: hidden;
  height: 199px;
}
</style>
