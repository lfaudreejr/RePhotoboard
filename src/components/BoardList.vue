<template>
  <v-container class="boardlist-container" :key=name>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4>
        <create-card></create-card>
      </v-flex>
      <v-flex xs12 sm6 md4 v-for="i in 15" :key="i">
        <content-card></content-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Board from '@/components/Board'
import CreateCard from '@/components/CreateCard'
import ContentCard from '@/components/ContentCard'

export default {
  name: 'board-list',
  components: {
    Board,
    CreateCard,
    ContentCard
  }
}
</script>

<style scoped>

</style>
