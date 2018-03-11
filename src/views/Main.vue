<template lang='pug'>
  div
    <!-- Insert MasonryList -->
    v-container.app-container.fluid
      masonry-grid(:pins='pins')

</template>

<script>
import MasonryGrid from '@/components/MasonryGrid'
import { mapGetters } from 'vuex'

/**
 * The state of this component should be to pull in all cards from api
 */

export default {
  name: 'main',
  components: {
    MasonryGrid
  },
  computed: {
    ...mapGetters({
      pins: 'pins/pins'
    })
  },
  methods: {
    // getPins () {
    //   this.$http.get('/api/pin')
    //     .then(data => { this.pins = data.data.pins })
    //     .catch(err => { console.error(err) })
    // }
  },
  mounted () {
    this.$store.dispatch('pins/getPins')
  },
  data () {
    return {
      url: '/profile'
    }
  }
}
</script>

<style scoped>

</style>
