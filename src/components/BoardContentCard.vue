<template lang='pug'>
  div.mx-auto
    div.board-card-wrapper(@click.prevent='visitBoard()' @mouseenter="toggleEditButton" @mouseleave="toggleEditButton")
      div.card-item
        <!-- wrap in a router -->
        div.m-0.p-0
          <!-- Should contain 6 images -->
          div.card-inner-wrapper
            board-content-card-grid(:pins='board.board_pins')
        v-layout(row)
          v-flex(xs10)
            div.card-title.grey--text.text--darken-1 {{board.title}}
          v-flex(xs2)
            v-btn.edit-button.grey--text.text--darken-1(icon @click.stop.prevent="toggleEditModal" v-show="showEditButton")
              v-icon edit

    BoardEditModal(v-model="showEditModal" :board="board")
</template>

<script>
import BoardContentCardGrid from '@/components/BoardContentCardGrid'
import BoardEditModal from '@/components/BoardEditModal'

export default {
  components: {
    BoardContentCardGrid,
    BoardEditModal
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
  data () {
    return {
      showEditModal: false,
      showEditButton: false
    }
  },
  methods: {
    visitBoard: function () {
      this.$router.push({name: 'board', params: { board: this.board._id }})
    },
    toggleEditModal () {
      this.showEditModal = !this.showEditModal
    },
    toggleEditButton () {
      this.showEditButton = !this.showEditButton
    }
  }
}
</script>

<style scoped>
.edit-button {
  z-index: 1000;
  position: relative;
  display: inline-block;
}
.board-card-wrapper {
  width: 301px;
}
</style>
