<template lang='pug'>
  re-dialog(:value='value' max-width='500px' @input='close')
    span.headline.grey--text.text--darken-1(slot='dialog-title') Create Pin
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
  methods: {
    save () {
      this.$store.dispatch(
        'pins/createPin',
        {
          title: this.pinData.pinTitle.trim(),
          description: this.pinData.pinDescription.trim(),
          url: this.pinData.pinUrl.trim(),
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
    },
    close () {
      this.clear()
      this.$emit('input')
    },
    clear () {
      this.pinData = {}
    }
  },
  data () {
    return {
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
  }
}
</script>

<style>

</style>
