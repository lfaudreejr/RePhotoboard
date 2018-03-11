<template lang='pug'>
  v-container.boardlist-container(:key=name)
    v-layout(row wrap)
      v-flex(xs12 sm6 md4)
        create-card
      v-flex(xs12 sm6 md4 v-for="(board, idx) in boards" :key="idx")
        board-content-card(:board="board")
</template>

<script>
import CreateCard from '@/components/CreateCard'
import BoardContentCard from '@/components/BoardContentCard'

export default {
  name: 'board-list',
  props: {
    boards: {
      type: Array
    }
  },
  components: {
    CreateCard,
    BoardContentCard
  }
}
</script>

<style scoped>

</style>
