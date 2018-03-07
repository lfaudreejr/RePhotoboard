<template>
  <v-container class="pin-list-wrapper" :key=name>
    <!-- <v-layout row wrap> -->
      <!-- <v-flex xs12> -->
        <!-- Replace with just a pin image -->
        <masonry-grid></masonry-grid>
      <!-- </v-flex> -->
    <!-- </v-layout> -->
  </v-container>
</template>

<script>
import MasonryGrid from '@/components/MasonryGrid'

export default {
  name: 'pin-list',
  components: {
    MasonryGrid
  }
}
</script>

<style scoped>

</style>
