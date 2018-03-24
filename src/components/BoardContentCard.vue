<template lang='pug'>
  div.card-wrapper(@click='visitBoard()')
    div.card-item
      <!-- wrap in a router -->
      div.m-0.p-0
        <!-- Should contain 6 images -->
        div.card-inner-wrapper
          board-content-grid(:pins='board.pins')
      div.card-title {{board.title}}
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
  },
  mounted: function () {
    console.log('Boards', this.board)
  }
}
</script>

<style scoped>
.card-inner-wrapper {
  color: #746d6a;
  text-shadow: 0 1px #fff;
  overflow: hidden;
  height: 199px;
}
</style>
