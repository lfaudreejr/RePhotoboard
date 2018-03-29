<template lang='pug'>
  div.board-container(v-if="board")
    v-container
      h2.grey--text.text--darken-1 {{board[0].title}} - {{board[0].description}}
    v-layout
      v-flex(xs12)
        pin-list(:pins="board[0].board_pins")
</template>

<script>
import { mapGetters } from 'vuex'
import PinList from '@/components/PinList'

export default {
  components: {
    PinList
  },
  data () {
    return {
      board: null
    }
  },
  computed: {
    ...mapGetters({
      boards: 'user/boards'
    })
  },
  methods: {
    setBoard () {
      this.board = this.boards.filter(b => b._id === this.$route.params.board)
    }
  },
  mounted: function () {
    this.setBoard()
  }
}
</script>

<style scoped>
.board-container {
  margin-bottom: 55px;
}
</style>
