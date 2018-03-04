<template>

  <v-card>
    <v-card-text>Board Title</v-card-text>
    <v-layout>
      <v-flex xs12>
        <pin-list></pin-list>
      </v-flex>
    </v-layout>
  </v-card>

</template>

<script>
import PinList from '@/components/PinList'

export default {
  components: {
    PinList
  }
}
</script>

<style>

</style>
