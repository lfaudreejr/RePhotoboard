<template lang="pug">
  v-layout(row justify-center)
    v-dialog(:value="value" max-width="900" @input='close')
      div.pin-save-wrapper
        v-container
          v-toolbar(flat dense color="tertiary")
            v-alert.my-warning.pa-1.mb-1.mt-1.ml-1(v-model="hasPin" type="info") Psst... You have saved this pin already.
            v-spacer
            v-btn(icon @click="close")
              v-icon close
          v-layout(row wrap)
            v-flex(xs12 sm6).pa-1
              img(:src="pin.url")
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
                  v-btn(
                    depressed
                    color="primary"
                    @click="saveToNewBoard"
                    ) Save
                  v-btn(
                    depressed
                    @click="cancel"
                    ) Cancel
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
        console.log('Does not have this pin ', this.pin)
        this.hasPin = false
      } else {
        console.log('Has this pin')
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
            console.log('new board created ', board)
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
      console.log('savePin board ', board)
      const boardFound = _.filter(this.boards, (v) => v.id === board)
      console.log('found ', boardFound)
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

<style>
.pin-save-wrapper {
  border-radius: 8px;
  color: #746d6a;
  background: #EEEEEE;
}

.pin-save-wrapper img {
  max-width: 100%;
  border-radius: 8px;
}

.my-warning {
  border-radius: 8px;
}
</style>
