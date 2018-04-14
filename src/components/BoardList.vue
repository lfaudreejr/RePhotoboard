<template lang='pug'>
  v-container.boardlist-container(fluid :key=name)
    v-layout(row wrap)
      v-flex(xs12 sm6 md4 lg3 xl2)
        BoardCreateCard
      v-flex(xs12 sm6 md4 lg3 xl2 v-for="(board, idx) in boards" :key="idx")
        board-content-card(:board="board")
</template>

<script>
import BoardCreateCard from '@/components/BoardCreateCard'
import BoardContentCard from '@/components/BoardContentCard'

export default {
  name: 'board-list',
  components: {
    BoardCreateCard,
    BoardContentCard
  },
  props: {
    boards: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>

</style>
