<template lang='pug'>
  v-container.app-container(fluid)

    v-progress-circular(v-if='loading' indeterminate)

    v-layout(v-else row)
      v-flex(xs10 offset-xs1 sm10 offset-sm1 md8 offset-md2 lg6 offset-lg3)
        div.pin-wrapper
          v-layout(row wrap)
            v-flex(xs12 sm6 md7)
              v-container.pin-img-container
                img(:src='pin.url' width='100%')
            v-flex(xs12 sm6 md5)
              v-container
                re-pin-save-button(
                  v-if='isAuthenticated'
                  :pin='pin'
                  :block='true'
                  @click.native='openModal'
                  name='SAVE'
                )
                h3.pb-2.pt-2.mt-3 {{pin.title}}
                p saved by: {{pin.saved_by.username}}
                p {{pin.description}}

    PinSaveModal(v-model="showModal" :pin="pin")
</template>

<script>
import PinSaveModal from '@/components/PinSaveModal'
import { mapGetters } from 'vuex'

export default {
  components: {
    PinSaveModal
  },
  data () {
    return {
      loading: true,
      showModal: false
    }
  },
  computed: {
    ...mapGetters({
      pin: 'pins/pin',
      isAuthenticated: 'auth/isAuthenticated'
    })
  },
  beforeMount () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$store.dispatch('pins/getPin', this.$route.params.pin).then(() => {
        this.loading = false
      }).catch(err => {
        this.loading = false
        console.error(err)
      })
    },
    openModal () {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style scoped>
.pin-wrapper {
  border-radius: 8px;
  color: #746d6a;
  background: #EEEEEE;
  padding: 9
}

.pin-img-container {
  max-width: 100%;
}

.pin-img-container img {
  border-radius: 8px;
}

</style>
