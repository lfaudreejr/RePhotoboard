<template lang='pug'>
  re-dialog(:value='value' width='500' @input='close')
    span.headline.grey--text.text--darken-1(slot='dialog-title') Create Pin
    v-form(ref='pinCreateForm' v-model='valid')
      v-text-field(
        label='Enter Pin Title'
        v-model='pinData.pinTitle'
        :rules='rules.pinTitleRules'
        required
      )
      v-text-field(label='Enter Pin Description' v-model='pinData.pinDescription')
      v-text-field(
        label='Enter Pin Url'
        v-model='pinData.pinUrl'
        :rules='rules.pinUrlRules'
        required
      )
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
  computed: {
    ...mapGetters({
      user: 'user/user'
    })
  },
  data () {
    return {
      valid: false,
      snackbar: false,
      snackbarTimeout: 3000,
      pinData: {
        pinTitle: '',
        pinDescription: '',
        pinUrl: ''
      },
      rules: {
        pinTitleRules: [
          (v) => !!v || 'Title required'
        ],
        pinUrlRules: [
          (v) => !!v || 'Url is required',
          // eslint-disable-next-line
          (v) => /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/.test(v) || 'Invalid Url'
        ]
      }
    }
  },
  methods: {
    save () {
      if (this.$refs.pinCreateForm.validate()) {
        this.$store.dispatch(
          'pins/createPin',
          {
            title: this.pinData.pinTitle,
            description: this.pinData.pinDescription,
            url: this.pinData.pinUrl,
            saved_by: this.user._id
          }
        )
          .then((pin) => {
            this.close()
            this.$router.push({path: `/pin/${pin._id}`})
          })
          .catch(err => {
            console.error(err)
            this.close()
          })
      }
    },
    close () {
      this.clear()
      this.$emit('input')
    },
    clear () {
      this.pinData = {}
      this.$refs.pinCreateForm.reset()
    }
  }
}
</script>

<style>

</style>
