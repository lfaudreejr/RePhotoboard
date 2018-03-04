<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 v-for="i in 5" :key="i">
        <!-- Replace with just a pin image -->
        Small Pin image
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Pin from '@/components/Pin'

export default {
  components: {
    Pin
  }
}
</script>

<style scoped>

</style>
