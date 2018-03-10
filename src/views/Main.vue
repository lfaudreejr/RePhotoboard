<template lang='pug'>
  div
    <!-- Insert MasonryList -->
    v-container.main-container(fluid)
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
.main-container {
  margin-top: 70px;
}
</style>
