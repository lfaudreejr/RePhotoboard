<template lang='pug'>
  v-container.app-container(fluid)

    v-progress-circular(v-if='loading' indeterminate)

    v-layout(v-else row)
      v-flex(x12 sm6 offset-sm3)
        div.pin-wrapper
          v-layout(row wrap)
            v-flex(xs12 sm6 md8)
              v-container.pin-img-container
                img(:src='pin.picture' width='100%')
            v-flex(xs12 sm6 md4)
              v-container.pin-side-container
                v-btn.pin-save-btn(block small color="error") Save
                  v-icon favorite
                h3 {{pin.title}}
                p saved by: {{pin.creator.username}}
                p {{pin.description}}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      pin: 'pins/pin'
    })
  },
  beforeMount () {
    this.fetchData()
  },
  data () {
    return {
      loading: true
    }
  },
  methods: {
    fetchData () {
      this.$store.dispatch('pins/getPin', this.$route.params.pin).then(() => {
        this.loading = false
      }).catch(err => {
        this.loading = false
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.pin-wrapper {
  border-radius: 8px;
  color: #746d6a;
  background: #EEEEEE;
}

.pin-img-container {
  max-width: 100%;
}

.pin-img-container img {
  border-radius: 8px;
}

.pin-side-container {
  padding: 15px;
}
.pin-side-container h3 {
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
