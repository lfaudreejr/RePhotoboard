<template lang="pug">
  v-layout(row justify-center)
    v-dialog(:value="value" max-width="650" @input='close')
      div.pin-save-wrapper
          v-toolbar(flat dense color="tertiary")
            v-alert.my-warning.pa-1.ma-0(v-model="hasPin" type="info") Psst... You have saved this pin already.
            v-spacer
            v-btn(icon @click="close").grey--text.text--darken-1
              v-icon close
          v-divider

          v-layout(row wrap).pa-2
            v-flex(xs12 sm6).pa-1
              img(:src="pin.url" :alt="pin.title")
            v-flex(xs12 sm6).pa-1
              p.heading.text-xs-center Choose Board

              v-list(v-show="!createNewBoard")
                template(v-for="board in boards")
                  v-list-tile(:key="board.id" @click.stop.prevent="savePin(board.id)")
                    v-list-tile-title(v-html="board.title")
                v-list-tile(@click="toggleCreateBoard")
                  v-list-tile-title.primary--text Create Board

              div(v-if="createNewBoard")
                v-form(ref="savePinToNewBoardForm" v-model='valid')
                  v-text-field(
                    name="input-2"
                    label="New Board Title"
                    v-model="newBoardTitle"
                    class="input-group--focused"
                    :rules="newBoardSaveRules"
                  )
                  v-text-field(
                    name="input-3"
                    label="New Board Description"
                    v-model="newBoardDescription"
                    class="input-group--focused"
                  )
                v-layout.pa-0
                  v-spacer
                  v-btn(
                    depressed
                    small
                    color="tertiary"
                    @click="cancel"
                    ) Cancel
                  v-btn(
                    depressed
                    small
                    color="primary"
                    @click="saveToNewBoard"
                    ) Save
</template>

<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    pin: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      valid: true,
      hasPin: false,
      newBoardTitle: '',
      newBoardDescription: '',
      createNewBoard: false,
      newBoardSaveRules: [
        (value) => !!value || 'You must enter a title.',
        (value) => this.boards.every(b => b.title !== this.newBoardTitle) || 'You already have a board with this title.'
      ]

    }
  },
  computed: {
    ...mapGetters({
      boards: 'user/boards',
      user: 'user/user',
      pins: 'user/pins'
    })
  },
  updated () {
    this.hasThisPinAlready()
  },
  methods: {
    hasThisPinAlready () {
      const userBoards = this.boards.map(b => { return b.board_pins })
      const flattened = _.flatten(userBoards)

      if (flattened.every(p => p._id !== this.pin._id)) {
        this.hasPin = false
      } else {
        this.hasPin = true
      }
    },
    saveToNewBoard () {
      const newBoard = {
        title: this.newBoardTitle,
        description: this.newBoardDescription
      }
      if (this.$refs.savePinToNewBoardForm.validate()) {
        this.$store.dispatch(
          'user/createBoard',
          {
            title: newBoard.title,
            description: newBoard.description,
            creator: this.user._id
          }
        )
          .then(data => {
            return data.data
          })
          .then((board) => {
            this.savePin(board)
          })
      }
    },
    toggleCreateBoard () {
      this.createNewBoard = !this.createNewBoard
    },
    resetNewBoardInput () {
      this.newBoardTitle = ''
      this.newBoardDescription = ''
      this.$refs.savePinToNewBoardForm.reset()
    },
    cancel () {
      if (this.createNewBoard) {
        this.resetNewBoardInput()
        this.toggleCreateBoard()
      } else {
        this.close()
      }
    },
    close () {
      this.$emit('input')
    },
    savePin (board) {
      const boardFound = _.filter(this.boards, (v) => v.id === board)
      this.dispatchSave(boardFound[0])
    },
    dispatchSave (board) {
      let newPins = []
      if (board.board_pins) {
        newPins = board.board_pins.map(x => x)
      }
      newPins.push(this.pin._id)
      this.$store.dispatch('user/updateBoard', {
        _id: board._id,
        id: board.id,
        title: board.title,
        description: board.description,
        creator: this.user._id,
        board_pins: newPins
      }).then(() => {
        this.$router.push(`/profile/${this.user.username}`)
      }).catch((err) => {
        console.error(err)
        this.$router.push('/')
      })
    }
  }
}
</script>

<style scoped>
.pin-save-wrapper {
  border-radius: 8px;
  color: #746d6a;
  background: #EEEEEE;
  padding: 8px;
}

.pin-save-wrapper img {
  max-width: 100%;
  border-radius: 8px;
}

.my-warning {
  border-radius: 8px;
}
</style>
