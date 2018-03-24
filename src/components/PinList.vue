<template lang='pug'>
  v-container(:key=name)
    v-layout(row wrap)
      v-flex(xs12 sm6 md4)
        PinCreateCard
        <!-- Replace with just a pin image -->
    masonry-grid(:pins="pins")
</template>

<script>
import MasonryGrid from '@/components/MasonryGrid'
import PinCreateCard from '@/components/PinCreateCard'

export default {
  name: 'pin-list',
  components: {
    MasonryGrid,
    PinCreateCard
  },
  props: {
    pins: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
