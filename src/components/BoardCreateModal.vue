<template lang='pug'>
  re-dialog(:value='value' max-width='500px' @input='close')
    span.headline.grey--text.text--darken-1(slot='dialog-title') Create Board
    v-form(ref='boardCreateForm' v-model='valid')
      v-text-field(label='Enter Board Name' v-model='title' :rules='boardTitleRules' required)
      v-text-field(label='Enter Board Description' v-model='description')
    div(slot='dialog-actions')
      v-btn(color='primary' flat @click.native='close') Cancel
      v-btn(color='primary' flat @click.native='save') Create
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      valid: true,
      title: '',
      description: '',
      boardTitleRules: [
        (v) => !!v || 'Title is required'
      ]
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/user'
    })
  },
  methods: {
    close () {
      this.clear()
      this.$emit('input')
    },
    clear () {
      this.title = ''
      this.description = ''
      this.$refs.boardCreateForm.reset()
    },
    save () {
      if (this.$refs.boardCreateForm.validate()) {
        this.$store.dispatch(
          'user/createBoard',
          {
            title: this.title,
            description: this.description,
            creator: this.user._id
          }
        )
          .then(() => {
            this.$bus.$emit('snackbar', {
              message: 'Board created!',
              show: true,
              color: 'success'
            })
            this.$store.dispatch('user/getUser').then(() => {
              this.close()
            })
          }).catch(err => {
            console.error(err)
            this.$bus.$emit('snackbar', {
              message: 'Error: ' + err.response.data.message,
              show: true,
              color: 'error'
            })
            this.close()
          })
      }
    }
  }
}
</script>

<style>

</style>

