<template lang='pug'>
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
  name: 'Home',
  components: {
    MasonryGrid
  },
  computed: {
    ...mapGetters({
      pins: 'pins/pins'
    })
  },
  async mounted () {
    await this.$store.dispatch('pins/getPins')
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
