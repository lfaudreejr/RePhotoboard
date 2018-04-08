<template lang="pug">
  v-layout(row justify-center)
    v-dialog(:value="value" max-width="900" @input='close')
      div.pin-edit-wrapper
        v-container
          v-toolbar(flat dense color="tertiary" @click.stop="close")
            v-toolbar-title.grey--text.text--darken-1 Edit this Pin
            v-spacer
            v-btn(icon @click="").grey--text.text--darken-1
              v-icon close
          v-divider

          v-layout(row wrap).pt-2
            v-flex(xs12 sm12 md6).pa-2
              img(:src="pin.url" :alt="pin.title").d-block.mx-auto

            v-flex(xs12 sm12 md6).pa-2

              v-form(@submit.prevent="submit" ref="form")
                v-container

                  v-text-field(
                    label="Title"
                    v-model="form.title"
                    :rules="rules.titleRules"
                    :hint="currentTitle"
                    persistent-hint
                    required
                  )
                  v-text-field(
                    label="Description"
                    v-model="form.description"
                    :hint="currentDescription"
                    persistent-hint
                  )
                  v-text-field(
                    label="Url"
                    v-model="form.url"
                    :hint="currentUrl"
                    persistent-hint
                  )
                v-layout.pa-0.mt-5
                  v-btn.grey--text.text--darken-1.pa-0.ma-0(
                    depressed
                    small
                    color="tertiary"
                    @click="deletePin"
                  ) Delete
                  v-spacer
                  v-btn.grey--text.text--darken-1.pa-0.ma-0(
                    depressed
                    small
                    color="tertiary"
                    @click="cancelEdit"
                  ) Cancel
                  v-btn.pa-0.ma-0(
                    depressed
                    small
                    color="primary"
                    @click="saveEdit"
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
    pin: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      form: {
        title: '',
        description: '',
        url: ''
      },
      rules: {
        titleRules: [(v) => !!v || 'This field is required']
      }
    }
  },
  computed: {
    currentTitle () {
      return `Current title: ${this.pin.title}`
    },
    currentDescription () {
      return `Current description: ${this.pin.description}`
    },
    currentUrl () {
      return `Current url: ${this.pin.url}`
    },
    ...mapGetters({
      user: 'user/user'
    })
  },
  methods: {
    close () {
      this.$emit('input')
    },
    cancelEdit () {
      this.resetForm()
      this.close()
    },
    resetForm () {
      this.$refs.form.reset()
    },
    deletePin () {
      console.log('Deleting ', this.pin)
      // this.$store.dispatch('', {
      //   _id: this.board._id
      // }).then((resp) => {
      //   console.log('delete resp ', resp)
      //   this.resetForm()
      //   this.close()
      //   this.$router.push(`/profile/${this.user.username}`)
      // }).catch((err) => {
      //   console.error(err)
      //   this.resetForm()
      //   this.close()
      //   this.$router.push('/')
      // })

      this.resetForm()
      this.close()
    },
    saveEdit () {
      console.log('Saving ', this.form.title, this.form.description)
      const isValid = this.$refs.form.validate()
      if (isValid) {
        console.log('Valid form')
        this.$store.dispatch('', {
          _id: this.pin._id,
          id: this.pin.id,
          title: this.form.title,
          description: this.form.description,
          saved_by: this.user._id,
          boards: this.pin.boards,
          pin_comments: this.pin.pin_comments
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

<style scoped>
.pin-edit-wrapper {
  border-radius: 8px;
  color: #746d6a;
  background: #EEEEEE;
}
.pin-edit-wrapper img {
  max-width: 100%;
  border-radius: 8px;
}
</style>
