<template lang='pug'>
  v-container.boardlist-container(fluid :key=name)
    v-layout(row wrap)
      v-flex(xs12 sm6 md4)
        BoardCreateCard
      v-flex(xs12 sm6 md4 v-for="(board, idx) in boards" :key="idx")
        board-content-card(:board="board")
</template>

<script>
import BoardCreateCard from '@/components/BoardCreateCard'
import BoardContentCard from '@/components/BoardContentCard'

export default {
  name: 'board-list',
  props: {
    boards: {
      type: Array,
      default: []
    }
  },
  components: {
    BoardCreateCard,
    BoardContentCard
  }
}
</script>

<style scoped>

</style>
