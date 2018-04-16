<template lang='pug'>
  div.board-create-container(@click.stop='showDialog = true')
    CreateCard
      span.grey--text(slot='title') Create Board

    BoardCreateModal(v-model='showDialog')

</template>

<script>
import CreateCard from '@/components/CreateCard'
import BoardCreateModal from '@/components/BoardCreateModal'

export default {
  components: {
    CreateCard,
    BoardCreateModal
  },
  data () {
    return {
      showDialog: false
    }
  }
}
</script>

<style scoped>
.board-create-container {
  width: 301px;
}
</style>
