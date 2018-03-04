<template>
  <v-container grid-list-md class="boardlist-container">
    <v-layout row wrap>
      <v-flex xs12 sm4>
        <create-card></create-card>
      </v-flex>
      <v-flex xs12 sm4 v-for="i in 15" :key="i">
        <div class="card-wrapper">
          <div class="item">
            <div class="card-inner"></div>
            <div class="card-title">Fake Card</div>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Board from '@/components/Board'
import CreateCard from '@/components/CreateCard'

export default {
  components: {
    Board,
    CreateCard
  }
}
</script>

<style scoped>
.boardlist-container {
  padding-bottom: 55px;
}
.card-wrapper {
  width: 305px;
  height: 205px;
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 70px;
}
.item {
  left: 0;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  -webkit-transform: translateZ(0);
  transform: translateZ(0px);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.item:hover {
  background-color: #e1f5fe;
}
.card-title {
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 18px;
  font-weight: 700;
}
.card-inner {
  width: 300px;
  height: 199px;
  border-radius: 8px;
  background-color: #efefef;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
}
</style>
