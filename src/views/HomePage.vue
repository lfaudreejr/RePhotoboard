<template lang='pug'>
  v-container
    v-progress-circular(indeterminate size="75" v-if="isLoading" class="center-screen")
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
      pins: 'pins/pins',
      isLoading: 'loaders/isLoading'
    })
  },
  data () {
    return {
      url: '/profile'
    }
  },
  mounted () {
    this.$store.dispatch('pins/getPins')
  }
}
</script>

<style scoped>

</style>
