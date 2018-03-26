<template lang='pug'>
  div
    div.pin-list
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

@media (min-width: 375px) {
  .pin-list {
    float: left;
  }
  /* clear fix */
  .pin-list:after {
    content: '';
    display: block;
    clear: both;
  }
}
</style>
