<template lang="pug">
  v-layout(row justify-center)
    v-dialog(:value="value" max-width="500" @input='close')
      div.board-edit-wrapper
        v-container
          v-toolbar(flat dense color="tertiary" @click.stop="close")
            v-toolbar-title.grey--text.text--darken-1 Edit this board
            v-spacer
            v-btn(icon @click="")
              v-icon close
          v-divider

          v-form(@submit.prevent="submit" ref="form")
            v-container
              v-layout(row wrap)
                v-flex(xs12).pa-2
                  v-text-field(
                    label="Title"
                    v-model="form.title"
                    :rules="rules.titleRules"
                    :hint="currentTitle"
                    persistent-hint
                    required
                  )
                v-flex(xs12).pa-2
                  v-text-field(
                    label="Description"
                    v-model="form.description"
                    :hint="currentDescription"
                    persistent-hint
                  )
              v-layout.pa-0.mt-5
                v-btn.grey--text.text--darken-1.ma-0.pa-0(
                  depressed
                  small
                  color="tertiary"
                  @click="deleteBoard"
                ) Delete
                v-spacer
                v-btn.grey--text.text--darken-1.ma-0.pa-0(
                  depressed
                  small
                  color="tertiary"
                  @click="cancel"
                ) Cancel
                v-btn.ma-0.pa-0(
                  depressed
                  small
                  color="primary"
                  @click="saveBoard"
                ) Save

</template>

<script>
import {mapGetters} from 'vuex'

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    board: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      form: {
        title: '',
        description: ''
      },
      rules: {
        titleRules: [(v) => !!v || 'This field is required']
      }
    }
  },
  computed: {
    currentTitle () {
      return `Current title: ${this.board.title}`
    },
    currentDescription () {
      return `Current description: ${this.board.description}`
    },
    ...mapGetters({
      user: 'user/user'
    })
  },
  methods: {
    close () {
      this.resetForm()
      this.$emit('input')
    },
    cancel () {
      this.close()
    },
    resetForm () {
      this.$refs.form.reset()
    },
    deleteBoard () {
      this.$store.dispatch('user/deleteBoard', {
        _id: this.board._id
      }).then((resp) => {
        this.$bus.$emit('snackbar', {
          message: 'Board deleted.',
          show: true,
          color: 'success'
        })
        this.close()
        this.gotoUserProfile()
      }).catch((err) => {
        console.error(err)
        this.close()
        this.$router.push('/')
      })

      this.close()
    },
    saveBoard () {
      const isValid = this.$refs.form.validate()
      if (isValid) {
        this.$store.dispatch('user/updateBoard', {
          _id: this.board._id,
          id: this.board.id,
          title: this.form.title,
          description: this.form.description,
          creator: this.user._id,
          board_pins: this.board.board_pins
        }).then(() => {
          this.$bus.$emit('snackbar', {
            message: 'Board saved!',
            show: true,
            color: 'success'
          })
          this.close()
          this.gotoUserProfile()
        }).catch((err) => {
          console.error(err)
          this.close()
          this.reRoute('/')
        })
      } else {
        console.log('Invalid form')
      }
    },
    reRoute (path) {
      this.$router.push(path)
    },
    gotoUserProfile () {
      this.reRoute(`/profile/${this.user.username}`)
    }
  }
}
</script>

<style>
.board-edit-wrapper {
  border-radius: 8px;
  color: #746d6a;
  background: #EEEEEE;
}
</style>
