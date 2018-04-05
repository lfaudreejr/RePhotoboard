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
                v-flex(xs12)
                  v-text-field(
                    label="Title"
                    v-model="form.title"
                    :rules="rules.titleRules"
                    :hint="currentTitle"
                    persistent-hint
                    required
                  )
                v-divider
                v-flex(xs12)
                  v-text-field(
                    label="Description"
                    v-model="form.description"
                    :hint="currentDescription"
                    persistent-hint
                  )
                v-btn.grey--text.text--darken-1(flat @click="deleteBoard") Delete
                v-spacer
                v-btn.grey--text.text--darken-1(flat @click="cancel") Cancel
                v-btn(flat color="primary" @click="saveBoard") Save

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
      this.$emit('input')
    },
    cancel () {
      this.resetForm()
      this.close()
    },
    resetForm () {
      this.$refs.form.reset()
    },
    deleteBoard () {
      console.log('Deleting ', this.board)
      this.$store.dispatch('user/deleteBoard', {
        _id: this.board._id
      }).then((resp) => {
        console.log('delete resp ', resp)
        this.resetForm()
        this.close()
        this.$router.push(`/profile/${this.user.username}`)
      }).catch((err) => {
        console.error(err)
        this.resetForm()
        this.close()
        this.$router.push('/')
      })

      this.resetForm()
      this.close()
    },
    saveBoard () {
      console.log('Saving ', this.form.title, this.form.description)
      const isValid = this.$refs.form.validate()
      if (isValid) {
        console.log('Valid form')
        this.$store.dispatch('user/updateBoard', {
          _id: this.board._id,
          id: this.board.id,
          title: this.form.title,
          description: this.form.description,
          creator: this.user._id,
          board_pins: this.board.board_pins
        }).then(() => {
          this.resetForm()
          this.close()
          this.$router.push(`/profile/${this.user.username}`)
        }).catch((err) => {
          console.error(err)
          this.resetForm()
          this.close()
          this.$router.push('/')
        })
      } else {
        console.log('Invalid form')
      }
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
