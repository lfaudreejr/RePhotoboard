<template lang='pug'>
  div(:key=name)
    <!-- <v-layout row wrap> -->
      <!-- <v-flex xs12> -->
        <!-- Replace with just a pin image -->
        masonry-grid(:pins="pins")
</template>

<script>
import MasonryGrid from '@/components/MasonryGrid'

export default {
  name: 'pin-list',
  components: {
    MasonryGrid
  },
  props: {
    pins: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
